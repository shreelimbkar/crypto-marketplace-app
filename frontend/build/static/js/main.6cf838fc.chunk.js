(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{122:function(e,t,s){},260:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),r=s(38),n=s.n(r),i=s(6),l=s(15),o=s(11),j=s(262),d=s(265),b=s(112),m=(s(121),s(122),s(12)),u=s(116),h={user:null},O=Object(a.createContext)(h),x=s(1),p=function(e){var t,s=e.component,c=Object(u.a)(e,["component"]),r=Object(a.useContext)(O);return r=(null===(t=r)||void 0===t?void 0:t.token)||{token:sessionStorage.getItem("token")},Object(x.jsx)(o.b,Object(m.a)(Object(m.a)({},c),{},{render:function(e){var t;return(null===(t=r)||void 0===t?void 0:t.token)||sessionStorage.getItem("token")?Object(x.jsx)(s,Object(m.a)({},e)):Object(x.jsx)(o.a,{to:{pathname:"/",state:{from:e.location}}})}}))},f=s(108),g=s(109),N=s(268),v=s(270),y=s.p+"static/media/logo.4d0ebbf7.svg";function w(){var e,t,s,c,r,n,i,d=Object(o.g)(),b=null,m="",u=Object(a.useContext)(O);u=(null===(e=u)||void 0===e?void 0:e.token)||{token:sessionStorage.getItem("token")};return(null===(t=u)||void 0===t?void 0:t.token)&&(b=Object(g.a)(u.token),i=JSON.parse(b.sub)[0].firstName,m=JSON.parse(b.sub)[0].role),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(N.a,{sticky:"top",expand:"lg",children:Object(x.jsxs)(j.a,{fluid:!0,children:[Object(x.jsxs)(N.a.Brand,{href:"/",children:[Object(x.jsx)("img",{alt:"Shri's Cryptocurrency MarketPlace",src:y,width:"48",height:"48",className:"d-inline-block"})," ",Object(x.jsx)(N.a.Brand,{as:"h1",className:"d-none d-sm-inline-block m-0 p-0",style:{fontSize:"2rem",verticalAlign:"middle"},children:"Shri Cryptocurrency MarketPlace"})]}),Object(x.jsx)(N.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(x.jsx)(N.a.Collapse,{id:"responsive-navbar-nav",children:Object(x.jsx)(v.a,{className:"ml-auto",navbarScroll:!0,children:(null===(s=u)||void 0===s?void 0:s.token)?Object(x.jsxs)(x.Fragment,{children:[(null===(c=u)||void 0===c?void 0:c.token)&&Object(x.jsxs)("span",{className:"nav-link font-weight-bold",children:["Welcome ",i," |"," "]}),Object(x.jsx)(l.b,{to:"/",className:"nav-link",title:"Home",children:"Home"}),Object(x.jsx)(l.b,{to:"/dashboard",className:"nav-link",title:"Dashboard",children:"Dashboard"}),(null===(r=u)||void 0===r?void 0:r.token)&&"admin"===m&&Object(x.jsx)(l.b,{to:"/articles",className:"nav-link",title:"Articles",children:"Articles"}),Object(x.jsx)(l.b,{to:"/",className:"nav-link",onClick:function(){sessionStorage.removeItem("token"),d.push("/")},title:"Logout",children:"Logout"})]}):Object(x.jsxs)(x.Fragment,{children:[!(null===(n=u)||void 0===n?void 0:n.token)&&Object(x.jsxs)("span",{className:"nav-link font-weight-bold",children:["Welcome Guest |"," "]}),Object(x.jsx)(l.b,{to:"/register",className:"nav-link",title:"Register",children:"Register"}),Object(x.jsx)(l.b,{to:"/login",className:"nav-link",title:"Log In",children:"Log In"})]})})})]})})})}function S(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("footer",{className:"Container",children:Object(x.jsx)("p",{className:"p-2 m-0",children:"\xa9 All rights reserved 2021"})})})}var k=s(263),C=s(264),F=s(271),q=s(17),P=s.n(q),A=s.p+"static/media/bitcoin2.08a9a425.jpg",E=s(272);function I(e){var t=e.data;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(E.a.Item,{as:"li",children:Object(x.jsxs)("a",{href:t.url,title:t.title,target:"_blank",rel:"noreferrer",children:[Object(x.jsx)(k.a,{src:t.urlToImage,className:"news-img"}),t.title]})})})}function T(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(!0),n=Object(i.a)(r,2),l=n[0],o=n[1];return Object(a.useEffect)((function(){P.a.get("/api/news").then((function(e){var t=JSON.parse(e.data.data);c(t),o(!1)})).catch((function(e){return console.log(e)}))}),[]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(E.a,{as:"ul",children:l?Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)(C.a,{as:"span",animation:"border",size:"lg",role:"status","aria-hidden":"true"})}):null===s||void 0===s?void 0:s.articles.map((function(e,t){return Object(x.jsx)(I,{data:e},t)}))})})}var B=s(269),H=s(266),L=s(20);function J(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],r=Object(L.d)(),n=r.register,l=r.handleSubmit,o=r.formState.errors;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(B.a,{onSubmit:l((function(e,t){var s={emailid:e.email};t.target[0].value&&P.a.post("/api/subscribe",s).then((function(e){JSON.parse(e.data.data)&&c("Congratulations! You have successfully subscribed."),setTimeout((function(){s={},t.target[0].value="",c("")}),2e3)})).catch((function(e){return console.log(e)}))})),children:Object(x.jsxs)(d.a,{className:"align-items-center",children:[Object(x.jsx)(b.a,{sm:12,className:"my-1",children:Object(x.jsx)("p",{children:"Subscribe to our free email to receive the newest crypto news, updates, and reports."})}),Object(x.jsx)(b.a,{sm:8,className:"my-1",children:Object(x.jsx)(B.a.Control,Object(m.a)(Object(m.a)({id:"emailid",type:"email",autoComplete:"off",placeholder:"Enter your email"},n("email",{required:"Email is required",pattern:{value:/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message:"Incorrect email format"}})),{},{className:o.email&&"required"}))}),Object(x.jsx)(b.a,{xs:"auto",className:"my-1",children:Object(x.jsx)(H.a,{type:"submit",children:"Subscribe"})}),o.email&&Object(x.jsx)(b.a,{children:o.email.message}),s&&Object(x.jsx)(b.a,{style:{color:"#60a906"},children:s})]})})})}function z(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)([]),n=Object(i.a)(r,2),l=n[0],o=n[1];return Object(a.useEffect)((function(){c(!0),P.a.get("/api/articles").then((function(e){var t=JSON.parse(e.data.data);o(t),c(!1)})).catch((function(e){console.log(e),c(!1)}))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(w,{}),Object(x.jsx)("main",{className:"Container",id:"main",children:Object(x.jsx)(j.a,{fluid:!0,children:Object(x.jsxs)(d.a,{children:[Object(x.jsxs)(b.a,{sm:8,className:"p-4",children:[Object(x.jsx)(k.a,{src:A,className:"banner-img"}),s?Object(x.jsx)("div",{className:"text-center p-3",children:Object(x.jsx)(C.a,{as:"span",animation:"border",size:"lg",role:"status","aria-hidden":"true"})}):l.map((function(e,t){return Object(x.jsxs)(F.a,{className:"mt-4",children:[Object(x.jsx)(F.a.Header,{as:"h5",children:e.title}),Object(x.jsx)(F.a.Body,{children:Object(f.a)(e.description)})]},t)}))]}),Object(x.jsxs)(b.a,{sm:4,className:"p-4",children:[Object(x.jsxs)(F.a,{className:"mb-4",children:[Object(x.jsx)(F.a.Header,{as:"h5",children:"Newsletter Subscription"}),Object(x.jsx)(F.a.Body,{children:Object(x.jsx)(J,{})})]}),Object(x.jsxs)(F.a,{children:[Object(x.jsx)(F.a.Header,{as:"h5",children:"Cryptocurrency News"}),Object(x.jsx)(F.a.Body,{className:"news-list",style:{maxHeight:"100vh"},children:Object(x.jsx)(T,{})})]})]})]})})}),Object(x.jsx)(S,{})]})}var _=s(10),R=s.n(_),M=s(23),U=s(267),Y=s.p+"static/media/bitcoin.0b202fb1.jpg";function D(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(!0),n=Object(i.a)(r,2),l=n[0],o=n[1],m=function(){var e=Object(M.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("/api/cryptos");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){m().then((function(e){c(e.data),o(!1)})).catch((function(e){console.log(e)}))}),[]);var u=function(e,t){return Intl.NumberFormat("en-US",{style:"currency",currency:"usd",maxDigits:t}).format(e)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(w,{}),Object(x.jsx)("main",{className:"Container",id:"main",children:Object(x.jsx)(j.a,{fluid:!0,children:Object(x.jsxs)(d.a,{children:[Object(x.jsxs)(b.a,{sm:8,className:"p-4",children:[Object(x.jsx)(k.a,{src:Y,className:"banner-img"}),Object(x.jsxs)(F.a,{className:"mt-4",children:[Object(x.jsx)(F.a.Header,{as:"h5",children:"Top 100 Cryptocurrency Prices by Market Cap"}),Object(x.jsx)(F.a.Body,{children:Object(x.jsx)(F.a.Text,{as:"div",children:Object(x.jsxs)(U.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Rank"}),Object(x.jsx)("th",{children:"Symbol"}),Object(x.jsx)("th",{children:"24h Change"}),Object(x.jsx)("th",{children:"Price"}),Object(x.jsx)("th",{children:"Market cap"})]})}),Object(x.jsx)("tbody",{children:l?Object(x.jsx)("tr",{children:Object(x.jsx)("td",{colSpan:"5",children:Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)(C.a,{as:"span",animation:"border",size:"lg",role:"status","aria-hidden":"true"})})})}):s.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t+1}),Object(x.jsxs)("td",{children:[Object(x.jsx)(k.a,{src:e.image,style:{width:25,height:25,marginRight:10},className:"banner-img"}),e.symbol.toUpperCase()]}),Object(x.jsx)("td",{children:Object(x.jsx)("span",{className:e.price_change_percentage_24h>0?"text-success":"text-danger",children:(s=e.price_change_percentage_24h,"".concat(Number(s).toFixed(2),"%"))})}),Object(x.jsx)("td",{children:u(e.current_price,20)}),Object(x.jsx)("td",{children:u(e.market_cap,12)})]},e.id);var s}))})]})})})]})]}),Object(x.jsxs)(b.a,{sm:4,className:"p-4",children:[Object(x.jsxs)(F.a,{className:"mb-4",children:[Object(x.jsx)(F.a.Header,{as:"h5",children:"Newsletter Subscription"}),Object(x.jsx)(F.a.Body,{children:Object(x.jsx)(J,{})})]}),Object(x.jsxs)(F.a,{children:[Object(x.jsx)(F.a.Header,{as:"h5",children:"Cryptocurrency News"}),Object(x.jsx)(F.a.Body,{className:"news-list",style:{maxHeight:"none"},children:Object(x.jsx)(T,{})})]})]})]})})}),Object(x.jsx)(S,{})]})}function G(e){var t=e.data;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(E.a.Item,{as:"li",children:t.title})})}var W=s.p+"static/media/bitcoin1.e92be1a1.jpg",$=s(37),K=s(16),Q=K.a().shape({title:K.c().required(),description:K.c().required()});function V(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(!0),n=Object(i.a)(r,2),l=n[0],o=n[1],u=Object(a.useState)(""),h=Object(i.a)(u,2),O=h[0],p=h[1],f=Object(a.useState)(""),g=Object(i.a)(f,2),N=g[0],v=g[1],y=Object(a.useState)([]),q=Object(i.a)(y,2),A=q[0],I=q[1],T=Object(L.d)({resolver:Object($.a)(Q)}),H=T.register,z=T.handleSubmit,_=T.reset,R=T.formState.errors;Object(a.useEffect)((function(){P.a.get("/api/articles").then((function(e){var t=JSON.parse(e.data.data);o(!1),I(t)})).catch((function(e){return console.log(e)}))}),[O]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(w,{}),Object(x.jsx)("main",{className:"Container",id:"main",children:Object(x.jsxs)(j.a,{fluid:!0,children:[Object(x.jsxs)(d.a,{children:[Object(x.jsx)(b.a,{sm:8,className:"p-4",children:Object(x.jsx)(k.a,{src:W,className:"banner-img"})}),Object(x.jsx)(b.a,{sm:4,className:"p-4",children:Object(x.jsxs)(F.a,{className:"mb-4",children:[Object(x.jsx)(F.a.Header,{as:"h5",children:"Newsletter Subscription"}),Object(x.jsx)(F.a.Body,{children:Object(x.jsx)(J,{})})]})})]}),Object(x.jsxs)(d.a,{children:[Object(x.jsx)(b.a,{sm:6,className:"p-4",children:Object(x.jsxs)(F.a,{children:[Object(x.jsx)(F.a.Header,{as:"h5",children:"All Articles"}),Object(x.jsx)(F.a.Body,{children:Object(x.jsx)(F.a.Text,{as:"div",children:Object(x.jsx)(E.a,{as:"ul",children:l?Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)(C.a,{as:"span",animation:"border",size:"lg",role:"status","aria-hidden":"true"})}):A.map((function(e,t){return Object(x.jsx)(G,{data:e},t)}))})})})]})}),Object(x.jsx)(b.a,{sm:6,className:"p-4",children:Object(x.jsxs)(F.a,{children:[Object(x.jsx)(F.a.Header,{as:"h5",children:"Add Ariticles"}),Object(x.jsxs)(F.a.Body,{children:[Object(x.jsx)(F.a.Text,{children:"Articles on cryptocurrency are welcome to be added. Users can follow the latest trends and news about various Cryptocurrencies."}),Object(x.jsxs)("form",{onSubmit:z((function(e){"{}"===JSON.stringify({})&&e&&(c(!0),P.a.post("/api/article",e).then((function(t){t.data&&v("Your article has successfully added."),setTimeout((function(){e={},c(!1),o(!0),p("article added"),v(""),_()}),2e3)})).catch((function(e){c(!1),console.log(e)})))})),children:[Object(x.jsxs)("div",{className:"form-group mb-1",children:[Object(x.jsx)("label",{htmlFor:"title",children:"Article title"}),Object(x.jsx)("input",Object(m.a)({type:"text",className:R.title?"required form-control":"form-control",placeholder:"Article title",name:"title",id:"title",autoComplete:"off"},H("title",{required:!0}))),(null===R||void 0===R?void 0:R.title)&&Object(x.jsx)("p",{className:"p-1 m-0 text-danger",children:"Article title is required"})]}),Object(x.jsxs)("div",{className:"form-group mb-1",children:[Object(x.jsx)("label",{htmlFor:"description",children:"Article description"}),Object(x.jsx)(B.a.Group,{children:Object(x.jsx)(B.a.Control,Object(m.a)(Object(m.a)({className:R.title?"required mb-1":"mb-1",name:"description",id:"description"},H("description",{required:!0})),{},{as:"textarea",rows:6}))}),(null===R||void 0===R?void 0:R.description)&&Object(x.jsx)("p",{className:"p-1 m-0 text-danger",children:"Article description is required"})]}),Object(x.jsx)("div",{className:"form-group mt-3",children:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(b.a,{sm:6,children:Object(x.jsxs)("button",{type:"submit",className:"btn btn-dark btn-lg btn-block",style:{backgroundColor:"#293250",color:"#fff"},children:["Add Article",s&&Object(x.jsx)("div",{className:"float-right",children:Object(x.jsx)(C.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})})]})}),Object(x.jsx)(b.a,{sm:6,children:Object(x.jsx)("button",{type:"reset",className:"btn btn-dark btn-lg btn-block",style:{backgroundColor:"#293250",color:"#fff"},children:"Reset"})})]})}),N&&Object(x.jsx)("p",{className:"text-center",style:{color:"#00154f"},children:N})]})]})]})})]})]})}),Object(x.jsx)(S,{})]})}var X=K.a().shape({email:K.c().email().required(),password:K.c().min(4).max(15).required()});function Z(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(""),n=Object(i.a)(r,2),u=n[0],h=n[1],p=Object(a.useContext)(O).setUser,f=Object(L.d)({resolver:Object($.a)(X)}),g=f.register,N=f.handleSubmit,v=f.formState.errors;return sessionStorage.getItem("token")?Object(x.jsx)(o.a,{to:"/dashboard"}):Object(x.jsx)(j.a,{fluid:!0,className:"App",children:Object(x.jsx)(d.a,{className:"pt-2",children:Object(x.jsxs)(b.a,{md:{span:4,offset:4},children:[Object(x.jsx)("p",{className:"text-center",children:Object(x.jsx)(l.b,{to:"/",children:Object(x.jsx)("img",{alt:"Shri's Cryptocurrency MarketPlace",src:y,width:"64",height:"64",className:"d-inline-block"})})}),Object(x.jsxs)("form",{className:"p-3",style:{backgroundColor:"#ffd55a",color:"#293250"},onSubmit:N((function(e){"{}"===JSON.stringify({})&&e&&(c(!0),P.a.post("/api/users/login",e).then((function(e){var t,s;if((null===(t=e.data)||void 0===t?void 0:t.success)&&(null===(s=e.data)||void 0===s?void 0:s.data)){var a=e.data.data;p({token:a}),sessionStorage.setItem("token",a),c(!1)}else c(!1),h("You forgot your email or password. Try again!")})).catch((function(e){c(!1),h("You forgot your email or password. Try again!"),console.log(e)})),setTimeout((function(){e={},c(!1),h("")}),3e3))})),children:[u&&Object(x.jsx)("p",{className:"text-center text-danger",children:u}),Object(x.jsx)("h3",{className:"text-center",children:"Log in"}),Object(x.jsxs)("div",{className:"form-group m-1",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)("input",Object(m.a)({type:"email",className:"form-control",placeholder:"Enter your email",name:"email",id:"email",autoFocus:!0,autoComplete:"off"},g("email",{required:!0}))),(null===v||void 0===v?void 0:v.email)&&Object(x.jsx)("p",{className:"p-1 m-0 text-danger",children:"Enter valid email address"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("input",Object(m.a)({type:"password",className:"form-control",placeholder:"Enter password",name:"password",id:"password"},g("password",{required:!0}))),(null===v||void 0===v?void 0:v.password)&&Object(x.jsx)("p",{className:"p-1 m-0 text-danger",children:"Password is required. Please make sure your password is between 4 and 15 characters."})]}),Object(x.jsxs)("button",{type:"submit",className:"btn btn-dark btn-lg btn-block",style:{backgroundColor:"#293250",color:"#fff"},children:["Log in",s&&Object(x.jsx)("div",{className:"float-right",children:Object(x.jsx)(C.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})})]}),Object(x.jsx)("p",{className:"pt-2",children:Object(x.jsx)(l.b,{to:"/register",children:"Create new account? Register!"})})]})]})})})}var ee=K.a().shape({firstName:K.c().required(),lastName:K.c().required(),email:K.c().email().required(),password:K.c().min(4).max(15).required(),confirmPassword:K.c().oneOf([K.b("password"),null])});function te(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(""),n=Object(i.a)(r,2),u=n[0],h=n[1],O=Object(L.d)({resolver:Object($.a)(ee)}),p=O.register,f=O.handleSubmit,g=O.formState.errors,N=O.reset;return sessionStorage.getItem("token")?Object(x.jsx)(o.a,{to:"/dashboard"}):Object(x.jsx)(j.a,{fluid:!0,className:"App",id:"register",children:Object(x.jsx)(d.a,{className:"pt-2",children:Object(x.jsxs)(b.a,{md:{span:4,offset:4},children:[Object(x.jsx)("p",{className:"text-center",children:Object(x.jsx)(l.b,{to:"/",children:Object(x.jsx)("img",{alt:"Shri Cryptocurrency MarketPlace",src:y,width:"64",height:"64",className:"d-inline-block"})})}),Object(x.jsxs)("form",{className:"p-3",style:{backgroundColor:"#ffd55a",color:"#293250"},onSubmit:f((function(e){"{}"===JSON.stringify({})&&e&&(c(!0),P.a.post("/api/users/register",e).then((function(t){t.data&&h("You have successfully registered."),setTimeout((function(){e={},c(!1),h(""),N()}),2e3)})).catch((function(e){c(!1),console.log(e)})))})),children:[u&&Object(x.jsx)("p",{className:"text-center",style:{color:"#00154f"},children:u}),Object(x.jsx)("h3",{className:"text-center",children:"Register"}),Object(x.jsxs)("div",{className:"form-group mb-1",children:[Object(x.jsx)("label",{htmlFor:"firstName",children:"First name"}),Object(x.jsx)("input",Object(m.a)({type:"text",className:g.firstName?"required form-control":"form-control",placeholder:"First name",name:"firstName",id:"firstName",autoFocus:!0,autoComplete:"off"},p("firstName",{required:!0}))),(null===g||void 0===g?void 0:g.firstName)&&Object(x.jsx)("p",{className:"p-1 m-0 text-danger",children:"First Name is required"})]}),Object(x.jsxs)("div",{className:"form-group m-1",children:[Object(x.jsx)("label",{htmlFor:"lastName",children:"Last name"}),Object(x.jsx)("input",Object(m.a)({type:"text",className:"form-control",placeholder:"Last name",name:"lastName",id:"lastName",autoComplete:"off"},p("lastName",{required:!0}))),(null===g||void 0===g?void 0:g.lastName)&&Object(x.jsx)("p",{className:"p-1 m-0 text-danger",children:"Last Name is required"})]}),Object(x.jsxs)("div",{className:"form-group m-1",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)("input",Object(m.a)({type:"email",className:"form-control",placeholder:"Enter your email",name:"email",id:"email",autoComplete:"off"},p("email",{required:!0}))),(null===g||void 0===g?void 0:g.email)&&Object(x.jsx)("p",{className:"p-1 m-0 text-danger",children:"Enter valid email address"})]}),Object(x.jsxs)("div",{className:"form-group m-1",children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("input",Object(m.a)({type:"password",className:"form-control",placeholder:"Enter password",name:"password",id:"password"},p("password",{required:!0}))),(null===g||void 0===g?void 0:g.password)&&Object(x.jsx)("p",{className:"p-1 m-0 text-danger",children:"Password is required"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"password",children:"Confirm Password"}),Object(x.jsx)("input",Object(m.a)({type:"password",className:"form-control",placeholder:"Enter password",name:"confirmPassword",id:"confirmPassword"},p("confirmPassword",{required:!0}))),(null===g||void 0===g?void 0:g.confirmPassword)&&Object(x.jsx)("p",{className:"p-1 m-0 text-danger",children:"Password should match"})]}),Object(x.jsxs)("button",{type:"submit",className:"btn btn-dark btn-lg btn-block",style:{backgroundColor:"#293250",color:"#fff"},children:["Register",s&&Object(x.jsx)("div",{className:"float-right",children:Object(x.jsx)(C.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})})]}),Object(x.jsx)("p",{className:"pt-2",children:Object(x.jsx)(l.b,{to:"/login",children:"Already registered? Login!"})})]})]})})})}var se=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),s=t[0],c=t[1];return Object(x.jsx)(l.a,{children:Object(x.jsx)(j.a,{fluid:!0,className:"App",children:Object(x.jsx)(d.a,{children:Object(x.jsx)(b.a,{className:"p-0",children:Object(x.jsx)(o.d,{children:Object(x.jsxs)(O.Provider,{value:{user:s,setUser:c},children:[Object(x.jsx)(o.b,{exact:!0,path:"/",component:z}),Object(x.jsx)(o.b,{path:"/login",component:Z}),Object(x.jsx)(o.b,{path:"/register",component:te}),Object(x.jsx)(p,{path:"/dashboard",component:D}),Object(x.jsx)(p,{path:"/articles",component:V})]})})})})})})},ae=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,273)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),r(e),n(e)}))};n.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(se,{})}),document.getElementById("root")),ae()}},[[260,1,2]]]);
//# sourceMappingURL=main.6cf838fc.chunk.js.map