"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9181],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>p});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},f=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},i=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),i=u(t),p=a,k=i["".concat(l,".").concat(p)]||i[p]||m[p]||o;return t?n.createElement(k,s(s({ref:r},f),{},{components:t})):n.createElement(k,s({ref:r},f))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=i;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}i.displayName="MDXCreateElement"},49809:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const o={},s="IConsumerAccessor interface",c={unversionedId:"reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/IConsumerAccessor",id:"reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/IConsumerAccessor",title:"IConsumerAccessor interface",description:"Provides access to the configured consumers",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/IConsumerAccessor.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor",slug:"/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/IConsumerAccessor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IConsumer.Subscription property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/Subscription"},next:{title:"IConsumerAccessor.All property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/All"}},l={},u=[{value:"Members",id:"members",level:2},{value:"See Also",id:"see-also",level:2}],f={toc:u};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iconsumeraccessor-interface"},"IConsumerAccessor interface"),(0,a.kt)("p",null,"Provides access to the configured consumers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IConsumerAccessor\n")),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/All"},"All"),"\xa0{\xa0get;\xa0}"),(0,a.kt)("td",{parentName:"tr",align:null},"Gets all configured consumers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/Item"},"Item"),"\xa0{\xa0get;\xa0}"),(0,a.kt)("td",{parentName:"tr",align:null},"Gets a consumer by its name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumerAccessor/GetConsumer"},"GetConsumer"),"(\u2026)"),(0,a.kt)("td",{parentName:"tr",align:null},"Gets a consumer by its name")))),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Consumers"))))}m.isMDXComponent=!0}}]);