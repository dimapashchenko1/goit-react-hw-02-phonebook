(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"Form_form__2XhSn",label:"Form_label__1f7AB",btn:"Form_btn__2QNqP",input:"Form_input__1EpR-"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),s=n.n(r),i=(n(19),n(14)),o=n(3),l=n(4),u=n(6),b=n(5),m=n(7),d=n.n(m),h=n(0);function j(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)("ul",{className:d.a.list,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(h.jsxs)("li",{className:d.a.listItem,children:["".concat(e,": ").concat(a),Object(h.jsx)("button",{className:d.a.btn,type:"button",onClick:function(){return n(c)},children:"delete"})]},c)}))})}var p=n(23),f=n(13),O=n(2),C=n.n(O),v=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:C.a.form,onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{className:C.a.label,children:["Name",Object(h.jsx)("input",{type:"text",name:"name",placeholder:"Steve Jobs",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:this.state.name,className:C.a.input})]}),Object(h.jsxs)("label",{className:C.a.label,children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",placeholder:"+38(0XX)-XXX-XX-XX",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:this.state.number,className:C.a.input})]}),Object(h.jsx)("button",{className:C.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),_=n(9),x=n.n(_);function g(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{className:x.a.label,children:["Filter",Object(h.jsx)("input",{className:x.a.input,type:"text",name:"name",placeholder:"Enter contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:n})]})}var N=n(10),A=n.n(N),S=(n(11),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:Object(p.a)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(p.a)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(p.a)(),name:"Eden Clements",number:"645-17-79"},{id:Object(p.a)(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.name===n})))alert(" \u041a\u043e\u043d\u0442\u0430\u043a\u0442 ".concat(n," \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"));else{var c={name:n,number:a,id:Object(p.a)()};t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[c])}}))}},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:A.a,children:"Phonebook"}),Object(h.jsx)(v,{onSubmit:this.addContact}),Object(h.jsx)("h2",{className:A.a,children:"Contacts"}),Object(h.jsx)(g,{value:t,onChange:this.changeFilter}),Object(h.jsx)(j,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component));s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={list:"ContactList_list__3XQoZ",listItem:"ContactList_listItem__3cMNG",btn:"ContactList_btn__3r2q1"}},9:function(t,e,n){t.exports={label:"Filter_label__15e1X",input:"Filter_input__1oQln"}}},[[21,1,2]]]);
//# sourceMappingURL=main.012decd3.chunk.js.map