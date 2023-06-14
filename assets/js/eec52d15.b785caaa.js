"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6041],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,k=u["".concat(s,".").concat(m)]||u[m]||f[m]||l;return t?a.createElement(k,i(i({ref:r},c),{},{components:t})):a.createElement(k,i({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},93182:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const l={},i="ConfluentDeserializerWrapper.GetOrCreateDeserializer method",o={unversionedId:"reference/KafkaFlow.SchemaRegistry/KafkaFlow/ConfluentDeserializerWrapper/GetOrCreateDeserializer",id:"reference/KafkaFlow.SchemaRegistry/KafkaFlow/ConfluentDeserializerWrapper/GetOrCreateDeserializer",title:"ConfluentDeserializerWrapper.GetOrCreateDeserializer method",description:"Get the deserializer based on the target message type",source:"@site/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ConfluentDeserializerWrapper/GetOrCreateDeserializer.md",sourceDirName:"reference/KafkaFlow.SchemaRegistry/KafkaFlow/ConfluentDeserializerWrapper",slug:"/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ConfluentDeserializerWrapper/GetOrCreateDeserializer",permalink:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ConfluentDeserializerWrapper/GetOrCreateDeserializer",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ConfluentDeserializerWrapper/GetOrCreateDeserializer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConfluentDeserializerWrapper.DeserializeAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ConfluentDeserializerWrapper/DeserializeAsync"},next:{title:"ConfluentSerializerWrapper constructor",permalink:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ConfluentSerializerWrapper/"}},s={},p=[{value:"See Also",id:"see-also",level:2}],c={toc:p};function f(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"confluentdeserializerwrappergetorcreatedeserializer-method"},"ConfluentDeserializerWrapper.GetOrCreateDeserializer method"),(0,n.kt)("p",null,"Get the deserializer based on the target message type"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public static ConfluentDeserializerWrapper GetOrCreateDeserializer(Type messageType, \n    Func<object> deserializerFactory)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"messageType"),(0,n.kt)("td",{parentName:"tr",align:null},"The message type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"deserializerFactory"),(0,n.kt)("td",{parentName:"tr",align:null},"A factory that creates a IAsyncDeserializer")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"class\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ConfluentDeserializerWrapper/"},"ConfluentDeserializerWrapper")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/"},"KafkaFlow"))))}f.isMDXComponent=!0}}]);