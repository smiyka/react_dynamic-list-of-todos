(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(8),l=c(2),d=c(1),i=(c(13),c(14),c(6)),r=c.n(i),o=c(0),j=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(o.jsx)("td",{className:"is-vcentered",children:Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}):Object(o.jsx)("td",{className:"is-vcentered"}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:r()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:r()("far",{"fa-eye":!c,"fa-eye-slash":c&&c.id===e.id})})})})})]},e.id)}))})]})},b=function(e){var t=e.query,c=e.setQuery,s=e.filter,a=e.setFilter;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){a(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},u=(c(16),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m,O=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(d.useState)(null),a=Object(l.a)(s,2),n=a[0],i=a[1];return Object(d.useEffect)((function(){var e;(e=Number(null===t||void 0===t?void 0:t.userId),h("/users/".concat(e))).then(i)}),[t]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),n&&t?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:n.email,children:n.name})]})]})]}):Object(o.jsx)(u,{})]})};!function(e){e.all="all",e.active="active",e.completed="completed"}(m||(m={}));var x=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)(null),i=Object(l.a)(a,2),r=i[0],x=i[1],f=Object(d.useState)(""),p=Object(l.a)(f,2),v=p[0],N=p[1],y=Object(d.useState)(m.all),g=Object(l.a)(y,2),S=g[0],k=g[1],T=Object(d.useState)(!1),w=Object(l.a)(T,2),C=w[0],_=w[1];Object(d.useEffect)((function(){_(!0),h("/todos").then(s).finally((function(){_(!1)}))}),[]);var E=Object(n.a)(c);return v&&(E=c.filter((function(e){var t=e.title.toLowerCase(),c=v.toLowerCase().trim();return t.includes(c)}))),E=Object(d.useMemo)((function(){return E.filter((function(e){switch(S){case m.all:return!0;case m.active:return!e.completed;case m.completed:return e.completed;default:return!0}}))}),[S,E,v]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(b,{query:v,setQuery:N,filter:S,setFilter:k})}),Object(o.jsx)("div",{className:"block",children:C?Object(o.jsx)(u,{}):c.length>0&&Object(o.jsx)(j,{todos:E,selectedTodo:r,setSelectedTodo:x})})]})})}),r&&Object(o.jsx)(O,{selectedTodo:r,setSelectedTodo:x})]})};a.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.868787ce.chunk.js.map