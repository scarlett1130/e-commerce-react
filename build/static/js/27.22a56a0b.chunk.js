(this["webpackJsonpecommarce-apps"]=this["webpackJsonpecommarce-apps"]||[]).push([[27],{379:function(e,a,t){"use strict";t.r(a);var n=t(13),l=t(17),c=t(0),r=t.n(c),o=t(23),i=t(6),m=t(48),s=t(55),u=t(19),p=t(165),g=t(90),E=t(156),f=t(57),d=t.n(f),h=t(10),b=t(76),v=t(22),N=t(25),w=t(169),y=t(62),k=t(63),P=t(60),O=t(61),j=t(166),x=(t(168),t(91)),B=t(294),S=t(293),_=t(34),C=t(31);function F(){var e=Object(_.a)(["\n  /* @media (max-width: 990px) {\n    .Pagination-Row {\n      background-color: #f6f6f6;\n      z-index: 99;\n      position: fixed;\n      top: 5%;\n      left: 6.7%;\n      width: 80%;\n      padding: 1rem;\n      display: none;\n    }\n    .show {\n      display: block;\n    }\n  } */\n"]);return F=function(){return e},e}function z(){var e=Object(_.a)(["\n  position: fixed;\n  top: 15%;\n  right: 5%;\n  z-index: 999;\n  //@media (max-width: 400px) {\n  //  top: 28%;\n  //}\n  //@media (max-width: 385px) {\n  //  top: 31%;\n  //}\n  //\n  //@media (max-width: 338px) {\n  //  top: 23%;\n  //}\n\n  .filter {\n    height: 35px;\n    width: 35px;\n    border-radius: 50%;\n    background-color: #000;\n    opacity: 0.6;\n    color: #fff;\n    display: none;\n    cursor: pointer;\n\n    @media (max-width: 990px) {\n      display: block;\n    }\n  }\n\n  .filter svg {\n    position: absolute;\n    top: 25%;\n    left: 23%;\n    font-size: 20px;\n  }\n"]);return z=function(){return e},e}var I=C.a.div(z()),L=C.a.div(F()),R=function(e){e.filterShow;var a=e.sortBy,t=e.handleSortBy,n=e.classes,l=e.handleNext,c=e.handlePreviews,o=e.handleShowBook,i=e.pagination,m=e.totalPage;return r.a.createElement(L,null,r.a.createElement(s.a,{className:"Pagination-Row mb-5"},r.a.createElement("div",{className:"col"},r.a.createElement("ul",{className:"singleFilter d-flex align-items-center"},r.a.createElement("li",null,r.a.createElement("label",{htmlFor:""},"Sort By")),r.a.createElement("li",null,r.a.createElement("select",{className:"filterSelect form-control",value:a,onChange:t},r.a.createElement("option",{value:""},"select"),r.a.createElement("option",{value:"Popular"},"Popular"),r.a.createElement("option",{value:"New"},"New"),r.a.createElement("option",{value:"Price: low to high"},"Price: low to high"),r.a.createElement("option",{value:"Price: high to low"},"Price: high to low"))))),r.a.createElement("div",{className:"col"},r.a.createElement("ul",{className:"singleFilter d-flex align-items-center"},r.a.createElement("li",null,r.a.createElement("label",null,"Show")),r.a.createElement("li",null,r.a.createElement("select",{name:"up-filter-select",className:"filterSelect form-control",value:i.show,onChange:o},r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"45"},"45"),r.a.createElement("option",{value:"100"},"100"))))),r.a.createElement("div",{className:"col"},r.a.createElement("nav",{"aria-label":"Page navigation"},r.a.createElement("ul",{className:"pagination align-items-center justify-content-between"},r.a.createElement("li",{className:"page-item ".concat(n.page_field),onClick:c},r.a.createElement("button",{className:"page-link"},r.a.createElement("i",{className:"fas fa-chevron-left"}))),r.a.createElement("li",{className:"page-item ".concat(n.page_field)},"Page"),r.a.createElement("li",{className:"page-item ".concat(n.page_field)},r.a.createElement("input",{type:"text",className:"page-link",value:i.page,readOnly:!0})),r.a.createElement("li",{className:"page-item"},"of"),r.a.createElement("li",{className:"page-item ".concat(n.page_field)},r.a.createElement("input",{type:"text",value:m||0,className:"page-link",readOnly:!0})),r.a.createElement("li",{className:"page-item",onClick:l},r.a.createElement("button",{className:"page-link"},r.a.createElement("i",{className:"fas fa-chevron-right"}))))))))};function T(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?T(t,!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var G=Object(b.a)({page_field:{width:"50px",marginRight:"5px",marginLeft:"5px"}});a.default=Object(h.b)((function(e){var a=void 0!==e.book.total?e.book.total:1,t=void 0!==e.book.show?e.book.show:5;return{book:e.book?e.book:[],cart:e.shop.cart,totalItem:a,showItem:t,favorite:e.favorite,filter:e.filter}}),(function(e){return{fetchBooks:function(a,t,n){return e(Object(v.a)(a,t,n))},booksByCategory:function(a,t,n){return e(Object(v.b)(a,t,n))},filterByPrice:function(a,t,n,l,c,r){return e(Object(v.j)(a,t,n,l,c,r))},filterShortByType:function(a,t,n){return e(Object(v.k)(a,t,n))},stageList:function(a){return e(Object(N.i)(a))},getBooksByFilter:function(a,t,n,l){return e(Object(v.c)(a,t,n,l))}}}))((function(e){var a=G(),t=Object(o.m)(),n=t.id,f=t.title,h=t.showItem,b=t.pageNumber,v=t.keyword,N=t.filter_type,_=t.filter_id,C=e.stageList,F=e.filterShortByType,z=e.fetchBooks,L=e.filterByPrice,T=e.getBooksByFilter,A=e.booksByCategory,J=e.book,W=J.totalPage,H=J.data,K=J.pending,M=Object(c.useState)({higherPrice:null,lowerPrice:null}),q=Object(l.a)(M,2),Q=q[0],U=q[1],V=Object(c.useState)({show:20,page:1}),X=Object(l.a)(V,2),Y=X[0],Z=X[1],$=Object(c.useState)(""),ee=Object(l.a)($,2),ae=ee[0],te=ee[1],ne=e.cart.length,le=e.favorite.items,ce=window.location.pathname;Object(c.useEffect)((function(){var e=Y.show,a=Y.page,t=Q.higherPrice,l=Q.lowerPrice;return C(n),a&&e&&ae?F(a,e,ae):"/shopping"===ce?z(a,e,null):a&&e&&l&&t&&N&&_?L(a,e,l,t,N,_):a&&e&&N&&_?T(a,e,N,_):a&&e&&l&&t?L(a,e,l,t):!isNaN(n)&&n&&f&&a&&e?(console.log("fetch by catrr"),A(n,a,e)):"number"!==n&&b&&h&&v?(console.log({page:a,show:e,keyword:v}),z(a,e,v)):function(){console.log("unmount shopage"),C(n),a&&e&&ae?F(a,e,ae):"/shopping"===ce?z(a,e,null):"all"===n&&b&&h&&v?z(a,e,v):a&&e&&l&&t&&N&&_?L(a,e,l,t,N,_):a&&e&&N&&_?T(a,e,N,_):a&&e&&l&&t?L(a,e,l,t):!isNaN(n)&&n&&f&&a&&e&&(console.log("fetch by cat unmount"),A(n,a,e))}}),[ae,Q,n,N,_,Y,C,ce,b,h,v,F,z,L,T,A,f]);var re=function(e,a){return U({higherPrice:a,lowerPrice:e})},oe=function(e){return Z(D({},Y,{show:e.target.value}))},ie=function(){return Y.page<=W?Z(D({},Y,{page:Y.page+1})):Y},me=function(){return 1!==Y.page||Y>0?Z(D({},Y,{page:Y.page-1})):Y},se=function(e){return te(e.target.value)},ue=Object(c.useState)(),pe=Object(l.a)(ue,2),ge=pe[0],Ee=pe[1],fe=function(){Ee(document.body.clientWidth),ge>970&&ve(!1)};Object(c.useEffect)((function(){return window.addEventListener("resize",fe),function(){return window.removeEventListener("resize",fe)}}),[ge]),Object(c.useEffect)((function(){fe()}),[]);var de=Object(c.useState)(!1),he=Object(l.a)(de,2),be=he[0],ve=he[1];return console.log(ge),r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{loading:K}),r.a.createElement("div",{className:"allWrapper"},r.a.createElement(I,null,r.a.createElement("a",{className:"filter",onClick:function(){return ve(!0)}},be?r.a.createElement(S.a,null):r.a.createElement(B.a,null))),r.a.createElement(P.a,{favorite_item:le.length,cartItem:ne}),r.a.createElement(O.a,{favorite_item:le.length,cartItem:ne}),r.a.createElement("main",{className:"mainContent clearfix",id:"mainContent"},r.a.createElement("section",{className:"sectionBreadcrumb secGap clearfix pb-0",id:"sectionBreadcrumb"},r.a.createElement(m.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement(j.a,null))))),r.a.createElement("section",{className:"productsBodyAsidebar clearfix",id:"productsBodyAsidebar"},r.a.createElement(m.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,{sm:"3"},ge>970&&r.a.createElement(w.a,{callback:re})),r.a.createElement(u.a,null,r.a.createElement("div",{className:"allProductContent secGap clearfix",id:"allShopProduct"},r.a.createElement(s.a,{className:"mb-5"},r.a.createElement(u.a,{className:"col"},r.a.createElement("h2",{className:"pageTitle"},r.a.createElement("span",null,f)," Books"))),H&&0===H.length?r.a.createElement("h1",{className:"text-center"},"Sorry, No Result Found :("):r.a.createElement(r.a.Fragment,null,ge>970&&r.a.createElement(R,{sortBy:ae,handleSortBy:se,pagination:Y,handleShowBook:oe,classes:a,handlePreviews:me,totalPage:W,handleNext:ie}),r.a.createElement(s.a,{className:"Product_Row"},H&&0===H.length?r.a.createElement(r.a.Fragment,null):H&&H.map((function(e,a){return r.a.createElement(u.a,{key:a,sm:"3 mb-5"},r.a.createElement(d.a,{once:!0,height:200},r.a.createElement(p.a,{className:"productCard border-0 bg-transparent"},r.a.createElement("div",{className:"productMedia mb-3 bgGray"},r.a.createElement(i.Link,{to:"/product/".concat(e.id)},r.a.createElement("img",{loading:"lazy",src:null!==e.cover_images?"".concat(e.cover_images.img_1):"",alt:""}))),r.a.createElement("div",{className:"productContent"},r.a.createElement(i.Link,{to:"/product/".concat(e.id)},r.a.createElement("h4",{className:"productTitle limit-character"},e.name)),r.a.createElement("h5",{className:"authorName"},e.book_author.name),r.a.createElement("p",{className:"productPrice"},"Ksh ",e.price)))))}))),r.a.createElement(s.a,{className:"Pagination-Row mt-5"},r.a.createElement("div",{className:"col"},r.a.createElement("ul",{className:"singleFilter d-flex align-items-center"},r.a.createElement("li",null,r.a.createElement("label",{htmlFor:""},"Sort By")),r.a.createElement("li",null,r.a.createElement("select",{className:"filterSelect form-control",value:ae,onChange:se},r.a.createElement("option",{value:""},"select"),r.a.createElement("option",{value:"Popular"},"Popular"),r.a.createElement("option",{value:"New"},"New"),r.a.createElement("option",{value:"Price: low to high"},"Price: low to high"),r.a.createElement("option",{value:"Price: high to low"},"Price: high to low"))))),r.a.createElement("div",{className:"col"},r.a.createElement("ul",{className:"singleFilter d-flex align-items-center"},r.a.createElement("li",null,r.a.createElement("label",{htmlFor:""},"Show")),r.a.createElement("li",null,r.a.createElement("select",{name:"up-filter-select",className:"filterSelect form-control",value:Y.show,onChange:oe},r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"45"},"45"),r.a.createElement("option",{value:"100"},"100"))))),r.a.createElement("div",{className:"col"},r.a.createElement("nav",{"aria-label":"Page navigation"},r.a.createElement("ul",{className:"pagination align-items-center justify-content-between"},r.a.createElement("li",{className:"page-item",onClick:me},r.a.createElement("button",{className:"page-link"},r.a.createElement("i",{className:"fas fa-chevron-left"}))),r.a.createElement("li",{className:"page-item ".concat(a.page_field)},"Page"),r.a.createElement("li",{className:"page-item ".concat(a.page_field)},r.a.createElement("input",{type:"text",className:"page-link",value:Y.page,readOnly:!0})),r.a.createElement("li",{className:"page-item"},"of"),r.a.createElement("li",{className:"page-item ".concat(a.page_field)},r.a.createElement("input",{type:"text",value:W||" 0",className:"page-link",readOnly:!0})),r.a.createElement("li",{className:"page-item",onClick:ie},r.a.createElement("button",{className:"page-link"},r.a.createElement("i",{className:"fas fa-chevron-right"}))))))))))))),r.a.createElement("section",{className:"mailSubscribe clearfix sectionBgImage sectionBgImg01 secGap",id:"mailSubscribe"},r.a.createElement(m.a,{className:"container"},r.a.createElement(y.a,null)))),r.a.createElement(g.a,{show:be,onHide:function(){return ve(!1)},size:"lg",centered:!0},r.a.createElement(E.a,null,r.a.createElement(w.a,{callback:re}),r.a.createElement("h2",{className:"asideTitle"},"Sorting"),r.a.createElement(R,{sortBy:ae,handleSortBy:se,pagination:Y,handleShowBook:oe,classes:a,handlePreviews:me,totalPage:W,handleNext:ie}))),r.a.createElement(k.a,null)))}))}}]);
//# sourceMappingURL=27.22a56a0b.chunk.js.map