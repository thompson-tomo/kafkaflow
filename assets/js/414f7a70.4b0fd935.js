"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4197],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),f=s(r),p=n,k=f["".concat(u,".").concat(p)]||f[p]||d[p]||o;return r?a.createElement(k,c(c({ref:t},i),{},{components:r})):a.createElement(k,c({ref:t},i))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},c="BatchProduceExtension.BatchProduceAsync method",l={unversionedId:"reference/KafkaFlow/KafkaFlow.Producers/BatchProduceExtension/BatchProduceAsync",id:"reference/KafkaFlow/KafkaFlow.Producers/BatchProduceExtension/BatchProduceAsync",title:"BatchProduceExtension.BatchProduceAsync method",description:"Calls the Produce() method in loop for high throughput scenarios",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceExtension/BatchProduceAsync.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Producers/BatchProduceExtension",slug:"/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceExtension/BatchProduceAsync",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceExtension/BatchProduceAsync",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceExtension/BatchProduceAsync.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BatchProduceExtension class",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceExtension/"},next:{title:"BatchProduceItem constructor",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceItem/"}},u={},s=[{value:"Return Value",id:"return-value",level:2},{value:"See Also",id:"see-also",level:2}],i={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"batchproduceextensionbatchproduceasync-method"},"BatchProduceExtension.BatchProduceAsync method"),(0,n.kt)("p",null,"Calls the Produce() method in loop for high throughput scenarios"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public static Task<IReadOnlyCollection<BatchProduceItem>> BatchProduceAsync(\n    this IMessageProducer producer, IReadOnlyCollection<BatchProduceItem> items, \n    bool throwIfAnyProduceFail = true)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"producer"),(0,n.kt)("td",{parentName:"tr",align:null},"The producer instance")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"items"),(0,n.kt)("td",{parentName:"tr",align:null},"All messages to produce")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"throwIfAnyProduceFail"),(0,n.kt)("td",{parentName:"tr",align:null},"indicates if the method should throw a ",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceException/"},(0,n.kt)("inlineCode",{parentName:"a"},"BatchProduceException"))," if any message fail")))),(0,n.kt)("h2",{id:"return-value"},"Return Value"),(0,n.kt)("p",null,"A Task that will be marked as completed when all produce operations end"),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"class\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceItem/"},"BatchProduceItem")),(0,n.kt)("li",{parentName:"ul"},"interface\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/IMessageProducer/"},"IMessageProducer")),(0,n.kt)("li",{parentName:"ul"},"class\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Producers/BatchProduceExtension/"},"BatchProduceExtension")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Producers"))))}d.isMDXComponent=!0}}]);