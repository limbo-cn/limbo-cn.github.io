(function(e){function t(t){for(var i,s,a=t[0],c=t[1],u=t[2],h=0,d=[];h<a.length;h++)s=a[h],r[s]&&d.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={app:0},o=[];function s(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3ca48434"}[e]+".js"}function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,i){n=r[e]=[t,i]});t.push(n[2]=i);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=s(e),o=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+i+": "+o+")");s.type=i,s.request=o,n[1](s)}r[e]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var h=0;h<c.length;h++)t(c[h]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";var i=n("5e27"),r=n.n(i);r.a},"5e27":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=(n("5c0b"),n("2877")),a={},c=Object(s["a"])(a,r,o,!1,null,null,null),u=c.exports,h=n("8c4f"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Proposal")],1)},d=[],p=n("9ab4"),m=n("60a3"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},w=[],b=(n("d0ba"),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p["b"](t,e),p["a"]([Object(m["b"])()],t.prototype,"msg",void 0),t=p["a"]([m["a"]],t),t}(m["c"])),v=b,E=v,g=Object(s["a"])(E,f,w,!1,null,"044836bc",null),T=g.exports,y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p["b"](t,e),t=p["a"]([Object(m["a"])({components:{Proposal:T}})],t),t}(m["c"]),H=y,x=H,R=Object(s["a"])(x,l,d,!1,null,null,null),M=R.exports;i["a"].use(h["a"]);var j=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:M},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),P=n("2f62");i["a"].use(P["a"]);var S=new P["a"].Store({state:{},mutations:{},actions:{}});i["a"].config.productionTip=!1,new i["a"]({router:j,store:S,render:function(e){return e(u)}}).$mount("#app")},d0ba:function(e,t){class n{constructor(){this.numHearts=1e3,this.colors={red:16764159,choco:16764108},this.extrudeSettings={amount:8,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:20,bevelThickness:20},this.mouseX=0,this.mouseY=0,this.isTweening=!1,this.init()}init(){this.setup(),this.makeLove(),this.bindEvents(),this.animate()}setup(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),document.body.appendChild(this.renderer.domElement),this.scene=new THREE.Scene,this.scene.background=new THREE.Color(this.colors.red),this.scene.fog=new THREE.FogExp2(this.colors.red,.002);let e=60,t=window.innerWidth/window.innerHeight,n=1,i=1e3;this.camera=new THREE.PerspectiveCamera(e,t,n,i),this.camera.position.x=2e3,this.camera.position.y=2e3,this.camera.position.z=2e3,this.camera.lookAt(new THREE.Vector3)}appearScene(){this.renderer.domElement.style.opacity=1}makeLove(){this.makeHeartsAtmosphere(),this.makeLights(),this.makeTweenEntry()}makeHeartsAtmosphere(){let e=new THREE.Object3D;this.scene.add(e);let t=new THREE.Shape;t.moveTo(25,25),t.bezierCurveTo(25,25,20,0,0,0),t.bezierCurveTo(-30,0,-30,35,-30,35),t.bezierCurveTo(-30,55,-10,77,25,95),t.bezierCurveTo(60,77,80,55,80,35),t.bezierCurveTo(80,35,80,0,50,0),t.bezierCurveTo(35,0,25,25,25,25);let n=new THREE.ExtrudeGeometry(t,this.extrudeSettings),i=new THREE.MeshPhongMaterial({color:this.colors.choco,flatShading:!0});for(let r=0;r<this.numHearts;r++){let t=new THREE.Mesh(n,i);t.position.set(1e3*(Math.random()-.5),1e3*(Math.random()-.5),1e3*(Math.random()-.5)),t.scale.set(.5,.5,.5),t.rotation.x=Math.PI,t.rotation.y=Math.random()*Math.PI,e.add(t)}}makeLights(){let e=new THREE.DirectionalLight(16777215);e.position.set(1,1,1),this.scene.add(e);let t=new THREE.DirectionalLight(8840);t.position.set(-1,-1,-1),this.scene.add(t);let n=new THREE.AmbientLight(this.colors.choco,.1);this.scene.add(n)}makeTweenEntry(){this.isTweening=!0,this.appearScene(),new TWEEN.Tween(this.camera.position).to({x:0,y:0,z:100},8e3).easing(TWEEN.Easing.Quintic.Out).delay(2e3).onComplete(()=>this.isTweening=!1).start()}animate(){this.renderer.render(this.scene,this.camera),TWEEN.update(),this.camera.position.x+=.01*(this.mouseX-this.camera.position.x),this.camera.position.y+=.01*(-this.mouseY-this.camera.position.y),this.camera.lookAt(this.scene.position),window.requestAnimationFrame(this.animate.bind(this))}bindEvents(){window.addEventListener("resize",this.onWindowResize.bind(this),!1),document.addEventListener("mousemove",this.onDocumentMouseMove.bind(this),!1)}onWindowResize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}onDocumentMouseMove(e){this.isTweening||(this.mouseX=e.clientX-window.innerWidth/2,this.mouseY=e.clientY-window.innerHeight/2)}}new n}});
//# sourceMappingURL=app.6eeb3cf2.js.map