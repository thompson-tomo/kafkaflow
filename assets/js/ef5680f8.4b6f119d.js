"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),f=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=f(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=f(n),p=a,k=d["".concat(s,".").concat(p)]||d[p]||c[p]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var f=2;f<i;f++)o[f]=n[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>f});var r=n(87462),a=(n(67294),n(3905));const i={},o="ConfigurationBuilderExtensions.WithPartitionsAssignedHandler method",l={unversionedId:"reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithPartitionsAssignedHandler",id:"reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithPartitionsAssignedHandler",title:"ConfigurationBuilderExtensions.WithPartitionsAssignedHandler method",description:"Adds a handler for the Kafka consumer partitions assigned",source:"@site/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithPartitionsAssignedHandler.md",sourceDirName:"reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions",slug:"/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithPartitionsAssignedHandler",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithPartitionsAssignedHandler",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithPartitionsAssignedHandler.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConfigurationBuilderExtensions.WithCustomFactory method (1 of 2)",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithCustomFactory"},next:{title:"ConfigurationBuilderExtensions.WithPartitionsRevokedHandler method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithPartitionsRevokedHandler"}},s={},f=[{value:"See Also",id:"see-also",level:2}],u={toc:f},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configurationbuilderextensionswithpartitionsassignedhandler-method"},"ConfigurationBuilderExtensions.WithPartitionsAssignedHandler method"),(0,a.kt)("p",null,"Adds a handler for the Kafka consumer partitions assigned"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IConsumerConfigurationBuilder WithPartitionsAssignedHandler(\n    this IConsumerConfigurationBuilder builder, \n    Action<IDependencyResolver, List<TopicPartition>> partitionsAssignedHandler)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"builder"),(0,a.kt)("td",{parentName:"tr",align:null},"The configuration builder")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"partitionsAssignedHandler"),(0,a.kt)("td",{parentName:"tr",align:null},"A handler for the consumer partitions assigned")))),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"class\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/"},"ConfigurationBuilderExtensions")),(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow"))))}c.isMDXComponent=!0}}]);