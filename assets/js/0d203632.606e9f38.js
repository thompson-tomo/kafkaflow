"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2324],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=t.createContext({}),s=function(e){var r=t.useContext(f),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(f.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,f=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,k=p["".concat(f,".").concat(d)]||p[d]||c[d]||a;return n?t.createElement(k,i(i({ref:r},u),{},{components:n})):t.createElement(k,i({ref:r},u))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var f in r)hasOwnProperty.call(r,f)&&(l[f]=r[f]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},66235:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>f,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=n(87462),o=(n(67294),n(3905));const a={},i="IConsumerConfiguration.PartitionsRevokedHandlers property",l={unversionedId:"reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/PartitionsRevokedHandlers",id:"reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/PartitionsRevokedHandlers",title:"IConsumerConfiguration.PartitionsRevokedHandlers property",description:"Gets the handlers that will be called when the partitions are revoked",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/PartitionsRevokedHandlers.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration",slug:"/reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/PartitionsRevokedHandlers",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/PartitionsRevokedHandlers",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/PartitionsRevokedHandlers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IConsumerConfiguration.PartitionsAssignedHandlers property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/PartitionsAssignedHandlers"},next:{title:"IConsumerConfiguration.PendingOffsetsHandlers property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/PendingOffsetsHandlers"}},f={},s=[{value:"See Also",id:"see-also",level:2}],u={toc:s};function c(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iconsumerconfigurationpartitionsrevokedhandlers-property"},"IConsumerConfiguration.PartitionsRevokedHandlers property"),(0,o.kt)("p",null,"Gets the handlers that will be called when the partitions are revoked"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public IReadOnlyList<Action<IDependencyResolver, List<TopicPartitionOffset>>> \n    PartitionsRevokedHandlers { get; }\n")),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"interface\xa0",(0,o.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Configuration/IConsumerConfiguration/"},"IConsumerConfiguration")),(0,o.kt)("li",{parentName:"ul"},"namespace\xa0",(0,o.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Configuration"))))}c.isMDXComponent=!0}}]);