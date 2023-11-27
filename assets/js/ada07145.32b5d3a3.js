"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5386],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),c=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=n,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||s;return t?a.createElement(m,o(o({ref:r},p),{},{components:t})):a.createElement(m,o({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=u;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},38133:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const s={},o="IMessageTypeResolver.OnConsumeAsync method",l={unversionedId:"reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/OnConsumeAsync",id:"reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/OnConsumeAsync",title:"IMessageTypeResolver.OnConsumeAsync method",description:"Returns the message type when consuming",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/OnConsumeAsync.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver",slug:"/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/OnConsumeAsync",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/OnConsumeAsync",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/OnConsumeAsync.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IMessageTypeResolver interface",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/"},next:{title:"IMessageTypeResolver.OnProduceAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/OnProduceAsync"}},i={},c=[{value:"See Also",id:"see-also",level:2}],p={toc:c};function f(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"imessagetyperesolveronconsumeasync-method"},"IMessageTypeResolver.OnConsumeAsync method"),(0,n.kt)("p",null,"Returns the message type when consuming"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public ValueTask<Type> OnConsumeAsync(IMessageContext context)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"context"),(0,n.kt)("td",{parentName:"tr",align:null},"The IMessageContext containing the message and the metadata")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"interface\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Middlewares.Serializer.Resolvers/IMessageTypeResolver/"},"IMessageTypeResolver")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow.Middlewares.Serializer.Resolvers"))))}f.isMDXComponent=!0}}]);