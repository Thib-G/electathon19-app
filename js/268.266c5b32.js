"use strict";(self["webpackChunkelectathon19_app"]=self["webpackChunkelectathon19_app"]||[]).push([[268],{6443:function(t,n,e){function r(){}function i(t){return null==t?r:function(){return this.querySelector(t)}}function o(t){"function"!==typeof t&&(t=i(t));for(var n=this._groups,e=n.length,r=new Array(e),o=0;o<e;++o)for(var u,s,c=n[o],a=c.length,h=r[o]=new Array(a),l=0;l<a;++l)(u=c[l])&&(s=t.call(u,u.__data__,l,c))&&("__data__"in u&&(s.__data__=u.__data__),h[l]=s);return new Yt(r,this._parents)}function u(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}function s(){return[]}function c(t){return null==t?s:function(){return this.querySelectorAll(t)}}function a(t){return function(){return u(t.apply(this,arguments))}}function h(t){t="function"===typeof t?a(t):c(t);for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,s=n[o],h=s.length,l=0;l<h;++l)(u=s[l])&&(r.push(t.call(u,u.__data__,l,s)),i.push(u));return new Yt(r,i)}function l(t){return function(){return this.matches(t)}}function f(t){return function(n){return n.matches(t)}}e.d(n,{Z:function(){return Gn}});var p=Array.prototype.find;function y(t){return function(){return p.call(this.children,t)}}function _(){return this.firstElementChild}function v(t){return this.select(null==t?_:y("function"===typeof t?t:f(t)))}var d=Array.prototype.filter;function g(){return Array.from(this.children)}function m(t){return function(){return d.call(this.children,t)}}function x(t){return this.selectAll(null==t?g:m("function"===typeof t?t:f(t)))}function w(t){"function"!==typeof t&&(t=l(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],s=u.length,c=r[i]=[],a=0;a<s;++a)(o=u[a])&&t.call(o,o.__data__,a,u)&&c.push(o);return new Yt(r,this._parents)}function A(t){return new Array(t.length)}function M(){return new Yt(this._enter||this._groups.map(A),this._parents)}function b(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function S(t){return function(){return t}}function E(t,n,e,r,i,o){for(var u,s=0,c=n.length,a=o.length;s<a;++s)(u=n[s])?(u.__data__=o[s],r[s]=u):e[s]=new b(t,o[s]);for(;s<c;++s)(u=n[s])&&(i[s]=u)}function N(t,n,e,r,i,o,u){var s,c,a,h=new Map,l=n.length,f=o.length,p=new Array(l);for(s=0;s<l;++s)(c=n[s])&&(p[s]=a=u.call(c,c.__data__,s,n)+"",h.has(a)?i[s]=c:h.set(a,c));for(s=0;s<f;++s)a=u.call(t,o[s],s,o)+"",(c=h.get(a))?(r[s]=c,c.__data__=o[s],h.delete(a)):e[s]=new b(t,o[s]);for(s=0;s<l;++s)(c=n[s])&&h.get(p[s])===c&&(i[s]=c)}function C(t){return t.__data__}function T(t,n){if(!arguments.length)return Array.from(this,C);var e=n?N:E,r=this._parents,i=this._groups;"function"!==typeof t&&(t=S(t));for(var o=i.length,u=new Array(o),s=new Array(o),c=new Array(o),a=0;a<o;++a){var h=r[a],l=i[a],f=l.length,p=L(t.call(h,h&&h.__data__,a,r)),y=p.length,_=s[a]=new Array(y),v=u[a]=new Array(y),d=c[a]=new Array(f);e(h,l,_,v,d,p,n);for(var g,m,x=0,w=0;x<y;++x)if(g=_[x]){x>=w&&(w=x+1);while(!(m=v[w])&&++w<y);g._next=m||null}}return u=new Yt(u,r),u._enter=s,u._exit=c,u}function L(t){return"object"===typeof t&&"length"in t?t:Array.from(t)}function k(){return new Yt(this._exit||this._groups.map(A),this._parents)}function q(t,n,e){var r=this.enter(),i=this,o=this.exit();return"function"===typeof t?(r=t(r),r&&(r=r.selection())):r=r.append(t+""),null!=n&&(i=n(i),i&&(i=i.selection())),null==e?o.remove():e(o),r&&i?r.merge(i).order():i}function P(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,o=r.length,u=Math.min(i,o),s=new Array(i),c=0;c<u;++c)for(var a,h=e[c],l=r[c],f=h.length,p=s[c]=new Array(f),y=0;y<f;++y)(a=h[y]||l[y])&&(p[y]=a);for(;c<i;++c)s[c]=e[c];return new Yt(s,this._parents)}function R(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r);return this}function B(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=D);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,s=e[o],c=s.length,a=i[o]=new Array(c),h=0;h<c;++h)(u=s[h])&&(a[h]=u);a.sort(n)}return new Yt(i,this._parents).order()}function D(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function j(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function I(){return Array.from(this)}function O(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null}function V(){let t=0;for(const n of this)++t;return t}function z(){return!this.node()}function H(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,s=o.length;u<s;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this}b.prototype={constructor:b,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var U="http://www.w3.org/1999/xhtml",Z={svg:"http://www.w3.org/2000/svg",xhtml:U,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function K(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),Z.hasOwnProperty(n)?{space:Z[n],local:t}:t}function Q(t){return function(){this.removeAttribute(t)}}function X(t){return function(){this.removeAttributeNS(t.space,t.local)}}function $(t,n){return function(){this.setAttribute(t,n)}}function F(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function G(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function J(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function W(t,n){var e=K(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?X:Q:"function"===typeof n?e.local?J:G:e.local?F:$)(e,n))}function Y(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function tt(t){return function(){this.style.removeProperty(t)}}function nt(t,n,e){return function(){this.style.setProperty(t,n,e)}}function et(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function rt(t,n,e){return arguments.length>1?this.each((null==n?tt:"function"===typeof n?et:nt)(t,n,null==e?"":e)):it(this.node(),t)}function it(t,n){return t.style.getPropertyValue(n)||Y(t).getComputedStyle(t,null).getPropertyValue(n)}function ot(t){return function(){delete this[t]}}function ut(t,n){return function(){this[t]=n}}function st(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function ct(t,n){return arguments.length>1?this.each((null==n?ot:"function"===typeof n?st:ut)(t,n)):this.node()[t]}function at(t){return t.trim().split(/^|\s+/)}function ht(t){return t.classList||new lt(t)}function lt(t){this._node=t,this._names=at(t.getAttribute("class")||"")}function ft(t,n){var e=ht(t),r=-1,i=n.length;while(++r<i)e.add(n[r])}function pt(t,n){var e=ht(t),r=-1,i=n.length;while(++r<i)e.remove(n[r])}function yt(t){return function(){ft(this,t)}}function _t(t){return function(){pt(this,t)}}function vt(t,n){return function(){(n.apply(this,arguments)?ft:pt)(this,t)}}function dt(t,n){var e=at(t+"");if(arguments.length<2){var r=ht(this.node()),i=-1,o=e.length;while(++i<o)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"===typeof n?vt:n?yt:_t)(e,n))}function gt(){this.textContent=""}function mt(t){return function(){this.textContent=t}}function xt(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function wt(t){return arguments.length?this.each(null==t?gt:("function"===typeof t?xt:mt)(t)):this.node().textContent}function At(){this.innerHTML=""}function Mt(t){return function(){this.innerHTML=t}}function bt(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function St(t){return arguments.length?this.each(null==t?At:("function"===typeof t?bt:Mt)(t)):this.node().innerHTML}function Et(){this.nextSibling&&this.parentNode.appendChild(this)}function Nt(){return this.each(Et)}function Ct(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Tt(){return this.each(Ct)}function Lt(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===U&&n.documentElement.namespaceURI===U?n.createElement(t):n.createElementNS(e,t)}}function kt(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function qt(t){var n=K(t);return(n.local?kt:Lt)(n)}function Pt(t){var n="function"===typeof t?t:qt(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))}function Rt(){return null}function Bt(t,n){var e="function"===typeof t?t:qt(t),r=null==n?Rt:"function"===typeof n?n:i(n);return this.select((function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)}))}function Dt(){var t=this.parentNode;t&&t.removeChild(this)}function jt(){return this.each(Dt)}function It(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Ot(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Vt(t){return this.select(t?Ot:It)}function zt(t){return arguments.length?this.property("__data__",t):this.node().__data__}function Ht(t){return function(n){t.call(this,n,this.__data__)}}function Ut(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}function Zt(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.options);++i?n.length=i:delete this.__on}}}function Kt(t,n,e){return function(){var r,i=this.__on,o=Ht(n);if(i)for(var u=0,s=i.length;u<s;++u)if((r=i[u]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),void(r.value=n);this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}function Qt(t,n,e){var r,i,o=Ut(t+""),u=o.length;if(!(arguments.length<2)){for(s=n?Kt:Zt,r=0;r<u;++r)this.each(s(o[r],n,e));return this}var s=this.node().__on;if(s)for(var c,a=0,h=s.length;a<h;++a)for(r=0,c=s[a];r<u;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value}function Xt(t,n,e){var r=Y(t),i=r.CustomEvent;"function"===typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function $t(t,n){return function(){return Xt(this,t,n)}}function Ft(t,n){return function(){return Xt(this,t,n.apply(this,arguments))}}function Gt(t,n){return this.each(("function"===typeof n?Ft:$t)(t,n))}function*Jt(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,i=t[n],o=0,u=i.length;o<u;++o)(r=i[o])&&(yield r)}lt.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var Wt=[null];function Yt(t,n){this._groups=t,this._parents=n}function tn(){return new Yt([[document.documentElement]],Wt)}function nn(){return this}Yt.prototype=tn.prototype={constructor:Yt,select:o,selectAll:h,selectChild:v,selectChildren:x,filter:w,data:T,enter:M,exit:k,join:q,merge:P,selection:nn,order:R,sort:B,call:j,nodes:I,node:O,size:V,empty:z,each:H,attr:W,style:rt,property:ct,classed:dt,text:wt,html:St,raise:Nt,lower:Tt,append:Pt,insert:Bt,remove:jt,clone:Vt,datum:zt,on:Qt,dispatch:Gt,[Symbol.iterator]:Jt};function en(t){return"string"===typeof t?new Yt([[document.querySelector(t)]],[document.documentElement]):new Yt([[t]],Wt)}function rn(t){return"string"===typeof t?new Yt([document.querySelectorAll(t)],[document.documentElement]):new Yt([u(t)],Wt)}var on="$";function un(){}function sn(t,n){var e=new un;if(t instanceof un)t.each((function(t,n){e.set(n,t)}));else if(Array.isArray(t)){var r,i=-1,o=t.length;if(null==n)while(++i<o)e.set(i,t[i]);else while(++i<o)e.set(n(r=t[i],i,t),r)}else if(t)for(var u in t)e.set(u,t[u]);return e}un.prototype=sn.prototype={constructor:un,has:function(t){return on+t in this},get:function(t){return this[on+t]},set:function(t,n){return this[on+t]=n,this},remove:function(t){var n=on+t;return n in this&&delete this[n]},clear:function(){for(var t in this)t[0]===on&&delete this[t]},keys:function(){var t=[];for(var n in this)n[0]===on&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)n[0]===on&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)n[0]===on&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)n[0]===on&&++t;return t},empty:function(){for(var t in this)if(t[0]===on)return!1;return!0},each:function(t){for(var n in this)n[0]===on&&t(this[n],n.slice(1),this)}};var cn=sn;function an(){var t,n,e,r=[],i=[];function o(e,i,u,s){if(i>=r.length)return null!=t&&e.sort(t),null!=n?n(e):e;var c,a,h,l=-1,f=e.length,p=r[i++],y=cn(),_=u();while(++l<f)(h=y.get(c=p(a=e[l])+""))?h.push(a):y.set(c,[a]);return y.each((function(t,n){s(_,n,o(t,i,u,s))})),_}function u(t,e){if(++e>r.length)return t;var o,s=i[e-1];return null!=n&&e>=r.length?o=t.entries():(o=[],t.each((function(t,n){o.push({key:n,values:u(t,e)})}))),null!=s?o.sort((function(t,n){return s(t.key,n.key)})):o}return e={object:function(t){return o(t,0,hn,ln)},map:function(t){return o(t,0,fn,pn)},entries:function(t){return u(o(t,0,fn,pn),0)},key:function(t){return r.push(t),e},sortKeys:function(t){return i[r.length-1]=t,e},sortValues:function(n){return t=n,e},rollup:function(t){return n=t,e}}}function hn(){return{}}function ln(t,n,e){t[n]=e}function fn(){return cn()}function pn(t,n,e){t.set(n,e)}function yn(){}var _n=cn.prototype;function vn(t,n){var e=new yn;if(t instanceof yn)t.each((function(t){e.add(t)}));else if(t){var r=-1,i=t.length;if(null==n)while(++r<i)e.add(t[r]);else while(++r<i)e.add(n(t[r],r,t))}return e}yn.prototype=vn.prototype={constructor:yn,has:_n.has,add:function(t){return t+="",this[on+t]=t,this},remove:_n.remove,clear:_n.clear,values:_n.keys,size:_n.size,empty:_n.empty,each:_n.each};Array.prototype.slice;function dn(t){return"object"===typeof t&&"length"in t?t:Array.from(t)}function gn(t){return function(){return t}}function mn(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function xn(t){return t}const wn=Math.abs,An=Math.atan2,Mn=Math.cos,bn=Math.max,Sn=Math.min,En=Math.sin,Nn=Math.sqrt,Cn=1e-12,Tn=Math.PI,Ln=Tn/2,kn=2*Tn;function qn(t){return t>1?0:t<-1?Tn:Math.acos(t)}function Pn(t){return t>=1?Ln:t<=-1?-Ln:Math.asin(t)}function Rn(){var t=xn,n=mn,e=null,r=gn(0),i=gn(kn),o=gn(0);function u(u){var s,c,a,h,l,f=(u=dn(u)).length,p=0,y=new Array(f),_=new Array(f),v=+r.apply(this,arguments),d=Math.min(kn,Math.max(-kn,i.apply(this,arguments)-v)),g=Math.min(Math.abs(d)/f,o.apply(this,arguments)),m=g*(d<0?-1:1);for(s=0;s<f;++s)(l=_[y[s]=s]=+t(u[s],s,u))>0&&(p+=l);for(null!=n?y.sort((function(t,e){return n(_[t],_[e])})):null!=e&&y.sort((function(t,n){return e(u[t],u[n])})),s=0,a=p?(d-f*m)/p:0;s<f;++s,v=h)c=y[s],l=_[c],h=v+(l>0?l*a:0)+m,_[c]={data:u[c],index:s,value:l,startAngle:v,endAngle:h,padAngle:g};return _}return u.value=function(n){return arguments.length?(t="function"===typeof n?n:gn(+n),u):t},u.sortValues=function(t){return arguments.length?(n=t,e=null,u):n},u.sort=function(t){return arguments.length?(e=t,n=null,u):e},u.startAngle=function(t){return arguments.length?(r="function"===typeof t?t:gn(+t),u):r},u.endAngle=function(t){return arguments.length?(i="function"===typeof t?t:gn(+t),u):i},u.padAngle=function(t){return arguments.length?(o="function"===typeof t?t:gn(+t),u):o},u}e(1703);const Bn=Math.PI,Dn=2*Bn,jn=1e-6,In=Dn-jn;function On(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Vn(){return new On}On.prototype=Vn.prototype={constructor:On,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,u=this._y1,s=e-t,c=r-n,a=o-t,h=u-n,l=a*a+h*h;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>jn)if(Math.abs(h*s-c*a)>jn&&i){var f=e-o,p=r-u,y=s*s+c*c,_=f*f+p*p,v=Math.sqrt(y),d=Math.sqrt(l),g=i*Math.tan((Bn-Math.acos((y+l-_)/(2*v*d)))/2),m=g/d,x=g/v;Math.abs(m-1)>jn&&(this._+="L"+(t+m*a)+","+(n+m*h)),this._+="A"+i+","+i+",0,0,"+ +(h*f>a*p)+","+(this._x1=t+x*s)+","+(this._y1=n+x*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,o){t=+t,n=+n,e=+e,o=!!o;var u=e*Math.cos(r),s=e*Math.sin(r),c=t+u,a=n+s,h=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+c+","+a:(Math.abs(this._x1-c)>jn||Math.abs(this._y1-a)>jn)&&(this._+="L"+c+","+a),e&&(l<0&&(l=l%Dn+Dn),l>In?this._+="A"+e+","+e+",0,1,"+h+","+(t-u)+","+(n-s)+"A"+e+","+e+",0,1,"+h+","+(this._x1=c)+","+(this._y1=a):l>jn&&(this._+="A"+e+","+e+",0,"+ +(l>=Bn)+","+h+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};var zn=Vn;function Hn(t){return t.innerRadius}function Un(t){return t.outerRadius}function Zn(t){return t.startAngle}function Kn(t){return t.endAngle}function Qn(t){return t&&t.padAngle}function Xn(t,n,e,r,i,o,u,s){var c=e-t,a=r-n,h=u-i,l=s-o,f=l*c-h*a;if(!(f*f<Cn))return f=(h*(n-o)-l*(t-i))/f,[t+f*c,n+f*a]}function $n(t,n,e,r,i,o,u){var s=t-e,c=n-r,a=(u?o:-o)/Nn(s*s+c*c),h=a*c,l=-a*s,f=t+h,p=n+l,y=e+h,_=r+l,v=(f+y)/2,d=(p+_)/2,g=y-f,m=_-p,x=g*g+m*m,w=i-o,A=f*_-y*p,M=(m<0?-1:1)*Nn(bn(0,w*w*x-A*A)),b=(A*m-g*M)/x,S=(-A*g-m*M)/x,E=(A*m+g*M)/x,N=(-A*g+m*M)/x,C=b-v,T=S-d,L=E-v,k=N-d;return C*C+T*T>L*L+k*k&&(b=E,S=N),{cx:b,cy:S,x01:-h,y01:-l,x11:b*(i/w-1),y11:S*(i/w-1)}}function Fn(){var t=Hn,n=Un,e=gn(0),r=null,i=Zn,o=Kn,u=Qn,s=null;function c(){var c,a,h=+t.apply(this,arguments),l=+n.apply(this,arguments),f=i.apply(this,arguments)-Ln,p=o.apply(this,arguments)-Ln,y=wn(p-f),_=p>f;if(s||(s=c=zn()),l<h&&(a=l,l=h,h=a),l>Cn)if(y>kn-Cn)s.moveTo(l*Mn(f),l*En(f)),s.arc(0,0,l,f,p,!_),h>Cn&&(s.moveTo(h*Mn(p),h*En(p)),s.arc(0,0,h,p,f,_));else{var v,d,g=f,m=p,x=f,w=p,A=y,M=y,b=u.apply(this,arguments)/2,S=b>Cn&&(r?+r.apply(this,arguments):Nn(h*h+l*l)),E=Sn(wn(l-h)/2,+e.apply(this,arguments)),N=E,C=E;if(S>Cn){var T=Pn(S/h*En(b)),L=Pn(S/l*En(b));(A-=2*T)>Cn?(T*=_?1:-1,x+=T,w-=T):(A=0,x=w=(f+p)/2),(M-=2*L)>Cn?(L*=_?1:-1,g+=L,m-=L):(M=0,g=m=(f+p)/2)}var k=l*Mn(g),q=l*En(g),P=h*Mn(w),R=h*En(w);if(E>Cn){var B,D=l*Mn(m),j=l*En(m),I=h*Mn(x),O=h*En(x);if(y<Tn&&(B=Xn(k,q,I,O,D,j,P,R))){var V=k-B[0],z=q-B[1],H=D-B[0],U=j-B[1],Z=1/En(qn((V*H+z*U)/(Nn(V*V+z*z)*Nn(H*H+U*U)))/2),K=Nn(B[0]*B[0]+B[1]*B[1]);N=Sn(E,(h-K)/(Z-1)),C=Sn(E,(l-K)/(Z+1))}}M>Cn?C>Cn?(v=$n(I,O,k,q,l,C,_),d=$n(D,j,P,R,l,C,_),s.moveTo(v.cx+v.x01,v.cy+v.y01),C<E?s.arc(v.cx,v.cy,C,An(v.y01,v.x01),An(d.y01,d.x01),!_):(s.arc(v.cx,v.cy,C,An(v.y01,v.x01),An(v.y11,v.x11),!_),s.arc(0,0,l,An(v.cy+v.y11,v.cx+v.x11),An(d.cy+d.y11,d.cx+d.x11),!_),s.arc(d.cx,d.cy,C,An(d.y11,d.x11),An(d.y01,d.x01),!_))):(s.moveTo(k,q),s.arc(0,0,l,g,m,!_)):s.moveTo(k,q),h>Cn&&A>Cn?N>Cn?(v=$n(P,R,D,j,h,-N,_),d=$n(k,q,I,O,h,-N,_),s.lineTo(v.cx+v.x01,v.cy+v.y01),N<E?s.arc(v.cx,v.cy,N,An(v.y01,v.x01),An(d.y01,d.x01),!_):(s.arc(v.cx,v.cy,N,An(v.y01,v.x01),An(v.y11,v.x11),!_),s.arc(0,0,h,An(v.cy+v.y11,v.cx+v.x11),An(d.cy+d.y11,d.cx+d.x11),_),s.arc(d.cx,d.cy,N,An(d.y11,d.x11),An(d.y01,d.x01),!_))):s.arc(0,0,h,w,x,_):s.lineTo(P,R)}else s.moveTo(0,0);if(s.closePath(),c)return s=null,c+""||null}return c.centroid=function(){var e=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-Tn/2;return[Mn(r)*e,En(r)*e]},c.innerRadius=function(n){return arguments.length?(t="function"===typeof n?n:gn(+n),c):t},c.outerRadius=function(t){return arguments.length?(n="function"===typeof t?t:gn(+t),c):n},c.cornerRadius=function(t){return arguments.length?(e="function"===typeof t?t:gn(+t),c):e},c.padRadius=function(t){return arguments.length?(r=null==t?null:"function"===typeof t?t:gn(+t),c):r},c.startAngle=function(t){return arguments.length?(i="function"===typeof t?t:gn(+t),c):i},c.endAngle=function(t){return arguments.length?(o="function"===typeof t?t:gn(+t),c):o},c.padAngle=function(t){return arguments.length?(u="function"===typeof t?t:gn(+t),c):u},c.context=function(t){return arguments.length?(s=null==t?null:t,c):s},c}var Gn={select:en,selectAll:rn,nest:an,pie:Rn,arc:Fn}}}]);
//# sourceMappingURL=268.266c5b32.js.map