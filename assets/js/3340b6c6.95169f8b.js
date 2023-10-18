"use strict";(self.webpackChunkgridbase_docs=self.webpackChunkgridbase_docs||[]).push([[359],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,g=s["".concat(o,".").concat(k)]||s[k]||m[k]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[s]="string"==typeof e?e:r,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},l="Manual Order Entry",d={unversionedId:"integration/manual-order-entry/index",id:"integration/manual-order-entry/index",title:"Manual Order Entry",description:"This README file describes several API endpoints for using Manual Order Entry, an order management feature that allows lenders to place orders in GridBase without a destination integration. This file provides detailed information on the required fields for each endpoint.",source:"@site/docs/integration/manual-order-entry/index.md",sourceDirName:"integration/manual-order-entry",slug:"/integration/manual-order-entry/",permalink:"/integration/manual-order-entry/",draft:!1,editUrl:"https://github.com/grid151/gridbase-docs/tree/main/docs/integration/manual-order-entry/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fee Estimates",permalink:"/integration/fee-estimates/"},next:{title:"Document",permalink:"/integration/manual-order-entry/document"}},o={},p=[{value:"Stage Order",id:"stage-order",level:2},{value:"Required fields",id:"required-fields",level:3},{value:"Request body example",id:"request-body-example",level:3},{value:"Update Order",id:"update-order",level:2},{value:"Required fields",id:"required-fields-1",level:3},{value:"Place Order",id:"place-order",level:2},{value:"Add Note",id:"add-note",level:2},{value:"Required fields",id:"required-fields-2",level:3},{value:"Add Document",id:"add-document",level:2},{value:"Required fields",id:"required-fields-3",level:3},{value:"Send Invitation",id:"send-invitation",level:2},{value:"Required fields",id:"required-fields-4",level:3},{value:"Resend Invitation",id:"resend-invitation",level:2},{value:"Edit Invitation",id:"edit-invitation",level:2},{value:"Disable Invitation",id:"disable-invitation",level:2},{value:"Order Update Notifications",id:"order-update-notifications",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manual-order-entry"},"Manual Order Entry"),(0,r.kt)("p",null,"This README file describes several API endpoints for using Manual Order Entry, an order management feature that allows lenders to place orders in GridBase without a destination integration. This file provides detailed information on the required fields for each endpoint."),(0,r.kt)("h2",{id:"stage-order"},"Stage Order"),(0,r.kt)("p",null,"To stage an order, submit an HTTP POST request to /v1/orders/stage using the example request."),(0,r.kt)("h3",{id:"required-fields"},"Required fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"property.address.street"),(0,r.kt)("td",{parentName:"tr",align:null},"Property Address"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"property.address.cityDesc"),(0,r.kt)("td",{parentName:"tr",align:null},"Property City"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"property.address.stateId"),(0,r.kt)("td",{parentName:"tr",align:null},"Property State"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"property.address.zip"),(0,r.kt)("td",{parentName:"tr",align:null},"Property Zip"),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("h3",{id:"request-body-example"},"Request body example"),(0,r.kt)("p",null,"Here is a ",(0,r.kt)("a",{parentName:"p",href:"order"},"sample request body")),(0,r.kt)("h2",{id:"update-order"},"Update Order"),(0,r.kt)("p",null,"Once staged, you may optionally update the order object by submitting an HTTP PUT requests to /v1/orders/update."),(0,r.kt)("h3",{id:"required-fields-1"},"Required fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"property.address.street"),(0,r.kt)("td",{parentName:"tr",align:null},"Property Address"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"property.address.cityDesc"),(0,r.kt)("td",{parentName:"tr",align:null},"Property City"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"property.address.stateId"),(0,r.kt)("td",{parentName:"tr",align:null},"Property State"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"property.address.zip"),(0,r.kt)("td",{parentName:"tr",align:null},"Property Zip"),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("p",null,"Here is a ",(0,r.kt)("a",{parentName:"p",href:"/integration/manual-order-entry/order"},"sample request body")),(0,r.kt)("h2",{id:"place-order"},"Place Order"),(0,r.kt)("p",null,"Once staged, you can place the order by submitting an HTTP PUT requests to /v1/orders/place/{orderId}."),(0,r.kt)("h2",{id:"add-note"},"Add Note"),(0,r.kt)("p",null,"New notes can be added to a placed order by submitting an HTTP PUT request to /v1/notes/add/{orderId}."),(0,r.kt)("h3",{id:"required-fields-2"},"Required fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"noteSubject"),(0,r.kt)("td",{parentName:"tr",align:null},"Note Subject"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"noteBody"),(0,r.kt)("td",{parentName:"tr",align:null},"Note Body"),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("p",null,"Here is a ",(0,r.kt)("a",{parentName:"p",href:"/integration/manual-order-entry/note"},"sample note request body")),(0,r.kt)("h2",{id:"add-document"},"Add Document"),(0,r.kt)("p",null,"New documents can be attached to a placed order by submitting an HTTP POST request to /v1/documents/create/{orderId}."),(0,r.kt)("h3",{id:"required-fields-3"},"Required fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fileName"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of file without extension"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"documentBody"),(0,r.kt)("td",{parentName:"tr",align:null},"Document as a Base64 string"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extension"),(0,r.kt)("td",{parentName:"tr",align:null},"extenstion of the uploaded file txt, pdf, etc"),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("p",null,"Here is a ",(0,r.kt)("a",{parentName:"p",href:"/integration/manual-order-entry/document"},"sample document upload request body")),(0,r.kt)("h2",{id:"send-invitation"},"Send Invitation"),(0,r.kt)("p",null,"Order invitations can be sent to individuals outside the organization. An email will be sent to the provided address, granting access to view the order, add notes, and add documents. Invitations can be sent by submitting an HTTP POST request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/core/invitation/send"),"."),(0,r.kt)("h3",{id:"required-fields-4"},"Required fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orderId"),(0,r.kt)("td",{parentName:"tr",align:null},"Order Id"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"Email Address"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"firstName"),(0,r.kt)("td",{parentName:"tr",align:null},"First Name"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastName"),(0,r.kt)("td",{parentName:"tr",align:null},"Last Name"),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("p",null,"Here is a ",(0,r.kt)("a",{parentName:"p",href:"/integration/manual-order-entry/note"},"sample invitation request body")),(0,r.kt)("h2",{id:"resend-invitation"},"Resend Invitation"),(0,r.kt)("p",null,"Invitations can be resent by submitting an HTTP POST request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/core/invitation/resend")," with a request body like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "invitationId": "<string>"\n}\n')),(0,r.kt)("h2",{id:"edit-invitation"},"Edit Invitation"),(0,r.kt)("p",null,"Invitations names can be updated by submitting an HTTP PATCH request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/core/invitation/update")," with a request body like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "4ab---------------21d",\n  "firstName": "John",\n  "lastName": "Doe"\n}\n')),(0,r.kt)("h2",{id:"disable-invitation"},"Disable Invitation"),(0,r.kt)("p",null,"Order invitations can be enabled or disabled by submitting an HTTP PATCH request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/core/invitation/update")," with a request body like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "4ab---------------21d",\n  "flag": "Enabled",\n  "flagValue": true\n}\n')),(0,r.kt)("h2",{id:"order-update-notifications"},"Order Update Notifications"),(0,r.kt)("p",null,"Invitees may receive order update email notifications when notes or documents are added to the order by a member of the creating organzation. This flag can\nbe toggled by submitting an HTTP PATCH request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/core/invitation/update")," with a request body like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "4ab-------------21d",\n  "flag": "EmailUpdates",\n  "flagValue": true\n}\n')))}m.isMDXComponent=!0}}]);