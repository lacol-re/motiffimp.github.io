/*!For license information please see 819.2a78df511cb54319b41b.js.LICENSE.txt*/"use strict";(self.webpackChunkvimcosmo=self.webpackChunkvimcosmo||[]).push([[819],{1819:(t,e,r)=>{r.d(e,{_Z:()=>Pt});var s,n,i,a,o,p,f,l,h=r(3513),c={},u=180/Math.PI,g=Math.PI/180,d=Math.atan2,m=/([A-Z])/g,y=/(left|right|width|margin|padding|x)/i,x=/[\s,\(]\S/,v={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},b=function(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},O=function(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},w=function(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)},_=function(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)},P=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},M=function(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)},F=function(t,e,r){return t.style[e]=r},C=function(t,e,r){return t.style.setProperty(e,r)},S=function(t,e,r){return t._gsap[e]=r},A=function(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r},B=function(t,e,r,s,n){var i=t._gsap;i.scaleX=i.scaleY=r,i.renderTransform(n,i)},Y=function(t,e,r,s,n){var i=t._gsap;i[e]=r,i.renderTransform(n,i)},k="transform",X=k+"Origin",T=function(t,e){var r=this,s=this.target,n=s.style;if(t in c){if(this.tfm=this.tfm||{},"transform"!==t&&(~(t=v[t]||t).indexOf(",")?t.split(",").forEach((function(t){return r.tfm[t]=K(s,t)})):this.tfm[t]=s._gsap.x?s._gsap[t]:K(s,t)),this.props.indexOf(k)>=0)return;s._gsap.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(X,e,"")),t=k}(n||e)&&this.props.push(t,e,n[t])},z=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},E=function(){var t,e,r=this.props,s=this.target,n=s.style,i=s._gsap;for(t=0;t<r.length;t+=3)r[t+1]?s[r[t]]=r[t+2]:r[t+2]?n[r[t]]=r[t+2]:n.removeProperty(r[t].replace(m,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)i[e]=this.tfm[e];i.svg&&(i.renderTransform(),s.setAttribute("data-svg-origin",this.svgo||"")),!(t=f())||t.isStart||n[k]||(z(n),i.uncache=1)}},W=function(t,e){var r={target:t,props:[],revert:E,save:T};return e&&e.split(",").forEach((function(t){return r.save(t)})),r},I=function(t,e){var r=n.createElementNS?n.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):n.createElement(t);return r.style?r:n.createElement(t)},N=function t(e,r,s){var n=getComputedStyle(e);return n[r]||n.getPropertyValue(r.replace(m,"-$1").toLowerCase())||n.getPropertyValue(r)||!s&&t(e,V(r)||r,1)||""},D="O,Moz,ms,Ms,Webkit".split(","),V=function(t,e,r){var s=(e||o).style,n=5;if(t in s&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(D[n]+t in s););return n<0?null:(3===n?"ms":n>=0?D[n]:"")+t},q=function(){"undefined"!=typeof window&&window.document&&(s=window,n=s.document,i=n.documentElement,o=I("div")||{style:{}},I("div"),k=V(k),X=k+"Origin",o.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",l=!!V("perspective"),f=h.p8.core.reverting,a=1)},G=function t(e){var r,s=I("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,a=this.nextSibling,o=this.style.cssText;if(i.appendChild(s),s.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch(t){}else this._gsapBBox&&(r=this._gsapBBox());return n&&(a?n.insertBefore(this,a):n.appendChild(this)),i.removeChild(s),this.style.cssText=o,r},j=function(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])},L=function(t){var e;try{e=t.getBBox()}catch(r){e=G.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===G||(e=G.call(t,!0)),!e||e.width||e.x||e.y?e:{x:+j(t,["x","cx","x1"])||0,y:+j(t,["y","cy","y1"])||0,width:0,height:0}},Z=function(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!L(t))},R=function(t,e){if(e){var r=t.style;e in c&&e!==X&&(e=k),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(m,"-$1").toLowerCase())):r.removeAttribute(e)}},$=function(t,e,r,s,n,i){var a=new h.Fo(t._pt,e,r,0,1,i?M:P);return t._pt=a,a.b=s,a.e=n,t._props.push(r),a},H={deg:1,rad:1,turn:1},U={grid:1,flex:1},J=function t(e,r,s,i){var a,p,f,l,u=parseFloat(s)||0,g=(s+"").trim().substr((u+"").length)||"px",d=o.style,m=y.test(r),x="svg"===e.tagName.toLowerCase(),v=(x?"client":"offset")+(m?"Width":"Height"),b=100,O="px"===i,w="%"===i;return i===g||!u||H[i]||H[g]?u:("px"!==g&&!O&&(u=t(e,r,s,"px")),l=e.getCTM&&Z(e),!w&&"%"!==g||!c[r]&&!~r.indexOf("adius")?(d[m?"width":"height"]=b+(O?g:i),p=~r.indexOf("adius")||"em"===i&&e.appendChild&&!x?e:e.parentNode,l&&(p=(e.ownerSVGElement||{}).parentNode),p&&p!==n&&p.appendChild||(p=n.body),(f=p._gsap)&&w&&f.width&&m&&f.time===h.xr.time&&!f.uncache?(0,h.Pr)(u/f.width*b):((w||"%"===g)&&!U[N(p,"display")]&&(d.position=N(e,"position")),p===e&&(d.position="static"),p.appendChild(o),a=o[v],p.removeChild(o),d.position="absolute",m&&w&&((f=(0,h.DY)(p)).time=h.xr.time,f.width=p[v]),(0,h.Pr)(O?a*u/b:a&&u?b/a*u:0))):(a=l?e.getBBox()[m?"width":"height"]:e[v],(0,h.Pr)(w?u/a*b:u/100*a)))},K=function(t,e,r,s){var n;return a||q(),e in v&&"transform"!==e&&~(e=v[e]).indexOf(",")&&(e=e.split(",")[0]),c[e]&&"transform"!==e?(n=ft(t,s),n="transformOrigin"!==e?n[e]:n.svg?n.origin:lt(N(t,X))+" "+n.zOrigin+"px"):(!(n=t.style[e])||"auto"===n||s||~(n+"").indexOf("calc("))&&(n=rt[e]&&rt[e](t,e,r)||N(t,e)||(0,h.Ok)(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?J(t,e,n,r)+r:n},Q=function(t,e,r,s){if(!r||"none"===r){var n=V(e,t,1),i=n&&N(t,n,1);i&&i!==r?(e=n,r=i):"borderColor"===e&&(r=N(t,"borderTopColor"))}var a,o,p,f,l,c,u,g,d,m,y,x=new h.Fo(this._pt,t.style,e,0,1,h.Ks),v=0,b=0;if(x.b=r,x.e=s,r+="","auto"===(s+="")&&(t.style[e]=s,s=N(t,e)||s,t.style[e]=r),a=[r,s],(0,h.kr)(a),s=a[1],p=(r=a[0]).match(h.d4)||[],(s.match(h.d4)||[]).length){for(;o=h.d4.exec(s);)u=o[0],d=s.substring(v,o.index),l?l=(l+1)%5:"rgba("!==d.substr(-5)&&"hsla("!==d.substr(-5)||(l=1),u!==(c=p[b++]||"")&&(f=parseFloat(c)||0,y=c.substr((f+"").length),"="===u.charAt(1)&&(u=(0,h.cy)(f,u)+y),g=parseFloat(u),m=u.substr((g+"").length),v=h.d4.lastIndex-m.length,m||(m=m||h.Fc.units[e]||y,v===s.length&&(s+=m,x.e+=m)),y!==m&&(f=J(t,e,c,m)||0),x._pt={_next:x._pt,p:d||1===b?d:",",s:f,c:g-f,m:l&&l<4||"zIndex"===e?Math.round:0});x.c=v<s.length?s.substring(v,s.length):""}else x.r="display"===e&&"none"===s?M:P;return h.bQ.test(s)&&(x.e=0),this._pt=x,x},tt={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},et=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,s,n,i=e.t,a=i.style,o=e.u,p=i._gsap;if("all"===o||!0===o)a.cssText="",s=1;else for(n=(o=o.split(",")).length;--n>-1;)r=o[n],c[r]&&(s=1,r="transformOrigin"===r?X:k),R(i,r);s&&(R(i,k),p&&(p.svg&&i.removeAttribute("transform"),ft(i,1),p.uncache=1,z(a)))}},rt={clearProps:function(t,e,r,s,n){if("isFromStart"!==n.data){var i=t._pt=new h.Fo(t._pt,e,r,0,0,et);return i.u=s,i.pr=-10,i.tween=n,t._props.push(r),1}}},st=[1,0,0,1,0,0],nt={},it=function(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t},at=function(t){var e=N(t,k);return it(e)?st:e.substr(7).match(h.SI).map(h.Pr)},ot=function(t,e){var r,s,n,a,o=t._gsap||(0,h.DY)(t),p=t.style,f=at(t);return o.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(f=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?st:f:(f!==st||t.offsetParent||t===i||o.svg||(n=p.display,p.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,s=t.nextElementSibling,i.appendChild(t)),f=at(t),n?p.display=n:R(t,"display"),a&&(s?r.insertBefore(t,s):r?r.appendChild(t):i.removeChild(t))),e&&f.length>6?[f[0],f[1],f[4],f[5],f[12],f[13]]:f)},pt=function(t,e,r,s,n,i){var a,o,p,f=t._gsap,l=n||ot(t,!0),h=f.xOrigin||0,c=f.yOrigin||0,u=f.xOffset||0,g=f.yOffset||0,d=l[0],m=l[1],y=l[2],x=l[3],v=l[4],b=l[5],O=e.split(" "),w=parseFloat(O[0])||0,_=parseFloat(O[1])||0;r?l!==st&&(o=d*x-m*y)&&(p=w*(-m/o)+_*(d/o)-(d*b-m*v)/o,w=w*(x/o)+_*(-y/o)+(y*b-x*v)/o,_=p):(w=(a=L(t)).x+(~O[0].indexOf("%")?w/100*a.width:w),_=a.y+(~(O[1]||O[0]).indexOf("%")?_/100*a.height:_)),s||!1!==s&&f.smooth?(v=w-h,b=_-c,f.xOffset=u+(v*d+b*y)-v,f.yOffset=g+(v*m+b*x)-b):f.xOffset=f.yOffset=0,f.xOrigin=w,f.yOrigin=_,f.smooth=!!s,f.origin=e,f.originIsAbsolute=!!r,t.style[X]="0px 0px",i&&($(i,f,"xOrigin",h,w),$(i,f,"yOrigin",c,_),$(i,f,"xOffset",u,f.xOffset),$(i,f,"yOffset",g,f.yOffset)),t.setAttribute("data-svg-origin",w+" "+_)},ft=function(t,e){var r=t._gsap||new h.l1(t);if("x"in r&&!e&&!r.uncache)return r;var s,n,i,a,o,p,f,c,m,y,x,v,b,O,w,_,P,M,F,C,S,A,B,Y,T,z,E,W,I,D,V,q,G=t.style,j=r.scaleX<0,L="px",R="deg",$=getComputedStyle(t),H=N(t,X)||"0";return s=n=i=p=f=c=m=y=x=0,a=o=1,r.svg=!(!t.getCTM||!Z(t)),$.translate&&("none"===$.translate&&"none"===$.scale&&"none"===$.rotate||(G[k]=("none"!==$.translate?"translate3d("+($.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==$.rotate?"rotate("+$.rotate+") ":"")+("none"!==$.scale?"scale("+$.scale.split(" ").join(",")+") ":"")+("none"!==$[k]?$[k]:"")),G.scale=G.rotate=G.translate="none"),O=ot(t,r.svg),r.svg&&(r.uncache?(T=t.getBBox(),H=r.xOrigin-T.x+"px "+(r.yOrigin-T.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),pt(t,Y||H,!!Y||r.originIsAbsolute,!1!==r.smooth,O)),v=r.xOrigin||0,b=r.yOrigin||0,O!==st&&(M=O[0],F=O[1],C=O[2],S=O[3],s=A=O[4],n=B=O[5],6===O.length?(a=Math.sqrt(M*M+F*F),o=Math.sqrt(S*S+C*C),p=M||F?d(F,M)*u:0,(m=C||S?d(C,S)*u+p:0)&&(o*=Math.abs(Math.cos(m*g))),r.svg&&(s-=v-(v*M+b*C),n-=b-(v*F+b*S))):(q=O[6],D=O[7],E=O[8],W=O[9],I=O[10],V=O[11],s=O[12],n=O[13],i=O[14],f=(w=d(q,I))*u,w&&(Y=A*(_=Math.cos(-w))+E*(P=Math.sin(-w)),T=B*_+W*P,z=q*_+I*P,E=A*-P+E*_,W=B*-P+W*_,I=q*-P+I*_,V=D*-P+V*_,A=Y,B=T,q=z),c=(w=d(-C,I))*u,w&&(_=Math.cos(-w),V=S*(P=Math.sin(-w))+V*_,M=Y=M*_-E*P,F=T=F*_-W*P,C=z=C*_-I*P),p=(w=d(F,M))*u,w&&(Y=M*(_=Math.cos(w))+F*(P=Math.sin(w)),T=A*_+B*P,F=F*_-M*P,B=B*_-A*P,M=Y,A=T),f&&Math.abs(f)+Math.abs(p)>359.9&&(f=p=0,c=180-c),a=(0,h.Pr)(Math.sqrt(M*M+F*F+C*C)),o=(0,h.Pr)(Math.sqrt(B*B+q*q)),w=d(A,B),m=Math.abs(w)>2e-4?w*u:0,x=V?1/(V<0?-V:V):0),r.svg&&(Y=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!it(N(t,k)),Y&&t.setAttribute("transform",Y))),Math.abs(m)>90&&Math.abs(m)<270&&(j?(a*=-1,m+=p<=0?180:-180,p+=p<=0?180:-180):(o*=-1,m+=m<=0?180:-180)),e=e||r.uncache,r.x=s-((r.xPercent=s&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-s)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+L,r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+L,r.z=i+L,r.scaleX=(0,h.Pr)(a),r.scaleY=(0,h.Pr)(o),r.rotation=(0,h.Pr)(p)+R,r.rotationX=(0,h.Pr)(f)+R,r.rotationY=(0,h.Pr)(c)+R,r.skewX=m+R,r.skewY=y+R,r.transformPerspective=x+L,(r.zOrigin=parseFloat(H.split(" ")[2])||0)&&(G[X]=lt(H)),r.xOffset=r.yOffset=0,r.force3D=h.Fc.force3D,r.renderTransform=r.svg?yt:l?mt:ct,r.uncache=0,r},lt=function(t){return(t=t.split(" "))[0]+" "+t[1]},ht=function(t,e,r){var s=(0,h.Wy)(e);return(0,h.Pr)(parseFloat(e)+parseFloat(J(t,"x",r+"px",s)))+s},ct=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,mt(t,e)},ut="0deg",gt="0px",dt=") ",mt=function(t,e){var r=e||this,s=r.xPercent,n=r.yPercent,i=r.x,a=r.y,o=r.z,p=r.rotation,f=r.rotationY,l=r.rotationX,h=r.skewX,c=r.skewY,u=r.scaleX,d=r.scaleY,m=r.transformPerspective,y=r.force3D,x=r.target,v=r.zOrigin,b="",O="auto"===y&&t&&1!==t||!0===y;if(v&&(l!==ut||f!==ut)){var w,_=parseFloat(f)*g,P=Math.sin(_),M=Math.cos(_);_=parseFloat(l)*g,w=Math.cos(_),i=ht(x,i,P*w*-v),a=ht(x,a,-Math.sin(_)*-v),o=ht(x,o,M*w*-v+v)}m!==gt&&(b+="perspective("+m+dt),(s||n)&&(b+="translate("+s+"%, "+n+"%) "),(O||i!==gt||a!==gt||o!==gt)&&(b+=o!==gt||O?"translate3d("+i+", "+a+", "+o+") ":"translate("+i+", "+a+dt),p!==ut&&(b+="rotate("+p+dt),f!==ut&&(b+="rotateY("+f+dt),l!==ut&&(b+="rotateX("+l+dt),h===ut&&c===ut||(b+="skew("+h+", "+c+dt),1===u&&1===d||(b+="scale("+u+", "+d+dt),x.style[k]=b||"translate(0, 0)"},yt=function(t,e){var r,s,n,i,a,o=e||this,p=o.xPercent,f=o.yPercent,l=o.x,c=o.y,u=o.rotation,d=o.skewX,m=o.skewY,y=o.scaleX,x=o.scaleY,v=o.target,b=o.xOrigin,O=o.yOrigin,w=o.xOffset,_=o.yOffset,P=o.forceCSS,M=parseFloat(l),F=parseFloat(c);u=parseFloat(u),d=parseFloat(d),(m=parseFloat(m))&&(d+=m=parseFloat(m),u+=m),u||d?(u*=g,d*=g,r=Math.cos(u)*y,s=Math.sin(u)*y,n=Math.sin(u-d)*-x,i=Math.cos(u-d)*x,d&&(m*=g,a=Math.tan(d-m),n*=a=Math.sqrt(1+a*a),i*=a,m&&(a=Math.tan(m),r*=a=Math.sqrt(1+a*a),s*=a)),r=(0,h.Pr)(r),s=(0,h.Pr)(s),n=(0,h.Pr)(n),i=(0,h.Pr)(i)):(r=y,i=x,s=n=0),(M&&!~(l+"").indexOf("px")||F&&!~(c+"").indexOf("px"))&&(M=J(v,"x",l,"px"),F=J(v,"y",c,"px")),(b||O||w||_)&&(M=(0,h.Pr)(M+b-(b*r+O*n)+w),F=(0,h.Pr)(F+O-(b*s+O*i)+_)),(p||f)&&(a=v.getBBox(),M=(0,h.Pr)(M+p/100*a.width),F=(0,h.Pr)(F+f/100*a.height)),a="matrix("+r+","+s+","+n+","+i+","+M+","+F+")",v.setAttribute("transform",a),P&&(v.style[k]=a)},xt=function(t,e,r,s,n){var i,a,o=360,p=(0,h.r9)(n),f=parseFloat(n)*(p&&~n.indexOf("rad")?u:1)-s,l=s+f+"deg";return p&&("short"===(i=n.split("_")[1])&&(f%=o)!==f%180&&(f+=f<0?o:-360),"cw"===i&&f<0?f=(f+36e9)%o-~~(f/o)*o:"ccw"===i&&f>0&&(f=(f-36e9)%o-~~(f/o)*o)),t._pt=a=new h.Fo(t._pt,e,r,s,f,O),a.e=l,a.u="deg",t._props.push(r),a},vt=function(t,e){for(var r in e)t[r]=e[r];return t},bt=function(t,e,r){var s,n,i,a,o,p,f,l=vt({},r._gsap),u=r.style;for(n in l.svg?(i=r.getAttribute("transform"),r.setAttribute("transform",""),u[k]=e,s=ft(r,1),R(r,k),r.setAttribute("transform",i)):(i=getComputedStyle(r)[k],u[k]=e,s=ft(r,1),u[k]=i),c)(i=l[n])!==(a=s[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=(0,h.Wy)(i)!==(f=(0,h.Wy)(a))?J(r,n,i,f):parseFloat(i),p=parseFloat(a),t._pt=new h.Fo(t._pt,s,n,o,p-o,b),t._pt.u=f||0,t._props.push(n));vt(s,l)};(0,h.fS)("padding,margin,Width,Radius",(function(t,e){var r="Top",s="Right",n="Bottom",i="Left",a=(e<3?[r,s,n,i]:[r+i,r+s,n+s,n+i]).map((function(r){return e<2?t+r:"border"+r+t}));rt[e>1?"border"+t:t]=function(t,e,r,s,n){var i,o;if(arguments.length<4)return i=a.map((function(e){return K(t,e,r)})),5===(o=i.join(" ")).split(i[0]).length?i[0]:o;i=(s+"").split(" "),o={},a.forEach((function(t,e){return o[t]=i[e]=i[e]||i[(e-1)/2|0]})),t.init(e,o,n)}}));var Ot,wt,_t,Pt={name:"css",register:q,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,r,s,n){var i,o,p,f,l,u,g,d,m,y,O,P,M,F,C,S,A,B,Y,T,z=this._props,E=t.style,I=r.vars.startAt;for(g in a||q(),this.styles=this.styles||W(t),S=this.styles.props,this.tween=r,e)if("autoRound"!==g&&(o=e[g],!h.$i[g]||!(0,h.if)(g,e,r,s,t,n)))if(l=typeof o,u=rt[g],"function"===l&&(l=typeof(o=o.call(r,s,t,n))),"string"===l&&~o.indexOf("random(")&&(o=(0,h.UI)(o)),u)u(this,t,g,o,r)&&(C=1);else if("--"===g.substr(0,2))i=(getComputedStyle(t).getPropertyValue(g)+"").trim(),o+="",h.GN.lastIndex=0,h.GN.test(i)||(d=(0,h.Wy)(i),m=(0,h.Wy)(o)),m?d!==m&&(i=J(t,g,i,m)+m):d&&(o+=d),this.add(E,"setProperty",i,o,s,n,0,0,g),z.push(g),S.push(g,0,E[g]);else if("undefined"!==l){if(I&&g in I?(i="function"==typeof I[g]?I[g].call(r,s,t,n):I[g],(0,h.r9)(i)&&~i.indexOf("random(")&&(i=(0,h.UI)(i)),(0,h.Wy)(i+"")||(i+=h.Fc.units[g]||(0,h.Wy)(K(t,g))||""),"="===(i+"").charAt(1)&&(i=K(t,g))):i=K(t,g),f=parseFloat(i),(y="string"===l&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),p=parseFloat(o),g in v&&("autoAlpha"===g&&(1===f&&"hidden"===K(t,"visibility")&&p&&(f=0),S.push("visibility",0,E.visibility),$(this,E,"visibility",f?"inherit":"hidden",p?"inherit":"hidden",!p)),"scale"!==g&&"transform"!==g&&~(g=v[g]).indexOf(",")&&(g=g.split(",")[0])),O=g in c)if(this.styles.save(g),P||((M=t._gsap).renderTransform&&!e.parseTransform||ft(t,e.parseTransform),F=!1!==e.smoothOrigin&&M.smooth,(P=this._pt=new h.Fo(this._pt,E,k,0,1,M.renderTransform,M,0,-1)).dep=1),"scale"===g)this._pt=new h.Fo(this._pt,M,"scaleY",f,(y?(0,h.cy)(f,y+p):p)-f||0,b),this._pt.u=0,z.push("scaleY",g),g+="X";else{if("transformOrigin"===g){S.push(X,0,E[X]),B=void 0,Y=void 0,T=void 0,B=(A=o).split(" "),Y=B[0],T=B[1]||"50%","top"!==Y&&"bottom"!==Y&&"left"!==T&&"right"!==T||(A=Y,Y=T,T=A),B[0]=tt[Y]||Y,B[1]=tt[T]||T,o=B.join(" "),M.svg?pt(t,o,0,F,0,this):((m=parseFloat(o.split(" ")[2])||0)!==M.zOrigin&&$(this,M,"zOrigin",M.zOrigin,m),$(this,E,g,lt(i),lt(o)));continue}if("svgOrigin"===g){pt(t,o,1,F,0,this);continue}if(g in nt){xt(this,M,g,f,y?(0,h.cy)(f,y+o):o);continue}if("smoothOrigin"===g){$(this,M,"smooth",M.smooth,o);continue}if("force3D"===g){M[g]=o;continue}if("transform"===g){bt(this,o,t);continue}}else g in E||(g=V(g)||g);if(O||(p||0===p)&&(f||0===f)&&!x.test(o)&&g in E)p||(p=0),(d=(i+"").substr((f+"").length))!==(m=(0,h.Wy)(o)||(g in h.Fc.units?h.Fc.units[g]:d))&&(f=J(t,g,i,m)),this._pt=new h.Fo(this._pt,O?M:E,g,f,(y?(0,h.cy)(f,y+p):p)-f,O||"px"!==m&&"zIndex"!==g||!1===e.autoRound?b:_),this._pt.u=m||0,d!==m&&"%"!==m&&(this._pt.b=i,this._pt.r=w);else if(g in E)Q.call(this,t,g,i,y?y+o:o);else{if(!(g in t)){(0,h.lC)(g,o);continue}this.add(t,g,i||t[g],y?y+o:o,s,n)}O||(g in E?S.push(g,0,E[g]):S.push(g,1,i||t[g])),z.push(g)}C&&(0,h.JV)(this)},render:function(t,e){if(e.tween._time||!f())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:K,aliases:v,getSetter:function(t,e,r){var s=v[e];return s&&s.indexOf(",")<0&&(e=s),e in c&&e!==X&&(t._gsap.x||K(t,"x"))?r&&p===r?"scale"===e?A:S:(p=r||{})&&("scale"===e?B:Y):t.style&&!(0,h.m2)(t.style[e])?F:~e.indexOf("-")?C:(0,h.S5)(t,e)},core:{_removeProperty:R,_getMatrix:ot}};h.p8.utils.checkPrefix=V,h.p8.core.getStyleSaver=W,Ot="x,y,z,scale,scaleX,scaleY,xPercent,yPercent",wt="rotation,rotationX,rotationY,skewX,skewY",_t=(0,h.fS)(Ot+","+wt+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",(function(t){c[t]=1})),(0,h.fS)(wt,(function(t){h.Fc.units[t]="deg",nt[t]=1})),v[_t[13]]=Ot+","+wt,(0,h.fS)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",(function(t){var e=t.split(":");v[e[1]]=_t[e[0]]})),(0,h.fS)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",(function(t){h.Fc.units[t]="px"})),h.p8.registerPlugin(Pt)}}]);