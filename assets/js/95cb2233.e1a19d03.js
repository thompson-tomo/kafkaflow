"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6780],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,p=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(p,i(i({ref:t},f),{},{components:r})):n.createElement(p,i({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49661:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},i="ConsumerThrottlingConfigurationBuilderExtensions.Throttle method",l={unversionedId:"reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/Throttle",id:"reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/Throttle",title:"ConsumerThrottlingConfigurationBuilderExtensions.Throttle method",description:"Configures consumer throttling using the specified configuration builder.",source:"@site/docs/reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/Throttle.md",sourceDirName:"reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions",slug:"/reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/Throttle",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/Throttle",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/Throttle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConsumerThrottlingConfigurationBuilderExtensions.OnConsumerLag method (1 of 2)",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/OnConsumerLag"},next:{title:"IKafkaBus interface",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/IKafkaBus/"}},u={},s=[{value:"Return Value",id:"return-value",level:2},{value:"See Also",id:"see-also",level:2}],f={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consumerthrottlingconfigurationbuilderextensionsthrottle-method"},"ConsumerThrottlingConfigurationBuilderExtensions.Throttle method"),(0,o.kt)("p",null,"Configures consumer throttling using the specified configuration builder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IConsumerMiddlewareConfigurationBuilder Throttle(\n    this IConsumerMiddlewareConfigurationBuilder middlewares, \n    Action<IConsumerThrottlingMetricConfigurationBuilder> builder)\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"middlewares"),(0,o.kt)("td",{parentName:"tr",align:null},"The consumer middleware configuration builder.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"builder"),(0,o.kt)("td",{parentName:"tr",align:null},"An action to configure consumer throttling.")))),(0,o.kt)("h2",{id:"return-value"},"Return Value"),(0,o.kt)("p",null,"The original consumer middleware configuration builder with the throttling middleware added."),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"interface\xa0",(0,o.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.ConsumerThrottling.Configuration/IConsumerThrottlingMetricConfigurationBuilder/"},"IConsumerThrottlingMetricConfigurationBuilder")),(0,o.kt)("li",{parentName:"ul"},"class\xa0",(0,o.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/"},"ConsumerThrottlingConfigurationBuilderExtensions")),(0,o.kt)("li",{parentName:"ul"},"namespace\xa0",(0,o.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow"))))}c.isMDXComponent=!0}}]);