!function(e){function t(t){for(var a,i,l=t[0],s=t[1],c=t[2],m=0,p=[];m<l.length;m++)i=l[m],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(u&&u(t);p.length;)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={4:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;r.push([38,0]),n()}({3:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),o=n.n(a);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return i(this,t),s(this,c(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){return o.a.createElement("div",{className:"ui mini test modal transition"},o.a.createElement("div",{className:"header"}," Delete ",this.props.title," "),o.a.createElement("div",{className:"content"},o.a.createElement("p",null,"Are you sure you want to delete  ",this.props.content?o.a.createElement("span",{className:"ui label"},this.props.content):o.a.createElement("span",null,"this ",this.props.title),"?")),o.a.createElement("div",{className:"actions"},o.a.createElement("div",{className:"ui basic positive button",tabIndex:"0"},"No"),o.a.createElement("div",{className:"ui negative right labeled icon button",onClick:this.props.onYes,tabIndex:"0"},"Yes",o.a.createElement("i",{className:"trash icon"}))))}}])&&l(n.prototype,a),r&&l(n,r),t}(o.a.Component)},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),i=n.n(r);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return s(this,t),u(this,m(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this;return o.a.createElement("table",{className:"ui celled table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Title"),o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Actions"))),o.a.createElement("tbody",null,this.props.items.map((function(t){return o.a.createElement("tr",{key:t.id},o.a.createElement("td",{"data-label":"Title"},t.title),o.a.createElement("td",{"data-label":"Description"},t.description),o.a.createElement("td",{"data-label":"Actions",className:"right collapsing aligned"},o.a.createElement("button",{className:"ui vertical primary basic animated mini button",onClick:e.props.onEdit.bind(e,t)},o.a.createElement("span",{className:"hidden content"},"Edit"),o.a.createElement("div",{className:"visible content"},o.a.createElement("i",{className:"pencil alternate icon"}))),o.a.createElement("button",{className:"ui vertical negative basic animated mini button",onClick:e.props.onDelete.bind(e,t)},o.a.createElement("div",{className:"hidden content"},"Delete"),o.a.createElement("div",{className:"visible content"},o.a.createElement("i",{className:"trash alternate icon"})))))}))))}}])&&c(n.prototype,a),r&&c(n,r),t}(o.a.Component),d=n(3),b=n(1),y=n.n(b);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,E(t).call(this,e))).loadItems=function(){n.setState({loading:!0}),y.a.get(n.source.api).then((function(e){n.setState({loading:!1,items:e.data})})).catch((function(e){n.setState({loading:!1,message:{bad:!0,content:"Unable to reach the server"}})}))},n.onSubmit=function(e){e.preventDefault(),n.setState({loading:!0});var t=null==n.state.editingItem?"post":"put";null!==n.state.editingItem&&n.state.editingItem.id;y()({method:t,url:n.source.api,data:n.state.stage}).then((function(e){n.setState({displayForm:!1,stage:n.emptyStage,message:{bad:!1,content:"Item saved successfully"}}),n.loadItems()})).catch((function(e){n.setState({loading:!1,message:{bad:!0,content:e.response.data}})}))},n.onAddNew=function(e){n.setState({displayForm:!0,stage:n.emptyStage,editingItem:null,message:null})},n.onCancel=function(e){n.setState({displayForm:!1,message:null})},n.onChange=function(e){var t=n.state.stage;t[e.target.name]=e.target.value,n.setState({stage:t,message:null})},n.onEdit=function(e){var t=Object.assign({},e);n.setState({displayForm:!0,stage:t,editingItem:e,message:null})},n.onDelete=function(e){n.onCancel(),n.deleteItem=e,$(".mini.modal").modal("show")},n.onConfirmDelete=function(){n.setState({loading:!0}),y.a.delete(n.source.api+"/"+n.deleteItem.id).then((function(e){return n.loadItems()})).catch((function(e){n.setState({loading:!1,message:{bad:!0,content:e.response.data}})}))},n.emptyStage={title:"",description:""},n.state={displayForm:!1,items:[],stage:n.emptyStage,editingItem:null,message:null},n.source=n.props.source,n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){this.loadItems()}},{key:"render",value:function(){var e=this.state.displayForm;return o.a.createElement("div",{className:"name-form-container"},o.a.createElement("button",{onClick:this.onAddNew,className:"ui positive basic button "+(e?"hid":"")},o.a.createElement("i",{className:"plus icon"})," Add new"),o.a.createElement("div",{className:this.state.loading?"ui active centered inline loader":""}),o.a.createElement("form",{className:e?"ui form scale-in-ver-top":"ui form hid",method:"post",onSubmit:this.onSubmit},o.a.createElement("div",{className:"field"},o.a.createElement("label",null,"Title"),o.a.createElement("input",{type:"text",name:"title",value:this.state.stage.title,onChange:this.onChange,maxLength:"200",placeholder:"Stage name"})),o.a.createElement("div",{className:"field"},o.a.createElement("label",null,"Description"),o.a.createElement("input",{type:"text",name:"description",value:this.state.stage.description,onChange:this.onChange,maxLength:"200",placeholder:"Description"})),o.a.createElement("button",{className:"ui positive basic button "+(this.state.loading?"disabled":""),type:"submit"},o.a.createElement("i",{className:"save icon"}),"Save"),o.a.createElement("button",{className:"ui secondary basic button",type:"button",onClick:this.onCancel},o.a.createElement("i",{className:"close icon"}),"Cancel")),null!==this.state.message?o.a.createElement("div",{className:"ui message transition "+(this.state.message.bad?"negative":"positive")},o.a.createElement("div",{className:"header"},this.state.message.title),o.a.createElement("p",null,this.state.message.content)):o.a.createElement("div",null),o.a.createElement(f,{items:this.state.items,onEdit:this.onEdit,onDelete:this.onDelete}),o.a.createElement(d.a,{onYes:this.onConfirmDelete,title:"stage",content:this.deleteItem&&this.deleteItem.title}))}}])&&g(n.prototype,a),r&&g(n,r),t}(o.a.Component),w=(t.default=O,document.querySelector("#stage-form"));i.a.render(o.a.createElement(O,{source:{api:"/api/stage"}}),w)}});