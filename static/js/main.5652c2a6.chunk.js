(this["webpackJsonpnabe-frontend"]=this["webpackJsonpnabe-frontend"]||[]).push([[0],{180:function(e){e.exports=JSON.parse("{}")},266:function(e,t){},284:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(67),s=n.n(r),c=n(155),u=n(36),o=n(341),p=n(114),l=n(93),d={en:{translation:n(180)}};p.a.use(l.e).init({resources:d,fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});p.a;var y,b,j=n(68),m=n(349),x=n(364),f=n(6),h=n.n(f),O=n(49),v=n(22),T=n(69),g=n(354),w=n(355),C=n(348),M=n(356),k=n(357),E=n(358),S=n(350),D=n(360),I=n(347),A=n(361),P=n(362),R=n(363),L=n(198),N=n.n(L),F=n(353),W=n(11),B=n(188),z=n(189),H=n(190),G=n(70),J=n(191),_=n.n(J),Z=["https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed1.defibit.io","https://bsc-dataseed.binance.org"],V=function(){return _()(Z)},U=V(),q=parseInt("56",10),K=new B.a({supportedChainIds:[q]}),Y=new z.a({rpc:Object(W.a)({},q,U),qrcode:!0,pollingInterval:12e3}),$=new H.BscConnector({supportedChainIds:[q]});!function(e){e.Injected="injected",e.WalletConnect="walletconnect",e.BSC="bsc"}(b||(b={}));var Q=(y={},Object(W.a)(y,b.Injected,K),Object(W.a)(y,b.WalletConnect,Y),Object(W.a)(y,b.BSC,$),y),X=function(e){var t=new G.a.providers.Web3Provider(e);return t.pollingInterval=12e3,t};var ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return"".concat(e.substring(0,t),"...").concat(e.substring(e.length-n))},te=n(2),ne={textDecoration:"none",color:"gray","&:hover":{color:"#735858",fontWeight:"bold"},"&:active":{color:"#735858",fontWeight:"bold"}},ae=function(){var e=Object(F.a)("").t,t=Object(T.b)(),n=t.active,i=t.connector,r=t.account,s=t.activate,c=t.deactivate,u=t.error,o=Object(a.useState)(),p=Object(v.a)(o,2),l=p[0],d=p[1],y=Object(a.useState)(!1),j=Object(v.a)(y,2),x=j[0],f=j[1],L=function(e){f(e)};Object(a.useEffect)((function(){l&&l===i&&d(void 0)}),[l,i]),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(T.b)(),n=t.active,i=t.error,r=t.activate;Object(a.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!i&&!e){var a=function(){r(K)},s=function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(e){e.length>0&&r(K)},u=function(e){r(K)};return t.on("connect",a),t.on("chainChanged",s),t.on("accountsChanged",c),t.on("networkChanged",u),function(){t.removeListener&&(t.removeListener("connect",a),t.removeListener("chainChanged",s),t.removeListener("accountsChanged",c),t.removeListener("networkChanged",u))}}}),[n,i,e,r])}(!function(){var e=Object(T.b)(),t=e.activate,n=e.active,i=Object(a.useState)(!1),r=Object(v.a)(i,2),s=r[0],c=r[1];return Object(a.useEffect)((function(){K.isAuthorized().then((function(e){e?t(K,void 0,!0).catch((function(){c(!0)})):c(!0)}))}),[t]),Object(a.useEffect)((function(){!s&&n&&c(!0)}),[s,n]),s}());var W=function(){return Object(te.jsx)(g.a,{href:"/",underline:"none",children:Object(te.jsxs)(m.a,{container:!0,spacing:2,alignItems:"center",alignContent:"center",children:[Object(te.jsx)(m.a,{item:!0,children:Object(te.jsx)("img",{src:"./logo512.png",alt:"Logo",height:30})}),Object(te.jsx)(m.a,{item:!0,children:Object(te.jsx)(w.a,{color:"textPrimary",variant:"h6",children:"Nabe.Finance"})})]})})},B=function(){return Object(te.jsx)(C.a,{color:n?"success":u?"error":"warning",variant:"dot",children:Object(te.jsx)(M.a,{sx:{display:{md:"block",xs:"none"}},children:void 0===r?Object(te.jsx)(k.a,{variant:"outlined",sx:{margin:function(e){return e.spacing(0,0,0,2)}},onClick:function(){s(Q[b.Injected],function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:e("Connect Wallet")}):Object(te.jsx)(k.a,{variant:"outlined",onClick:function(){c()},children:null===r?"-":r?"".concat(ee(r)):"account is null."})})})},z=function(){return Object(te.jsx)(M.a,{sx:{display:{md:"block",xs:"none"},marginRight:3},children:Object(te.jsxs)(m.a,{container:!0,spacing:3,children:[Object(te.jsx)(m.a,{item:!0,children:Object(te.jsx)(g.a,{href:"/",underline:"none",sx:ne,children:e("NabePot")})}),Object(te.jsx)(m.a,{item:!0,children:Object(te.jsx)(g.a,{href:"/MyPot",underline:"none",sx:ne,children:e("MyPot")})}),Object(te.jsx)(m.a,{item:!0,children:Object(te.jsx)(g.a,{href:"https://docs.nabe.finance",underline:"none",sx:ne,children:e("Docs")})})]})})},H=function(){return Object(te.jsxs)(M.a,{sx:{display:{md:"none",xs:"block"}},children:[void 0===r?Object(te.jsx)(k.a,{onClick:function(){s(Q[b.Injected],function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:e("Connect Wallet")}):Object(te.jsx)(k.a,{onClick:function(){c()},children:null===r?"-":r?"".concat(ee(r)):"account is null."}),Object(te.jsx)(E.a,{onClick:function(){L(!0)},children:Object(te.jsx)(N.a,{})})]})},G=function(){return Object(te.jsx)(S.a,{anchor:"right",open:x,onClose:function(){L(!1)},children:Object(te.jsxs)(D.a,{style:{width:250},children:[Object(te.jsx)(g.a,{href:"/",underline:"none",children:Object(te.jsx)(I.a,{button:!0,children:Object(te.jsx)(A.a,{children:"NabePot"})})}),Object(te.jsx)(g.a,{href:"/MyPot",underline:"none",children:Object(te.jsx)(I.a,{button:!0,children:Object(te.jsx)(A.a,{children:"MyPot"})})}),Object(te.jsx)(g.a,{href:"https://docs.nabe.finance",underline:"none",children:Object(te.jsx)(I.a,{button:!0,children:Object(te.jsx)(A.a,{children:"Docs"})})})]})})};return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(P.a,{color:"transparent",position:"static",elevation:1,children:Object(te.jsxs)(R.a,{variant:"dense",children:[Object(te.jsx)(W,{}),Object(te.jsx)("div",{style:{flexGrow:1}}),Object(te.jsx)(z,{}),Object(te.jsx)(H,{}),Object(te.jsx)(B,{})]})}),Object(te.jsx)(G,{})]})},ie=n(211),re=n(199),se=n.n(re),ce=n(200),ue=n.n(ce),oe=n(201),pe=n.n(oe),le=function(){return Object(te.jsx)(m.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",alignContent:"center",sx:{marginTop:1,justifyContent:"center"},children:Object(te.jsxs)(m.a,{item:!0,children:[Object(te.jsx)(E.a,{onClick:function(){window.open("https://github.com/nabefinance")},children:Object(te.jsx)(se.a,{})}),Object(te.jsx)(E.a,{onClick:function(){window.open("https://t.me/NabeFinance")},children:Object(te.jsx)(ue.a,{})}),Object(te.jsx)(E.a,{onClick:function(){window.open("https://discord.gg/dzAym5KDS2")},children:Object(te.jsx)(ie.a,{children:Object(te.jsx)("path",{d:"M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM9.264 4.872C9.288 4.872 9.312 4.872 9.312 4.872L9.48 5.088C6.408 5.952 5.016 7.296 5.016 7.296C5.016 7.296 5.376 7.104 6 6.816C7.824 6 9.264 5.784 9.864 5.736C9.96 5.712 10.056 5.712 10.152 5.712C11.184 5.568 12.36 5.544 13.584 5.664C15.192 5.856 16.92 6.336 18.696 7.296C18.696 7.296 17.352 6.024 14.472 5.136L14.688 4.872C14.688 4.872 17.016 4.824 19.464 6.648C19.464 6.648 21.912 11.088 21.912 16.536C21.912 16.536 20.472 19.008 16.728 19.128C16.728 19.128 16.104 18.408 15.6 17.76C17.832 17.136 18.672 15.744 18.672 15.744C17.976 16.2 17.304 16.512 16.728 16.728C15.864 17.088 15.048 17.328 14.256 17.472C12.624 17.76 11.136 17.688 9.864 17.448C8.904 17.256 8.064 16.992 7.368 16.728C6.984 16.56 6.552 16.368 6.12 16.152C6.072 16.104 6.024 16.08 5.976 16.056C5.952 16.032 5.928 16.032 5.904 16.008C5.592 15.84 5.424 15.72 5.424 15.72C5.424 15.72 6.24 17.064 8.4 17.712C7.896 18.36 7.272 19.128 7.272 19.128C3.504 19.008 2.088 16.536 2.088 16.536C2.088 11.088 4.536 6.648 4.536 6.648C6.816 4.944 9 4.872 9.264 4.872ZM8.832 11.208C7.848 11.208 7.104 12.048 7.104 13.08C7.104 14.112 7.872 14.976 8.832 14.976C9.792 14.976 10.56 14.112 10.56 13.08C10.584 12.048 9.792 11.208 8.832 11.208ZM15.024 11.208C14.064 11.208 13.296 12.048 13.296 13.08C13.296 14.112 14.064 14.976 15.024 14.976C15.984 14.976 16.752 14.112 16.752 13.08C16.752 12.048 15.984 11.208 15.024 11.208Z"})})}),Object(te.jsx)(E.a,{onClick:function(){window.open("https://twitter.com/NabeFinance")},children:Object(te.jsx)(pe.a,{})})]})})},de=function(e){var t=e.children;return Object(te.jsxs)("div",{children:[Object(te.jsx)(j.a,{defaultTitle:"Nabe.Finance",titleTemplate:"%s | Nabe.Finance"}),Object(te.jsx)(ae,{}),Object(te.jsx)(x.a,{sx:{display:"flex",flexDirection:"column",flexGrow:1,alignItems:"center",justifyItems:"center",padding:"8rem 2.5rem"},children:t}),Object(te.jsx)(le,{})]})},ye=n(365),be=function(){return Object(te.jsxs)(M.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},children:[Object(te.jsx)("img",{src:"images/loading.png",alt:"Logo"}),Object(te.jsx)(ye.a,{})]})},je=n(77),me=n(135),xe=n(92),fe=n(80),he=n(101),Oe=n.n(he),ve=(new Oe.a(0),new Oe.a(1),new Oe.a(9),new Oe.a(10),function(e){return Te(e).toJSON()}),Te=function(e){return new Oe.a(e.toString())},ge=V(),we=new G.a.providers.JsonRpcProvider(ge),Ce="0x617E3a5eC6945ACBe51A2E85B347a227e53335Cc",Me=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"season",type:"uint256"}],name:"End",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"season",type:"uint256"},{indexed:!0,internalType:"address",name:"who",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Enter",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"season",type:"uint256"},{indexed:!0,internalType:"address",name:"who",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Exit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"season",type:"uint256"}],name:"Start",type:"event"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"address",name:"",type:"address"}],name:"amounts",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"checkEnd",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"currentSeason",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"end",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"enter",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"season",type:"uint256"}],name:"exit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"address",name:"",type:"address"}],name:"exited",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"maxRCounts",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"maxSRCounts",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"maxSSRCounts",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"nRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"period",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"rRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"rs",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_period",type:"uint256"}],name:"setPeriod",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IHanulRNG",name:"_rng",type:"address"}],name:"setRNG",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"srRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"srs",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"ssrRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"ssrs",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"startSeasonBlock",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"totalAmounts",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"totalWeights",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"userCounts",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"address",name:"",type:"address"}],name:"weights",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],ke=[{inputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"},{internalType:"string",name:"_version",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"DOMAIN_SEPARATOR",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"PERMIT_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"permit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"version",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],Ee=function(e,t,n){var a=null!==n&&void 0!==n?n:we;return new G.a.Contract(t,e,a)},Se=function(e){return Ee(Me,Ce,e)},De=Se(),Ie=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n,a,i,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=ve,e.next=4,De.currentSeason();case 4:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.t2=ve,e.next=9,De.userCounts(t);case 9:return e.t3=e.sent,n=(0,e.t2)(e.t3),e.t4=fe.utils,e.next=14,De.totalAmounts(t);case 14:return e.t5=e.sent,a=e.t4.formatEther.call(e.t4,e.t5),e.next=18,De.checkEnd();case 18:return i=e.sent,e.next=21,De.nextTime;case 21:return r=e.sent,e.abrupt("return",{isLoading:!1,season:t,participant:n,tvl:a,potEnd:i,nextDraw:r});case 25:return e.prev=25,e.t6=e.catch(0),e.abrupt("return",{isLoading:!0,season:"0",participant:"0",tvl:"0",potEnd:!1,nextDraw:new Date});case 28:case"end":return e.stop()}}),e,null,[[0,25]])})));return function(){return e.apply(this,arguments)}}(),Ae={potData:{isLoading:!0,season:"0",participant:"0",tvl:"0",potEnd:!1,nextDraw:new Date}},Pe=Object(xe.b)("pot/fetchPot",Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),Re=Object(xe.c)({name:"pot",initialState:Ae,reducers:{},extraReducers:function(e){e.addCase(Pe.fulfilled,(function(e,t){var n=t.payload;e.potData=Object(me.a)({},n)}))}}).reducer,Le=je.c,Ne=function(){var e=Object(je.b)();Object(a.useEffect)((function(){e(Pe())}),[e])},Fe=n(366),We=n(367),Be=n(368),ze=n(369),He=n(343),Ge=n(117),Je=n.n(Ge),_e=Object(xe.c)({name:"modal",initialState:{isAmountModal:!1,isTxModal:!1},reducers:{toggleAmountModal:function(e){e.isAmountModal=!e.isAmountModal},toggleTxModal:function(e){e.isTxModal=!e.isTxModal}}}),Ze=_e.actions,Ve=Ze.toggleAmountModal,Ue=(Ze.toggleTxModal,_e.reducer),qe=function(e){var t=e.image,n=e.title,i=e.season,r=e.participant,s=e.tvl,c=e.end,u=e.nextDraw,o=Je()(u),p=Object(je.b)(),l=Object(a.useState)(Je()()),d=Object(v.a)(l,2),y=d[0],b=d[1],j=Je.a.duration(o.diff(y));return Object(a.useEffect)((function(){var e=setInterval((function(){b(Je()())}),1e3);return function(){return clearInterval(e)}}),[]),Object(te.jsx)(te.Fragment,{children:Object(te.jsxs)(Fe.a,{sx:{width:300},children:[Object(te.jsx)(We.a,{children:Object(te.jsxs)(m.a,{container:!0,spacing:2,children:[Object(te.jsx)(m.a,{item:!0,xs:6,children:Object(te.jsx)("img",{src:"images/".concat(t,".png"),alt:"Logo",height:"60"})}),Object(te.jsxs)(m.a,{item:!0,xs:6,sx:{textAlign:"right"},children:[Object(te.jsxs)(w.a,{variant:"subtitle1",children:["#",i]}),Object(te.jsx)(w.a,{variant:"h6",children:n})]}),Object(te.jsx)(m.a,{item:!0,xs:12,children:Object(te.jsx)(Be.a,{})}),Object(te.jsx)(m.a,{item:!0,xs:6,children:Object(te.jsx)(w.a,{variant:"body2",children:"Participants"})}),Object(te.jsx)(m.a,{item:!0,xs:6,sx:{textAlign:"right"},children:Object(te.jsx)(w.a,{children:r})}),Object(te.jsx)(m.a,{item:!0,xs:6,children:Object(te.jsx)(w.a,{variant:"body2",children:"SSR Prize"})}),Object(te.jsx)(m.a,{item:!0,xs:6,sx:{textAlign:"right"},children:Object(te.jsxs)(w.a,{children:["$",s]})}),Object(te.jsx)(m.a,{item:!0,xs:6,children:Object(te.jsx)(w.a,{variant:"body2",children:"Next Draw"})}),Object(te.jsx)(m.a,{item:!0,xs:6,sx:{textAlign:"right"},children:Object(te.jsxs)(w.a,{children:[j.days(),"d ",j.hours(),"h"," ",j.minutes(),"m ",j.seconds(),"s"]})})]})}),Object(te.jsx)(ze.a,{children:Object(te.jsx)(He.a,{title:"The odds for the winner are as follows: SSR 3%, SR 7%, R 15%, N 75%",children:c?Object(te.jsx)(k.a,{fullWidth:!0,variant:"contained",disabled:!0,children:"ENDED POT"}):Object(te.jsx)(k.a,{fullWidth:!0,variant:"contained",onClick:function(){p(Ve())},children:"Enter amount"})})})]})})},Ke=n(370),Ye=n(371),$e=n(372),Qe=n(344),Xe=n(373),et=n(206),tt=function(){var e=Object(T.b)(),t=e.library,n=e.chainId,i=Object(et.a)(e,["library","chainId"]),r=Object(a.useRef)(t),s=Object(a.useState)(t||we),c=Object(v.a)(s,2),u=c[0],o=c[1];return Object(a.useEffect)((function(){t!==r.current&&(o(t||we),r.current=t)}),[t]),Object(me.a)({library:u,chainId:null!==n&&void 0!==n?n:parseInt("56",10)},i)};n(76),n(24),n(177);var nt=function(){var e=tt().library;return Object(a.useMemo)((function(){return t=null===e||void 0===e?void 0:e.getSigner(),Ee(ke,"0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",t);var t}),[e])},at=function(){var e=function(){var e=tt().library;return Object(a.useMemo)((function(){return Se(null===e||void 0===e?void 0:e.getSigner())}),[e])}(),t=nt(),n=Object(a.useState)("0"),i=Object(v.a)(n,2),r=i[0],s=i[1],c=Le((function(e){return e.modal.isAmountModal})),u=Object(je.b)(),o=function(){u(Ve())},p=function(){var e=Object(O.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.approve(Ce,fe.utils.parseEther(r));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var t=Object(O.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.enter(fe.utils.parseEther(r));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var e=Object(O.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(),l(),o();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(te.jsxs)(Ke.a,{open:c,onClose:o,sx:{paddingTop:10,height:"80%"},children:[Object(te.jsx)(Ye.a,{children:"ENTER AMOUNT"}),Object(te.jsx)($e.a,{children:Object(te.jsx)(Qe.a,{sx:{marginTop:1},label:"Enter Amount",size:"small",value:r,onChange:function(e){s(e.target.value)},fullWidth:!0})}),Object(te.jsxs)(Xe.a,{children:[Object(te.jsx)(k.a,{onClick:d,autoFocus:!0,color:"success",children:"Deposit"}),Object(te.jsx)(k.a,{onClick:o,color:"error",children:"Cancel"})]})]})},it=n(351),rt=function(){var e=Le((function(e){return e.modal.isTxModal}));return Object(te.jsx)(it.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:e,children:Object(te.jsxs)(Ke.a,{open:e,children:[Object(te.jsx)(Ye.a,{children:"Transaction..."}),Object(te.jsxs)($e.a,{children:[Object(te.jsx)("img",{src:"images/tx.png",alt:"Logo",width:"256"}),Object(te.jsx)(ye.a,{})]})]})})},st=function(){var e=Le((function(e){return e.pots.potData.isLoading})),t=Le((function(e){return e.pots.potData.season})),n=Le((function(e){return e.pots.potData.participant})),a=Le((function(e){return e.pots.potData.tvl})),i=Le((function(e){return e.pots.potData.potEnd})),r=Le((function(e){return e.pots.potData.nextDraw}));return Ne(),e?Object(te.jsx)(be,{}):Object(te.jsxs)(de,{children:[Object(te.jsx)(j.a,{title:"Home"}),Object(te.jsxs)(m.a,{container:!0,spacing:5,children:[Object(te.jsx)(m.a,{item:!0,children:Object(te.jsx)(qe,{image:"pancake",title:"Cake Pot",season:t,participant:n,tvl:a,end:i,nextDraw:r})}),Object(te.jsx)(m.a,{item:!0,children:Object(te.jsx)(qe,{image:"nabe",title:"Nabe Pot",season:t,participant:n,tvl:a,end:i,nextDraw:r})})]}),Object(te.jsx)(at,{}),Object(te.jsx)(rt,{})]})},ct=function(){return Object(te.jsxs)(de,{children:[Object(te.jsx)(j.a,{title:"Home"}),"MyPot"]})},ut=function(){var e=Object(u.f)();return Object(te.jsxs)(de,{children:[Object(te.jsx)(j.a,{children:Object(te.jsx)("title",{children:"404"})}),Object(te.jsxs)(m.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",alignContent:"center",spacing:3,children:[Object(te.jsx)(m.a,{item:!0,children:Object(te.jsx)(w.a,{variant:"h1",children:"404"})}),Object(te.jsx)(m.a,{item:!0,children:Object(te.jsx)(w.a,{variant:"h5",children:"Page Not Found"})}),Object(te.jsx)(m.a,{item:!0,children:Object(te.jsx)(k.a,{color:"primary",variant:"contained",onClick:function(){return e.push("/")},children:"Go To Home"})})]})]})},ot=function(){return Object(te.jsxs)(de,{children:[Object(te.jsx)(j.a,{title:"Winner"}),"Winner"]})},pt=function(){return Object(te.jsxs)(c.a,{children:[Object(te.jsx)(o.a,{}),Object(te.jsxs)(u.c,{children:[Object(te.jsx)(u.a,{exact:!0,path:"/",component:st}),Object(te.jsx)(u.a,{exact:!0,path:"/mypot",component:ct}),Object(te.jsx)(u.a,{exact:!0,path:"/winner",component:ot}),Object(te.jsx)(u.a,{path:"*",component:ut})]})]})},lt=n(204),dt=n(352),yt=n(342),bt=n(203),jt=n.n(bt),mt=Object(xe.a)({devTools:!1,reducer:{pots:Re,modal:Ue},middleware:function(e){return e({thunk:!0}).concat([jt.a])}}),xt=function(e){var t=e.children,n=Object(lt.a)({palette:{mode:"light",primary:{light:"#735858",main:"#371110",dark:"#2a0c0c"},secondary:{light:"#dae6f0",main:"#cadbe9",dark:"#bdd2e3"}},typography:{fontFamily:["Ubuntu","sans-serif"].join(",")}},[]);return Object(te.jsx)(T.a,{getLibrary:X,children:Object(te.jsx)(je.a,{store:mt,children:Object(te.jsx)(dt.a,{theme:n,children:Object(te.jsx)(yt.a,{i18n:p.a,children:t})})})})},ft=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,721)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(te.jsx)(i.a.StrictMode,{children:Object(te.jsx)(xt,{children:Object(te.jsx)(pt,{})})}),document.getElementById("root")),ft()}},[[284,1,3]]]);
//# sourceMappingURL=main.5652c2a6.chunk.js.map