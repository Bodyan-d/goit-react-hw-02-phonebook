(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),o=n.n(r),i=(n(14),n(7)),s=n(3),l=n(5),b=n(6),u=n(9),m=n(8),h=n(20),d=(n(15),n(16),n(0));function j(e){var t=e.name,n=e.number,a=e.handleChange,c=e.handleSubmit;return Object(d.jsxs)("form",{className:"phonebook-form",onSubmit:c,children:[Object(d.jsxs)("label",{className:"phonebook-label",children:["Name",Object(d.jsx)("input",{className:"phonebook-input",onChange:a,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(d.jsxs)("label",{className:"phonebook-label",children:["Number",Object(d.jsx)("input",{className:"phonebook-input",onChange:a,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(d.jsx)("button",{className:"submt-form",type:"submit",children:"Submit"})]})}function p(e){var t=e.filter,n=e.handleFilter;return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Find contacts by name"}),Object(d.jsx)("input",{className:"search",onChange:n,type:"text",name:"filter",value:t})]})}function O(e){var t=e.contacts;e.filter;return Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)("li",{className:"",children:"".concat(e.name,": ").concat(e.number)},e.id)}))})}var f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:Object(h.a)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(h.a)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(h.a)(),name:"Eden Clements",number:"645-17-79"},{id:Object(h.a)(),name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},e.handleChange=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.setState((function(e){return console.log(e),{contacts:[].concat(Object(i.a)(e.contacts),[{id:Object(h.a)(),name:[e.name],number:[e.number]}])}}))},e.handleFilter=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value));var n=e.state,a=n.filter,c=n.contacts;console.log(c.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.filter,c=e.contacts;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(j,{name:t,number:n,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(p,{filter:a,handleFilter:this.handleFilter}),Object(d.jsx)(O,{contacts:c,filter:a})]})}}]),n}(a.Component);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ac6d2165.chunk.js.map