(this["webpackJsonpneed-for-drive"]=this["webpackJsonpneed-for-drive"]||[]).push([[0],Array(29).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r,c,a,i=n(1),l=n(23),s=n.n(l),o=n(5),u=(n(29),n(3)),d=(n(30),n(31),n(0)),j=function(){return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2016-2019 \xabNeed for drive\xbb"}),Object(d.jsx)("address",{className:"footer__address",children:Object(d.jsx)("a",{href:"tel: 8 (495) 234-22-44",children:"8 (495) 234-22-44"})})]})},b=n(9),f=n.n(b),p=(n(33),function(e){var t=e.value,n=e.color,r=void 0===n?"default":n,c=e.disabled,a=e.className,i=e.onClick,l=f()("button",["button_color-".concat(r)],a);return Object(d.jsx)("button",{className:l,disabled:c,onClick:i,children:t})}),O=n(2),m=(n(34),n.p+"static/media/left-arrow.1752ae91.svg"),h=n.p+"static/media/right-arrow.7591c327.svg",v=(n(35),function(e){for(var t=e.curIndex,n=e.count,r=[],c=0;c<n;c++)r.push(Object(d.jsx)("div",{className:"circle-pagination__circle ".concat(t===c?"circle-pagination__circle_active":"")},c));return r}),g=function(e){var t=e.count,n=e.curIndex,r=Object(i.useState)(n),c=Object(O.a)(r,2),a=c[0],l=c[1];return Object(i.useEffect)((function(){l(n)}),[n]),Object(d.jsx)("div",{className:"circle-pagination",children:Object(d.jsx)(v,{curIndex:a,count:t})})},x=[{title:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430",subtitle:"\u041e\u0441\u0442\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043c\u0430\u0448\u0438\u043d\u0443 \u043d\u0430 \u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0445 \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430\u0445 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0445 \u043c\u0435\u0441\u0442\u0430\u0445, \u043d\u0435 \u043d\u0430\u0440\u0443\u0448\u0430\u044f \u041f\u0414\u0414, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442\u0430\u0445.",image:n.p+"static/media/slider-card1.024ae8f2.jpg",color:"green"},{title:"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430",subtitle:"\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",image:n.p+"static/media/slider-card2.21d07787.jpg",color:"blue"},{title:"\u0411\u0435\u043d\u0437\u0438\u043d",subtitle:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0431\u0430\u043a \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0437\u0430\u043f\u0440\u0430\u0432\u043a\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0437\u0430 \u043d\u0430\u0448 \u0441\u0447\u0451\u0442",image:n.p+"static/media/slider-card3.d16c5160.jpg",color:"red"},{title:"\u041e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435",subtitle:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u0422\u041e",image:n.p+"static/media/slider-card4.82fdbed0.jpg",color:"purple"}],C=function(){var e=Object(i.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(0),a=Object(O.a)(c,2),l=a[0],s=a[1],o=function(e){e>=0&&e<n.length&&s(e)};return Object(i.useEffect)((function(){var e=x.map((function(e){var t=new Image;return t.src=e.image,t.image=t,e}));r(e)}),[]),Object(d.jsxs)("div",{className:"slider",children:[Object(d.jsxs)("div",{className:"slider__background",children:[Object(d.jsx)("img",{className:"slider__image",alt:"Need for drive",src:n.length?n[l].image:null}),Object(d.jsx)("div",{className:"slider__overlay"})]}),Object(d.jsx)("div",{className:"slider__arrow",onClick:function(){return o(l-1)},children:Object(d.jsx)("img",{src:m,alt:"arrow"})}),Object(d.jsxs)("div",{className:"slider__center",children:[Object(d.jsxs)("div",{className:"slider__text",children:[Object(d.jsx)("h2",{className:"slider__title",children:n.length?n[l].title:""}),Object(d.jsx)("p",{className:"slider__subtitle",children:n.length?n[l].subtitle:""}),Object(d.jsx)(p,{className:"slider__button",value:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",color:n.length?n[l].color:""})]}),Object(d.jsx)(g,{count:n.length,curIndex:l})]}),Object(d.jsx)("div",{className:"slider__arrow",onClick:function(){return o(l+1)},children:Object(d.jsx)("img",{src:h,alt:"arrow"})})]})},_=(n(36),n.p+"static/media/logo.b6042f1e.svg"),w=n.p+"static/media/map.480be180.svg",y=function(){var e=Object(u.g)();return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{className:"header__logo",src:_,alt:"Need for drive",onClick:function(){return e.push("/")}}),Object(d.jsxs)("div",{className:"header__map",children:[Object(d.jsx)("img",{src:w,alt:"Need for drive"}),Object(d.jsx)("p",{children:"\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"})]})]})},N=(n(42),[{to:"/order",name:"\u041f\u0430\u0440\u043a\u043e\u0432\u043a\u0430"},{to:"/order",name:"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430"},{to:"/order",name:"\u0411\u0435\u043d\u0437\u0438\u043d"},{to:"/order",name:"\u041e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435"}]),k=["title","titleId"];function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function L(e,t){var n=e.title,l=e.titleId,s=S(e,k);return i.createElement("svg",E({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},s),n?i.createElement("title",{id:l},n):null,r||(r=i.createElement("path",{d:"M4 16H28",stroke:"white",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),c||(c=i.createElement("path",{d:"M4 8H28",stroke:"white",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),a||(a=i.createElement("path",{d:"M4 24H28",stroke:"white",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})))}var I,R,P=i.forwardRef(L),A=(n.p,["title","titleId"]);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Z(e,t){var n=e.title,r=e.titleId,c=T(e,A);return i.createElement("svg",M({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?i.createElement("title",{id:r},n):null,I||(I=i.createElement("path",{d:"M24 8L8 24",stroke:"white",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),R||(R=i.createElement("path",{d:"M8 8L24 24",stroke:"white",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})))}var B,H,V,z=i.forwardRef(Z),W=(n.p,["title","titleId"]);function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function q(e,t){var n=e.title,r=e.titleId,c=F(e,W);return i.createElement("svg",U({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?i.createElement("title",{id:r},n):null,B||(B=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM12.4822 7.51824C13.3924 7.47682 13.6833 7.46668 16.0008 7.46668H15.9981C18.3164 7.46668 18.6062 7.47682 19.5164 7.51824C20.4248 7.55984 21.0453 7.70366 21.5893 7.91469C22.1511 8.13247 22.6258 8.42403 23.1004 8.8987C23.5751 9.37301 23.8667 9.84911 24.0853 10.4104C24.2951 10.9529 24.4391 11.573 24.4818 12.4815C24.5227 13.3917 24.5333 13.6826 24.5333 16.0001C24.5333 18.3176 24.5227 18.6078 24.4818 19.518C24.4391 20.4261 24.2951 21.0464 24.0853 21.5891C23.8667 22.1502 23.5751 22.6263 23.1004 23.1006C22.6263 23.5753 22.1509 23.8676 21.5898 24.0855C21.0469 24.2965 20.4261 24.4404 19.5176 24.482C18.6074 24.5234 18.3174 24.5335 15.9997 24.5335C13.6824 24.5335 13.3917 24.5234 12.4815 24.482C11.5732 24.4404 10.9529 24.2965 10.41 24.0855C9.84909 23.8676 9.37299 23.5753 8.89886 23.1006C8.42436 22.6263 8.1328 22.1502 7.91467 21.589C7.70382 21.0464 7.56 20.4263 7.51822 19.5178C7.47697 18.6076 7.46666 18.3176 7.46666 16.0001C7.46666 13.6826 7.47733 13.3915 7.51804 12.4813C7.55893 11.5732 7.70293 10.9529 7.91449 10.4102C8.13316 9.84911 8.42472 9.37301 8.89939 8.8987C9.3737 8.4242 9.8498 8.13265 10.411 7.91469C10.9536 7.70366 11.5737 7.55984 12.4822 7.51824Z",fill:"white"})),H||(H=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.2353 9.00445C15.3839 9.00422 15.5438 9.00429 15.7164 9.00437L16.0008 9.00445C18.2792 9.00445 18.5493 9.01263 19.449 9.05352C20.281 9.09156 20.7326 9.23059 21.0334 9.34739C21.4316 9.50206 21.7155 9.68695 22.014 9.98562C22.3127 10.2843 22.4976 10.5687 22.6526 10.967C22.7694 11.2674 22.9086 11.719 22.9465 12.551C22.9874 13.4505 22.9963 13.7208 22.9963 15.9981C22.9963 18.2755 22.9874 18.5457 22.9465 19.4453C22.9084 20.2773 22.7694 20.7288 22.6526 21.0293C22.4979 21.4275 22.3127 21.7111 22.014 22.0096C21.7153 22.3082 21.4318 22.4931 21.0334 22.6478C20.7329 22.7651 20.281 22.9038 19.449 22.9418C18.5494 22.9827 18.2792 22.9916 16.0008 22.9916C13.7222 22.9916 13.4522 22.9827 12.5526 22.9418C11.7206 22.9034 11.269 22.7644 10.968 22.6476C10.5698 22.4929 10.2854 22.3081 9.98669 22.0094C9.68802 21.7107 9.50313 21.427 9.34811 21.0286C9.23131 20.7281 9.09211 20.2766 9.05424 19.4446C9.01335 18.545 9.00517 18.2748 9.00517 15.996C9.00517 13.7172 9.01335 13.4484 9.05424 12.5488C9.09228 11.7168 9.23131 11.2653 9.34811 10.9645C9.50278 10.5662 9.68802 10.2818 9.98669 9.98313C10.2854 9.68446 10.5698 9.49957 10.968 9.34455C11.2688 9.22721 11.7206 9.08854 12.5526 9.05032C13.3398 9.01476 13.6449 9.0041 15.2353 9.00232V9.00445ZM20.5559 10.4213C19.9905 10.4213 19.5319 10.8795 19.5319 11.445C19.5319 12.0103 19.9905 12.469 20.5559 12.469C21.1212 12.469 21.5799 12.0103 21.5799 11.445C21.5799 10.8797 21.1212 10.421 20.5559 10.421V10.4213ZM11.6185 16.0001C11.6185 13.58 13.5806 11.6179 16.0006 11.6178C18.4207 11.6178 20.3824 13.58 20.3824 16.0001C20.3824 18.4202 18.4209 20.3815 16.0008 20.3815C13.5807 20.3815 11.6185 18.4202 11.6185 16.0001Z",fill:"white"})),V||(V=i.createElement("path",{d:"M16.0008 13.1556C17.5717 13.1556 18.8453 14.4291 18.8453 16.0001C18.8453 17.571 17.5717 18.8446 16.0008 18.8446C14.4298 18.8446 13.1563 17.571 13.1563 16.0001C13.1563 14.4291 14.4298 13.1556 16.0008 13.1556Z",fill:"white"})))}var J,X=i.forwardRef(q),D=(n.p,["title","titleId"]);function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Q(e,t){var n=e.title,r=e.titleId,c=K(e,D);return i.createElement("svg",G({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?i.createElement("title",{id:r},n):null,J||(J=i.createElement("path",{d:"M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 23.9875 5.85 30.6062 13.5 31.8062V20.625H9.4375V16H13.5V12.475C13.5 8.46563 15.8875 6.25 19.5438 6.25C21.2938 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1063C19.1188 10.5 18.5 11.7344 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8062C26.15 30.6062 32 23.9875 32 16Z",fill:"white"})))}var Y,$=i.forwardRef(Q),ee=(n.p,["title","titleId"]);function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function re(e,t){var n=e.title,r=e.titleId,c=ne(e,ee);return i.createElement("svg",te({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?i.createElement("title",{id:r},n):null,Y||(Y=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM10.7144 14.5343C9.11157 15.2341 7.46472 15.9532 5.95883 16.7826L5.95873 16.7828C5.17241 17.3585 6.21758 17.7657 7.19803 18.1476C7.35391 18.2084 7.50814 18.2685 7.65313 18.3285C7.77377 18.3656 7.89647 18.4047 8.02079 18.4443C9.11124 18.7917 10.3272 19.1791 11.3858 18.5963C13.1248 17.5973 14.766 16.4424 16.4059 15.2883C16.9432 14.9102 17.4803 14.5322 18.0207 14.1598C18.046 14.1436 18.0746 14.1251 18.1058 14.1048C18.5662 13.8064 19.6016 13.1353 19.2186 14.06C18.313 15.0504 17.3429 15.9272 16.3676 16.8087C15.7103 17.4027 15.0506 17.999 14.4066 18.6336C13.8457 19.0894 13.2633 20.0059 13.8914 20.644C15.3379 21.6567 16.8071 22.6449 18.2755 23.6325C18.7533 23.9538 19.231 24.2752 19.7079 24.5972C20.516 25.2425 21.779 24.7206 21.9567 23.7123C22.0357 23.2485 22.115 22.7847 22.1944 22.3208C22.6328 19.7578 23.0713 17.1938 23.4587 14.6223C23.5113 14.219 23.571 13.8156 23.6307 13.4121C23.7755 12.434 23.9204 11.4547 23.9656 10.4714C23.849 9.49009 22.6592 9.70585 21.997 9.9265C18.5935 11.2216 15.224 12.6126 11.8679 14.0282C11.4877 14.1967 11.1023 14.3649 10.7144 14.5343Z",fill:"white"})))}var ce,ae=i.forwardRef(re),ie=(n.p,function(){var e=Object(i.useState)("Eng"),t=Object(O.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(!1),a=Object(O.a)(c,2),l=a[0],s=a[1],u=f()("sidebar",{sidebar__opened:l}),j=function(){return s(!l)};return Object(d.jsxs)("aside",{className:u,children:[l?Object(d.jsx)(z,{className:"sidebar__icon",onClick:j}):Object(d.jsx)(P,{className:"sidebar__icon",onClick:j}),Object(d.jsx)("div",{className:"sidebar__wrapper",children:Object(d.jsxs)("nav",{children:[Object(d.jsx)("ul",{className:"nav-list",children:N.map((function(e,t){return Object(d.jsx)("li",{className:"nav-list__item",children:Object(d.jsx)(o.b,{className:"nav-link nav-link_color-gray",to:e.to,children:e.name})},"".concat(e.name,"-").concat(t))}))}),Object(d.jsxs)("ul",{className:"nav-list nav-list_horizontal",children:[Object(d.jsx)("li",{className:"nav-list__item",children:Object(d.jsx)(o.b,{to:"#",children:Object(d.jsx)(ae,{})})}),Object(d.jsx)("li",{className:"nav-list__item",children:Object(d.jsx)(o.b,{to:"#",children:Object(d.jsx)($,{})})}),Object(d.jsx)("li",{className:"nav-list__item",children:Object(d.jsx)(o.b,{to:"#",children:Object(d.jsx)(X,{})})})]})]})}),Object(d.jsx)("button",{className:"sidebar__language",onClick:function(){r("Eng"===n?"\u0420\u0443\u0441":"Eng")},children:n})]})}),le=function(){var e=Object(u.g)();return Object(d.jsxs)("div",{className:"main-page",children:[Object(d.jsx)(ie,{}),Object(d.jsxs)("main",{className:"main-page__content",children:[Object(d.jsxs)("article",{className:"main-page__hero-wrapper",children:[Object(d.jsx)(y,{}),Object(d.jsxs)("section",{className:"main-page__hero",children:[Object(d.jsxs)("h1",{className:"main-page__title",children:[Object(d.jsx)("span",{className:"main-page__title main-page__title_black",children:"\u041a\u0430\u0440\u0448\u0435\u0440\u0438\u043d\u0433"}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"main-page__title main-page__title_green",children:"Need for drive"})]}),Object(d.jsx)("p",{className:"main-page__subtitle",children:"\u041f\u043e\u043c\u0438\u043d\u0443\u0442\u043d\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e \u0442\u0432\u043e\u0435\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430"}),Object(d.jsx)(p,{className:"main-page__button",value:"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:function(){return e.push("/order")}})]}),Object(d.jsx)(j,{})]}),Object(d.jsx)("section",{className:"main-page__slider-wrapper",children:Object(d.jsx)(C,{})})]})]})},se=n(21),oe=(n(43),n(44),function(e){var t=e.order,n=t.city,r=t.point,c=t.model,a=Object(u.h)().pathname;return Object(d.jsxs)("section",{className:"order",children:[Object(d.jsx)("h2",{className:"order__title",children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437:"}),Object(d.jsxs)("p",{className:"order__item",children:[Object(d.jsx)("span",{children:"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438"}),Object(d.jsx)("span",{}),Object(d.jsxs)("span",{children:[n,",",Object(d.jsx)("br",{}),r]})]}),c?Object(d.jsxs)("p",{className:"order__item",children:[Object(d.jsx)("span",{children:"\u041c\u043e\u0434\u0435\u043b\u044c"}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{children:c})]}):null,Object(d.jsxs)("p",{className:"order__price",children:[Object(d.jsx)("strong",{children:"\u0426\u0435\u043d\u0430: "}),Object(d.jsx)("span",{children:"\u043e\u0442 8 000 \u0434\u043e 12 000 \u20bd"})]}),"/order/location"===a&&Object(d.jsx)(p,{value:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c",disabled:!n&&!r}),"/order/model"===a&&Object(d.jsx)(p,{value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e",disabled:!c})]})}),ue=(n(45),[{to:"/order/location",name:"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"},{to:"/order/model",name:"\u041c\u043e\u0434\u0435\u043b\u044c"},{to:"/order/additionally",name:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},{to:"/order/total",name:"\u0418\u0442\u043e\u0433\u043e"}]),de=function(){return Object(d.jsx)("section",{className:"breadcrumbs",children:ue.map((function(e,t){return Object(d.jsx)(o.c,{className:"breadcrumbs__link",activeClassName:"breadcrumbs__link_active",to:e.to,children:e.name},"".concat(e.name,"-").concat(t))}))})},je=(n(46),n(47),["title","titleId"]);function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function pe(e,t){var n=e.title,r=e.titleId,c=fe(e,je);return i.createElement("svg",be({width:8,height:8,viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?i.createElement("title",{id:r},n):null,ce||(ce=i.createElement("path",{d:"M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z",fill:"#121212"})))}var Oe=i.forwardRef(pe),me=(n.p,n(48),function(e){var t=e.isOpen,n=e.items,r=e.scrollTo,c=e.onSelect,a=Object(i.useRef)([]),l=Object(i.useRef)(),s=f()("dropdown",{dropdown_opened:t});return Object(i.useEffect)((function(){a.current=a.current.slice(0,n.length)}),[n]),Object(i.useEffect)((function(){if(a.current&&a.current.length&&l.current){var e=l.current,t=e.getBoundingClientRect(),n=a.current[r].getBoundingClientRect(),c=Math.abs(n.top-t.top);n.top>t.top?e.scrollTop+=c:e.scrollTop-=c}}),[r]),Object(d.jsx)("ul",{className:s,ref:l,children:n.map((function(e,t){return Object(d.jsx)("li",{ref:function(e){return a.current[t]=e},className:"dropdown__item",onClick:function(){return c(t)},children:e},t)}))})}),he=function(e){var t=e.value,n=e.label,r=e.placeholder,c=e.onSelect,a=e.items,l=void 0===a?[]:a,s=e.disabled,o=Object(i.useState)(""),u=Object(O.a)(o,2),j=u[0],b=u[1],f=Object(i.useState)(!1),p=Object(O.a)(f,2),m=p[0],h=p[1],v=Object(i.useState)(!1),g=Object(O.a)(v,2),x=g[0],C=g[1],_=Object(i.useState)(0),w=Object(O.a)(_,2),y=w[0],N=w[1];Object(i.useEffect)((function(){return b(t)}),[t]),Object(i.useEffect)((function(){if(j.length>=2&&x){m||h(!0);var e=l.findIndex((function(e){return e.startsWith(t)}));e>=0&&N(e)}}),[j]);return Object(d.jsxs)("div",{className:"select",children:[n&&Object(d.jsx)("label",{className:"select__label",children:n}),Object(d.jsx)("input",{className:"select__input",type:"text",value:j,placeholder:r,onChange:function(e){x||C(!0),b(e.target.value)},disabled:s,onBlur:function(){var e=setTimeout((function(){C(!1),h(!1)}),200);return function(){return clearTimeout(e)}}}),!!j.length&&Object(d.jsx)(Oe,{className:"select__clear-icon",onClick:function(){C(!1),h(!1),b(""),c("")}}),Object(d.jsx)(me,{isOpen:m,items:l,onSelect:function(e){C(!1),h(!1),b(l[e]),c(l[e])},scrollTo:y})]})},ve=n(13),ge=n(20),xe=n.n(ge),Ce=(n(49),function(e){var t=e.label,n=e.center,r=e.markers,c=e.onMarkerClick,a=Object(i.useState)(null),l=Object(O.a)(a,2),s=l[0],o=l[1],u=Object(i.useState)([]),j=Object(O.a)(u,2),b=j[0],f=j[1],p=Object(i.useRef)();return Object(i.useEffect)((function(){if(p.current){var e=xe.a.map(p.current,{center:n,zoom:11,fullscreenControl:!1});o(e)}}),[]),Object(i.useEffect)((function(){s&&s.setView([n.lat,n.lng],n.zoom?n.zoom:11)}),[n]),Object(i.useEffect)((function(){if(s&&r&&r.length){var e,t=Object(ve.a)(b);try{for(t.s();!(e=t.n()).done;){e.value.removeFrom(s)}}catch(o){t.e(o)}finally{t.f()}var n,a=[],i=Object(ve.a)(r);try{var l=function(){var e=n.value,t=xe.a.marker([e.lat,e.lng]);t.on("click",(function(){return c(e)})),a.push(t),t.addTo(s)};for(i.s();!(n=i.n()).done;)l()}catch(o){i.e(o)}finally{i.f()}f(a)}}),[r]),Object(d.jsxs)("div",{className:"map",children:[t&&Object(d.jsx)("label",{className:"map__label",children:t}),Object(d.jsx)("div",{className:"map__inner",ref:p})]})}),_e=n(10),we=n.n(_e),ye=n(14);var Ne="oQzLUZXwKR7U4UgAAmlgF13jDiGyio00",ke="http://www.mapquestapi.com/geocoding/v1";var Ee=function(e){var t=e.city,n=e.point,r=e.onChange,c=Object(i.useState)([]),a=Object(O.a)(c,2),l=a[0],s=a[1],o=Object(i.useState)([]),u=Object(O.a)(o,2),j=u[0],b=u[1],f=Object(i.useState)([]),p=Object(O.a)(f,2),m=p[0],h=p[1],v=Object(i.useState)({lat:54.314192,lng:48.403132}),g=Object(O.a)(v,2),x=g[0],C=g[1],_=Object(i.useState)([]),w=Object(O.a)(_,2),y=w[0],N=w[1],k=function(){var e=Object(i.useState)(!1),t=Object(O.a)(e,2),n=t[0],r=t[1];return{get:Object(i.useCallback)(function(){var e=Object(ye.a)(we.a.mark((function e(t){var n,c,a;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),n={Authorization:"Bearer ".concat("52efbe08228671240494f537f2486bc109a637b4"),"X-Api-Factory-Application-Id":"5e25c641099b810b946c5d5b"},e.next=5,fetch("".concat("https://api-factory.simbirsoft1.com","/api/").concat(t),{headers:n});case 5:if((c=e.sent).ok){e.next=8;break}throw new Error(c.statusText);case 8:return e.next=10,c.json();case 10:return a=e.sent,r(!1),e.abrupt("return",a);case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0),r(!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),[]),loading:n}}().get,E={getCity:Object(i.useCallback)(function(){var e=Object(ye.a)(we.a.mark((function e(t){var n,r,c,a,i;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(ke,"/address?key=").concat(Ne,"&location=").concat(t));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.statusText);case 6:return e.next=8,n.json();case 8:return r=e.sent,c=r.results,a=c[0].locations,i=a.filter((function(e){return"RU"===e.adminArea1}))[0].latLng,e.abrupt("return",i);case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),[]),getStreets:Object(i.useCallback)(function(){var e=Object(ye.a)(we.a.mark((function e(t,n){var r,c,a,i,l,s,o,u;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,r="".concat(ke,"/batch?key=").concat(Ne),c=Object(ve.a)(n);try{for(c.s();!(a=c.n()).done;)i=a.value,r+="&location=".concat(t,",").concat(i)}catch(d){c.e(d)}finally{c.f()}return e.next=6,fetch(r);case 6:if((l=e.sent).ok){e.next=9;break}throw new Error(l.statusText);case 9:return e.next=11,l.json();case 11:return s=e.sent,o=s.results,u=o.map((function(e){var n=e.locations,r=e.providedLocation,c=n[0].latLng,a=c.lat,i=c.lng,l=r.location,s=l.substr(l.indexOf(",")+1);return{city:t,street:s,lat:a,lng:i}})),e.abrupt("return",u);case 17:e.prev=17,e.t0=e.catch(0),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t,n){return e.apply(this,arguments)}}(),[])},S=E.getCity,L=E.getStreets;Object(i.useEffect)((function(){k("/db/city").then((function(e){var t=e.data;return h(t)})).catch((function(e){return console.error(e)})),k("/db/point").then((function(e){var t=e.data;return s(t)})).catch((function(e){return console.error(e)}))}),[]),Object(i.useEffect)((function(){if(t&&l.length){var e=m.find((function(e){return e.name===t})),n=l.filter((function(t){var n=t.cityId;return n&&n.id===e.id}));b(n),S(t).then((function(e){var t=e.lat,n=e.lng;return C({lat:t,lng:n})})).catch((function(e){return console.error(e)}))}}),[t,l]),Object(i.useEffect)((function(){if(j.length){var e=j.map((function(e){return e.address}));L(t,e).then((function(e){return N(e)})).catch((function(e){return console.error(e)}))}}),[j]);return Object(d.jsxs)("form",{className:"choice-location-form",children:[Object(d.jsxs)("section",{className:"choice-location-form__wrapper",children:[Object(d.jsx)(he,{label:"\u0413\u043e\u0440\u043e\u0434",value:t,placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0433\u043e\u0440\u043e\u0434...",items:m.map((function(e){return e.name})),onSelect:function(e){return r({city:e,point:""})}}),Object(d.jsx)(he,{label:"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438",value:n,placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043f\u0443\u043d\u043a\u0442...",items:j.map((function(e){return e.address})),onSelect:function(e){r({point:e});var t=y.find((function(t){return t.street===e}));if(t){var n=t.lat,c=t.lng;C({lat:n,lng:c,zoom:15})}},disabled:!j.length})]}),Object(d.jsx)(Ce,{label:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435",center:x,markers:y,onMarkerClick:function(e){var t=e.street;return r({point:t})}})]})},Se=(n(51),n.p+"static/media/car1.7e813c65.png"),Le=(n(52),function(e){var t=e.label,n=e.value,r=e.checked,c=e.onClick;return Object(d.jsxs)("div",{className:"radio",onClick:function(){return c(n)},children:[Object(d.jsx)("input",{className:"radio__input",type:"radio",value:n,checked:r,onChange:function(){}}),t&&Object(d.jsx)("label",{className:"radio__label",children:t})]})}),Ie=(n(53),function(e){var t=e.title,n=e.subtitle,r=e.img,c=e.selected,a=e.onClick,i=f()("card",{card_selected:c});return Object(d.jsxs)("section",{className:i,onClick:a,children:[Object(d.jsx)("h2",{className:"card__title",children:t}),Object(d.jsx)("p",{className:"card__subtitle",children:n}),Object(d.jsx)("img",{className:"card__img",src:r,alt:"card-img"})]})}),Re=(n(54),function(e){var t=e.countPages,n=e.onClick,r=Object(i.useState)(1),c=Object(O.a)(r,2),a=c[0],l=c[1],s=function(e){l(e),n(e)};return Object(d.jsxs)("div",{className:"button-pagination",children:[Object(d.jsx)(p,{value:"<",color:"default",className:"button-pagination__button",disabled:1===a,onClick:function(){return s(a-1)}}),Object(d.jsx)("span",{className:"button-pagination__number",children:a}),Object(d.jsx)(p,{value:">",color:"default",className:"button-pagination__button",disabled:a===t,onClick:function(){return s(a+1)}})]})}),Pe=[{id:"ab1",name:"ELANTRA",price:"12 000 - 25 000 \u20bd",img:Se},{id:"ab2",name:"ELANTRA",price:"12 000 - 25 000 \u20bd",img:Se},{id:"ab3",name:"ELANTRA",price:"12 000 - 25 000 \u20bd",img:Se},{id:"ab4",name:"ELANTRA",price:"12 000 - 25 000 \u20bd",img:Se},{id:"ab5",name:"ELANTRA",price:"12 000 - 25 000 \u20bd",img:Se},{id:"ab6",name:"ELANTRA",price:"12 000 - 25 000 \u20bd",img:Se}],Ae=function(e){e.model;var t=Object(i.useState)(null),n=Object(O.a)(t,2),r=n[0],c=n[1],a=Object(i.useState)([]),l=Object(O.a)(a,2),s=(l[0],l[1],Object(i.useState)("\u0412\u0441\u0435 \u043c\u043e\u0434\u0435\u043b\u0438")),o=Object(O.a)(s,2),u=o[0],j=o[1],b=function(e){j(e)};return Object(d.jsxs)("form",{className:"choice-model-form",children:[Object(d.jsxs)("section",{className:"choice-model-form__radio-wrapper",children:[Object(d.jsx)(Le,{label:"\u0412\u0441\u0435 \u043c\u043e\u0434\u0435\u043b\u0438",value:"\u0412\u0441\u0435 \u043c\u043e\u0434\u0435\u043b\u0438",checked:"\u0412\u0441\u0435 \u043c\u043e\u0434\u0435\u043b\u0438"===u,onClick:b}),Object(d.jsx)(Le,{label:"\u042d\u043a\u043e\u043d\u043e\u043c",value:"\u042d\u043a\u043e\u043d\u043e\u043c",checked:"\u042d\u043a\u043e\u043d\u043e\u043c"===u,onClick:b}),Object(d.jsx)(Le,{label:"\u041f\u0440\u0435\u043c\u0438\u0443\u043c",value:"\u041f\u0440\u0435\u043c\u0438\u0443\u043c",checked:"\u041f\u0440\u0435\u043c\u0438\u0443\u043c"===u,onClick:b})]}),Object(d.jsx)("section",{className:"choice-model-form__cards-wrapper",children:Pe.map((function(e){return Object(d.jsx)(Ie,{title:e.name,subtitle:e.price,img:e.img,selected:r&&r.id===e.id,onClick:function(){return c(e)}},e.id)}))}),Object(d.jsx)(Re,{countPages:10,onClick:function(){}})]})},Me=function(){var e=Object(i.useState)({city:"",point:"",model:""}),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{className:"order-page",children:[Object(d.jsx)(y,{}),Object(d.jsx)(ie,{}),Object(d.jsxs)("main",{className:"order-page__content",children:[Object(d.jsx)(de,{}),Object(d.jsx)("section",{className:"order-page__form-wrapper",children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.a,{exact:!0,from:"/order",to:"/order/location"}),Object(d.jsx)(u.b,{path:"/order/location",children:Object(d.jsx)(Ee,{city:n.city,point:n.point,onChange:function(e){return r(Object(se.a)(Object(se.a)({},n),e))}})}),Object(d.jsx)(u.b,{path:"/order/model",children:Object(d.jsx)(Ae,{model:n.model})})]})}),Object(d.jsx)("section",{className:"order-page__order-wrapper",children:Object(d.jsx)(oe,{order:n})})]})]})};var Te=function(){return Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{exact:!0,path:"/",component:le}),Object(d.jsx)(u.b,{path:"/order",component:Me})]})};s.a.render(Object(d.jsx)(o.a,{children:Object(d.jsx)(Te,{})}),document.querySelector("#root"))}]),[[55,1,2]]]);
//# sourceMappingURL=main.adfd0fbd.chunk.js.map