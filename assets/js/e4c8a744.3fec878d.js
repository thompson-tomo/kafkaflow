"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4762],{66712:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var o=n(85893),i=n(11151);const a={sidebar_position:8},s="Authentication",r={id:"guides/authentication",title:"Authentication",description:"To produce and consume messages to/from authenticated brokers you have to configure the cluster with security information in the application setup.",source:"@site/docs/guides/authentication.md",sourceDirName:"guides",slug:"/guides/authentication",permalink:"/kafkaflow/docs/guides/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/guides/authentication.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Dashboard",permalink:"/kafkaflow/docs/guides/admin/dashboard"},next:{title:"Global Events",permalink:"/kafkaflow/docs/guides/global-events"}},c={},u=[];function l(t){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"authentication",children:"Authentication"}),"\n",(0,o.jsx)(e.p,{children:"To produce and consume messages to/from authenticated brokers you have to configure the cluster with security information in the application setup."}),"\n",(0,o.jsxs)(e.p,{children:["KafkaFlow sends all the security information to ",(0,o.jsx)(e.a,{href:"https://github.com/confluentinc/confluent-kafka-dotnet",children:"Confluent Kafka Client"})," so more information about it can be found ",(0,o.jsx)(e.a,{href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md",children:"here"}),"."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-csharp",children:'  services.AddKafka(\n    kafka => kafka\n        .AddCluster(\n            cluster => cluster\n                .WithBrokers(new[] {"localhost:9092"})\n                .WithSchemaRegistry(config => config.Url = "localhost:8081")\n                .WithSecurityInformation(information =>\n                {\n                  information.SaslMechanism = SaslMechanism.Plain;\n                  information.SaslPassword = "pwd";\n                  information.SaslUsername = "user";\n                  information.SecurityProtocol = SecurityProtocol.SaslPlaintext;\n                  information.EnableSslCertificateVerification = true;\n                  ...\n                })\n                ...\n            ...\n'})})]})}function d(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>s});var o=n(67294);const i={},a=o.createContext(i);function s(t){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),o.createElement(a.Provider,{value:e},t.children)}}}]);