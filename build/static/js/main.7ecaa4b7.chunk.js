(this.webpackJsonpweb_page=this.webpackJsonpweb_page||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(28)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){var a={"./1.jpg":17,"./10.jpg":18,"./2.jpg":19,"./3.jpg":20,"./4.jpg":21,"./5.jpg":22,"./6.jpg":23,"./7.jpg":24,"./8.jpg":25,"./9.jpg":26};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=16},function(e,t,n){e.exports=n.p+"static/media/1.8a072618.jpg"},function(e,t,n){e.exports=n.p+"static/media/10.11c822d5.jpg"},function(e,t,n){e.exports=n.p+"static/media/2.97daba23.jpg"},function(e,t,n){e.exports=n.p+"static/media/3.d1784713.jpg"},function(e,t,n){e.exports=n.p+"static/media/4.81caf4b3.jpg"},function(e,t,n){e.exports=n.p+"static/media/5.aa76a2af.jpg"},function(e,t,n){e.exports=n.p+"static/media/6.b95ed1ff.jpg"},function(e,t,n){e.exports=n.p+"static/media/7.e3ddb8b0.jpg"},function(e,t,n){e.exports=n.p+"static/media/8.b826d505.jpg"},function(e,t,n){e.exports=n.p+"static/media/9.a6f9aa3a.jpg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),i=(n(12),n(3)),s=n(4),u=n(6),p=n(5),l=(n(13),n(14),n(15),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{src:n(16)("./".concat(e.house.id,".jpg")),alt:"Houses",width:"192",height:"93.2"}),o.a.createElement("h2",null," ",e.house.name," "),o.a.createElement("h3",null," ",e.house.price," "))}),d=function(e){return o.a.createElement("div",{className:"card-list"},e.houses.map((function(e){return o.a.createElement(l,{key:e.id,house:e})})))},h=(n(27),function(e){var t=e.placeholder,n=e.handleChange;return o.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={houses:[],searchField:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/karenhernandeze/Casas/db").then((function(e){return e.json()})).then((function(t){return e.setState({houses:t.housesdb})}))}},{key:"render",value:function(){var e=this.state,t=e.houses,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null," EH ASESORES INMOBILIARIOS "),o.a.createElement(h,{placeholder:"Busca un inmueble",handleChange:this.handleChange}),o.a.createElement(d,{houses:a}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.7ecaa4b7.chunk.js.map