"use strict";(self.webpackChunkgridbase_docs=self.webpackChunkgridbase_docs||[]).push([[776],{42327:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var t=s(85893),o=s(11151);const r={},l="How to Apply Custom CSS to Your WordPress Theme",i={id:"wordpress/seller-net-sheet/customizations",title:"How to Apply Custom CSS to Your WordPress Theme",description:"If you want to customize the look and feel of the seller net sheet plugin on your WordPress site, follow these steps to apply custom CSS:",source:"@site/docs/wordpress/seller-net-sheet/customizations.md",sourceDirName:"wordpress/seller-net-sheet",slug:"/wordpress/seller-net-sheet/customizations",permalink:"/gridbase-docs/wordpress/seller-net-sheet/customizations",draft:!1,unlisted:!1,editUrl:"https://github.com/grid151/gridbase-docs/tree/main/docs/wordpress/seller-net-sheet/customizations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Order Placed",permalink:"/gridbase-docs/webhooks/order-placed"}},d={},a=[{value:"Step 1: Access the WordPress Admin Dashboard",id:"step-1-access-the-wordpress-admin-dashboard",level:2},{value:"Step 2: Open the Customizer",id:"step-2-open-the-customizer",level:2},{value:"Step 3: Add Custom CSS",id:"step-3-add-custom-css",level:2},{value:"Step 4: Copy and Paste the Custom CSS Code",id:"step-4-copy-and-paste-the-custom-css-code",level:2},{value:"Step 5: Save and Publish",id:"step-5-save-and-publish",level:2},{value:"Step 6: Verify the Changes",id:"step-6-verify-the-changes",level:2},{value:"Additional Tips",id:"additional-tips",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-apply-custom-css-to-your-wordpress-theme",children:"How to Apply Custom CSS to Your WordPress Theme"}),"\n",(0,t.jsx)(n.p,{children:"If you want to customize the look and feel of the seller net sheet plugin on your WordPress site, follow these steps to apply custom CSS:"}),"\n",(0,t.jsx)(n.h2,{id:"step-1-access-the-wordpress-admin-dashboard",children:"Step 1: Access the WordPress Admin Dashboard"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Log in"})," to your WordPress site."]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to the ",(0,t.jsx)(n.strong,{children:"Admin Dashboard"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-2-open-the-customizer",children:"Step 2: Open the Customizer"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the dashboard menu, go to ",(0,t.jsx)(n.strong,{children:"Appearance"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.strong,{children:"Customize"}),". This will open the WordPress Customizer, where you can preview changes in real-time."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-3-add-custom-css",children:"Step 3: Add Custom CSS"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the Customizer, find and click on the ",(0,t.jsx)(n.strong,{children:"Additional CSS"})," option. This option might be under ",(0,t.jsx)(n.strong,{children:"Appearance"})," or ",(0,t.jsx)(n.strong,{children:"Customize"})," depending on your theme."]}),"\n",(0,t.jsx)(n.li,{children:"In the Additional CSS section, you can add your custom CSS code."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-4-copy-and-paste-the-custom-css-code",children:"Step 4: Copy and Paste the Custom CSS Code"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Copy the following CSS code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"/* Container and general spacing */\n#seller_netsheet.seller-net-sheet.container {\n    padding: 20px;\n    background-color: #f8f9fa; /* Light background for container */\n    border: 1px solid #dee2e6; /* Border around the container */\n    border-radius: 8px; /* Rounded corners */\n}\n\n#seller_netsheet .mt-4 {\n    margin-top: 1.5rem !important;\n}\n\n#seller_netsheet .mb-3 {\n    margin-bottom: 1rem !important;\n}\n\n#seller_netsheet .mb-4 {\n    margin-bottom: 1.5rem !important;\n}\n\n/* Header styles */\n#seller_netsheet .section-header h3 {\n    font-size: 1.5rem;\n    color: #343a40; /* Darker text color */\n    border-bottom: 2px solid #007bff; /* Underline with primary color */\n    padding-bottom: 5px;\n}\n\n/* Form labels and inputs */\n#seller_netsheet .form-label {\n    font-weight: 500;\n    color: #495057; /* Slightly dark text color */\n}\n\n#seller_netsheet .form-control {\n    border-radius: 5px;\n    border: 1px solid #ced4da;\n    padding: 10px;\n}\n\n/* Select inputs */\n#seller_netsheet .form-select {\n    border-radius: 5px;\n    border: 1px solid #ced4da;\n    padding: 10px;\n}\n\n/* Input groups */\n#seller_netsheet .input-group {\n    display: flex;\n    align-items: center;\n}\n\n#seller_netsheet .input-group input {\n    flex: 1;\n}\n\n/* Buttons */\n#seller_netsheet .btn {\n    border-radius: 5px;\n    padding: 10px 20px;\n    font-size: 1rem;\n}\n\n#seller_netsheet .btn-primary {\n    background-color: #007bff;\n    border-color: #007bff;\n    color: #fff;\n}\n\n#seller_netsheet .btn-primary:hover {\n    background-color: #0056b3;\n    border-color: #004085;\n}\n\n#seller_netsheet .btn-secondary {\n    background-color: #6c757d;\n    border-color: #6c757d;\n    color: #fff;\n}\n\n#seller_netsheet .btn-secondary:hover {\n    background-color: #5a6268;\n    border-color: #545b62;\n}\n\n/* Grid and layout */\n#seller_netsheet .row {\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n}\n\n#seller_netsheet .col-md-12,\n#seller_netsheet .col-md-6,\n#seller_netsheet .col-md-8,\n#seller_netsheet .col-sm-6 {\n    position: relative;\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n}\n\n#seller_netsheet .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n\n#seller_netsheet .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n\n#seller_netsheet .col-md-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%;\n}\n\n#seller_netsheet .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n\n#seller_netsheet .d-grid {\n    display: grid;\n}\n\n#seller_netsheet .gap-2 {\n    grid-gap: 0.5rem;\n}\n\n#seller_netsheet .d-md-flex {\n    display: flex;\n}\n\n#seller_netsheet .justify-content-md-end {\n    justify-content: flex-end;\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Paste the copied CSS code into the ",(0,t.jsx)(n.strong,{children:"Additional CSS"})," section in the Customizer."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-5-save-and-publish",children:"Step 5: Save and Publish"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"After pasting the custom CSS code, you will see a live preview of the changes on your site."}),"\n",(0,t.jsxs)(n.li,{children:["If everything looks good, click the ",(0,t.jsx)(n.strong,{children:"Publish"})," button to apply the changes."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-6-verify-the-changes",children:"Step 6: Verify the Changes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Visit the page where the seller net sheet plugin is used."}),"\n",(0,t.jsx)(n.li,{children:"Ensure that the custom styles are applied correctly."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"additional-tips",children:"Additional Tips"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Backup Your CSS:"})," Before making significant changes, consider backing up your existing CSS in case you need to revert back."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Use Developer Tools:"})," Use browser developer tools (F12 in most browsers) to inspect elements and make real-time changes before finalizing them in the customizer."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Keep It Clean:"})," Organize and comment your CSS for better readability and maintenance."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By following these steps, you can easily apply custom CSS to your WordPress theme and enhance the look and feel of the seller net sheet plugin without affecting other parts of your site."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var t=s(67294);const o={},r=t.createContext(o);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);