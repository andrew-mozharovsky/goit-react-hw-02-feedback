(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(t,e,a){t.exports={statistics:"Statistics_statistics__20LAH",title:"Statistics_title__1dBZE",contant_container:"Statistics_contant_container__2iVR-",content:"Statistics_content__2LzHy",total:"Statistics_total__376yp",total_content:"Statistics_total_content__2JOBK",value:"Statistics_value__1HXj7"}},12:function(t,e,a){t.exports={title:"Notification_title__3BR6p"}},17:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(2),c=a.n(n),s=a(10),o=a.n(s),i=(a(17),a(18),a(3)),r=a(4),l=a(6),u=a(5),b=a(11),d=a(8),j=a.n(d),_=a(9),h=a.n(_),O=a(0),p=function(t){var e=t.incrementFeedback,a=t.options;return Object(O.jsx)("div",{className:h.a.controls,children:a.map((function(t){return Object(O.jsx)("button",{className:h.a.button,type:"button",onClick:e(t),children:t},t)}))})},v=a(1),x=a.n(v),m=function(t){var e=t.good,a=t.neutral,n=t.bad,c=t.countTotalFeedback,s=t.countPositiveFeedbackPercentage;return Object(O.jsxs)("div",{className:x.a.statistics,children:[Object(O.jsx)("h2",{className:x.a.title,children:"Statistics"}),Object(O.jsxs)("div",{className:x.a.contant_container,children:[Object(O.jsxs)("p",{className:x.a.content,children:["Good:",Object(O.jsxs)("span",{className:x.a.value,children:[" ",e]})]}),Object(O.jsxs)("p",{className:x.a.content,children:["Neutral:",Object(O.jsxs)("span",{className:x.a.value,children:[" ",a]})]}),Object(O.jsxs)("p",{className:x.a.content,children:["Bad:",Object(O.jsxs)("span",{className:x.a.value,children:[" ",n]})]})]}),Object(O.jsxs)("div",{className:x.a.total,children:[Object(O.jsxs)("p",{className:x.a.total_content,children:["Total: ",Object(O.jsxs)("span",{className:x.a.value,children:[" ",c()]})]}),Object(O.jsxs)("p",{className:x.a.total_content,children:["Positive feedback:",Object(O.jsxs)("span",{className:x.a.value,children:[" ",s(),"%"]})]})]})]})},f=a(12),k=a.n(f),N=function(){return Object(O.jsx)("p",{className:k.a.title,children:"No feedback given"})},g=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.incrementFeedback=function(e){return function(){t.setState((function(t){return Object(b.a)({},e,t[e]+1)}))}},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.state.good,a=t.countTotalFeedback();return a?Math.round(100*e/a):0},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,n=t.bad;return Object(O.jsxs)("section",{className:j.a.container,children:[Object(O.jsx)("h1",{className:j.a.title,children:"Please leave feedback"}),Object(O.jsx)(p,{options:Object.keys(this.state),incrementFeedback:this.incrementFeedback}),e||a||n?Object(O.jsx)(m,{good:e,neutral:a,bad:n,countTotalFeedback:this.countTotalFeedback,countPositiveFeedbackPercentage:this.countPositiveFeedbackPercentage}):Object(O.jsx)(N,{})]})}}]),a}(c.a.Component),F=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(O.jsx)(g,{})}}]),a}(c.a.Component);o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root"))},8:function(t,e,a){t.exports={container:"Feedback_container__37DxL",title:"Feedback_title__3Ob5V"}},9:function(t,e,a){t.exports={controls:"Controls_controls__Eu8pk",button:"Controls_button__2iKmW"}}},[[20,1,2]]]);
//# sourceMappingURL=main.43085941.chunk.js.map