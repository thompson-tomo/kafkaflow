"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8742],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},f=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),m=c(a),k=n,y=m["".concat(s,".").concat(k)]||m[k]||p[k]||l;return a?r.createElement(y,o(o({ref:t},f),{},{components:a})):r.createElement(y,o({ref:t},f))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98445:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={},o="KafkaFlow.SchemaRegistry assembly",i={unversionedId:"reference/KafkaFlow.SchemaRegistry/KafkaFlow.SchemaRegistry",id:"reference/KafkaFlow.SchemaRegistry/KafkaFlow.SchemaRegistry",title:"KafkaFlow.SchemaRegistry assembly",description:"KafkaFlow namespace",source:"@site/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow.SchemaRegistry.md",sourceDirName:"reference/KafkaFlow.SchemaRegistry",slug:"/reference/KafkaFlow.SchemaRegistry/",permalink:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow.SchemaRegistry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SchemaRegistryTypeResolver.OnProduceAsync method",permalink:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/SchemaRegistryTypeResolver/OnProduceAsync"},next:{title:"KafkaFlow.Serializer",permalink:"/kafkaflow/docs/category/kafkaflowserializer"}},s={},c=[{value:"KafkaFlow namespace",id:"kafkaflow-namespace",level:2}],f={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kafkaflowschemaregistry-assembly"},"KafkaFlow.SchemaRegistry assembly"),(0,n.kt)("h2",{id:"kafkaflow-namespace"},"KafkaFlow namespace"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"public type"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"static\xa0class\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ClusterConfigurationBuilderExtensions/"},"ClusterConfigurationBuilderExtensions")),(0,n.kt)("td",{parentName:"tr",align:null},"No needed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"abstract\xa0class\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ConfluentDeserializerWrapper/"},"ConfluentDeserializerWrapper")),(0,n.kt)("td",{parentName:"tr",align:null},"A wrapper to call the typed Confluent deserializers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"abstract\xa0class\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ConfluentSerializerWrapper/"},"ConfluentSerializerWrapper")),(0,n.kt)("td",{parentName:"tr",align:null},"A wrapper to call the typed Confluent serializers and deserializers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interface\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/IAsyncSchemaRegistryTypeNameResolver/"},"IAsyncSchemaRegistryTypeNameResolver")),(0,n.kt)("td",{parentName:"tr",align:null},"An interface to implement a type name resolver to messages serialized with schema registry serializers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interface\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/ISchemaRegistryTypeNameResolver/"},"ISchemaRegistryTypeNameResolver")),(0,n.kt)("td",{parentName:"tr",align:null},"An interface to implement a type name resolver to messages serialized with schema registry serializers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"class\xa0",(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.SchemaRegistry/KafkaFlow/SchemaRegistryTypeResolver/"},"SchemaRegistryTypeResolver")),(0,n.kt)("td",{parentName:"tr",align:null},"The message type resolver to be used with schema registry serializers")))))}p.isMDXComponent=!0}}]);