"use strict";(self.webpackChunkgridbase_docs=self.webpackChunkgridbase_docs||[]).push([[5093],{65557:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var t=d(85893),i=d(11151);const s={title:"SoftPro"},n="SoftPro Integration",l={id:"integration/softpro/index",title:"SoftPro",description:"This README file describes several API endpoints for integrating with SoftPro, a real estate and title insurance software company. The file provides detailed information on the required fields for each endpoint.",source:"@site/docs/integration/softpro/index.md",sourceDirName:"integration/softpro",slug:"/integration/softpro/",permalink:"/gridbase-docs/integration/softpro/",draft:!1,unlisted:!1,editUrl:"https://github.com/grid151/gridbase-docs/tree/main/docs/integration/softpro/index.md",tags:[],version:"current",frontMatter:{title:"SoftPro"},sidebar:"tutorialSidebar",previous:{title:"Connector Installation",permalink:"/gridbase-docs/integration/resware/connector-installation"},next:{title:"Document",permalink:"/gridbase-docs/integration/softpro/document"}},c={},o=[{value:"Place Order",id:"place-order",level:2},{value:"Required fields",id:"required-fields",level:3},{value:"Request body example",id:"request-body-example",level:3},{value:"Update Order",id:"update-order",level:2},{value:"Required fields",id:"required-fields-1",level:3},{value:"Add Document",id:"add-document",level:2},{value:"Required fields",id:"required-fields-2",level:3},{value:"Add Note",id:"add-note",level:2},{value:"Required fields",id:"required-fields-3",level:3},{value:"Request body example",id:"request-body-example-1",level:3},{value:"Cancel Order",id:"cancel-order",level:2},{value:"Required fields",id:"required-fields-4",level:3},{value:"Request body example",id:"request-body-example-2",level:3}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"softpro-integration",children:"SoftPro Integration"}),"\n",(0,t.jsx)(r.p,{children:"This README file describes several API endpoints for integrating with SoftPro, a real estate and title insurance software company. The file provides detailed information on the required fields for each endpoint."}),"\n",(0,t.jsx)(r.h2,{id:"place-order",children:"Place Order"}),"\n",(0,t.jsx)(r.h3,{id:"required-fields",children:"Required fields"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field Name"}),(0,t.jsx)(r.th,{children:"Field Description"}),(0,t.jsx)(r.th,{children:"Data Type"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"orderDetails.ProductTypeDesc"}),(0,t.jsx)(r.td,{children:"Products Available to order"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"orderDetails.transactionTypeDesc"}),(0,t.jsx)(r.td,{children:"Transaction Type"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Loan Type"}),(0,t.jsx)(r.td,{children:"Per SoftPro, they will add a Description field if 'Other' selected for Loan Type"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"parties.buyers.lastName"}),(0,t.jsx)(r.td,{children:"Buyers Last Name"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"parties.buyers.firstName"}),(0,t.jsx)(r.td,{children:"Buyers First Name"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"parties.lender.companyName"}),(0,t.jsx)(r.td,{children:"Lender Company Name"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"property.address.street"}),(0,t.jsx)(r.td,{children:"Property Address 1"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"property.address.cityDesc"}),(0,t.jsx)(r.td,{children:"Property City Description"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"property.address.stateId"}),(0,t.jsx)(r.td,{children:"Property State"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"property.address.zip"}),(0,t.jsx)(r.td,{children:"Property Zip"}),(0,t.jsx)(r.td,{children:"string"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"Required (Yes/No) Additional description if requirement is conditional."}),"\n",(0,t.jsx)(r.h3,{id:"request-body-example",children:"Request body example"}),"\n",(0,t.jsxs)(r.p,{children:["Here is a an ",(0,t.jsx)(r.a,{href:"order",children:"example request body"})]}),"\n",(0,t.jsx)(r.h2,{id:"update-order",children:"Update Order"}),"\n",(0,t.jsx)(r.h3,{id:"required-fields-1",children:"Required fields"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["Updates will take the full order, anything left null should not replace an existing value. (",(0,t.jsx)(r.strong,{children:"Will confirm with SoftPro"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field Name"}),(0,t.jsx)(r.th,{children:"Field Description"}),(0,t.jsx)(r.th,{children:"Data Type"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"orderDetails.ProductTypeDesc"}),(0,t.jsx)(r.td,{children:"Products Available to order"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"orderDetails.transactionTypeDesc"}),(0,t.jsx)(r.td,{children:"Transaction Type"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Loan Type"}),(0,t.jsx)(r.td,{children:"Per SoftPro, they will add a Description field if 'Other' selected for Loan Type"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"parties.buyers.lastName"}),(0,t.jsx)(r.td,{children:"Buyers Last Name"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"parties.buyers.firstName"}),(0,t.jsx)(r.td,{children:"Buyers First Name"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"parties.lender.companyName"}),(0,t.jsx)(r.td,{children:"Lender Company Name"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"property.address.street"}),(0,t.jsx)(r.td,{children:"Property Address 1"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"property.address.cityDesc"}),(0,t.jsx)(r.td,{children:"Property City Description"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"property.address.stateId"}),(0,t.jsx)(r.td,{children:"Property State"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"property.address.zip"}),(0,t.jsx)(r.td,{children:"Property Zip"}),(0,t.jsx)(r.td,{children:"string"})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:["Here is a an ",(0,t.jsx)(r.a,{href:"order",children:"example request body"})]}),"\n",(0,t.jsx)(r.h2,{id:"add-document",children:"Add Document"}),"\n",(0,t.jsx)(r.h3,{id:"required-fields-2",children:"Required fields"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field Name"}),(0,t.jsx)(r.th,{children:"Field Description"}),(0,t.jsx)(r.th,{children:"Data Type"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fileName"}),(0,t.jsx)(r.td,{children:"Name of file without extension"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"documentBody"}),(0,t.jsx)(r.td,{children:"Document as a Base64 string"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"extension"}),(0,t.jsx)(r.td,{children:"extenstion of the uploaded file txt, pdf, etc"}),(0,t.jsx)(r.td,{children:"string"})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:["Here is a an ",(0,t.jsx)(r.a,{href:"document",children:"document upload request body"})]}),"\n",(0,t.jsx)(r.h2,{id:"add-note",children:"Add Note"}),"\n",(0,t.jsx)(r.h3,{id:"required-fields-3",children:"Required fields"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field Name"}),(0,t.jsx)(r.th,{children:"Field Description"}),(0,t.jsx)(r.th,{children:"Data Type"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"noteSubject"}),(0,t.jsx)(r.td,{children:"Note Subject"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"noteBody"}),(0,t.jsx)(r.td,{children:"Note Body"}),(0,t.jsx)(r.td,{children:"string"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"request-body-example-1",children:"Request body example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  "noteSubject": "<string>",\n  "noteBody": "<string>",\n  "description": "<string>"\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"cancel-order",children:"Cancel Order"}),"\n",(0,t.jsx)(r.h3,{id:"required-fields-4",children:"Required fields"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field Name"}),(0,t.jsx)(r.th,{children:"Field Description"}),(0,t.jsx)(r.th,{children:"Data Type"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"orderId"}),(0,t.jsx)(r.td,{children:"unique identifier of the order"}),(0,t.jsx)(r.td,{children:"string"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cancelReason"}),(0,t.jsx)(r.td,{children:"Reason for cancelling order"}),(0,t.jsx)(r.td,{children:"string"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"request-body-example-2",children:"Request body example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  "orderId": "63f---------------443413",\n  "cancelReason": "Test Cancel"\n}\n'})})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,r,d)=>{d.d(r,{Z:()=>l,a:()=>n});var t=d(67294);const i={},s=t.createContext(i);function n(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);