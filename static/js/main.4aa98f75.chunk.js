(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={g:"CartIcon_g__2_u0U",d1:"CartIcon_d1__2mu50",d2:"CartIcon_d2__3k7uU",circle1:"CartIcon_circle1__2b0l1",circle2:"CartIcon_circle2__o-aJl",d3:"CartIcon_d3__3Zjhb"}},,,function(e,t,n){e.exports={meals:"Meal_meals__3cyLJ","input-form":"Meal_input-form__29pIV","form-button":"Meal_form-button___DMFC","form-quantity":"Meal_form-quantity__2Lgx6"}},,,,function(e,t,n){e.exports={"unordered-list":"CartConfirm_unordered-list__3hcTu","list-item":"CartConfirm_list-item__37rDP"}},,function(e,t,n){e.exports={"cart-button":"CartButton_cart-button__3EOUf"}},function(e,t,n){e.exports={"modal-overlay":"Modal_modal-overlay__2TiFU","modal-class":"Modal_modal-class__15SWM"}},function(e,t,n){e.exports={"body-class":"Body_body-class__17qND","background-image":"Body_background-image__2Xqey"}},,,,,,function(e,t,n){e.exports={"body-description":"BodyDescription_body-description__CCI1n"}},function(e,t,n){e.exports={"meals-container":"MealsContainer_meals-container__imsxk"}},function(e,t,n){e.exports={"message-error":"MealsList_message-error__2zvLR","message-success":"MealsList_message-success__OhTa7"}},,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(20),a=n.n(c),s=(n(35),n(36),n(2)),r=n(15),i=n.n(r),o=n(16),l=n.n(o),d=n(14),u=n.n(d),j=n(1),m=n.n(j),b=n(0),O=function(e){var t=Object(b.jsx)("div",{className:l.a["modal-overlay"],onClick:function(t){var n;null!==(n=t.target)&&void 0!==n&&n.className.toLowerCase().includes("overlay")&&e.closeModal()},children:Object(b.jsx)("div",{className:l.a["modal-class"],closeModal:e.closeModal,children:e.children})});return u.a.createPortal(t,document.getElementById("modal-container"))},h=n(6),f=n.n(h),x=function(){return Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"10 00 100 100",children:[Object(b.jsx)("defs",{}),Object(b.jsxs)("g",{className:f.a.g,children:[Object(b.jsx)("path",{className:f.a.d1,d:"M 24.158 57.596 h 54.898 c 2.293 0 4.313 -1.509 4.964 -3.709 l 5.841 -19.759 c 0.633 -2.141 -0.972 -4.289 -3.204 -4.289 H 16.95 L 24.158 57.596 z"}),Object(b.jsx)("path",{className:f.a.d2,d:"M 79.585 70.399 H 27.091 c -0.687 0 -1.287 -0.464 -1.46 -1.129 L 14.404 26.034 c -0.421 -1.62 -1.883 -2.751 -3.557 -2.751 H 1.508 C 0.675 23.283 0 22.608 0 21.775 s 0.675 -1.508 1.508 -1.508 h 9.339 c 3.048 0 5.711 2.06 6.476 5.01 l 10.935 42.106 h 51.327 c 0.833 0 1.508 0.676 1.508 1.508 C 81.093 69.724 80.417 70.399 79.585 70.399 z"}),Object(b.jsx)("circle",{className:f.a.circle1,cx:"36.176",cy:"80.946",r:"6.536"}),Object(b.jsx)("circle",{className:f.a.circle2,cx:"69.15599999999999",cy:"80.946",r:"6.536"}),Object(b.jsx)("path",{d:"M 43.198 35.321 c -0.57 0 -1.137 -0.179 -1.621 -0.53 c -0.856 -0.623 -1.277 -1.657 -1.098 -2.7 l 1.379 -8.044 c 0.042 -0.247 -0.039 -0.498 -0.218 -0.673 l -5.845 -5.697 c -0.758 -0.739 -1.025 -1.823 -0.698 -2.83 s 1.181 -1.727 2.228 -1.879 l 8.077 -1.173 c 0.248 -0.036 0.462 -0.191 0.572 -0.416 l 3.613 -7.319 c 0.468 -0.949 1.416 -1.539 2.476 -1.539 c 1.059 0 2.007 0.59 2.475 1.539 l 3.612 7.319 c 0.111 0.224 0.325 0.38 0.573 0.416 l 8.076 1.173 c 1.048 0.152 1.901 0.873 2.228 1.879 c 0.327 1.007 0.06 2.091 -0.698 2.831 l -5.844 5.696 c -0.18 0.175 -0.262 0.427 -0.22 0.674 l 1.38 8.043 c 0.179 1.044 -0.242 2.078 -1.099 2.7 c -0.855 0.622 -1.971 0.702 -2.906 0.21 l -7.225 -3.798 c -0.222 -0.118 -0.486 -0.116 -0.707 0 l -7.225 3.798 C 44.077 35.215 43.636 35.321 43.198 35.321 z"})]})]})},p=m.a.createContext({items:[],amount:0,addNewItem:function(e){},deleteItem:function(e){},clearCart:function(){}}),v=n(4),y=n(5),g=n(8),C=n(13),_=n.n(C),N=(n(38),function(e){var t,n=Object(j.useState)({isNameValid:!0,isStreetValid:!0,isCityValid:!0,isPinValid:!0}),c=Object(s.a)(n,2),a=c[0],r=c[1],i=Object(j.useRef)(""),o=Object(j.useRef)(""),l=Object(j.useRef)(""),d=Object(j.useRef)(""),u=Object(j.useRef)(""),O=Object(j.useState)(!1),h=Object(s.a)(O,2),f=h[0],x=h[1],v=(Object(j.useContext)(p),function(t){t.preventDefault(),e.closeModal(),x(!1)});return f?f&&(t=Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Order Placed!"}),Object(b.jsx)("button",{onClick:v,children:"Close"})]})):t=Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Please provide address details!"}),Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{id:"name",ref:i}),!a.isNameValid&&Object(b.jsx)("p",{children:"Enter a valid Name"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"street",children:"Street"}),Object(b.jsx)("input",{id:"street",ref:o}),!a.isStreetValid&&Object(b.jsx)("p",{children:"Enter a valid Street"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"locality",children:"Locality"}),Object(b.jsx)("input",{id:"locality",ref:l})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"city",children:"City"}),Object(b.jsx)("input",{id:"city",ref:d}),!a.isCityValid&&Object(b.jsx)("p",{children:"Enter a valid City"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"pin-code",children:"Pin Code"}),Object(b.jsx)("input",{id:"pin-code",ref:u}),!a.isPinValid&&Object(b.jsx)("p",{children:"Enter a valid PIN"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(t){t.preventDefault();var n=i.current.value,c=o.current.value,a=l.current.value,s=d.current.value,j=u.current.value;console.log(n,c,s,j),n&&c&&s&&j?n&&c&&s&&j&&(console.log("Order Placed..."),e.confirmOrder({userName:n,street:c,locality:a,city:s,pin:j})):r({isNameValid:n,isStreetValid:c,isCityValid:s,isPinValid:j})},children:"Confirm"}),Object(b.jsx)("button",{onClick:v,children:"Cancel"})]})]})]}),Object(b.jsx)(m.a.Fragment,{children:t})}),k=function(e){var t=Object(j.useState)(""),n=Object(s.a)(t,2),c=n[0],a=n[1],r=Object(j.useState)(!1),i=Object(s.a)(r,2),o=i[0],l=i[1],d=Object(j.useState)(!1),u=Object(s.a)(d,2),O=u[0],h=u[1],f=Object(j.useContext)(p),x=function(e){f.addNewItem(Object(g.a)(Object(g.a)({},e),{},{quantity:1}))},C=function(e){f.deleteItem(e)},k=function(t){t.preventDefault(),console.log("Close modal"),e.closeModal()},I=function(){var e=Object(y.a)(Object(v.a)().mark((function e(t){var n;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://react-http-134bb-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({orderItems:f.items,userDetails:t}),headers:{content:"application/JSON"}});case 3:if(n=e.sent){e.next=7;break}throw console.log("No Response"),new Error("No Response from the server");case 7:if(console.log(n),!n.ok||200!==n.status){e.next=12;break}h(!0),e.next=17;break;case 12:if(!n){e.next=16;break}throw new Error(n.status);case 16:throw new Error("No Response");case 17:e.next=24;break;case 19:e.prev=19,e.t0=e.catch(0),console.error(e.t0),console.log(e.t0.message),a(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}();return console.log(c),c?Object(b.jsxs)(m.a.Fragment,{children:[Object(b.jsx)("span",{children:"Error"}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:c.message})]}):o||0!==f.items.length?o?Object(b.jsx)(m.a.Fragment,{children:Object(b.jsx)(N,{confirmOrder:I,closeModal:e.closeModal})}):O?Object(b.jsxs)(m.a.Fragment,{children:[Object(b.jsx)("span",{children:"Your Order has been placed!"}),Object(b.jsx)("span",{children:"Thanks!!"})]}):Object(b.jsxs)(m.a.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("ul",{className:_.a["unordered-list"],children:f.items.map((function(e){return Object(b.jsxs)("li",{className:_.a["list-item"],children:[Object(b.jsxs)("div",{className:_.a["meal-name"],children:[Object(b.jsx)("span",{children:e.mealName}),Object(b.jsxs)("span",{children:["\u20b9",e.quantity*e.price]})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:["X",e.quantity]})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:x.bind(null,e),children:"+"}),Object(b.jsx)("button",{onClick:C.bind(null,e.mealId),children:"-"})]})]},e.mealId)}))}),Object(b.jsx)("span",{children:"Total Amount: "}),Object(b.jsx)("span",{children:f.amount})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(e){e.preventDefault(),console.log("Confirm your Address..."),l(!0)},children:"Order"}),Object(b.jsx)("button",{onClick:k,children:"Close"})]})]}):Object(b.jsxs)(m.a.Fragment,{children:[Object(b.jsx)("span",{children:"You don't have any items in your cart!"}),Object(b.jsx)("button",{onClick:k,children:"Close"})]})},I=function(e){var t=Object(j.useState)(!1),n=Object(s.a)(t,2),c=n[0],a=n[1],r=Object(j.useContext)(p),o=r.items.reduce((function(e,t){return e+t.quantity}),0),l=(r.items,function(){a(!1)});Object(j.useEffect)((function(){document.addEventListener("keydown",(function(e){"Escape"===e.key&&l()}))}),[]);var d=Object(b.jsx)(O,{closeModal:l,children:Object(b.jsx)(k,{cartCtx:r,closeModal:l})});return Object(b.jsxs)("div",{className:i.a["cart-button"],children:[Object(b.jsx)(x,{}),"Your Cart",Object(b.jsx)("button",{className:i.a.badge,onClick:function(){a(!0)},children:o}),c&&d]})},w=n(21),E=n(22),M=n(11),L=n(27),S=n(26),q=function(e){Object(L.a)(n,e);var t=Object(S.a)(n);function n(e){var c;return Object(w.a)(this,n),(c=t.call(this,e)).state={custName:e.custName},c.handleClick=c.handleClick.bind(Object(M.a)(c)),c}return Object(E.a)(n,[{key:"handleClick",value:function(){console.log("Hello ".concat(this.state.custName))}},{key:"render",value:function(){return Object(b.jsx)("button",{onClick:this.handleClick,children:"Click Me"})}}]),n}(m.a.Component),D=function(e){return Object(b.jsxs)("header",{children:["ReactMeals",Object(b.jsx)(q,{custName:"Sai"}),Object(b.jsx)(I,{})]})},F=n(17),R=n.n(F),V=n(23),P=n.n(V),T=function(){return Object(b.jsxs)("div",{className:P.a["body-description"],children:[Object(b.jsx)("h3",{children:"Delicious Food, Delivered to you"}),Object(b.jsx)("span",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]})},B=n(24),A=n.n(B),J=n(9),H=n.n(J),z=function(e){var t=Object(j.useState)(0),n=Object(s.a)(t,2),c=n[0],a=n[1],r=Object(j.useContext)(p),i=Object(j.useRef)(0);i.current.value;return Object(b.jsxs)("div",{className:H.a.meals,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:e.mealName}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:e.description}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:["\u20b9 ",e.price]})]}),Object(b.jsxs)("form",{className:H.a["input-form"],onSubmit:function(e){e.preventDefault(),console.log("Form Submitted!!")},children:[Object(b.jsx)("label",{for:e.mealName,children:"Quantity"}),Object(b.jsx)("input",{className:H.a["form-quantity"],type:"number",name:e.mealName,min:"0",max:"10",step:"1",value:c,onChange:function(e){a(e.target.value)}}),Object(b.jsx)("input",{className:H.a["form-button"],type:"submit",value:"Add",onClick:function(t){t.preventDefault(),c>0&&(r.addNewItem({mealId:e.mealId,mealName:e.mealName,price:e.price,quantity:+c}),i.current.value=0)}})]})]})},U=n(25),Y=n.n(U),G=function(){var e=Object(j.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(j.useState)([]),r=Object(s.a)(a,2),i=r[0],o=r[1];Object(j.useEffect)((function(){function e(){return(e=Object(y.a)(Object(v.a)().mark((function e(){var t,n,a;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("useEffect Running!!"),e.next=4,fetch("https://react-http-134bb-default-rtdb.firebaseio.com/meals.json",{method:"GET",body:null,headers:{"context-type":"application/json"}});case 4:if(t=e.sent,console.log(t),t.ok){e.next=9;break}throw console.log("Fetch error : Invalid response!"),new Error("Fetch error : Invalid response!");case 9:return e.next=11,t.json();case 11:if(n=e.sent,console.log(n),n&&0!==(null===n||void 0===n?void 0:n.length)){e.next=15;break}throw new Error("No meals found!!");case 15:a=[],Object.keys(n).forEach((function(e){var t=Object(g.a)({mealId:e,mealName:n[e].name},n[e]);delete t.name,a.push(t)})),o(a),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0.message),console.error(e.t0.message),c(e.t0.message);case 25:case"end":return e.stop()}}),e,null,[[0,20]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var l=i.map((function(e){return Object(b.jsx)(z,{mealId:e.mealId,mealName:e.mealName,description:e.description,price:e.price},e.mealId)}));return n?Object(b.jsx)("span",{className:Y.a["message-error"],children:"Fetch Error : ".concat(n)}):n||0!==i.length?!n&&i.length>0?l:void 0:Object(b.jsx)("span",{children:"Loading..."})},X=function(){return Object(b.jsx)("div",{className:A.a["meals-container"],children:Object(b.jsx)(G,{})})},Q=function(){return Object(b.jsxs)("div",{className:R.a["body-class"],children:[Object(b.jsx)("img",{className:R.a["background-image"],src:"https://www.foodiesfeed.com/wp-content/uploads/2021/02/breakfast-and-berries.jpg",alt:"Background"}),Object(b.jsx)(T,{}),Object(b.jsx)(X,{})]})},W=n(18),Z={items:[],amount:0},K=function(e,t){var n,c;switch(t.type){case"ADD":n=Object(W.a)(e.items);var a=e.items.findIndex((function(e){return e.mealName===t.item.mealName}));return a<0?(n.push({mealId:t.item.mealId,mealName:t.item.mealName,price:t.item.price,quantity:t.item.quantity}),c=e.amount+t.item.quantity*t.item.price):(n[a].quantity+=t.item.quantity,c=e.amount+t.item.quantity*t.item.price),{items:n,amount:c};case"DELETE":var s,r,i=(n=Object(W.a)(e.items)).findIndex((function(e){return e.mealId===t.id}));if(i<0)return;return 0===(c=e.amount-n[i].price)?{items:[],amount:0}:1===(null===(s=n[i])||void 0===s?void 0:s.quantity)?(n.splice(i,1),{items:n,amount:c}):(null===(r=n[i])||void 0===r?void 0:r.quantity)>1?(n[i].quantity-=1,{items:n,amount:c}):{items:n,amount:c};default:return{items:[],amount:0}}},$=function(e){var t=Object(j.useReducer)(K,Z),n=Object(s.a)(t,2),c=n[0],a=n[1],r={items:c.items,amount:c.amount,addNewItem:function(e){a({type:"ADD",item:e})},deleteItem:function(e){a({type:"DELETE",id:e})},clearCart:function(){a({type:"CLEARALL"})}};return Object(b.jsx)(p.Provider,{value:r,children:e.children})};var ee=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)($,{children:[Object(b.jsx)(D,{}),Object(b.jsx)(Q,{})]})})};a.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(ee,{}))}],[[39,1,2]]]);
//# sourceMappingURL=main.4aa98f75.chunk.js.map