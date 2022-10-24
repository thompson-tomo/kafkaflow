"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[598],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),d=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=d(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),l=d(t),f=o,m=l["".concat(u,".").concat(f)]||l[f]||p[f]||c;return t?n.createElement(m,s(s({ref:r},i),{},{components:t})):n.createElement(m,s({ref:r},i))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,s=new Array(c);s[0]=l;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var d=2;d<c;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},5073:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var n=t(7462),o=(t(7294),t(3905));const c={sidebar_position:10},s="Producers",a={unversionedId:"guides/producers",id:"guides/producers",title:"Producers",description:"To produce messages using KafkaFlow you have to configure the producers in the application setup. The producers also support Middlewares. You have two ways to configure the producers: name-based producer and type-based producer. I highly recommend the read of Confluent Producer documentation for better practices when producing messages.",source:"@site/docs/guides/producers.md",sourceDirName:"guides",slug:"/guides/producers",permalink:"/docs/guides/producers",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/guides/producers.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Middlewares",permalink:"/docs/guides/middlewares"},next:{title:"Serializer Middleware",permalink:"/docs/guides/serializer-middleware"}},u={},d=[{value:"Name-based producers",id:"name-based-producers",level:2},{value:"Type-based producers",id:"type-based-producers",level:2}],i={toc:d};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"producers"},"Producers"),(0,o.kt)("p",null,"To produce messages using KafkaFlow you have to configure the producers in the application setup. The producers also support ",(0,o.kt)("a",{parentName:"p",href:"middlewares"},"Middlewares"),". You have two ways to configure the producers: ",(0,o.kt)("a",{parentName:"p",href:"#named-producers"},"name-based producer")," and ",(0,o.kt)("a",{parentName:"p",href:"#type-based-producers"},"type-based producer"),". I highly recommend the read of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/confluentinc/confluent-kafka-dotnet/wiki/Producer"},"Confluent Producer documentation")," for better practices when producing messages."),(0,o.kt)("h2",{id:"name-based-producers"},"Name-based producers"),(0,o.kt)("p",null,"Uses a name to bind the configuration to the producer instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddKafka( kafka => kafka\n            .AddCluster(cluster => cluster\n                .WithBrokers(new[] { "localhost:9092" })\n                .AddProducer(\n                    "product-events" //the producer name\n                    producer => producer\n                    ...\n                )\n            )\n        );\n    }\n}\n\npublic class ProductService : IProductService\n{\n    private readonly IProducerAccessor producers;\n\n    public ProductEventsProducer(IProducerAccessor producers)\n    {\n        this.producers = producers;\n    }\n\n    public Task CreateProduct(Create)\n    {\n        ...\n        await this.producers["product-events"].ProduceAsync(event.ProductId.ToString(), event);\n        ...\n    }        \n}\n')),(0,o.kt)("h2",{id:"type-based-producers"},"Type-based producers"),(0,o.kt)("p",null,"Uses a class to bind the configuration to the producer instance, this is commonly used when you create a producer class to uncouple the framework stuff of your service classes. For example, you have a ",(0,o.kt)("inlineCode",{parentName:"p"},"ProductEventsProducer")," in your app, you can use this class when configuring the producer to bind the configuration with the instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"IMessageProducer<ProductEventsProducer>"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddKafka(kafka => kafka\n            .AddCluster(cluster => cluster\n                .WithBrokers(new[] { "localhost:9092" })\n                .AddProducer<ProductEventsProducer>(\n                    producer => producer\n                    ...\n                )\n            )\n        );\n    }\n}\n\npublic class ProductEventsProducer : IProductEventsProducer\n{\n    private readonly IMessageProducer<ProductEventsProducer> producer;\n\n    public ProductEventsProducer(IMessageProducer<ProductEventsProducer> producer)\n    {\n        this.producer = producer;\n    }\n\n    public Task ProduceAync(IProductEvent event) =>\n        this.producer.ProduceAsync(event.ProductId.ToString(), event);\n}\n')))}p.isMDXComponent=!0}}]);