"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5759],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(k,i(i({ref:t},f),{},{components:r})):a.createElement(k,i({ref:t},f))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},i="IConsumer.GetTopicPartitionsLag method",s={unversionedId:"reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/GetTopicPartitionsLag",id:"reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/GetTopicPartitionsLag",title:"IConsumer.GetTopicPartitionsLag method",description:"Gets the lag of each topic/partitions assigned",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/GetTopicPartitionsLag.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Consumers/IConsumer",slug:"/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/GetTopicPartitionsLag",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/GetTopicPartitionsLag",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/GetTopicPartitionsLag.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IConsumer.GetPosition method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/GetPosition"},next:{title:"IConsumer.GetWatermarkOffsets method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/GetWatermarkOffsets"}},l={},c=[{value:"Return Value",id:"return-value",level:2},{value:"See Also",id:"see-also",level:2}],f={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iconsumergettopicpartitionslag-method"},"IConsumer.GetTopicPartitionsLag method"),(0,n.kt)("p",null,"Gets the lag of each topic/partitions assigned"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public IEnumerable<TopicPartitionLag> GetTopicPartitionsLag()\n")),(0,n.kt)("h2",{id:"return-value"},"Return Value"),(0,n.kt)("p",null,"The list of topic, partition and lag"),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"class\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/TopicPartitionLag/"},"TopicPartitionLag")),(0,n.kt)("li",{parentName:"ul"},"interface\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IConsumer/"},"IConsumer")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Consumers"))))}u.isMDXComponent=!0}}]);