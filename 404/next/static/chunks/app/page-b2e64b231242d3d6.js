(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4743:function(t,e,n){Promise.resolve().then(n.bind(n,7709)),Promise.resolve().then(n.bind(n,702)),Promise.resolve().then(n.t.bind(n,413,23)),Promise.resolve().then(n.t.bind(n,8326,23))},7709:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var r=n(7437),i=n(2265),o=n(1396),a=n.n(o);let s=[{title:"Home",path:"/"},{title:"Projects",path:"/projects"},{title:"Contact",path:"/contact"}];function c(){let[t,e]=(0,i.useState)(!1);return(0,i.useEffect)(()=>function(){document.body.style.overflow=""},[]),(0,r.jsxs)("nav",{children:[(0,r.jsxs)("div",{className:"w-full justify-between flex items-center ".concat(t&&"bg-bg"," p-5"),style:{zIndex:101},children:[(0,r.jsx)("li",{className:"list-none font-bold text-lg",children:(0,r.jsx)(a(),{href:"/",children:(0,r.jsxs)("span",{className:"font-black text-xl flex items-center",children:[(0,r.jsx)("img",{alt:"Mitesh Tagadiya",className:"mr-3",src:"".concat("./","static/logos/logo_no_text.png"),width:"60"}),"Mitesh Tagadiya".split("").map((t,e)=>(0,r.jsx)("span",{className:"hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim",children:t},e))]})})}),(0,r.jsxs)("button",{className:"burger visible md:hidden","aria-label":"Toggle menu",type:"button",onClick:function(){t?(e(!1),document.body.style.overflow=""):(e(!0),document.body.style.overflow="hidden")},children:[(0,r.jsx)(u,{"data-hide":t}),(0,r.jsx)(l,{"data-hide":!t})]})]}),t&&(0,r.jsx)("ul",{className:"menu flex flex-col absolute bg-bg\n            ".concat(t&&"menuRendered"),children:s.map((t,e)=>(0,r.jsx)("li",{className:"border-b border-gray-900 text-gray-100 text-sm font-semibold",style:{transitionDelay:"".concat(150+25*e,"ms")},children:(0,r.jsx)(a(),{href:t.path,children:(0,r.jsx)("p",{className:"flex w-auto pb-4",children:t.title})})},t.title))})]})}function u(t){return(0,r.jsxs)("svg",{className:"h-5 w-5 absolute text-gray-100",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",...t,children:[(0,r.jsx)("path",{d:"M2.5 7.5H17.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M2.5 12.5H17.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function l(t){return(0,r.jsxs)("svg",{className:"h-5 w-5 absolute text-gray-100",viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",...t,children:[(0,r.jsx)("path",{d:"M18 6L6 18"}),(0,r.jsx)("path",{d:"M6 6l12 12"})]})}},702:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var r=n(7437),i=n(2265);let o=({children:t,selector:e,smooth:n=!0,style:r={},alignToTop:o=!1,className:a="",onClick:s,scrollOptions:c={}})=>{let u=()=>{var t;let r=Object.assign({behavior:n?"smooth":"auto"},"object"!=typeof c?{}:Object.entries(c).reduce((t,[e,n])=>{switch(e){case"behavior":"auto"!==n&&"smooth"!==n||(t[e]=n);case"block":case"inline":"start"!==n&&"center"!==n&&"end"!==n&&"nearest"!==n||(t[e]=n)}return t},{}));o&&(r.block="start",r.inline="nearest"),null===(t=document.querySelector(e))||void 0===t||t.scrollIntoView(r)};return i.createElement("div",{style:r,className:a,onClick:t=>{if("function"==typeof s)return s(t),void setTimeout(u,1e3/60);u()}},t)};var a=n(6393),s=n.n(a),c=function(){let[t,e]=i.useState(!1);return(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsx)(s(),{width:1200,numberOfPieces:400,recycle:!1,gravity:.3,height:window.innerHeight}),(0,r.jsx)(o,{selector:"#main-section",children:(0,r.jsx)("div",{onClick:t=>{t.preventDefault(),e(!0)},className:"cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors",children:"Tell me more"})})]})}},6393:function(t,e,n){var r;"undefined"!=typeof self&&self,t.exports=(r=n(2265),function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,(function(e){return t[e]}).bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=r},function(t,e,n){"use strict";var r={linear:function(t,e,n,r){return(n-e)*t/r+e},easeInQuad:function(t,e,n,r){return(n-e)*(t/=r)*t+e},easeOutQuad:function(t,e,n,r){return-(n-e)*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,r){return(n-e)*(t/=r)*t*t+e},easeOutCubic:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,n,r){return-(n-e)*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,r){var i=n-e;return-i*Math.cos(t/r*(Math.PI/2))+i+e},easeOutSine:function(t,e,n,r){return(n-e)*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,n,r){return-(n-e)/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,n,r){return 0==t?e:(n-e)*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,n,r){var i=n-e;return t==r?e+i:i*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,n,r){var i=n-e;return 0===t?e:t===r?e+i:(t/=r/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,n,r){return-(n-e)*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,n,r){return(n-e)*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,r){var i,o,a,s=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+s:(o=0,o=.3*r,(i=s)<Math.abs(s)?(i=s,a=o/4):a=o/(2*Math.PI)*Math.asin(s/i),-i*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)+e)},easeOutElastic:function(t,e,n,r){var i,o,a,s=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+s:(o=0,o=.3*r,(i=s)<Math.abs(s)?(i=s,a=o/4):a=o/(2*Math.PI)*Math.asin(s/i),i*Math.pow(2,-10*t)*Math.sin((t*r-a)*(2*Math.PI)/o)+s+e)},easeInOutElastic:function(t,e,n,r){var i,o,a,s=n-e;return a=1.70158,0===t?e:2==(t/=r/2)?e+s:(o=0,o=r*(.3*1.5),(i=s)<Math.abs(s)?(i=s,a=o/4):a=o/(2*Math.PI)*Math.asin(s/i),t<1?-(i*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*.5)+e:i*Math.pow(2,-10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*.5+s+e)},easeInBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*(t/=r)*t*((i+1)*t-i)+e},easeOutBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*((t=t/r-1)*t*((i+1)*t+i)+1)+e},easeInOutBack:function(t,e,n,r,i){var o=n-e;return void 0===i&&(i=1.70158),(t/=r/2)<1?o/2*(t*t*((1+(i*=1.525))*t-i))+e:o/2*((t-=2)*t*((1+(i*=1.525))*t+i)+2)+e},easeInBounce:function(t,e,n,i){var o=n-e;return o-r.easeOutBounce(i-t,0,o,i)+e},easeOutBounce:function(t,e,n,r){var i=n-e;return(t/=r)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,i){var o=n-e;return t<i/2?.5*r.easeInBounce(2*t,0,o,i)+e:.5*r.easeOutBounce(2*t-i,0,o,i)+.5*o+e}};t.exports=r},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e),n.d(e,"ReactConfetti",function(){return B});var r,i,o,a,s=n(0),c=n.n(s),u=n(1),l=n.n(u);function h(t,e){return t+Math.random()*(e-t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}(r=o||(o={}))[r.Circle=0]="Circle",r[r.Square=1]="Square",r[r.Strip=2]="Strip",(i=a||(a={}))[i.Positive=1]="Positive",i[i.Negative=-1]="Negative";var d=function(){var t,e;function n(t,e,r,i){(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,n),p(this,"context",void 0),p(this,"radius",void 0),p(this,"x",void 0),p(this,"y",void 0),p(this,"w",void 0),p(this,"h",void 0),p(this,"vx",void 0),p(this,"vy",void 0),p(this,"shape",void 0),p(this,"angle",void 0),p(this,"angularSpin",void 0),p(this,"color",void 0),p(this,"rotateY",void 0),p(this,"rotationDirection",void 0),p(this,"getOptions",void 0),this.getOptions=e;var o=this.getOptions(),s=o.colors,c=o.initialVelocityX,u=o.initialVelocityY;this.context=t,this.x=r,this.y=i,this.w=h(5,20),this.h=h(5,20),this.radius=h(5,10),this.vx="number"==typeof c?h(-c,c):h(c.min,c.max),this.vy="number"==typeof u?h(-u,0):h(u.min,u.max),this.shape=Math.floor(0+3*Math.random()),this.angle=h(0,360)*Math.PI/180,this.angularSpin=h(-.2,.2),this.color=s[Math.floor(Math.random()*s.length)],this.rotateY=h(0,1),this.rotationDirection=h(0,1)?a.Positive:a.Negative}return t=[{key:"update",value:function(){var t=this.getOptions(),e=t.gravity,n=t.wind,r=t.friction,i=t.opacity,s=t.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=e,this.vx+=n,this.vx*=r,this.vy*=r,this.rotateY>=1&&this.rotationDirection===a.Positive?this.rotationDirection=a.Negative:this.rotateY<=-1&&this.rotationDirection===a.Negative&&(this.rotationDirection=a.Positive);var c=.1*this.rotationDirection;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=i,this.context.lineCap="round",this.context.lineWidth=2,s&&"function"==typeof s)s.call(this,this.context);else switch(this.shape){case o.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case o.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case o.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}],f(n.prototype,t),e&&f(n,e),n}();function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=function t(e,n){var r=this;(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,t),v(this,"canvas",void 0),v(this,"context",void 0),v(this,"getOptions",void 0),v(this,"x",0),v(this,"y",0),v(this,"w",0),v(this,"h",0),v(this,"lastNumberOfPieces",0),v(this,"tweenInitTime",Date.now()),v(this,"particles",[]),v(this,"particlesGenerated",0),v(this,"removeParticleAt",function(t){r.particles.splice(t,1)}),v(this,"getParticle",function(){var t=h(r.x,r.w+r.x),e=h(r.y,r.h+r.y);return new d(r.context,r.getOptions,t,e)}),v(this,"animate",function(){var t=r.canvas,e=r.context,n=r.particlesGenerated,i=r.lastNumberOfPieces,o=r.getOptions(),a=o.run,s=o.recycle,c=o.numberOfPieces,u=o.debug,l=o.tweenFunction,h=o.tweenDuration;if(!a)return!1;var f=r.particles.length,p=s?f:n,d=Date.now();if(p<c){i!==c&&(r.tweenInitTime=d,r.lastNumberOfPieces=c);for(var v=r.tweenInitTime,b=l(d-v>h?h:Math.max(0,d-v),p,c,h),y=Math.round(b-p),g=0;g<y;g++)r.particles.push(r.getParticle());r.particlesGenerated+=y}return u&&(e.font="12px sans-serif",e.fillStyle="#333",e.textAlign="right",e.fillText("Particles: ".concat(f),t.width-10,t.height-20)),r.particles.forEach(function(e,n){e.update(),(e.y>t.height||e.y<-100||e.x>t.width+100||e.x<-100)&&(s&&p<=c?r.particles[n]=r.getParticle():r.removeParticleAt(n))}),f>0||p<c}),this.canvas=e;var i=this.canvas.getContext("2d");if(!i)throw Error("Could not get canvas context");this.context=i,this.getOptions=n};function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach(function(e){x(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O={width:"undefined"!=typeof window?window.innerWidth:300,height:"undefined"!=typeof window?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:l.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},w=function(){var t;function e(t,n){var r=this;(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,e),x(this,"canvas",void 0),x(this,"context",void 0),x(this,"_options",void 0),x(this,"generator",void 0),x(this,"rafId",void 0),x(this,"setOptionsWithDefaults",function(t){var e={confettiSource:{x:0,y:0,w:r.canvas.width,h:0}};r._options=g(g(g({},e),O),t),Object.assign(r,t.confettiSource)}),x(this,"update",function(){var t=r.options,e=t.run,n=t.onConfettiComplete,i=r.canvas,o=r.context;e&&(o.fillStyle="white",o.clearRect(0,0,i.width,i.height)),r.generator.animate()?r.rafId=requestAnimationFrame(r.update):(n&&"function"==typeof n&&r.generator.particlesGenerated>0&&n.call(r,r),r._options.run=!1)}),x(this,"reset",function(){r.generator&&r.generator.particlesGenerated>0&&(r.generator.particlesGenerated=0,r.generator.particles=[],r.generator.lastNumberOfPieces=0)}),x(this,"stop",function(){r.options={run:!1},r.rafId&&(cancelAnimationFrame(r.rafId),r.rafId=void 0)}),this.canvas=t;var i=this.canvas.getContext("2d");if(!i)throw Error("Could not get canvas context");this.context=i,this.generator=new b(this.canvas,function(){return r.options}),this.options=n,this.update()}return m(e.prototype,[{key:"options",get:function(){return this._options},set:function(t){var e=this._options&&this._options.run,n=this._options&&this._options.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),"boolean"==typeof t.recycle&&t.recycle&&!1===n&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),"boolean"==typeof t.run&&t.run&&!1===e&&this.update()}}]),t&&m(e,t),e}();function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(){return(P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach(function(e){N(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function S(t,e){if(t){if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function N(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var T=c.a.createRef(),A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(o,t);var e,n,r,i=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n,r=D(o);if(e){var i=D(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(t=n)&&("object"===j(t)||"function"==typeof t)?t:_(this)});function o(t){var e;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,o);for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return N(_(e=i.call.apply(i,[this,t].concat(r))),"canvas",c.a.createRef()),N(_(e),"confetti",void 0),e.canvas=t.canvasRef||T,e}return n=[{key:"componentDidMount",value:function(){if(this.canvas.current){var t=R(this.props)[0];this.confetti=new w(this.canvas.current,t)}}},{key:"componentDidUpdate",value:function(){var t=R(this.props)[0];this.confetti&&(this.confetti.options=t)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var t,e=function(t){if(Array.isArray(t))return t}(t=R(this.props))||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}(t,2)||S(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=e[0],r=e[1],i=I({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},r.style);return c.a.createElement("canvas",P({width:n.width,height:n.height,ref:this.canvas},r,{style:i}))}}],C(o.prototype,n),r&&C(o,r),o}(s.Component);function R(t){var e,n={},r={},i=[].concat(function(t){if(Array.isArray(t))return k(t)}(e=Object.keys(O))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(e)||S(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),["confettiSource","drawShape","onConfettiComplete"]),o=["canvasRef"];for(var a in t){var s=t[a];i.includes(a)?n[a]=s:o.includes(a)?o[a]=s:r[a]=s}return[n,r,{}]}N(A,"defaultProps",I({},O)),N(A,"displayName","ReactConfetti");var B=c.a.forwardRef(function(t,e){return c.a.createElement(A,P({canvasRef:e},t))});e.default=B}]).default)}},function(t){t.O(0,[176,413,971,472,744],function(){return t(t.s=4743)}),_N_E=t.O()}]);