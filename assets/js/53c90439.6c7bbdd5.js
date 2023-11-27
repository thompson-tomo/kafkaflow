"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5746],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),p=r,m=u["".concat(c,".").concat(p)]||u[p]||f[p]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},92089:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},i="BatchingExtensions.AddBatching method",l={unversionedId:"reference/KafkaFlow/KafkaFlow/BatchingExtensions/AddBatching",id:"reference/KafkaFlow/KafkaFlow/BatchingExtensions/AddBatching",title:"BatchingExtensions.AddBatching method",description:"Accumulates a group of messages to be passed as a batch to the next middleware as just one message",source:"@site/docs/reference/KafkaFlow/KafkaFlow/BatchingExtensions/AddBatching.md",sourceDirName:"reference/KafkaFlow/KafkaFlow/BatchingExtensions",slug:"/reference/KafkaFlow/KafkaFlow/BatchingExtensions/AddBatching",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/BatchingExtensions/AddBatching",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow/BatchingExtensions/AddBatching.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BatchingExtensions class",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/BatchingExtensions/"},next:{title:"BatchingExtensions.GetMessagesBatch method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/BatchingExtensions/GetMessagesBatch"}},c={},s=[{value:"See Also",id:"see-also",level:2}],d={toc:s};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"batchingextensionsaddbatching-method"},"BatchingExtensions.AddBatching method"),(0,r.kt)("p",null,"Accumulates a group of messages to be passed as a batch to the next middleware as just one message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IConsumerMiddlewareConfigurationBuilder AddBatching(\n    this IConsumerMiddlewareConfigurationBuilder builder, int batchSize, TimeSpan batchTimeout)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"builder"),(0,r.kt)("td",{parentName:"tr",align:null},"The configuration builder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batchSize"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum size of the batch, when this limit is reached the next middleware will be called")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batchTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum time the middleware will wait to call the next middleware")))),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"class\xa0",(0,r.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/BatchingExtensions/"},"BatchingExtensions")),(0,r.kt)("li",{parentName:"ul"},"namespace\xa0",(0,r.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow"))))}f.isMDXComponent=!0}}]);