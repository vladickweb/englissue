(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{149:function(e,t,a){},181:function(e,t,a){},201:function(e,t){},203:function(e,t){},227:function(e,t,a){},229:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(21),r=a.n(c),i=(a(149),a(8)),o=a(13),l=a(16),u=a(15),d=(a(150),a(19)),h=a(26),j=a.n(h),b=function e(){var t=this;Object(i.a)(this,e),this.signup=function(e,a){return t.instance.post("/signup",{email:e,pwd:a})},this.login=function(e,a){return t.instance.post("/login",{email:e,pwd:a})},this.google=function(e){return t.instance.post("/google",{data:e})},this.logout=function(){return t.instance.get("/logout")},this.isloggedin=function(){return t.instance.post("/isloggedin")},this.instance=j.a.create({baseURL:"".concat("https://englissue.herokuapp.com","/api/auth"),withCredentials:!0})},m=a(1),p=new b;function O(e){var t,a=null===(t=e.loggedUser)||void 0===t?void 0:t.balance;return Object(m.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark px-4",children:[Object(m.jsx)(d.b,{to:"/",className:"navbar-brand",href:"#",children:"Englissue"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(m.jsxs)("ul",{className:"navbar-nav",children:[e.loggedUser?Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("span",{className:"nav-link",onClick:function(){p.logout().then((function(t){return e.storeUser(null)})).catch((function(e){return console.log(e)}))},children:"Logout"})}):Object(m.jsxs)("div",{className:"d-flex",children:[Object(m.jsx)("li",{className:"nav-item active",children:Object(m.jsx)(d.b,{to:"/iniciar-sesion",className:"nav-link",href:"#",children:"Iniciar Sesi\xf3n"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(d.b,{to:"/registro",className:"nav-link",href:"#",children:"Registrarse"})})]}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(d.b,{to:"/salas-chat",className:"nav-link",children:"Salas de chat"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(d.b,{to:"/mis-mensajes",className:"nav-link",href:"#",children:"Mis mensajes"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(d.b,{to:"/videochat",className:"nav-link",href:"#",children:"Videochat"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(d.b,{to:"/profesores",className:"nav-link",href:"#",children:"Profesores"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(d.b,{to:"/mis-clases",className:"nav-link",href:"#",children:"Mis Clases"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(d.b,{to:"/gente-cerca",className:"nav-link",href:"#",children:"Englissuers"})})]})}),Object(m.jsx)("div",{className:" ml-auto",children:e.loggedUser&&Object(m.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsxs)(d.b,{to:"/recargar-cuenta",className:"nav-link",href:"#",children:["Balance: ",a/100,"\u20ac"]})})})})]})}var g=a(4),f=a(22),v=function e(){var t=this;Object(i.a)(this,e),this.getChatrooms=function(){return t.instance.get("/")},this.getOneChatroom=function(e){return t.instance.get("/".concat(e))},this.instance=j.a.create({baseURL:"".concat("https://englissue.herokuapp.com","/api/chatrooms"),withCredentials:!0})},x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).refreshChatrooms=function(){e.chatroomService.getChatrooms().then((function(t){e.setState(Object(g.a)(Object(g.a)({},e.state),{},{chatrooms:t.data}))})).catch((function(e){return console.error(e)}))},e.displayChatRooms=function(){return e.state.chatrooms.map((function(e){return console.log(e),Object(m.jsx)(d.b,{to:"/salas-chat/".concat(e._id),children:Object(m.jsx)("h1",{children:e.title})},e._id)}))},e.state={chatrooms:null},e.chatroomService=new v,e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.refreshChatrooms()}},{key:"render",value:function(){return this.state.chatrooms?Object(m.jsx)("div",{children:this.displayChatRooms()}):Object(m.jsx)("h3",{children:"Loading..."})}}]),a}(n.Component),y=a(20),N=a(38),S=function e(){var t=this;Object(i.a)(this,e),this.createMessage=function(e){return t.instance.post("/".concat(e.id),e)},this.checkNewMessages=function(e){return t.instance.get("/".concat(e))},this.instance=j.a.create({baseURL:"".concat("https://englissue.herokuapp.com","/api/chatmessages"),withCredentials:!0})},C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).refreshMessages=function(){var e=n.props.match.params.id;console.log(e,"wooooooooooooooooooooooooooow"),n.chatroomService.getOneChatroom(e).then((function(e){var t=e.data.messages.map((function(e){return{email:e.name.email,body:e.body}}));n.setState(Object(g.a)(Object(g.a)({},n.state),{},{messages:Object(N.a)(t)}))})).catch((function(e){return console.log(e)}))},n.displayMessages=function(){return n.state.messages.map((function(e,t){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:e.email}),Object(m.jsx)("h2",{children:e.body})]},t)}))},n.handleChange=function(e){var t=e.target,a=t.value,s=t.name;n.setState(Object(g.a)(Object(g.a)({},n.state),{},Object(y.a)({},s,a)))},n.handleSubmit=function(e){e.preventDefault(),console.log("he entrado");var t=n.state.body,a=n.props.match.params.id;n.chatMessageService.createMessage({body:t,id:a}).then((function(){n.refreshMessages(),n.setState(Object(g.a)(Object(g.a)({},n.state),{},{body:""}))})).catch((function(e){return console.log(e)}))},n.handleCheckMessages=function(){n.interval=setInterval((function(){var e=n.props.match.params.id;n.chatMessageService.checkNewMessages(e).then((function(e){console.log(e),n.state.numberOfMessages!==e.data.numberOfMessagesFromDB&&n.setState(Object(g.a)(Object(g.a)({},n.state),{},{numberOfMessages:e.data.numberOfMessagesFromDB}),n.refreshMessages())})).catch((function(e){return console.log(e)}))}),1e3)},n.interval="",n.state={numberOfMessages:"0",users:null,messages:[{email:"",body:""}],body:""},n.chatroomService=new v,n.chatMessageService=new S,n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.refreshMessages(),this.handleCheckMessages()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this;return this.state.messages?Object(m.jsxs)("div",{children:[this.displayMessages(),Object(m.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(m.jsx)("input",{onChange:this.handleChange,type:"text",name:"body"}),Object(m.jsx)("button",{type:"submit",children:"enviar"})]})]}):Object(m.jsx)("div",{children:"loading"})}}]),a}(n.Component),k=function e(){var t=this;Object(i.a)(this,e),this.uploadImg=function(e){return t.instance.post("/image",e)},this.instance=j.a.create({baseURL:"".concat("https://englissue.herokuapp.com","/api/uploads"),withCredentials:!0})},w=function e(){var t=this;Object(i.a)(this,e),this.completeProfile=function(e){return t.instance.put("/complete-profile",{data:e})},this.getSingleUser=function(e){return t.instance.get("/".concat(e))},this.updateUser=function(e){return t.instance.put("/update",{data:e})},this.getMyClasses=function(){return t.instance.get("/my-classes")},this.getMyGroups=function(e){return t.instance.post("/my-groups",{data:e})},this.getPeople=function(){return t.instance.get("/people")},this.instance=j.a.create({baseURL:"".concat("https://englissue.herokuapp.com","/api/user"),withCredentials:!0})},U=a(77),M=a(129);a(181);function D(e){var t=Object(M.usePlacesWidget)({apiKey:"AIzaSyAY0CZ_05iEDMVKHjmcrTKjijo59PPAhQs",onPlaceSelected:function(t){var a=t.address_components[0].long_name,n=t.address_components[3].long_name;e.handleChangeDirection(a,n)}}).ref;return Object(m.jsx)("div",{children:Object(m.jsxs)(U.a.Group,{children:[Object(m.jsx)(U.a.Label,{style:{color:"black"},children:"Selecciona tu ubicaci\xf3n"}),Object(m.jsx)(U.a.Control,{style:{zIndex:99999},type:"text",ref:t})]})})}var L=a(49),I=a.n(L),_=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={latitude:"",longitude:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){var a=t.coords.latitude,n=t.coords.longitude;console.log(a),console.log(n),e.changeState(a,n)}))}},{key:"changeState",value:function(e,t){this.setState({latitude:e,longitude:t},this.geolocation(e,t))}},{key:"geolocation",value:function(e,t){var a=this;I.a.setApiKey("AIzaSyAY0CZ_05iEDMVKHjmcrTKjijo59PPAhQs"),I.a.setLanguage("es"),I.a.setRegion("es"),I.a.setLocationType("ROOFTOP"),I.a.enableDebug(),I.a.fromLatLng(e,t).then((function(e){for(var t,n,s=0;s<e.results[0].address_components.length;s++)for(var c=0;c<e.results[0].address_components[s].types.length;c++)switch(e.results[0].address_components[s].types[c]){case"locality":t=e.results[0].address_components[s].long_name;break;case"country":n=e.results[0].address_components[s].long_name}console.log(t,n,a.props),a.props.handleChangeDirection(t,n)}),(function(e){console.error(e)}))}},{key:"render",value:function(){return Object(m.jsx)("div",{})}}]),a}(n.Component),P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={name:"",iban:"",image:"",rol:"",city:"",country:"",price:0,description:"",isLoading:!1,showManualDirection:!1},e.uploadService=new k,e.userService=new w,e.handleChange=function(t){var a=t.target,n=a.value,s=a.name;e.setState(Object(g.a)(Object(g.a)({},e.state),{},Object(y.a)({},s,n)))},e.handleChangeDirection=function(t,a){e.setState(Object(g.a)(Object(g.a)({},e.state),{},{city:t,country:a}))},e.handleFile=function(t){e.setState(Object(g.a)(Object(g.a)({},e.state),{},{isLoading:!0}));var a=new FormData;a.append("imageData",t.target.files[0]),e.uploadService.uploadImg(a).then((function(t){e.setState(Object(g.a)(Object(g.a)({},e.state),{},{isLoading:!1,image:t.data.cloudinary_url}))})).catch((function(e){return alert("Error, esto lo hac\xe9is vosotros.")}))},e.handleSubmitTeacher=function(t){t.preventDefault(),e.state.country&&e.state.city?e.userService.completeProfile({name:e.state.name,rol:"teacher",city:e.state.city,country:e.state.country,image:e.state.image,iban:e.state.iban,price:e.state.price,description:e.state.description}).then((function(){e.setState({name:"",iban:"",image:"",rol:"",city:"",country:"",price:0,description:"",isLoading:!1,showManualDirection:!1}),document.querySelector("#ProfesionalsModal").classList.remove("show")})).catch((function(e){return console.log(e)})):(alert("No hemos podido detectar tu ubicaci\xf3n, por favor introduce tu ciudad."),e.setState(Object(g.a)(Object(g.a)({},e.state),{},{showManualDirection:!0}),console.log(e.state)))},e.handleSubmitStudent=function(t){t.preventDefault(),e.state.country&&e.state.city?e.userService.completeProfile({name:e.state.name,rol:"student",city:e.state.city,country:e.state.country,image:e.state.image}).then((function(){e.setState({name:"",iban:"",image:"",rol:"",city:"",country:"",isLoading:!1,showManualDirection:!1}),document.querySelector("#studentModal").classList.remove("show")})).catch((function(e){return console.log(e)})):(alert("No hemos podido detectar tu ubicaci\xf3n, por favor introduce tu ciudad."),e.setState(Object(g.a)(Object(g.a)({},e.state),{},{showManualDirection:!0}),console.log(e.state)))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row justify-content-center",children:[Object(m.jsx)("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#ProfesionalsModal",children:"Profesor"}),Object(m.jsx)("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#studentModal",children:"Estudiante"}),Object(m.jsx)(_,{handleChangeDirection:this.handleChangeDirection}),Object(m.jsx)("div",{className:"modal fade",id:"ProfesionalsModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(m.jsx)("div",{className:"modal-dialog",role:"document",children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsx)("div",{className:"modal-header",children:Object(m.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Datos Profesor"})}),Object(m.jsx)("div",{className:"modal-body",children:Object(m.jsxs)("form",{onSubmit:this.handleSubmitTeacher,children:[Object(m.jsx)("div",{className:"form-group",children:Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"Imagen de perfil"}),Object(m.jsx)("input",{onChange:function(t){return e.handleFile(t)},type:"file",className:"form-control",id:"image","aria-describedby":"emailHelp",name:"image",required:!0})]})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"Nombre completo"}),Object(m.jsx)("input",{onChange:function(t){return e.handleChange(t)},type:"text",className:"form-control",id:"name",name:"name",required:!0})]})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"IBAN"}),Object(m.jsx)("input",{onChange:function(t){return e.handleChange(t)},type:"text",className:"form-control",id:"iban",name:"iban",required:!0})]})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"Precio por sesi\xf3n"}),Object(m.jsx)("input",{onChange:function(t){return e.handleChange(t)},type:"number",className:"form-control",id:"price",name:"price",required:!0})]})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"Descripci\xf3n"}),Object(m.jsx)("textarea",{name:"description",className:"form-control",id:"description",rows:"3",onChange:function(t){return e.handleChange(t)}})]})}),this.state.showManualDirection&&Object(m.jsx)(D,{handleChangeDirection:this.handleChangeDirection}),Object(m.jsx)("hr",{className:"mb-4"}),this.state.isLoading&&Object(m.jsx)("h1",{children:"LOADING"}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Enviar"})]})})]})})}),Object(m.jsx)("div",{className:"modal fade",id:"studentModal",tabIndex:"-1",role:"dialog","aria-labelledby":"ModalLabel","aria-hidden":"true",children:Object(m.jsx)("div",{className:"modal-dialog",role:"document",children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsx)("div",{className:"modal-header",children:Object(m.jsx)("h5",{className:"modal-title",id:"ModalLabel",children:"Datos alumno"})}),Object(m.jsx)("div",{className:"modal-body",children:Object(m.jsxs)("form",{onSubmit:function(t){return e.handleSubmitStudent(t)},children:[Object(m.jsx)("div",{className:"form-group",children:Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"Imagen de perfil"}),Object(m.jsx)("input",{onChange:function(t){return e.handleFile(t)},type:"file",className:"form-control",name:"image",required:!0})]})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsxs)("label",{children:[Object(m.jsx)("p",{children:"Nombre completo"}),Object(m.jsx)("input",{onChange:function(t){return e.handleChange(t)},type:"text",className:"form-control",id:"name",name:"name",required:!0})]})}),this.state.showManualDirection&&Object(m.jsx)(D,{handleChangeDirection:this.handleChangeDirection}),this.state.isLoading&&Object(m.jsx)("h1",{children:"LOADING"}),Object(m.jsx)("hr",{className:"mb-4"}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Enviar"})]})})]})})})]})})}}]),a}(n.Component);function G(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"hola soy la home page"})})}var E=a(259),T=a(268),R=a(131),A=a.n(R),B=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).responseGoogle=function(e){n.authService.google(e.profileObj).then((function(e){n.props.storeUser(e.data),"unknown"===e.data.rol?n.props.history.push("/completar-perfil"):n.props.history.push("/")})).catch((function(e){return console.log(e)}))},n.authService=new b,n}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)(A.a,{clientId:"833518947705-arv7r2146m63ge01db6en2a775r1u7vv.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"})})}}]),a}(n.Component),F=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleInput=function(e){var t=e.target,a=t.name,s=t.value;n.setState(Object(y.a)({},a,s))},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.email,s=t.pwd;n.authService.login(a,s).then((function(e){n.props.storeUser(e.data),"unknown"===e.data.rol?n.props.history.push("/completar-perfil"):n.props.history.push("/")})).catch((function(e){return console.log(e)}))},n.state={email:"",pwd:""},n.authService=new b,n}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)(E.a,{children:[Object(m.jsxs)(U.a,{onSubmit:this.handleFormSubmit,children:[Object(m.jsxs)(U.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(m.jsx)(U.a.Label,{children:"Email"}),Object(m.jsx)(U.a.Control,{name:"email",value:this.state.email,onChange:this.handleInput,type:"email",placeholder:"Enter email"})]}),Object(m.jsxs)(U.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(m.jsx)(U.a.Label,{children:"Password"}),Object(m.jsx)(U.a.Control,{name:"pwd",value:this.state.pwd,onChange:this.handleInput,type:"password",placeholder:"Password"})]}),Object(m.jsx)(T.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(m.jsx)(B,Object(g.a)({storeUser:this.props.storeUser},this.props))]})}}]),a}(n.Component),V=a(260),q=function e(){var t=this;Object(i.a)(this,e),this.createGroup=function(e){return t.instance.post("/create",{data:e})},this.createMessage=function(e){return t.instance.post("/message",{data:e})},this.getMyGroups=function(){return t.instance.get("/get-my-groups")},this.instance=j.a.create({baseURL:"".concat("https://englissue.herokuapp.com","/api/messages"),withCredentials:!0})},z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).refreshGroups=function(){n.messageService.getMyGroups().then((function(e){n.setState(Object(g.a)(Object(g.a)({},n.state),{},{groups:e.data.groups}))})).catch((function(e){return console.log(e)}))},n.displayGroups=function(){return n.state.groups.map((function(e){var t=[];t.push(e.users[0]._id),t.push(e.users[1]._id),console.log(t);var a=n.props.loggedUser._id,s=t.filter((function(e){return e!==a}));return console.log(s),Object(m.jsx)("div",{children:Object(m.jsx)(d.b,{to:"/mis-mensajes/".concat(s[0]),children:Object(m.jsxs)("h1",{children:[e.users[0].name," && ",e.users[1].name]})})})}))},n.state={groups:null},n.messageService=new q,n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.refreshGroups()}},{key:"render",value:function(){return this.state.groups?Object(m.jsx)("div",{children:Object(m.jsx)(V.a,{className:"mt-4",children:this.displayGroups()})}):Object(m.jsx)("h3",{children:"Loading..."})}}]),a}(n.Component),K=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).displayMessages=function(){return n.state.messages.map((function(e){return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("h1",{children:e.name.name}),Object(m.jsx)("h3",{children:e.body})]},e._id)}))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.body,s=t.idGroup,c=n.props.loggedUser._id,r=document.querySelector("#form");n.messagesService.createMessage({body:a,_id:c,idGroup:s}).then((function(){n.checkIfExistsGroup(),n.setState(Object(g.a)(Object(g.a)({},n.state),{},{body:""}),r.reset())})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){var t=e.target,a=t.value,s=t.name;n.setState(Object(g.a)(Object(g.a)({},n.state),{},Object(y.a)({},s,a)))},n.state={idGroup:null,messages:null,body:null},n.userService=new w,n.messagesService=new q,n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.checkIfExistsGroup()}},{key:"checkIfExistsGroup",value:function(){var e,t=this,a=this.props.match.params.id,n=null===(e=this.props.loggedUser)||void 0===e?void 0:e._id;this.userService.getMyGroups({id:a,_id:n}).then((function(e){console.log(e,"data"),0===e.data.group.length?t.createMessageGroup():t.setState(Object(g.a)(Object(g.a)({},t.state),{},{messages:e.data.group[0].messages,idGroup:e.data.group[0]._id}))})).catch((function(e){console.log("holaaaaaaaaaaaaaaaaaaaaa"),console.log(e)}))}},{key:"createMessageGroup",value:function(){var e=this,t=this.props.match.params.id,a=this.props.loggedUser._id;this.messagesService.createGroup({id:t,_id:a}).then((function(){e.checkIfExistsGroup()})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[this.state.messages?this.displayMessages():console.log("no hay mensajes"),Object(m.jsxs)("form",{id:"form",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(m.jsx)("input",{onChange:this.handleChange,type:"text",name:"body"}),Object(m.jsx)("button",{type:"submit",children:"enviar"})]})]})}}]),a}(n.Component),W=a(261),J=a(130),Y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,s=t.value;n.setState(Object(g.a)(Object(g.a)({},n.state),{},Object(y.a)({},a,s)))},n.state={classes:null,searchValue:""},n.userService=new w,n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.userService.getMyClasses().then((function(t){var a=t.data.filteredArr;e.setState(Object(g.a)(Object(g.a)({},e.state),{},{classes:a}))})).catch((function(e){return console.log(e)}))}},{key:"countReapeatedClasses",value:function(){}},{key:"displayClasses",value:function(){var e=this;if(this.state.classes){var t=this.state.classes.filter((function(t){return t.name.toLowerCase().includes(e.state.searchValue.toLowerCase())}));return t.length>0?t.map((function(e,t){return Object(m.jsx)("li",{className:"list-group-item",children:Object(m.jsxs)("div",{className:"row align-items-center",children:[Object(m.jsx)("div",{className:"col-3",children:Object(m.jsx)("img",{height:"80rem",src:e.image,alt:e.name})}),Object(m.jsxs)("div",{className:"col-3",children:["numero de clases: ",e.cuantity]}),Object(m.jsx)("div",{className:"col-3",children:Object(m.jsx)("h3",{children:e.name})}),Object(m.jsx)("div",{className:"col-3",children:Object(m.jsx)(d.b,{to:"/mis-mensajes/".concat(e._id),className:"btn btn-dark btn-block",children:"Enviar un mensaje"})})]})},e+t)})):Object(m.jsx)("h1",{children:"no hay resultados"})}return Object(m.jsx)("h1",{children:"loading..."})}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(W.a,{className:"mb-3 mt-4",children:Object(m.jsx)(J.a,{onChange:this.handleChange,name:"searchValue",value:this.state.searchValue,placeholder:"Buscar por nombre...","aria-label":"buscar"})}),Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-8",children:Object(m.jsx)("ul",{className:"list-group",children:this.displayClasses()})})})]})}}]),a}(n.Component);function Z(e){var t=e._id,a=(e.price,e.image),n=e.description,s=e.name;return Object(m.jsxs)("div",{className:"card mb-5",children:[Object(m.jsx)("img",{className:"card-img-top",style:{backgroundSize:"cover"},src:a,alt:"Card cap"}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:s}),Object(m.jsx)("p",{className:"card-text",children:n}),Object(m.jsx)(d.b,{to:"/mis-mensajes/".concat(t),children:Object(m.jsx)("div",{className:"btn btn-block btn-dark",children:"Enviar mensaje"})})]})]})}var H=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).refreshPeople=function(){n.userService.getPeople().then((function(e){n.setState(Object(g.a)(Object(g.a)({},n.state),{},{people:e.data.users}))})).catch((function(e){return console.error(e)}))},n.displayUsers=function(){return n.state.people.map((function(e){return Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)(Z,Object(g.a)({},e))},e._id)}))},n.state={people:null},n.userService=new w,n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.refreshPeople()}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[this.state.people&&this.displayUsers(),Object(m.jsx)("h1",{children:"people"})]})}}]),a}(n.Component),Q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleInput=function(e){var t=e.target,a=t.name,s=t.value;n.setState(Object(y.a)({},a,s))},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.email,s=t.pwd;n.authService.signup(a,s).then((function(e){n.props.storeUser(e.data),console.log(e,"ssssssssssssssssssssssss"),"unknown"===e.data.rol?n.props.history.push("/completar-perfil"):n.props.history.push("/")})).catch((function(e){return console.log(e)}))},n.state={email:"",pwd:""},n.authService=new b,n}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)(E.a,{children:[Object(m.jsxs)(U.a,{onSubmit:this.handleFormSubmit,children:[Object(m.jsxs)(U.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(m.jsx)(U.a.Label,{children:"email"}),Object(m.jsx)(U.a.Control,{name:"email",value:this.state.email,onChange:this.handleInput,type:"email",placeholder:"Enter email"})]}),Object(m.jsxs)(U.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(m.jsx)(U.a.Label,{children:"Password"}),Object(m.jsx)(U.a.Control,{name:"pwd",value:this.state.pwd,onChange:this.handleInput,type:"password",placeholder:"Password"})]}),Object(m.jsx)(T.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(m.jsx)(B,Object(g.a)({storeUser:this.props.storeUser},this.props))]})}}]),a}(n.Component),X=a(74),$=a.n(X),ee=a(132),te=a(25),ae=a(60),ne=a(133),se=function e(){var t=this;Object(i.a)(this,e),this.createCheckout=function(e,a){return t.instance.post("/",{id:e,amount:a})},this.instance=j.a.create({baseURL:"".concat("https://englissue.herokuapp.com","/api/checkout/"),withCredentials:!0})};function ce(e){var t=new se,a=Object(n.useState)(),s=Object(te.a)(a,2),c=s[0],r=s[1],i=Object(ne.a)("pk_test_51JeGZpKYMQZormJY9mmaWdIZwUIWfYSmYvgDdWDRsdyRWb5PLnpy7vhJe8j19k8gPCsnens0gwtFhWU4xJBkna1R00AsUuTm5a");console.log(e);var o=function(){var a=Object(ae.useStripe)(),n=Object(ae.useElements)(),s=function(){var s=Object(ee.a)($.a.mark((function s(r){var i,o,l,u,d;return $.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return r.preventDefault(),c||alert("selecciona la cantidad a ingresar"),s.next=4,a.createPaymentMethod({type:"card",card:n.getElement(ae.CardElement)});case 4:if(i=s.sent,o=i.error,l=i.paymentMethod,o){s.next=16;break}return u=l.id,s.next=11,t.createCheckout(u,c);case 11:d=s.sent,d.data,e.fetchUser(),s.next=17;break;case 16:console.log(o);case 17:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-6",children:Object(m.jsxs)("form",{onSubmit:s,className:"form-group",children:[Object(m.jsx)("h2",{children:"mi form"}),Object(m.jsx)(ae.CardElement,{className:"form-control"}),Object(m.jsx)("button",{className:"btn btn-success btn-block",children:"Aceptar"})]})})})};return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Pasarela de pago"}),Object(m.jsxs)("div",{className:"row justify-content-center text-center",children:[Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)("button",{className:"btn-lg p-2 btn-danger",onClick:function(){return r(1e3)},children:"10\u20ac"})}),Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)("button",{className:"btn-lg p-2 btn-danger",onClick:function(){return r(2500)},children:"25\u20ac"})}),Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)("button",{className:"btn-lg p-2 btn-danger",onClick:function(){return r(5e3)},children:"50\u20ac"})})]}),c&&Object(m.jsxs)("h3",{children:["cantidad seleccionada: ",c/100]}),Object(m.jsx)(ae.Elements,{stripe:i,children:Object(m.jsx)(o,{})})]})}var re=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={teacher:null,balance:null},n.userService=new w,n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.refreshTeacher(),this.getCurrentBalance()}},{key:"getCurrentBalance",value:function(){var e=this;this.userService.getSingleUser(this.props.loggedUser._id).then((function(t){e.setState(Object(g.a)(Object(g.a)({},e.state),{},{balance:t.data.User.balance}))})).catch((function(e){return console.log(e)}))}},{key:"refreshTeacher",value:function(){var e=this;this.userService.getSingleUser(this.props.match.params.id).then((function(t){e.setState(Object(g.a)(Object(g.a)({},e.state),{},{teacher:t.data.User}))})).catch((function(e){return console.log(e)}))}},{key:"checkout",value:function(){var e=this,t=this.props.loggedUser._id;this.state.balance>this.state.teacher.price?this.userService.updateUser({id:t,amount:this.state.teacher.price,teacher:this.props.match.params.id}).then((function(){console.log(e.props),e.props.fetchUser(),e.getCurrentBalance()})).catch((function(e){return console.log(e)})):(alert("Saldo insuficiente"),console.log(this.props.history.push("/recargar-cuenta")))}},{key:"displayTeacher",value:function(){var e=this;return this.state.teacher?Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-6",children:Object(m.jsx)("img",{src:this.state.teacher.image,width:"100%",alt:""})}),Object(m.jsxs)("div",{className:"col-6",children:[Object(m.jsx)("h1",{children:this.state.teacher.name}),Object(m.jsx)("h3",{children:this.state.teacher.description})]}),Object(m.jsxs)("button",{onClick:function(){return e.checkout()},className:"btn btn-dark btn-block",children:["Reserva una hora con ",this.state.teacher.name," por solo ",this.state.teacher.price/100,"e."]})]}):Object(m.jsx)("h1",{children:"cargando..."})}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-md-7",children:this.displayTeacher()})})}}]),a}(n.Component),ie=function e(){var t=this;Object(i.a)(this,e),this.getAllTeachers=function(){return t.instance.get("/")},this.instance=j.a.create({baseURL:"".concat("https://englissue.herokuapp.com","/api/teachers"),withCredentials:!0})};function oe(e){var t=e._id,a=e.price,n=e.image,s=e.description,c=e.name;return Object(m.jsxs)("div",{className:"card mb-5",children:[Object(m.jsx)("img",{className:"card-img-top",style:{backgroundSize:"cover"},src:n,alt:"Card cap"}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:c}),Object(m.jsx)("p",{className:"card-text",children:s}),Object(m.jsx)(d.b,{to:"/profesores/".concat(t),props:s,children:Object(m.jsxs)("div",{className:"btn btn-block btn-dark",children:[a/100," euros/hora"]})}),Object(m.jsx)(d.b,{to:"/profesores/".concat(t),children:Object(m.jsx)("div",{className:"btn btn-block btn-dark",children:"Enviar mensaje"})})]})]})}var le=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).refreshTeachers=function(){e.teacherServices.getAllTeachers().then((function(t){e.setState(Object(g.a)(Object(g.a)({},e.state),{},{teachers:t.data}))})).catch((function(e){return console.log(e)}))},e.displayTeachers=function(){var t=e.state.teachers.filter((function(t){return t.name.toLowerCase().includes(e.state.searchValue.toLowerCase())}));return t.length>0?t.map((function(e){return Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)(oe,Object(g.a)({},e))},e._id)})):Object(m.jsx)("p",{children:"Sin resultados"})},e.handleChange=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(g.a)(Object(g.a)({},e.state),{},Object(y.a)({},n,s)))},e.state={teachers:null,searchValue:""},e.teacherServices=new ie,e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.refreshTeachers()}},{key:"render",value:function(){return this.state.teachers?Object(m.jsxs)("div",{children:[Object(m.jsx)(W.a,{className:"mb-3 mt-4",children:Object(m.jsx)(J.a,{onChange:this.handleChange,name:"searchValue",value:this.state.searchValue,placeholder:"Buscar por nombre...","aria-label":"buscar"})}),Object(m.jsx)("div",{className:"row justify-content-center",children:this.displayTeachers()})]}):Object(m.jsx)("h3",{children:"Loading..."})}}]),a}(n.Component),ue=a(265),de=a(266),he=a(267),je=a(136),be=a.n(je),me=a(137),pe=a.n(me),Oe=a(134),ge=a(88),fe=a.n(ge),ve=a(135),xe=a.n(ve);a(227);var ye=function(){var e=xe.a.connect("https://englissue.herokuapp.com"),t=Object(n.useState)(""),a=Object(te.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(),i=Object(te.a)(r,2),o=i[0],l=i[1],u=Object(n.useState)(!1),d=Object(te.a)(u,2),h=d[0],j=d[1],b=Object(n.useState)(""),p=Object(te.a)(b,2),O=p[0],g=p[1],f=Object(n.useState)(),v=Object(te.a)(f,2),x=v[0],y=v[1],N=Object(n.useState)(!1),S=Object(te.a)(N,2),C=S[0],k=S[1],w=Object(n.useState)(""),U=Object(te.a)(w,2),M=U[0],D=U[1],L=Object(n.useState)(!1),I=Object(te.a)(L,2),_=I[0],P=I[1],G=Object(n.useState)(""),E=Object(te.a)(G,2),T=E[0],R=E[1],A=Object(n.useRef)(),B=Object(n.useRef)(),F=Object(n.useRef)();return Object(n.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){l(e),A.current.srcObject=e})),e.on("me",(function(e){c(e),console.log(B.current.remote.state)})),e.on("callUser",(function(e){j(!0),g(e.from),R(e.name),y(e.signal)}))}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{style:{textAlign:"center",color:"#fff"},children:"Videochat"}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"video-container",children:[Object(m.jsx)("div",{className:"video",children:o&&Object(m.jsx)("video",{playsInline:!0,muted:!0,ref:A,autoPlay:!0,style:{width:"300px"}})}),Object(m.jsx)("div",{className:"video",children:B?Object(m.jsx)("video",{playsInline:!0,ref:B,autoPlay:!0,style:{width:"300px"}}):null})]}),Object(m.jsxs)("div",{className:"myId",children:[Object(m.jsx)(he.a,{id:"filled-basic",label:"Name",variant:"filled",value:T,onChange:function(e){return R(e.target.value)},style:{marginBottom:"20px"}}),Object(m.jsx)(Oe.CopyToClipboard,{text:s,style:{marginBottom:"2rem"},children:Object(m.jsx)(ue.a,{variant:"contained",color:"primary",startIcon:Object(m.jsx)(be.a,{fontSize:"large"}),children:"Copy ID"})}),Object(m.jsx)(he.a,{id:"filled-basic",label:"ID to call",variant:"filled",value:M,onChange:function(e){return D(e.target.value)}}),Object(m.jsx)("div",{className:"call-button",children:C&&!_?Object(m.jsx)(ue.a,{variant:"contained",color:"secondary",onClick:function(){P(!0),F.current.destroy(),console.log("fin")},children:"End Call"}):Object(m.jsx)(de.a,{color:"primary","aria-label":"call",onClick:function(){return function(t){var a=new fe.a({initiator:!0,trickle:!1,stream:o});a.on("signal",(function(a){console.log("signal"),e.emit("callUser",{userToCall:t,signalData:a,from:s,name:T},console.log("peer signal"))})),a.on("stream",(function(e){console.log("entroooo"),B.current.srcObject=e}),console.log(o)),e.on("callAccepted",(function(e){console.log("accepted"),k(!0),a.signal(e)}),console.log(B.current.remote.state)),F.current=a}(M)},children:Object(m.jsx)(pe.a,{fontSize:"large"})})})]}),Object(m.jsx)("div",{children:h&&!C?Object(m.jsxs)("div",{className:"caller",children:[Object(m.jsxs)("h1",{children:[T," is calling..."]}),Object(m.jsx)(ue.a,{variant:"contained",color:"primary",onClick:function(){k(!0);var t=new fe.a({initiator:!1,trickle:!1,stream:o});t.on("signal",(function(t){e.emit("answerCall",{signal:t,to:O})})),t.on("stream",(function(e){B.current.srcObject=e})),t.signal(x),F.current=t},children:"Answer"})]}):null})]})]})},Ne=function(e){var t=e.storeUser,a=e.loggedUser,n=e.fetchUser;return Object(m.jsxs)(f.d,{children:[Object(m.jsx)(f.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(G,{})}}),Object(m.jsx)(f.b,{exact:!0,path:"/iniciar-sesion",render:function(e){return Object(m.jsx)(F,Object(g.a)({storeUser:t},e))}}),Object(m.jsx)(f.b,{exact:!0,path:"/registro",render:function(e){return Object(m.jsx)(Q,Object(g.a)({storeUser:t},e))}}),Object(m.jsx)(f.b,{exact:!0,path:"/completar-perfil",render:function(e){return Object(m.jsx)(P,Object(g.a)({storeUser:t},e))}}),Object(m.jsx)(f.b,{exact:!0,path:"/salas-chat",render:function(e){return Object(m.jsx)(x,Object(g.a)({storeUser:t},e))}}),Object(m.jsx)(f.b,{path:"/salas-chat/:id",render:function(e){return Object(m.jsx)(C,Object(g.a)({},e))}}),Object(m.jsx)(f.b,{exact:!0,path:"/mis-mensajes",render:function(e){return Object(m.jsx)(z,Object(g.a)({loggedUser:a},e))}}),Object(m.jsx)(f.b,{exact:!0,path:"/videochat",render:function(){return Object(m.jsx)(ye,{})}}),Object(m.jsx)(f.b,{exact:!0,path:"/profesores",render:function(){return Object(m.jsx)(le,{})}}),Object(m.jsx)(f.b,{exact:!0,path:"/recargar-cuenta",render:function(){return a?Object(m.jsx)(ce,{fetchUser:n,loggedUser:a,storeUser:t}):Object(m.jsx)(f.a,{to:"/iniciar-sesion"})}}),Object(m.jsx)(f.b,{exact:!0,path:"/mis-clases",render:function(){return Object(m.jsx)(Y,{loggedUser:a})}}),Object(m.jsx)(f.b,{path:"/profesores/:id",render:function(e){return Object(m.jsx)(re,Object(g.a)({loggedUser:a,fetchUser:n},e))}}),Object(m.jsx)(f.b,{path:"/mis-mensajes/:id",render:function(e){return Object(m.jsx)(K,Object(g.a)({loggedUser:a},e))}}),Object(m.jsx)(f.b,{path:"/gente-cerca",render:function(e){return Object(m.jsx)(H,Object(g.a)({loggedUser:a},e))}})]})},Se=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).componentDidMount=function(){e.fetchUser()},e.storeUser=function(t){return e.setState({loggedUser:t})},e.fetchUser=function(){e.authService.isloggedin().then((function(t){e.storeUser(t.data)})).catch((function(t){return e.storeUser(null)}))},e.state={loggedUser:void 0},e.authService=new b,e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{loggedUser:this.state.loggedUser,storeUser:this.storeUser}),Object(m.jsx)(Ne,{storeUser:this.storeUser,fetchUser:this.fetchUser,loggedUser:this.state.loggedUser})]})}}]),a}(n.Component),Ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,270)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(d.a,{children:Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(Se,{})})}),document.getElementById("root")),Ce()}},[[229,1,2]]]);
//# sourceMappingURL=main.72c37335.chunk.js.map