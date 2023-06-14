"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3555],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>p});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),f=u(r),p=n,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||o;return r?a.createElement(m,c(c({ref:t},i),{},{components:r})):a.createElement(m,c({ref:t},i))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},27117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={},c="BatchProduceItem constructor",l={unversionedId:"reference/KafkaFlow/KafkaFlow.Producers/BatchProduceItem/BatchProduceItem",id:"reference/KafkaFlow/KafkaFlow.Producers/BatchProduceItem/BatchProduceItem",title:"BatchProduceItem constructor",description:"Initializes a new instance of the BatchProduceItem class.",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceItem/BatchProduceItem.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Producers/BatchProduceItem",slug:"/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceItem/",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceItem/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceItem/BatchProduceItem.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BatchProduceExtension.BatchProduceAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceExtension/BatchProduceAsync"},next:{title:"BatchProduceItem.DeliveryReport property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceItem/DeliveryReport"}},s={},u=[{value:"See Also",id:"see-also",level:2}],i={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"batchproduceitem-constructor"},"BatchProduceItem constructor"),(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",{parentName:"p",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceItem/"},(0,n.kt)("inlineCode",{parentName:"a"},"BatchProduceItem"))," class."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public BatchProduceItem(string topic, object messageKey, object messageValue, \n    IMessageHeaders headers)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"topic"),(0,n.kt)("td",{parentName:"tr",align:null},"The destination topic")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"messageKey"),(0,n.kt)("td",{parentName:"tr",align:null},"The message partition key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"messageValue"),(0,n.kt)("td",{parentName:"tr",align:null},"The message content")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"headers"),(0,n.kt)("td",{parentName:"tr",align:null},"The message headers")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"class\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceItem/"},"BatchProduceItem")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Producers"))))}d.isMDXComponent=!0}}]);