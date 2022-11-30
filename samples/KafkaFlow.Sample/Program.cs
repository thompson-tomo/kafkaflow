﻿namespace KafkaFlow.Sample
{
    using System;
    using System.Runtime.Serialization;
    using System.Threading.Tasks;
    using global::Microsoft.Extensions.DependencyInjection;
    using KafkaFlow.Producers;
    using KafkaFlow.Serializer;
    using KafkaFlow.TypedHandler;

    internal static class Program
    {
        private static async Task Main()
        {
            var services = new ServiceCollection();

            const string producerName = "PrintConsole";
            const string topicName = "sample-topic";

            services.AddKafka(
                kafka => kafka
                    .UseConsoleLog()
                    .AddCluster(
                        cluster => cluster
                            .WithBrokers(new[] { "localhost:9092" })
                            .CreateTopicIfNotExists(topicName, 6, 1)
                            .AddProducer(
                                producerName,
                                producer => producer
                                    .DefaultTopic(topicName)
                                    .AddMiddlewares(m => m.AddSerializer<ProtobufNetSerializer>())
                            )
                            .AddConsumer(
                                consumer => consumer
                                    .Topic(topicName)
                                    .WithGroupId("print-console-handler")
                                    .WithBufferSize(100)
                                    .WithWorkersCount(3)
                                    .AddMiddlewares(
                                        middlewares => middlewares
                                            .AddSerializer<ProtobufNetSerializer>()
                                            .AddTypedHandlers(h => h.AddHandler<PrintConsoleHandler>())
                                    )
                            )
                    )
            );

            var provider = services.BuildServiceProvider();

            var bus = provider.CreateKafkaBus();

            await bus.StartAsync();

            var producer = provider
                .GetRequiredService<IProducerAccessor>()
                .GetProducer(producerName);

            Console.WriteLine("Type the number of messages to produce or 'exit' to quit:");

            while (true)
            {
                var input = Console.ReadLine();

                if (int.TryParse(input, out var count))
                {
                    for (var i = 0; i < count; i++)
                    {
                        await producer.ProduceAsync(
                            topicName,
                            Guid.NewGuid().ToString(),
                            new TestMessage { Text = $"Message: {Guid.NewGuid()}" });
                    }
                }

                if (input!.Equals("exit", StringComparison.OrdinalIgnoreCase))
                {
                    await bus.StopAsync();
                    break;
                }
            }

            await Task.Delay(3000);
        }
    }

    [DataContract]
    public class TestMessage
    {
        [DataMember(Order = 1)]
        public string Text { get; set; }
    }

    public class PrintConsoleHandler : IMessageHandler<TestMessage>
    {
        public Task Handle(IMessageContext context, TestMessage message)
        {
            Console.WriteLine(
                "Partition: {0} | Offset: {1} | Message: {2}",
                context.ConsumerContext.Partition,
                context.ConsumerContext.Offset,
                message.Text);

            return Task.CompletedTask;
        }
    }
}
