"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4224],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>u});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=t.createContext({}),c=function(e){var r=t.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},p=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||f[u]||l;return a?t.createElement(m,s(s({ref:r},p),{},{components:a})):t.createElement(m,s({ref:r},p))}));function u(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},21841:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=a(87462),n=(a(67294),a(3905));const l={},s="IMessageTypeResolver interface",o={unversionedId:"reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/IMessageTypeResolver",id:"reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/IMessageTypeResolver",title:"IMessageTypeResolver interface",description:"Used by the serializer middleware to resolve the type when consuming and store it when producing",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/IMessageTypeResolver.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver",slug:"/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/IMessageTypeResolver.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SerializerProducerMiddleware.Invoke method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer/SerializerProducerMiddleware/Invoke"},next:{title:"IMessageTypeResolver.OnConsumeAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/OnConsumeAsync"}},i={},c=[{value:"Members",id:"members",level:2},{value:"See Also",id:"see-also",level:2}],p={toc:c};function f(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"imessagetyperesolver-interface"},"IMessageTypeResolver interface"),(0,n.kt)("p",null,"Used by the serializer middleware to resolve the type when consuming and store it when producing"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IMessageTypeResolver\n")),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"name"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/OnConsumeAsync"},"OnConsumeAsync"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the message type when consuming")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/OnProduceAsync"},"OnProduceAsync"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"Stores the message type somewhere when producing")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Middlewares.Serializer.Resolvers"))))}f.isMDXComponent=!0}}]);