"use strict";(self.webpackChunkgridbase_docs=self.webpackChunkgridbase_docs||[]).push([[7388],{24786:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(85893),i=t(11151);const r={},d="Fee Estimates",o={id:"integration/fee-estimates/index",title:"Fee Estimates",description:"This document outlines various API endpoints designed for seamless integration with GridBase Fee Estimates, a powerful tool that offers estimation based on a property and user-provided requirements. Below, you'll find comprehensive insights into the essential fields associated with each individual endpoint. Feel free to refer to this guide as you embark on integrating Fee Estimates into your system. It will ensure a smooth and successful integration process.",source:"@site/docs/integration/fee-estimates/index.md",sourceDirName:"integration/fee-estimates",slug:"/integration/fee-estimates/",permalink:"/gridbase-docs/integration/fee-estimates/",draft:!1,unlisted:!1,editUrl:"https://github.com/grid151/gridbase-docs/tree/main/docs/integration/fee-estimates/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Update",permalink:"/gridbase-docs/integration/decision-reports/update"},next:{title:"Manual Order Entry",permalink:"/gridbase-docs/integration/manual-order-entry/"}},a={},l=[{value:"Get Fee Standards",id:"get-fee-standards",level:2},{value:"Example",id:"example",level:4},{value:"Response Body Example",id:"response-body-example",level:3},{value:"Get Questions",id:"get-questions",level:2},{value:"Required Fields",id:"required-fields",level:3},{value:"Request Body Example",id:"request-body-example",level:3},{value:"Response Body Example",id:"response-body-example-1",level:3},{value:"Request Estimate",id:"request-estimate",level:2},{value:"Required Fields",id:"required-fields-1",level:3},{value:"Request Body Example",id:"request-body-example-1",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"fee-estimates",children:"Fee Estimates"}),"\n",(0,s.jsx)(n.p,{children:"This document outlines various API endpoints designed for seamless integration with GridBase Fee Estimates, a powerful tool that offers estimation based on a property and user-provided requirements. Below, you'll find comprehensive insights into the essential fields associated with each individual endpoint. Feel free to refer to this guide as you embark on integrating Fee Estimates into your system. It will ensure a smooth and successful integration process."}),"\n",(0,s.jsx)(n.h2,{id:"get-fee-standards",children:"Get Fee Standards"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /v1/orders/fees/fee-standards/{feeType}/{state}/{integrationId}"})}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /v1/orders/fees/fee-standards/Endorsement/FL/kljsldfjdljfldkjfl"})}),"\n",(0,s.jsx)(n.h3,{id:"response-body-example",children:"Response Body Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "code": "2000010",\n    "name": "ALTA 18.3-06 - Single Tax Parcel and ID",\n    "category": "OTHER"\n  },\n  {\n    "code": "2000011",\n    "name": "Mortgage Survey Affidavit",\n    "category": "SURVEY"\n  },\n  {\n    "code": "0000001",\n    "name": "Title - ALTA 1 Street Assessments",\n    "category": "OTHER"\n  },\n  {\n    "code": "0000029",\n    "name": "Title - ALTA 10 Assignment",\n    "category": "OTHER"\n  }\n]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"get-questions",children:"Get Questions"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST /v1/orders/fees/questions"})}),"\n",(0,s.jsx)(n.h3,{id:"required-fields",children:"Required Fields"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field Name"}),(0,s.jsx)(n.th,{children:"Field Description"}),(0,s.jsx)(n.th,{children:"Data Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"stateAbbreviation"})}),(0,s.jsx)(n.td,{children:"Two character state abbreviation"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"countyFips"})}),(0,s.jsx)(n.td,{children:"Fips code for the county"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"documentTypes"})}),(0,s.jsx)(n.td,{children:"Document Types Refinance, Mortgage"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"integrationId"})}),(0,s.jsx)(n.td,{children:"Clients unique integration Id"}),(0,s.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"request-body-example",children:"Request Body Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "stateAbbreviation": "PA",\n  "countyFips": "42007",\n  "documentTypes": ["Refinance"],\n  "integrationId": "12345"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"response-body-example-1",children:"Response Body Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "id": "Q15",\n    "description": "Is this a reverse mortgage?",\n    "answer": "false",\n    "questionType": "Bool"\n  },\n  {\n    "id": "Q50",\n    "description": "Is this transaction being recorded electronically?",\n    "answer": "false",\n    "questionType": "Bool"\n  }\n]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"request-estimate",children:"Request Estimate"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST /v1/orders/fees/quote"})}),"\n",(0,s.jsx)(n.h3,{id:"required-fields-1",children:"Required Fields"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field Name"}),(0,s.jsx)(n.th,{children:"Field Description"}),(0,s.jsx)(n.th,{children:"Data Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"property.street"})}),(0,s.jsx)(n.td,{children:"Property Address"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"property.cityDesc"})}),(0,s.jsx)(n.td,{children:"Property City"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"property.stateId"})}),(0,s.jsx)(n.td,{children:"Property State"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"property.countyDesc"})}),(0,s.jsx)(n.td,{children:"Property County"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"property.zip"})}),(0,s.jsx)(n.td,{children:"Property Zip Code"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"transacitionType"})}),(0,s.jsx)(n.td,{children:"Transaction Type (Purchase, Refinance, Modification)"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"documentType"})}),(0,s.jsx)(n.td,{children:"Fee Document Type (None, Amendment, Assignment, Deed, Modification, Mortgage, PowerOfAttorney, Refinance, Release, Subordination)"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"titleAgent.financingType"})}),(0,s.jsx)(n.td,{children:"Finance Type (Sale, Refinance)"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"titleAgent.policyType"})}),(0,s.jsx)(n.td,{children:"Policy Type (New, Reissue)"}),(0,s.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"request-body-example-1",children:"Request Body Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "integrationId": "12345",\n  "estimatedClosingDate": "2023-08-10T15:30:00Z",\n  "documentTypes": ["Mortgage"],\n  "inspectionService": {\n    "address": "123 Main St",\n    "city": "Sample City",\n    "zip": "12345",\n    "squareFootage": 2000,\n    "yearBuilt": 2000,\n    "lotSize": 0.25,\n    "isInspection": true,\n    "inspectionTypes": [\n      { "key": "Mold", "name": "Mold Inspection", "value": true },\n      { "key": "Asbestos", "name": "Asbestos Inspection", "value": false }\n    ],\n    "numberOfSamples": {\n      "moldAirSamples": 2,\n      "moldSurfaceSamples": 3,\n      "asbestosSamples": 0,\n      "leadPaintSamples": 1,\n      "drywallSamples": 0\n    }\n  },\n  "mortgage": {\n    "pages": 15,\n    "newDebtAmount": 250000,\n    "originalAmount": 300000,\n    "unpaidBalance": 200000\n  },\n  "property": {\n    "streetAddress": "456 Elm St",\n    "city": "Sample City",\n    "state": "CA",\n    "zip": "54321"\n  },\n  "customizations": {\n    "assignment": { "Pages": 2, "Amount": 100 },\n    "deed": { "Pages": 3, "Amount": 150 },\n    "release": { "Pages": 1, "Amount": 75 },\n    "subordination": { "Pages": null, "Amount": 200 },\n    "powerOfAttorney": { "Pages": null, "Amount": 50 }\n  },\n  "questions": [\n    { "id": "Q1", "answer": "Yes", "questionType": "Bool" },\n    { "id": "Q2", "answer": "12345", "questionType": "Number" }\n  ],\n  "titleAgent": {\n    "titleVendor": "Sample Title Company",\n    "city": "Sample City",\n    "financingType": "Sale",\n    "policyType": "New",\n    "useSimultaneousRates": true,\n    "loanAmount": 200000,\n    "purchaseAmount": 300000\n  },\n  "transactionType": "Purchase",\n  "useItemizedSettlementFees": true,\n  "endorsements": ["Endorsement1", "Endorsement2"]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>d});var s=t(67294);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);