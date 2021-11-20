(this.webpackJsonptextapp=this.webpackJsonptextapp||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-journal-text mx-3",viewBox:"0 0 16 16",style:{backgroundColor:"dark"===e.mode?"#1c1b1b":"white",color:"dark"===e.mode?"white":"#060038"},children:Object(o.jsx)("path",{"fill-rule":"evenodd",d:"M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"})}),Object(o.jsx)("a",{className:"navbar-brand",href:"/#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active text-primary","aria-current":"page",href:"/# ",children:"Home"})})}),Object(o.jsxs)("form",{className:"d-flex",children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}),Object(o.jsxs)("div",{className:"form-check form-switch mx-3 text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enabled DarkMode"})]})]})]})})})}function h(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h1",{className:"mb-4",children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=n.toUpperCase();r(t),e.showAlert("Converted to uppercase!","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=n.toLowerCase();r(t),e.showAlert("Converted to lowercase!","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){r(""),e.showAlert("Text Cleared!","success")},children:"Clear Text"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){navigator.clipboard.writeText(n),e.showAlert("Copied to Clipboard!","success")},children:"Copy Text"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=n.split(/[ ]+/);r(t.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h2",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[n.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(/\s+/).filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Nothing to preview!"})]})]})}i.defaultProps={title:"Set title here",aboutText:"About"};var d=function(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})};var b=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),b=s[0],m=s[1],j=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"Text Apps",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#060038",j("Dark mode has been enabled","Success"),document.title="Text App - Dark Mode"):(n("light"),document.body.style.backgroundColor="white",j("Light mode has been enabled","Success"),document.title="Text App - Light Mode")}}),Object(o.jsx)(d,{alert:b}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(h,{showAlert:j,heading:"Enter The Text To Analyze Below:-",mode:a})})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),m()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.0a1258c2.chunk.js.map