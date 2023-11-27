"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[945],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(r),k=a,p=f["".concat(s,".").concat(k)]||f[k]||m[k]||o;return r?n.createElement(p,l(l({ref:t},c),{},{components:r})):n.createElement(p,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},l="ConfigurationBuilderExtensions.WithConsumerLagWorkerBalancer method (1 of 2)",i={unversionedId:"reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithConsumerLagWorkerBalancer",id:"reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithConsumerLagWorkerBalancer",title:"ConfigurationBuilderExtensions.WithConsumerLagWorkerBalancer method (1 of 2)",description:"Configures the consumer to use the consumer's lag as a metric for dynamically calculating the number of workers for each application instance. The number of workers will be re-evaluated every 5 minutes.",source:"@site/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithConsumerLagWorkerBalancer.md",sourceDirName:"reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions",slug:"/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithConsumerLagWorkerBalancer",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithConsumerLagWorkerBalancer",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithConsumerLagWorkerBalancer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConfigurationBuilderExtensions.WithConsumerConfig method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithConsumerConfig"},next:{title:"ConfigurationBuilderExtensions.WithCustomFactory method (1 of 2)",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithCustomFactory"}},s={},u=[{value:"See Also",id:"see-also",level:2},{value:"See Also",id:"see-also-1",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configurationbuilderextensionswithconsumerlagworkerbalancer-method-1-of-2"},"ConfigurationBuilderExtensions.WithConsumerLagWorkerBalancer method (1 of 2)"),(0,a.kt)("p",null,"Configures the consumer to use the consumer's lag as a metric for dynamically calculating the number of workers for each application instance. The number of workers will be re-evaluated every 5 minutes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IConsumerConfigurationBuilder WithConsumerLagWorkerBalancer(\n    this IConsumerConfigurationBuilder builder, int totalWorkers, int minInstanceWorkers, \n    int maxInstanceWorkers)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"builder"),(0,a.kt)("td",{parentName:"tr",align:null},"The consumer's configuration builder.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"totalWorkers"),(0,a.kt)("td",{parentName:"tr",align:null},"The total number of workers to be distributed across all application instances. The sum of workers across all instances will approximate this number.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"minInstanceWorkers"),(0,a.kt)("td",{parentName:"tr",align:null},"The minimum number of workers for each application instance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"maxInstanceWorkers"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum number of workers for each application instance.")))),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"class\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/"},"ConfigurationBuilderExtensions")),(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow"))),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"configurationbuilderextensionswithconsumerlagworkerbalancer-method-2-of-2"},"ConfigurationBuilderExtensions.WithConsumerLagWorkerBalancer method (2 of 2)"),(0,a.kt)("p",null,"Configures the consumer to use the consumer's lag as a metric for dynamically calculating the number of workers for each application instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IConsumerConfigurationBuilder WithConsumerLagWorkerBalancer(\n    this IConsumerConfigurationBuilder builder, int totalWorkers, int minInstanceWorkers, \n    int maxInstanceWorkers, TimeSpan evaluationInterval)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"builder"),(0,a.kt)("td",{parentName:"tr",align:null},"The consumer's configuration builder.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"totalWorkers"),(0,a.kt)("td",{parentName:"tr",align:null},"The total number of workers to be distributed across all application instances. The sum of workers across all instances will approximate this number.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"minInstanceWorkers"),(0,a.kt)("td",{parentName:"tr",align:null},"The minimum number of workers for each application instance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"maxInstanceWorkers"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum number of workers for each application instance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"evaluationInterval"),(0,a.kt)("td",{parentName:"tr",align:null},"The interval at which the number of workers will be recalculated based on consumer's lag.")))),(0,a.kt)("h2",{id:"see-also-1"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"class\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/"},"ConfigurationBuilderExtensions")),(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow"))))}m.isMDXComponent=!0}}]);