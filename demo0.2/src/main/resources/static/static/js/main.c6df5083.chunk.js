(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},324:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(10),c=a.n(r),o=(a(110),a.p,a(111),a(67)),i=a(14),l=a(15),d=a(19),h=a(18),j=a(359),u=a(364),b=a(91),m=a.n(b),p=a(328),g=a(380),O=a(382),x=a(27),v=a(365),f=a(363),y=a(327),C=a(2),w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleDrawerToggle=function(){return n.setState({toggle:!n.state.toggle})},n.state={toggle:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return Object(C.jsxs)("div",{className:e.root,children:[Object(C.jsx)(j.a,{children:Object(C.jsxs)(f.a,{children:[Object(C.jsx)(u.a,{className:e.menuButton,edge:"start","aria-lable":"Menu",color:"inherit",onClick:this.handleDrawerToggle,children:Object(C.jsx)(m.a,{})}),Object(C.jsx)(y.a,{variant:"h6",style:k,children:"React User Application"})]})}),Object(C.jsxs)(g.a,{open:this.state.toggle,children:[Object(C.jsx)(O.a,{onClick:this.handleDrawerToggle,children:Object(C.jsx)(v.a,{component:x.b,to:"/",children:"Home"})}),Object(C.jsx)(O.a,{onClick:this.handleDrawerToggle,children:Object(C.jsx)(v.a,{component:x.b,to:"/add-user",children:"GoUser"})})]})]})}}]),a}(s.a.Component),k={flexGrow:1},N=Object(p.a)({root:{flexGrow:1}})(w),B=a(12),S=a(33),D=a(31),W=a.n(D),P="http://localhost:8080/users",U="http://localhost:8080/board",I=new(function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,[{key:"fetchUsers",value:function(){return W.a.get(P)}},{key:"fetchUserByID",value:function(e){return W.a.get(P+"/"+e)}},{key:"deleteUser",value:function(e){return W.a.delete(P+"/"+e)}},{key:"addUser",value:function(e){return W.a.post(P,e)}},{key:"editUser",value:function(e){return W.a.put(P+"/"+e.id,e)}},{key:"fetchBoards",value:function(){return W.a.get(U)}},{key:"fetchBoardByID",value:function(e){return W.a.get(U+"/"+e)}},{key:"deleteBoard",value:function(e){return W.a.delete(U+"/"+e)}},{key:"addBoard",value:function(e){return W.a.post(U,e)}},{key:"editBoard",value:function(e){return W.a.put(U+"/"+e.bid,e)}}]),e}()),T=a(379),F=a(369),L=a(366),M=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(S.a)({},e.target.name,e.target.value))},n.saveUser=function(e){e.preventDefault();var t={username:n.state.username,password:n.state.password,firstName:n.state.firstName,lastName:n.state.lastName,age:n.state.age,salary:n.state.salary};I.addUser(t).then((function(e){n.setState({message:t.username+"\ub2d8\uc774 \ub4f1\ub85d\ub310"}),console.log(n.state.message),n.props.history.push("/users")})).catch((function(e){console.log("saveUser() \uc5d0\ub7ec",e)}))},n.state={username:"",password:"",firstName:"",lastName:"",age:"",salary:"",message:null},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(L.a,{children:Object(C.jsx)(N,{})}),Object(C.jsx)(y.a,{variant:"h4",style:R,children:"Add User"}),Object(C.jsxs)("form",{style:A,children:[Object(C.jsx)(T.a,{type:"text",placeholder:"username",name:"username",fullWidth:!0,margin:"normal",value:this.state.username,onChange:this.onChange}),Object(C.jsx)(T.a,{type:"password",placeholder:"Password",name:"password",fullWidth:!0,margin:"normal",value:this.state.password,onChange:this.onChange}),Object(C.jsx)(T.a,{placeholder:"Firstname",name:"firstName",fullWidth:!0,margin:"normal",value:this.state.firstName,onChange:this.onChange}),Object(C.jsx)(T.a,{placeholder:"Lastname",name:"lastName",fullWidth:!0,margin:"normal",value:this.state.lastName,onChange:this.onChange}),Object(C.jsx)(T.a,{type:"number",placeholder:"age",name:"age",fullWidth:!0,margin:"normal",value:this.state.age,onChange:this.onChange}),Object(C.jsx)(T.a,{type:"number",placeholder:"Salary",name:"salary",fullWidth:!0,margin:"normal",value:this.state.salary,onChange:this.onChange}),Object(C.jsx)(F.a,{variant:"contained",color:"primary",onClick:this.saveUser,children:"Save"})]})]})}}]),a}(n.Component),A={display:"flex",flexFlow:"row wrap"},R={display:"flex",justifyContent:"center"},q=M,G={marginTop:"20px"},Q=function(){return Object(C.jsx)("div",{children:Object(C.jsx)(x.a,{children:Object(C.jsx)("div",{style:G,children:Object(C.jsxs)("switch",{children:[Object(C.jsx)(B.a,{exact:!0,path:"/users",component:N}),Object(C.jsx)(B.a,{path:"/add-user",component:q}),Object(C.jsx)(B.a,{exact:!0,path:"/",component:N})]})})})})},H=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsx)(j.a,{children:Object(C.jsx)("nav",{className:"navbar navbar-expand-lg bg-primary navbar-dark nav-fixed-top",children:Object(C.jsxs)("div",{className:"container-fluid",children:[Object(C.jsx)(x.b,{className:"navbar-brand",to:"/",children:"Home"}),Object(C.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(C.jsx)("span",{className:"navbar-toggler-icon"})}),Object(C.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(C.jsxs)("ul",{className:"navbar-nav",children:[Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(x.b,{className:"nav-link",to:"/testboardList",activeClassName:"active",children:"Users"})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(x.b,{className:"nav-link",to:"/board",activeClassName:"active",children:"Board"})})]})})]})})})})}}]),a}(n.Component),J=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(S.a)({},e.target.name,e.target.value))},n.saveUser=function(e){e.preventDefault();var t={username:n.state.username,password:n.state.password,firstName:n.state.firstName,lastName:n.state.lastName,age:n.state.age,salary:n.state.salary};I.addUser(t).then((function(e){n.setState({message:t.username+"\ub2d8\uc774 \ub4f1\ub85d\ub310"}),console.log(n.state.message),n.props.history.push("/users")})).catch((function(e){console.log("saveUser() \uc5d0\ub7ec",e)}))},n.state={username:"",password:"",firstName:"",lastName:"",age:"",salary:"",message:null},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(L.a,{children:Object(C.jsx)(H,{})}),Object(C.jsx)(y.a,{variant:"h4",style:E,children:"Add User"}),Object(C.jsxs)("form",{style:z,children:[Object(C.jsx)(T.a,{type:"text",placeholder:"username",name:"username",fullWidth:!0,margin:"normal",value:this.state.username,onChange:this.onChange}),Object(C.jsx)(T.a,{type:"password",placeholder:"Password",name:"password",fullWidth:!0,margin:"normal",value:this.state.password,onChange:this.onChange}),Object(C.jsx)(T.a,{placeholder:"Firstname",name:"firstName",fullWidth:!0,margin:"normal",value:this.state.firstName,onChange:this.onChange}),Object(C.jsx)(T.a,{placeholder:"Lastname",name:"lastName",fullWidth:!0,margin:"normal",value:this.state.lastName,onChange:this.onChange}),Object(C.jsx)(T.a,{type:"number",placeholder:"age",name:"age",fullWidth:!0,margin:"normal",value:this.state.age,onChange:this.onChange}),Object(C.jsx)(T.a,{type:"number",placeholder:"Salary",name:"salary",fullWidth:!0,margin:"normal",value:this.state.salary,onChange:this.onChange}),Object(C.jsx)(F.a,{variant:"contained",color:"primary",onClick:this.saveUser,children:"Save"})]})]})}}]),a}(n.Component),z={display:"flex",flexFlow:"row wrap"},E={display:"flex",justifyContent:"center"},K=J,V=a(22),X=a.n(V),Y=a(370),Z=a(326),$=a(371),_=a(372),ee=a(373),te=a(374),ae=a(375),ne=a(376),se=a(381);X.a.seed(123);Array(53).fill().map((function(){return{id:X.a.random.uuid(),name:X.a.name.lastName()+X.a.name.firstName(),email:X.a.internet.email(),phone:X.a.phone.phoneNumber()}}));var re=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).reloadBoardList=function(){I.fetchBoards().then((function(e){n.setState({boards:e.data})})).catch((function(e){console.log("reloadBoardList() \uc5d0\ub7ec",e)}))},n.handleChangePage=function(e,t){n.setState({page:t})},n.handleChangeRowsPerPage=function(e){n.setState({rowsPerPage:e.target.value,page:0})},n.createBoard=function(){window.localStorage.removeItem("boardID"),n.props.history.push("/createboard")},n.state={boards:[],page:0,rowsPerPage:10},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.reloadBoardList()}},{key:"testBoard",value:function(e){this.props.history.push("/board/"+e)}},{key:"render",value:function(){var e=this;return Object(C.jsxs)("div",{children:[Object(C.jsx)(L.a,{children:Object(C.jsx)(H,{})}),Object(C.jsx)(Y.a,{component:Z.a,children:Object(C.jsxs)("div",{className:"cdiv",children:[Object(C.jsx)("button",{type:"button",className:"btn btn-sm btn-primary",id:"btnWrite",onClick:this.createBoard,children:"\uae00\uc4f0\uae30"}),Object(C.jsxs)($.a,{size:"small",children:[Object(C.jsx)(_.a,{children:Object(C.jsxs)(ee.a,{children:[Object(C.jsx)(te.a,{children:"No"}),Object(C.jsx)(te.a,{align:"right",children:"\uc81c\ubaa9"}),Object(C.jsx)(te.a,{align:"right",children:"\ub2c9\ub124\uc784"}),Object(C.jsx)(te.a,{align:"right",children:"\uc791\uc131\uc77c"})]})}),Object(C.jsx)(ae.a,{children:this.state.boards.map((function(t){return Object(C.jsxs)(ee.a,{children:[Object(C.jsx)(te.a,{component:"th",scope:"row",children:t.bid}),Object(C.jsx)(te.a,{align:"right",children:Object(C.jsx)("a",{onClick:function(){return e.testBoard(t.bid)},children:t.title})}),Object(C.jsx)(te.a,{align:"right",children:t.nickname}),Object(C.jsx)(te.a,{align:"right",children:t.createdate})]},t.id)}))}),Object(C.jsx)(ne.a,{children:Object(C.jsx)(ee.a,{children:Object(C.jsx)(se.a,{count:this.state.boards.length,page:this.state.page,rowsPerPage:this.state.rowsPerPage,onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage})})})]})]})})]})}}]),a}(n.Component);a(73);X.a.seed(123);Array(53).fill().map((function(){return{id:X.a.random.uuid(),name:X.a.name.lastName()+X.a.name.firstName(),email:X.a.internet.email(),phone:X.a.phone.phoneNumber()}}));var ce=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(S.a)({},e.target.name,e.target.value))},n.saveBoard=function(e){e.preventDefault();var t={nickname:n.state.nickname,password:n.state.password,title:n.state.title,content:n.state.content};I.addBoard(t).then((function(e){n.setState({message:t.nickname+"\uc758 \uac8c\uc2dc\uae00 \ub4f1\ub85d"}),console.log(n.state.message),n.props.history.push("/board")})).catch((function(e){console.log("saveBoard() \uc5d0\ub7ec"+e)}))},n.state={nickname:"",password:"",title:"",content:"",message:null},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:"cdiv",children:[Object(C.jsx)(L.a,{children:Object(C.jsx)(H,{})}),Object(C.jsx)(y.a,{variant:"h4",style:oe,children:"\uae00\uc4f0\uae30"}),Object(C.jsxs)("form",{children:[Object(C.jsx)(T.a,{type:"text",placeholder:"\uc791\uc131\uc790",name:"nickname",fullWidth:!0,margin:"normal",value:this.state.nickname,onChange:this.onChange}),Object(C.jsx)(T.a,{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",name:"password",fullWidth:!0,margin:"normal",value:this.state.password,onChange:this.onChange}),Object(C.jsx)(T.a,{type:"text",placeholder:"\uc81c\ubaa9",name:"title",fullWidth:!0,margin:"normal",value:this.state.title,onChange:this.onChange}),Object(C.jsx)(T.a,{type:"text",placeholder:"\ub0b4\uc6a9",name:"content",fullWidth:!0,margin:"normal",value:this.state.content,onChange:this.onChange,multiline:!0,rows:20}),Object(C.jsx)(F.a,{variant:"contained",color:"primary",onClick:this.saveBoard,children:"\uc791\uc131"})]})]})}}]),a}(n.Component),oe={display:"flex",justifyContent:"center"},ie=ce,le=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(S.a)({},e.target.name,e.target.value))},n.editBoard=function(e){n.state.passwd!=n.state.board.password?n.setState({msg:"\uc554\ud638\uac00 \ud2c0\ub9bd\ub2c8\ub2e4"}):(window.localStorage.setItem("boardID",e),n.props.history.push("/edit-board"))},n.deleteBoard=function(e){n.state.passwd!=n.state.board.password?n.setState({msg:"\uc554\ud638\uac00 \ud2c0\ub9bd\ub2c8\ub2e4"}):(I.deleteBoard(e).then((function(e){n.setState({message:"Board Deleted Successfully"})})).catch((function(e){console.log("deleteBoard() \uc5d0\ub7ec"+e)})),n.props.history.push("/"))},n.state={bid:n.props.match.params.bid,board:{},message:"",passwd:"",msg:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;I.fetchBoardByID(this.state.bid).then((function(t){e.setState({board:t.data})}))}},{key:"render",value:function(){var e=this;return Object(C.jsxs)("div",{className:"cdiv",children:[Object(C.jsx)(L.a,{children:Object(C.jsx)(H,{})}),Object(C.jsxs)("form",{children:[Object(C.jsx)(T.a,{type:"text",placeholder:"\uc81c\ubaa9",name:"title",fullWidth:!0,margin:"normal",value:this.state.board.title,onChange:this.onChange}),Object(C.jsxs)("label",{children:[this.state.board.nickname," | ",this.state.board.createdate]}),Object(C.jsx)(T.a,{type:"text",placeholder:"\ub0b4\uc6a9",name:"content",fullWidth:!0,margin:"normal",variant:"outlined",value:this.state.board.content,onChange:this.onChange,multiline:!0,rows:20}),Object(C.jsx)(T.a,{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",name:"passwd",variant:"outlined",value:this.state.passwd,onChange:this.onChange}),Object(C.jsx)("label",{children:this.state.msg}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)(F.a,{variant:"contained",color:"primary",onClick:function(){return e.editBoard(e.state.board.bid)},children:"\uc218\uc815"}),Object(C.jsx)(F.a,{variant:"contained",color:"primary",onClick:function(){return e.deleteBoard(e.state.board.bid)},children:"\uc0ad\uc81c"})]})]})}}]),a}(n.Component),de=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).loadBoard=function(){I.fetchBoardByID(window.localStorage.getItem("boardID")).then((function(e){var t=e.data;n.setState({bid:t.bid,title:t.title,nickname:t.nickname,password:t.password,content:t.content,createdate:t.createdate})})).catch((function(e){console.log("loadBoard() \uc5d0\ub7ec",e)}))},n.saveBoard=function(e){e.preventDefault();var t={bid:n.state.bid,title:n.state.title,nickname:n.state.nickname,password:n.state.password,content:n.state.content,createdate:n.state.createdate};I.editBoard(t).then((function(e){n.setState({message:t.bid+"\ubc88 \uac8c\uc2dc\uae00 \uc218\uc815"}),n.props.history.push("/board/"+window.localStorage.getItem("boardID"))})).catch((function(e){console.log("saveBoard() \uc5d0\ub7ec",e)}))},n.onChange=function(e){n.setState(Object(S.a)({},e.target.name,e.target.value))},n.goback=function(){n.props.history.push("/board/"+window.localStorage.getItem("boardID"))},n.state={bid:0,title:"",nickname:"",password:"",content:"",createdate:"",message:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.loadBoard()}},{key:"render",value:function(){return Object(C.jsxs)("div",{className:"cdiv",children:[Object(C.jsx)(L.a,{children:Object(C.jsx)(H,{})}),Object(C.jsx)(y.a,{variant:"h4",style:he,children:"\uae00\uc4f0\uae30"}),Object(C.jsxs)("form",{children:[Object(C.jsx)(T.a,{type:"text",placeholder:"\uc791\uc131\uc790",name:"nickname",fullWidth:!0,margin:"normal",value:this.state.nickname,onChange:this.onChange}),Object(C.jsx)(T.a,{type:"text",placeholder:"\uc81c\ubaa9",name:"title",fullWidth:!0,margin:"normal",value:this.state.title,onChange:this.onChange}),Object(C.jsx)(T.a,{type:"text",placeholder:"\ub0b4\uc6a9",name:"content",fullWidth:!0,margin:"normal",value:this.state.content,onChange:this.onChange,multiline:!0,rows:20}),Object(C.jsx)(F.a,{variant:"contained",color:"primary",onClick:this.saveBoard,children:"\uc218\uc815"}),Object(C.jsx)(F.a,{variant:"contained",color:"primary",onClick:this.goback,children:"\ucde8\uc18c"})]})]})}}]),a}(n.Component),he={display:"flex",justifyContent:"center"},je=de,ue={marginTop:"20px"},be=function(){return Object(C.jsx)("div",{children:Object(C.jsx)(x.a,{children:Object(C.jsx)("div",{style:ue,children:Object(C.jsxs)("switch",{children:[Object(C.jsx)(B.a,{exact:!0,path:"/users",component:H}),Object(C.jsx)(B.a,{path:"/add-user",component:K}),Object(C.jsx)(B.a,{exact:!0,path:"/board",component:re}),Object(C.jsx)(B.a,{path:"/createboard",component:ie}),Object(C.jsx)(B.a,{path:"/board/:bid",component:le}),Object(C.jsx)(B.a,{path:"/edit-board",component:je}),Object(C.jsx)(B.a,{exact:!0,path:"/",component:H})]})})})})};var me=function(){var e=Object(o.useMediaQuery)({query:"(min-width:1024px)"}),t=Object(o.useMediaQuery)({query:"(min-width:768px) and (max-width:1023px)"}),a=Object(o.useMediaQuery)({query:"(max-width:767px)"});return Object(C.jsxs)("div",{children:[e&&Object(C.jsx)(be,{}),t&&Object(C.jsx)(Q,{}),a&&Object(C.jsx)(Q,{})]})},pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,385)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(me,{})}),document.getElementById("root")),pe()}},[[324,1,2]]]);
//# sourceMappingURL=main.c6df5083.chunk.js.map