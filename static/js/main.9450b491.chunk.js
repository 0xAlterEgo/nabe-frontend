(this["webpackJsonpnabe-frontend"]=this["webpackJsonpnabe-frontend"]||[]).push([[0],{179:function(t){t.exports=JSON.parse("{}")},267:function(t,e){},289:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),c=n(65),r=n.n(c),s=n(202),o=n(36),u=n(346),l=n(112),p=n(91),d={en:{translation:n(179)}};l.a.use(p.e).init({resources:d,fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});l.a;var j,b,y=n(126),m=n(369),O=n(6),h=n.n(O),x=n(61),f=n(22),v=n(83),C=n(359),T=n(354),g=n(360),w=n(353),S=n(361),E=n(362),_=n(363),M=n(355),R=n(365),A=n(352),D=n(366),k=n(367),P=n(368),N=n(197),I=n.n(N),L=n(358),W=n(11),F=n(187),B=n(188),H=n(189),K=n(71),U=n(190),V=n.n(U),J=[Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NODE_1,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NODE_2,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NODE_3],z=function(){return V()(J)},G=z(),Z=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CHAIN_ID,10),q=new F.a({supportedChainIds:[Z]}),$=new B.a({rpc:Object(W.a)({},Z,G),qrcode:!0,pollingInterval:12e3}),Q=new H.BscConnector({supportedChainIds:[Z]});!function(t){t.Injected="injected",t.WalletConnect="walletconnect",t.BSC="bsc"}(b||(b={}));var X=(j={},Object(W.a)(j,b.Injected,q),Object(W.a)(j,b.WalletConnect,$),Object(W.a)(j,b.BSC,Q),j),Y=function(t){var e=new K.a.providers.Web3Provider(t);return e.pollingInterval=12e3,e},tt=n(131),et=(n(207),z()),nt=new K.a.providers.JsonRpcProvider(et);var it,at=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return"".concat(t.substring(0,e),"...").concat(t.substring(t.length-n))},ct=n(2),rt={textDecoration:"none",color:"gray","&:hover":{color:"#735858",fontWeight:"bold"},"&:active":{color:"#735858",fontWeight:"bold"}},st=function(){var t=Object(L.a)("").t,e=Object(v.b)(),n=e.active,a=e.connector,c=e.account,r=e.activate,s=e.deactivate,o=e.error,u=Object(i.useState)(),l=Object(f.a)(u,2),p=l[0],d=l[1],j=Object(i.useState)(!1),y=Object(f.a)(j,2),m=y[0],O=y[1],N=function(t){O(t)};Object(i.useEffect)((function(){p&&p===a&&d(void 0)}),[p,a]),function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(v.b)(),n=e.active,a=e.error,c=e.activate;Object(i.useEffect)((function(){var e=window.ethereum;if(e&&e.on&&!n&&!a&&!t){var i=function(){c(q)},r=function(){var t=Object(x.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("This chain ".concat(e," changing BSC"));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(t){console.log("accountsChanged"),t.length>0&&c(q)},o=function(t){console.log("This network ".concat(t," changing BSC")),c(q)};return e.on("connect",i),e.on("chainChanged",r),e.on("accountsChanged",s),e.on("networkChanged",o),function(){e.removeListener&&(e.removeListener("connect",i),e.removeListener("chainChanged",r),e.removeListener("accountsChanged",s),e.removeListener("networkChanged",o))}}}),[n,a,t,c])}(!function(){var t=Object(v.b)(),e=t.activate,n=t.active,a=Object(i.useState)(!1),c=Object(f.a)(a,2),r=c[0],s=c[1];return Object(i.useEffect)((function(){q.isAuthorized().then((function(t){t?e(q,void 0,!0).catch((function(){s(!0)})):s(!0)}))}),[e]),Object(i.useEffect)((function(){!r&&n&&s(!0)}),[r,n]),r}());var W=function(){return Object(ct.jsx)(C.a,{href:"/",underline:"none",children:Object(ct.jsxs)(T.a,{container:!0,spacing:2,alignItems:"center",alignContent:"center",children:[Object(ct.jsx)(T.a,{item:!0,children:Object(ct.jsx)("img",{src:"/logo512.png",alt:"Logo",height:30})}),Object(ct.jsx)(T.a,{item:!0,children:Object(ct.jsx)(g.a,{color:"textPrimary",variant:"h6",children:"Nabe.Finance"})})]})})},F=function(){return Object(ct.jsx)(w.a,{color:n?"success":o?"error":"warning",variant:"dot",children:Object(ct.jsx)(S.a,{sx:{display:{md:"block",xs:"none"}},children:void 0===c?Object(ct.jsx)(E.a,{variant:"outlined",sx:{margin:function(t){return t.spacing(0,0,0,2)}},onClick:function(){r(X[b.Injected],function(){var t=Object(x.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},children:t("Connect Wallet")}):Object(ct.jsx)(E.a,{onClick:function(){s()},children:null===c?"-":c?"".concat(at(c)):"account is null."})})})},B=function(){return Object(ct.jsx)(S.a,{sx:{display:{md:"block",xs:"none"},marginLeft:3},children:Object(ct.jsxs)(T.a,{container:!0,spacing:3,children:[Object(ct.jsx)(T.a,{item:!0,children:Object(ct.jsx)(C.a,{href:"/",underline:"none",sx:rt,children:t("NabePot")})}),Object(ct.jsx)(T.a,{item:!0,children:Object(ct.jsx)(C.a,{href:"/MyPot",underline:"none",sx:rt,children:t("My Pots")})}),Object(ct.jsx)(T.a,{item:!0,children:Object(ct.jsx)(C.a,{href:"/Docs",underline:"none",sx:rt,children:t("Docs")})})]})})},H=function(){return Object(ct.jsxs)(S.a,{sx:{display:{md:"none",xs:"block"}},children:[void 0===c?Object(ct.jsx)(E.a,{onClick:function(){r(X[b.Injected],function(){var t=Object(x.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},children:t("Connect Wallet")}):Object(ct.jsx)(E.a,{onClick:function(){s()},children:null===c?"-":c?"".concat(at(c)):"account is null."}),Object(ct.jsx)(_.a,{onClick:function(){N(!0)},children:Object(ct.jsx)(I.a,{})})]})},K=function(){return Object(ct.jsx)(M.a,{anchor:"right",open:m,onClose:function(){N(!1)},children:Object(ct.jsx)(R.a,{style:{width:250},children:Object(ct.jsx)(C.a,{href:"/",underline:"none",children:Object(ct.jsx)(A.a,{button:!0,children:Object(ct.jsx)(D.a,{children:"Swap"})})})})})};return Object(ct.jsxs)(ct.Fragment,{children:[Object(ct.jsx)(k.a,{color:"transparent",position:"static",elevation:1,sx:{marginTop:function(t){return t.spacing(1)},marginBottom:function(t){return t.spacing(5)}},children:Object(ct.jsxs)(P.a,{variant:"dense",children:[Object(ct.jsx)(W,{}),Object(ct.jsx)("div",{style:{flexGrow:1}}),Object(ct.jsx)(B,{}),Object(ct.jsx)(H,{}),Object(ct.jsx)(F,{})]})}),Object(ct.jsx)(K,{})]})},ot=n(212),ut=n(198),lt=n.n(ut),pt=n(199),dt=n.n(pt),jt=n(200),bt=n.n(jt),yt=function(){return Object(ct.jsx)(T.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",alignContent:"center",sx:{marginTop:1,justifyContent:"center"},children:Object(ct.jsxs)(T.a,{item:!0,children:[Object(ct.jsx)(_.a,{onClick:function(){window.open("https://github.com/nabefinance")},children:Object(ct.jsx)(lt.a,{})}),Object(ct.jsx)(_.a,{onClick:function(){window.open("https://t.me/NabeFinance")},children:Object(ct.jsx)(dt.a,{})}),Object(ct.jsx)(_.a,{onClick:function(){window.open("https://discord.gg/dzAym5KDS2")},children:Object(ct.jsx)(ot.a,{children:Object(ct.jsx)("path",{d:"M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM9.264 4.872C9.288 4.872 9.312 4.872 9.312 4.872L9.48 5.088C6.408 5.952 5.016 7.296 5.016 7.296C5.016 7.296 5.376 7.104 6 6.816C7.824 6 9.264 5.784 9.864 5.736C9.96 5.712 10.056 5.712 10.152 5.712C11.184 5.568 12.36 5.544 13.584 5.664C15.192 5.856 16.92 6.336 18.696 7.296C18.696 7.296 17.352 6.024 14.472 5.136L14.688 4.872C14.688 4.872 17.016 4.824 19.464 6.648C19.464 6.648 21.912 11.088 21.912 16.536C21.912 16.536 20.472 19.008 16.728 19.128C16.728 19.128 16.104 18.408 15.6 17.76C17.832 17.136 18.672 15.744 18.672 15.744C17.976 16.2 17.304 16.512 16.728 16.728C15.864 17.088 15.048 17.328 14.256 17.472C12.624 17.76 11.136 17.688 9.864 17.448C8.904 17.256 8.064 16.992 7.368 16.728C6.984 16.56 6.552 16.368 6.12 16.152C6.072 16.104 6.024 16.08 5.976 16.056C5.952 16.032 5.928 16.032 5.904 16.008C5.592 15.84 5.424 15.72 5.424 15.72C5.424 15.72 6.24 17.064 8.4 17.712C7.896 18.36 7.272 19.128 7.272 19.128C3.504 19.008 2.088 16.536 2.088 16.536C2.088 11.088 4.536 6.648 4.536 6.648C6.816 4.944 9 4.872 9.264 4.872ZM8.832 11.208C7.848 11.208 7.104 12.048 7.104 13.08C7.104 14.112 7.872 14.976 8.832 14.976C9.792 14.976 10.56 14.112 10.56 13.08C10.584 12.048 9.792 11.208 8.832 11.208ZM15.024 11.208C14.064 11.208 13.296 12.048 13.296 13.08C13.296 14.112 14.064 14.976 15.024 14.976C15.984 14.976 16.752 14.112 16.752 13.08C16.752 12.048 15.984 11.208 15.024 11.208Z"})})}),Object(ct.jsx)(_.a,{onClick:function(){window.open("https://twitter.com/NabeFinance")},children:Object(ct.jsx)(bt.a,{})})]})})},mt=function(t){var e=t.children;return Object(ct.jsxs)("div",{children:[Object(ct.jsx)(y.a,{defaultTitle:"Nabe.Finance",titleTemplate:"%s | Nabe.Finance"}),Object(ct.jsx)(st,{}),Object(ct.jsx)(m.a,{sx:{display:"flex",flexDirection:"column",flexGrow:1,alignItems:"center",justifyItems:"center",padding:"8rem 2.5rem"},children:e}),Object(ct.jsx)(yt,{})]})},Ot=n(348),ht=n(115),xt=n.n(ht),ft=function(){var t=xt()("2035-01-01"),e=Object(i.useState)(xt()()),n=Object(f.a)(e,2),a=n[0],c=n[1],r=xt.a.duration(t.diff(a));return Object(i.useEffect)((function(){var t=setInterval((function(){c(xt()())}),1e3);return function(){return clearInterval(t)}}),[]),Object(ct.jsx)(Ot.a,{title:"cooking time",children:Object(ct.jsxs)(T.a,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",children:[Object(ct.jsx)(T.a,{item:!0,children:Object(ct.jsx)("img",{src:"/logo512.png",alt:"Logo",height:50})}),Object(ct.jsx)(T.a,{item:!0,children:Object(ct.jsxs)(g.a,{variant:"body2",children:[r.hours(),":",r.minutes(),":",r.seconds()]})})]})})},vt=n(374),Ct=n(375),Tt=n(376),gt=n(377),wt=n(72),St=n(90),Et=Object(St.c)({name:"modal",initialState:{isAmountModal:!1},reducers:{toggleAmountModal:function(t){t.isAmountModal=!t.isAmountModal}}}),_t=Et.actions.toggleAmountModal,Mt=Et.reducer,Rt=n(370),At=n(371),Dt=n(372),kt=n(349),Pt=n(373),Nt=n(75),It=n(99),Lt=n.n(It),Wt=(new Lt.a(0),new Lt.a(1),new Lt.a(9),new Lt.a(10),function(t){return Ft(t).toJSON()}),Ft=function(t){return new Lt.a(t.toString())},Bt=function(t,e,n){var i=null!==n&&void 0!==n?n:nt;return new K.a.Contract(e,t,i)},Ht=Bt([{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"season",type:"uint256"}],name:"End",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"season",type:"uint256"},{indexed:!0,internalType:"address",name:"who",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Enter",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"season",type:"uint256"},{indexed:!0,internalType:"address",name:"who",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Exit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"season",type:"uint256"}],name:"Start",type:"event"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"address",name:"",type:"address"}],name:"amounts",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"checkEnd",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"currentSeason",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"end",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"enter",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"season",type:"uint256"}],name:"exit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"address",name:"",type:"address"}],name:"exited",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"maxRCounts",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"maxSRCounts",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"maxSSRCounts",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"nRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"period",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"rRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"rs",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_period",type:"uint256"}],name:"setPeriod",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IHanulRNG",name:"_rng",type:"address"}],name:"setRNG",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"srRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"srs",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"ssrRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"ssrs",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"startSeasonBlock",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"totalAmounts",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"totalWeights",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"userCounts",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"address",name:"",type:"address"}],name:"weights",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],"0x617E3a5eC6945ACBe51A2E85B347a227e53335Cc",it),Kt=function(){var t=Object(x.a)(h.a.mark((function t(){var e,n,i,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=Wt,t.next=4,Ht.currentSeason();case 4:return t.t1=t.sent,e=(0,t.t0)(t.t1),t.t2=Wt,t.next=9,Ht.userCounts(e);case 9:return t.t3=t.sent,n=(0,t.t2)(t.t3),t.t4=Nt.utils,t.next=14,Ht.totalAmounts(e);case 14:return t.t5=t.sent,i=t.t4.formatEther.call(t.t4,t.t5),t.next=18,Ht.checkEnd();case 18:return a=t.sent,t.abrupt("return",{isLoading:!1,season:e,participant:n,tvl:i,potEnd:a});case 22:return t.prev=22,t.t6=t.catch(0),t.abrupt("return",{isLoading:!0,season:"0",participant:"0",tvl:"0",potEnd:!1});case 25:case"end":return t.stop()}}),t,null,[[0,22]])})));return function(){return t.apply(this,arguments)}}(),Ut=Object(St.b)("pot/fetchPot",Object(x.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Kt();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),Vt=Object(St.c)({name:"pot",initialState:{potData:{isLoading:!0,season:"0",participant:"0",tvl:"0",potEnd:!1}},reducers:{},extraReducers:function(t){t.addCase(Ut.fulfilled,(function(t,e){var n=e.payload;t.potData=Object(tt.a)({},n)}))}}).reducer,Jt=wt.c,zt=function(){var t=Jt((function(t){return t.modal.isAmountModal})),e=Object(wt.b)(),n=function(){e(_t())};return Object(ct.jsxs)(Rt.a,{open:t,onClose:n,sx:{paddingTop:10,height:"80%"},children:[Object(ct.jsx)(At.a,{children:"ENTER AMOUNT"}),Object(ct.jsx)(Dt.a,{children:Object(ct.jsx)(kt.a,{placeholder:"Enter CAKE amount",size:"small",fullWidth:!0})}),Object(ct.jsxs)(Pt.a,{children:[Object(ct.jsx)(E.a,{onClick:n,autoFocus:!0,children:"Deposit"}),Object(ct.jsx)(E.a,{onClick:n,children:"Cancel"})]})]})},Gt=function(t){t.season,t.participant,t.tvl;var e=t.end,n=Object(wt.b)();return Object(ct.jsxs)(ct.Fragment,{children:[Object(ct.jsxs)(vt.a,{sx:{width:300},children:[Object(ct.jsx)(Ct.a,{children:Object(ct.jsxs)(T.a,{container:!0,spacing:2,children:[Object(ct.jsx)(T.a,{item:!0,xs:6,children:e?Object(ct.jsx)(g.a,{variant:"caption",children:"ENDED"}):Object(ct.jsx)(g.a,{variant:"caption",children:"LIVE"})}),Object(ct.jsx)(T.a,{item:!0,xs:6,sx:{textAlign:"right"},children:Object(ct.jsx)(g.a,{variant:"caption",children:"#33"})}),Object(ct.jsx)(T.a,{item:!0,xs:12,children:Object(ct.jsx)(Tt.a,{variant:"determinate",value:30})}),Object(ct.jsx)(T.a,{item:!0,xs:6,children:Object(ct.jsx)(g.a,{variant:"body2",children:"Participants"})}),Object(ct.jsx)(T.a,{item:!0,xs:6,sx:{textAlign:"right"},children:Object(ct.jsx)(g.a,{children:"300"})}),Object(ct.jsx)(T.a,{item:!0,xs:6,children:Object(ct.jsx)(g.a,{variant:"body2",children:"SSR Prize"})}),Object(ct.jsx)(T.a,{item:!0,xs:6,sx:{textAlign:"right"},children:Object(ct.jsx)(g.a,{children:"$1,132,512"})})]})}),Object(ct.jsx)(gt.a,{children:Object(ct.jsx)(Ot.a,{title:"The odds for the winner are as follows: SSR 3%, SR 7%, R 15%, N 75%",children:e?Object(ct.jsx)(E.a,{fullWidth:!0,variant:"contained",disabled:!0,children:"ENDED POT"}):Object(ct.jsx)(E.a,{fullWidth:!0,variant:"contained",onClick:function(){n(_t())},children:"Enter amount"})})})]}),Object(ct.jsx)(zt,{})]})},Zt=function(){return Object(ct.jsx)(ct.Fragment,{children:Object(ct.jsxs)(T.a,{container:!0,flexDirection:"row",justifyContent:"center",spacing:5,children:[Object(ct.jsx)(T.a,{item:!0,xs:12,children:Object(ct.jsx)(ft,{})}),Object(ct.jsx)(T.a,{item:!0,children:Object(ct.jsx)(Gt,{end:!0})}),Object(ct.jsx)(T.a,{item:!0,children:Object(ct.jsx)(Gt,{end:!1})})]})})},qt=function(){return Object(ct.jsxs)(mt,{children:[Object(ct.jsx)(y.a,{title:"Home"}),Object(ct.jsx)(Zt,{})]})},$t=function(){return Object(ct.jsxs)(s.a,{children:[Object(ct.jsx)(u.a,{}),Object(ct.jsx)(o.c,{children:Object(ct.jsx)(o.a,{exact:!0,path:"/",component:qt})})]})},Qt=n(205),Xt=n(357),Yt=n(347),te=n(204),ee=n.n(te),ne=Object(St.a)({devTools:!1,reducer:{pots:Vt,modal:Mt},middleware:function(t){return t({thunk:!0}).concat([ee.a])}}),ie=function(t){var e=t.children,n=Object(Qt.a)({palette:{mode:"light",primary:{light:"#735858",main:"#371110",dark:"#2a0c0c"},secondary:{light:"#dae6f0",main:"#cadbe9",dark:"#bdd2e3"}},typography:{fontFamily:["Ubuntu","sans-serif"].join(",")}},[]);return Object(ct.jsx)(v.a,{getLibrary:Y,children:Object(ct.jsx)(wt.a,{store:ne,children:Object(ct.jsx)(Xt.a,{theme:n,children:Object(ct.jsx)(Yt.a,{i18n:l.a,children:e})})})})},ae=function(t){t&&t instanceof Function&&n.e(5).then(n.bind(null,719)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),i(t),a(t),c(t),r(t)}))};r.a.render(Object(ct.jsx)(a.a.StrictMode,{children:Object(ct.jsx)(ie,{children:Object(ct.jsx)($t,{})})}),document.getElementById("root")),ae()}},[[289,1,3]]]);
//# sourceMappingURL=main.9450b491.chunk.js.map