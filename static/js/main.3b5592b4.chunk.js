(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{108:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},213:function(e,t,c){},214:function(e,t,c){},215:function(e,t,c){},216:function(e,t,c){},217:function(e,t,c){},218:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(31),s=c.n(r),i=c(12),l=(c(99),c(0)),o=function(){return Object(l.jsxs)("header",{className:"app__header",children:[Object(l.jsx)("h1",{className:"app__title",children:Object(l.jsxs)(i.b,{to:"/marvel",children:[Object(l.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(l.jsx)("nav",{className:"app__menu",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.c,{exact:!0,activeStyle:{color:"#9F0013"},to:"/marvel",children:"Characters"})}),"/",Object(l.jsx)("li",{children:Object(l.jsx)(i.c,{activeStyle:{color:"#9F0013"},to:"/comics",children:"Comics"})})]})})]})},j=c(8),u=(c(108),c.p+"static/media/Avengers.4065c8f9.png"),m=c.p+"static/media/Avengers_logo.9eaf2193.png",b=function(){return Object(l.jsxs)("div",{className:"app__banner",children:[Object(l.jsx)("img",{src:u,alt:"Avengers"}),Object(l.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(l.jsx)("br",{}),"Stay tuned!"]}),Object(l.jsx)("img",{src:m,alt:"Avengers logo"})]})},d=c(86),h=c(9),O=c(3),x=c(15),f=c.n(x),p=c(26),g=function(){var e=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(O.a)(r,2),i=s[0],l=s[1];return{loading:c,error:i,request:Object(n.useCallback)(function(){var e=Object(p.a)(f.a.mark((function e(t){var c,n,r,s,i,o=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,r=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},a(!0),l(!1),e.prev=5,e.next=8,fetch(t,{method:c,body:n,headers:r});case 8:if((s=e.sent).ok){e.next=11;break}throw new Error("Can't fetch ".concat(t));case 11:return e.next=13,s.json();case 13:return i=e.sent,a(!1),e.abrupt("return",i);case 18:e.prev=18,e.t0=e.catch(5),a(!1),l(!0);case 22:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(t){return e.apply(this,arguments)}}(),[])}}(),t=e.loading,c=e.error,a=e.request,r="https://gateway.marvel.com:443/v1/public/",s="apikey=0969786fd5dd4d9e4cd0a47260474b70",i=function(){var e=Object(p.a)(f.a.mark((function e(){var t,c,n=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:210,e.next=3,a("".concat(r,"characters?limit=9&offset=").concat(t,"&").concat(s));case 3:return c=e.sent,e.abrupt("return",c.data.results.map(b));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(p.a)(f.a.mark((function e(t){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("".concat(r,"characters/").concat(t,"?").concat(s));case 2:return c=e.sent,e.abrupt("return",b(c.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(p.a)(f.a.mark((function e(){var t,c,n=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:11,e.next=3,a("".concat(r,"comics?limit=8&offset=").concat(t,"&").concat(s));case 3:return c=e.sent,e.abrupt("return",c.data.results.map(m));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(p.a)(f.a.mark((function e(t){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("".concat(r,"comics/").concat(t,"?").concat(s));case 2:return c=e.sent,e.abrupt("return",m(c.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(p.a)(f.a.mark((function e(t){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("".concat(r,"characters?name=").concat(t,"&").concat(s));case 2:return c=e.sent,e.abrupt("return",c.data.results[0]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return{id:e.id,title:e.title,price:e.prices[0].price,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,description:e.description,pages:e.pageCount,language:e.textObjects.length?e.textObjects[0].language:""}},b=function(e){return{id:e.id,name:e.name,description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}};return{loading:t,error:c,request:a,getAllCharacters:i,getOneCharacter:l,getAllComics:o,getOneComics:j,getCharByName:u}},_=(c(110),function(){return Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(l.jsx)("g",{transform:"translate(80,50)",children:Object(l.jsx)("g",{transform:"rotate(0)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(l.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(l.jsx)("g",{transform:"rotate(45)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(l.jsx)("g",{transform:"translate(50,80)",children:Object(l.jsx)("g",{transform:"rotate(90)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(l.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(l.jsx)("g",{transform:"rotate(135)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(l.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(l.jsx)("g",{transform:"rotate(180)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(l.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(l.jsx)("g",{transform:"rotate(225)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(l.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(l.jsx)("g",{transform:"rotate(270)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(l.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(l.jsx)("g",{transform:"rotate(315)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})})}),v=c.p+"static/media/error.42292aa1.gif",N=function(){return Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsx)("img",{src:v,style:{height:"200px"},alt:"error"})})},y=function(e){var t=e.comics.map((function(e,t){var c=e.title,n=e.id,a=e.price,r=e.thumbnail;return Object(l.jsx)("li",{className:"comics__item",children:Object(l.jsxs)(i.b,{to:"comics/".concat(n),children:[Object(l.jsx)("img",Object(d.a)({className:"comics__img",style:{objectFit:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r?"contain":"cover"},src:r,alt:"ultimate war"},"className","comics__item-img")),Object(l.jsx)("div",{className:"comics__item-name",children:c}),Object(l.jsx)("div",{className:"comics__item-price",children:a||"The price was not found"})]})},t)}));return Object(l.jsx)("ul",{className:"comics__grid",children:t})},k=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(250),s=Object(O.a)(r,2),i=s[0],o=s[1],j=Object(n.useState)(!1),u=Object(O.a)(j,2),m=u[0],b=u[1],d=g(),x=d.loading,f=d.error,p=d.getAllComics;Object(n.useEffect)((function(){v()}),[]);var v=function(){p(i).then(k)},k=function(e){a((function(t){return[].concat(Object(h.a)(t),Object(h.a)(e))})),o((function(e){return e+9})),b(!1)},C=x&&!m?Object(l.jsx)(_,{}):null,w=f?Object(l.jsx)(N,{}):null,T=c?Object(l.jsx)(y,{comics:c}):null;return Object(l.jsxs)("div",{className:"comics__list",children:[C,w,T,Object(l.jsx)("button",{onClick:function(){b(!0),v()},disabled:m,className:"button button__main button__long",children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})},C=c(20),w=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(C.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Comics list"}),Object(l.jsx)("title",{children:"Comics list"})]}),Object(l.jsx)(b,{}),Object(l.jsx)(k,{})]})},T=c.p+"static/media/mjolnir.61f31e18.png",S=(c(111),function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki;return Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:{objectFit:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a?"contain":"cover"}}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:""===n?"Description not found :(":n}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"Homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})}),E=function(){var e=Object(n.useState)({}),t=Object(O.a)(e,2),c=t[0],a=t[1],r=g(),s=r.loading,i=r.error,o=r.getOneCharacter;Object(n.useEffect)((function(){j()}),[]);var j=function(){var e=Math.floor(400*Math.random()+1011e3);o(e).then(u)},u=function(e){a(e)},m=s?Object(l.jsx)(_,{}):null,b=i?Object(l.jsx)(N,{}):null,d=s||i?null:Object(l.jsx)(S,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[m,b,d,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{onClick:function(){j()},className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:T,alt:"mjolnir",className:"randomchar__decoration"})]})]})},F=c(220),A=c(221),M=(c(112),function(e){var t=Object(n.useState)([]),c=Object(O.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!1),i=Object(O.a)(s,2),o=i[0],j=i[1],u=Object(n.useState)(250),m=Object(O.a)(u,2),b=m[0],d=m[1],x=Object(n.useState)(!1),f=Object(O.a)(x,2),p=f[0],v=f[1],y=g(),k=y.loading,C=y.error,w=y.getAllCharacters;Object(n.useEffect)((function(){T()}),[]);var T=function(){w(b).then(S)},S=function(e){r((function(t){return[].concat(Object(h.a)(t),Object(h.a)(e))})),j(!1),d((function(e){return e+9})),v(!e.length)},E=k&&!o?Object(l.jsx)(_,{}):null,F=C?Object(l.jsx)(N,{}):null,A=E||F?null:Object(l.jsx)(B,{chars:a,toSelect:function(t){return e.setSelectedChar(t)}});return Object(l.jsxs)("div",{className:"char__list",children:[E,F,A,Object(l.jsx)("button",{style:{display:p?"none":"block"},disabled:o,onClick:function(){j(!0),T()},className:"button button__main button__long",children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),B=function(e){var t=e.chars,c=e.toSelect,a=Object(n.useRef)([]),r=function(e,t){a.current.forEach((function(e){e.classList.remove("char__item_selected")})),a.current[t].classList.add("char__item_selected"),c(e)},s=t.map((function(e,t){var c=e.name,n=e.thumbnail,s=e.id;return Object(l.jsx)(F.a,{timeout:500,classNames:"char__item",children:Object(l.jsxs)("li",{tabIndex:"0",ref:function(e){return a.current[t]=e},onClick:function(){return r(s,t)},className:"char__item",onKeyPress:function(e){"Enter"===e.key&&r(s,t)},children:[Object(l.jsx)("img",{src:n,alt:"character",style:{objectFit:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n?"contain":"cover"}}),Object(l.jsx)("div",{className:"char__name",children:c})]})},s)}));return Object(l.jsx)("ul",{className:"char__grid",children:Object(l.jsx)(A.a,{component:null,children:s})})},I=(c(113),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),q=(c(114),function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,o=t.comics.slice(0,10).map((function(e){var t=e.resourceURI.split("/").pop();return Object(l.jsx)(i.b,{className:"char__comics-item",to:"/comics/".concat(t),children:e.name},e.name)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:a,alt:"character",style:{objectFit:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a?"contain":"cover"}}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:""===n?"The description was not found":n}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsx)("ul",{className:"char__comics-list",children:0===o.length?"The comics were not found":o})]})}),D=function(e){var t=e.selectedChar,c=Object(n.useState)(null),a=Object(O.a)(c,2),r=a[0],s=a[1],i=g(),o=i.loading,j=i.error,u=i.getOneCharacter;Object(n.useEffect)((function(){t&&m()}),[t]);var m=function(){u(t).then(b)},b=function(e){s(e)},d=r||o||j?null:Object(l.jsx)(I,{}),h=o||j||!r?null:Object(l.jsx)(q,{char:r}),x=!0===o?Object(l.jsx)(_,{}):null,f=!0===j?Object(l.jsx)(N,{}):null;return Object(l.jsxs)("div",{className:"char__info",children:[d,h,x,f]})},R=c(4),L=c(5),P=c(13),J=c(14),V=function(e){Object(P.a)(c,e);var t=Object(J.a)(c);function c(){var e;Object(R.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(L.a)(c,[{key:"componentDidCatch",value:function(e,t){new Error(e,t),this.setState({error:!0})}},{key:"render",value:function(){return!0===this.state.error?Object(l.jsx)(N,{}):this.props.children}}]),c}(n.Component),W=c(39),G=c(62),H=(c(213),function(){var e=Object(n.useState)({id:null,name:null}),t=Object(O.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(O.a)(r,2),o=s[0],j=s[1],u=g().getCharByName,m=c.id?Object(l.jsxs)(i.b,{to:"/character/".concat(c.id),className:"char__search-success",children:["`Visit ",c.name," page...`"]}):null,b=!1===o?Object(l.jsx)("div",{className:"char__search-success",children:"The character was not found..."}):null;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(W.d,{initialValues:{name:""},validationSchema:G.a({name:G.b().required("Field is required")}),onSubmit:function(e){return u(e.name).then((function(e){return function(e){e?a({id:e.id,name:e.name}):j(!1)}(e)}))},children:function(e){var t=e.isSubmitting;return Object(l.jsxs)(W.c,{className:"char__search",children:[Object(l.jsx)("div",{className:"char__search-title",children:"Or find a character by name:"}),Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsx)(W.b,{onInput:function(){a({id:null,name:null}),j(null)},placeholder:"Enter name",className:"char__search-input",type:"text",name:"name"}),Object(l.jsx)("button",{disabled:t,type:"submit",className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"find"})})]}),Object(l.jsx)(W.a,{className:"char__search-error",name:"name",component:"div"}),m,b]})}})})}),K=c.p+"static/media/vision.067d4ae1.png",U=function(){var e=Object(n.useState)(null),t=Object(O.a)(e,2),c=t[0],a=t[1];return Object(l.jsxs)("main",{children:[Object(l.jsxs)(C.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(l.jsx)("title",{children:"Marvel information portal"})]}),Object(l.jsx)(V,{children:Object(l.jsx)(E,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(V,{children:Object(l.jsx)(M,{setSelectedChar:function(e){a(e)}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(V,{children:Object(l.jsx)(D,{selectedChar:c})}),Object(l.jsx)(H,{})]})]}),Object(l.jsx)("img",{className:"bg-decoration",src:K,alt:"vision"})]})},Y=c.p+"static/media/error404.f6d3a8b4.png",$=(c(214),function(e){var t=e.title,c=void 0===t?"Page":t;return Object(l.jsxs)("div",{className:"error404",children:[Object(l.jsxs)(C.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(l.jsx)("title",{children:"Marvel information portal"})]}),Object(l.jsxs)("div",{className:"error404__message",children:[Object(l.jsx)("h3",{className:"error404__name",children:"Error 404"}),Object(l.jsxs)("p",{className:"error404__text",children:[c," is not exist."]}),Object(l.jsx)(i.b,{className:"error404__link",to:"/",children:"Back to main page."})]}),Object(l.jsx)("img",{src:Y,alt:"404image"})]})}),z=(c(215),function(e){var t=e.data,c=t.title,n=t.price,a=t.thumbnail,r=t.description,s=t.pages,o=t.language;return Object(l.jsxs)("div",{className:"single-comic",children:[Object(l.jsxs)(C.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Single comics"}),Object(l.jsx)("title",{children:c})]}),Object(l.jsx)("img",{src:a,alt:"x-men",className:"single-comic__img"}),Object(l.jsxs)("div",{className:"single-comic__info",children:[Object(l.jsx)("h2",{className:"single-comic__name",children:c}),Object(l.jsx)("p",{className:"single-comic__descr",children:r||"Description was not found"}),Object(l.jsx)("p",{className:"single-comic__descr",children:0!==s?s+" pages":"Count of pages was not found"}),Object(l.jsx)("p",{className:"single-comic__descr",children:o?"Language: "+o:"Language was not found"}),Object(l.jsx)("div",{className:"single-comic__price",children:n?n+"$":"Price was not found"})]}),Object(l.jsx)(i.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})}),Q=(c(216),function(e){var t=e.data,c=t.name,n=t.thumbnail,a=t.description;return Object(l.jsxs)("div",{className:"single-char",children:[Object(l.jsxs)(C.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Single character"}),Object(l.jsx)("title",{children:c})]}),Object(l.jsx)("img",{src:n,alt:"x-men",className:"single-char__img"}),Object(l.jsxs)("div",{className:"single-char__info",children:[Object(l.jsx)("h2",{className:"single-char__name",children:c}),Object(l.jsx)("p",{className:"single-char__descr",children:a||"Description was not found"})]})]})}),X=function(e){var t=e.Component,c=e.pageName,a=Object(j.f)().id,r=Object(n.useState)(null),s=Object(O.a)(r,2),i=s[0],o=s[1],u=g(),m=u.loading,d=u.error,h=u.getOneCharacter,x=u.getOneComics,f=m?Object(l.jsx)(_,{}):null,p=d?Object(l.jsx)($,{title:"Comics"}):null,v=m||d||!i?null:Object(l.jsx)(t,{data:i});Object(n.useEffect)((function(){N()}),[a]);var N=function(){switch(c){case"char":h(a).then(y);break;case"comics":x(a).then(y)}},y=function(e){o(e)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{}),f,p,v]})},Z=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(o,{}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/marvel",children:Object(l.jsx)(U,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/comics",children:Object(l.jsx)(w,{})}),Object(l.jsx)(j.a,{path:"/comics/:id",children:Object(l.jsx)(X,{Component:z,pageName:"comics"})}),Object(l.jsx)(j.a,{path:"/character/:id",children:Object(l.jsx)(X,{Component:Q,pageName:"char"})}),Object(l.jsx)(j.a,{path:"*",children:Object(l.jsx)($,{})})]})]})})};c(217);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(Z,{})}),document.getElementById("root"))},99:function(e,t,c){}},[[218,1,2]]]);
//# sourceMappingURL=main.3b5592b4.chunk.js.map