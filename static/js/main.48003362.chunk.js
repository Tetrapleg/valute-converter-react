(this.webpackJsonpvalute_converter_react=this.webpackJsonpvalute_converter_react||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var a,r,i,c,o,s,l,b,d,u,j,O,f,x,p,m,h,g,v,y,C=n(0),w=n.n(C),N=n(10),k=n.n(N),V=(n(89),n(14)),B=n(144),F=n(147),T=n(49),R=n(17),S=n(15),U=n(150),D=n(152),E=n(157),I=n(7),M=n(52),W=n.n(M),L=n(68),_=n(69),z=n.n(_),A=n(25),K="SET_VALUTE_LIST",P="SET_IS_FETCHING",H="UPLOAD_USER_VALUTE",G="SET_NUMBER_OF_CONVERTION",Z="SET_VALUTE_OF_CONVERTION",q={valute:null,isFetching:!0,userValute:{CharCode:"USD"},convertValute:{CharCode:"EUR"},numOfConvert:""},J=function(e){return{type:H,payload:e}},Y=function(e){return{type:Z,payload:e}},X=["AMD","AUD","AZN","BGN","BRL","BYN","CAD","CHF","CNY","CZK","DKK","EUR","GBP","HKD","HUF","INR","JPY","KGS","KRW","KZT","MDL","NOK","PLN","RON","SEK","SGD","TJS","TMT","TRY","UAH","USD","UZS","XDR","ZAR"],Q=function(){return function(){var e=Object(L.a)(W.a.mark((function e(t){var n,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:P,payload:!0}),e.next=3,z.a.get("https://www.cbr-xml-daily.ru/daily_json.js");case 3:n=e.sent,a=X.map((function(e){return n.data.Valute[e]})),t({type:K,payload:a}),t(J(a[0])),t(Y(a[1]));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},$=n(2),ee=Object(S.c)(a||(a=Object(V.a)(["\n    0%, 80%, 100% {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n    }\n    40% {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n    }\n"]))),te=Object(S.a)(r||(r=Object(V.a)(["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n"]))),ne=Object(S.a)(i||(i=Object(V.a)(["\n    content: '';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: #2697FF;\n    border-radius: 50%;\n    -webkit-animation: "," 1.2s infinite ease-in-out;\n            animation: "," 1.2s infinite ease-in-out;\n"])),ee,ee),ae=S.b.div(c||(c=Object(V.a)(["\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  position: fixed;\n"]))),re=S.b.div(o||(o=Object(V.a)(["\n  flex: 1 1 25%;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  position: absolute;\n  background-color: rgba(204,204,255, 0.6);\n"]))),ie=S.b.div(s||(s=Object(V.a)(["\n  width: 90px;\n  height: 90px;\n  position: relative;\n  margin: auto;\n"]))),ce=S.b.div(l||(l=Object(V.a)(["\n  ",";\n  &::before{\n    ","\n  }\n"])),te,ne),oe=S.b.div(b||(b=Object(V.a)(["\n  ",";\n  -webkit-transform: rotate(30deg);\n          transform: rotate(30deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -1.1s;\n            animation-delay: -1.1s;\n  }\n"])),te,ne),se=S.b.div(d||(d=Object(V.a)(["\n  ","\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -1.0s;\n            animation-delay: -1.0s;\n  }\n  "])),te,ne),le=S.b.div(u||(u=Object(V.a)(["\n  ","\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.9s;\n            animation-delay: -0.9s;\n  }\n  "])),te,ne),be=S.b.div(j||(j=Object(V.a)(["\n  ","\n  -webkit-transform: rotate(120deg);\n          transform: rotate(120deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.8s;\n            animation-delay: -0.8s;\n  }\n  "])),te,ne),de=S.b.div(O||(O=Object(V.a)(["\n  ","\n  -webkit-transform: rotate(150deg);\n          transform: rotate(150deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.7s;\n            animation-delay: -0.7s;\n  }\n  "])),te,ne),ue=S.b.div(f||(f=Object(V.a)(["\n  ","\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.6s;\n            animation-delay: -0.6s;\n  }\n  "])),te,ne),je=S.b.div(x||(x=Object(V.a)(["\n  ","\n  -webkit-transform: rotate(210deg);\n          transform: rotate(210deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.5s;\n            animation-delay: -0.5s;\n  }\n  "])),te,ne),Oe=S.b.div(p||(p=Object(V.a)(["\n  ","\n  -webkit-transform: rotate(240deg);\n          transform: rotate(240deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.4s;\n            animation-delay: -0.4s;\n  }\n  "])),te,ne),fe=S.b.div(m||(m=Object(V.a)(["\n  ","\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.3s;\n            animation-delay: -0.3s;\n  }\n  "])),te,ne),xe=S.b.div(h||(h=Object(V.a)(["\n  ","\n  -webkit-transform: rotate(300deg);\n          transform: rotate(300deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.2s;\n            animation-delay: -0.2s;\n  }\n  "])),te,ne),pe=S.b.div(g||(g=Object(V.a)(["\n  ","\n  -webkit-transform: rotate(330deg);\n          transform: rotate(330deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.1s;\n            animation-delay: -0.1s;\n  }\n  "])),te,ne),me=function(){return Object($.jsx)(ae,{children:Object($.jsx)(re,{children:Object($.jsxs)(ie,{children:[Object($.jsx)(ce,{}),Object($.jsx)(oe,{}),Object($.jsx)(se,{}),Object($.jsx)(le,{}),Object($.jsx)(be,{}),Object($.jsx)(de,{}),Object($.jsx)(ue,{}),Object($.jsx)(je,{}),Object($.jsx)(Oe,{}),Object($.jsx)(fe,{}),Object($.jsx)(xe,{}),Object($.jsx)(pe,{})]})})})},he=n(149),ge=Object(B.a)({input:{marginBottom:"13px",marginLeft:"15px"},title:{paddingTop:"5px",color:"#B0B0B0"}}),ve=function(e){var t=e.children,n=e.userValute,a=ge();return Object($.jsxs)(F.a,{children:[Object($.jsx)(he.a,{align:"left",className:a.title,children:n.Name}),Object($.jsx)(U.a,{container:!0,direction:"row",justify:"space-around",alignItems:"center",children:t})]})},ye=n(151),Ce=n(156),we=n(154),Ne=Object(B.a)({select:{marginBottom:"15px",marginTop:"5px",maxWidth:"100%"}}),ke=function(e){var t=e.userValute,n=e.setUserValute,a=e.abbreviationIsRevealed,r=Object(I.d)((function(e){return e.valutes.valute}),I.b),i=Object(I.c)(),c=Ne();return Object($.jsx)(Ce.a,{className:c.select,labelId:"label",id:"select",value:t.CharCode,onChange:function(e){return i(n(r.filter((function(t){return t.CharCode===e.target.value}))[0]))},children:r&&r.map((function(e){return Object($.jsx)(we.a,{value:e.CharCode,children:a?"".concat(e.CharCode,": (").concat(e.Name,")"):"".concat(e.CharCode)},e.ID)}))})},Ve=Object(B.a)({input:{marginBottom:"13px",marginLeft:"15px",maxWidth:"60px"},title:{paddingTop:"5px",color:"#B0B0B0"}}),Be=function(){var e=Object(I.c)(),t=Object(I.d)((function(e){return e.valutes.userValute}),I.b),n=Object(I.d)((function(e){return e.valutes.numOfConvert}),I.b),a=Ve();return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(U.a,{item:!0,zeroMinWidth:!0,children:Object($.jsx)(ke,{userValute:t,setUserValute:J,abbreviationIsRevealed:!1})}),Object($.jsx)(U.a,{item:!0,zeroMinWidth:!0,children:Object($.jsx)(ye.a,{className:a.input,placeholder:"\u0441\u0443\u043c\u043c\u0430",value:n,onChange:function(t){var n=t.target.value.replace(/\D/g,"");e({type:G,payload:n})}})})]})},Fe=n(155),Te=Object(B.a)({button:{width:"40px",height:"40px",padding:"0",minWidth:"40px",borderRadius:"50%",margin:"15px 10px"}}),Re=function(){var e=Object(I.c)(),t=Object(I.d)((function(e){return e.valutes.userValute})),n=Object(I.d)((function(e){return e.valutes.convertValute})),a=Te();return Object($.jsx)(Fe.a,{className:a.button,variant:"contained",color:"default",onClick:function(){e(J(n)),e(Y(t))},children:"<--\x3e"})},Se=n(35),Ue=Object(B.a)({value:{marginBottom:"13px"},title:{paddingTop:"5px",color:"#B0B0B0"}}),De=function(){var e=Object(I.d)((function(e){return e.valutes.userValute}),I.b),t=Object(I.d)((function(e){return e.valutes.convertValute}),I.b),n=Object(I.d)((function(e){return e.valutes.numOfConvert}),I.b),a=Object(C.useState)("\u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430"),r=Object(Se.a)(a,2),i=r[0],c=r[1],o=Ue();return Object(C.useEffect)((function(){var a=e.Value*t.Nominal/(t.Value*e.Nominal)*n,r=Math.floor(100*a)/100;c(r)}),[e,t,n]),Object($.jsxs)($.Fragment,{children:[Object($.jsx)(U.a,{item:!0,zeroMinWidth:!0,children:Object($.jsx)(ke,{userValute:t,setUserValute:Y,abbreviationIsRevealed:!1})}),Object($.jsx)(U.a,{item:!0,zeroMinWidth:!0,children:Object($.jsx)(he.a,{className:o.value,children:i})})]})},Ee=Object(B.a)({paper:{backgroundColor:"#ffffff",borderRadius:"10px"}}),Ie=function(){var e=Object(I.c)(),t=Object(I.d)((function(e){return e.valutes.userValute})),n=Object(I.d)((function(e){return e.valutes.convertValute})),a=Object(I.d)((function(e){return e.valutes.isFetching})),r=Ee();return Object(C.useEffect)((function(){e(Q())}),[]),Object($.jsx)($.Fragment,{children:a?Object($.jsx)(me,{}):Object($.jsxs)(E.a,{style:{backgroundColor:"#2697FF",padding:"30px 15px"},children:[Object($.jsx)(E.a.Header,{style:{marginBottom:"20px",fontSize:"30px"},children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043b\u044e\u0442"}),Object($.jsx)(F.a,{fixed:!0,children:Object($.jsxs)(U.a,{container:!0,alignItems:"center",justify:"center",children:[Object($.jsx)(U.a,{item:!0,xs:12,sm:!0,md:4,zeroMinWidth:!0,children:Object($.jsx)(D.a,{elevation:3,className:r.paper,children:Object($.jsx)(ve,{userValute:t,children:Object($.jsx)(Be,{})})})}),Object($.jsx)(U.a,{item:!0,zeroMinWidth:!0,children:Object($.jsx)(Re,{})}),Object($.jsx)(U.a,{item:!0,xs:12,sm:!0,md:4,zeroMinWidth:!0,children:Object($.jsx)(D.a,{elevation:3,className:r.paper,children:Object($.jsx)(ve,{userValute:n,children:Object($.jsx)(De,{})})})})]})})]})})},Me=S.b.span(v||(v=Object(V.a)(['\n  margin-left: auto;\n  position: relative;\n  font-weight: 500;\n  font-size: 16px;\n  padding-left: 20px;\n  &::before {\n    position: absolute;\n    content: ">";\n    left: 7px;\n    top: 0;\n  }\n  &.quotationUp {\n    color: #4DD14D;\n    &::before {\n    transform: rotate(-90deg);\n    }\n  }\n  &.quotationDown {\n    color: red;\n    &::before {\n    transform: rotate(90deg);\n    }\n  }\n']))),We=Object(B.a)({container:{padding:"20px"},titleTypography:{marginBottom:"5px",color:"#B0B0B0"},button:{width:"30px",height:"30px",padding:"0",minWidth:"30px",borderRadius:"50%",margin:"0 10px"},visualTypography:{flexGrow:"1"}}),Le=function(){var e=Object(I.d)((function(e){return e.valutes.userValute}),I.b),t=We(),n=Object(C.useState)(!1),a=Object(Se.a)(n,2),r=a[0],i=a[1],c=Object(C.useState)(null),o=Object(Se.a)(c,2),s=o[0],l=o[1];return Object(C.useEffect)((function(){l(r?Math.round(1e4*(1*e.Nominal/e.Value-1*e.Nominal/e.Previous))/1e4:Math.round(1e4*(e.Value/e.Nominal-e.Previous/e.Nominal))/1e4)}),[r,e.Value,e.Previous,e.Nominal]),Object($.jsxs)(F.a,{className:t.container,fixed:!0,maxWidth:"xs",children:[Object($.jsx)(he.a,{className:t.titleTypography,align:"left",children:e.Name}),Object($.jsxs)(U.a,{container:!0,alignItems:"center",children:[Object($.jsx)(he.a,{children:r?"1 RUB":"1 ".concat(e.CharCode)}),Object($.jsx)(Fe.a,{className:t.button,variant:"outlined",color:"primary",onClick:function(){return i(!r)},children:"<--\x3e"}),Object($.jsx)(he.a,{children:r?"".concat(Math.round(1e4*e.Nominal/e.Value)/1e4," ").concat(e.CharCode):"".concat(Math.round(1e4*e.Value/e.Nominal)/1e4," RUB")}),Object($.jsx)(Me,{className:s>0?"quotationUp":"quotationDown",children:"".concat(s>0?s:-s)})]})]})},_e=n(158),ze=n(153),Ae=n(118),Ke=Object(B.a)({inputLabel:{position:"relative",paddingTop:"10px"},input:{marginBottom:"20px",width:"300px",maxWidth:"100%"},list:{position:"absolute",left:"36%",top:"45px",backgroundColor:"#fff",border:"1px solid #2697FF",borderRadius:"5px",padding:"0 5px",zIndex:"1"},listItem:{borderBottom:"1px solid #2697FF",cursor:"pointer"}}),Pe=function(){var e=Object(I.d)((function(e){return e.valutes.valute}),I.b),t=Object(I.c)(),n=Object(C.useState)(""),a=Object(Se.a)(n,2),r=a[0],i=a[1],c=Object(C.useState)([]),o=Object(Se.a)(c,2),s=o[0],l=o[1],b=Ke();Object(C.useEffect)((function(){var t=r.toUpperCase();l(t?e.filter((function(e){return e.CharCode.slice(0,t.length)===t||e.NumCode.slice(0,t.length)===t})):[])}),[r,e]);return Object($.jsxs)(_e.a,{className:b.inputLabel,children:[Object($.jsx)(ye.a,{className:b.input,placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u043a\u043e\u0434 \u0432\u0430\u043b\u044e\u0442\u044b",onChange:function(e){i(e.target.value.trim())},value:r}),0!==s.length&&Object($.jsx)(ze.a,{className:b.list,children:s.map((function(e){return Object($.jsx)(Ae.a,{className:b.listItem,onClick:function(){t(J(e)),i(""),l([])},children:"".concat(e.CharCode,": \u043a\u043e\u0434 \u0432\u0430\u043b\u044e\u0442\u044b ").concat(e.NumCode)},e.ID)}))})]})},He=function(){var e=Object(I.d)((function(e){return e.valutes.userValute}),I.b);return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(_e.a,{id:"label",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443"}),Object($.jsx)(ke,{userValute:e,setUserValute:J,abbreviationIsRevealed:!0})]})},Ge=Object(B.a)({paper:{backgroundColor:"#ffffff",borderRadius:"10px",position:"relative",padding:"0 15px"}}),Ze=function(){var e=Object(I.c)(),t=Object(I.d)((function(e){return e.valutes.isFetching})),n=Ge();return Object(C.useEffect)((function(){e(Q())}),[]),Object($.jsx)($.Fragment,{children:t?Object($.jsx)(me,{}):Object($.jsxs)(E.a,{style:{backgroundColor:"#2697FF",padding:"30px 50px"},children:[Object($.jsx)(E.a.Header,{style:{marginBottom:"20px",fontSize:"30px"},children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0443\u044e \u0432\u0430\u0441 \u0432\u0430\u043b\u044e\u0442\u0443"}),Object($.jsxs)(D.a,{className:n.paper,elevation:3,children:[Object($.jsx)(Pe,{}),Object($.jsx)(He,{})]}),Object($.jsx)(D.a,{elevation:3,style:{backgroundColor:"#ffffff",borderRadius:"10px",marginTop:"30px"},children:Object($.jsx)(Le,{})})]})})},qe=Object(B.a)({container:{padding:"15px 15px"},navLink:{padding:"5px 20px",textDecoration:"none"}}),Je=S.b.div(y||(y=Object(V.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n"])));var Ye=function(){var e=qe();return Object($.jsx)(T.a,{children:Object($.jsxs)(Je,{children:[Object($.jsxs)(F.a,{className:e.container,fixed:!0,maxWidth:"xs",children:[Object($.jsx)(T.b,{className:e.navLink,exact:!0,to:"/",activeStyle:{fontWeight:"bold",color:"red"},children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0432\u0430\u043b\u044e\u0442"}),Object($.jsx)(T.b,{className:e.navLink,to:"/converter",activeStyle:{fontWeight:"bold",color:"red"},children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440"})]}),Object($.jsxs)(R.c,{children:[Object($.jsx)(R.a,{exact:!0,path:"/",component:Ze}),Object($.jsx)(R.a,{path:"/converter",component:Ie})]})]})})},Xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,160)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},Qe=n(37),$e=n(77),et=n(78),tt=Object(Qe.combineReducers)({valutes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(A.a)(Object(A.a)({},e),{},{valute:t.payload,isFetching:!1});case P:return Object(A.a)(Object(A.a)({},e),{},{isFetching:t.payload});case H:return Object(A.a)(Object(A.a)({},e),{},{userValute:t.payload});case G:return Object(A.a)(Object(A.a)({},e),{},{numOfConvert:t.payload});case Z:return Object(A.a)(Object(A.a)({},e),{},{convertValute:t.payload});default:return e}}}),nt=Object(Qe.createStore)(tt,Object($e.composeWithDevTools)(Object(Qe.applyMiddleware)(et.a)));k.a.render(Object($.jsx)(w.a.StrictMode,{children:Object($.jsx)(I.a,{store:nt,children:Object($.jsx)(Ye,{})})}),document.getElementById("root")),Xe()},89:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.48003362.chunk.js.map