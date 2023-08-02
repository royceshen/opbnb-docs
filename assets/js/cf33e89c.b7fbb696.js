"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[6920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_label:"Create a Full Stack dapp",description:"Build Full Stack dapp using Truffle and React on opBNB"},l="Create a Full Stack dapp using Truffle and React on opBNB",i={unversionedId:"tutorials/full-stack-dapp",id:"tutorials/full-stack-dapp",title:"Create a Full Stack dapp using Truffle and React on opBNB",description:"Build Full Stack dapp using Truffle and React on opBNB",source:"@site/docs/tutorials/full-stack-dapp.md",sourceDirName:"tutorials",slug:"/tutorials/full-stack-dapp",permalink:"/opbnb-docs/docs/tutorials/full-stack-dapp",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/tutorials/full-stack-dapp.md",tags:[],version:"current",frontMatter:{sidebar_label:"Create a Full Stack dapp",description:"Build Full Stack dapp using Truffle and React on opBNB"},sidebar:"tutorials",previous:{title:"Run Local Dev Enviroment",permalink:"/opbnb-docs/docs/tutorials/running-a-local-development-environment"},next:{title:"Verify Smart Contracts with Hardhat and Truffle",permalink:"/opbnb-docs/docs/tutorials/opbnbscan-verify-hardhat-truffle"}},s={},p=[{value:"What are we building",id:"what-are-we-building",level:2},{value:"Learning Takeaways",id:"learning-takeaways",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Demo Step-by-Step Guide",id:"demo-step-by-step-guide",level:2},{value:"Step 1: Set up the project",id:"step-1-set-up-the-project",level:3},{value:"Step#2: Install <code>hdwallet-provider\u200b</code>",id:"step2-install-hdwallet-provider",level:3},{value:"Step#3: Create the <code>.env</code> file\u200b",id:"step3-create-the-env-file",level:3},{value:"Step#4: Create the smart contract",id:"step4-create-the-smart-contract",level:3},{value:"Step#5: Configure Truffle for use with opBNB",id:"step5-configure-truffle-for-use-with-opbnb",level:3},{value:"Step#6: Deploy the smart contract on opBNB",id:"step6-deploy-the-smart-contract-on-opbnb",level:3},{value:"Step#7: Set up the React frontend",id:"step7-set-up-the-react-frontend",level:3},{value:"Step 6: Start the development server",id:"step-6-start-the-development-server",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Follow us to stay updated on everything BNB Chain!",id:"follow-us-to-stay-updated-on-everything-bnb-chain",level:5}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-full-stack-dapp-using-truffle-and-react-on-opbnb"},"Create a Full Stack dapp using Truffle and React on opBNB"),(0,r.kt)("p",null,"In this tutorial, we'll deploy a simple HelloWorld smart contract on opBNB and build a Web3 frontend using React to interact with the deployed smart contract, i.e., read from and write to the opBNB blockchain."),(0,r.kt)("h2",{id:"what-are-we-building"},"What are we building"),(0,r.kt)("p",null,"opBNB is essentially an optimized layer-2 solution that delivers lower fees and higher throughput to unlock the full potential of the BNB Chain."),(0,r.kt)("p",null,"For this tutorial, we will deploy a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorld")," smart contract on the opBNB network and build a frontend using Reactjs to interact with the deployed smart contract for reading and writing data onto the opBNB blockchain.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorld")," smart contract is a simple string variable message that will be used for storing the user-defined messages, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello, opBNB User"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"updateMessage")," function will be used for updating the message variable to any user-defined string value."),(0,r.kt)("p",null,"This smart contract will then be deployed on the opBNB network using ",(0,r.kt)("a",{parentName:"p",href:"https://trufflesuite.com/"},"Truffle IDE"),". We will then use the ",(0,r.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Reactjs boilerplate")," to build a front end to communicate with the smart contract. ",(0,r.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.10.0/#"},"Web3.js library")," is used for interacting with the smart contract and reading and writing data to the opBNB blockchain. We further use ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"Metamask")," for signing transactions and paying any gas costs."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This is a basic example for educational purposes, and it assumes familiarity with ",(0,r.kt)("a",{parentName:"p",href:"https://trufflesuite.com/"},"Truffle"),", ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/"},"React"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),".")),(0,r.kt)("h2",{id:"learning-takeaways"},"Learning Takeaways"),(0,r.kt)("p",null,"By the end of this tutorial, you will be able to achieve the following"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use Truffle IDE to spin up a project template and write, compile, and deploy a simple smart contract on the opBNB."),(0,r.kt)("li",{parentName:"ul"},"Create a front end for interacting with the deployed smart contract using ReactJS."),(0,r.kt)("li",{parentName:"ul"},"Interact with smart contracts deployed on opBNB via ReactJS frontend using Web3.js library.")),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js (Node v18.14.2)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Metamask Web Wallet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://trufflesuite.com/docs/truffle/how-to/install/"},"Truffle v5.10.0")),(0,r.kt)("li",{parentName:"ul"},"Get tBNB in your Metamask wallet configured with opBNB Testnet",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bnbchain.org/opbnb-docs/docs/build-on-opbnb/wallet-configuration"},"Metamask Wallet Configuration for opBNB.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bnbchain.org/opbnb-docs/docs/build-on-opbnb/deposit-to-opbnb"},"Deposit tBNB to your opBNB account"))))),(0,r.kt)("h2",{id:"demo-step-by-step-guide"},"Demo Step-by-Step Guide"),(0,r.kt)("p",null,"For this tutorial, we will be using Truffle IDE to develop, compile and deploy a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorld")," smart contract on the opBNB network. For building the front end, we will be using the ",(0,r.kt)("inlineCode",{parentName:"p"},"create-react-app")," React boilerplate. Further, to connect our dapp to the web3 world, we will be using the Metamask wallet. "),(0,r.kt)("h3",{id:"step-1-set-up-the-project"},"Step 1: Set up the project"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure you have Node.js and npm installed on your machine.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Truffle globally by running the following command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g truffle\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new directory for your project and navigate into it"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir HelloWorldDapp\ncd HelloWorldDapp\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initialize a new Truffle project. Create a ",(0,r.kt)("a",{parentName:"p",href:"https://trufflesuite.com/docs/truffle/getting-started/creating-a-project.html"},"bare Truffle project")," which generates the required directory structure to test and deploy contracts:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"truffle init\n")))),(0,r.kt)("p",null,"Truffle creates the following directory structure for your project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contracts/"),": directory for your ",(0,r.kt)("a",{parentName:"li",href:"https://trufflesuite.com/docs/truffle/getting-started/interacting-with-your-contracts"},"Solidity contracts"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"migrations/"),": directory for the ",(0,r.kt)("a",{parentName:"li",href:"https://trufflesuite.com/docs/truffle/getting-started/running-migrations#migration-files"},"scriptable deployment files"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test/"),": directory for files that ",(0,r.kt)("a",{parentName:"li",href:"https://trufflesuite.com/docs/truffle/testing/testing-your-contracts"},"test your application and contracts"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"truffle-config.js"),": the Truffle ",(0,r.kt)("a",{parentName:"li",href:"https://trufflesuite.com/docs/truffle/reference/configuration"},"configuration file"),".")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Create React App globally by running the following command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g create-react-app\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the React app frontend using the following command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app frontend\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate into the client directory using the following command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd frontend\n")))),(0,r.kt)("h3",{id:"step2-install-hdwallet-provider"},"Step#2: Install ",(0,r.kt)("inlineCode",{parentName:"h3"},"hdwallet-provider\u200b")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hdwallet-provider")," is a separate package that signs transactions for addresses derived from a 12 or 24-word mnemonic. By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"hdwallet-provider")," uses the first address generated from the mnemonic. However, this is configurable. For more information, refer to the Truffle ",(0,r.kt)("inlineCode",{parentName:"p"},"hdwallet-provider")," repository. Run the following command to install ",(0,r.kt)("inlineCode",{parentName:"p"},"hdwallet-provider")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    npm install @truffle/hdwallet-provider\n")),(0,r.kt)("h3",{id:"step3-create-the-env-file"},"Step#3: Create the ",(0,r.kt)("inlineCode",{parentName:"h3"},".env")," file\u200b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install the ",(0,r.kt)("inlineCode",{parentName:"li"},"dotenv")," package using the following command ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    npm install dotenv\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a file named ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," in your project directory to store the Metamask Secret Phrase. Refer to the MetaMask instructions on ",(0,r.kt)("a",{parentName:"li",href:"https://metamask.zendesk.com/hc/en-us/articles/360015290032-How-to-Reveal-Your-Seed-Phrase"},"how to reveal a secret recovery phrase"),". ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    MNEMONIC = "<Your-MetaMask-Secret-Recovery-Phrase>"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure you replace the following values in the ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<Your-MetaMask-Secret-Recovery-Phrase>")," with the mnemonic of your MetaMask wallet. This phrase is used by the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/trufflesuite/truffle/tree/develop/packages/hdwallet-provider"},"Truffle hdwallet-provider")," to sign transactions.")))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Never disclose your secret recovery phrase. Anyone with your recovery phrase can steal any assets held in your wallet.")),(0,r.kt)("h3",{id:"step4-create-the-smart-contract"},"Step#4: Create the smart contract"),(0,r.kt)("p",null,"Inside the contracts directory, create a new file named ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorld.sol")," and add the following code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"   // SPDX-License-Identifier: MIT\n   pragma solidity ^0.8.19;\n\n   contract HelloWorld {\n       string public message;\n\n       constructor(string memory _message) {\n           message = _message;\n       }\n\n       function updateMessage(string memory _newMessage) public {\n           message = _newMessage;\n       }\n   }\n")),(0,r.kt)("h3",{id:"step5-configure-truffle-for-use-with-opbnb"},"Step#5: Configure Truffle for use with opBNB"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("inlineCode",{parentName:"li"},"truffle-config.js")," file and add the following code:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const HDWalletProvider = require(\'@truffle/hdwallet-provider\');\n// create a file at the root of your project and name it .env -- there you can set process variables\n// like the mnemomic etc. Note: .env is ignored by git to keep your private information safe\n\nrequire(\'dotenv\').config();\n\nconst mnemonic = process.env["MNEMONIC"].toString().trim();\n\nmodule.exports = {\n\n  networks: {\n    development: {\n      host: "127.0.0.1",     // Localhost (default: none)\n      port: 8545,            // Standard Ethereum port (default: none)\n      network_id: "*",       // Any network (default: none)\n    },\n    opBNBTestnet:{\n      provider: () => new HDWalletProvider(mnemonic, `https://opbnb-testnet-rpc.bnbchain.org`),\n      network_id: 5611,\n      confirmations: 3,\n      timeoutBlocks: 200,\n      skipDryRun: true\n    },\n  },\n\n  // Set default mocha options here, use special reporters etc.\n  mocha: {\n    // timeout: 100000\n  },\n\n  // Configure your compilers\n  compilers: {\n    solc: {\n      version: "0.8.19"\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"step6-deploy-the-smart-contract-on-opbnb"},"Step#6: Deploy the smart contract on opBNB"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the root directory of your project, create a new file named ",(0,r.kt)("inlineCode",{parentName:"li"},"1_deploy_contract.js")," inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"migrations")," directory and add the following code:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'   const HelloWorld = artifacts.require("HelloWorld");\n\n   module.exports = function (deployer) {\n       deployer.deploy(HelloWorld, "Hello, World!");\n   };\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Deploy the smart contract to the opBNB testnet by running the following command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"truffle migrate --network opBNBTestnet\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"deploy-smart-contract",src:n(94086).Z,width:"664",height:"682"})),(0,r.kt)("h3",{id:"step7-set-up-the-react-frontend"},"Step#7: Set up the React frontend"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"frontend/src")," directory, replace the contents of the ",(0,r.kt)("inlineCode",{parentName:"li"},"App.js")," file with the following code:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { useEffect, useState } from \'react\';\nimport Web3 from \'web3\';\nimport HelloWorldContract from \'./contracts/HelloWorld.json\';\nimport \'./App.css\';\n\nfunction App() {\n    const [contract, setContract] = useState(null);\n    const [message, setMessage] = useState(\'\');\n    const [newMessage, setNewMessage] = useState(\'\');\n    const [loading, setLoading] = useState(false);\n\n    useEffect(() => {\n        const loadBlockchainData = async () => {\n            try {\n                const web3 = new Web3(window.ethereum);\n                const networkId = await web3.eth.net.getId();\n                const deployedNetwork = HelloWorldContract.networks[networkId];\n                const instance = new web3.eth.Contract(\n                    HelloWorldContract.abi,\n                    deployedNetwork && deployedNetwork.address\n                );\n                setContract(instance);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n\n        loadBlockchainData();\n    }, []);\n\n    const getMessage = async () => {\n        if (contract) {\n            try {\n                setLoading(true);\n                const message = await contract.methods.message().call();\n                setMessage(message);\n            } catch (error) {\n                console.error(error);\n            } finally {\n                setLoading(false);\n            }\n        }\n    };\n\n    const updateMessage = async () => {\n        if (contract && newMessage !== \'\') {\n            try {\n                setLoading(true);\n                await contract.methods.updateMessage(newMessage).send({ from: (await window.ethereum.enable())[0] });\n                setNewMessage(\'\');\n            } catch (error) {\n                console.error(error);\n            } finally {\n                setLoading(false);\n            }\n        }\n    };\n\n    return (\n        <div className="App">\n            <h1 className="header">HelloWorld dApp</h1>\n            <div className="content">\n                <div className="message">\n                    <h2>Current Message</h2>\n                    <p className="messageValue">{loading ? \'Loading...\' : message}</p>\n                    <button onClick={getMessage}>Refresh</button>\n                </div>                \n            </div>\n            <div className="content">\n                <div className="update">\n                    <h2>Update Message</h2>\n                    <input\n                        type="text"\n                        placeholder="New Message"\n                        value={newMessage}\n                        onChange={(e) => setNewMessage(e.target.value)}\n                        className="inputMessage"\n                    />\n                    <br/>\n                    <button onClick={updateMessage}>Update</button>\n                </div>\n            </div>\n        </div>\n    );\n}\n\nexport default App;\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Replace the contents of the ",(0,r.kt)("inlineCode",{parentName:"li"},"App.css")," file with the following code:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".App {\n  text-align: center;\n}\n\n.header{\n  background-color: #F3BA2F;\n  min-height: 20vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(40px + 2vmin);\n  color: white;\n}\n\n.content {\n  display: flex;\n  justify-content: center;\n  align-items:center;\n  padding: auto;\n  text-align: center;\n}\n\n.message,\n.update {\n  padding: auto ;\n  margin: 20px;\n}\n.messageValue{\n  color: whitesmoke;\n  font-size: large;\n}\n\n.inputMessage{\n    float:center;\n    padding: 10px;\n    width: 100%;\n    font-family: 'IBM Plex Sans','Raleway','Source Sans Pro', 'Arial';\n}\n\nbutton{\n  float: center;\n  margin: 1em 0;\n  padding: 10px 3em;\n  font-weight: bold;\n  max-width: fit-content;\n  font-family: 'IBM Plex Sans','Raleway','Source Sans Pro', 'Arial';\n }\n\nbody {\n  background-color:#292929;\n  color: #F3BA2F;\n  align-items: center;\n  font-family: 'IBM Plex Sans','Raleway','Source Sans Pro', 'Arial';\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n }\n")),(0,r.kt)("h3",{id:"step-6-start-the-development-server"},"Step 6: Start the development server"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the frontend directory, install the required dependencies by running the following command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the React development server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm start\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," in your browser, and you should see the ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorld")," dApp with the current message and the ability to update it."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you have the MetaMask extension installed and set to the opBNB testnet. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"helloworld-opbnb-ui",src:n(52657).Z,width:"404",height:"351"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"When you enter a new message and click the update button, if your dapp is already not connected to Metamask wallet, you will get a Metamask notification asking for permission to connect your wallet to the dapp.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"connect-metamask",src:n(24503).Z,width:"338",height:"603"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"It will also ask for your confirmation to confirm the transaction. Proceed by clicking the confirm button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"opbnb-metamask-tx",src:n(55144).Z,width:"301",height:"543"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Once the transaction is confirmed, click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Refresh")," button to load the new message.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"helloworld-opbnb-output-ui",src:n(43890).Z,width:"378",height:"256"})),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this tutorial, we provided a step-by-step guide on how to develop, deploy, and interact with a smart contract on the opBNB network. We used the Truffle IDE for compiling and deploying the smart contract. We also build a React frontend to interact with the deployed smart contract, i.e., read from and write to the opBNB blockchain."),(0,r.kt)("h5",{id:"follow-us-to-stay-updated-on-everything-bnb-chain"},"Follow us to stay updated on everything BNB Chain!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.bnbchain.org/en?ref=binance.ghost.io"},"Website")," | ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/BNBCHAIN?ref=binance.ghost.io"},"Twitter")," | ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/BNBChainDevs?ref=binance.ghost.io"},"Twitter (Devs)")," | ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/bnbchain?ref=binance.ghost.io"},"Telegram")," | ",(0,r.kt)("a",{parentName:"p",href:"https://dappbay.bnbchain.org/?ref=binance.ghost.io"},"dApp Store")," | ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/@BNBChainOfficial?ref=binance.ghost.io"},"YouTube")," | ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/bnbchain?ref=binance.ghost.io"},"Discord")," | ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/bnbchaininnovation/?ref=binance.ghost.io"},"LinkedIn")," | ",(0,r.kt)("a",{parentName:"p",href:"https://www.buildnbuild.dev/?ref=binance.ghost.io"},"Build N' Build Forum")," | ",(0,r.kt)("a",{parentName:"p",href:"https://bnbdev.community/?ref=binance.ghost.io"},"Dev Community")))}d.isMDXComponent=!0},94086:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/opBNB-deploy-contract-5299176d067828f9bdbbdd4f91f5b927.PNG"},24503:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/opbnb-connect-wallet-4e35d152d55cea1d2ec2d8d84dc8c95a.PNG"},43890:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/opbnb-helloworld-ui-2-1a4feaeacb37cbc3ef5f12ecbfdef2fe.PNG"},52657:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/opbnb-helloworld-ui-e23512a7f9f69ffb2fec4dc5fcb6454c.PNG"},55144:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/opbnb-metamask-tx-d44ac181ebd3499dec3c5e0ffba46a67.PNG"}}]);