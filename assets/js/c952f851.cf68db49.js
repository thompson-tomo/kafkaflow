"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,p=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(p,s(s({ref:t},f),{},{components:n})):r.createElement(p,s({ref:t},f))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var m=2;m<o;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={},s="IConsumerAdmin.ResetOffsetsAsync method",i={unversionedId:"reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/ResetOffsetsAsync",id:"reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/ResetOffsetsAsync",title:"IConsumerAdmin.ResetOffsetsAsync method",description:"Reset the consumer partitions offset",source:"@site/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/ResetOffsetsAsync.md",sourceDirName:"reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin",slug:"/reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/ResetOffsetsAsync",permalink:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/ResetOffsetsAsync",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/ResetOffsetsAsync.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IConsumerAdmin.PauseConsumerGroupAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/PauseConsumerGroupAsync"},next:{title:"IConsumerAdmin.RestartConsumerAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/RestartConsumerAsync"}},l={},m=[{value:"See Also",id:"see-also",level:2}],f={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iconsumeradminresetoffsetsasync-method"},"IConsumerAdmin.ResetOffsetsAsync method"),(0,a.kt)("p",null,"Reset the consumer partitions offset"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public Task ResetOffsetsAsync(string consumerName, IEnumerable<string> topics)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"consumerName"),(0,a.kt)("td",{parentName:"tr",align:null},"The consumer unique name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topics"),(0,a.kt)("td",{parentName:"tr",align:null},"The topic names to reset")))),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"interface\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Admin/KafkaFlow.Admin/IConsumerAdmin/"},"IConsumerAdmin")),(0,a.kt)("li",{parentName:"ul"},"namespace\xa0",(0,a.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.Admin/"},"KafkaFlow.Admin"))))}c.isMDXComponent=!0}}]);