"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7203],{3905:(e,r,a)=>{a.d(r,{Zo:()=>s,kt:()=>f});var t=a(67294);function l(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){l(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function d(e,r){if(null==e)return{};var a,t,l=function(e,r){if(null==e)return{};var a,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(l[a]=e[a]);return l}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=t.createContext({}),u=function(e){var r=t.useContext(o),a=r;return e&&(a="function"==typeof e?e(r):n(n({},r),e)),a},s=function(e){var r=u(e.components);return t.createElement(o.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=u(a),f=l,m=c["".concat(o,".").concat(f)]||c[f]||p[f]||i;return a?t.createElement(m,n(n({ref:r},s),{},{components:a})):t.createElement(m,n({ref:r},s))}));function f(e,r){var a=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var i=a.length,n=new Array(i);n[0]=c;var d={};for(var o in r)hasOwnProperty.call(r,o)&&(d[o]=r[o]);d.originalType=e,d.mdxType="string"==typeof e?e:l,n[1]=d;for(var u=2;u<i;u++)n[u]=a[u];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},66292:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var t=a(87462),l=(a(67294),a(3905));const i={},n="ProducerMiddlewareConfigurationBuilder.AddSingleTypeSerializer&lt;TSerializer&gt; method (1 of 4)",d={unversionedId:"reference/KafkaFlow.Serializer/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSingleTypeSerializer",id:"reference/KafkaFlow.Serializer/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSingleTypeSerializer",title:"ProducerMiddlewareConfigurationBuilder.AddSingleTypeSerializer&lt;TSerializer&gt; method (1 of 4)",description:"Register a middleware to serialize the message to a fixed type",source:"@site/docs/reference/KafkaFlow.Serializer/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSingleTypeSerializer.md",sourceDirName:"reference/KafkaFlow.Serializer/KafkaFlow/ProducerMiddlewareConfigurationBuilder",slug:"/reference/KafkaFlow.Serializer/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSingleTypeSerializer",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSingleTypeSerializer",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Serializer/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSingleTypeSerializer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ProducerMiddlewareConfigurationBuilder.AddSerializer&lt;TSerializer&gt; method (1 of 4)",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/ProducerMiddlewareConfigurationBuilder/AddSerializer"},next:{title:"SerializerConsumerMiddleware constructor (1 of 2)",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/SerializerConsumerMiddleware/"}},o={},u=[{value:"See Also",id:"see-also",level:2},{value:"See Also",id:"see-also-1",level:2},{value:"See Also",id:"see-also-2",level:2},{value:"See Also",id:"see-also-3",level:2}],s={toc:u};function p(e){let{components:r,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"producermiddlewareconfigurationbuilderaddsingletypeserializertserializer-method-1-of-4"},"ProducerMiddlewareConfigurationBuilder.AddSingleTypeSerializer","<","TSerializer",">"," method (1 of 4)"),(0,l.kt)("p",null,"Register a middleware to serialize the message to a fixed type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IProducerMiddlewareConfigurationBuilder AddSingleTypeSerializer<TSerializer>(\n    this IProducerMiddlewareConfigurationBuilder middlewares, Type messageType)\n    where TSerializer : class, ISerializer\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSerializer"),(0,l.kt)("td",{parentName:"tr",align:null},"A class that implements ISerializer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,l.kt)("td",{parentName:"tr",align:null},"The middleware configuration builder")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"messageType"),(0,l.kt)("td",{parentName:"tr",align:null},"The message type")))),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"class\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/ProducerMiddlewareConfigurationBuilder/"},"ProducerMiddlewareConfigurationBuilder")),(0,l.kt)("li",{parentName:"ul"},"namespace\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/"},"KafkaFlow"))),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"producermiddlewareconfigurationbuilderaddsingletypeserializertserializer-method-2-of-4"},"ProducerMiddlewareConfigurationBuilder.AddSingleTypeSerializer","<","TSerializer",">"," method (2 of 4)"),(0,l.kt)("p",null,"Register a middleware to serialize the message to a fixed type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IProducerMiddlewareConfigurationBuilder AddSingleTypeSerializer<TSerializer>(\n    this IProducerMiddlewareConfigurationBuilder middlewares, \n    Factory<TSerializer> serializerFactory, Type messageType)\n    where TSerializer : class, ISerializer\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSerializer"),(0,l.kt)("td",{parentName:"tr",align:null},"A class that implements ISerializer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,l.kt)("td",{parentName:"tr",align:null},"The middleware configuration builder")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serializerFactory"),(0,l.kt)("td",{parentName:"tr",align:null},"A factory to create a ISerializer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"messageType"),(0,l.kt)("td",{parentName:"tr",align:null},"The message type")))),(0,l.kt)("h2",{id:"see-also-1"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"class\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/ProducerMiddlewareConfigurationBuilder/"},"ProducerMiddlewareConfigurationBuilder")),(0,l.kt)("li",{parentName:"ul"},"namespace\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/"},"KafkaFlow"))),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"producermiddlewareconfigurationbuilderaddsingletypeserializertmessagetserializer-method-3-of-4"},"ProducerMiddlewareConfigurationBuilder.AddSingleTypeSerializer","<","TMessage,TSerializer",">"," method (3 of 4)"),(0,l.kt)("p",null,"Register a middleware to serialize the message to a fixed type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IProducerMiddlewareConfigurationBuilder \n    AddSingleTypeSerializer<TMessage, TSerializer>(\n    this IProducerMiddlewareConfigurationBuilder middlewares)\n    where TSerializer : class, ISerializer\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TMessage"),(0,l.kt)("td",{parentName:"tr",align:null},"The message type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSerializer"),(0,l.kt)("td",{parentName:"tr",align:null},"A class that implements ISerializer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,l.kt)("td",{parentName:"tr",align:null},"The middleware configuration builder")))),(0,l.kt)("h2",{id:"see-also-2"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"class\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/ProducerMiddlewareConfigurationBuilder/"},"ProducerMiddlewareConfigurationBuilder")),(0,l.kt)("li",{parentName:"ul"},"namespace\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/"},"KafkaFlow"))),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"producermiddlewareconfigurationbuilderaddsingletypeserializertmessagetserializer-method-4-of-4"},"ProducerMiddlewareConfigurationBuilder.AddSingleTypeSerializer","<","TMessage,TSerializer",">"," method (4 of 4)"),(0,l.kt)("p",null,"Register a middleware to serialize the message to a fixed type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IProducerMiddlewareConfigurationBuilder \n    AddSingleTypeSerializer<TMessage, TSerializer>(\n    this IProducerMiddlewareConfigurationBuilder middlewares, \n    Factory<TSerializer> serializerFactory)\n    where TSerializer : class, ISerializer\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TMessage"),(0,l.kt)("td",{parentName:"tr",align:null},"The message type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TSerializer"),(0,l.kt)("td",{parentName:"tr",align:null},"A class that implements ISerializer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,l.kt)("td",{parentName:"tr",align:null},"The middleware configuration builder")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serializerFactory"),(0,l.kt)("td",{parentName:"tr",align:null},"A factory to create a ISerializer")))),(0,l.kt)("h2",{id:"see-also-3"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"class\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/KafkaFlow/ProducerMiddlewareConfigurationBuilder/"},"ProducerMiddlewareConfigurationBuilder")),(0,l.kt)("li",{parentName:"ul"},"namespace\xa0",(0,l.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer/"},"KafkaFlow"))))}p.isMDXComponent=!0}}]);