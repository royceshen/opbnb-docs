"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[84],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),p=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return o.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},b=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(n),b=r,h=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return n?o.createElement(h,i(i({ref:e},c),{},{components:n})):o.createElement(h,i({ref:e},c))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},80170:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Getting Started",icon:"code",index:"yes",dir:{order:1}},i=void 0,s={unversionedId:"build-on-opbnb/getting-started",id:"build-on-opbnb/getting-started",title:"Getting Started",description:"This is a living document and is susceptible to changes.",source:"@site/docs/build-on-opbnb/getting-started.md",sourceDirName:"build-on-opbnb",slug:"/build-on-opbnb/getting-started",permalink:"/opbnb-docs/docs/build-on-opbnb/getting-started",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/docs/build-on-opbnb/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started",icon:"code",index:"yes",dir:{order:1}},sidebar:"guideSidebar",previous:{title:"Network Information",permalink:"/opbnb-docs/docs/build-on-opbnb/opbnb-testnet-information"},next:{title:"Deposit Tokens to opBNB",permalink:"/opbnb-docs/docs/build-on-opbnb/deposit-to-opbnb"}},l={},p=[{value:"How to use opBNB?",id:"how-to-use-opbnb",level:2}],c={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is a living document and is susceptible to changes. ")),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Developing on opBNB, an optimistic rollup Layer 2 scaling solution for BNB Smart Chain, is nearly the same as building directly on BNB Smart Chain. opBNB uses an EVM execution engine, meaning decentralized applications can be migrated from Ethereum, BNB Smart Chain, Polygon, and other EVM-compatible chains without changing any code.Some key points to highlight: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"opBNB is an optimistic rollup - it scales BNB Smart Chain by bundling transactions off-chain and using fraud proofs to ensure validity. This allows for much higher throughput than the underlying BNB Smart Chain."),(0,r.kt)("li",{parentName:"ol"},"opBNB uses the EVM, the same virtual machine used by Ethereum and BNB Smart Chain. This means any dApp, smart contract, or other application that runs on the EVM can operate on opBNB with little to no code changes. Developers can simply deploy the same application on opBNB to get the benefits of Layer 2 scaling."),(0,r.kt)("li",{parentName:"ol"},"dApps and smart contracts can migrate to opBNB from any other EVM chain like Ethereum, BNB Smart Chain, or Polygon. Again, since opBNB is EVM-compatible, the applications will run as-is on the new network."),(0,r.kt)("li",{parentName:"ol"},"Building on opBNB provides the scalability and low costs of a rollup, while still leveraging the security of BNB Smart Chain. dApps get the best of both Layer 1 and Layer 2.")),(0,r.kt)("h2",{id:"how-to-use-opbnb"},"How to use opBNB?"),(0,r.kt)("p",null,"To use opBNB, you need to have an Ethereum wallet like Metamask or Trustwallet. For this tutorial, I'll use MetaMask, a popular browser extension that allows you to interact with dApps. You also need to have some BNB in your wallet to pay for gas fees."),(0,r.kt)("p",null,"Step 1: Connect your wallet to opBNB"),(0,r.kt)("p",null,'Connect your wallet to the opBNB testnet and BSC testnet. To do this, click on the network dropdown menu on MetaMask and select "Custom RPC". Then, enter the following details:'),(0,r.kt)("p",null,'Network Name: BSC TestNet\nBSC testnet RPC endpoint: "',(0,r.kt)("a",{parentName:"p",href:"https://data-seed-prebsc-1-s1.binance.org:8545%22"},'https://data-seed-prebsc-1-s1.binance.org:8545"'),"\nBSC testnet chain ID: 97\nSymbol: BNB"),(0,r.kt)("p",null,'Network Name: opBNB TestNet\nBSC testnet RPC endpoint: "',(0,r.kt)("a",{parentName:"p",href:"https://opbnb-testnet-rpc.bnbchain.org%22"},'https://opbnb-testnet-rpc.bnbchain.org"'),"\nBSC testnet chain ID: 5611\nSymbol: BNB"),(0,r.kt)("p",null,"Step 2: Deposit your tBNB token to the opBNB\nStep 3: Start building by deploying smart contract to opBNB."))}u.isMDXComponent=!0}}]);