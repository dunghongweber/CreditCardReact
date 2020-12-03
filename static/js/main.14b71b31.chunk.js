(this["webpackJsonpcard-mamange"]=this["webpackJsonpcard-mamange"]||[]).push([[0],{36:function(e,a,t){e.exports=t(66)},41:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(31),l=t.n(c),i=(t(41),t(7)),s=t(8),d=t(10),o=t(9),m=function(){return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper indigo darken-1"},r.a.createElement("a",{href:"/",className:"brand-logo center"},"Cards Management"),r.a.createElement("ul",{id:"nav-mobile",className:"right"},r.a.createElement("li",null,r.a.createElement("a",{href:"/add"},"Add Card"))))))},u=t(35),h=t(14),p=function(e){var a=e.cardsList,t=(e.deleteCard,a.map((function(e){return r.a.createElement("div",{className:"myCard row",key:e._id},r.a.createElement("div",{className:"col m4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},r.a.createElement("img",{src:e.picture,alt:"card-pic",className:"activator"})),r.a.createElement("div",{className:"card-reveal"},r.a.createElement("span",{className:"card-title blue-text text-lighten-2"},e.name,r.a.createElement("i",{className:"material-icons right"},"close")),r.a.createElement("p",null,e.benefit),r.a.createElement(h.b,{to:"/"+e._id,className:"waves-effect waves-light btn blue"},r.a.createElement("i",{className:"material-icons right"},"credit_card"),"Detail")))))})));return t?r.a.createElement("div",{className:"cardList"},t):r.a.createElement("div",{className:"center"},r.a.createElement("p",null,"Loading...."))},v=t(11),f=t.n(v),E=function(e){Object(d.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={cards:[]},e.addCard=function(a){var t=1;e.state.cards.forEach((function(e){e.id>=t&&(console.log(e.id),t=e.id+1)})),a.id=t;var n=[].concat(Object(u.a)(e.state.cards),[a]);e.setState({cards:n})},e.deleteCard=function(a){var t=e.state.cards.filter((function(e){return e.id!==a}));e.setState({cards:t})},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://dh-react-card.herokuapp.com/all-cards").then((function(a){console.log(a),e.setState({cards:a.data})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Home container row"},r.a.createElement(p,{cardsList:this.state.cards,deleteCard:this.deleteCard}))}}]),t}(n.Component),b=t(33),g=t(34),N=t.n(g),C=function(e){Object(d.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={id:null,name:null,benefit:null,picture:null,issuer:null},e.handleChange=function(a){e.setState(Object(b.a)({},a.target.id,a.target.value))},e.handleSubmit=function(a){a.preventDefault(),f()({method:"POST",url:"https://dh-react-card.herokuapp.com/new",data:N.a.stringify({benefit:e.state.benefit.toUpperCase(),issuer:e.state.issuer.toUpperCase(),name:e.state.name.toUpperCase(),picture:e.state.picture}),headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}})},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"AddCard container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"picture"},"Card Picture URL:"),r.a.createElement("input",{type:"text",id:"picture",className:"validate",required:!0,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"name"},"Card Name:"),r.a.createElement("input",{type:"text",id:"name",className:"validate",required:!0,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"issuer"},"Card Issuer:"),r.a.createElement("input",{type:"text",id:"issuer",className:"validate",required:!0,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"benefit"},"Card Benefit:"),r.a.createElement("input",{type:"text",id:"benefit",className:"validate",required:!0,onChange:this.handleChange}),r.a.createElement("button",{className:"btn waves-effect waves-light blue",type:"submit",name:"action"},"Add Card",r.a.createElement("i",{className:"material-icons right"},"add"))))}}]),t}(n.Component),w=function(e){Object(d.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={id:null,card:null},e.handleDelete=function(){var a=e.state.card._id;f.a.delete("https://dh-react-card.herokuapp.com/delete/"+a)},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.card_id;console.log(a),f.a.get("https://dh-react-card.herokuapp.com/detail/"+a).then((function(t){console.log(t),e.setState({card:t.data,id:a})})),this.setState({})}},{key:"render",value:function(){var e=this.state.card?r.a.createElement("div",{className:"carddetails container"},r.a.createElement("h5",{className:"center"},this.state.card.name),r.a.createElement("div",{className:"center"},"by: ",this.state.card.issuer),r.a.createElement("p",null,r.a.createElement("strong",null,"BENEFITS:")," ",r.a.createElement("br",null)," ",this.state.card.benefit),r.a.createElement("a",{href:"#!",className:"waves-effect waves-light btn red",onClick:this.handleDelete},r.a.createElement("i",{className:"material-icons left"},"delete"),"Delete")):r.a.createElement("div",{className:"center"},"Error, cannot fetch card data");return r.a.createElement("div",{className:"container"},e)}}]),t}(n.Component),y=t(1),O=function(e){Object(d.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/",component:E}),r.a.createElement(y.a,{path:"/add",component:C}),r.a.createElement(y.a,{path:"/:card_id",component:w}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.14b71b31.chunk.js.map