(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var e=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.button=document.querySelector(".collapse__button"),this.text=document.querySelector(".collapse__text"),this.toggle=this.toggle.bind(this),this.button.addEventListener("click",this.toggle)}var n,o;return n=e,(o=[{key:"toggle",value:function(){var t=500/(1e3/60),e=this.text;if(0===this.text.offsetHeight){this.text.style.display="block";var n=this.text.offsetHeight;this.text.style.height="0px";var o=n/t,i=0;requestAnimationFrame((function t(){i+=o,e.style.height="".concat(i,"px"),i<n&&requestAnimationFrame(t)}))}else if("block"===this.text.style.display){var r=this.text.offsetHeight,s=r/t;requestAnimationFrame((function t(){r-=s,e.style.height="".concat(r,"px"),r>=0?requestAnimationFrame(t):(e.style.height="",e.style.display="none")}))}}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.openButton=document.querySelector(".chat__open-button"),this.submitButton=document.querySelector(".chat__submit-button"),this.close=document.querySelector(".chat__close"),this.chatForm=document.querySelector(".chat__form"),this.openForm=this.openForm.bind(this),this.closeForm=this.closeForm.bind(this),this.openButton.addEventListener("click",this.openForm)}var e,o;return e=t,(o=[{key:"openForm",value:function(){this.chatForm.classList.remove("chat__form_hidden"),this.openButton.classList.add("chat__open-button_hidden"),this.close.addEventListener("click",this.closeForm)}},{key:"closeForm",value:function(){this.openButton.classList.remove("chat__open-button_hidden"),this.chatForm.classList.add("chat__form_hidden"),this.close.removeEventListener("click",this.closeForm)}}])&&n(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.likeButton=document.querySelector(".like__button"),this.likeEl=document.querySelector(".like"),this.start=this.start.bind(this),this.likeButton.addEventListener("click",this.start)}var e,n;return e=t,(n=[{key:"start",value:function(){var t=Math.floor(1+4*Math.random()),e=document.createElement("div");e.classList.add("like__picture"),e.classList.add("animation_".concat(t)),this.likeEl.appendChild(e),e.addEventListener("animationend",(function(){return e.remove()}))}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();window.onload=function(){new e,new o,new r}})();