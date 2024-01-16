"use strict";(self.webpackChunkgridbase_docs=self.webpackChunkgridbase_docs||[]).push([[6444],{96933:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=t(85893),l=t(11151);const r={title:"Stage"},a=void 0,i={id:"sample-requests/orders/stage",title:"Stage",description:"",source:"@site/docs/sample-requests/orders/stage.md",sourceDirName:"sample-requests/orders",slug:"/sample-requests/orders/stage",permalink:"/gridbase-docs/sample-requests/orders/stage",draft:!1,unlisted:!1,editUrl:"https://github.com/grid151/gridbase-docs/tree/main/docs/sample-requests/orders/stage.md",tags:[],version:"current",frontMatter:{title:"Stage"},sidebar:"tutorialSidebar",previous:{title:"Note",permalink:"/gridbase-docs/sample-requests/orders/note"},next:{title:"Webhooks",permalink:"/gridbase-docs/webhooks/"}},u={},d=[];function o(n){const e={code:"code",pre:"pre",...(0,l.a)(),...n.components};return(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",metastring:"title='stage.json'",children:'{\n  "note": null,\n  "orderDetails": {\n    "additionalAmount": 0.0,\n    "clientFileNumber": "test-file-1104202201",\n    "estimatedSettlementDate": "2022-10-31T00:00:00Z",\n    "isAllPartiesAttending": false,\n    "isSectionStarted": false,\n    "isValidated": false,\n    "newLoanAmount": 188000.0,\n    "newLoanNumber": null,\n    "productTypeId": 162,\n    "salesPrice": 100000.0,\n    "transactionTypeId": 42\n  },\n  "parties": {\n    "buyers": [\n      {\n        "address": {\n          "fullAddress": null,\n          "cityDesc": "Tampa",\n          "cityId": 0,\n          "countyDesc": null,\n          "countyId": 0,\n          "direction": null,\n          "isPropertyAddress": false,\n          "landAcreage": null,\n          "number": null,\n          "stateDesc": null,\n          "stateId": "FL",\n          "street": "2216 Mallory Avenue",\n          "streetLine2": null,\n          "streetName": null,\n          "suffix": null,\n          "unit": null,\n          "zip": "33605"\n        },\n        "businessName": null,\n        "buyerSellerTypeID": 1,\n        "email": "testemail@testbuyer.com",\n        "firstName": "Claribel",\n        "isPrimary": false,\n        "isSameAsPropertyAddress": false,\n        "isValidated": false,\n        "lastName": "Waddell",\n        "maritalStatus": null,\n        "middleName": null,\n        "phone": "222-222-2222",\n        "prefix": null,\n        "socialSecurityNumber": "991-91-9991",\n        "sourceBuyerSellerID": 0,\n        "spouse": null,\n        "suffix": null,\n        "taxId": null\n      }\n    ],\n    "isSectionStarted": false,\n    "isValidated": false,\n    "lender": {\n      "address": {\n        "fullAddress": null,\n        "cityDesc": "Charlotte",\n        "cityId": 0,\n        "countyDesc": null,\n        "countyId": 0,\n        "direction": null,\n        "isPropertyAddress": false,\n        "landAcreage": null,\n        "number": null,\n        "stateDesc": null,\n        "stateId": "NC",\n        "street": "Test Street Address",\n        "streetLine2": null,\n        "streetName": null,\n        "suffix": null,\n        "unit": "Floor 2",\n        "zip": "28211"\n      },\n      "companyName": "Some company name",\n      "contactName": "Test Conctact Name",\n      "isValidated": false,\n      "phone": "111-111-1111"\n    },\n    "listingAgent": {\n      "address": {\n        "fullAddress": null,\n        "cityDesc": "Charlotte",\n        "cityId": 0,\n        "countyDesc": null,\n        "countyId": 0,\n        "direction": null,\n        "isPropertyAddress": false,\n        "landAcreage": null,\n        "number": null,\n        "stateDesc": "NC",\n        "stateId": "NC",\n        "street": "",\n        "streetLine2": null,\n        "streetName": null,\n        "suffix": null,\n        "unit": null,\n        "zip": "28211"\n      },\n      "companyName": "Buyer",\n      "contactName": "Agent",\n      "isValidated": false,\n      "phone": "111-111-1111"\n    },\n    "mortgageBroker": null,\n    "secondLender": null,\n    "sellers": [],\n    "sellingAgent": {\n      "partyTypeId": 14,\n      "address": {\n        "fullAddress": null,\n        "cityDesc": "Charlotte",\n        "cityId": 0,\n        "countyDesc": null,\n        "countyId": 0,\n        "direction": null,\n        "isPropertyAddress": false,\n        "landAcreage": null,\n        "number": null,\n        "stateDesc": null,\n        "stateId": "NC",\n        "street": "",\n        "streetLine2": null,\n        "streetName": null,\n        "suffix": null,\n        "unit": null,\n        "zip": "28211"\n      },\n      "companyName": "Seller",\n      "contactName": "Agent",\n      "isValidated": false,\n      "phone": "456-175-8224"\n    }\n  },\n  "partners": null,\n  "property": {\n    "address": {\n      "fullAddress": null,\n      "cityDesc": "Orlando",\n      "cityId": 0,\n      "countyDesc": "",\n      "countyId": 0,\n      "direction": null,\n      "isPropertyAddress": true,\n      "landAcreage": null,\n      "number": null,\n      "stateDesc": null,\n      "stateId": "FL",\n      "street": "5108 Timberview Terr",\n      "streetLine2": null,\n      "streetName": null,\n      "suffix": null,\n      "unit": null,\n      "zip": "32819"\n    },\n    "isKeyboxInfo": false,\n    "isSectionStarted": false,\n    "isUnincorporated": false,\n    "isValidated": false,\n    "keyboxInfo": null\n  },\n  "status": null,\n  "actions": null,\n  "curatives": null,\n  "coordinators": null,\n  "signings": null,\n  "dateTimeInserted": "2022-09-09T17:09:50.8Z",\n  "dateTimeCompleted": null,\n  "dateTimeUpdated": null,\n  "system": "Resware",\n  "product": "order"\n}\n'})})}function c(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>a});var s=t(67294);const l={},r=s.createContext(l);function a(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);