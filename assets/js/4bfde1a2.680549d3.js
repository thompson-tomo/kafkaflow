"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5439],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),k=n,m=u["".concat(c,".").concat(k)]||u[k]||f[k]||o;return a?r.createElement(m,i(i({ref:t},s),{},{components:a})):r.createElement(m,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},50968:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},i="TopicPartitionLag constructor",l={unversionedId:"reference/KafkaFlow/KafkaFlow.Consumers/TopicPartitionLag/TopicPartitionLag",id:"reference/KafkaFlow/KafkaFlow.Consumers/TopicPartitionLag/TopicPartitionLag",title:"TopicPartitionLag constructor",description:"Initializes a new instance of the TopicPartitionLag class.",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Consumers/TopicPartitionLag/TopicPartitionLag.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Consumers/TopicPartitionLag",slug:"/reference/KafkaFlow/KafkaFlow.Consumers/TopicPartitionLag/",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/TopicPartitionLag/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Consumers/TopicPartitionLag/TopicPartitionLag.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IMessageConsumer.WorkersCount property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/WorkersCount"},next:{title:"TopicPartitionLag.Lag property",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/TopicPartitionLag/Lag"}},c={},p=[{value:"See Also",id:"see-also",level:2}],s={toc:p};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"topicpartitionlag-constructor"},"TopicPartitionLag constructor"),(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",{parentName:"p",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/TopicPartitionLag/"},(0,n.kt)("inlineCode",{parentName:"a"},"TopicPartitionLag"))," class."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public TopicPartitionLag(string topic, int partition, long lag)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"topic"),(0,n.kt)("td",{parentName:"tr",align:null},"The topic name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"partition"),(0,n.kt)("td",{parentName:"tr",align:null},"The partition value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lag"),(0,n.kt)("td",{parentName:"tr",align:null},"The lag value")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"class\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/TopicPartitionLag/"},"TopicPartitionLag")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Consumers"))))}f.isMDXComponent=!0}}]);