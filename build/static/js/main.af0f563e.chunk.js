(this["webpackJsonpamazon-clone-challenge"]=this["webpackJsonpamazon-clone-challenge"]||[]).push([[0],{50:function(n,e,t){},51:function(n,e,t){},62:function(n,e,t){"use strict";t.r(e);var i,a,c,r,o,d,s,l,j,p,b,x,u=t(2),g=t.n(u),h=t(28),O=t.n(h),f=(t(50),t(6)),m=t(23),v=(t(51),t(7)),y=t(38),w=t.n(y),k=t(39),S=t.n(k),I=t(37),C=t.n(I),A=t(25),F=t(3);var z=function(n){var e=n.cartItems,t=n.user,i=n.signOut;return Object(F.jsxs)(T,{children:[Object(F.jsx)(q,{children:Object(F.jsx)(A.b,{to:"/",children:Object(F.jsx)("img",{src:"https://i.imgur.com/7I9Was5.png"})})}),Object(F.jsxs)(E,{children:[Object(F.jsx)(C.a,{}),Object(F.jsxs)(G,{children:[Object(F.jsx)(B,{children:"Hello,"}),Object(F.jsx)(D,{children:"Select your address"})]})]}),Object(F.jsxs)(H,{children:[Object(F.jsx)(R,{type:"text"}),Object(F.jsx)(L,{children:Object(F.jsx)(w.a,{})})]}),Object(F.jsxs)(U,{children:[Object(F.jsxs)(G,{onClick:i,children:[Object(F.jsxs)(B,{children:["Hello, ",t.name]}),Object(F.jsx)(D,{children:"Account & Lists"})]}),Object(F.jsxs)(G,{children:[Object(F.jsx)(B,{children:"Returns"}),Object(F.jsx)(D,{children:"& Orders"})]}),Object(F.jsx)(M,{children:Object(F.jsxs)(A.b,{to:"/cart",children:[Object(F.jsx)(S.a,{}),Object(F.jsx)(N,{children:function(){var n=0;return e.forEach((function(e){n+=e.product.quantity})),n}()})]})})]})]})},T=v.a.div(i||(i=Object(f.a)(["\n    height: 60px;\n    background-color: #0F1111;\n    display: flex;\n    align-items: center;\n    color: white;\n    justify-content: space-between;\n"]))),q=v.a.div(a||(a=Object(f.a)(["\n    img {\n                    width: 100px;\n        margin-left: 11px;\n\n    }\n"]))),E=v.a.div(c||(c=Object(f.a)(["\n    padding-left: 9px;\n    display: flex;\n    align-items: center;\n"]))),B=v.a.div(r||(r=Object(f.a)(["\n\n"]))),D=v.a.div(o||(o=Object(f.a)(["\n    font-weight: 700;\n"]))),H=v.a.div(d||(d=Object(f.a)(["\n    display: flex;\n    flex-grow: 1;\n    height: 40px;\n    border-radius: 4px;\n    overflow: hidden;\n    margin-left: 4px;\n    background-color: white;\n    :focus-within {\n                    box-shadow: 0 0 0 3px #85f8ef;\n    }\n"]))),L=v.a.div(s||(s=Object(f.a)(["\n    background-color: #85f8ef;\n    width: 45px;\n    color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),R=v.a.input(l||(l=Object(f.a)(["\n    flex-grow: 1;\n    border: none;\n    :focus {\n                    outline: none;\n    }\n"]))),U=v.a.div(j||(j=Object(f.a)(["\n    display: flex;\n"]))),G=v.a.div(p||(p=Object(f.a)(["\n    padding: 10px 9px 10px 9px;\n    cursor: pointer;\n"]))),M=v.a.div(b||(b=Object(f.a)(["\n    display: flex;\n    align-items: center;\n    a {\n                    display: flex;\n        color: white;\n        text-decoration: none;\n        transition: color .3s ease-in-out;\n        :hover {\n            color: #85f8ef;\n        }\n    }\n"]))),N=v.a.div(x||(x=Object(f.a)(["\n    padding-right: 5px;\n    padding-left: 3px;\n    font-weight: 700;\n    color: #85f8ef;\n"]))),P=t(26);P.a.initializeApp({apiKey:"AIzaSyCOAkdvk-BQxHWELYbeeBSfNQqORK-LcmU",authDomain:"clone-c9b74.firebaseapp.com",projectId:"clone-c9b74",storageBucket:"clone-c9b74.appspot.com",messagingSenderId:"828266332383",appId:"1:828266332383:web:0a3430b82d6c63d5a6a96a"});var J,$,K,Q,W,V,X,_,Y=P.a.firestore(),Z=P.a.auth(),nn=new P.a.auth.GoogleAuthProvider;var en,tn,an,cn=function(n){for(var e=n.id,t=n.item,i=[],a=1;a<Math.max(t.quantity+1,20);a++)i.push(Object(F.jsxs)("option",{value:a,children:[" Qty: ",a]}));return Object(F.jsxs)(rn,{children:[Object(F.jsx)(on,{children:Object(F.jsx)("img",{src:t.image})}),Object(F.jsxs)(dn,{children:[Object(F.jsx)(sn,{children:Object(F.jsx)("h2",{children:t.name})}),Object(F.jsxs)(ln,{children:[Object(F.jsx)(jn,{children:Object(F.jsx)("select",{value:t.quantity,onChange:function(n){Y.collection("cartitems").doc(e).update({quantity:parseInt(n.target.value)})},children:i})}),Object(F.jsx)(pn,{onClick:function(n){n.preventDefault(),Y.collection("cartitems").doc(e).delete()},children:"Delete"})]})]}),Object(F.jsxs)(bn,{children:["$",t.price]})]})},rn=v.a.div(J||(J=Object(f.a)(["\n    padding-top: 12px;\n    padding-bottom: 12px;\n    display: flex;\n    border-bottom: 1px solid #DDD;\n"]))),on=v.a.div($||($=Object(f.a)(["\n    width: 180px;\n    height: 180px;\n    flex-shrink: 0;\n    flex-grow: 0;\n    margin-right: 16px;\n    img {\n        object-fit: contain;\n        height: 100%;\n        width: 100%;\n    }\n"]))),dn=v.a.div(K||(K=Object(f.a)(["\n    flex-grow: 1;\n"]))),sn=v.a.div(Q||(Q=Object(f.a)(["\n    color: #007185;\n    h2 {\n        font-size: 18px;\n    }\n"]))),ln=v.a.div(W||(W=Object(f.a)(["\n    display: flex;\n    margin-top: 4px;\n    align-items: center;\n"]))),jn=v.a.div(V||(V=Object(f.a)(["\n    select {\n        border-radius: 7px;\n        background-color: F0F2F2;\n        padding: 8px;\n        box-shadow: 0 2px 5px rgba(15,17,17,.15);\n        :focus {\n            outline: none;\n        }\n    }\n\n"]))),pn=v.a.div(X||(X=Object(f.a)(["\n    color: #007185;\n    margin-left: 16px;\n    cursor: pointer;\n"]))),bn=v.a.div(_||(_=Object(f.a)(["\n    font-size: 18px;\n    font-weight: 700;\n    margin-left: 16px;\n"])));var xn,un,gn,hn=function(n){var e=n.cartItems;return Object(F.jsxs)(On,{children:[Object(F.jsx)(fn,{children:"Shopping Cart"}),Object(F.jsx)("hr",{}),Object(F.jsx)(mn,{children:e.map((function(n){return Object(F.jsx)(cn,{id:n.id,item:n.product})}))})]})},On=v.a.div(en||(en=Object(f.a)(['\n    height: 100%;\n    background: hsla(176, 49%, 84%, 1);\n\nbackground: linear-gradient(135deg, hsla(176, 49%, 84%, 1) 0%, hsla(0, 0%, 100%, 1) 70%);\n\nbackground: -moz-linear-gradient(135deg, hsla(176, 49%, 84%, 1) 0%, hsla(0, 0%, 100%, 1) 70%);\n\nbackground: -webkit-linear-gradient(135deg, hsla(176, 49%, 84%, 1) 0%, hsla(0, 0%, 100%, 1) 70%);\n\nfilter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#C2EAE7", endColorstr="#FBFBFB", GradientType=1 );\n    flex: 0.8;\n    margin-right: 18px;\n    padding: 20px;\n    border-radius: 4px;\n']))),fn=v.a.div(tn||(tn=Object(f.a)(["\n    margin-bottom: 8px;\n"]))),mn=v.a.div(an||(an=Object(f.a)(["\n    \n"]))),vn=t(44);var yn,wn=function(n){var e=n.getCount,t=n.getSubtotal;return Object(F.jsxs)(kn,{children:[Object(F.jsxs)(Sn,{children:["Subtotal (",e()," items): ",Object(F.jsx)(vn.a,{value:t(),displayType:"text",thousandSeparator:!0,prefix:"$"})]}),Object(F.jsx)(In,{children:"Proceed to checkout"})]})},kn=v.a.div(xn||(xn=Object(f.a)(['\n    height: 200px;\n    flex: 0.2;\n    padding: 20px;\n    background: hsla(176, 49%, 84%, 1);\n\nbackground: linear-gradient(135deg, hsla(176, 49%, 84%, 1) 0%, hsla(0, 0%, 98%, 1) 100%);\n\nbackground: -moz-linear-gradient(135deg, hsla(176, 49%, 84%, 1) 0%, hsla(0, 0%, 98%, 1) 100%);\n\nbackground: -webkit-linear-gradient(135deg, hsla(176, 49%, 84%, 1) 0%, hsla(0, 0%, 98%, 1) 100%);\n\nfilter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#C2EAE7", endColorstr="#FBFBFB", GradientType=1 );\ntext-align: right; // put in component later\nfont-weight: 700; // put in component later\n']))),Sn=v.a.h2(un||(un=Object(f.a)(["\n\n"]))),In=v.a.button(gn||(gn=Object(f.a)(["\n    background-color: #85f8ef;\n    width: 100%;\n    padding: 4px 8px;\n    border: 2px solid grey;\n    border-radius: 3px;\n    cursor: pointer;\n    font-size: 16px;\n    :hover {\n        opacity: .8;\n    }\n\n"])));var Cn,An,Fn,zn,Tn,qn,En,Bn=function(n){var e=n.cartItems;return Object(F.jsxs)(Dn,{children:[Object(F.jsx)(hn,{cartItems:e}),Object(F.jsx)(wn,{getSubtotal:function(){var n=0;return e.forEach((function(e){n+=e.product.price*e.product.quantity})),n},getCount:function(){var n=0;return e.forEach((function(e){n+=e.product.quantity})),n}})]})},Dn=v.a.div(yn||(yn=Object(f.a)(["\n    display: flex;\n    padding: 14px 18px 0 18px;\n"])));var Hn,Ln,Rn,Un,Gn,Mn,Nn,Pn=function(n){var e=n.title,t=n.price,i=n.rating,a=n.image,c=n.id;return Object(F.jsxs)(Jn,{children:[Object(F.jsx)($n,{children:e}),Object(F.jsxs)(Kn,{children:["$",t]}),Object(F.jsx)(Qn,{children:Array(i).fill().map((function(n){return Object(F.jsx)("p",{children:"\u2b50\ufe0f"})}))}),Object(F.jsx)(Wn,{src:a}),Object(F.jsx)(Xn,{children:Object(F.jsx)(Vn,{onClick:function(){console.log(c);var n=Y.collection("cartitems").doc(c);n.get().then((function(i){console.log(i),i.exists?n.update({quantity:i.data().quantity+1}):Y.collection("cartitems").doc(c).set({name:e,image:a,price:t,quantity:1})}))},children:"Add to Cart"})})]})},Jn=v.a.div(Cn||(Cn=Object(f.a)(["\n    position: relative;\n    background: white;\n    z-index: 10;\n    flex: 1;\n    padding: 20px;\n    max-height: 400px;\n    margin: 10px;\n    display: flex;\n    flex-direction: column;\n    border-radius: 4px;\n"]))),$n=v.a.span(An||(An=Object(f.a)([""]))),Kn=v.a.span(Fn||(Fn=Object(f.a)(["\n    margin-top: 3px;\n    font-weight: 500;\n"]))),Qn=v.a.div(zn||(zn=Object(f.a)(["\n    display: flex;\n"]))),Wn=v.a.img(Tn||(Tn=Object(f.a)(["\n    max-height: 200px;\n    object-fit: contain;\n    transition: transform .3s ease-in-out;\n    :hover {\n        transform: scale(1.05);\n    }\n"]))),Vn=v.a.button(qn||(qn=Object(f.a)(["\n    width: 100px;\n    height: 30px;\n    background-color: #f0c14b;\n    border: 2px solid #a99734;\n    border-radius: 2px;\n    cursor: pointer;\n"]))),Xn=v.a.div(En||(En=Object(f.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 12px;\n"])));var _n,Yn,Zn,ne,ee,te,ie=function(n){var e=n.title,t=n.price,i=n.rating,a=n.image,c=n.id;return Object(F.jsxs)(ae,{children:[Object(F.jsx)(ce,{children:e}),Object(F.jsxs)(re,{children:["$",t]}),Object(F.jsx)(oe,{children:Array(i).fill().map((function(n){return Object(F.jsx)("p",{children:"\u2b50\ufe0f"})}))}),Object(F.jsx)(de,{src:a}),Object(F.jsx)(le,{children:Object(F.jsx)(se,{onClick:function(){console.log(c);var n=Y.collection("cartitems").doc(c);n.get().then((function(i){console.log(i),i.exists?n.update({quantity:i.data().quantity+1}):Y.collection("cartitems").doc(c).set({name:e,image:a,price:t,quantity:1})}))},children:"Add to Cart"})})]})},ae=v.a.div(Hn||(Hn=Object(f.a)(["\n    background-color: white;\n    display: flex;\n    margin: 10px;\n    flex-direction: column;\n    padding: 20px;\n    max-height: 400px;\n    min-width: 27%;\n    margin: 10px;\n    border-radius: 4px;\n"]))),ce=v.a.span(Ln||(Ln=Object(f.a)(["\n    padding: 3px;"]))),re=v.a.span(Rn||(Rn=Object(f.a)(["\n    margin-top: -20px;\n    font-weight: 500;\n    text-align: right;\n"]))),oe=v.a.div(Un||(Un=Object(f.a)(["\n    display: flex;\n"]))),de=v.a.img(Gn||(Gn=Object(f.a)(["\n    max-height: 200px;\n    object-fit: contain;\n    transition: transform .3s ease-in-out;\n    :hover {\n        transform: scale(1.05);\n    }\n"]))),se=v.a.button(Mn||(Mn=Object(f.a)(["\n    width: 100px;\n    height: 30px;\n    background-color: #f0c14b;\n    border: 2px solid #a99734;\n    border-radius: 2px;\n    cursor: pointer;\n"]))),le=v.a.div(Nn||(Nn=Object(f.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 12px;\n"])));var je,pe,be,xe,ue=function(){var n=Object(u.useState)([]),e=Object(m.a)(n,2),t=e[0],i=e[1],a=Object(u.useState)([]),c=Object(m.a)(a,2),r=c[0],o=c[1];return Object(u.useEffect)((function(){Y.collection("products").onSnapshot((function(n){var e;e=n.docs.map((function(n){return{id:n.id,product:n.data()}})),i(e)})),Y.collection("productsTwo").onSnapshot((function(n){var e;e=n.docs.map((function(n){return{id:n.id,productsTwo:n.data()}})),o(e)}))}),[]),Object(F.jsxs)(ge,{children:[Object(F.jsxs)(he,{children:[Object(F.jsx)(fe,{children:"AMAZON FIRE TV"}),Object(F.jsx)(me,{children:"Streaming media player with 4K Ultra HD and Alexa Voice Remote."})]}),Object(F.jsx)(Oe,{children:t.map((function(n){return Object(F.jsx)(Pn,{title:n.product.name,price:n.product.price,rating:n.product.rating,image:n.product.image,id:n.id})}))}),Object(F.jsx)(ve,{children:r.map((function(n){return Object(F.jsx)(ie,{title:n.productsTwo.name,price:n.productsTwo.price,rating:n.productsTwo.rating,image:n.productsTwo.image,id:n.id})}))})]})},ge=v.a.div(_n||(_n=Object(f.a)(["\n    max-width: 1500px;\n    margin: 0 auto;\n"]))),he=v.a.div(Yn||(Yn=Object(f.a)(["\n    background-image: url('https://imgur.com/RcIHUHF.jpg');\n    background-image: src();\n    min-height: 300px;\n    background-position: center;\n    background-size: cover;\n    mask-image: linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,.1));\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    color: white;\n\n"]))),Oe=v.a.div(Zn||(Zn=Object(f.a)(["\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-top: -20px;\n    display: flex;\n"]))),fe=v.a.h1(ne||(ne=Object(f.a)(["\n    font-size: 3em;\n"]))),me=v.a.h3(ee||(ee=Object(f.a)(["\n\n"]))),ve=v.a.div(te||(te=Object(f.a)(["\n    display: flex;\n    justify-content: space-around;\n"])));var ye,we=function(n){var e=n.setUser;return Object(F.jsx)(ke,{children:Object(F.jsxs)(Se,{children:[Object(F.jsx)(Ie,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png"}),Object(F.jsx)("h1",{children:"Sign into Google"}),Object(F.jsx)(Ce,{onClick:function(){Z.signInWithPopup(nn).then((function(n){var t=n.user,i={name:t.displayName,email:t.email,photo:t.photoURL};localStorage.setItem("user",JSON.stringify(i)),e(i),console.log(t)})).catch((function(n){alert(n.message)}))},children:"Sign in with Google"})]})})},ke=v.a.div(je||(je=Object(f.a)(["\n    display: grid;\n    place-items: center;\n    background-color: white;\n    height: 100vh;\n    width: 100vw;\n"]))),Se=v.a.div(pe||(pe=Object(f.a)(["\n    box-shadow: 0 0 5px 2px gray;\n    text-align: center;\n    padding: 100px;\n"]))),Ie=v.a.img(be||(be=Object(f.a)(["\n    height: 80px;\n    margin-bottom: 35px;\n"]))),Ce=v.a.button(xe||(xe=Object(f.a)(["\n    margin-top: 20px;\n    background-color: #85f8ef;\n    border: 1px solid gray;\n    padding: 6px;\n    border-radius: 4px;\n    font-size: 18px;\n"]))),Ae=t(12);var Fe=function(){var n=Object(u.useState)(JSON.parse(localStorage.getItem("user"))),e=Object(m.a)(n,2),t=e[0],i=e[1],a=Object(u.useState)([]),c=Object(m.a)(a,2),r=c[0],o=c[1];return Object(u.useEffect)((function(){Y.collection("cartitems").onSnapshot((function(n){var e=n.docs.map((function(n){return{id:n.id,product:n.data()}}));o(e)}))}),[]),Object(F.jsx)(A.a,{children:t?Object(F.jsxs)(ze,{children:[Object(F.jsx)(z,{signOut:function(){Z.signOut().then((function(){localStorage.removeItem("user"),i(null)}))},user:t,cartItems:r}),Object(F.jsxs)(Ae.c,{children:[Object(F.jsx)(Ae.a,{path:"/cart",children:Object(F.jsx)(Bn,{cartItems:r})}),Object(F.jsx)(Ae.a,{path:"/",children:Object(F.jsx)(ue,{})})]})]}):Object(F.jsx)(we,{setUser:i})})},ze=v.a.div(ye||(ye=Object(f.a)([""]))),Te=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,74)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;t(n),i(n),a(n),c(n),r(n)}))};O.a.render(Object(F.jsx)(g.a.StrictMode,{children:Object(F.jsx)(Fe,{})}),document.getElementById("root")),Te()}},[[62,1,2]]]);
//# sourceMappingURL=main.af0f563e.chunk.js.map