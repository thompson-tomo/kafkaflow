"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7005],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},f=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,k=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return a?n.createElement(k,l(l({ref:t},f),{},{components:a})):n.createElement(k,l({ref:t},f))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94465:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l="BatchingExtensions class",s={unversionedId:"reference/KafkaFlow/KafkaFlow/BatchingExtensions/BatchingExtensions",id:"reference/KafkaFlow/KafkaFlow/BatchingExtensions/BatchingExtensions",title:"BatchingExtensions class",description:"no needed",source:"@site/docs/reference/KafkaFlow/KafkaFlow/BatchingExtensions/BatchingExtensions.md",sourceDirName:"reference/KafkaFlow/KafkaFlow/BatchingExtensions",slug:"/reference/KafkaFlow/KafkaFlow/BatchingExtensions/",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/BatchingExtensions/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow/BatchingExtensions/BatchingExtensions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KafkaFlow",permalink:"/kafkaflow/docs/category/kafkaflow"},next:{title:"BatchingExtensions.AddBatching method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/BatchingExtensions/AddBatching"}},i={},c=[{value:"Public Members",id:"public-members",level:2},{value:"See Also",id:"see-also",level:2}],f={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"batchingextensions-class"},"BatchingExtensions class"),(0,r.kt)("p",null,"no needed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public static class BatchingExtensions\n")),(0,r.kt)("h2",{id:"public-members"},"Public Members"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"static\xa0",(0,r.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/BatchingExtensions/AddBatching"},"AddBatching"),"(\u2026)"),(0,r.kt)("td",{parentName:"tr",align:null},"Accumulates a group of messages to be passed as a batch to the next middleware as just one message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"static\xa0",(0,r.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/BatchingExtensions/GetMessagesBatch"},"GetMessagesBatch"),"(\u2026)"),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the accumulated IMessageContext grouped by batching middleware")))),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"namespace\xa0",(0,r.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow"))))}p.isMDXComponent=!0}}]);