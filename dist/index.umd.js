!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("preact-custom-element"),require("preact/hooks"),require("preact")):"function"==typeof define&&define.amd?define(["preact-custom-element","preact/hooks","preact"],t):t(e.register,e.hooks,e.preact)}(this,function(e,t,o){var n,r;(e=e&&e.hasOwnProperty("default")?e.default:e)((n=function(){var e=t.useState(0),n=e[0],r=e[1];return o.h("div",{class:"Wrapper"},o.h("div",null,"Count: ",n),o.h("button",{onClick:function(){return r(n+1)}},"Increment"))},(r=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.setup=function(e){e?(this.shadow=e.attachShadow({mode:"open"}),this._component=o.render(o.h(n,this.props),this.shadow),this.shadow.innerHTML+="<style>undefined</style>"):console.warn("ShadowDOM failed to create shadow dom for "+(n.displayName||"component")+", because node was falsy.")},t.prototype.render=function(){return o.h("div",{ref:this.setup.bind(this)})},t}(o.Component)).displayName="ShadowDOM("+n.displayName+")",r),"my-counter")});
//# sourceMappingURL=index.umd.js.map
