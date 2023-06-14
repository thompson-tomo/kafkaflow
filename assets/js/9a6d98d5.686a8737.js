"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8979],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>p});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},f=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=o,d=m["".concat(s,".").concat(p)]||m[p]||c[p]||a;return t?r.createElement(d,i(i({ref:n},f),{},{components:t})):r.createElement(d,i({ref:n},f))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49759:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={},i="ConfigurationBuilderExtensions.WithConsumerConfig method",l={unversionedId:"reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithConsumerConfig",id:"reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithConsumerConfig",title:"ConfigurationBuilderExtensions.WithConsumerConfig method",description:"Sets configurations in the consumer based on a ConsumerConfig instance",source:"@site/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithConsumerConfig.md",sourceDirName:"reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions",slug:"/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithConsumerConfig",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithConsumerConfig",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithConsumerConfig.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConfigurationBuilderExtensions.WithCompression method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithCompression"},next:{title:"ConfigurationBuilderExtensions.WithCustomFactory method (1 of 2)",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/WithCustomFactory"}},s={},u=[{value:"See Also",id:"see-also",level:2}],f={toc:u};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configurationbuilderextensionswithconsumerconfig-method"},"ConfigurationBuilderExtensions.WithConsumerConfig method"),(0,o.kt)("p",null,"Sets configurations in the consumer based on a ConsumerConfig instance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public static IConsumerConfigurationBuilder WithConsumerConfig(\n    this IConsumerConfigurationBuilder builder, ConsumerConfig config)\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"builder"),(0,o.kt)("td",{parentName:"tr",align:null},"A class that implements IConsumerConfigurationBuilder")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"config"),(0,o.kt)("td",{parentName:"tr",align:null},"ConsumerConfig instance")))),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"class\xa0",(0,o.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConfigurationBuilderExtensions/"},"ConfigurationBuilderExtensions")),(0,o.kt)("li",{parentName:"ul"},"namespace\xa0",(0,o.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow/"},"KafkaFlow"))))}c.isMDXComponent=!0}}]);