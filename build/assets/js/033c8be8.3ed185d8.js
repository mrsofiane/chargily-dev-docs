"use strict";(self.webpackChunkchargily_epay_docs=self.webpackChunkchargily_epay_docs||[]).push([[605],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),y=a,d=u["".concat(c,".").concat(y)]||u[y]||m[y]||i;return t?r.createElement(d,o(o({ref:n},s),{},{components:t})):r.createElement(d,o({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={title:"Chargily ePay with Python",sidebar_label:"Python",sidebar_position:3},o=void 0,l={unversionedId:"addons-for-programming-languages/python",id:"addons-for-programming-languages/python",title:"Chargily ePay with Python",description:"Instalation",source:"@site/docs/addons-for-programming-languages/python.md",sourceDirName:"addons-for-programming-languages",slug:"/addons-for-programming-languages/python",permalink:"/docs/docs/addons-for-programming-languages/python",draft:!1,editUrl:"https://github.com/Chargily/chargily-dev-docs/docs/addons-for-programming-languages/python.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Chargily ePay with Python",sidebar_label:"Python",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"JavaScript",permalink:"/docs/docs/addons-for-programming-languages/javaScript"},next:{title:"Java",permalink:"/docs/docs/addons-for-programming-languages/java"}},c={},p=[{value:"Instalation",id:"instalation",level:2},{value:"chargily-epay-async",id:"chargily-epay-async",level:3},{value:"Quickstart",id:"quickstart",level:2}],s={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instalation"},"Instalation"),(0,a.kt)("p",null,"This is ",(0,a.kt)("inlineCode",{parentName:"p"},"sync")," version using ",(0,a.kt)("inlineCode",{parentName:"p"},"requests")," library "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install chargily-epay-python\n")),(0,a.kt)("h3",{id:"chargily-epay-async"},"chargily-epay-async"),(0,a.kt)("p",null,"This is ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," version using ",(0,a.kt)("inlineCode",{parentName:"p"},"aiohttp")," library"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install chargily-epay-Async\n")),(0,a.kt)("h2",{id:"quickstart"},"Quickstart"),(0,a.kt)("p",null,"Simple example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from chargily_lib.constant import EDAHABIA\nfrom chargily_lib.invoice import Invoice\nfrom chargily_lib.utils import extract_redirect_url\nfrom chargily_lib.sync_lib.webhook import make_payment\n\nAPI_KEY = \"YOUR-API-KEY\"\n\ninvoice = Invoice()\ninvoice.client = \"Tarek berkane\"\ninvoice.client_email = 'example@gmail.com'\ninvoice.invoice_number = '1'\ninvoice.mode = EDAHABIA\ninvoice.amount = 10000 \ninvoice.discount = 0\ninvoice.comment = 'my first invoice payment.'\ninvoice.back_url = 'https://example.com/'\ninvoice.webhook_url = 'https://example.com/'\n\n\nresponse = make_payment(invoice, API_KEY)\n\nif response.status_code == 201:\n    print(extract_redirect_url(response.content))\n")))}m.isMDXComponent=!0}}]);