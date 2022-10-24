"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[654],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},d=Object.keys(e);for(t=0;t<d.length;t++)r=d[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)r=d[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),o=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=o(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,d=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=o(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||d;return r?t.createElement(h,i(i({ref:n},c),{},{components:r})):t.createElement(h,i({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var d=r.length,i=new Array(d);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<d;o++)i[o]=r[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4451:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var t=r(7462),a=(r(7294),r(3905));const d={sidebar_position:12},i="Typed Handler Middleware",l={unversionedId:"guides/typed-handler-middleware",id:"guides/typed-handler-middleware",title:"Typed Handler Middleware",description:"It's a middleware that calls different classes (the handlers) depending on the message type. It should be used when the topic has different messages types. When a message with a specific type arrives, the middleware will call the appropriate message handler for that message type. A message handler can be created by implementing the IMessageHandler interface. The handler's instance is created by the configured dependency injection container, any handler dependency will be injected through the constructor and the instance lifetime can be configured in the setup process. If there is no handler defined for the arriving message, it will be ignored.",source:"@site/docs/guides/typed-handler-middleware.md",sourceDirName:"guides",slug:"/guides/typed-handler-middleware",permalink:"/docs/guides/typed-handler-middleware",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/guides/typed-handler-middleware.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Serializer Middleware",permalink:"/docs/guides/serializer-middleware"}},s={},o=[{value:"Configuring",id:"configuring",level:3},{value:"Message Handler sample",id:"message-handler-sample",level:3}],c={toc:o};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typed-handler-middleware"},"Typed Handler Middleware"),(0,a.kt)("p",null,"It's a middleware that calls different classes (the handlers) depending on the message type. It should be used when the topic has different messages types. When a message with a specific type arrives, the middleware will call the appropriate message handler for that message type. A message handler can be created by implementing the ",(0,a.kt)("inlineCode",{parentName:"p"},"IMessageHandler<MessageType>")," interface. The handler's instance is created by the configured dependency injection container, any handler dependency will be injected through the constructor and the instance lifetime can be configured in the setup process. If there is no handler defined for the arriving message, it will be ignored."),(0,a.kt)("h3",{id:"configuring"},"Configuring"),(0,a.kt)("p",null,"There are three ways to add handlers to a consumer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AddHandler<HandlerType>()")," adds one handler per call"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AddHandlers(IEnumerable<Type> handlers)")," adds many handlers per call"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AddHandlersFromAssemblyOf<HandlerType>()")," adds all classes that implements ",(0,a.kt)("inlineCode",{parentName:"li"},"IMessageHandler")," interface of the assembly's given type")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'services.AddKafka(kafka => kafka\n    .AddCluster(cluster => cluster\n        .WithBrokers(new[] { "localhost:9092" })\n        .AddConsumer(consumer => consumer\n            ...\n            .AddMiddlewares(middlewares => middlewares\n                ...\n                .AddTypedHandlers(handlers => handlers\n                    .WithHandlerLifetime(InstanceLifetime.Singleton)\n                    .AddHandler<ProductCreatedHandler>()\n                    // or\n                    .AddHandlers( ... )\n                    // or\n                    .AddHandlersFromAssemblyOf<ProductCreatedHandler>()\n                )\n            )\n        )\n    )\n);\n')),(0,a.kt)("h3",{id:"message-handler-sample"},"Message Handler sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class ProductCreatedHandler : IMessageHandler<ProductCreatedEvent>\n{\n    public Task Handle(IMessageContext context, ProductCreatedEvent message)\n    {\n        ...\n    }\n}\n")))}p.isMDXComponent=!0}}]);