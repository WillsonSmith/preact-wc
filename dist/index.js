var e,t=(e=require("preact-custom-element"))&&"object"==typeof e&&"default"in e?e.default:e,r=require("preact"),n=require("preact/hooks"),o=function(){var e=n.useState(0),t=e[0],o=e[1];return r.h("div",{class:"Wrapper"},r.h("div",null,"Count: ",t),r.h("button",{onClick:function(){o(t+1)}},"Increment"))};console.log(o),t(o,"my-counter");
//# sourceMappingURL=index.js.map
