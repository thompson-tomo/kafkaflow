"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},f=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=m(r),c=n,k=p["".concat(l,".").concat(c)]||p[c]||u[c]||o;return r?a.createElement(k,s(s({ref:t},f),{},{components:r})):a.createElement(k,s({ref:t},f))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var m=2;m<o;m++)s[m]=r[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},77030:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const o={},s="IMessageConsumer.GetOffsets method",i={unversionedId:"reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetOffsets",id:"reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetOffsets",title:"IMessageConsumer.GetOffsets method",description:"Look up the offsets for the given partitions by timestamp. The returned offset for each partition is the earliest offset whose timestamp is greater than or equal to the given timestamp in the corresponding partition.",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetOffsets.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer",slug:"/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetOffsets",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetOffsets",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetOffsets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IMessageConsumer.ConsumerName property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/ConsumerName"},next:{title:"IMessageConsumer.GetPosition method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetPosition"}},l={},m=[{value:"Return Value",id:"return-value",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Remarks",id:"remarks",level:2},{value:"See Also",id:"see-also",level:2}],f={toc:m},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"imessageconsumergetoffsets-method"},"IMessageConsumer.GetOffsets method"),(0,n.kt)("p",null,"Look up the offsets for the given partitions by timestamp. The returned offset for each partition is the earliest offset whose timestamp is greater than or equal to the given timestamp in the corresponding partition."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public List<TopicPartitionOffset> GetOffsets(\n    IEnumerable<TopicPartitionTimestamp> timestampsToSearch, TimeSpan timeout)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timestampsToSearch"),(0,n.kt)("td",{parentName:"tr",align:null},"The mapping from partition to the timestamp to look up.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeout"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum period of time the call may block.")))),(0,n.kt)("h2",{id:"return-value"},"Return Value"),(0,n.kt)("p",null,"A mapping from partition to the timestamp and offset of the first message with timestamp greater than or equal to the target timestamp."),(0,n.kt)("h2",{id:"exceptions"},"Exceptions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"exception"),(0,n.kt)("th",{parentName:"tr",align:null},"condition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"KafkaException"),(0,n.kt)("td",{parentName:"tr",align:null},"Thrown if the operation fails.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TopicPartitionOffsetException"),(0,n.kt)("td",{parentName:"tr",align:null},"Thrown if any of the constituent results is in error. The entire result (which may contain constituent results that are not in error) is available via the Results property of the exception.")))),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"The consumer does not need to be assigned to the requested partitions."),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"interface\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/"},"IMessageConsumer")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Consumers"))))}u.isMDXComponent=!0}}]);