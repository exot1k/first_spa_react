(this["webpackJsonpreact-first-project"]=this["webpackJsonpreact-first-project"]||[]).push([[5],{285:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var s=t(4),i=(t(0),t(9)),n=t(20),c=t(1),o=function(e){return{isAuth:e.auth.isAuth}},r=function(e){return Object(n.b)(o)((function(a){return a.isAuth?Object(c.jsx)(e,Object(s.a)({},a)):Object(c.jsx)(i.a,{to:"/login"})}))}},291:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__qLBGH",dialog:"Dialogs_dialog__3Ap-V",dialogLi:"Dialogs_dialogLi__3OW1-"}},305:function(e,a,t){"use strict";t.r(a);t(0);var s=t(101),i=t(291),n=t.n(i),c=t(14),o=t(1),r=function(e){var a="/dialogs/"+e.dialogsData.id;return Object(o.jsx)("div",{className:n.a.dialogs,children:Object(o.jsxs)("ul",{className:n.a.dialog,children:[Object(o.jsx)("li",{className:n.a.dialogLi,children:Object(o.jsx)("img",{src:"https://spng.pngfind.com/pngs/s/475-4759930_pepe-meme-rarepepe-slav-russian-pepe-the-frog.png"})}),Object(o.jsx)("li",{className:n.a.dialogLi,children:Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:Object(o.jsxs)(c.b,{to:a,activeClassName:n.a.active,children:[" ",e.dialogsData.name," "]})}),Object(o.jsx)("div",{children:e.dialogsData.lastMessage})]})})]})})},l=function(e){var a=e.dialogsData.map((function(e){return Object(o.jsx)(r,{dialogsData:e},e.id)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("textarea",{onChange:function(a){e.onChangeNewMessage(a.target.value)},value:e.newMessageText})}),Object(o.jsx)("button",{onClick:function(){e.onAddMessage()},children:"Send message"}),a]})},d=t(20),g=t(285),j=t(10),u=(Object(g.a)(l),Object(j.d)(Object(d.b)((function(e){return{newMessageText:e.dialogsPage.newMessageText,dialogsData:e.dialogsPage.dialogsData}}),(function(e){return{onChangeNewMessage:function(a){e(Object(s.c)(a))},onAddMessage:function(){e(Object(s.b)())}}})),g.a)(l));a.default=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)(u,{})})}}}]);
//# sourceMappingURL=5.4007752c.chunk.js.map