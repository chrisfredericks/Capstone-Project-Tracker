!function(e){function t(t){for(var o,i,c=t[0],l=t[1],s=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(u&&u(t);f.length;)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={1:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;r.push([24,0]),n()}({2:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(0),a=n.n(o);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return i(this,t),l(this,s(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return a.a.createElement("div",{className:"ui mini delete modal transition"},a.a.createElement("div",{className:"header"}," Delete ",this.props.title," "),a.a.createElement("div",{className:"content"},a.a.createElement("p",null,"Are you sure you want to delete  ",this.props.content?a.a.createElement("span",{className:"ui label"},this.props.content):a.a.createElement("span",null,"this ",this.props.title),"?")),a.a.createElement("div",{className:"actions"},a.a.createElement("div",{className:"ui basic positive button",tabIndex:"0"},"No"),a.a.createElement("div",{className:"ui negative right labeled icon button",onClick:this.props.onYes,tabIndex:"0"},"Yes",a.a.createElement("i",{className:"trash icon"}))))}}])&&c(n.prototype,o),r&&c(n,r),t}(a.a.Component)},24:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),i=n.n(r);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return l(this,t),u(this,p(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this;return a.a.createElement("table",{className:"ui celled table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Stage"),a.a.createElement("th",null,"Description"),a.a.createElement("th",null,"Actions"))),a.a.createElement("tbody",null,this.props.items.map((function(t){return a.a.createElement("tr",{key:t.id},a.a.createElement("td",{"data-label":"Stage"},t.stage&&t.stage.title+" - "+t.stage.description||t.stageId),a.a.createElement("td",{"data-label":"Description"},t.description),a.a.createElement("td",{"data-label":"Actions",className:"right collapsing aligned"},a.a.createElement("button",{className:"ui vertical primary basic animated mini button",onClick:e.props.onEdit.bind(e,t)},a.a.createElement("span",{className:"hidden content"},"Edit"),a.a.createElement("div",{className:"visible content"},a.a.createElement("i",{className:"pencil alternate icon"}))),a.a.createElement("button",{className:"ui vertical negative basic animated mini button",onClick:e.props.onDelete.bind(e,t)},a.a.createElement("div",{className:"hidden content"},"Delete"),a.a.createElement("div",{className:"visible content"},a.a.createElement("i",{className:"trash alternate icon"})))))}))))}}])&&s(n.prototype,o),r&&s(n,r),t}(a.a.Component),d=n(2),b=n(7);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,g(t).call(this,e))).loadItems=function(){n.setState({loading:!0}),axios.get(S.checkpoints.api).then((function(e){n.setState({loading:!1,items:e.data})}))},n.loadDropdown=function(){axios.get(S.stages.api).then((function(e){var t=e.data.map((function(e){return{id:e.id,name:e.title+" - "+e.description}}));n.setState({stages:t})}))},n.validate=function(){var e={};return!Number(n.state.checkpoint.stageId)>0&&(e.name="Required field"),n.setState({errors:e}),!e.name},n.onSubmit=function(e){if(e.preventDefault(),n.validate()){n.setState({loading:!0});var t=null==n.state.editingItem?"post":"put";null!==n.state.editingItem&&n.state.editingItem.id;n.state.checkpoint.stage=null,axios({method:t,url:S.checkpoints.api,data:n.state.checkpoint}).then((function(e){n.setState({displayForm:!1,checkpoint:n.emptyEntity(),message:{bad:!1,content:"Item saved successfully"}}),n.loadItems()})).catch((function(e){n.setState({loading:!1,message:{bad:!0,content:e.response.data}})}))}},n.onAddNew=function(e){n.setState({errors:{},displayForm:!0,checkpoint:n.emptyEntity(),editingItem:null,message:null})},n.onCancel=function(e){n.setState({displayForm:!1,message:null})},n.onChange=function(e){var t=n.state.checkpoint;t[e.target.name]=e.target.value,n.setState({checkpoint:t,message:null})},n.onEdit=function(e){var t=Object.assign({},e);n.setState({errors:{},displayForm:!0,checkpoint:t,editingItem:e,message:null})},n.onDelete=function(e){n.onCancel(),n.deleteItem=e,$(".mini.modal").modal("show")},n.onConfirmDelete=function(){n.setState({loading:!0}),axios.delete(S.checkpoints.api+"/"+n.deleteItem.id).then((function(e){return n.loadItems()})).catch((function(e){n.setState({loading:!1,message:{bad:!0,content:e.response.data}})}))},n.state={displayForm:!1,items:[],checkpoint:n.emptyEntity(),editingItem:null,message:null,stages:[],errors:{}},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),n=t,(o=[{key:"emptyEntity",value:function(){return{description:"",stageId:""}}},{key:"componentDidMount",value:function(){this.loadItems(),this.loadDropdown()}},{key:"render",value:function(){var e=this.state.displayForm;return a.a.createElement("div",{className:"name-form-container"},a.a.createElement("button",{onClick:this.onAddNew,className:"ui positive basic button "+(e?"hid":"")},a.a.createElement("i",{className:"plus icon"})," Add new"),a.a.createElement("div",{className:this.state.loading?"ui active centered inline loader":""}),a.a.createElement("form",{className:e?"ui form scale-in-ver-top":"ui form hid",method:"post",onSubmit:this.onSubmit},a.a.createElement("div",{className:"field"+(this.state.errors.name?" error ":"")},a.a.createElement("label",null,"Stage"),a.a.createElement(b.a,{value:this.state.checkpoint.stageId,name:"stageId",placeholder:"Select stage...",data:this.state.stages,onChange:this.onChange})),a.a.createElement("div",{className:"field"},a.a.createElement("label",null,"Description"),a.a.createElement("input",{type:"text",name:"description",required:"required",value:this.state.checkpoint.description,onChange:this.onChange,maxLength:"200",placeholder:"Descripion"})),a.a.createElement("button",{className:"ui positive basic button "+(this.state.loading?"disabled":""),type:"submit"},a.a.createElement("i",{className:"save icon"}),"Save"),a.a.createElement("button",{className:"ui secondary basic button",type:"button",onClick:this.onCancel},a.a.createElement("i",{className:"close icon"}),"Cancel")),null!==this.state.message?a.a.createElement("div",{className:"ui message transition "+(this.state.message.bad?"negative":"positive")},a.a.createElement("div",{className:"header"},this.state.message.title),a.a.createElement("p",null,this.state.message.content)):a.a.createElement("div",null),a.a.createElement(m,{items:this.state.items,onEdit:this.onEdit,onDelete:this.onDelete}),a.a.createElement(d.a,{onYes:this.onConfirmDelete,title:"checkpoint",content:this.deleteItem&&this.deleteItem.description}))}}])&&h(n.prototype,o),r&&h(n,r),t}(a.a.Component),S={checkpoints:{api:"/api/checkpoint"},stages:{api:"/api/stage"}},w=(t.default=O,document.querySelector("#checkpoint-form"));i.a.render(a.a.createElement(O,{}),w)},7:function(e,t,n){"use strict";var o=n(0),a=n.n(o);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return i(this,t),l(this,s(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.data,n=e.value;return a.a.createElement("select",{required:"required",className:"ui search dropdown",onChange:this.props.onChange,name:this.props.name,value:n},a.a.createElement("option",null,this.props.placeholder),t.map((function(e){return a.a.createElement("option",{key:e.id,value:e.id},e.name)})))}}])&&c(n.prototype,o),r&&c(n,r),t}(a.a.Component);t.a=p}});