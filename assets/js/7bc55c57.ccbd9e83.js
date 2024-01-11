"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9698],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,p=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(p,o(o({ref:t},f),{},{components:r})):n.createElement(p,o({ref:t},f))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={},o="ClusterConfigurationBuilderExtensions.EnableTelemetry method (1 of 2)",i={unversionedId:"reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/EnableTelemetry",id:"reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/EnableTelemetry",title:"ClusterConfigurationBuilderExtensions.EnableTelemetry method (1 of 2)",description:"See Also",source:"@site/docs/reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/EnableTelemetry.md",sourceDirName:"reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions",slug:"/reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/EnableTelemetry",permalink:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/EnableTelemetry",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/EnableTelemetry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ClusterConfigurationBuilderExtensions.EnableAdminMessages method",permalink:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/EnableAdminMessages"},next:{title:"IConsumerAdmin interface",permalink:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/"}},u={},s=[{value:"See Also",id:"see-also",level:2},{value:"See Also",id:"see-also-1",level:2}],f={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"clusterconfigurationbuilderextensionsenabletelemetry-method-1-of-2"},"ClusterConfigurationBuilderExtensions.EnableTelemetry method (1 of 2)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IClusterConfigurationBuilder EnableTelemetry(\n    this IClusterConfigurationBuilder cluster, string topicName)\n")),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"class\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/"},"ClusterConfigurationBuilderExtensions")),(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Admin/"},"KafkaFlow"))),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"clusterconfigurationbuilderextensionsenabletelemetry-method-2-of-2"},"ClusterConfigurationBuilderExtensions.EnableTelemetry method (2 of 2)"),(0,a.kt)("p",null,"Creates the telemetry producer and consumer to send and receive metric messages"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IClusterConfigurationBuilder EnableTelemetry(\n    this IClusterConfigurationBuilder cluster, string topicName, string consumerGroup, \n    TimeSpan? cleanRunInterval = default, TimeSpan? expiryTime = default, int topicPartition = 0)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cluster"),(0,a.kt)("td",{parentName:"tr",align:null},"The cluster configuration builder")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topicName"),(0,a.kt)("td",{parentName:"tr",align:null},"The topic to be used by the metric commands")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"consumerGroup"),(0,a.kt)("td",{parentName:"tr",align:null},"The consumer group prefix")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cleanRunInterval"),(0,a.kt)("td",{parentName:"tr",align:null},"How often run storage cleanup. Every 10 minutes by default")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiryTime"),(0,a.kt)("td",{parentName:"tr",align:null},"Cleanup will remove metrics older than specified interval. 6 hours by default")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topicPartition"),(0,a.kt)("td",{parentName:"tr",align:null},"The partition used to produce and consumer telemetry data")))),(0,a.kt)("h2",{id:"see-also-1"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"class\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow/ClusterConfigurationBuilderExtensions/"},"ClusterConfigurationBuilderExtensions")),(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Admin/"},"KafkaFlow"))))}m.isMDXComponent=!0}}]);