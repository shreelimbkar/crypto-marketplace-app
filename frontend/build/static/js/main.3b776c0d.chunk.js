(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{53:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),r=c(19),n=c.n(r),i=c(13),l=c(6),o=c(84),j=c(82),d=c(46),b=(c(52),c(53),c(85)),h=c(87),m=c.p+"static/media/logo.4d0ebbf7.svg",x=c(1);function O(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(b.a,{sticky:"top",children:[Object(x.jsxs)(b.a.Brand,{href:"/",children:[Object(x.jsx)("img",{alt:"Shri's Cryptocurrency MarketPlace",src:m,width:"48",height:"48",className:"d-inline-block"})," ",Object(x.jsx)("h1",{className:"d-inline-block m-0 align-middle",children:"Shri Cryptocurrency MarketPlace"})]}),Object(x.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(x.jsxs)(h.a,{className:"ml-auto",children:[Object(x.jsx)(i.b,{to:"/register",className:"nav-link",children:"Register"}),Object(x.jsx)(i.b,{to:"/login",className:"nav-link",children:"Log In"})]})})]})})}function p(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("footer",{className:"Container",children:Object(x.jsx)("p",{className:"p-2 m-0",children:"\xa9 All rights reserved 2021"})})})}var u=c(81),f=c(88),g=c.p+"static/media/bitcoin2.08a9a425.jpg",y=c(47),N=c(89),v=c(45),w=c.n(v);function k(e){var t=e.data;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(N.a.Item,{as:"li",children:Object(x.jsxs)("a",{href:t.url,title:t.title,target:"_blank",rel:"noreferrer",children:[Object(x.jsx)(u.a,{src:t.urlToImage,className:"news-img"}),t.title]})})})}function C(){var e=Object(s.useState)([]),t=Object(y.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){w.a.get("/api/news").then((function(e){var t=JSON.parse(e.data.data);a(t)})).catch((function(e){return console.log(e)}))}),[]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(N.a,{as:"ul",children:(null===c||void 0===c?void 0:c.articles)?null===c||void 0===c?void 0:c.articles.map((function(e,t){return Object(x.jsx)(k,{data:e},t)})):Object(x.jsx)("div",{children:"Loading..."})})})}var F=c(86),B=c(83);function E(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(F.a,{children:Object(x.jsxs)(j.a,{className:"align-items-center",children:[Object(x.jsx)(d.a,{sm:12,className:"my-1",children:Object(x.jsx)("p",{children:"Get the latest crypto news, updates, and reports by subscribing to our free newsletter."})}),Object(x.jsx)(d.a,{sm:8,className:"my-1",children:Object(x.jsx)(F.a.Control,{id:"emailid",placeholder:"Enter your email"})}),Object(x.jsx)(d.a,{xs:"auto",className:"my-1",children:Object(x.jsx)(B.a,{type:"submit",children:"Subscribe"})})]})})})}var S=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O,{}),Object(x.jsx)("main",{className:"Container",id:"main",children:Object(x.jsx)(o.a,{fluid:!0,children:Object(x.jsxs)(j.a,{children:[Object(x.jsxs)(d.a,{sm:8,className:"p-4",children:[Object(x.jsx)(u.a,{src:g,className:"banner-img"}),Object(x.jsxs)(f.a,{className:"mt-4",children:[Object(x.jsx)(f.a.Header,{as:"h5",children:"What is cryptocurrency?"}),Object(x.jsxs)(f.a.Body,{children:[Object(x.jsx)(f.a.Text,{children:"Cryptocurrency is a type of online payment that may be used to buy and sell products and services. Many businesses have created their own currencies, known as tokens, that can be exchanged for the goods or services that the business offers. Consider them to be arcade tokens or casino chips. To obtain the item or service, we will need to swap actual money for bitcoin."}),Object(x.jsx)(f.a.Text,{children:"Blockchain is the technology that enables cryptocurrency to function. Blockchain is a decentralized system that organizes and records transactions across multiple computers. The security of this technology is part of its attraction. We may be aware with the most popular versions, Bitcoin and Ethereum, but according to CoinLore, there are over 5,000 other cryptocurrencies in circulation. While this statement is accurate, it falls short of capturing what makes Bitcoin so special and enticing to so many investors."})]})]})]}),Object(x.jsxs)(d.a,{sm:4,className:"p-4",children:[Object(x.jsxs)(f.a,{className:"mb-4",children:[Object(x.jsx)(f.a.Header,{as:"h5",children:"Newsletter Subscription"}),Object(x.jsx)(f.a.Body,{children:Object(x.jsx)(E,{})})]}),Object(x.jsxs)(f.a,{children:[Object(x.jsx)(f.a.Header,{as:"h5",children:"Cryptocurrency News"}),Object(x.jsx)(f.a.Body,{className:"news-list",children:Object(x.jsx)(C,{})})]})]})]})})}),Object(x.jsx)(p,{})]})};function L(){return Object(x.jsx)(o.a,{fluid:!0,className:"App",children:Object(x.jsx)(j.a,{className:"pt-5",children:Object(x.jsxs)(d.a,{md:{span:4,offset:4},children:[Object(x.jsx)("p",{className:"text-center",children:Object(x.jsx)(i.b,{to:"/",children:Object(x.jsx)("img",{alt:"Shri's Cryptocurrency MarketPlace",src:m,width:"64",height:"64",className:"d-inline-block"})})}),Object(x.jsxs)("form",{className:"p-3",style:{backgroundColor:"#ffd55a",color:"#293250"},children:[Object(x.jsx)("h3",{className:"text-center",children:"Log in"}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",id:"email"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"pwd",children:"Password"}),Object(x.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",id:"pwd"})]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-dark btn-lg btn-block",style:{backgroundColor:"#293250",color:"#fff"},children:"Log in"}),Object(x.jsx)("p",{className:"pt-2",children:Object(x.jsx)(i.b,{to:"/register",children:"Register"})})]})]})})})}function P(){return Object(x.jsx)(o.a,{fluid:!0,className:"App",id:"register",children:Object(x.jsx)(j.a,{className:"pt-5",children:Object(x.jsxs)(d.a,{md:{span:4,offset:4},children:[Object(x.jsx)("p",{className:"text-center",children:Object(x.jsx)(i.b,{to:"/",children:Object(x.jsx)("img",{alt:"Shri Cryptocurrency MarketPlace",src:m,width:"64",height:"64",className:"d-inline-block"})})}),Object(x.jsxs)("form",{className:"p-3",style:{backgroundColor:"#ffd55a",color:"#293250"},children:[Object(x.jsx)("h3",{className:"text-center",children:"Register"}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"firstname",children:"First name"}),Object(x.jsx)("input",{type:"text",className:"form-control",placeholder:"First name",id:"firstname"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"lastname",children:"Last name"}),Object(x.jsx)("input",{type:"text",className:"form-control",placeholder:"Last name",id:"lastname"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",id:"email"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"pwd",children:"Password"}),Object(x.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",id:"pwd"})]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-dark btn-lg btn-block",style:{backgroundColor:"#293250",color:"#fff"},children:"Register"}),Object(x.jsx)("p",{className:"pt-2",children:Object(x.jsx)(i.b,{to:"/login",children:"Already registered?"})})]})]})})})}var T=function(){return Object(x.jsx)(i.a,{children:Object(x.jsx)(o.a,{fluid:!0,className:"App",children:Object(x.jsx)(j.a,{children:Object(x.jsx)(d.a,{className:"p-0",children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",component:S}),Object(x.jsx)(l.a,{path:"/login",component:L}),Object(x.jsx)(l.a,{path:"/register",component:P})]})})})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,90)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),r(e),n(e)}))};n.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(T,{})}),document.getElementById("root")),M()}},[[79,1,2]]]);
//# sourceMappingURL=main.3b776c0d.chunk.js.map