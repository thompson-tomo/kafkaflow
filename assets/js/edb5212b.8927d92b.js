"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3260],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||f[m]||i;return t?n.createElement(g,o(o({ref:r},u),{},{components:t})):n.createElement(g,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72968:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={},o="ProducerConfigurationBuilderExtensions.AddSchemaRegistryJsonSerializer&lt;TMessage&gt; method",l={unversionedId:"reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ProducerConfigurationBuilderExtensions/AddSchemaRegistryJsonSerializer",id:"reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ProducerConfigurationBuilderExtensions/AddSchemaRegistryJsonSerializer",title:"ProducerConfigurationBuilderExtensions.AddSchemaRegistryJsonSerializer&lt;TMessage&gt; method",description:"Registers a middleware to serialize json messages using schema registry",source:"@site/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ProducerConfigurationBuilderExtensions/AddSchemaRegistryJsonSerializer.md",sourceDirName:"reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ProducerConfigurationBuilderExtensions",slug:"/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ProducerConfigurationBuilderExtensions/AddSchemaRegistryJsonSerializer",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ProducerConfigurationBuilderExtensions/AddSchemaRegistryJsonSerializer",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ProducerConfigurationBuilderExtensions/AddSchemaRegistryJsonSerializer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ProducerConfigurationBuilderExtensions class",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ProducerConfigurationBuilderExtensions/"},next:{title:"ConfluentJsonSerializer constructor (1 of 2)",permalink:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow.Serializer.SchemaRegistry/ConfluentJsonSerializer/"}},s={},c=[{value:"See Also",id:"see-also",level:2}],u={toc:c};function f(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"producerconfigurationbuilderextensionsaddschemaregistryjsonserializertmessage-method"},"ProducerConfigurationBuilderExtensions.AddSchemaRegistryJsonSerializer","<","TMessage",">"," method"),(0,a.kt)("p",null,"Registers a middleware to serialize json messages using schema registry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IProducerMiddlewareConfigurationBuilder AddSchemaRegistryJsonSerializer<TMessage>(\n    this IProducerMiddlewareConfigurationBuilder middlewares, JsonSerializerConfig config = null)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TMessage"),(0,a.kt)("td",{parentName:"tr",align:null},"The message type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,a.kt)("td",{parentName:"tr",align:null},"The middleware configuration builder")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config"),(0,a.kt)("td",{parentName:"tr",align:null},"The protobuf serializer configuration")))),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"class\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/KafkaFlow/ProducerConfigurationBuilderExtensions/"},"ProducerConfigurationBuilderExtensions")),(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Serializer.SchemaRegistry.ConfluentJson/"},"KafkaFlow"))))}f.isMDXComponent=!0}}]);