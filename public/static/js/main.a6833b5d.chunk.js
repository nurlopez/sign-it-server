(this["webpackJsonpreact-auth-client-done-v2"]=this["webpackJsonpreact-auth-client-done-v2"]||[]).push([[0],{20:function(e,n,t){e.exports=t.p+"static/media/resourcesLib.8c6f564c.svg"},21:function(e,n,t){e.exports=t.p+"static/media/lock_open.25b6320a.svg"},43:function(e,n,t){e.exports=t.p+"static/media/account_circle.86b0eb97.svg"},44:function(e,n,t){e.exports=t.p+"static/media/remove_circle.3b5b0bf9.svg"},45:function(e,n,t){e.exports=t.p+"static/media/person_add.06f400dc.svg"},46:function(e,n,t){e.exports=t.p+"static/media/home.519e2598.svg"},47:function(e,n,t){e.exports=t.p+"static/media/user1.2fd4a5b2.svg"},48:function(e,n,t){e.exports=t.p+"static/media/logo-sign-it.c52035c3.gif"},49:function(e,n,t){e.exports=t.p+"static/media/abc.62acc279.svg"},50:function(e,n,t){e.exports=t.p+"static/media/face.57d53a43.svg"},51:function(e,n,t){e.exports=t.p+"static/media/directions_car.4a78d499.svg"},52:function(e,n,t){e.exports=t.p+"static/media/add_photo.61bdefdb.svg"},53:function(e,n,t){e.exports=t.p+"static/media/build.fe14567d.svg"},54:function(e,n,t){e.exports=t.p+"static/media/trash.16acadd7.svg"},55:function(e,n,t){e.exports=t.p+"static/media/view.32581278.svg"},58:function(e,n,t){e.exports=t(84)},84:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(38),o=t.n(i),c=t(1),l=t(2),s=t(4),u=t(3),m=t(5),g=t(15),p=t(7),d=t(8);function h(){var e=Object(p.a)(["\nbackground:#F9F8F4\nmin-height: 100vh;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-content: center;\ntext-align:center;\nmargin: -10px;\n\n@import url('https://fonts.googleapis.com/css?family=Solway&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\nh1 {\n  font-family: 'Solway', serif;\n}\nh2 {\n  font-family: 'Solway'; \n  font-size: 20px;\n}\np {\n  font-family: 'Open Sans', sans-serif;\n}\n"]);return h=function(){return e},e}function f(){var e=Object(p.a)(['\nborder: none;\nbackground: transparent;\n\ninput {\n  border: none;\n  border-radius: 5px;\n  background: #69D2E7;\n  color: white;\n  font-size: 16px;\n  padding: 10px\n}\nvalue {\n  font-size: 20px;\n  font-style: bold;\n  font-family: "Solway", serif; \n}\np {\n  font-size: 12px;\n  margin-top: 20px;\n}\na {\n  font-size: 16px;\n  font-family: "Solway", serif; \n  text-decoration: none;\n  color: #F38630;\n}\n']);return f=function(){return e},e}function b(){var e=Object(p.a)(['\n@import url("https://fonts.googleapis.com/css?family=Solway&display=swap");\n\nheight: 100vh;\ndisplay: flex;\nflex-direction: column;\njustify-content: flex-start;\nalign-items: center;\ntext-align:center;\nbackground-color: #F9F8F4;\nlabel {\n  font-family: "Solway", serif; \n  > value {\n  font-size: 25px;\n  font-family: "Solway", serif; \n}\n}\ninput {\n  background: transparent;\n  border: none;\n  border-bottom: solid 1px ;\n  margin-top: 20px;\n  font-family: "Solway", serif; \n}\np {\n  font-size: 12px;\n  font-family: "Solway", serif; \n}\n']);return b=function(){return e},e}function E(){var e=Object(p.a)(["\nheight: 100vh;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\ntext-align:center;\n\narticle {\nbackground: white;\nborder: solid 1px white;\nborder-radius: 10px;\nbox-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\ntransition: 0.3s;\npadding: 50px 25px;\n}\n"]);return E=function(){return e},e}function v(){var e=Object(p.a)(["\nborder: none;\nbackground: transparent;\ncolor: white;\n"]);return v=function(){return e},e}function y(){var e=Object(p.a)(["\ndisplay: flex;\nflex-direction: row;\njustify-items: center;\nalign-items: center;\nbackground: transparent;\nborder: solid 1px #F38630 ;\nborder-radius: 3px;\ncolor: #F38630;\nmargin: 0 1em;\npadding: 0.25em 1em;\n",""]);return y=function(){return e},e}function O(){var e=Object(p.a)(['\n  @import url("https://fonts.googleapis.com/css?family=Solway&display=swap");\n  background-color: #F9F8F4;\n  margin-top: -20px;\n  padding: 20px 0px;\n  }\n  p {\n    font-family: "Solway", serif;\n  }\n  .signup-btns {\n    height: 30px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    text-align: center;\n    margin: 20px 0px;\n   }\n']);return O=function(){return e},e}var j=d.b.div(O()),w=d.b.button(y(),(function(e){return e.primary&&Object(d.a)(v())})),S=d.b.div(E()),x=d.b.div(b()),C=d.b.button(f()),k=d.b.div(h()),L=t(14),R=t(6),F=t(18),U=t.n(F),M=new(function(){function e(){Object(c.a)(this,e),this.auth=U.a.create({baseURL:"https://sign-it-app.herokuapp.com/auth",withCredentials:!0})}return Object(l.a)(e,[{key:"signup",value:function(e){var n=e.username,t=e.password;return this.auth.post("/signup",{username:n,password:t}).then((function(e){return e.data}))}},{key:"login",value:function(e){var n=e.username,t=e.password;return this.auth.post("/login",{username:n,password:t}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/logout",{}).then((function(e){return e.data}))}},{key:"profile",value:function(){return this.auth.get("/profile").then((function(e){return e.data}))}}]),e}()),_=r.a.createContext(),D=_.Consumer,G=_.Provider,A=function(e){return function(n){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){var n=this;return r.a.createElement(D,null,(function(t){var a=t.login,i=t.signup,o=t.user,c=t.logout,l=t.isLoggedin,s=t.isLoading;return r.a.createElement(e,Object.assign({login:a,signup:i,user:o,logout:c,isLoggedin:l,isLoading:s},n.props))}))}}]),t}(r.a.Component)},z=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={isLoggedin:!1,user:null,isLoading:!0},t.signup=function(e){var n=e.username,a=e.password;M.signup({username:n,password:a}).then((function(e){return t.setState({isLoggedin:!0,user:e})})).catch((function(e){return console.log(e)}))},t.login=function(e){var n=e.username,a=e.password;M.login({username:n,password:a}).then((function(e){return console.log("y esto?",e),t.setState({isLoggedin:!0,user:e})})).catch((function(e){return console.log(e)}))},t.logout=function(){M.logout().then((function(){return t.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;M.profile().then((function(n){return e.setState({isLoggedin:!0,user:n,isLoading:!1})})).catch((function(n){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,n=e.isLoading,t=e.isLoggedin,a=e.user,i=this.login,o=this.logout,c=this.signup;return r.a.createElement(G,{value:{isLoading:n,isLoggedin:t,user:a,login:i,logout:o,signup:c}},this.props.children)}}]),n}(r.a.Component);function B(){var e=Object(p.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-content: center;\ntext-align:center;\n\n"]);return B=function(){return e},e}function I(){var e=Object(p.a)(["\ninput{\n  border: solid 1px red ;\n}\n\n"]);return I=function(){return e},e}function P(){var e=Object(p.a)(['\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\ntext-align:center;\nword-wrap: break-word;\npadding: 10px;\nbackground: white;\nborder: solid 1px white;\nborder-radius: 5px;\nmargin: 10px 10px;\nbox-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\ntransition: 0.3s;\nimg  {\n  border-radius: 5px;\n}\np {\n  font-size: 16px;\n  font-family: "Solway", serif;  \n}\n']);return P=function(){return e},e}function H(){var e=Object(p.a)(["\nbackground-color: #F9F8F4;\nheight-min: 100vh;\n"]);return H=function(){return e},e}function N(){var e=Object(p.a)(["\ndisplay: flex;\nflex-direction: row;\nflex-wrap: wrap;\njustify-content: center;\nalign-items: flex-start;\ntext-align:center;\nwidth-max: 100vw;\nbackground-color: #F9F8F4;\n"]);return N=function(){return e},e}function J(){var e=Object(p.a)(["\n\n  }\n"]);return J=function(){return e},e}function T(){var e=Object(p.a)(["\nbackground-color: transparent;\nmargin-top:-20px;\npadding: 5px 0px;\ndisplay: flex;\nwidth: 250px;\nflex-direction: row;\njustify-content: space-between;\nalign-items: center;\ntext-align:center;\na {\n  text-decoration: none;\n}\n"]);return T=function(){return e},e}function V(){var e=Object(p.a)(["\nbackground: transparent;\nmargin-top:-20px;\npadding: 5px 0px;\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\ntext-align:center;\na {\n  text-decoration: none;\n}\n"]);return V=function(){return e},e}function q(){var e=Object(p.a)(["\nborder: none;\nbackground: none;\n"]);return q=function(){return e},e}function K(){var e=Object(p.a)(["\nborder: none;\nbackground: #EF835F;\ncolor: white;\n"]);return K=function(){return e},e}function Q(){var e=Object(p.a)(["\nborder: none;\nbackground: #F38630;\ncolor: white;\n"]);return Q=function(){return e},e}function W(){var e=Object(p.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-items: center;\nalign-items: center;\ntext-align: center;\nbackground: #69D2E7;\nfont-size: 16px;\nborder: solid 1px #69D2E7 ;\nborder-radius: 3px;\ncolor: white;\nmargin: 1em 1em;\npadding: 0.25em 1em;\na  {\n    text-decoration: none;\n    color: white;\n  }\n","\n",""]);return W=function(){return e},e}var X=d.b.button(W(),(function(e){return e.primary&&Object(d.a)(Q())}),(function(e){return e.secondary&&Object(d.a)(K())})),Y=d.b.button(q()),Z=d.b.div(V()),$=d.b.div(T()),ee=(d.b.div(J()),d.b.div(N())),ne=d.b.div(H()),te=d.b.div(P()),ae=(d.b.div(I()),d.b.div(B())),re=t(20),ie=t.n(re),oe=t(21),ce=t.n(oe),le=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Z,null,r.a.createElement(R.b,{to:"/resources"},r.a.createElement(X,null,r.a.createElement("img",{src:ie.a,alt:"user",width:"50"}),"Resources")),r.a.createElement("br",null),r.a.createElement(R.b,{to:"/mysigns"},r.a.createElement(X,{secondary:!0},r.a.createElement("img",{src:ce.a,alt:"user",width:"50"}),"My Signs"))),r.a.createElement("p",null,r.a.createElement("b",null," . . .")))}}]),n}(a.Component),se=t(43),ue=t.n(se),me=t(44),ge=t.n(me),pe=t(45),de=t.n(pe),he=t(46),fe=t.n(he),be=t(47),Ee=t.n(be),ve=A(function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.user,t=e.logout,a=e.isLoggedin;return r.a.createElement("div",null,r.a.createElement(j,null,a?r.a.createElement("div",{className:"signup-btns"},r.a.createElement(w,{primary:!0,onClick:"/"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:fe.a,alt:"user",width:"45"})," ")),r.a.createElement("p",null," ",r.a.createElement("img",{src:Ee.a,alt:"user",width:"50"})," Hi  ",n.username,"! "),r.a.createElement(w,{primary:!0,onClick:t},r.a.createElement("img",{src:ge.a,alt:"user",width:"50"}))):r.a.createElement("div",{className:"signup-btns"},r.a.createElement(R.b,{to:"/login"},r.a.createElement(w,{primary:!0},r.a.createElement("img",{src:ue.a,alt:"user",width:"50"}))),r.a.createElement("br",null),r.a.createElement(R.b,{to:"/signup"},r.a.createElement(w,{primary:!0},r.a.createElement("img",{src:de.a,alt:"user",width:"45"}))))),r.a.createElement(le,null))}}]),n}(a.Component)),ye=A(function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={username:"",password:""},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.username,r=n.password;t.props.signup({username:a,password:r})},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(L.a)({},a,r))},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.state,n=e.username,t=e.password;return r.a.createElement("div",null,r.a.createElement(ve,null),r.a.createElement(x,null,r.a.createElement("h1",null,"Sign Up"),r.a.createElement(ae,null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:n,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:t,onChange:this.handleChange})),r.a.createElement(C,null,r.a.createElement("input",{type:"submit",value:"Signup"})))),r.a.createElement(C,null,r.a.createElement("p",null,"\xb7 \xb7 \xb7"),r.a.createElement("p",null,"Already have account?"),r.a.createElement(R.b,{to:"/login"}," Login"))))}}]),n}(a.Component)),Oe=A(function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={username:"",password:""},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.username,r=n.password;t.props.login({username:a,password:r})},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(L.a)({},a,r))},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.state,n=e.username,t=e.password;return r.a.createElement("div",null,r.a.createElement(ve,null),r.a.createElement(x,null,r.a.createElement("h1",null,"Login"),r.a.createElement(ae,null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",name:"username",value:n,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Password: "),r.a.createElement("input",{type:"password",name:"password",value:t,onChange:this.handleChange})),r.a.createElement(C,null,r.a.createElement("input",{type:"submit",value:"Login"})))),r.a.createElement(C,null,r.a.createElement("p",null,"\xb7 \xb7 \xb7"),r.a.createElement("p",null,"Don't have an account?"),r.a.createElement(R.b,{to:"/signup"},"Signup"))))}}]),n}(a.Component)),je=t(48),we=t.n(je),Se=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Z,null,r.a.createElement(R.b,{to:"/resources"},r.a.createElement(X,null,r.a.createElement("img",{src:ie.a,alt:"user",width:"50"}),"Resources")),r.a.createElement("br",null),r.a.createElement(R.b,{to:"/mysigns"}," ",r.a.createElement(X,{primary:!0},r.a.createElement("img",{src:ce.a,alt:"user",width:"50"}),"My Signs"))))}}]),n}(a.Component),xe=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(S,null,r.a.createElement("article",null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:we.a,alt:"logo",width:"200px",align:"middle"})),r.a.createElement("h1",null,"SIGN IT"),r.a.createElement(Se,null)))}}]),n}(a.Component),Ce=t(22);var ke=A((function(e){var n=e.component,t=e.isLoggedin,a=e.isLoading,i=Object(Ce.a)(e,["component","isLoggedin","isLoading"]);return a?r.a.createElement("h1",null,"Loading"):r.a.createElement(g.b,Object.assign({},i,{render:function(e){return t?r.a.createElement(g.a,{to:"/mysigns"}):r.a.createElement(n,e)}}))}));var Le=A((function(e){var n=e.component,t=e.isLoggedin,a=e.isLoading,i=Object(Ce.a)(e,["component","isLoggedin","isLoading"]);return a?r.a.createElement("h1",null,"Loading"):r.a.createElement(g.b,Object.assign({},i,{render:function(e){return t?r.a.createElement(n,e):r.a.createElement(g.a,{to:"/login"})}}))})),Re=t(49),Fe=t.n(Re),Ue=t(50),Me=t.n(Ue),_e=t(51),De=t.n(_e),Ge=function(e){return r.a.createElement(Z,null,r.a.createElement(X,{primary:!0,onClick:function(){e.handleResults("letters")}},r.a.createElement(R.b,{to:"/resources/categories/letters"},r.a.createElement("img",{src:Fe.a,alt:"user",width:"50"}),"Letters")),r.a.createElement(X,{primary:!0,onClick:function(){e.handleResults("greetings")}},r.a.createElement(R.b,{to:"/resources/categories/greetings"},r.a.createElement("img",{src:Me.a,alt:"user",width:"50"}),"Greetings")),r.a.createElement(X,{primary:!0,onClick:function(){e.handleResults("transport")}},r.a.createElement(R.b,{to:"/resources/categories/transport"},r.a.createElement("img",{src:De.a,alt:"user",width:"50"}),"Transport")))},Ae=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(ee,null,0===this.props.resources.length?r.a.createElement("p",null,"  "):this.props.resources.map((function(e){return console.log("here?",e),r.a.createElement(te,{key:e._id},r.a.createElement("img",{src:e.imgURL,alt:"sign for ".concat(e.meaning),width:"250px"}),r.a.createElement("p",null,e.meaning)," ")})))}}]),n}(a.Component),ze=new function e(){var n=this;Object(c.a)(this,e),this.getAllResources=function(e){return n.resource.get("/categories/".concat(e)).then((function(e){return console.log("services-2",e.data),e.data}))},this.resource=U.a.create({baseURL:"https://sign-it-app.herokuapp.com/resources",withCredentials:!0})},Be=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={listOfResources:[]},t.getResourceHandler=function(e){ze.getAllResources(e).then((function(e){console.log(e),t.setState({listOfResources:e}),console.log("uola",e)})).catch((function(e){return console.log(e)}))},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ve,null),r.a.createElement(x,null,r.a.createElement("h2",null,"Resources"),r.a.createElement(Ge,{handleResults:this.getResourceHandler}),r.a.createElement(Ae,{resources:this.state.listOfResources})))}}]),n}(a.Component),Ie=new(function(){function e(){var n=this;Object(c.a)(this,e),this.getOneMySign=function(e){return n.mySign.get("/".concat(e)).then((function(e){return e.data}))},this.updateMySign=function(e){var t=e.imgURL,a=e.meaning,r=e.pictoURL,i=e._id;return n.mySign.put("/".concat(i,"/edit"),{imgURL:t,meaning:a,pictoURL:r,_id:i}).then((function(e){return e.data}))},this.deleteMySign=function(e){return n.mySign.delete("/".concat(e,"/remove")).then((function(e){return e.data}))},this.mySign=U.a.create({baseURL:"https://sign-it-app.herokuapp.com/mysigns",withCredentials:!0})}return Object(l.a)(e,[{key:"imageUpload",value:function(e){return console.log(e),this.mySign.post("/create-sign/image",e).then((function(e){var n=e.data;return console.log("service-image",n),n}))}},{key:"createSign",value:function(e){return this.mySign.post("/create-sign",e).then((function(e){return e.data}))}},{key:"allMySigns",value:function(){return this.mySign.get("/").then((function(e){return e.data}))}}]),e}()),Pe=t(52),He=t.n(Pe),Ne=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.imageURL,r=n.meaning,i=n.pictoURL,o=t.props.author;Ie.createSign({imageURL:a,meaning:r,pictoURL:i,author:o}).then((function(e){console.log("es una signcard?",e),t.toggleForm()})).catch((function(e){return console.log(e)}))},t.toggleForm=function(){return t.setState({isFormShowing:!t.state.isFormShowing,isButtonShowing:!t.state.isButtonShowing})},t.fileChange=function(e){var n=e.target.files[0],a=new FormData;a.append("photo",n),Ie.imageUpload(a).then((function(e){t.setState({imageURL:e})})).catch((function(e){return console.log(e)}))},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(L.a)({},a,r))},t.state={imageURL:"",meaning:"",pictoURL:"",isFormShowing:!1,isButtonShowing:!0},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.isButtonShowing?r.a.createElement("div",null,r.a.createElement(X,{secondary:!0,onClick:this.toggleForm},r.a.createElement("img",{src:He.a,alt:"user",width:"100"}),"Add sign")):null,this.state.isFormShowing?r.a.createElement("div",null,r.a.createElement(x,null,r.a.createElement(ae,null,r.a.createElement("input",{type:"file",placeholder:"ImageURL",name:"imageURL",onChange:function(n){return e.fileChange(n)}}),r.a.createElement("input",{name:"meaning",placeholder:"Meaning",value:this.state.meaning,onChange:function(n){return e.handleChange(n)}}),r.a.createElement("br",null),r.a.createElement(X,{onClick:this.handleFormSubmit},"Submit")))):null)}}]),n}(a.Component),Je=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).handleEditSubmit=function(e){e.preventDefault();var n=t.state,a=n.imgURL,r=n.meaning,i=n.pictoURL,o=n._id;Ie.updateMySign({imgURL:a,meaning:r,pictoURL:i,_id:o}).then((function(){t.props.toggleEditForm(),t.props.handleGetSignCards()})).catch((function(e){return console.log(e)}))},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(L.a)({},a,r))},t.fileChange=function(e){var n=e.target.files[0];console.log("es un archivo?",n);var a=new FormData;a.append("photo",n),Ie.imageUpload(a).then((function(e){console.log("es una imagen?",e),t.setState({imgURL:e})})).catch((function(e){return console.log(e)}))},t.state={imgURL:"",meaning:"",pictoURL:"",_id:""},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.sign,n=e.imgURL,t=e.meaning,a=e._id;this.setState({imgURL:n,meaning:t,_id:a})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("img",{src:this.state.imgURL,alt:"sign for ".concat(this.state.meaning),width:"100px"}),r.a.createElement("input",{type:"file",placeholder:"ImageURL",name:"imageURL",onChange:function(n){return e.fileChange(n)}}),r.a.createElement("input",{name:"meaning",placeholder:"Meaning",value:this.state.meaning,onChange:function(n){return e.handleChange(n)}}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleEditSubmit},"Update")))}}]),n}(a.Component),Te=Object(g.g)(Je),Ve=t(53),qe=t.n(Ve),Ke=t(54),Qe=t.n(Ke),We=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).handleRemoveMySign=function(){Ie.deleteMySign(t.props.sign._id).then((function(){t.props.handleGetSignCards()})).catch((function(e){return console.log(e)}))},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.sign;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:e.imgURL,alt:"sign for ".concat(e.meaning),width:"250px"}),r.a.createElement("p",null,e.meaning),r.a.createElement($,null,r.a.createElement(Y,{onClick:this.props.toggleEditForm},r.a.createElement("img",{src:qe.a,alt:"edit2",width:"40"})),r.a.createElement(Y,{onClick:this.handleRemoveMySign},r.a.createElement("img",{src:Qe.a,alt:"delete",width:"30"}))))}}]),n}(a.Component),Xe=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={sign:null,isEditMySignCardShowing:!1,isMySignContentShowing:!0},t.toggleEditForm=function(){return t.setState({isMySignContentShowing:!t.state.isMySignContentShowing,isEditMySignCardShowing:!t.state.isEditMySignCardShowing})},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({sign:this.props.sign})}},{key:"componentDidUpdate",value:function(e){e.sign.meaning!==this.props.sign.meaning&&this.setState({sign:this.props.sign}),console.log("prevProps hi",e),console.log("Props hi",this.props)}},{key:"render",value:function(){return r.a.createElement(ne,null,r.a.createElement(te,null,this.state.isMySignContentShowing&&this.state.sign?r.a.createElement(We,{sign:this.state.sign,toggleEditForm:this.toggleEditForm,handleGetSignCards:this.props.handleGetSignCards}):null,this.state.isEditMySignCardShowing?r.a.createElement(Te,{sign:this.state.sign,handleGetSignCards:this.props.handleGetSignCards,toggleEditForm:this.toggleEditForm}):null))}}]),n}(a.Component),Ye=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(ee,null,0===this.props.mySigns.length?r.a.createElement("p",null,"  "):this.props.mySigns.map((function(n){return r.a.createElement(Xe,{sign:n,handleGetSignCards:e.props.handleGetSignCards})})))}}]),n}(a.Component),Ze=t(55),$e=t.n(Ze),en=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).handleGetSignCards=function(){Ie.allMySigns().then((function(e){console.log("es una signcard?",e),t.setState({listOfMySigns:e})})).catch((function(e){return console.log(e)}))},t.state={listOfMySigns:[]},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return console.log(this.state),r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{onClick:this.handleGetSignCards},r.a.createElement("img",{src:$e.a,alt:"user",width:"45"}),"View Sign Cards"),r.a.createElement(ee,null,r.a.createElement(Ye,{mySigns:this.state.listOfMySigns,handleGetSignCards:this.handleGetSignCards})))}}]),n}(a.Component),nn=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={listOfMySigns:[]},t.getMySignHandler=function(e){Ie.getAllSigns().then((function(e){console.log(e),t.setState({listOfMySigns:e}),console.log("all my signs?",e)})).catch((function(e){return console.log(e)}))},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ve,null),r.a.createElement(x,null,r.a.createElement("h2",null,"My Signs"),r.a.createElement("div",null,r.a.createElement(Ne,null)),r.a.createElement("h1",null,"..."),r.a.createElement("h2",null,"My Collection"),r.a.createElement(en,{mySigns:this.state.listOfMySigns})))}}]),n}(a.Component),tn=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null,r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",component:xe}),r.a.createElement(ke,{exact:!0,path:"/signup",component:ye}),r.a.createElement(ke,{exact:!0,path:"/login",component:Oe}),r.a.createElement(g.b,{path:"/resources",component:Be}),r.a.createElement(g.b,{exact:!0,path:"/resources/categories/:category",component:Ae}),r.a.createElement(Le,{exact:!0,path:"/mysigns",component:nn}))))}}]),n}(a.Component);o.a.render(r.a.createElement(R.a,null,r.a.createElement(z,null,r.a.createElement(tn,null))),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.a6833b5d.chunk.js.map