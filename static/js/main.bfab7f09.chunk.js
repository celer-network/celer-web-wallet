(this["webpackJsonpceler-web-wallet"]=this["webpackJsonpceler-web-wallet"]||[]).push([[0],{100:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=100},110:function(e,t,n){"use strict";n.r(t);n(78);var a,r=n(0),c=n.n(r),o=n(23),l=n.n(o),i=n(9),s=(n(83),n(19)),u=n(28),m={client:void 0,setClient:function(){}},p=c.a.createContext(m),d=n(141),f=n(135),E=n(8),b=n.n(E),h=n(16),x=n(22),g=n(20),v=n(39),y=n(66),k=(Object(y.a)({palette:{primary:v.a,secondary:v.a}}),"Helvetica Neue, Helvetica, Lucida Grande, Segoe UI, sans-serif");!function(e){e[e.IDLE=0]="IDLE",e[e.PROCESSING=1]="PROCESSING",e[e.SUCCEEDED=2]="SUCCEEDED",e[e.FAILED=3]="FAILED"}(a||(a={}));var w=n(139),O=function(e){return c.a.createElement(w.a,Object.assign({style:{marginTop:"1em"}},e))},C=n(130),D=n(32),j=n(1),T=n(140);function S(){var e=Object(D.a)(["\n  font-family: ",";\n  && {\n    color: #ffffff;\n    background-color: #000000;\n    border-radius: 12px;\n  }\n  height: 40px;\n  min-height: 40px;\n  width: 336px;\n  max-width: 336px;\n  text-transform: none;\n\n  &:hover {\n    background-color: #616161;\n  }\n"]);return S=function(){return e},e}var A=Object(j.c)(C.a)(S(),k),I=function(e){return c.a.createElement(T.b,{injectFirst:!0},c.a.createElement(A,Object.assign({variant:"contained",color:"primary",size:"medium"},e)))},F=n(10),P=function(e){return c.a.createElement(F.a,Object.assign({style:{marginTop:"1em",position:"fixed",left:"50%",marginRight:"-50%",transform:"translate(-50%, 0%)"},flexDirection:"column",alignItems:e.alignItems?e.alignItems:"center",width:"25%",minWidth:"250px"},e))},R=n(131),L=n(57),N=function(e){return c.a.createElement(F.b,Object.assign({color:e.color?e.color:"#8E8E93",fontFamily:k,fontSize:"16px",letterSpacing:"0.19px",lineHeight:"19px",textAlign:e.textAlign?e.textAlign:"center"},e))},W=function(e){return c.a.createElement(F.b,Object.assign({color:"#000000",fontFamily:k,fontWeight:e.fontWeight?e.fontWeight:"bold",fontSize:"16px",letterSpacing:"0.19px"},e))},H=function(e){var t=e.title,n=e.prompt,a=Object(u.f)();return c.a.createElement(P,null,c.a.createElement(W,null,t),c.a.createElement(O,null,c.a.createElement(L.a,null)),c.a.createElement(N,{marginTop:"1em"},n),c.a.createElement(O,null,c.a.createElement(R.a,{onClick:function(){a.replace("/")}},c.a.createElement(F.b,{fontFamily:k},"Back home"))))},U=n(132),J=n(133),G=function(e){var t=e.text,n=e.close;return c.a.createElement(w.a,{width:"336px",bgcolor:"#219DDB",alignItems:"center"},c.a.createElement(F.a,null,c.a.createElement(N,{color:"#FFFFFF",width:"90%",marginTop:"15px",marginLeft:"45px"},t),c.a.createElement(U.a,{onClick:n},c.a.createElement(J.a,null))))},B=n(134),z=function(e){var t=e.title,n=e.prompt;return c.a.createElement(P,null,c.a.createElement(W,null,t),c.a.createElement(O,null,c.a.createElement(B.a,null)),c.a.createElement(N,{marginTop:"1em"},n))},K=n(58),Q=function(e){var t=e.title,n=e.doneCallback;return c.a.createElement(P,null,c.a.createElement(W,null,t),c.a.createElement(O,null,c.a.createElement(K.a,null)),c.a.createElement(I,{style:{marginTop:"2em"},onClick:n},"Done"))},V=function(){var e=Object(r.useContext)(p).client,t=Object(u.f)(),n=t.location.state,o=n&&n.tokenType,l=n&&n.tokenAddress,s=n&&n.minDeposit,m=n&&n.maxDeposit,E=Object(r.useState)(""),v=Object(i.a)(E,2),y=v[0],k=v[1],w=Object(r.useState)(a.IDLE),C=Object(i.a)(w,2),D=C[0],j=C[1],T=Object(r.useState)(""),S=Object(i.a)(T,2),A=S[0],F=S[1];if(!e||!o||!l)return t.replace("/"),null;var R=function(){var t=Object(h.a)(b.a.mark((function t(){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=g.ethers.utils.parseEther(y).toString(),r=e.openPaymentChannel("ETH"===o?x.TokenType.ETH:x.TokenType.ERC20,l,n,n),j(a.PROCESSING),t.prev=3,t.next=6,r;case 6:j(a.SUCCEEDED),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(3),F(t.t0.message||t.t0.toString()),j(a.FAILED);case 13:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(){return t.apply(this,arguments)}}(),L=g.ethers.utils.formatEther(s),U=g.ethers.utils.formatEther(m),J=c.a.createElement(P,null,c.a.createElement(O,null,c.a.createElement(G,{text:"Activate",close:function(){t.replace("/tokens")}}),c.a.createElement(W,{marginTop:"1em"},"Initial deposit"),c.a.createElement(d.a,{style:{marginTop:"1em",width:"100%"},labelWidth:0,onChange:function(e){return k(e.target.value)},endAdornment:c.a.createElement(f.a,{position:"end"},"ETH"),inputProps:{"aria-label":"amount"}}),c.a.createElement(N,{textAlign:"left"},"Deposit to activate Celer Pay"),c.a.createElement(N,{textAlign:"left"},"Minimum deposit: ",L," ETH"),c.a.createElement(N,{textAlign:"left"},"Maximum deposit: ",U," ETH")),c.a.createElement(I,{style:{marginTop:"2em"},onClick:R},"Done")),B=c.a.createElement(z,{title:"Activating",prompt:"Do not close your window until activation is complete"}),K=c.a.createElement(Q,{title:"Activate succeeded",doneCallback:function(){return t.replace("/tokens")}}),V=c.a.createElement(H,{title:"Activate failed",prompt:A});switch(D){case a.IDLE:return J;case a.PROCESSING:return B;case a.SUCCEEDED:return K;case a.FAILED:return V}},M=n(59),_=n(60),$=n(61),q=n(62),X=n(63),Y=n(64),Z=function(){var e=Object(r.useContext)(p),t=e.client,n=e.setClient,a=Object(u.f)();if(t)return a.replace("/tokens"),null;var o=function(){var e=Object(h.a)(b.a.mark((function e(){var t,r,c,o,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==typeof window.ethereum||"undefined"!==typeof window.web3){e.next=2;break}return e.abrupt("return");case 2:if(!window.ethereum){e.next=6;break}return window.ethereum.autoRefreshOnNetworkChange=!1,e.next=6,window.ethereum.enable();case 6:return t=new g.ethers.providers.Web3Provider(window.ethereum||window.web3.currentProvider),e.next=9,t.getNetwork();case 9:o=e.sent,e.t0=o.name,e.next="homestead"===e.t0?13:"ropsten"===e.t0?16:19;break;case 13:return r=$,c=q,e.abrupt("break",21);case 16:return r=X,c=Y,e.abrupt("break",21);case 19:r=M,c=_;case 21:return e.next=23,x.Celer.create(window.ethereum||window.web3.currentProvider,0,c,r);case 23:l=e.sent,n(l),a.replace("/tokens");case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(P,null,c.a.createElement(O,null,c.a.createElement(N,{width:"272px"},"This website would like to connect your Celer Pay account")),c.a.createElement(O,null,c.a.createElement(I,{onClick:o},"Connect wallet")))},ee=function(){var e=Object(r.useContext)(p).client,t=Object(u.f)(),n=t.location.state,o=n&&n.channelId,l=n&&n.tokenType,s=n&&n.tokenAddress,m=Object(r.useState)(""),E=Object(i.a)(m,2),v=E[0],y=E[1],k=Object(r.useState)(a.IDLE),C=Object(i.a)(k,2),D=C[0],j=C[1],T=Object(r.useState)(""),S=Object(i.a)(T,2),A=S[0],F=S[1];if(!e||!o||!l||!s)return t.replace("/"),null;var R=function(){var t=Object(h.a)(b.a.mark((function t(){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=g.ethers.utils.parseEther(v).toString(),r=e.deposit(o,"ETH"===l?x.TokenType.ETH:x.TokenType.ERC20,n),j(a.PROCESSING),t.prev=3,t.next=6,r;case 6:j(a.SUCCEEDED),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(3),F(t.t0.message||t.t0.toString()),j(a.FAILED);case 13:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(){return t.apply(this,arguments)}}(),L=c.a.createElement(P,null,c.a.createElement(O,null,c.a.createElement(G,{text:"Deposit",close:function(){t.replace("/tokens")}}),c.a.createElement(W,{marginTop:"1em"},"Amount"),c.a.createElement(d.a,{style:{marginTop:"1em",width:"100%"},labelWidth:0,onChange:function(e){return y(e.target.value)},endAdornment:c.a.createElement(f.a,{position:"end"},"ETH"),inputProps:{"aria-label":"amount"}})),c.a.createElement(w.a,{marginTop:"2em"},c.a.createElement(I,{onClick:R},"Done"))),N=c.a.createElement(z,{title:"Depositing",prompt:"Do not close your window until deposit is complete"}),U=c.a.createElement(Q,{title:"Deposit succeeded",doneCallback:function(){return t.replace("/token/".concat(s))}}),J=c.a.createElement(H,{title:"Deposit failed",prompt:A});switch(D){case a.IDLE:return L;case a.PROCESSING:return N;case a.SUCCEEDED:return U;case a.FAILED:return J}},te=function(){var e=Object(r.useContext)(p).client,t=Object(u.f)(),n=t.location.state.tokenType,a=t.location.state.tokenAddress,o=Object(r.useState)(""),l=Object(i.a)(o,2),s=l[0],m=l[1],E=Object(r.useState)(""),g=Object(i.a)(E,2),v=g[0],y=g[1];if(!e||!n||!a)return t.replace("/"),null;var k=function(){var r=Object(h.a)(b.a.mark((function r(){return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.sendPayment("ETH"===n?x.TokenType.ETH:x.TokenType.ERC20,a,s,v);case 2:t.replace("/tokens");case 3:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return c.a.createElement(P,null,c.a.createElement(O,null,c.a.createElement(G,{text:"Send",close:function(){t.replace("/tokens")}}),c.a.createElement(W,{marginTop:"1em"},"Destination address"),c.a.createElement(d.a,{style:{marginTop:"1em",width:"100%"},labelWidth:0,onChange:function(e){return m(e.target.value)},inputProps:{"aria-label":"destination"}}),c.a.createElement(W,{marginTop:"1em"},"Amount"),c.a.createElement(d.a,{style:{marginTop:"1em",width:"100%"},labelWidth:0,onChange:function(e){return y(e.target.value)},endAdornment:c.a.createElement(f.a,{position:"end"},"wei"),inputProps:{"aria-label":"amount"}})),c.a.createElement(I,{style:{marginTop:"2em"},onClick:k},"Done"))},ne=n(136),ae=function(e){var t=e.symbol,n=Object(u.f)();return c.a.createElement(w.a,{width:"336px",bgcolor:"#219DDB",alignItems:"center"},c.a.createElement(F.a,null,c.a.createElement(U.a,{onClick:function(){return n.replace("/tokens")}},c.a.createElement(ne.a,null)),c.a.createElement(N,{color:"#FFFFFF",width:"100%",marginTop:"15px",marginLeft:"-45px"},t)))};function re(){var e=Object(D.a)(["\n  height: 28px;\n  width: 84px;\n  && {\n    color: #ffffff;\n    border-radius: 14px;\n    background-color: #1281ff;\n    margin-top: 1em;\n    margin-left: 1em;\n    margin-right: 1em;\n  }\n  text-transform: none;\n\n  &:hover {\n    background-color: #90caf9;\n  }\n"]);return re=function(){return e},e}var ce=Object(j.c)(C.a)(re()),oe=function(){var e=Object(u.f)(),t=e.location.state,n=t&&t.channelId,a=t&&t.tokenType,r=t&&t.tokenSymbol,o=t&&t.tokenAddress;return n&&a&&r&&o?c.a.createElement(P,null,c.a.createElement(ae,{symbol:r}),c.a.createElement(F.a,null,c.a.createElement(T.b,{injectFirst:!0},c.a.createElement(ce,{onClick:function(){return e.replace("/deposit",{channelId:n,tokenType:a,tokenSymbol:r,tokenAddress:o})}},"Deposit")),c.a.createElement(T.b,{injectFirst:!0},c.a.createElement(ce,{onClick:function(){return e.replace("/withdraw",{channelId:n,tokenType:a,tokenSymbol:r,tokenAddress:o})}},"Withdraw")),c.a.createElement(T.b,{injectFirst:!0},c.a.createElement(ce,{onClick:function(){return e.replace("/send",{channelId:n,tokenType:a,tokenSymbol:r,tokenAddress:o})}},"Send")))):(e.replace("/"),null)},le=n(138),ie=n(143),se=n(137);function ue(){var e=Object(D.a)(["\n  height: 28px;\n  width: 64px;\n  border-radius: 14px;\n  background-color: #1281ff;\n  text-transform: none;\n  position: absolute;\n  right: 0px;\n\n  &:hover {\n    background-color: #90caf9;\n  }\n"]);return ue=function(){return e},e}var me=Object(j.c)(C.a)(ue()),pe=function(e){var t=e.client,n=e.tokenDisplayInfo,a=Object(r.useState)(!0),o=Object(i.a)(a,2),l=o[0],s=o[1],m=Object(r.useState)(""),p=Object(i.a)(m,2),d=p[0],f=p[1],E=Object(r.useState)({activated:!1,balance:"0"}),x=Object(i.a)(E,2),v=x[0],y=x[1],w=Object(u.f)();Object(r.useEffect)((function(){var e=function(){var e=Object(h.a)(b.a.mark((function e(){var a,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAllPaymentChannelIdsForToken(n.address);case 2:if(a=e.sent,s(!1),0!==a.length){e.next=8;break}y({activated:!1,balance:"0"}),e.next=14;break;case 8:return r=a[0],f(r),e.next=12,t.getPaymentChannelInfo(r);case 12:c=e.sent,y({activated:!0,balance:c.balance.freeSendingCapacity});case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var a=setInterval((function(){return e()}),1e3);return function(){return clearInterval(a)}}),[t,n.address]);var O,C=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.replace("/activate",{tokenType:n.type,tokenAddress:n.address,minDeposit:n.minDeposit,maxDeposit:n.maxDeposit});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(l)O=c.a.createElement(N,{position:"absolute",right:"0px"},"Loading");else if(v.activated){var D=String(Number(g.ethers.utils.formatEther(v.balance)).toFixed(4));O=c.a.createElement(N,{textAlign:"right",position:"absolute",right:"0px"},D+" ETH")}else O=c.a.createElement(T.b,{injectFirst:!0},c.a.createElement(me,{onClick:C},c.a.createElement(F.b,{fontFamily:k,fontSize:"12px",color:"#FFFFFF"},"Activate")));return c.a.createElement(ie.a,{divider:!0,onClick:function(){v.activated&&w.replace("/token/".concat(n.address),{channelId:d,tokenType:n.type,tokenAddress:n.address,tokenSymbol:n.symbol})}},c.a.createElement(se.a,{style:{margin:"8px"},alt:n.name,src:n.iconUrl}),c.a.createElement(F.a,{flexDirection:"column"},c.a.createElement(W,{fontWeight:"normal"},n.name),c.a.createElement(N,{textAlign:"left"},n.symbol)),O)},de=n(65),fe=function(){var e=Object(r.useContext)(p).client,t=Object(u.f)(),n=[];if(!e)return t.replace("/"),null;var a=!0,o=!1,l=void 0;try{for(var i,s=de[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var m=i.value;n.push({name:m.name,type:m.type,address:m.address,symbol:m.symbol,iconUrl:m.iconUrl,minDeposit:m.depositLimits.minDeposit,maxDeposit:m.depositLimits.maxDeposit})}}catch(d){o=!0,l=d}finally{try{a||null==s.return||s.return()}finally{if(o)throw l}}return c.a.createElement(P,{alignItems:"left"},c.a.createElement(W,{left:"25%"},"Available tokens"),c.a.createElement(le.a,null,n.map((function(t,n){return c.a.createElement(pe,{key:n,client:e,tokenDisplayInfo:t})}))))},Ee=function(){var e=Object(r.useContext)(p).client,t=Object(u.f)(),n=t.location.state,o=n&&n.channelId,l=Object(r.useState)(""),s=Object(i.a)(l,2),m=s[0],E=s[1],x=Object(r.useState)(a.IDLE),v=Object(i.a)(x,2),y=v[0],k=v[1],w=Object(r.useState)(""),C=Object(i.a)(w,2),D=C[0],j=C[1];if(!e||!o)return t.replace("/"),null;var T=function(){var t=Object(h.a)(b.a.mark((function t(){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=g.ethers.utils.parseEther(m).toString(),r=e.cooperativeWithdraw(o,n),k(a.PROCESSING),t.prev=3,t.next=6,r;case 6:k(a.SUCCEEDED),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(3),j(t.t0.message||t.t0.toString()),k(a.FAILED);case 13:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(){return t.apply(this,arguments)}}(),S=c.a.createElement(P,null,c.a.createElement(O,null,c.a.createElement(G,{text:"Withdraw",close:function(){t.replace("/tokens")}}),c.a.createElement(W,{marginTop:"1em"},"Amount"),c.a.createElement(d.a,{style:{marginTop:"1em",width:"100%"},labelWidth:0,onChange:function(e){return E(e.target.value)},endAdornment:c.a.createElement(f.a,{position:"end"},"ETH"),inputProps:{"aria-label":"amount"}})),c.a.createElement(I,{style:{marginTop:"2em"},onClick:T},"Done")),A=c.a.createElement(z,{title:"Withdrawing",prompt:"Do not close your window until withdrawal is complete"}),F=c.a.createElement(Q,{title:"Withdraw succeeded",doneCallback:function(){return t.replace("/tokens")}}),R=c.a.createElement(H,{title:"Withdraw failed",prompt:D});switch(y){case a.IDLE:return S;case a.PROCESSING:return A;case a.SUCCEEDED:return F;case a.FAILED:return R}},be=function(){var e=Object(r.useState)(void 0),t=Object(i.a)(e,2),n=t[0],a=t[1];return c.a.createElement(p.Provider,{value:{client:n,setClient:a}},c.a.createElement(s.a,{basename:"/celer-web-wallet"},c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/connect"},c.a.createElement(Z,null)),c.a.createElement(u.a,{path:"/tokens"},c.a.createElement(fe,null)),c.a.createElement(u.a,{path:"/token/:address"},c.a.createElement(oe,null)),c.a.createElement(u.a,{path:"/activate"},c.a.createElement(V,null)),c.a.createElement(u.a,{path:"/send"},c.a.createElement(te,null)),c.a.createElement(u.a,{path:"/deposit"},c.a.createElement(ee,null)),c.a.createElement(u.a,{path:"/withdraw"},c.a.createElement(Ee,null)),c.a.createElement(u.a,{path:"/",children:function(){return n?c.a.createElement(fe,null):c.a.createElement(Z,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e){e.exports=JSON.parse('{"paymentChannelOpenTimeout":100,"paymentChannelDisputeTimeout":10,"paymentResolutionDisputeTimeout":10,"defaultPaymentTimeout":50,"maxPendingPayments":200,"ethJsonRpcUrl":"http://localhost:8545","ospEthAddress":"0x6a6d2a97da1c453a4e099e8054865a0a59728863","ospNetworkAddress":"http://localhost:29980"}')},60:function(e){e.exports=JSON.parse('{"celerLedgerAddress":"0x0120812110a089b49bdc5a68d61ee7213a2e2c94","celerWalletAddress":"0xaf2438c82578cc1065661dc7ac8173382f600279","payRegistryAddress":"0x8517f998dfbbcc1b8fe914c050634fa65f093bf8","payResolverAddress":"0x8555ae269b34db4317074962ef4e4aed84d5aa2e","virtContractResolverAddress":"0x1db16b1d27b10edb9282df6650f48cf8576a84e7"}')},61:function(e){e.exports=JSON.parse('{"paymentChannelOpenTimeout":100,"paymentChannelDisputeTimeout":10,"paymentResolutionDisputeTimeout":10,"defaultPaymentTimeout":50,"maxPendingPayments":200,"ethJsonRpcUrl":"https://eth-mainnet.alchemyapi.io/jsonrpc/nBKDB3Ft5jAa-VmtGnrKtVpQ8u8eIgQ2","ospEthAddress":"0x33ebbb1d4d21e8626c4144ed737989c7532eb588","ospNetworkAddress":"https://web-proxy-mainnet.celer.app"}')},62:function(e){e.exports=JSON.parse('{"celerLedgerAddress":"0x4f7f56d57607e346ff8719c9f34cba3bbccae71f","celerWalletAddress":"0xa6cd930fc92f1634d8183af2fb86bd1766f2f82a","payRegistryAddress":"0x791bedaa0dd173142311005bb65b58c284cc948c","payResolverAddress":"0x273456f8fe06f9d58f2480b7aeaa710a4a6abfc1","virtContractResolverAddress":"0xad3e2ea53122d7d94df2deb5def84c86449fb7f4"}')},63:function(e){e.exports=JSON.parse('{"paymentChannelOpenTimeout":100,"paymentChannelDisputeTimeout":10,"paymentResolutionDisputeTimeout":10,"defaultPaymentTimeout":50,"maxPendingPayments":200,"ethJsonRpcUrl":"https://eth-ropsten.alchemyapi.io/jsonrpc/nBKDB3Ft5jAa-VmtGnrKtVpQ8u8eIgQ","ospEthAddress":"0x4bace345c30d9244b71218dc6ca694836138b60e","ospNetworkAddress":"https://web-proxy.celer.app"}')},64:function(e){e.exports=JSON.parse('{"celerLedgerAddress":"0x4b7a6ee1128ff88b21cc4c6359164b21d671fa31","celerWalletAddress":"0xf78260599ad3225f8c33f665cac1c60501c6b934","payRegistryAddress":"0xa12063ab2136abbab09e036a260694fbd5e57982","payResolverAddress":"0x605703f2c26aa67c4e63a27e5ace6ad2862bb53a","virtContractResolverAddress":"0xff57cc84acf5301f5d35c6b14ac1697b550fb9f0"}')},65:function(e){e.exports=JSON.parse('[{"name":"Ether","type":"ETH","symbol":"ETH","address":"0x0000000000000000000000000000000000000000","decimal":18,"iconUrl":"https://get.celer.app/mobile-app/res/ETH.png","receivingCap":"20000000000000000000","depositLimits":{"minDeposit":"50000000000000000","maxDeposit":"200000000000000000","maxRatio":1}}]')},77:function(e,t,n){e.exports=n(110)},78:function(e,t,n){},83:function(e,t,n){}},[[77,1,2]]]);
//# sourceMappingURL=main.bfab7f09.chunk.js.map