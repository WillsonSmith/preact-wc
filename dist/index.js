var e,t,o,n=(e=require("preact-custom-element"))&&"object"==typeof e&&"default"in e?e.default:e,r=require("preact/hooks"),a=require("preact");n((t=function(){var e=r.useState(0),t=e[0],o=e[1];return a.h("div",{class:"Wrapper"},a.h("div",null,"Count: ",t),a.h("button",{onClick:function(){return o(t+1)}},"Increment"))},(o=function(e){function o(){e.apply(this,arguments)}return e&&(o.__proto__=e),(o.prototype=Object.create(e&&e.prototype)).constructor=o,o.prototype.setup=function(e){e?(this.shadow=e.attachShadow({mode:"open"}),this._component=a.render(a.h(t,this.props),this.shadow),this.shadow.innerHTML+="<style>undefined</style>"):console.warn("ShadowDOM failed to create shadow dom for "+(t.displayName||"component")+", because node was falsy.")},o.prototype.render=function(){return a.h("div",{ref:this.setup.bind(this)})},o}(a.Component)).displayName="ShadowDOM("+t.displayName+")",o),"my-counter");
//# sourceMappingURL=index.js.map