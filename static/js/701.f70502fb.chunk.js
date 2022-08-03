"use strict";(self.webpackChunkcalculator=self.webpackChunkcalculator||[]).push([[701],{811:function(n,t,e){e.d(t,{s:function(){return h},i:function(){return d}});var r,i=e(671),o=e(144),c=e(340),s=e(347),u=e(791),a=e(168),l=e(33).ZP.article(r||(r=(0,a.Z)(["\n  margin-left: 10px;\n  padding: 0 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: center;\n  height: 100px;\n  border-bottom: 2px solid ",";\n\n  & :first-child {\n    height: 16px;\n    font-size: 16px;\n  }\n\n  & :last-child {\n    height: 32px;\n    font-size: 32px;\n  }\n"])),(function(n){return n.theme.config.border})),p=e(184),f=function(n){(0,c.Z)(e,n);var t=(0,s.Z)(e);function e(){return(0,i.Z)(this,e),t.apply(this,arguments)}return(0,o.Z)(e,[{key:"render",value:function(){var n=this.props,t=n.expression,e=n.value;return(0,p.jsxs)(l,{children:[(0,p.jsx)("p",{"data-test-id":"display-expression",children:t}),(0,p.jsx)("p",{"data-test-id":"display-value",children:e})]})}}]),e}(u.Component),d=f,h=function(n){var t=n.expression,e=n.value;return(0,p.jsxs)(l,{children:[(0,p.jsx)("p",{"data-test-id":"display-expression",children:t}),(0,p.jsx)("p",{"data-test-id":"display-value",children:e})]})}},948:function(n,t,e){e.d(t,{Z:function(){return f}});var r,i=e(671),o=e(144),c=e(340),s=e(347),u=e(791),a=e(168),l=e(33).ZP.div(r||(r=(0,a.Z)(["\n  padding: 5px;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 20px;\n  background-color: ",";\n"])),(function(n){return n.theme.config.colors.error})),p=e(184),f=function(n){(0,c.Z)(e,n);var t=(0,s.Z)(e);function e(n){var r;return(0,i.Z)(this,e),(r=t.call(this,n)).state={error:!1},r}return(0,o.Z)(e,[{key:"render",value:function(){var n=this.state.error,t=this.props,e=t.fallback,r=t.children;return n?(0,p.jsx)(l,{children:e}):r}}],[{key:"getDerivedStateFromError",value:function(){return{error:!0}}}]),e}(u.Component)},465:function(n,t,e){e.d(t,{A:function(){return m},Z:function(){return Z}});var r,i,o,c=e(671),s=e(144),u=e(340),a=e(347),l=e(791),p=e(168),f=e(33),d=f.ZP.ul(r||(r=(0,p.Z)(["\n  margin-top: 10px;\n  width: 100%;\n  font-size: 0.9em;\n  overflow: auto;\n  & > li {\n    padding: 5px 0;\n    margin-right: 5px;\n    border-bottom: 1px solid ",";\n    word-break: break-word;\n  }\n"])),(function(n){return n.theme.config.border})),h=f.ZP.h3(i||(i=(0,p.Z)(["\n  margin-bottom: 10px;\n"]))),y=f.ZP.button(o||(o=(0,p.Z)(["\n  width: 100%;\n  padding: 0.2em;\n  border-radius: 5px;\n  font-size: 0.7em;\n"]))),x=e(184),g=function(n){(0,u.Z)(e,n);var t=(0,a.Z)(e);function e(){return(0,c.Z)(this,e),t.apply(this,arguments)}return(0,s.Z)(e,[{key:"render",value:function(){var n=this.props,t=n.history,e=n.clearHistory;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h,{children:"History"}),(0,x.jsx)(y,{"data-test-id":"clear-history",onClick:e,children:"Clear"}),(0,x.jsx)(d,{children:t.map((function(n,t){return(0,x.jsx)("li",{children:n},n+t)}))})]})}}]),e}(l.Component),Z=g,m=function(n){var t=n.history,e=n.clearHistory;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h,{children:"History"}),(0,x.jsx)(y,{"data-test-id":"clear-history",onClick:e,children:"Clear"}),(0,x.jsx)(d,{children:t.map((function(n,t){return(0,x.jsx)("li",{children:n},n+t)}))})]})}},926:function(n,t,e){e.d(t,{P:function(){return m},E:function(){return g}});var r,i,o=e(671),c=e(144),s=e(340),u=e(347),a=e(829),l=e(791),p=e(168),f=e(33),d=f.ZP.article(r||(r=(0,p.Z)(["\n  margin-top: 1em;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  align-items: center;\n  justify-items: center;\n  gap: 1em;\n"]))),h=f.ZP.button(i||(i=(0,p.Z)(["\n  width: 80px;\n  height: 80px;\n  font-size: 32px;\n  border-radius: 24px;\n"]))),y=e(184),x=function(n){(0,s.Z)(e,n);var t=(0,u.Z)(e);function e(){return(0,o.Z)(this,e),t.apply(this,arguments)}return(0,c.Z)(e,[{key:"render",value:function(){var n=this.props.onKeyClick;return(0,y.jsx)(d,{children:a.ZY.map((function(t){var e=t.char,r=t.type;return(0,y.jsx)(h,{"data-test-id":"button-".concat(e),onClick:function(){return n({type:r,char:e})},children:e},e)}))})}}]),e}(l.Component),g=x,Z=e(976),m=function(n){var t=n.onKeyClick;return(0,y.jsx)(d,{children:Z.Z.map((function(n){var e=n.char,r=n.type;return(0,y.jsx)(h,{"data-test-id":"button-".concat(e),onClick:function(){return t({type:r,char:e})},children:e},e)}))})}},701:function(n,t,e){e.r(t),e.d(t,{mapDispatchToProps:function(){return b},mapStateToProps:function(){return m}});var r=e(683),i=e(671),o=e(144),c=e(326),s=e(340),u=e(347),a=e(791),l=e(452),p=e(811),f=e(465),d=e(926),h=e(50),y=e(961),x=e(948),g=e(184),Z=function(n){(0,s.Z)(e,n);var t=(0,u.Z)(e);function e(n){var r;return(0,i.Z)(this,e),(r=t.call(this,n)).handleKeypadClick=function(n){r.props.setCalculator(n)},r.handleClearHistory=function(){return r.props.clearHistory()},r.state={showHistory:!0},r.toggleHistory=r.toggleHistory.bind((0,c.Z)(r)),r}return(0,o.Z)(e,[{key:"toggleHistory",value:function(){this.setState((function(n){return{showHistory:!n.showHistory}}))}},{key:"render",value:function(){var n=this.props,t=n.displayValue,e=n.displayExpression,r=n.history,i=this.state.showHistory;return(0,g.jsxs)(h.l3,{children:[(0,g.jsxs)(h.pp,{children:[(0,g.jsx)(x.Z,{fallback:"Something is wrong with display. Try to reload the page, please",children:(0,g.jsx)(p.i,{value:t,expression:e})}),(0,g.jsx)(x.Z,{fallback:"Something is wrong with keypad. Try to reload the page, please",children:(0,g.jsx)(d.E,{onKeyClick:this.handleKeypadClick})})]}),(0,g.jsxs)(h.ny,{showHistory:i,"data-test-id":"history",children:[(0,g.jsx)(h.OC,{"data-test-id":"history-toggler",onClick:this.toggleHistory}),i&&(0,g.jsx)(x.Z,{fallback:"Something is wrong with history. Try to reload the page, please",children:(0,g.jsx)(f.Z,{history:r,clearHistory:this.handleClearHistory})})]})]})}}]),e}(a.Component),m=function(n){var t=n.calculator;return(0,r.Z)({},t)},b={setCalculator:y.Sd,clearHistory:y.QQ};t.default=(0,l.$j)(m,b)(Z)},50:function(n,t,e){e.d(t,{OC:function(){return f},l3:function(){return a},ny:function(){return p},pp:function(){return l}});var r,i,o,c,s=e(168),u=e(33),a=u.ZP.section(r||(r=(0,s.Z)(["\n  width: 100%;\n  height: calc(100% - 80px);\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n"]))),l=u.ZP.div(i||(i=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),p=u.ZP.aside(o||(o=(0,s.Z)(["\n  position: relative;\n  padding: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: ",";\n  font-size: 20px;\n  border-left: 2px solid ",";\n"])),(function(n){return n.showHistory?"0.5em":"0"}),(function(n){return n.showHistory?"35%":"0"}),(function(n){return n.theme.config.border})),f=u.ZP.button(c||(c=(0,s.Z)(["\n  position: absolute;\n  left: -6px;\n  font-size: 34px;\n  width: 10px;\n  height: 50px;\n  border-radius: 5px;\n  top: calc(50% - 50px);\n"])))},326:function(n,t,e){function r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}e.d(t,{Z:function(){return r}})},347:function(n,t,e){function r(n){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},r(n)}function i(n){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(n)}e.d(t,{Z:function(){return s}});var o=e(326);function c(n,t){if(t&&("object"===i(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(n)}function s(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,i=r(n);if(t){var o=r(this).constructor;e=Reflect.construct(i,arguments,o)}else e=i.apply(this,arguments);return c(this,e)}}},340:function(n,t,e){function r(n,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},r(n,t)}function i(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&r(n,t)}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=701.f70502fb.chunk.js.map