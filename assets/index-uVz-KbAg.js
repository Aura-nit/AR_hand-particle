(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const ql="182",s0=0,fh=1,a0=2,Oa=1,o0=2,Us=3,Zi=0,ln=1,xi=2,yi=0,qr=1,Pc=2,dh=3,ph=4,c0=5,pr=100,l0=101,u0=102,h0=103,f0=104,d0=200,p0=201,m0=202,g0=203,Lc=204,Dc=205,_0=206,v0=207,x0=208,M0=209,S0=210,E0=211,y0=212,T0=213,b0=214,Ic=0,Uc=1,Fc=2,Zr=3,Nc=4,Oc=5,Bc=6,kc=7,xd=0,A0=1,w0=2,si=0,Md=1,Sd=2,Ed=3,yd=4,Td=5,bd=6,Ad=7,wd=300,Sr=301,Jr=302,zc=303,Gc=304,io=306,Vc=1e3,Si=1001,Hc=1002,qt=1003,R0=1004,la=1005,$t=1006,Vo=1007,gr=1008,Un=1009,Rd=1010,Cd=1011,Hs=1012,Yl=1013,oi=1014,ii=1015,Ci=1016,jl=1017,Kl=1018,Ws=1020,Pd=35902,Ld=35899,Dd=1021,Id=1022,Wn=1023,Pi=1026,_r=1027,Ud=1028,$l=1029,Qr=1030,Zl=1031,Jl=1033,Ba=33776,ka=33777,za=33778,Ga=33779,Wc=35840,Xc=35841,qc=35842,Yc=35843,jc=36196,Kc=37492,$c=37496,Zc=37488,Jc=37489,Qc=37490,el=37491,tl=37808,nl=37809,il=37810,rl=37811,sl=37812,al=37813,ol=37814,cl=37815,ll=37816,ul=37817,hl=37818,fl=37819,dl=37820,pl=37821,ml=36492,gl=36494,_l=36495,vl=36283,xl=36284,Ml=36285,Sl=36286,C0=3200,P0=0,L0=1,Hi="",Ln="srgb",es="srgb-linear",ja="linear",at="srgb",wr=7680,mh=519,D0=512,I0=513,U0=514,Ql=515,F0=516,N0=517,eu=518,O0=519,gh=35044,_h="300 es",ri=2e3,Ka=2001;function Fd(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function $a(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function B0(){const t=$a("canvas");return t.style.display="block",t}const vh={};function xh(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ie(...t){const e="THREE."+t.shift();console.warn(e,...t)}function Je(...t){const e="THREE."+t.shift();console.error(e,...t)}function Xs(...t){const e=t.join(" ");e in vh||(vh[e]=!0,Ie(...t))}function k0(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mh=1234567;const Bs=Math.PI/180,qs=180/Math.PI;function ps(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function He(t,e,n){return Math.max(e,Math.min(n,t))}function tu(t,e){return(t%e+e)%e}function z0(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function G0(t,e,n){return t!==e?(n-t)/(e-t):0}function ks(t,e,n){return(1-n)*t+n*e}function V0(t,e,n,i){return ks(t,e,1-Math.exp(-n*i))}function H0(t,e=1){return e-Math.abs(tu(t,e*2)-e)}function W0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function X0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function q0(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Y0(t,e){return t+Math.random()*(e-t)}function j0(t){return t*(.5-Math.random())}function K0(t){t!==void 0&&(Mh=t);let e=Mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $0(t){return t*Bs}function Z0(t){return t*qs}function J0(t){return(t&t-1)===0&&t!==0}function Q0(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function eg(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function tg(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),c=a(n/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),g=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*u,c*h,c*d,o*l);break;case"YZY":t.set(c*d,o*u,c*h,o*l);break;case"ZXZ":t.set(c*h,c*d,o*u,o*l);break;case"XZX":t.set(o*u,c*_,c*g,o*l);break;case"YXY":t.set(c*g,o*u,c*_,o*l);break;case"ZYZ":t.set(c*_,c*g,o*u,o*l);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Wr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Rr={DEG2RAD:Bs,RAD2DEG:qs,generateUUID:ps,clamp:He,euclideanModulo:tu,mapLinear:z0,inverseLerp:G0,lerp:ks,damp:V0,pingpong:H0,smoothstep:W0,smootherstep:X0,randInt:q0,randFloat:Y0,randFloatSpread:j0,seededRandom:K0,degToRad:$0,radToDeg:Z0,isPowerOfTwo:J0,ceilPowerOfTwo:Q0,floorPowerOfTwo:eg,setQuaternionFromProperEuler:tg,normalize:Jt,denormalize:Wr};class ct{constructor(e=0,n=0){ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ea{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],g=s[a+1],_=s[a+2],M=s[a+3];if(o<=0){e[n+0]=c,e[n+1]=l,e[n+2]=u,e[n+3]=h;return}if(o>=1){e[n+0]=d,e[n+1]=g,e[n+2]=_,e[n+3]=M;return}if(h!==M||c!==d||l!==g||u!==_){let p=c*d+l*g+u*_+h*M;p<0&&(d=-d,g=-g,_=-_,M=-M,p=-p);let f=1-o;if(p<.9995){const b=Math.acos(p),y=Math.sin(b);f=Math.sin(f*b)/y,o=Math.sin(o*b)/y,c=c*f+d*o,l=l*f+g*o,u=u*f+_*o,h=h*f+M*o}else{c=c*f+d*o,l=l*f+g*o,u=u*f+_*o,h=h*f+M*o;const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],d=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+u*h+c*g-l*d,e[n+1]=c*_+u*d+l*h-o*g,e[n+2]=l*_+u*g+o*d-c*h,e[n+3]=u*_-o*h-c*d-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),d=c(i/2),g=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*g*_,this._y=l*g*h-d*u*_,this._z=l*u*_+d*g*h,this._w=l*u*h-d*g*_;break;case"YXZ":this._x=d*u*h+l*g*_,this._y=l*g*h-d*u*_,this._z=l*u*_-d*g*h,this._w=l*u*h+d*g*_;break;case"ZXY":this._x=d*u*h-l*g*_,this._y=l*g*h+d*u*_,this._z=l*u*_+d*g*h,this._w=l*u*h-d*g*_;break;case"ZYX":this._x=d*u*h-l*g*_,this._y=l*g*h+d*u*_,this._z=l*u*_-d*g*h,this._w=l*u*h+d*g*_;break;case"YZX":this._x=d*u*h+l*g*_,this._y=l*g*h+d*u*_,this._z=l*u*_-d*g*h,this._w=l*u*h-d*g*_;break;case"XZY":this._x=d*u*h-l*g*_,this._y=l*g*h-d*u*_,this._z=l*u*_+d*g*h,this._w=l*u*h+d*g*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],u=n[6],h=n[10],d=i+o+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-c)*g,this._y=(s-l)*g,this._z=(a-r)*g}else if(i>o&&i>h){const g=2*Math.sqrt(1+i-o-h);this._w=(u-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+l)/g}else if(o>h){const g=2*Math.sqrt(1+o-i-h);this._w=(s-l)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+h-i-o);this._w=(a-r)/g,this._x=(s+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,n=Math.sin(n*l)/u,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new B,Sh=new ea;class Ne{constructor(e,n,i,r,s,a,o,c,l){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],g=i[5],_=i[8],M=r[0],p=r[3],f=r[6],b=r[1],y=r[4],T=r[7],A=r[2],R=r[5],w=r[8];return s[0]=a*M+o*b+c*A,s[3]=a*p+o*y+c*R,s[6]=a*f+o*T+c*w,s[1]=l*M+u*b+h*A,s[4]=l*p+u*y+h*R,s[7]=l*f+u*T+h*w,s[2]=d*M+g*b+_*A,s[5]=d*p+g*y+_*R,s[8]=d*f+g*T+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return n*a*u-n*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,g=l*s-a*c,_=n*h+i*d+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=h*M,e[1]=(r*l-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=d*M,e[4]=(u*n-r*c)*M,e[5]=(r*s-o*n)*M,e[6]=g*M,e[7]=(i*c-l*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Wo.makeScale(e,n)),this}rotate(e){return this.premultiply(Wo.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wo.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wo=new Ne,Eh=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yh=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ng(){const t={enabled:!0,workingColorSpace:es,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=Yr(r.r),r.g=Yr(r.g),r.b=Yr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hi?ja:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[es]:{primaries:e,whitePoint:i,transfer:ja,toXYZ:Eh,fromXYZ:yh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Eh,fromXYZ:yh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),t}const je=ng();function Ti(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Yr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Cr;class ig{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cr===void 0&&(Cr=$a("canvas")),Cr.width=e.width,Cr.height=e.height;const r=Cr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Cr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=$a("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ti(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ti(n[i]/255)*255):n[i]=Ti(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rg=0;class nu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Xo(r[a].image)):s.push(Xo(r[a]))}else s=Xo(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xo(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ig.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let sg=0;const qo=new B;class en extends ds{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=Si,r=Si,s=$t,a=gr,o=Wn,c=Un,l=en.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=ps(),this.name="",this.source=new nu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qo).x}get height(){return this.source.getSize(qo).y}get depth(){return this.source.getSize(qo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vc:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vc:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=wd;en.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],g=c[5],_=c[9],M=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+M)<.1&&Math.abs(_+p)<.1&&Math.abs(l+g+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(l+1)/2,T=(g+1)/2,A=(f+1)/2,R=(u+d)/4,w=(h+M)/4,U=(_+p)/4;return y>T&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=R/i,s=w/i):T>A?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=R/r,s=U/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=U/s),this.set(i,r,s,n),this}let b=Math.sqrt((p-_)*(p-_)+(h-M)*(h-M)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(h-M)/b,this.z=(d-u)/b,this.w=Math.acos((l+g+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this.w=He(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this.w=He(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ag extends ds{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new en(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new nu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends ag{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Nd extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class og extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ta{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(s,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),ha.subVectors(this.max,As),Pr.subVectors(e.a,As),Lr.subVectors(e.b,As),Dr.subVectors(e.c,As),Ni.subVectors(Lr,Pr),Oi.subVectors(Dr,Lr),sr.subVectors(Pr,Dr);let n=[0,-Ni.z,Ni.y,0,-Oi.z,Oi.y,0,-sr.z,sr.y,Ni.z,0,-Ni.x,Oi.z,0,-Oi.x,sr.z,0,-sr.x,-Ni.y,Ni.x,0,-Oi.y,Oi.x,0,-sr.y,sr.x,0];return!Yo(n,Pr,Lr,Dr,ha)||(n=[1,0,0,0,1,0,0,0,1],!Yo(n,Pr,Lr,Dr,ha))?!1:(fa.crossVectors(Ni,Oi),n=[fa.x,fa.y,fa.z],Yo(n,Pr,Lr,Dr,ha))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const di=[new B,new B,new B,new B,new B,new B,new B,new B],zn=new B,ua=new ta,Pr=new B,Lr=new B,Dr=new B,Ni=new B,Oi=new B,sr=new B,As=new B,ha=new B,fa=new B,ar=new B;function Yo(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ar.fromArray(t,s);const o=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),c=e.dot(ar),l=n.dot(ar),u=i.dot(ar);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const cg=new ta,ws=new B,jo=new B;class ro{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):cg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const n=ws.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(jo)),this.expandByPoint(ws.copy(e.center).sub(jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pi=new B,Ko=new B,da=new B,Bi=new B,$o=new B,pa=new B,Zo=new B;class Od{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ko.copy(e).add(n).multiplyScalar(.5),da.copy(n).sub(e).normalize(),Bi.copy(this.origin).sub(Ko);const s=e.distanceTo(n)*.5,a=-this.direction.dot(da),o=Bi.dot(this.direction),c=-Bi.dot(da),l=Bi.lengthSq(),u=Math.abs(1-a*a);let h,d,g,_;if(u>0)if(h=a*c-o,d=a*o-c,_=s*u,h>=0)if(d>=-_)if(d<=_){const M=1/u;h*=M,d*=M,g=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),g=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-s,-c),s),g=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),g=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ko).addScaledVector(da,d),g}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,s){$o.subVectors(n,e),pa.subVectors(i,e),Zo.crossVectors($o,pa);let a=this.direction.dot(Zo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,e);const c=o*this.direction.dot(pa.crossVectors(Bi,pa));if(c<0)return null;const l=o*this.direction.dot($o.cross(Bi));if(l<0||c+l>a)return null;const u=-o*Bi.dot(Zo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,n,i,r,s,a,o,c,l,u,h,d,g,_,M,p){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,u,h,d,g,_,M,p)}set(e,n,i,r,s,a,o,c,l,u,h,d,g,_,M,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=g,f[7]=_,f[11]=M,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),a=1/Ir.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,g=a*h,_=o*u,M=o*h;n[0]=c*u,n[4]=-c*h,n[8]=l,n[1]=g+_*l,n[5]=d-M*l,n[9]=-o*c,n[2]=M-d*l,n[6]=_+g*l,n[10]=a*c}else if(e.order==="YXZ"){const d=c*u,g=c*h,_=l*u,M=l*h;n[0]=d+M*o,n[4]=_*o-g,n[8]=a*l,n[1]=a*h,n[5]=a*u,n[9]=-o,n[2]=g*o-_,n[6]=M+d*o,n[10]=a*c}else if(e.order==="ZXY"){const d=c*u,g=c*h,_=l*u,M=l*h;n[0]=d-M*o,n[4]=-a*h,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*u,n[9]=M-d*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const d=a*u,g=a*h,_=o*u,M=o*h;n[0]=c*u,n[4]=_*l-g,n[8]=d*l+M,n[1]=c*h,n[5]=M*l+d,n[9]=g*l-_,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const d=a*c,g=a*l,_=o*c,M=o*l;n[0]=c*u,n[4]=M-d*h,n[8]=_*h+g,n[1]=h,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=g*h+_,n[10]=d-M*h}else if(e.order==="XZY"){const d=a*c,g=a*l,_=o*c,M=o*l;n[0]=c*u,n[4]=-h,n[8]=l*u,n[1]=d*h+M,n[5]=a*u,n[9]=g*h-_,n[2]=_*h-g,n[6]=o*u,n[10]=M*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lg,e,ug)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),ki.crossVectors(i,gn),ki.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),ki.crossVectors(i,gn)),ki.normalize(),ma.crossVectors(gn,ki),r[0]=ki.x,r[4]=ma.x,r[8]=gn.x,r[1]=ki.y,r[5]=ma.y,r[9]=gn.y,r[2]=ki.z,r[6]=ma.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],g=i[13],_=i[2],M=i[6],p=i[10],f=i[14],b=i[3],y=i[7],T=i[11],A=i[15],R=r[0],w=r[4],U=r[8],v=r[12],S=r[1],C=r[5],O=r[9],F=r[13],V=r[2],H=r[6],W=r[10],z=r[14],$=r[3],ue=r[7],ae=r[11],he=r[15];return s[0]=a*R+o*S+c*V+l*$,s[4]=a*w+o*C+c*H+l*ue,s[8]=a*U+o*O+c*W+l*ae,s[12]=a*v+o*F+c*z+l*he,s[1]=u*R+h*S+d*V+g*$,s[5]=u*w+h*C+d*H+g*ue,s[9]=u*U+h*O+d*W+g*ae,s[13]=u*v+h*F+d*z+g*he,s[2]=_*R+M*S+p*V+f*$,s[6]=_*w+M*C+p*H+f*ue,s[10]=_*U+M*O+p*W+f*ae,s[14]=_*v+M*F+p*z+f*he,s[3]=b*R+y*S+T*V+A*$,s[7]=b*w+y*C+T*H+A*ue,s[11]=b*U+y*O+T*W+A*ae,s[15]=b*v+y*F+T*z+A*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],g=e[14],_=e[3],M=e[7],p=e[11],f=e[15],b=c*g-l*d,y=o*g-l*h,T=o*d-c*h,A=a*g-l*u,R=a*d-c*u,w=a*h-o*u;return n*(M*b-p*y+f*T)-i*(_*b-p*A+f*R)+r*(_*y-M*A+f*w)-s*(_*T-M*R+p*w)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],g=e[11],_=e[12],M=e[13],p=e[14],f=e[15],b=h*p*l-M*d*l+M*c*g-o*p*g-h*c*f+o*d*f,y=_*d*l-u*p*l-_*c*g+a*p*g+u*c*f-a*d*f,T=u*M*l-_*h*l+_*o*g-a*M*g-u*o*f+a*h*f,A=_*h*c-u*M*c-_*o*d+a*M*d+u*o*p-a*h*p,R=n*b+i*y+r*T+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=b*w,e[1]=(M*d*s-h*p*s-M*r*g+i*p*g+h*r*f-i*d*f)*w,e[2]=(o*p*s-M*c*s+M*r*l-i*p*l-o*r*f+i*c*f)*w,e[3]=(h*c*s-o*d*s-h*r*l+i*d*l+o*r*g-i*c*g)*w,e[4]=y*w,e[5]=(u*p*s-_*d*s+_*r*g-n*p*g-u*r*f+n*d*f)*w,e[6]=(_*c*s-a*p*s-_*r*l+n*p*l+a*r*f-n*c*f)*w,e[7]=(a*d*s-u*c*s+u*r*l-n*d*l-a*r*g+n*c*g)*w,e[8]=T*w,e[9]=(_*h*s-u*M*s-_*i*g+n*M*g+u*i*f-n*h*f)*w,e[10]=(a*M*s-_*o*s+_*i*l-n*M*l-a*i*f+n*o*f)*w,e[11]=(u*o*s-a*h*s-u*i*l+n*h*l+a*i*g-n*o*g)*w,e[12]=A*w,e[13]=(u*M*r-_*h*r+_*i*d-n*M*d-u*i*p+n*h*p)*w,e[14]=(_*o*r-a*M*r-_*i*c+n*M*c+a*i*p-n*o*p)*w,e[15]=(a*h*r-u*o*r+u*i*c-n*h*c-a*i*d+n*o*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,u=a+a,h=o+o,d=s*l,g=s*u,_=s*h,M=a*u,p=a*h,f=o*h,b=c*l,y=c*u,T=c*h,A=i.x,R=i.y,w=i.z;return r[0]=(1-(M+f))*A,r[1]=(g+T)*A,r[2]=(_-y)*A,r[3]=0,r[4]=(g-T)*R,r[5]=(1-(d+f))*R,r[6]=(p+b)*R,r[7]=0,r[8]=(_+y)*w,r[9]=(p-b)*w,r[10]=(1-(d+M))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=Ir.set(r[0],r[1],r[2]).length();const a=Ir.set(r[4],r[5],r[6]).length(),o=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Gn.copy(this);const l=1/s,u=1/a,h=1/o;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,n.setFromRotationMatrix(Gn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ri,c=!1){const l=this.elements,u=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),g=(i+r)/(i-r);let _,M;if(c)_=s/(a-s),M=a*s/(a-s);else if(o===ri)_=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Ka)_=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ri,c=!1){const l=this.elements,u=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),g=-(i+r)/(i-r);let _,M;if(c)_=1/(a-s),M=a/(a-s);else if(o===ri)_=-2/(a-s),M=-(a+s)/(a-s);else if(o===Ka)_=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ir=new B,Gn=new Lt,lg=new B(0,0,0),ug=new B(1,1,1),ki=new B,ma=new B,gn=new B,Th=new Lt,bh=new ea;class Li{constructor(e=0,n=0,i=0,r=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bh.setFromEuler(this),this.setFromQuaternion(bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class Bd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hg=0;const Ah=new B,Ur=new ea,mi=new Lt,ga=new B,Rs=new B,fg=new B,dg=new ea,wh=new B(1,0,0),Rh=new B(0,1,0),Ch=new B(0,0,1),Ph={type:"added"},pg={type:"removed"},Fr={type:"childadded",child:null},Jo={type:"childremoved",child:null};class un extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new B,n=new Li,i=new ea,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Ne}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Rh,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,n){return Ah.copy(e).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Rh,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ga.copy(e):ga.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Rs,ga,this.up):mi.lookAt(ga,Rs,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(mi),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ph),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pg),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ph),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,fg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,dg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new B(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new B,gi=new B,Qo=new B,_i=new B,Nr=new B,Or=new B,Lh=new B,ec=new B,tc=new B,nc=new B,ic=new Pt,rc=new Pt,sc=new Pt;class Hn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),gi.subVectors(i,n),Qo.subVectors(e,n);const a=Vn.dot(Vn),o=Vn.dot(gi),c=Vn.dot(Qo),l=gi.dot(gi),u=gi.dot(Qo),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,g=(l*c-o*u)*d,_=(a*u-o*c)*d;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,_i.x),c.addScaledVector(a,_i.y),c.addScaledVector(o,_i.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return ic.setScalar(0),rc.setScalar(0),sc.setScalar(0),ic.fromBufferAttribute(e,n),rc.fromBufferAttribute(e,i),sc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ic,s.x),a.addScaledVector(rc,s.y),a.addScaledVector(sc,s.z),a}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),gi.subVectors(e,n),Vn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Vn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Nr.subVectors(r,i),Or.subVectors(s,i),ec.subVectors(e,i);const c=Nr.dot(ec),l=Or.dot(ec);if(c<=0&&l<=0)return n.copy(i);tc.subVectors(e,r);const u=Nr.dot(tc),h=Or.dot(tc);if(u>=0&&h<=u)return n.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(Nr,a);nc.subVectors(e,s);const g=Nr.dot(nc),_=Or.dot(nc);if(_>=0&&g<=_)return n.copy(s);const M=g*l-c*_;if(M<=0&&l>=0&&_<=0)return o=l/(l-_),n.copy(i).addScaledVector(Or,o);const p=u*_-g*h;if(p<=0&&h-u>=0&&g-_>=0)return Lh.subVectors(s,r),o=(h-u)/(h-u+(g-_)),n.copy(r).addScaledVector(Lh,o);const f=1/(p+M+d);return a=M*f,o=d*f,n.copy(i).addScaledVector(Nr,a).addScaledVector(Or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function ac(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=tu(e,1),n=He(n,0,1),i=He(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ac(a,s,e+1/3),this.g=ac(a,s,e),this.b=ac(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=Ln){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ln){const i=kd[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return je.workingToColorSpace(jt.copy(this),e),Math.round(He(jt.r*255,0,255))*65536+Math.round(He(jt.g*255,0,255))*256+Math.round(He(jt.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Ln){je.workingToColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Ln?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(_a);const i=ks(zi.h,_a.h,n),r=ks(zi.s,_a.s,n),s=ks(zi.l,_a.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new qe;qe.NAMES=kd;let mg=0;class na extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=qr,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Dc,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lc&&(i.blendSrc=this.blendSrc),this.blendDst!==Dc&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zd extends na{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new B,va=new ct;let gg=0;class Nn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gg++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gh,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)va.fromBufferAttribute(this,n),va.applyMatrix3(e),this.setXY(n,va.x,va.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Wr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Wr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Wr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Wr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Wr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gh&&(e.usage=this.usage),e}}class Gd extends Nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Vd extends Nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class bi extends Nn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let _g=0;const wn=new Lt,oc=new un,Br=new B,_n=new ta,Cs=new ta,Ht=new B;class Xn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fd(e)?Vd:Gd)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return oc.lookAt(e),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ta);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(_n.min,Cs.min),_n.expandByPoint(Ht),Ht.addVectors(_n.max,Cs.max),_n.expandByPoint(Ht)):(_n.expandByPoint(Cs.min),_n.expandByPoint(Cs.max))}_n.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ht.fromBufferAttribute(o,l),c&&(Br.fromBufferAttribute(e,l),Ht.add(Br)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<i.count;U++)o[U]=new B,c[U]=new B;const l=new B,u=new B,h=new B,d=new ct,g=new ct,_=new ct,M=new B,p=new B;function f(U,v,S){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,U),g.fromBufferAttribute(s,v),_.fromBufferAttribute(s,S),u.sub(l),h.sub(l),g.sub(d),_.sub(d);const C=1/(g.x*_.y-_.x*g.y);isFinite(C)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(h,-g.y).multiplyScalar(C),p.copy(h).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(C),o[U].add(M),o[v].add(M),o[S].add(M),c[U].add(p),c[v].add(p),c[S].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,v=b.length;U<v;++U){const S=b[U],C=S.start,O=S.count;for(let F=C,V=C+O;F<V;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new B,T=new B,A=new B,R=new B;function w(U){A.fromBufferAttribute(r,U),R.copy(A);const v=o[U];y.copy(v),y.sub(A.multiplyScalar(A.dot(v))).normalize(),T.crossVectors(R,v);const C=T.dot(c[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,C)}for(let U=0,v=b.length;U<v;++U){const S=b[U],C=S.start,O=S.count;for(let F=C,V=C+O;F<V;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,a=new B,o=new B,c=new B,l=new B,u=new B,h=new B;if(e)for(let d=0,g=e.count;d<g;d+=3){const _=e.getX(d+0),M=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let g=0,_=0;for(let M=0,p=c.length;M<p;M++){o.isInterleavedBufferAttribute?g=c[M]*o.data.stride+o.offset:g=c[M]*u;for(let f=0;f<u;f++)d[_++]=l[g++]}return new Nn(d,u,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],g=e(d,i);c.push(g)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const g=l[h];u.push(g.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,g=h.length;d<g;d++)u.push(h[d].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dh=new Lt,or=new Od,xa=new ro,Ih=new B,Ma=new B,Sa=new B,Ea=new B,cc=new B,ya=new B,Uh=new B,Ta=new B;class Di extends un{constructor(e=new Xn,n=new zd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ya.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(cc.fromBufferAttribute(h,e),a?ya.addScaledVector(cc,u):ya.addScaledVector(cc.sub(n),u))}n.add(ya)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(xa.containsPoint(or.origin)===!1&&(or.intersectSphere(xa,Ih)===null||or.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Dh.copy(s).invert(),or.copy(e.ray).applyMatrix4(Dh),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=d.length;_<M;_++){const p=d[_],f=a[p.materialIndex],b=Math.max(p.start,g.start),y=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let T=b,A=y;T<A;T+=3){const R=o.getX(T),w=o.getX(T+1),U=o.getX(T+2);r=ba(this,f,e,i,l,u,h,R,w,U),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),M=Math.min(o.count,g.start+g.count);for(let p=_,f=M;p<f;p+=3){const b=o.getX(p),y=o.getX(p+1),T=o.getX(p+2);r=ba(this,a,e,i,l,u,h,b,y,T),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=d.length;_<M;_++){const p=d[_],f=a[p.materialIndex],b=Math.max(p.start,g.start),y=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let T=b,A=y;T<A;T+=3){const R=T,w=T+1,U=T+2;r=ba(this,f,e,i,l,u,h,R,w,U),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let p=_,f=M;p<f;p+=3){const b=p,y=p+1,T=p+2;r=ba(this,a,e,i,l,u,h,b,y,T),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function vg(t,e,n,i,r,s,a,o){let c;if(e.side===ln?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Zi,o),c===null)return null;Ta.copy(o),Ta.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Ta);return l<n.near||l>n.far?null:{distance:l,point:Ta.clone(),object:t}}function ba(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,Ma),t.getVertexPosition(c,Sa),t.getVertexPosition(l,Ea);const u=vg(t,e,n,i,Ma,Sa,Ea,Uh);if(u){const h=new B;Hn.getBarycoord(Uh,Ma,Sa,Ea,h),r&&(u.uv=Hn.getInterpolatedAttribute(r,o,c,l,h,new ct)),s&&(u.uv1=Hn.getInterpolatedAttribute(s,o,c,l,h,new ct)),a&&(u.normal=Hn.getInterpolatedAttribute(a,o,c,l,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new B,materialIndex:0};Hn.getNormal(Ma,Sa,Ea,d.normal),u.face=d,u.barycoord=h}return u}class ia extends Xn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new bi(l,3)),this.setAttribute("normal",new bi(u,3)),this.setAttribute("uv",new bi(h,2));function _(M,p,f,b,y,T,A,R,w,U,v){const S=T/w,C=A/U,O=T/2,F=A/2,V=R/2,H=w+1,W=U+1;let z=0,$=0;const ue=new B;for(let ae=0;ae<W;ae++){const he=ae*C-F;for(let Ge=0;Ge<H;Ge++){const Be=Ge*S-O;ue[M]=Be*b,ue[p]=he*y,ue[f]=V,l.push(ue.x,ue.y,ue.z),ue[M]=0,ue[p]=0,ue[f]=R>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(Ge/w),h.push(1-ae/U),z+=1}}for(let ae=0;ae<U;ae++)for(let he=0;he<w;he++){const Ge=d+he+H*ae,Be=d+he+H*(ae+1),Et=d+(he+1)+H*(ae+1),_t=d+(he+1)+H*ae;c.push(Ge,Be,_t),c.push(Be,Et,_t),$+=6}o.addGroup(g,$,v),g+=$,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=ts(t[n]);for(const r in i)e[r]=i[r]}return e}function xg(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Hd(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Mg={clone:ts,merge:Qt};var Sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends na{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sg,this.fragmentShader=Eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=xg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Wd extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new B,Fh=new ct,Nh=new ct;class Dn extends Wd{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,n){return this.getViewBounds(e,Fh,Nh),n.subVectors(Nh,Fh)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const kr=-90,zr=1;class yg extends un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(kr,zr,e,n);r.layers=this.layers,this.add(r);const s=new Dn(kr,zr,e,n);s.layers=this.layers,this.add(s);const a=new Dn(kr,zr,e,n);a.layers=this.layers,this.add(a);const o=new Dn(kr,zr,e,n);o.layers=this.layers,this.add(o);const c=new Dn(kr,zr,e,n);c.layers=this.layers,this.add(c);const l=new Dn(kr,zr,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,l),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Xd extends en{constructor(e=[],n=Sr,i,r,s,a,o,c,l,u){super(e,n,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qd extends ai{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xd(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ia(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:yi});s.uniforms.tEquirect.value=n;const a=new Di(r,s),o=n.minFilter;return n.minFilter===gr&&(n.minFilter=$t),new yg(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class Aa extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tg={type:"move"};class lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const p=n.getJointPose(M,i),f=this._getHandJoint(l,M);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),g=.02,_=.005;l.inputState.pinching&&d>g+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=g-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Aa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class bg extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ag extends en{constructor(e=null,n=1,i=1,r,s,a,o,c,l=qt,u=qt,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uc=new B,wg=new B,Rg=new Ne;class fr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=uc.subVectors(i,n).cross(wg.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(uc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Rg.getNormalMatrix(e),r=this.coplanarPoint(uc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new ro,Cg=new ct(.5,.5),wa=new B;class Yd{constructor(e=new fr,n=new fr,i=new fr,r=new fr,s=new fr,a=new fr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],g=s[7],_=s[8],M=s[9],p=s[10],f=s[11],b=s[12],y=s[13],T=s[14],A=s[15];if(r[0].setComponents(l-a,g-u,f-_,A-b).normalize(),r[1].setComponents(l+a,g+u,f+_,A+b).normalize(),r[2].setComponents(l+o,g+h,f+M,A+y).normalize(),r[3].setComponents(l-o,g-h,f-M,A-y).normalize(),i)r[4].setComponents(c,d,p,T).normalize(),r[5].setComponents(l-c,g-d,f-p,A-T).normalize();else if(r[4].setComponents(l-c,g-d,f-p,A-T).normalize(),n===ri)r[5].setComponents(l+c,g+d,f+p,A+T).normalize();else if(n===Ka)r[5].setComponents(c,d,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){cr.center.set(0,0,0);const n=Cg.distanceTo(e.center);return cr.radius=.7071067811865476+n,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(wa.x=r.normal.x>0?e.max.x:e.min.x,wa.y=r.normal.y>0?e.max.y:e.min.y,wa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jd extends na{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Oh=new Lt,El=new Od,Ra=new ro,Ca=new B;class Pg extends un{constructor(e=new Xn,n=new jd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(r),Ra.radius+=s,e.ray.intersectsSphere(Ra)===!1)return;Oh.copy(r).invert(),El.copy(e.ray).applyMatrix4(Oh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),g=Math.min(l.count,a.start+a.count);for(let _=d,M=g;_<M;_++){const p=l.getX(_);Ca.fromBufferAttribute(h,p),Bh(Ca,p,c,r,e,n,this)}}else{const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,M=g;_<M;_++)Ca.fromBufferAttribute(h,_),Bh(Ca,_,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bh(t,e,n,i,r,s,a){const o=El.distanceSqToPoint(t);if(o<n){const c=new B;El.closestPointToPoint(t,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ys extends en{constructor(e,n,i=oi,r,s,a,o=qt,c=qt,l,u=Pi,h=1){if(u!==Pi&&u!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Lg extends Ys{constructor(e,n=oi,i=Sr,r,s,a=qt,o=qt,c,l=Pi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kd extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class so extends Xn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=n/c,g=[],_=[],M=[],p=[];for(let f=0;f<u;f++){const b=f*d-a;for(let y=0;y<l;y++){const T=y*h-s;_.push(T,-b,0),M.push(0,0,1),p.push(y/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<o;b++){const y=b+l*f,T=b+l*(f+1),A=b+1+l*(f+1),R=b+1+l*f;g.push(y,T,R),g.push(T,A,R)}this.setIndex(g),this.setAttribute("position",new bi(_,3)),this.setAttribute("normal",new bi(M,3)),this.setAttribute("uv",new bi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dg extends ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ig extends na{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ug extends na{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $d extends Wd{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Fg extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function kh(t,e,n,i){const r=Ng(i);switch(n){case Dd:return t*e;case Ud:return t*e/r.components*r.byteLength;case $l:return t*e/r.components*r.byteLength;case Qr:return t*e*2/r.components*r.byteLength;case Zl:return t*e*2/r.components*r.byteLength;case Id:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case Jl:return t*e*4/r.components*r.byteLength;case Ba:case ka:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case za:case Ga:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xc:case Yc:return Math.max(t,16)*Math.max(e,8)/4;case Wc:case qc:return Math.max(t,8)*Math.max(e,8)/2;case jc:case Kc:case Zc:case Jc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $c:case Qc:case el:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case rl:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case sl:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case al:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case cl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ul:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case fl:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ml:case gl:case _l:return Math.ceil(t/4)*Math.ceil(e/4)*16;case vl:case xl:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ml:case Sl:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ng(t){switch(t){case Un:case Rd:return{byteLength:1,components:1};case Hs:case Cd:case Ci:return{byteLength:2,components:1};case jl:case Kl:return{byteLength:2,components:4};case oi:case Yl:case ii:return{byteLength:4,components:1};case Pd:case Ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ql}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ql);function Zd(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Og(t){const e=new WeakMap;function n(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,l,u),o.onUploadCallback();let g;if(l instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=t.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=t.SHORT;else if(l instanceof Uint32Array)g=t.UNSIGNED_INT;else if(l instanceof Int32Array)g=t.INT;else if(l instanceof Int8Array)g=t.BYTE;else if(l instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(t.bindBuffer(l,o),h.length===0)t.bufferSubData(l,0,u);else{h.sort((g,_)=>g.start-_.start);let d=0;for(let g=1;g<h.length;g++){const _=h[d],M=h[g];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++d,h[d]=M)}h.length=d+1;for(let g=0,_=h.length;g<_;g++){const M=h[g];t.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$g=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,o_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,l_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,u_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p_="gl_FragColor = linearToOutputTexel( gl_FragColor );",m_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,S_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,P_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,L_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,N_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,O_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,B_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,e1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,o1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,d1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,w1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,L1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,N1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,X1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,q1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,m2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Bg,alphahash_pars_fragment:kg,alphamap_fragment:zg,alphamap_pars_fragment:Gg,alphatest_fragment:Vg,alphatest_pars_fragment:Hg,aomap_fragment:Wg,aomap_pars_fragment:Xg,batching_pars_vertex:qg,batching_vertex:Yg,begin_vertex:jg,beginnormal_vertex:Kg,bsdfs:$g,iridescence_fragment:Zg,bumpmap_pars_fragment:Jg,clipping_planes_fragment:Qg,clipping_planes_pars_fragment:e_,clipping_planes_pars_vertex:t_,clipping_planes_vertex:n_,color_fragment:i_,color_pars_fragment:r_,color_pars_vertex:s_,color_vertex:a_,common:o_,cube_uv_reflection_fragment:c_,defaultnormal_vertex:l_,displacementmap_pars_vertex:u_,displacementmap_vertex:h_,emissivemap_fragment:f_,emissivemap_pars_fragment:d_,colorspace_fragment:p_,colorspace_pars_fragment:m_,envmap_fragment:g_,envmap_common_pars_fragment:__,envmap_pars_fragment:v_,envmap_pars_vertex:x_,envmap_physical_pars_fragment:P_,envmap_vertex:M_,fog_vertex:S_,fog_pars_vertex:E_,fog_fragment:y_,fog_pars_fragment:T_,gradientmap_pars_fragment:b_,lightmap_pars_fragment:A_,lights_lambert_fragment:w_,lights_lambert_pars_fragment:R_,lights_pars_begin:C_,lights_toon_fragment:L_,lights_toon_pars_fragment:D_,lights_phong_fragment:I_,lights_phong_pars_fragment:U_,lights_physical_fragment:F_,lights_physical_pars_fragment:N_,lights_fragment_begin:O_,lights_fragment_maps:B_,lights_fragment_end:k_,logdepthbuf_fragment:z_,logdepthbuf_pars_fragment:G_,logdepthbuf_pars_vertex:V_,logdepthbuf_vertex:H_,map_fragment:W_,map_pars_fragment:X_,map_particle_fragment:q_,map_particle_pars_fragment:Y_,metalnessmap_fragment:j_,metalnessmap_pars_fragment:K_,morphinstance_vertex:$_,morphcolor_vertex:Z_,morphnormal_vertex:J_,morphtarget_pars_vertex:Q_,morphtarget_vertex:e1,normal_fragment_begin:t1,normal_fragment_maps:n1,normal_pars_fragment:i1,normal_pars_vertex:r1,normal_vertex:s1,normalmap_pars_fragment:a1,clearcoat_normal_fragment_begin:o1,clearcoat_normal_fragment_maps:c1,clearcoat_pars_fragment:l1,iridescence_pars_fragment:u1,opaque_fragment:h1,packing:f1,premultiplied_alpha_fragment:d1,project_vertex:p1,dithering_fragment:m1,dithering_pars_fragment:g1,roughnessmap_fragment:_1,roughnessmap_pars_fragment:v1,shadowmap_pars_fragment:x1,shadowmap_pars_vertex:M1,shadowmap_vertex:S1,shadowmask_pars_fragment:E1,skinbase_vertex:y1,skinning_pars_vertex:T1,skinning_vertex:b1,skinnormal_vertex:A1,specularmap_fragment:w1,specularmap_pars_fragment:R1,tonemapping_fragment:C1,tonemapping_pars_fragment:P1,transmission_fragment:L1,transmission_pars_fragment:D1,uv_pars_fragment:I1,uv_pars_vertex:U1,uv_vertex:F1,worldpos_vertex:N1,background_vert:O1,background_frag:B1,backgroundCube_vert:k1,backgroundCube_frag:z1,cube_vert:G1,cube_frag:V1,depth_vert:H1,depth_frag:W1,distance_vert:X1,distance_frag:q1,equirect_vert:Y1,equirect_frag:j1,linedashed_vert:K1,linedashed_frag:$1,meshbasic_vert:Z1,meshbasic_frag:J1,meshlambert_vert:Q1,meshlambert_frag:e2,meshmatcap_vert:t2,meshmatcap_frag:n2,meshnormal_vert:i2,meshnormal_frag:r2,meshphong_vert:s2,meshphong_frag:a2,meshphysical_vert:o2,meshphysical_frag:c2,meshtoon_vert:l2,meshtoon_frag:u2,points_vert:h2,points_frag:f2,shadow_vert:d2,shadow_frag:p2,sprite_vert:m2,sprite_frag:g2},oe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},ti={basic:{uniforms:Qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Qt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Qt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Qt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Qt([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Qt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Qt([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Qt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Qt([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Qt([oe.common,oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Qt([oe.lights,oe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ti.physical={uniforms:Qt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Pa={r:0,b:0,g:0},lr=new Li,_2=new Lt;function v2(t,e,n,i,r,s,a){const o=new qe(0);let c=s===!0?0:1,l,u,h=null,d=0,g=null;function _(y){let T=y.isScene===!0?y.background:null;return T&&T.isTexture&&(T=(y.backgroundBlurriness>0?n:e).get(T)),T}function M(y){let T=!1;const A=_(y);A===null?f(o,c):A&&A.isColor&&(f(A,1),T=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(y,T){const A=_(T);A&&(A.isCubeTexture||A.mapping===io)?(u===void 0&&(u=new Di(new ia(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:ts(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),lr.copy(T.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_2.makeRotationFromEuler(lr)),u.material.toneMapped=je.getTransfer(A.colorSpace)!==at,(h!==A||d!==A.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,g=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Di(new so(2,2),new ci({name:"BackgroundMaterial",uniforms:ts(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=je.getTransfer(A.colorSpace)!==at,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||g!==t.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,g=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,T){y.getRGB(Pa,Hd(t)),i.buffers.color.setClear(Pa.r,Pa.g,Pa.b,T,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),c=T,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(o,c)},render:M,addToRenderList:p,dispose:b}}function x2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(S,C,O,F,V){let H=!1;const W=h(F,O,C);s!==W&&(s=W,l(s.object)),H=g(S,F,O,V),H&&_(S,F,O,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,T(S,C,O,F),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return t.createVertexArray()}function l(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function h(S,C,O){const F=O.wireframe===!0;let V=i[S.id];V===void 0&&(V={},i[S.id]=V);let H=V[C.id];H===void 0&&(H={},V[C.id]=H);let W=H[F];return W===void 0&&(W=d(c()),H[F]=W),W}function d(S){const C=[],O=[],F=[];for(let V=0;V<n;V++)C[V]=0,O[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:F,object:S,attributes:{},index:null}}function g(S,C,O,F){const V=s.attributes,H=C.attributes;let W=0;const z=O.getAttributes();for(const $ in z)if(z[$].location>=0){const ae=V[$];let he=H[$];if(he===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),ae===void 0||ae.attribute!==he||he&&ae.data!==he.data)return!0;W++}return s.attributesNum!==W||s.index!==F}function _(S,C,O,F){const V={},H=C.attributes;let W=0;const z=O.getAttributes();for(const $ in z)if(z[$].location>=0){let ae=H[$];ae===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor));const he={};he.attribute=ae,ae&&ae.data&&(he.data=ae.data),V[$]=he,W++}s.attributes=V,s.attributesNum=W,s.index=F}function M(){const S=s.newAttributes;for(let C=0,O=S.length;C<O;C++)S[C]=0}function p(S){f(S,0)}function f(S,C){const O=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;O[S]=1,F[S]===0&&(t.enableVertexAttribArray(S),F[S]=1),V[S]!==C&&(t.vertexAttribDivisor(S,C),V[S]=C)}function b(){const S=s.newAttributes,C=s.enabledAttributes;for(let O=0,F=C.length;O<F;O++)C[O]!==S[O]&&(t.disableVertexAttribArray(O),C[O]=0)}function y(S,C,O,F,V,H,W){W===!0?t.vertexAttribIPointer(S,C,O,V,H):t.vertexAttribPointer(S,C,O,F,V,H)}function T(S,C,O,F){M();const V=F.attributes,H=O.getAttributes(),W=C.defaultAttributeValues;for(const z in H){const $=H[z];if($.location>=0){let ue=V[z];if(ue===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ue!==void 0){const ae=ue.normalized,he=ue.itemSize,Ge=e.get(ue);if(Ge===void 0)continue;const Be=Ge.buffer,Et=Ge.type,_t=Ge.bytesPerElement,Y=Et===t.INT||Et===t.UNSIGNED_INT||ue.gpuType===Yl;if(ue.isInterleavedBufferAttribute){const Z=ue.data,me=Z.stride,Fe=ue.offset;if(Z.isInstancedInterleavedBuffer){for(let xe=0;xe<$.locationSize;xe++)f($.location+xe,Z.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let xe=0;xe<$.locationSize;xe++)p($.location+xe);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let xe=0;xe<$.locationSize;xe++)y($.location+xe,he/$.locationSize,Et,ae,me*_t,(Fe+he/$.locationSize*xe)*_t,Y)}else{if(ue.isInstancedBufferAttribute){for(let Z=0;Z<$.locationSize;Z++)f($.location+Z,ue.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Z=0;Z<$.locationSize;Z++)p($.location+Z);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let Z=0;Z<$.locationSize;Z++)y($.location+Z,he/$.locationSize,Et,ae,he*_t,he/$.locationSize*Z*_t,Y)}}else if(W!==void 0){const ae=W[z];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv($.location,ae);break;case 3:t.vertexAttrib3fv($.location,ae);break;case 4:t.vertexAttrib4fv($.location,ae);break;default:t.vertexAttrib1fv($.location,ae)}}}}b()}function A(){U();for(const S in i){const C=i[S];for(const O in C){const F=C[O];for(const V in F)u(F[V].object),delete F[V];delete C[O]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const O in C){const F=C[O];for(const V in F)u(F[V].object),delete F[V];delete C[O]}delete i[S.id]}function w(S){for(const C in i){const O=i[C];if(O[S.id]===void 0)continue;const F=O[S.id];for(const V in F)u(F[V].object),delete F[V];delete O[S.id]}}function U(){v(),a=!0,s!==r&&(s=r,l(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:p,disableUnusedAttributes:b}}function M2(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,h){h!==0&&(t.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];n.update(g,i,1)}function c(l,u,h,d){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<l.length;_++)a(l[_],u[_],d[_]);else{g.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let _=0;for(let M=0;M<h;M++)_+=u[M]*d[M];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function S2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Wn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const U=w===Ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Un&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ii&&!U)}function c(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(Ie("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),T=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:T,maxSamples:A,samples:R}}function E2(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new fr,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,g){const _=h.clippingPlanes,M=h.clipIntersection,p=h.clipShadows,f=t.get(h);if(!r||_===null||_.length===0||s&&!p)s?u(null):l();else{const b=s?0:i,y=b*4;let T=f.clippingState||null;c.value=T,T=u(_,d,y,g);for(let A=0;A!==y;++A)T[A]=n[A];f.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,g,_){const M=h!==null?h.length:0;let p=null;if(M!==0){if(p=c.value,_!==!0||p===null){const f=g+M*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,T=g;y!==M;++y,T+=4)a.copy(h[y]).applyMatrix4(b,o),a.normal.toArray(p,T),p[T+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function y2(t){let e=new WeakMap;function n(a,o){return o===zc?a.mapping=Sr:o===Gc&&(a.mapping=Jr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===zc||o===Gc)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new qd(c.height);return l.fromEquirectangularTexture(t,a),e.set(a,l),a.addEventListener("dispose",r),n(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const qi=4,zh=[.125,.215,.35,.446,.526,.582],mr=20,T2=256,Ps=new $d,Gh=new qe;let hc=null,fc=0,dc=0,pc=!1;const b2=new B;class Vh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=b2}=s;hc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hc,fc,dc),this._renderer.xr.enabled=pc,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Sr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Ci,format:Wn,colorSpace:es,depthBuffer:!1},r=Hh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=A2(s)),this._blurMaterial=R2(s,e,n),this._ggxMaterial=w2(s,e,n)}return r}_compileMaterial(e){const n=new Di(new Xn,e);this._renderer.compile(n,Ps)}_sceneToCubeUV(e,n,i,r,s){const c=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,g=h.toneMapping;h.getClearColor(Gh),h.toneMapping=si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new ia,new zd({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,p=M.material;let f=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,f=!0):(p.color.copy(Gh),f=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):T===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const A=this._cubeSize;Gr(r,T*A,y>2?A:0,A,A),h.setRenderTarget(r),f&&h.render(M,c),h.render(e,c)}h.toneMapping=g,h.autoClear=d,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Sr||e.mapping===Jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Gr(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Ps)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,g=h*d,{_lodMax:_}=this,M=this._sizeLods[i],p=3*M*(i>_-qi?i-_+qi:0),f=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=_-n,Gr(s,p,f,3*M,2*M),r.setRenderTarget(s),r.render(o,Ps),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,Gr(e,p,f,3*M,2*M),r.setRenderTarget(e),r.render(o,Ps)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=l;const d=l.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*mr-1),M=s/_,p=isFinite(s)?1+Math.floor(u*M):mr;p>mr&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mr}`);const f=[];let b=0;for(let w=0;w<mr;++w){const U=w/M,v=Math.exp(-U*U/2);f.push(v),w===0?b+=v:w<p&&(b+=2*v)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const T=this._sizeLods[r],A=3*T*(r>y-qi?r-y+qi:0),R=4*(this._cubeSize-T);Gr(n,A,R,3*T,2*T),c.setRenderTarget(n),c.render(h,Ps)}}function A2(t){const e=[],n=[],i=[];let r=t;const s=t-qi+1+zh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>t-qi?c=zh[a-t+qi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,_=6,M=3,p=2,f=1,b=new Float32Array(M*_*g),y=new Float32Array(p*_*g),T=new Float32Array(f*_*g);for(let R=0;R<g;R++){const w=R%3*2/3-1,U=R>2?0:-1,v=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];b.set(v,M*_*R),y.set(d,p*_*R);const S=[R,R,R,R,R,R];T.set(S,f*_*R)}const A=new Xn;A.setAttribute("position",new Nn(b,M)),A.setAttribute("uv",new Nn(y,p)),A.setAttribute("faceIndex",new Nn(T,f)),i.push(new Di(A,null)),r>qi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Hh(t,e,n){const i=new ai(t,e,n);return i.texture.mapping=io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function w2(t,e,n){return new ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ao(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function R2(t,e,n){const i=new Float32Array(mr),r=new B(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Wh(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Xh(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C2(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===zc||c===Gc,u=c===Sr||c===Jr;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new Vh(t)),h=l?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const g=o.image;return l&&g&&g.height>0||u&&g&&r(g)?(n===null&&(n=new Vh(t)),h=l?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function P2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Xs("WebGLRenderer: "+i+" extension not supported."),r}}}function L2(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER)}function l(h){const d=[],g=h.index,_=h.attributes.position;let M=0;if(g!==null){const b=g.array;M=g.version;for(let y=0,T=b.length;y<T;y+=3){const A=b[y+0],R=b[y+1],w=b[y+2];d.push(A,R,R,w,w,A)}}else if(_!==void 0){const b=_.array;M=_.version;for(let y=0,T=b.length/3-1;y<T;y+=3){const A=y+0,R=y+1,w=y+2;d.push(A,R,R,w,w,A)}}else return;const p=new(Fd(d)?Vd:Gd)(d,1);p.version=M;const f=s.get(h);f&&e.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function D2(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,g){t.drawElements(i,g,s,d*a),n.update(g,i,1)}function l(d,g,_){_!==0&&(t.drawElementsInstanced(i,g,s,d*a,_),n.update(g,i,_))}function u(d,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,d,0,_);let p=0;for(let f=0;f<_;f++)p+=g[f];n.update(p,i,1)}function h(d,g,_,M){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/a,g[f],M[f]);else{p.multiDrawElementsInstancedWEBGL(i,g,0,s,d,0,M,0,_);let f=0;for(let b=0;b<_;b++)f+=g[b]*M[b];n.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function I2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function U2(t,e,n){const i=new WeakMap,r=new Pt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let S=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var g=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),M===!0&&(T=2),p===!0&&(T=3);let A=o.attributes.position.count*T,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*R*4*h),U=new Nd(w,A,R,h);U.type=ii,U.needsUpdate=!0;const v=T*4;for(let C=0;C<h;C++){const O=f[C],F=b[C],V=y[C],H=A*R*4*C;for(let W=0;W<O.count;W++){const z=W*v;_===!0&&(r.fromBufferAttribute(O,W),w[H+z+0]=r.x,w[H+z+1]=r.y,w[H+z+2]=r.z,w[H+z+3]=0),M===!0&&(r.fromBufferAttribute(F,W),w[H+z+4]=r.x,w[H+z+5]=r.y,w[H+z+6]=r.z,w[H+z+7]=0),p===!0&&(r.fromBufferAttribute(V,W),w[H+z+8]=r.x,w[H+z+9]=r.y,w[H+z+10]=r.z,w[H+z+11]=V.itemSize===4?r.w:1)}}d={count:h,texture:U,size:new ct(A,R)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const M=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",M),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function F2(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:a}}const N2={[Md]:"LINEAR_TONE_MAPPING",[Sd]:"REINHARD_TONE_MAPPING",[Ed]:"CINEON_TONE_MAPPING",[yd]:"ACES_FILMIC_TONE_MAPPING",[bd]:"AGX_TONE_MAPPING",[Ad]:"NEUTRAL_TONE_MAPPING",[Td]:"CUSTOM_TONE_MAPPING"};function O2(t,e,n,i,r){const s=new ai(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new ai(e,n,{type:Ci,depthBuffer:!1,stencilBuffer:!1}),o=new Xn;o.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new bi([0,2,0,0,2,0],2));const c=new Dg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Di(o,c),u=new $d(-1,1,1,-1,0,1);let h=null,d=null,g=!1,_,M=null,p=[],f=!1;this.setSize=function(b,y){s.setSize(b,y),a.setSize(b,y);for(let T=0;T<p.length;T++){const A=p[T];A.setSize&&A.setSize(b,y)}},this.setEffects=function(b){p=b,f=p.length>0&&p[0].isRenderPass===!0;const y=s.width,T=s.height;for(let A=0;A<p.length;A++){const R=p[A];R.setSize&&R.setSize(y,T)}},this.begin=function(b,y){if(g||b.toneMapping===si&&p.length===0)return!1;if(M=y,y!==null){const T=y.width,A=y.height;(s.width!==T||s.height!==A)&&this.setSize(T,A)}return f===!1&&b.setRenderTarget(s),_=b.toneMapping,b.toneMapping=si,!0},this.hasRenderPass=function(){return f},this.end=function(b,y){b.toneMapping=_,g=!0;let T=s,A=a;for(let R=0;R<p.length;R++){const w=p[R];if(w.enabled!==!1&&(w.render(b,A,T,y),w.needsSwap!==!1)){const U=T;T=A,A=U}}if(h!==b.outputColorSpace||d!==b.toneMapping){h=b.outputColorSpace,d=b.toneMapping,c.defines={},je.getTransfer(h)===at&&(c.defines.SRGB_TRANSFER="");const R=N2[d];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(M),b.render(l,u),M=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Jd=new en,yl=new Ys(1,1),Qd=new Nd,ep=new og,tp=new Xd,qh=[],Yh=[],jh=new Float32Array(16),Kh=new Float32Array(9),$h=new Float32Array(4);function ms(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=qh[r];if(s===void 0&&(s=new Float32Array(r),qh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function oo(t,e){let n=Yh[e];n===void 0&&(n=new Int32Array(e),Yh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function B2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function k2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function G2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function V2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(zt(n,i))return;$h.set(i),t.uniformMatrix2fv(this.addr,!1,$h),Gt(n,i)}}function H2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(zt(n,i))return;Kh.set(i),t.uniformMatrix3fv(this.addr,!1,Kh),Gt(n,i)}}function W2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(zt(n,i))return;jh.set(i),t.uniformMatrix4fv(this.addr,!1,jh),Gt(n,i)}}function X2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function Y2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function j2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function K2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function $2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function Z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function J2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function Q2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(yl.compareFunction=n.isReversedDepthBuffer()?eu:Ql,s=yl):s=Jd,n.setTexture2D(e||s,r)}function ev(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ep,r)}function tv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||tp,r)}function nv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Qd,r)}function iv(t){switch(t){case 5126:return B2;case 35664:return k2;case 35665:return z2;case 35666:return G2;case 35674:return V2;case 35675:return H2;case 35676:return W2;case 5124:case 35670:return X2;case 35667:case 35671:return q2;case 35668:case 35672:return Y2;case 35669:case 35673:return j2;case 5125:return K2;case 36294:return $2;case 36295:return Z2;case 36296:return J2;case 35678:case 36198:case 36298:case 36306:case 35682:return Q2;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return nv}}function rv(t,e){t.uniform1fv(this.addr,e)}function sv(t,e){const n=ms(e,this.size,2);t.uniform2fv(this.addr,n)}function av(t,e){const n=ms(e,this.size,3);t.uniform3fv(this.addr,n)}function ov(t,e){const n=ms(e,this.size,4);t.uniform4fv(this.addr,n)}function cv(t,e){const n=ms(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lv(t,e){const n=ms(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function uv(t,e){const n=ms(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function hv(t,e){t.uniform1iv(this.addr,e)}function fv(t,e){t.uniform2iv(this.addr,e)}function dv(t,e){t.uniform3iv(this.addr,e)}function pv(t,e){t.uniform4iv(this.addr,e)}function mv(t,e){t.uniform1uiv(this.addr,e)}function gv(t,e){t.uniform2uiv(this.addr,e)}function _v(t,e){t.uniform3uiv(this.addr,e)}function vv(t,e){t.uniform4uiv(this.addr,e)}function xv(t,e,n){const i=this.cache,r=e.length,s=oo(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=yl:a=Jd;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Mv(t,e,n){const i=this.cache,r=e.length,s=oo(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||ep,s[a])}function Sv(t,e,n){const i=this.cache,r=e.length,s=oo(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||tp,s[a])}function Ev(t,e,n){const i=this.cache,r=e.length,s=oo(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Qd,s[a])}function yv(t){switch(t){case 5126:return rv;case 35664:return sv;case 35665:return av;case 35666:return ov;case 35674:return cv;case 35675:return lv;case 35676:return uv;case 5124:case 35670:return hv;case 35667:case 35671:return fv;case 35668:case 35672:return dv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return _v;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return Ev}}class Tv{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=iv(n.type)}}class bv{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yv(n.type)}}class Av{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const mc=/(\w+)(\])?(\[|\.)?/g;function Zh(t,e){t.seq.push(e),t.map[e.id]=e}function wv(t,e,n){const i=t.name,r=i.length;for(mc.lastIndex=0;;){const s=mc.exec(i),a=mc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Zh(n,l===void 0?new Tv(o,t,e):new bv(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new Av(o),Zh(n,h)),n=h}}}class Va{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);wv(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Jh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Rv=37297;let Cv=0;function Pv(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Qh=new Ne;function Lv(t){je._getMatrix(Qh,je.workingColorSpace,t);const e=`mat3( ${Qh.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case ja:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ef(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Pv(t.getShaderSource(e),o)}else return s}function Dv(t,e){const n=Lv(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Iv={[Md]:"Linear",[Sd]:"Reinhard",[Ed]:"Cineon",[yd]:"ACESFilmic",[bd]:"AgX",[Ad]:"Neutral",[Td]:"Custom"};function Uv(t,e){const n=Iv[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const La=new B;function Fv(){je.getLuminanceCoefficients(La);const t=La.x.toFixed(4),e=La.y.toFixed(4),n=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nv(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function Ov(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Bv(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Fs(t){return t!==""}function tf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(t){return t.replace(kv,Gv)}const zv=new Map;function Gv(t,e){let n=Oe[e];if(n===void 0){const i=zv.get(e);if(i!==void 0)n=Oe[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Tl(n)}const Vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rf(t){return t.replace(Vv,Hv)}function Hv(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sf(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Wv={[Oa]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function Xv(t){return Wv[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qv={[Sr]:"ENVMAP_TYPE_CUBE",[Jr]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE_UV"};function Yv(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":qv[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const jv={[Jr]:"ENVMAP_MODE_REFRACTION"};function Kv(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":jv[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $v={[xd]:"ENVMAP_BLENDING_MULTIPLY",[A0]:"ENVMAP_BLENDING_MIX",[w0]:"ENVMAP_BLENDING_ADD"};function Zv(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":$v[t.combine]||"ENVMAP_BLENDING_NONE"}function Jv(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Qv(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=Xv(n),l=Yv(n),u=Kv(n),h=Zv(n),d=Jv(n),g=Nv(n),_=Ov(s),M=r.createProgram();let p,f,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Fs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Fs).join(`
`),f.length>0&&(f+=`
`)):(p=[sf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),f=[sf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==si?"#define TONE_MAPPING":"",n.toneMapping!==si?Oe.tonemapping_pars_fragment:"",n.toneMapping!==si?Uv("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Dv("linearToOutputTexel",n.outputColorSpace),Fv(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fs).join(`
`)),a=Tl(a),a=tf(a,n),a=nf(a,n),o=Tl(o),o=tf(o,n),o=nf(o,n),a=rf(a),o=rf(o),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=b+p+a,T=b+f+o,A=Jh(r,r.VERTEX_SHADER,y),R=Jh(r,r.FRAGMENT_SHADER,T);r.attachShader(M,A),r.attachShader(M,R),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function w(C){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(M)||"",F=r.getShaderInfoLog(A)||"",V=r.getShaderInfoLog(R)||"",H=O.trim(),W=F.trim(),z=V.trim();let $=!0,ue=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,A,R);else{const ae=ef(r,A,"vertex"),he=ef(r,R,"fragment");Je("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+ae+`
`+he)}else H!==""?Ie("WebGLProgram: Program Info Log:",H):(W===""||z==="")&&(ue=!1);ue&&(C.diagnostics={runnable:$,programLog:H,vertexShader:{log:W,prefix:p},fragmentShader:{log:z,prefix:f}})}r.deleteShader(A),r.deleteShader(R),U=new Va(r,M),v=Bv(r,M)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(M,Rv)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Cv++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=R,this}let ex=0;class tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new nx(e),n.set(e,i)),i}}class nx{constructor(e){this.id=ex++,this.code=e,this.usedTimes=0}}function ix(t,e,n,i,r,s,a){const o=new Bd,c=new tx,l=new Set,u=[],h=new Map,d=r.logarithmicDepthBuffer;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,S,C,O,F){const V=O.fog,H=F.geometry,W=v.isMeshStandardMaterial?O.environment:null,z=(v.isMeshStandardMaterial?n:e).get(v.envMap||W),$=z&&z.mapping===io?z.image.height:null,ue=_[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ae=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,he=ae!==void 0?ae.length:0;let Ge=0;H.morphAttributes.position!==void 0&&(Ge=1),H.morphAttributes.normal!==void 0&&(Ge=2),H.morphAttributes.color!==void 0&&(Ge=3);let Be,Et,_t,Y;if(ue){const rt=ti[ue];Be=rt.vertexShader,Et=rt.fragmentShader}else Be=v.vertexShader,Et=v.fragmentShader,c.update(v),_t=c.getVertexShaderID(v),Y=c.getFragmentShaderID(v);const Z=t.getRenderTarget(),me=t.state.buffers.depth.getReversed(),Fe=F.isInstancedMesh===!0,xe=F.isBatchedMesh===!0,$e=!!v.map,Vt=!!v.matcap,Ye=!!z,it=!!v.aoMap,lt=!!v.lightMap,ke=!!v.bumpMap,It=!!v.normalMap,P=!!v.displacementMap,Ut=!!v.emissiveMap,et=!!v.metalnessMap,ft=!!v.roughnessMap,Se=v.anisotropy>0,E=v.clearcoat>0,m=v.dispersion>0,D=v.iridescence>0,q=v.sheen>0,K=v.transmission>0,X=Se&&!!v.anisotropyMap,Te=E&&!!v.clearcoatMap,ne=E&&!!v.clearcoatNormalMap,Me=E&&!!v.clearcoatRoughnessMap,De=D&&!!v.iridescenceMap,Q=D&&!!v.iridescenceThicknessMap,re=q&&!!v.sheenColorMap,_e=q&&!!v.sheenRoughnessMap,Ee=!!v.specularMap,ie=!!v.specularColorMap,ze=!!v.specularIntensityMap,L=K&&!!v.transmissionMap,le=K&&!!v.thicknessMap,ee=!!v.gradientMap,fe=!!v.alphaMap,J=v.alphaTest>0,j=!!v.alphaHash,te=!!v.extensions;let Ue=si;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ue=t.toneMapping);const dt={shaderID:ue,shaderType:v.type,shaderName:v.name,vertexShader:Be,fragmentShader:Et,defines:v.defines,customVertexShaderID:_t,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:xe,batchingColor:xe&&F._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&F.instanceColor!==null,instancingMorph:Fe&&F.morphTexture!==null,outputColorSpace:Z===null?t.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:es,alphaToCoverage:!!v.alphaToCoverage,map:$e,matcap:Vt,envMap:Ye,envMapMode:Ye&&z.mapping,envMapCubeUVHeight:$,aoMap:it,lightMap:lt,bumpMap:ke,normalMap:It,displacementMap:P,emissiveMap:Ut,normalMapObjectSpace:It&&v.normalMapType===L0,normalMapTangentSpace:It&&v.normalMapType===P0,metalnessMap:et,roughnessMap:ft,anisotropy:Se,anisotropyMap:X,clearcoat:E,clearcoatMap:Te,clearcoatNormalMap:ne,clearcoatRoughnessMap:Me,dispersion:m,iridescence:D,iridescenceMap:De,iridescenceThicknessMap:Q,sheen:q,sheenColorMap:re,sheenRoughnessMap:_e,specularMap:Ee,specularColorMap:ie,specularIntensityMap:ze,transmission:K,transmissionMap:L,thicknessMap:le,gradientMap:ee,opaque:v.transparent===!1&&v.blending===qr&&v.alphaToCoverage===!1,alphaMap:fe,alphaTest:J,alphaHash:j,combine:v.combine,mapUv:$e&&M(v.map.channel),aoMapUv:it&&M(v.aoMap.channel),lightMapUv:lt&&M(v.lightMap.channel),bumpMapUv:ke&&M(v.bumpMap.channel),normalMapUv:It&&M(v.normalMap.channel),displacementMapUv:P&&M(v.displacementMap.channel),emissiveMapUv:Ut&&M(v.emissiveMap.channel),metalnessMapUv:et&&M(v.metalnessMap.channel),roughnessMapUv:ft&&M(v.roughnessMap.channel),anisotropyMapUv:X&&M(v.anisotropyMap.channel),clearcoatMapUv:Te&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:re&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:_e&&M(v.sheenRoughnessMap.channel),specularMapUv:Ee&&M(v.specularMap.channel),specularColorMapUv:ie&&M(v.specularColorMap.channel),specularIntensityMapUv:ze&&M(v.specularIntensityMap.channel),transmissionMapUv:L&&M(v.transmissionMap.channel),thicknessMapUv:le&&M(v.thicknessMap.channel),alphaMapUv:fe&&M(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(It||Se),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&($e||fe),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ge,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ue,decodeVideoTexture:$e&&v.map.isVideoTexture===!0&&je.getTransfer(v.map.colorSpace)===at,decodeVideoTextureEmissive:Ut&&v.emissiveMap.isVideoTexture===!0&&je.getTransfer(v.emissiveMap.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===xi,flipSided:v.side===ln,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:te&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&v.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function f(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)S.push(C),S.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(b(S,v),y(S,v),S.push(t.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function b(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function y(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function T(v){const S=_[v.type];let C;if(S){const O=ti[S];C=Mg.clone(O.uniforms)}else C=v.uniforms;return C}function A(v,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new Qv(t,S,v,s),u.push(C),h.set(S,C)),C}function R(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){c.remove(v)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:T,acquireProgram:A,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:U}}function rx(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function sx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function af(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function of(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,d,g,_,M,p){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:g,groupOrder:_,renderOrder:h.renderOrder,z:M,group:p},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=g,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=M,f.group=p),e++,f}function o(h,d,g,_,M,p){const f=a(h,d,g,_,M,p);g.transmission>0?i.push(f):g.transparent===!0?r.push(f):n.push(f)}function c(h,d,g,_,M,p){const f=a(h,d,g,_,M,p);g.transmission>0?i.unshift(f):g.transparent===!0?r.unshift(f):n.unshift(f)}function l(h,d){n.length>1&&n.sort(h||sx),i.length>1&&i.sort(d||af),r.length>1&&r.sort(d||af)}function u(){for(let h=e,d=t.length;h<d;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function ax(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new of,t.set(i,[a])):r>=s.length?(a=new of,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ox(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new qe};break;case"SpotLight":n={position:new B,direction:new B,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function cx(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let lx=0;function ux(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function hx(t){const e=new ox,n=cx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);const r=new B,s=new Lt,a=new Lt;function o(l){let u=0,h=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let g=0,_=0,M=0,p=0,f=0,b=0,y=0,T=0,A=0,R=0,w=0;l.sort(ux);for(let v=0,S=l.length;v<S;v++){const C=l[v],O=C.color,F=C.intensity,V=C.distance;let H=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Qr?H=C.shadow.map.texture:H=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=O.r*F,h+=O.g*F,d+=O.b*F;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],F);w++}else if(C.isDirectionalLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const z=C.shadow,$=n.get(C);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,i.directionalShadow[g]=$,i.directionalShadowMap[g]=H,i.directionalShadowMatrix[g]=C.shadow.matrix,b++}i.directional[g]=W,g++}else if(C.isSpotLight){const W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(O).multiplyScalar(F),W.distance=V,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[M]=W;const z=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,z.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[M]=z.matrix,C.castShadow){const $=n.get(C);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,i.spotShadow[M]=$,i.spotShadowMap[M]=H,T++}M++}else if(C.isRectAreaLight){const W=e.get(C);W.color.copy(O).multiplyScalar(F),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=W,p++}else if(C.isPointLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const z=C.shadow,$=n.get(C);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,$.shadowCameraNear=z.camera.near,$.shadowCameraFar=z.camera.far,i.pointShadow[_]=$,i.pointShadowMap[_]=H,i.pointShadowMatrix[_]=C.shadow.matrix,y++}i.point[_]=W,_++}else if(C.isHemisphereLight){const W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(F),W.groundColor.copy(C.groundColor).multiplyScalar(F),i.hemi[f]=W,f++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==g||U.pointLength!==_||U.spotLength!==M||U.rectAreaLength!==p||U.hemiLength!==f||U.numDirectionalShadows!==b||U.numPointShadows!==y||U.numSpotShadows!==T||U.numSpotMaps!==A||U.numLightProbes!==w)&&(i.directional.length=g,i.spot.length=M,i.rectArea.length=p,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,U.directionalLength=g,U.pointLength=_,U.spotLength=M,U.rectAreaLength=p,U.hemiLength=f,U.numDirectionalShadows=b,U.numPointShadows=y,U.numSpotShadows=T,U.numSpotMaps=A,U.numLightProbes=w,i.version=lx++)}function c(l,u){let h=0,d=0,g=0,_=0,M=0;const p=u.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){const y=l[f];if(y.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),h++}else if(y.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const T=i.hemi[M];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),M++}}}return{setup:o,setupView:c,state:i}}function cf(t){const e=new hx(t),n=[],i=[];function r(u){l.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function c(u){e.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function fx(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new cf(t),e.set(r,[o])):s>=a.length?(o=new cf(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mx=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],gx=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],lf=new Lt,Ls=new B,gc=new B;function _x(t,e,n){let i=new Yd;const r=new ct,s=new ct,a=new Pt,o=new Ig,c=new Ug,l={},u=n.maxTextureSize,h={[Zi]:ln,[ln]:Zi,[xi]:xi},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:dx,fragmentShader:px}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const _=new Xn;_.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Di(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oa;let f=this.type;this.render=function(R,w,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;R.type===o0&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Oa);const v=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),O=t.state;O.setBlending(yi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=f!==this.type;F&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(H=>H.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,H=R.length;V<H;V++){const W=R[V],z=W.shadow;if(z===void 0){Ie("WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const $=z.getFrameExtents();if(r.multiply($),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,z.mapSize.y=s.y)),z.map===null||F===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Us){if(W.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ai(r.x,r.y,{format:Qr,type:Ci,minFilter:$t,magFilter:$t,generateMipmaps:!1}),z.map.texture.name=W.name+".shadowMap",z.map.depthTexture=new Ys(r.x,r.y,ii),z.map.depthTexture.name=W.name+".shadowMapDepth",z.map.depthTexture.format=Pi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=qt,z.map.depthTexture.magFilter=qt}else{W.isPointLight?(z.map=new qd(r.x),z.map.depthTexture=new Lg(r.x,oi)):(z.map=new ai(r.x,r.y),z.map.depthTexture=new Ys(r.x,r.y,oi)),z.map.depthTexture.name=W.name+".shadowMap",z.map.depthTexture.format=Pi;const ae=t.state.buffers.depth.getReversed();this.type===Oa?(z.map.depthTexture.compareFunction=ae?eu:Ql,z.map.depthTexture.minFilter=$t,z.map.depthTexture.magFilter=$t):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=qt,z.map.depthTexture.magFilter=qt)}z.camera.updateProjectionMatrix()}const ue=z.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<ue;ae++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,ae),t.clear();else{ae===0&&(t.setRenderTarget(z.map),t.clear());const he=z.getViewport(ae);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),O.viewport(a)}if(W.isPointLight){const he=z.camera,Ge=z.matrix,Be=W.distance||he.far;Be!==he.far&&(he.far=Be,he.updateProjectionMatrix()),Ls.setFromMatrixPosition(W.matrixWorld),he.position.copy(Ls),gc.copy(he.position),gc.add(mx[ae]),he.up.copy(gx[ae]),he.lookAt(gc),he.updateMatrixWorld(),Ge.makeTranslation(-Ls.x,-Ls.y,-Ls.z),lf.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),z._frustum.setFromProjectionMatrix(lf,he.coordinateSystem,he.reversedDepth)}else z.updateMatrices(W);i=z.getFrustum(),T(w,U,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===Us&&b(z,U),z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(v,S,C)};function b(R,w){const U=e.update(M);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ai(r.x,r.y,{format:Qr,type:Ci})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(w,null,U,d,M,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(w,null,U,g,M,null)}function y(R,w,U,v){let S=null;const C=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)S=C;else if(S=U.isPointLight===!0?c:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=S.uuid,F=w.uuid;let V=l[O];V===void 0&&(V={},l[O]=V);let H=V[F];H===void 0&&(H=S.clone(),V[F]=H,w.addEventListener("dispose",A)),S=H}if(S.visible=w.visible,S.wireframe=w.wireframe,v===Us?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=t.properties.get(S);O.light=U}return S}function T(R,w,U,v,S){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Us)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const F=e.update(R),V=R.material;if(Array.isArray(V)){const H=F.groups;for(let W=0,z=H.length;W<z;W++){const $=H[W],ue=V[$.materialIndex];if(ue&&ue.visible){const ae=y(R,ue,v,S);R.onBeforeShadow(t,R,w,U,F,ae,$),t.renderBufferDirect(U,null,F,ae,R,$),R.onAfterShadow(t,R,w,U,F,ae,$)}}}else if(V.visible){const H=y(R,V,v,S);R.onBeforeShadow(t,R,w,U,F,H,null),t.renderBufferDirect(U,null,F,H,R,null),R.onAfterShadow(t,R,w,U,F,H,null)}}const O=R.children;for(let F=0,V=O.length;F<V;F++)T(O[F],w,U,v,S)}function A(R){R.target.removeEventListener("dispose",A);for(const U in l){const v=l[U],S=R.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const vx={[Ic]:Uc,[Fc]:Bc,[Nc]:kc,[Zr]:Oc,[Uc]:Ic,[Bc]:Fc,[kc]:Nc,[Oc]:Zr};function xx(t,e){function n(){let L=!1;const le=new Pt;let ee=null;const fe=new Pt(0,0,0,0);return{setMask:function(J){ee!==J&&!L&&(t.colorMask(J,J,J,J),ee=J)},setLocked:function(J){L=J},setClear:function(J,j,te,Ue,dt){dt===!0&&(J*=Ue,j*=Ue,te*=Ue),le.set(J,j,te,Ue),fe.equals(le)===!1&&(t.clearColor(J,j,te,Ue),fe.copy(le))},reset:function(){L=!1,ee=null,fe.set(-1,0,0,0)}}}function i(){let L=!1,le=!1,ee=null,fe=null,J=null;return{setReversed:function(j){if(le!==j){const te=e.get("EXT_clip_control");j?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),le=j;const Ue=J;J=null,this.setClear(Ue)}},getReversed:function(){return le},setTest:function(j){j?Z(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(j){ee!==j&&!L&&(t.depthMask(j),ee=j)},setFunc:function(j){if(le&&(j=vx[j]),fe!==j){switch(j){case Ic:t.depthFunc(t.NEVER);break;case Uc:t.depthFunc(t.ALWAYS);break;case Fc:t.depthFunc(t.LESS);break;case Zr:t.depthFunc(t.LEQUAL);break;case Nc:t.depthFunc(t.EQUAL);break;case Oc:t.depthFunc(t.GEQUAL);break;case Bc:t.depthFunc(t.GREATER);break;case kc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=j}},setLocked:function(j){L=j},setClear:function(j){J!==j&&(le&&(j=1-j),t.clearDepth(j),J=j)},reset:function(){L=!1,ee=null,fe=null,J=null,le=!1}}}function r(){let L=!1,le=null,ee=null,fe=null,J=null,j=null,te=null,Ue=null,dt=null;return{setTest:function(rt){L||(rt?Z(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(rt){le!==rt&&!L&&(t.stencilMask(rt),le=rt)},setFunc:function(rt,$n,fi){(ee!==rt||fe!==$n||J!==fi)&&(t.stencilFunc(rt,$n,fi),ee=rt,fe=$n,J=fi)},setOp:function(rt,$n,fi){(j!==rt||te!==$n||Ue!==fi)&&(t.stencilOp(rt,$n,fi),j=rt,te=$n,Ue=fi)},setLocked:function(rt){L=rt},setClear:function(rt){dt!==rt&&(t.clearStencil(rt),dt=rt)},reset:function(){L=!1,le=null,ee=null,fe=null,J=null,j=null,te=null,Ue=null,dt=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,g=[],_=null,M=!1,p=null,f=null,b=null,y=null,T=null,A=null,R=null,w=new qe(0,0,0),U=0,v=!1,S=null,C=null,O=null,F=null,V=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,z=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec($)[1]),W=z>=1):$.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=z>=2);let ue=null,ae={};const he=t.getParameter(t.SCISSOR_BOX),Ge=t.getParameter(t.VIEWPORT),Be=new Pt().fromArray(he),Et=new Pt().fromArray(Ge);function _t(L,le,ee,fe){const J=new Uint8Array(4),j=t.createTexture();t.bindTexture(L,j),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let te=0;te<ee;te++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,J):t.texImage2D(le+te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,J);return j}const Y={};Y[t.TEXTURE_2D]=_t(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=_t(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=_t(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=_t(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(t.DEPTH_TEST),a.setFunc(Zr),ke(!1),It(fh),Z(t.CULL_FACE),it(yi);function Z(L){u[L]!==!0&&(t.enable(L),u[L]=!0)}function me(L){u[L]!==!1&&(t.disable(L),u[L]=!1)}function Fe(L,le){return h[L]!==le?(t.bindFramebuffer(L,le),h[L]=le,L===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=le),L===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=le),!0):!1}function xe(L,le){let ee=g,fe=!1;if(L){ee=d.get(le),ee===void 0&&(ee=[],d.set(le,ee));const J=L.textures;if(ee.length!==J.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let j=0,te=J.length;j<te;j++)ee[j]=t.COLOR_ATTACHMENT0+j;ee.length=J.length,fe=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,fe=!0);fe&&t.drawBuffers(ee)}function $e(L){return _!==L?(t.useProgram(L),_=L,!0):!1}const Vt={[pr]:t.FUNC_ADD,[l0]:t.FUNC_SUBTRACT,[u0]:t.FUNC_REVERSE_SUBTRACT};Vt[h0]=t.MIN,Vt[f0]=t.MAX;const Ye={[d0]:t.ZERO,[p0]:t.ONE,[m0]:t.SRC_COLOR,[Lc]:t.SRC_ALPHA,[S0]:t.SRC_ALPHA_SATURATE,[x0]:t.DST_COLOR,[_0]:t.DST_ALPHA,[g0]:t.ONE_MINUS_SRC_COLOR,[Dc]:t.ONE_MINUS_SRC_ALPHA,[M0]:t.ONE_MINUS_DST_COLOR,[v0]:t.ONE_MINUS_DST_ALPHA,[E0]:t.CONSTANT_COLOR,[y0]:t.ONE_MINUS_CONSTANT_COLOR,[T0]:t.CONSTANT_ALPHA,[b0]:t.ONE_MINUS_CONSTANT_ALPHA};function it(L,le,ee,fe,J,j,te,Ue,dt,rt){if(L===yi){M===!0&&(me(t.BLEND),M=!1);return}if(M===!1&&(Z(t.BLEND),M=!0),L!==c0){if(L!==p||rt!==v){if((f!==pr||T!==pr)&&(t.blendEquation(t.FUNC_ADD),f=pr,T=pr),rt)switch(L){case qr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pc:t.blendFunc(t.ONE,t.ONE);break;case dh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ph:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Je("WebGLState: Invalid blending: ",L);break}else switch(L){case qr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pc:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case dh:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ph:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",L);break}b=null,y=null,A=null,R=null,w.set(0,0,0),U=0,p=L,v=rt}return}J=J||le,j=j||ee,te=te||fe,(le!==f||J!==T)&&(t.blendEquationSeparate(Vt[le],Vt[J]),f=le,T=J),(ee!==b||fe!==y||j!==A||te!==R)&&(t.blendFuncSeparate(Ye[ee],Ye[fe],Ye[j],Ye[te]),b=ee,y=fe,A=j,R=te),(Ue.equals(w)===!1||dt!==U)&&(t.blendColor(Ue.r,Ue.g,Ue.b,dt),w.copy(Ue),U=dt),p=L,v=!1}function lt(L,le){L.side===xi?me(t.CULL_FACE):Z(t.CULL_FACE);let ee=L.side===ln;le&&(ee=!ee),ke(ee),L.blending===qr&&L.transparent===!1?it(yi):it(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const fe=L.stencilWrite;o.setTest(fe),fe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ut(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){S!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),S=L)}function It(L){L!==s0?(Z(t.CULL_FACE),L!==C&&(L===fh?t.cullFace(t.BACK):L===a0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),C=L}function P(L){L!==O&&(W&&t.lineWidth(L),O=L)}function Ut(L,le,ee){L?(Z(t.POLYGON_OFFSET_FILL),(F!==le||V!==ee)&&(t.polygonOffset(le,ee),F=le,V=ee)):me(t.POLYGON_OFFSET_FILL)}function et(L){L?Z(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function ft(L){L===void 0&&(L=t.TEXTURE0+H-1),ue!==L&&(t.activeTexture(L),ue=L)}function Se(L,le,ee){ee===void 0&&(ue===null?ee=t.TEXTURE0+H-1:ee=ue);let fe=ae[ee];fe===void 0&&(fe={type:void 0,texture:void 0},ae[ee]=fe),(fe.type!==L||fe.texture!==le)&&(ue!==ee&&(t.activeTexture(ee),ue=ee),t.bindTexture(L,le||Y[L]),fe.type=L,fe.texture=le)}function E(){const L=ae[ue];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function m(){try{t.compressedTexImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function D(){try{t.compressedTexImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function q(){try{t.texSubImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function K(){try{t.texSubImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function Te(){try{t.compressedTexSubImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function ne(){try{t.texStorage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function Me(){try{t.texStorage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function De(){try{t.texImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function Q(){try{t.texImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function re(L){Be.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Be.copy(L))}function _e(L){Et.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Et.copy(L))}function Ee(L,le){let ee=l.get(le);ee===void 0&&(ee=new WeakMap,l.set(le,ee));let fe=ee.get(L);fe===void 0&&(fe=t.getUniformBlockIndex(le,L.name),ee.set(L,fe))}function ie(L,le){const fe=l.get(le).get(L);c.get(le)!==fe&&(t.uniformBlockBinding(le,fe,L.__bindingPointIndex),c.set(le,fe))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ue=null,ae={},h={},d=new WeakMap,g=[],_=null,M=!1,p=null,f=null,b=null,y=null,T=null,A=null,R=null,w=new qe(0,0,0),U=0,v=!1,S=null,C=null,O=null,F=null,V=null,Be.set(0,0,t.canvas.width,t.canvas.height),Et.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:me,bindFramebuffer:Fe,drawBuffers:xe,useProgram:$e,setBlending:it,setMaterial:lt,setFlipSided:ke,setCullFace:It,setLineWidth:P,setPolygonOffset:Ut,setScissorTest:et,activeTexture:ft,bindTexture:Se,unbindTexture:E,compressedTexImage2D:m,compressedTexImage3D:D,texImage2D:De,texImage3D:Q,updateUBOMapping:Ee,uniformBlockBinding:ie,texStorage2D:ne,texStorage3D:Me,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:Te,scissor:re,viewport:_e,reset:ze}}function Mx(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,u=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,m){return g?new OffscreenCanvas(E,m):$a("canvas")}function M(E,m,D){let q=1;const K=Se(E);if((K.width>D||K.height>D)&&(q=D/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor(q*K.width),Te=Math.floor(q*K.height);h===void 0&&(h=_(X,Te));const ne=m?_(X,Te):h;return ne.width=X,ne.height=Te,ne.getContext("2d").drawImage(E,0,0,X,Te),Ie("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+Te+")."),ne}else return"data"in E&&Ie("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function p(E){return E.generateMipmaps}function f(E){t.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(E,m,D,q,K=!1){if(E!==null){if(t[E]!==void 0)return t[E];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=m;if(m===t.RED&&(D===t.FLOAT&&(X=t.R32F),D===t.HALF_FLOAT&&(X=t.R16F),D===t.UNSIGNED_BYTE&&(X=t.R8)),m===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.R8UI),D===t.UNSIGNED_SHORT&&(X=t.R16UI),D===t.UNSIGNED_INT&&(X=t.R32UI),D===t.BYTE&&(X=t.R8I),D===t.SHORT&&(X=t.R16I),D===t.INT&&(X=t.R32I)),m===t.RG&&(D===t.FLOAT&&(X=t.RG32F),D===t.HALF_FLOAT&&(X=t.RG16F),D===t.UNSIGNED_BYTE&&(X=t.RG8)),m===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.RG8UI),D===t.UNSIGNED_SHORT&&(X=t.RG16UI),D===t.UNSIGNED_INT&&(X=t.RG32UI),D===t.BYTE&&(X=t.RG8I),D===t.SHORT&&(X=t.RG16I),D===t.INT&&(X=t.RG32I)),m===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.RGB8UI),D===t.UNSIGNED_SHORT&&(X=t.RGB16UI),D===t.UNSIGNED_INT&&(X=t.RGB32UI),D===t.BYTE&&(X=t.RGB8I),D===t.SHORT&&(X=t.RGB16I),D===t.INT&&(X=t.RGB32I)),m===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),D===t.UNSIGNED_INT&&(X=t.RGBA32UI),D===t.BYTE&&(X=t.RGBA8I),D===t.SHORT&&(X=t.RGBA16I),D===t.INT&&(X=t.RGBA32I)),m===t.RGB&&(D===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(X=t.R11F_G11F_B10F)),m===t.RGBA){const Te=K?ja:je.getTransfer(q);D===t.FLOAT&&(X=t.RGBA32F),D===t.HALF_FLOAT&&(X=t.RGBA16F),D===t.UNSIGNED_BYTE&&(X=Te===at?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function T(E,m){let D;return E?m===null||m===oi||m===Ws?D=t.DEPTH24_STENCIL8:m===ii?D=t.DEPTH32F_STENCIL8:m===Hs&&(D=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===oi||m===Ws?D=t.DEPTH_COMPONENT24:m===ii?D=t.DEPTH_COMPONENT32F:m===Hs&&(D=t.DEPTH_COMPONENT16),D}function A(E,m){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==qt&&E.minFilter!==$t?Math.log2(Math.max(m.width,m.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?m.mipmaps.length:1}function R(E){const m=E.target;m.removeEventListener("dispose",R),U(m),m.isVideoTexture&&u.delete(m)}function w(E){const m=E.target;m.removeEventListener("dispose",w),S(m)}function U(E){const m=i.get(E);if(m.__webglInit===void 0)return;const D=E.source,q=d.get(D);if(q){const K=q[m.__cacheKey];K.usedTimes--,K.usedTimes===0&&v(E),Object.keys(q).length===0&&d.delete(D)}i.remove(E)}function v(E){const m=i.get(E);t.deleteTexture(m.__webglTexture);const D=E.source,q=d.get(D);delete q[m.__cacheKey],a.memory.textures--}function S(E){const m=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(m.__webglFramebuffer[q]))for(let K=0;K<m.__webglFramebuffer[q].length;K++)t.deleteFramebuffer(m.__webglFramebuffer[q][K]);else t.deleteFramebuffer(m.__webglFramebuffer[q]);m.__webglDepthbuffer&&t.deleteRenderbuffer(m.__webglDepthbuffer[q])}else{if(Array.isArray(m.__webglFramebuffer))for(let q=0;q<m.__webglFramebuffer.length;q++)t.deleteFramebuffer(m.__webglFramebuffer[q]);else t.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&t.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&t.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let q=0;q<m.__webglColorRenderbuffer.length;q++)m.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(m.__webglColorRenderbuffer[q]);m.__webglDepthRenderbuffer&&t.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const D=E.textures;for(let q=0,K=D.length;q<K;q++){const X=i.get(D[q]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(D[q])}i.remove(E)}let C=0;function O(){C=0}function F(){const E=C;return E>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),C+=1,E}function V(E){const m=[];return m.push(E.wrapS),m.push(E.wrapT),m.push(E.wrapR||0),m.push(E.magFilter),m.push(E.minFilter),m.push(E.anisotropy),m.push(E.internalFormat),m.push(E.format),m.push(E.type),m.push(E.generateMipmaps),m.push(E.premultiplyAlpha),m.push(E.flipY),m.push(E.unpackAlignment),m.push(E.colorSpace),m.join()}function H(E,m){const D=i.get(E);if(E.isVideoTexture&&et(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&D.__version!==E.version){const q=E.image;if(q===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(D,E,m);return}}else E.isExternalTexture&&(D.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+m)}function W(E,m){const D=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){Y(D,E,m);return}else E.isExternalTexture&&(D.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+m)}function z(E,m){const D=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){Y(D,E,m);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+m)}function $(E,m){const D=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&D.__version!==E.version){Z(D,E,m);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+m)}const ue={[Vc]:t.REPEAT,[Si]:t.CLAMP_TO_EDGE,[Hc]:t.MIRRORED_REPEAT},ae={[qt]:t.NEAREST,[R0]:t.NEAREST_MIPMAP_NEAREST,[la]:t.NEAREST_MIPMAP_LINEAR,[$t]:t.LINEAR,[Vo]:t.LINEAR_MIPMAP_NEAREST,[gr]:t.LINEAR_MIPMAP_LINEAR},he={[D0]:t.NEVER,[O0]:t.ALWAYS,[I0]:t.LESS,[Ql]:t.LEQUAL,[U0]:t.EQUAL,[eu]:t.GEQUAL,[F0]:t.GREATER,[N0]:t.NOTEQUAL};function Ge(E,m){if(m.type===ii&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===$t||m.magFilter===Vo||m.magFilter===la||m.magFilter===gr||m.minFilter===$t||m.minFilter===Vo||m.minFilter===la||m.minFilter===gr)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,ue[m.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,ue[m.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,ue[m.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,ae[m.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,ae[m.minFilter]),m.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,he[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===qt||m.minFilter!==la&&m.minFilter!==gr||m.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function Be(E,m){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,m.addEventListener("dispose",R));const q=m.source;let K=d.get(q);K===void 0&&(K={},d.set(q,K));const X=V(m);if(X!==E.__cacheKey){K[X]===void 0&&(K[X]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[X].usedTimes++;const Te=K[E.__cacheKey];Te!==void 0&&(K[E.__cacheKey].usedTimes--,Te.usedTimes===0&&v(m)),E.__cacheKey=X,E.__webglTexture=K[X].texture}return D}function Et(E,m,D){return Math.floor(Math.floor(E/D)/m)}function _t(E,m,D,q){const X=E.updateRanges;if(X.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,m.width,m.height,D,q,m.data);else{X.sort((Q,re)=>Q.start-re.start);let Te=0;for(let Q=1;Q<X.length;Q++){const re=X[Te],_e=X[Q],Ee=re.start+re.count,ie=Et(_e.start,m.width,4),ze=Et(re.start,m.width,4);_e.start<=Ee+1&&ie===ze&&Et(_e.start+_e.count-1,m.width,4)===ie?re.count=Math.max(re.count,_e.start+_e.count-re.start):(++Te,X[Te]=_e)}X.length=Te+1;const ne=t.getParameter(t.UNPACK_ROW_LENGTH),Me=t.getParameter(t.UNPACK_SKIP_PIXELS),De=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,m.width);for(let Q=0,re=X.length;Q<re;Q++){const _e=X[Q],Ee=Math.floor(_e.start/4),ie=Math.ceil(_e.count/4),ze=Ee%m.width,L=Math.floor(Ee/m.width),le=ie,ee=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,ze,L,le,ee,D,q,m.data)}E.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ne),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(t.UNPACK_SKIP_ROWS,De)}}function Y(E,m,D){let q=t.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),m.isData3DTexture&&(q=t.TEXTURE_3D);const K=Be(E,m),X=m.source;n.bindTexture(q,E.__webglTexture,t.TEXTURE0+D);const Te=i.get(X);if(X.version!==Te.__version||K===!0){n.activeTexture(t.TEXTURE0+D);const ne=je.getPrimaries(je.workingColorSpace),Me=m.colorSpace===Hi?null:je.getPrimaries(m.colorSpace),De=m.colorSpace===Hi||ne===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Q=M(m.image,!1,r.maxTextureSize);Q=ft(m,Q);const re=s.convert(m.format,m.colorSpace),_e=s.convert(m.type);let Ee=y(m.internalFormat,re,_e,m.colorSpace,m.isVideoTexture);Ge(q,m);let ie;const ze=m.mipmaps,L=m.isVideoTexture!==!0,le=Te.__version===void 0||K===!0,ee=X.dataReady,fe=A(m,Q);if(m.isDepthTexture)Ee=T(m.format===_r,m.type),le&&(L?n.texStorage2D(t.TEXTURE_2D,1,Ee,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,Ee,Q.width,Q.height,0,re,_e,null));else if(m.isDataTexture)if(ze.length>0){L&&le&&n.texStorage2D(t.TEXTURE_2D,fe,Ee,ze[0].width,ze[0].height);for(let J=0,j=ze.length;J<j;J++)ie=ze[J],L?ee&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,ie.width,ie.height,re,_e,ie.data):n.texImage2D(t.TEXTURE_2D,J,Ee,ie.width,ie.height,0,re,_e,ie.data);m.generateMipmaps=!1}else L?(le&&n.texStorage2D(t.TEXTURE_2D,fe,Ee,Q.width,Q.height),ee&&_t(m,Q,re,_e)):n.texImage2D(t.TEXTURE_2D,0,Ee,Q.width,Q.height,0,re,_e,Q.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){L&&le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ee,ze[0].width,ze[0].height,Q.depth);for(let J=0,j=ze.length;J<j;J++)if(ie=ze[J],m.format!==Wn)if(re!==null)if(L){if(ee)if(m.layerUpdates.size>0){const te=kh(ie.width,ie.height,m.format,m.type);for(const Ue of m.layerUpdates){const dt=ie.data.subarray(Ue*te/ie.data.BYTES_PER_ELEMENT,(Ue+1)*te/ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,Ue,ie.width,ie.height,1,re,dt)}m.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,ie.width,ie.height,Q.depth,re,ie.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,Ee,ie.width,ie.height,Q.depth,0,ie.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ee&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,ie.width,ie.height,Q.depth,re,_e,ie.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,Ee,ie.width,ie.height,Q.depth,0,re,_e,ie.data)}else{L&&le&&n.texStorage2D(t.TEXTURE_2D,fe,Ee,ze[0].width,ze[0].height);for(let J=0,j=ze.length;J<j;J++)ie=ze[J],m.format!==Wn?re!==null?L?ee&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,ie.width,ie.height,re,ie.data):n.compressedTexImage2D(t.TEXTURE_2D,J,Ee,ie.width,ie.height,0,ie.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ee&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,ie.width,ie.height,re,_e,ie.data):n.texImage2D(t.TEXTURE_2D,J,Ee,ie.width,ie.height,0,re,_e,ie.data)}else if(m.isDataArrayTexture)if(L){if(le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ee,Q.width,Q.height,Q.depth),ee)if(m.layerUpdates.size>0){const J=kh(Q.width,Q.height,m.format,m.type);for(const j of m.layerUpdates){const te=Q.data.subarray(j*J/Q.data.BYTES_PER_ELEMENT,(j+1)*J/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,re,_e,te)}m.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,re,_e,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,Q.width,Q.height,Q.depth,0,re,_e,Q.data);else if(m.isData3DTexture)L?(le&&n.texStorage3D(t.TEXTURE_3D,fe,Ee,Q.width,Q.height,Q.depth),ee&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,re,_e,Q.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,Q.width,Q.height,Q.depth,0,re,_e,Q.data);else if(m.isFramebufferTexture){if(le)if(L)n.texStorage2D(t.TEXTURE_2D,fe,Ee,Q.width,Q.height);else{let J=Q.width,j=Q.height;for(let te=0;te<fe;te++)n.texImage2D(t.TEXTURE_2D,te,Ee,J,j,0,re,_e,null),J>>=1,j>>=1}}else if(ze.length>0){if(L&&le){const J=Se(ze[0]);n.texStorage2D(t.TEXTURE_2D,fe,Ee,J.width,J.height)}for(let J=0,j=ze.length;J<j;J++)ie=ze[J],L?ee&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,re,_e,ie):n.texImage2D(t.TEXTURE_2D,J,Ee,re,_e,ie);m.generateMipmaps=!1}else if(L){if(le){const J=Se(Q);n.texStorage2D(t.TEXTURE_2D,fe,Ee,J.width,J.height)}ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re,_e,Q)}else n.texImage2D(t.TEXTURE_2D,0,Ee,re,_e,Q);p(m)&&f(q),Te.__version=X.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function Z(E,m,D){if(m.image.length!==6)return;const q=Be(E,m),K=m.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+D);const X=i.get(K);if(K.version!==X.__version||q===!0){n.activeTexture(t.TEXTURE0+D);const Te=je.getPrimaries(je.workingColorSpace),ne=m.colorSpace===Hi?null:je.getPrimaries(m.colorSpace),Me=m.colorSpace===Hi||Te===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const De=m.isCompressedTexture||m.image[0].isCompressedTexture,Q=m.image[0]&&m.image[0].isDataTexture,re=[];for(let j=0;j<6;j++)!De&&!Q?re[j]=M(m.image[j],!0,r.maxCubemapSize):re[j]=Q?m.image[j].image:m.image[j],re[j]=ft(m,re[j]);const _e=re[0],Ee=s.convert(m.format,m.colorSpace),ie=s.convert(m.type),ze=y(m.internalFormat,Ee,ie,m.colorSpace),L=m.isVideoTexture!==!0,le=X.__version===void 0||q===!0,ee=K.dataReady;let fe=A(m,_e);Ge(t.TEXTURE_CUBE_MAP,m);let J;if(De){L&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,ze,_e.width,_e.height);for(let j=0;j<6;j++){J=re[j].mipmaps;for(let te=0;te<J.length;te++){const Ue=J[te];m.format!==Wn?Ee!==null?L?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,0,0,Ue.width,Ue.height,Ee,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,ze,Ue.width,Ue.height,0,Ue.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,0,0,Ue.width,Ue.height,Ee,ie,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,ze,Ue.width,Ue.height,0,Ee,ie,Ue.data)}}}else{if(J=m.mipmaps,L&&le){J.length>0&&fe++;const j=Se(re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,ze,j.width,j.height)}for(let j=0;j<6;j++)if(Q){L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,re[j].width,re[j].height,Ee,ie,re[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ze,re[j].width,re[j].height,0,Ee,ie,re[j].data);for(let te=0;te<J.length;te++){const dt=J[te].image[j].image;L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,0,0,dt.width,dt.height,Ee,ie,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,ze,dt.width,dt.height,0,Ee,ie,dt.data)}}else{L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ee,ie,re[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ze,Ee,ie,re[j]);for(let te=0;te<J.length;te++){const Ue=J[te];L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,0,0,Ee,ie,Ue.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,ze,Ee,ie,Ue.image[j])}}}p(m)&&f(t.TEXTURE_CUBE_MAP),X.__version=K.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function me(E,m,D,q,K,X){const Te=s.convert(D.format,D.colorSpace),ne=s.convert(D.type),Me=y(D.internalFormat,Te,ne,D.colorSpace),De=i.get(m),Q=i.get(D);if(Q.__renderTarget=m,!De.__hasExternalTextures){const re=Math.max(1,m.width>>X),_e=Math.max(1,m.height>>X);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,X,Me,re,_e,m.depth,0,Te,ne,null):n.texImage2D(K,X,Me,re,_e,0,Te,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),Ut(m)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,K,Q.__webglTexture,0,P(m)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,K,Q.__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(E,m,D){if(t.bindRenderbuffer(t.RENDERBUFFER,E),m.depthBuffer){const q=m.depthTexture,K=q&&q.isDepthTexture?q.type:null,X=T(m.stencilBuffer,K),Te=m.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ut(m)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,P(m),X,m.width,m.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,P(m),X,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,X,m.width,m.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,E)}else{const q=m.textures;for(let K=0;K<q.length;K++){const X=q[K],Te=s.convert(X.format,X.colorSpace),ne=s.convert(X.type),Me=y(X.internalFormat,Te,ne,X.colorSpace);Ut(m)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,P(m),Me,m.width,m.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,P(m),Me,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,Me,m.width,m.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function xe(E,m,D){const q=m.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(m.depthTexture);if(K.__renderTarget=m,(!K.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,m.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,m.depthTexture);const De=s.convert(m.depthTexture.format),Q=s.convert(m.depthTexture.type);let re;m.depthTexture.format===Pi?re=t.DEPTH_COMPONENT24:m.depthTexture.format===_r&&(re=t.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,re,m.width,m.height,0,De,Q,null)}}else H(m.depthTexture,0);const X=K.__webglTexture,Te=P(m),ne=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,Me=m.depthTexture.format===_r?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(m.depthTexture.format===Pi)Ut(m)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Me,ne,X,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Me,ne,X,0);else if(m.depthTexture.format===_r)Ut(m)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Me,ne,X,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Me,ne,X,0);else throw new Error("Unknown depthTexture format")}function $e(E){const m=i.get(E),D=E.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),q){const K=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),m.__depthDisposeCallback=K}m.__boundDepthTexture=q}if(E.depthTexture&&!m.__autoAllocateDepthBuffer)if(D)for(let q=0;q<6;q++)xe(m.__webglFramebuffer[q],E,q);else{const q=E.texture.mipmaps;q&&q.length>0?xe(m.__webglFramebuffer[0],E,0):xe(m.__webglFramebuffer,E,0)}else if(D){m.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[q]),m.__webglDepthbuffer[q]===void 0)m.__webglDepthbuffer[q]=t.createRenderbuffer(),Fe(m.__webglDepthbuffer[q],E,!1);else{const K=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=m.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,X)}}else{const q=E.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=t.createRenderbuffer(),Fe(m.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=m.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,X)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Vt(E,m,D){const q=i.get(E);m!==void 0&&me(q.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&$e(E)}function Ye(E){const m=E.texture,D=i.get(E),q=i.get(m);E.addEventListener("dispose",w);const K=E.textures,X=E.isWebGLCubeRenderTarget===!0,Te=K.length>1;if(Te||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=m.version,a.memory.textures++),X){D.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(m.mipmaps&&m.mipmaps.length>0){D.__webglFramebuffer[ne]=[];for(let Me=0;Me<m.mipmaps.length;Me++)D.__webglFramebuffer[ne][Me]=t.createFramebuffer()}else D.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){D.__webglFramebuffer=[];for(let ne=0;ne<m.mipmaps.length;ne++)D.__webglFramebuffer[ne]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(Te)for(let ne=0,Me=K.length;ne<Me;ne++){const De=i.get(K[ne]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),a.memory.textures++)}if(E.samples>0&&Ut(E)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ne=0;ne<K.length;ne++){const Me=K[ne];D.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[ne]);const De=s.convert(Me.format,Me.colorSpace),Q=s.convert(Me.type),re=y(Me.internalFormat,De,Q,Me.colorSpace,E.isXRRenderTarget===!0),_e=P(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,re,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,D.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),Fe(D.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,m);for(let ne=0;ne<6;ne++)if(m.mipmaps&&m.mipmaps.length>0)for(let Me=0;Me<m.mipmaps.length;Me++)me(D.__webglFramebuffer[ne][Me],E,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me);else me(D.__webglFramebuffer[ne],E,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(m)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let ne=0,Me=K.length;ne<Me;ne++){const De=K[ne],Q=i.get(De);let re=t.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,Q.__webglTexture),Ge(re,De),me(D.__webglFramebuffer,E,De,t.COLOR_ATTACHMENT0+ne,re,0),p(De)&&f(re)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ne=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,q.__webglTexture),Ge(ne,m),m.mipmaps&&m.mipmaps.length>0)for(let Me=0;Me<m.mipmaps.length;Me++)me(D.__webglFramebuffer[Me],E,m,t.COLOR_ATTACHMENT0,ne,Me);else me(D.__webglFramebuffer,E,m,t.COLOR_ATTACHMENT0,ne,0);p(m)&&f(ne),n.unbindTexture()}E.depthBuffer&&$e(E)}function it(E){const m=E.textures;for(let D=0,q=m.length;D<q;D++){const K=m[D];if(p(K)){const X=b(E),Te=i.get(K).__webglTexture;n.bindTexture(X,Te),f(X),n.unbindTexture()}}}const lt=[],ke=[];function It(E){if(E.samples>0){if(Ut(E)===!1){const m=E.textures,D=E.width,q=E.height;let K=t.COLOR_BUFFER_BIT;const X=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(E),ne=m.length>1;if(ne)for(let De=0;De<m.length;De++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Me=E.texture.mipmaps;Me&&Me.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let De=0;De<m.length;De++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[De]);const Q=i.get(m[De]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Q,0)}t.blitFramebuffer(0,0,D,q,0,0,D,q,K,t.NEAREST),c===!0&&(lt.length=0,ke.length=0,lt.push(t.COLOR_ATTACHMENT0+De),E.depthBuffer&&E.resolveDepthBuffer===!1&&(lt.push(X),ke.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ke)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ne)for(let De=0;De<m.length;De++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,Te.__webglColorRenderbuffer[De]);const Q=i.get(m[De]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,Q,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const m=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[m])}}}function P(E){return Math.min(r.maxSamples,E.samples)}function Ut(E){const m=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function et(E){const m=a.render.frame;u.get(E)!==m&&(u.set(E,m),E.update())}function ft(E,m){const D=E.colorSpace,q=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||D!==es&&D!==Hi&&(je.getTransfer(D)===at?(q!==Wn||K!==Un)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",D)),m}function Se(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=Vt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Sx(t,e){function n(i,r=Hi){let s;const a=je.getTransfer(r);if(i===Un)return t.UNSIGNED_BYTE;if(i===jl)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Kl)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Pd)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ld)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rd)return t.BYTE;if(i===Cd)return t.SHORT;if(i===Hs)return t.UNSIGNED_SHORT;if(i===Yl)return t.INT;if(i===oi)return t.UNSIGNED_INT;if(i===ii)return t.FLOAT;if(i===Ci)return t.HALF_FLOAT;if(i===Dd)return t.ALPHA;if(i===Id)return t.RGB;if(i===Wn)return t.RGBA;if(i===Pi)return t.DEPTH_COMPONENT;if(i===_r)return t.DEPTH_STENCIL;if(i===Ud)return t.RED;if(i===$l)return t.RED_INTEGER;if(i===Qr)return t.RG;if(i===Zl)return t.RG_INTEGER;if(i===Jl)return t.RGBA_INTEGER;if(i===Ba||i===ka||i===za||i===Ga)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ba)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ba)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wc||i===Xc||i===qc||i===Yc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jc||i===Kc||i===$c||i===Zc||i===Jc||i===Qc||i===el)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jc||i===Kc)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$c)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zc)return s.COMPRESSED_R11_EAC;if(i===Jc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Qc)return s.COMPRESSED_RG11_EAC;if(i===el)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===tl||i===nl||i===il||i===rl||i===sl||i===al||i===ol||i===cl||i===ll||i===ul||i===hl||i===fl||i===dl||i===pl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===tl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===il)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===al)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ol)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ll)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ul)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pl)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ml||i===gl||i===_l)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ml)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_l)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vl||i===xl||i===Ml||i===Sl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Kd(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ci({vertexShader:Ex,fragmentShader:yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Di(new so(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bx extends ds{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,g=null,_=null;const M=typeof XRWebGLBinding<"u",p=new Tx,f={},b=n.getContextAttributes();let y=null,T=null;const A=[],R=[],w=new ct;let U=null;const v=new Dn;v.viewport=new Pt;const S=new Dn;S.viewport=new Pt;const C=[v,S],O=new Fg;let F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=A[Y];return Z===void 0&&(Z=new lc,A[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=A[Y];return Z===void 0&&(Z=new lc,A[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=A[Y];return Z===void 0&&(Z=new lc,A[Y]=Z),Z.getHandSpace()};function H(Y){const Z=R.indexOf(Y.inputSource);if(Z===-1)return;const me=A[Z];me!==void 0&&(me.update(Y.inputSource,Y.frame,l||a),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",z);for(let Y=0;Y<A.length;Y++){const Z=R[Y];Z!==null&&(R[Y]=null,A[Y].disconnect(Z))}F=null,V=null,p.reset();for(const Y in f)delete f[Y];e.setRenderTarget(y),g=null,d=null,h=null,r=null,T=null,_t.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",W),r.addEventListener("inputsourceschange",z),b.xrCompatible!==!0&&await n.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Fe=null,xe=null;b.depth&&(xe=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=b.stencil?_r:Pi,Fe=b.stencil?Ws:oi);const $e={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer($e),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new ai(d.textureWidth,d.textureHeight,{format:Wn,type:Un,depthTexture:new Ys(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,me),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),T=new ai(g.framebufferWidth,g.framebufferHeight,{format:Wn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),_t.setContext(r),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(Y){for(let Z=0;Z<Y.removed.length;Z++){const me=Y.removed[Z],Fe=R.indexOf(me);Fe>=0&&(R[Fe]=null,A[Fe].disconnect(me))}for(let Z=0;Z<Y.added.length;Z++){const me=Y.added[Z];let Fe=R.indexOf(me);if(Fe===-1){for(let $e=0;$e<A.length;$e++)if($e>=R.length){R.push(me),Fe=$e;break}else if(R[$e]===null){R[$e]=me,Fe=$e;break}if(Fe===-1)break}const xe=A[Fe];xe&&xe.connect(me)}}const $=new B,ue=new B;function ae(Y,Z,me){$.setFromMatrixPosition(Z.matrixWorld),ue.setFromMatrixPosition(me.matrixWorld);const Fe=$.distanceTo(ue),xe=Z.projectionMatrix.elements,$e=me.projectionMatrix.elements,Vt=xe[14]/(xe[10]-1),Ye=xe[14]/(xe[10]+1),it=(xe[9]+1)/xe[5],lt=(xe[9]-1)/xe[5],ke=(xe[8]-1)/xe[0],It=($e[8]+1)/$e[0],P=Vt*ke,Ut=Vt*It,et=Fe/(-ke+It),ft=et*-ke;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ft),Y.translateZ(et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),xe[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Se=Vt+et,E=Ye+et,m=P-ft,D=Ut+(Fe-ft),q=it*Ye/E*Se,K=lt*Ye/E*Se;Y.projectionMatrix.makePerspective(m,D,q,K,Se,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function he(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Z=Y.near,me=Y.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(me=p.depthFar)),O.near=S.near=v.near=Z,O.far=S.far=v.far=me,(F!==O.near||V!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),F=O.near,V=O.far),O.layers.mask=Y.layers.mask|6,v.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const Fe=Y.parent,xe=O.cameras;he(O,Fe);for(let $e=0;$e<xe.length;$e++)he(xe[$e],Fe);xe.length===2?ae(O,v,S):O.projectionMatrix.copy(v.projectionMatrix),Ge(Y,O,Fe)};function Ge(Y,Z,me){me===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Y){return f[Y]};let Be=null;function Et(Y,Z){if(u=Z.getViewerPose(l||a),_=Z,u!==null){const me=u.views;g!==null&&(e.setRenderTargetFramebuffer(T,g.framebuffer),e.setRenderTarget(T));let Fe=!1;me.length!==O.cameras.length&&(O.cameras.length=0,Fe=!0);for(let Ye=0;Ye<me.length;Ye++){const it=me[Ye];let lt=null;if(g!==null)lt=g.getViewport(it);else{const It=h.getViewSubImage(d,it);lt=It.viewport,Ye===0&&(e.setRenderTargetTextures(T,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(T))}let ke=C[Ye];ke===void 0&&(ke=new Dn,ke.layers.enable(Ye),ke.viewport=new Pt,C[Ye]=ke),ke.matrix.fromArray(it.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(it.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(lt.x,lt.y,lt.width,lt.height),Ye===0&&(O.matrix.copy(ke.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Fe===!0&&O.cameras.push(ke)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const Ye=h.getDepthInformation(me[0]);Ye&&Ye.isValid&&Ye.texture&&p.init(Ye,r.renderState)}if(xe&&xe.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let Ye=0;Ye<me.length;Ye++){const it=me[Ye].camera;if(it){let lt=f[it];lt||(lt=new Kd,f[it]=lt);const ke=h.getCameraImage(it);lt.sourceTexture=ke}}}}for(let me=0;me<A.length;me++){const Fe=R[me],xe=A[me];Fe!==null&&xe!==void 0&&xe.update(Fe,Z,l||a)}Be&&Be(Y,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const _t=new Zd;_t.setAnimationLoop(Et),this.setAnimationLoop=function(Y){Be=Y},this.dispose=function(){}}}const ur=new Li,Ax=new Lt;function wx(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Hd(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,b,y,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&g(p,f,T)):f.isMeshMatcapMaterial?(s(p,f),_(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),M(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,b,y):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===ln&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===ln&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const b=e.get(f),y=b.envMap,T=b.envMapRotation;y&&(p.envMap.value=y,ur.copy(T),ur.x*=-1,ur.y*=-1,ur.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),p.envMapRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(ur)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,b,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=y*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function M(p,f){const b=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Rx(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){const T=y.program;i.uniformBlockBinding(b,T)}function l(b,y){let T=r[b.id];T===void 0&&(_(b),T=u(b),r[b.id]=T,b.addEventListener("dispose",p));const A=y.program;i.updateUBOMapping(b,A);const R=e.render.frame;s[b.id]!==R&&(d(b),s[b.id]=R)}function u(b){const y=h();b.__bindingPointIndex=y;const T=t.createBuffer(),A=b.__size,R=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,A,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,T),T}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=r[b.id],T=b.uniforms,A=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let R=0,w=T.length;R<w;R++){const U=Array.isArray(T[R])?T[R]:[T[R]];for(let v=0,S=U.length;v<S;v++){const C=U[v];if(g(C,R,v,A)===!0){const O=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let H=0;H<F.length;H++){const W=F[H],z=M(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,O+V,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,V),V+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(b,y,T,A){const R=b.value,w=y+"_"+T;if(A[w]===void 0)return typeof R=="number"||typeof R=="boolean"?A[w]=R:A[w]=R.clone(),!0;{const U=A[w];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return A[w]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function _(b){const y=b.uniforms;let T=0;const A=16;for(let w=0,U=y.length;w<U;w++){const v=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,C=v.length;S<C;S++){const O=v[S],F=Array.isArray(O.value)?O.value:[O.value];for(let V=0,H=F.length;V<H;V++){const W=F[V],z=M(W),$=T%A,ue=$%z.boundary,ae=$+ue;T+=ue,ae!==0&&A-ae<z.storage&&(T+=A-ae),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=z.storage}}}const R=T%A;return R>0&&(T+=A-R),b.__size=T,b.__cache={},this}function M(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const b in r)t.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}const Cx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zn=null;function Px(){return Zn===null&&(Zn=new Ag(Cx,16,16,Qr,Ci),Zn.name="DFG_LUT",Zn.minFilter=$t,Zn.magFilter=$t,Zn.wrapS=Si,Zn.wrapT=Si,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}class Lx{constructor(e={}){const{canvas:n=B0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:g=Un}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const M=g,p=new Set([Jl,Zl,$l]),f=new Set([Un,oi,Hs,Ws,jl,Kl]),b=new Uint32Array(4),y=new Int32Array(4);let T=null,A=null;const R=[],w=[];let U=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=Ln;let C=0,O=0,F=null,V=-1,H=null;const W=new Pt,z=new Pt;let $=null;const ue=new qe(0);let ae=0,he=n.width,Ge=n.height,Be=1,Et=null,_t=null;const Y=new Pt(0,0,he,Ge),Z=new Pt(0,0,he,Ge);let me=!1;const Fe=new Yd;let xe=!1,$e=!1;const Vt=new Lt,Ye=new B,it=new Pt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function It(){return F===null?Be:1}let P=i;function Ut(x,I){return n.getContext(x,I)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ql}`),n.addEventListener("webglcontextlost",Ue,!1),n.addEventListener("webglcontextrestored",dt,!1),n.addEventListener("webglcontextcreationerror",rt,!1),P===null){const I="webgl2";if(P=Ut(I,x),P===null)throw Ut(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw Je("WebGLRenderer: "+x.message),x}let et,ft,Se,E,m,D,q,K,X,Te,ne,Me,De,Q,re,_e,Ee,ie,ze,L,le,ee,fe,J;function j(){et=new P2(P),et.init(),ee=new Sx(P,et),ft=new S2(P,et,e,ee),Se=new xx(P,et),ft.reversedDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),E=new I2(P),m=new rx,D=new Mx(P,et,Se,m,ft,ee,E),q=new y2(v),K=new C2(v),X=new Og(P),fe=new x2(P,X),Te=new L2(P,X,E,fe),ne=new F2(P,Te,X,E),ze=new U2(P,ft,D),_e=new E2(m),Me=new ix(v,q,K,et,ft,fe,_e),De=new wx(v,m),Q=new ax,re=new fx(et),ie=new v2(v,q,K,Se,ne,_,c),Ee=new _x(v,ne,ft),J=new Rx(P,E,ft,Se),L=new M2(P,et,E),le=new D2(P,et,E),E.programs=Me.programs,v.capabilities=ft,v.extensions=et,v.properties=m,v.renderLists=Q,v.shadowMap=Ee,v.state=Se,v.info=E}j(),M!==Un&&(U=new O2(M,n.width,n.height,r,s));const te=new bx(v,P);this.xr=te,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const x=et.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=et.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(x){x!==void 0&&(Be=x,this.setSize(he,Ge,!1))},this.getSize=function(x){return x.set(he,Ge)},this.setSize=function(x,I,G=!0){if(te.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}he=x,Ge=I,n.width=Math.floor(x*Be),n.height=Math.floor(I*Be),G===!0&&(n.style.width=x+"px",n.style.height=I+"px"),U!==null&&U.setSize(n.width,n.height),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(he*Be,Ge*Be).floor()},this.setDrawingBufferSize=function(x,I,G){he=x,Ge=I,Be=G,n.width=Math.floor(x*G),n.height=Math.floor(I*G),this.setViewport(0,0,x,I)},this.setEffects=function(x){if(M===Un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let I=0;I<x.length;I++)if(x[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(W)},this.getViewport=function(x){return x.copy(Y)},this.setViewport=function(x,I,G,k){x.isVector4?Y.set(x.x,x.y,x.z,x.w):Y.set(x,I,G,k),Se.viewport(W.copy(Y).multiplyScalar(Be).round())},this.getScissor=function(x){return x.copy(Z)},this.setScissor=function(x,I,G,k){x.isVector4?Z.set(x.x,x.y,x.z,x.w):Z.set(x,I,G,k),Se.scissor(z.copy(Z).multiplyScalar(Be).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(x){Se.setScissorTest(me=x)},this.setOpaqueSort=function(x){Et=x},this.setTransparentSort=function(x){_t=x},this.getClearColor=function(x){return x.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,G=!0){let k=0;if(x){let N=!1;if(F!==null){const se=F.texture.format;N=p.has(se)}if(N){const se=F.texture.type,de=f.has(se),ce=ie.getClearColor(),ge=ie.getClearAlpha(),be=ce.r,Le=ce.g,Ce=ce.b;de?(b[0]=be,b[1]=Le,b[2]=Ce,b[3]=ge,P.clearBufferuiv(P.COLOR,0,b)):(y[0]=be,y[1]=Le,y[2]=Ce,y[3]=ge,P.clearBufferiv(P.COLOR,0,y))}else k|=P.COLOR_BUFFER_BIT}I&&(k|=P.DEPTH_BUFFER_BIT),G&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ue,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",rt,!1),ie.dispose(),Q.dispose(),re.dispose(),m.dispose(),q.dispose(),K.dispose(),ne.dispose(),fe.dispose(),J.dispose(),Me.dispose(),te.dispose(),te.removeEventListener("sessionstart",sh),te.removeEventListener("sessionend",ah),ir.stop()};function Ue(x){x.preventDefault(),xh("WebGLRenderer: Context Lost."),S=!0}function dt(){xh("WebGLRenderer: Context Restored."),S=!1;const x=E.autoReset,I=Ee.enabled,G=Ee.autoUpdate,k=Ee.needsUpdate,N=Ee.type;j(),E.autoReset=x,Ee.enabled=I,Ee.autoUpdate=G,Ee.needsUpdate=k,Ee.type=N}function rt(x){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function $n(x){const I=x.target;I.removeEventListener("dispose",$n),fi(I)}function fi(x){Zm(x),m.remove(x)}function Zm(x){const I=m.get(x).programs;I!==void 0&&(I.forEach(function(G){Me.releaseProgram(G)}),x.isShaderMaterial&&Me.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,G,k,N,se){I===null&&(I=lt);const de=N.isMesh&&N.matrixWorld.determinant()<0,ce=Qm(x,I,G,k,N);Se.setMaterial(k,de);let ge=G.index,be=1;if(k.wireframe===!0){if(ge=Te.getWireframeAttribute(G),ge===void 0)return;be=2}const Le=G.drawRange,Ce=G.attributes.position;let Ve=Le.start*be,ot=(Le.start+Le.count)*be;se!==null&&(Ve=Math.max(Ve,se.start*be),ot=Math.min(ot,(se.start+se.count)*be)),ge!==null?(Ve=Math.max(Ve,0),ot=Math.min(ot,ge.count)):Ce!=null&&(Ve=Math.max(Ve,0),ot=Math.min(ot,Ce.count));const Tt=ot-Ve;if(Tt<0||Tt===1/0)return;fe.setup(N,k,ce,G,ge);let bt,ut=L;if(ge!==null&&(bt=X.get(ge),ut=le,ut.setIndex(bt)),N.isMesh)k.wireframe===!0?(Se.setLineWidth(k.wireframeLinewidth*It()),ut.setMode(P.LINES)):ut.setMode(P.TRIANGLES);else if(N.isLine){let Pe=k.linewidth;Pe===void 0&&(Pe=1),Se.setLineWidth(Pe*It()),N.isLineSegments?ut.setMode(P.LINES):N.isLineLoop?ut.setMode(P.LINE_LOOP):ut.setMode(P.LINE_STRIP)}else N.isPoints?ut.setMode(P.POINTS):N.isSprite&&ut.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Xs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ut.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pe=N._multiDrawStarts,st=N._multiDrawCounts,Ze=N._multiDrawCount,pn=ge?X.get(ge).bytesPerElement:1,Ar=m.get(k).currentProgram.getUniforms();for(let mn=0;mn<Ze;mn++)Ar.setValue(P,"_gl_DrawID",mn),ut.render(Pe[mn]/pn,st[mn])}else if(N.isInstancedMesh)ut.renderInstances(Ve,Tt,N.count);else if(G.isInstancedBufferGeometry){const Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,st=Math.min(G.instanceCount,Pe);ut.renderInstances(Ve,Tt,st)}else ut.render(Ve,Tt)};function rh(x,I,G){x.transparent===!0&&x.side===xi&&x.forceSinglePass===!1?(x.side=ln,x.needsUpdate=!0,ca(x,I,G),x.side=Zi,x.needsUpdate=!0,ca(x,I,G),x.side=xi):ca(x,I,G)}this.compile=function(x,I,G=null){G===null&&(G=x),A=re.get(G),A.init(I),w.push(A),G.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(A.pushLight(N),N.castShadow&&A.pushShadow(N))}),x!==G&&x.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(A.pushLight(N),N.castShadow&&A.pushShadow(N))}),A.setupLights();const k=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const se=N.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const ce=se[de];rh(ce,G,N),k.add(ce)}else rh(se,G,N),k.add(se)}),A=w.pop(),k},this.compileAsync=function(x,I,G=null){const k=this.compile(x,I,G);return new Promise(N=>{function se(){if(k.forEach(function(de){m.get(de).currentProgram.isReady()&&k.delete(de)}),k.size===0){N(x);return}setTimeout(se,10)}et.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let ko=null;function Jm(x){ko&&ko(x)}function sh(){ir.stop()}function ah(){ir.start()}const ir=new Zd;ir.setAnimationLoop(Jm),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(x){ko=x,te.setAnimationLoop(x),x===null?ir.stop():ir.start()},te.addEventListener("sessionstart",sh),te.addEventListener("sessionend",ah),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const G=te.enabled===!0&&te.isPresenting===!0,k=U!==null&&(F===null||G)&&U.begin(v,F);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(I),I=te.getCamera()),x.isScene===!0&&x.onBeforeRender(v,x,I,F),A=re.get(x,w.length),A.init(I),w.push(A),Vt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Fe.setFromProjectionMatrix(Vt,ri,I.reversedDepth),$e=this.localClippingEnabled,xe=_e.init(this.clippingPlanes,$e),T=Q.get(x,R.length),T.init(),R.push(T),te.enabled===!0&&te.isPresenting===!0){const de=v.xr.getDepthSensingMesh();de!==null&&zo(de,I,-1/0,v.sortObjects)}zo(x,I,0,v.sortObjects),T.finish(),v.sortObjects===!0&&T.sort(Et,_t),ke=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,ke&&ie.addToRenderList(T,x),this.info.render.frame++,xe===!0&&_e.beginShadows();const N=A.state.shadowsArray;if(Ee.render(N,x,I),xe===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&U.hasRenderPass())===!1){const de=T.opaque,ce=T.transmissive;if(A.setupLights(),I.isArrayCamera){const ge=I.cameras;if(ce.length>0)for(let be=0,Le=ge.length;be<Le;be++){const Ce=ge[be];ch(de,ce,x,Ce)}ke&&ie.render(x);for(let be=0,Le=ge.length;be<Le;be++){const Ce=ge[be];oh(T,x,Ce,Ce.viewport)}}else ce.length>0&&ch(de,ce,x,I),ke&&ie.render(x),oh(T,x,I)}F!==null&&O===0&&(D.updateMultisampleRenderTarget(F),D.updateRenderTargetMipmap(F)),k&&U.end(v),x.isScene===!0&&x.onAfterRender(v,x,I),fe.resetDefaultState(),V=-1,H=null,w.pop(),w.length>0?(A=w[w.length-1],xe===!0&&_e.setGlobalState(v.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?T=R[R.length-1]:T=null};function zo(x,I,G,k){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)A.pushLight(x),x.castShadow&&A.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Fe.intersectsSprite(x)){k&&it.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Vt);const de=ne.update(x),ce=x.material;ce.visible&&T.push(x,de,ce,G,it.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Fe.intersectsObject(x))){const de=ne.update(x),ce=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),it.copy(x.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),it.copy(de.boundingSphere.center)),it.applyMatrix4(x.matrixWorld).applyMatrix4(Vt)),Array.isArray(ce)){const ge=de.groups;for(let be=0,Le=ge.length;be<Le;be++){const Ce=ge[be],Ve=ce[Ce.materialIndex];Ve&&Ve.visible&&T.push(x,de,Ve,G,it.z,Ce)}}else ce.visible&&T.push(x,de,ce,G,it.z,null)}}const se=x.children;for(let de=0,ce=se.length;de<ce;de++)zo(se[de],I,G,k)}function oh(x,I,G,k){const{opaque:N,transmissive:se,transparent:de}=x;A.setupLightsView(G),xe===!0&&_e.setGlobalState(v.clippingPlanes,G),k&&Se.viewport(W.copy(k)),N.length>0&&oa(N,I,G),se.length>0&&oa(se,I,G),de.length>0&&oa(de,I,G),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ch(x,I,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){const Ve=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new ai(1,1,{generateMipmaps:!0,type:Ve?Ci:Un,minFilter:gr,samples:ft.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const se=A.state.transmissionRenderTarget[k.id],de=k.viewport||W;se.setSize(de.z*v.transmissionResolutionScale,de.w*v.transmissionResolutionScale);const ce=v.getRenderTarget(),ge=v.getActiveCubeFace(),be=v.getActiveMipmapLevel();v.setRenderTarget(se),v.getClearColor(ue),ae=v.getClearAlpha(),ae<1&&v.setClearColor(16777215,.5),v.clear(),ke&&ie.render(G);const Le=v.toneMapping;v.toneMapping=si;const Ce=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),xe===!0&&_e.setGlobalState(v.clippingPlanes,k),oa(x,G,k),D.updateMultisampleRenderTarget(se),D.updateRenderTargetMipmap(se),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ot=0,Tt=I.length;ot<Tt;ot++){const bt=I[ot],{object:ut,geometry:Pe,material:st,group:Ze}=bt;if(st.side===xi&&ut.layers.test(k.layers)){const pn=st.side;st.side=ln,st.needsUpdate=!0,lh(ut,G,k,Pe,st,Ze),st.side=pn,st.needsUpdate=!0,Ve=!0}}Ve===!0&&(D.updateMultisampleRenderTarget(se),D.updateRenderTargetMipmap(se))}v.setRenderTarget(ce,ge,be),v.setClearColor(ue,ae),Ce!==void 0&&(k.viewport=Ce),v.toneMapping=Le}function oa(x,I,G){const k=I.isScene===!0?I.overrideMaterial:null;for(let N=0,se=x.length;N<se;N++){const de=x[N],{object:ce,geometry:ge,group:be}=de;let Le=de.material;Le.allowOverride===!0&&k!==null&&(Le=k),ce.layers.test(G.layers)&&lh(ce,I,G,ge,Le,be)}}function lh(x,I,G,k,N,se){x.onBeforeRender(v,I,G,k,N,se),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(v,I,G,k,x,se),N.transparent===!0&&N.side===xi&&N.forceSinglePass===!1?(N.side=ln,N.needsUpdate=!0,v.renderBufferDirect(G,I,k,N,x,se),N.side=Zi,N.needsUpdate=!0,v.renderBufferDirect(G,I,k,N,x,se),N.side=xi):v.renderBufferDirect(G,I,k,N,x,se),x.onAfterRender(v,I,G,k,N,se)}function ca(x,I,G){I.isScene!==!0&&(I=lt);const k=m.get(x),N=A.state.lights,se=A.state.shadowsArray,de=N.state.version,ce=Me.getParameters(x,N.state,se,I,G),ge=Me.getProgramCacheKey(ce);let be=k.programs;k.environment=x.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(x.isMeshStandardMaterial?K:q).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,be===void 0&&(x.addEventListener("dispose",$n),be=new Map,k.programs=be);let Le=be.get(ge);if(Le!==void 0){if(k.currentProgram===Le&&k.lightsStateVersion===de)return hh(x,ce),Le}else ce.uniforms=Me.getUniforms(x),x.onBeforeCompile(ce,v),Le=Me.acquireProgram(ce,ge),be.set(ge,Le),k.uniforms=ce.uniforms;const Ce=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ce.clippingPlanes=_e.uniform),hh(x,ce),k.needsLights=t0(x),k.lightsStateVersion=de,k.needsLights&&(Ce.ambientLightColor.value=N.state.ambient,Ce.lightProbe.value=N.state.probe,Ce.directionalLights.value=N.state.directional,Ce.directionalLightShadows.value=N.state.directionalShadow,Ce.spotLights.value=N.state.spot,Ce.spotLightShadows.value=N.state.spotShadow,Ce.rectAreaLights.value=N.state.rectArea,Ce.ltc_1.value=N.state.rectAreaLTC1,Ce.ltc_2.value=N.state.rectAreaLTC2,Ce.pointLights.value=N.state.point,Ce.pointLightShadows.value=N.state.pointShadow,Ce.hemisphereLights.value=N.state.hemi,Ce.directionalShadowMap.value=N.state.directionalShadowMap,Ce.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ce.spotShadowMap.value=N.state.spotShadowMap,Ce.spotLightMatrix.value=N.state.spotLightMatrix,Ce.spotLightMap.value=N.state.spotLightMap,Ce.pointShadowMap.value=N.state.pointShadowMap,Ce.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Le,k.uniformsList=null,Le}function uh(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=Va.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function hh(x,I){const G=m.get(x);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function Qm(x,I,G,k,N){I.isScene!==!0&&(I=lt),D.resetTextureUnits();const se=I.fog,de=k.isMeshStandardMaterial?I.environment:null,ce=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:es,ge=(k.isMeshStandardMaterial?K:q).get(k.envMap||de),be=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ce=!!G.morphAttributes.position,Ve=!!G.morphAttributes.normal,ot=!!G.morphAttributes.color;let Tt=si;k.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Tt=v.toneMapping);const bt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ut=bt!==void 0?bt.length:0,Pe=m.get(k),st=A.state.lights;if(xe===!0&&($e===!0||x!==H)){const Zt=x===H&&k.id===V;_e.setState(k,x,Zt)}let Ze=!1;k.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==st.state.version||Pe.outputColorSpace!==ce||N.isBatchedMesh&&Pe.batching===!1||!N.isBatchedMesh&&Pe.batching===!0||N.isBatchedMesh&&Pe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pe.instancing===!1||!N.isInstancedMesh&&Pe.instancing===!0||N.isSkinnedMesh&&Pe.skinning===!1||!N.isSkinnedMesh&&Pe.skinning===!0||N.isInstancedMesh&&Pe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pe.instancingMorph===!1&&N.morphTexture!==null||Pe.envMap!==ge||k.fog===!0&&Pe.fog!==se||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==_e.numPlanes||Pe.numIntersection!==_e.numIntersection)||Pe.vertexAlphas!==be||Pe.vertexTangents!==Le||Pe.morphTargets!==Ce||Pe.morphNormals!==Ve||Pe.morphColors!==ot||Pe.toneMapping!==Tt||Pe.morphTargetsCount!==ut)&&(Ze=!0):(Ze=!0,Pe.__version=k.version);let pn=Pe.currentProgram;Ze===!0&&(pn=ca(k,I,N));let Ar=!1,mn=!1,bs=!1;const pt=pn.getUniforms(),sn=Pe.uniforms;if(Se.useProgram(pn.program)&&(Ar=!0,mn=!0,bs=!0),k.id!==V&&(V=k.id,mn=!0),Ar||H!==x){Se.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),pt.setValue(P,"projectionMatrix",x.projectionMatrix),pt.setValue(P,"viewMatrix",x.matrixWorldInverse);const an=pt.map.cameraPosition;an!==void 0&&an.setValue(P,Ye.setFromMatrixPosition(x.matrixWorld)),ft.logarithmicDepthBuffer&&pt.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&pt.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),H!==x&&(H=x,mn=!0,bs=!0)}if(Pe.needsLights&&(st.state.directionalShadowMap.length>0&&pt.setValue(P,"directionalShadowMap",st.state.directionalShadowMap,D),st.state.spotShadowMap.length>0&&pt.setValue(P,"spotShadowMap",st.state.spotShadowMap,D),st.state.pointShadowMap.length>0&&pt.setValue(P,"pointShadowMap",st.state.pointShadowMap,D)),N.isSkinnedMesh){pt.setOptional(P,N,"bindMatrix"),pt.setOptional(P,N,"bindMatrixInverse");const Zt=N.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),pt.setValue(P,"boneTexture",Zt.boneTexture,D))}N.isBatchedMesh&&(pt.setOptional(P,N,"batchingTexture"),pt.setValue(P,"batchingTexture",N._matricesTexture,D),pt.setOptional(P,N,"batchingIdTexture"),pt.setValue(P,"batchingIdTexture",N._indirectTexture,D),pt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&pt.setValue(P,"batchingColorTexture",N._colorsTexture,D));const An=G.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&ze.update(N,G,pn),(mn||Pe.receiveShadow!==N.receiveShadow)&&(Pe.receiveShadow=N.receiveShadow,pt.setValue(P,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(sn.envMap.value=ge,sn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(sn.envMapIntensity.value=I.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=Px()),mn&&(pt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&e0(sn,bs),se&&k.fog===!0&&De.refreshFogUniforms(sn,se),De.refreshMaterialUniforms(sn,k,Be,Ge,A.state.transmissionRenderTarget[x.id]),Va.upload(P,uh(Pe),sn,D)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Va.upload(P,uh(Pe),sn,D),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&pt.setValue(P,"center",N.center),pt.setValue(P,"modelViewMatrix",N.modelViewMatrix),pt.setValue(P,"normalMatrix",N.normalMatrix),pt.setValue(P,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Zt=k.uniformsGroups;for(let an=0,Go=Zt.length;an<Go;an++){const rr=Zt[an];J.update(rr,pn),J.bind(rr,pn)}}return pn}function e0(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function t0(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(x,I,G){const k=m.get(x);k.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),m.get(x.texture).__webglTexture=I,m.get(x.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:G,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const G=m.get(x);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0};const n0=P.createFramebuffer();this.setRenderTarget=function(x,I=0,G=0){F=x,C=I,O=G;let k=null,N=!1,se=!1;if(x){const ce=m.get(x);if(ce.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(P.FRAMEBUFFER,ce.__webglFramebuffer),W.copy(x.viewport),z.copy(x.scissor),$=x.scissorTest,Se.viewport(W),Se.scissor(z),Se.setScissorTest($),V=-1;return}else if(ce.__webglFramebuffer===void 0)D.setupRenderTarget(x);else if(ce.__hasExternalTextures)D.rebindTextures(x,m.get(x.texture).__webglTexture,m.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Le=x.depthTexture;if(ce.__boundDepthTexture!==Le){if(Le!==null&&m.has(Le)&&(x.width!==Le.image.width||x.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(x)}}const ge=x.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(se=!0);const be=m.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(be[I])?k=be[I][G]:k=be[I],N=!0):x.samples>0&&D.useMultisampledRTT(x)===!1?k=m.get(x).__webglMultisampledFramebuffer:Array.isArray(be)?k=be[G]:k=be,W.copy(x.viewport),z.copy(x.scissor),$=x.scissorTest}else W.copy(Y).multiplyScalar(Be).floor(),z.copy(Z).multiplyScalar(Be).floor(),$=me;if(G!==0&&(k=n0),Se.bindFramebuffer(P.FRAMEBUFFER,k)&&Se.drawBuffers(x,k),Se.viewport(W),Se.scissor(z),Se.setScissorTest($),N){const ce=m.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,ce.__webglTexture,G)}else if(se){const ce=I;for(let ge=0;ge<x.textures.length;ge++){const be=m.get(x.textures[ge]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ge,be.__webglTexture,G,ce)}}else if(x!==null&&G!==0){const ce=m.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ce.__webglTexture,G)}V=-1},this.readRenderTargetPixels=function(x,I,G,k,N,se,de,ce=0){if(!(x&&x.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=m.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){Se.bindFramebuffer(P.FRAMEBUFFER,ge);try{const be=x.textures[ce],Le=be.format,Ce=be.type;if(!ft.textureFormatReadable(Le)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Ce)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-k&&G>=0&&G<=x.height-N&&(x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ce),P.readPixels(I,G,k,N,ee.convert(Le),ee.convert(Ce),se))}finally{const be=F!==null?m.get(F).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(x,I,G,k,N,se,de,ce=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=m.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge)if(I>=0&&I<=x.width-k&&G>=0&&G<=x.height-N){Se.bindFramebuffer(P.FRAMEBUFFER,ge);const be=x.textures[ce],Le=be.format,Ce=be.type;if(!ft.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ve),P.bufferData(P.PIXEL_PACK_BUFFER,se.byteLength,P.STREAM_READ),x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ce),P.readPixels(I,G,k,N,ee.convert(Le),ee.convert(Ce),0);const ot=F!==null?m.get(F).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,ot);const Tt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await k0(P,Tt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ve),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,se),P.deleteBuffer(Ve),P.deleteSync(Tt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,G=0){const k=Math.pow(2,-G),N=Math.floor(x.image.width*k),se=Math.floor(x.image.height*k),de=I!==null?I.x:0,ce=I!==null?I.y:0;D.setTexture2D(x,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,de,ce,N,se),Se.unbindTexture()};const i0=P.createFramebuffer(),r0=P.createFramebuffer();this.copyTextureToTexture=function(x,I,G=null,k=null,N=0,se=null){se===null&&(N!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=N,N=0):se=0);let de,ce,ge,be,Le,Ce,Ve,ot,Tt;const bt=x.isCompressedTexture?x.mipmaps[se]:x.image;if(G!==null)de=G.max.x-G.min.x,ce=G.max.y-G.min.y,ge=G.isBox3?G.max.z-G.min.z:1,be=G.min.x,Le=G.min.y,Ce=G.isBox3?G.min.z:0;else{const An=Math.pow(2,-N);de=Math.floor(bt.width*An),ce=Math.floor(bt.height*An),x.isDataArrayTexture?ge=bt.depth:x.isData3DTexture?ge=Math.floor(bt.depth*An):ge=1,be=0,Le=0,Ce=0}k!==null?(Ve=k.x,ot=k.y,Tt=k.z):(Ve=0,ot=0,Tt=0);const ut=ee.convert(I.format),Pe=ee.convert(I.type);let st;I.isData3DTexture?(D.setTexture3D(I,0),st=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(D.setTexture2DArray(I,0),st=P.TEXTURE_2D_ARRAY):(D.setTexture2D(I,0),st=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const Ze=P.getParameter(P.UNPACK_ROW_LENGTH),pn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ar=P.getParameter(P.UNPACK_SKIP_PIXELS),mn=P.getParameter(P.UNPACK_SKIP_ROWS),bs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,bt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,bt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,be),P.pixelStorei(P.UNPACK_SKIP_ROWS,Le),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ce);const pt=x.isDataArrayTexture||x.isData3DTexture,sn=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const An=m.get(x),Zt=m.get(I),an=m.get(An.__renderTarget),Go=m.get(Zt.__renderTarget);Se.bindFramebuffer(P.READ_FRAMEBUFFER,an.__webglFramebuffer),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,Go.__webglFramebuffer);for(let rr=0;rr<ge;rr++)pt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,m.get(x).__webglTexture,N,Ce+rr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,m.get(I).__webglTexture,se,Tt+rr)),P.blitFramebuffer(be,Le,de,ce,Ve,ot,de,ce,P.DEPTH_BUFFER_BIT,P.NEAREST);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||m.has(x)){const An=m.get(x),Zt=m.get(I);Se.bindFramebuffer(P.READ_FRAMEBUFFER,i0),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,r0);for(let an=0;an<ge;an++)pt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,An.__webglTexture,N,Ce+an):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,An.__webglTexture,N),sn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Zt.__webglTexture,se,Tt+an):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Zt.__webglTexture,se),N!==0?P.blitFramebuffer(be,Le,de,ce,Ve,ot,de,ce,P.COLOR_BUFFER_BIT,P.NEAREST):sn?P.copyTexSubImage3D(st,se,Ve,ot,Tt+an,be,Le,de,ce):P.copyTexSubImage2D(st,se,Ve,ot,be,Le,de,ce);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else sn?x.isDataTexture||x.isData3DTexture?P.texSubImage3D(st,se,Ve,ot,Tt,de,ce,ge,ut,Pe,bt.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(st,se,Ve,ot,Tt,de,ce,ge,ut,bt.data):P.texSubImage3D(st,se,Ve,ot,Tt,de,ce,ge,ut,Pe,bt):x.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,se,Ve,ot,de,ce,ut,Pe,bt.data):x.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,se,Ve,ot,bt.width,bt.height,ut,bt.data):P.texSubImage2D(P.TEXTURE_2D,se,Ve,ot,de,ce,ut,Pe,bt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ze),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ar),P.pixelStorei(P.UNPACK_SKIP_ROWS,mn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,bs),se===0&&I.generateMipmaps&&P.generateMipmap(st),Se.unbindTexture()},this.initRenderTarget=function(x){m.get(x).__webglFramebuffer===void 0&&D.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?D.setTextureCube(x,0):x.isData3DTexture?D.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?D.setTexture2DArray(x,0):D.setTexture2D(x,0),Se.unbindTexture()},this.resetState=function(){C=0,O=0,F=null,Se.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}var ns=typeof self<"u"?self:{};function hr(){throw Error("Invalid UTF8")}function uf(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let Da,_c;const Dx=typeof TextDecoder<"u";let Ix;const Ux=typeof TextEncoder<"u";function np(t){if(Ux)t=(Ix||=new TextEncoder).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}var iu,Za;e:{for(var hf=["CLOSURE_FLAGS"],vc=ns,xc=0;xc<hf.length;xc++)if((vc=vc[hf[xc]])==null){Za=null;break e}Za=vc}var js,ff=Za&&Za[610401301];iu=ff!=null&&ff;const df=ns.navigator;function bl(t){return!!iu&&!!js&&js.brands.some((({brand:e})=>e&&e.indexOf(t)!=-1))}function In(t){var e;return(e=ns.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(t)!=-1}function Wi(){return!!iu&&!!js&&js.brands.length>0}function Mc(){return Wi()?bl("Chromium"):(In("Chrome")||In("CriOS"))&&!(!Wi()&&In("Edge"))||In("Silk")}function co(t){return co[" "](t),t}js=df&&df.userAgentData||null,co[" "]=function(){};var Fx=!Wi()&&(In("Trident")||In("MSIE"));!In("Android")||Mc(),Mc(),In("Safari")&&(Mc()||!Wi()&&In("Coast")||!Wi()&&In("Opera")||!Wi()&&In("Edge")||(Wi()?bl("Microsoft Edge"):In("Edg/"))||Wi()&&bl("Opera"));var ip={},Ns=null;function Nx(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,a){function o(l){for(;c<s.length;){const u=s.charAt(c++),h=Ns[u];if(h!=null)return h;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return l}rp();let c=0;for(;;){const l=o(-1),u=o(0),h=o(64),d=o(64);if(d===64&&l===-1)break;a(l<<2|u>>4),h!=64&&(a(u<<4&240|h>>2),d!=64&&a(h<<6&192|d))}})(t,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function rp(){if(!Ns){Ns={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));ip[n]=i;for(let r=0;r<i.length;r++){const s=i[r];Ns[s]===void 0&&(Ns[s]=r)}}}}var sp=typeof Uint8Array<"u",ap=!Fx&&typeof btoa=="function";function pf(t){if(!ap){var e;e===void 0&&(e=0),rp(),e=ip[e];var n=Array(Math.floor(t.length/3)),i=e[64]||"";let c=0,l=0;for(;c<t.length-2;c+=3){var r=t[c],s=t[c+1],a=t[c+2],o=e[r>>2];r=e[(3&r)<<4|s>>4],s=e[(15&s)<<2|a>>6],a=e[63&a],n[l++]=o+r+s+a}switch(o=0,a=i,t.length-c){case 2:a=e[(15&(o=t[c+1]))<<2]||i;case 1:t=t[c],n[l]=e[t>>2]+e[(3&t)<<4|o>>4]+a+i}return n.join("")}for(e="",n=0,i=t.length-10240;n<i;)e+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));return e+=String.fromCharCode.apply(null,n?t.subarray(n):t),btoa(e)}const mf=/[-_.]/g,Ox={"-":"+",_:"/",".":"="};function Bx(t){return Ox[t]||""}function op(t){if(!ap)return Nx(t);mf.test(t)&&(t=t.replace(mf,Bx)),t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Er(t){return sp&&t!=null&&t instanceof Uint8Array}var is={};function yr(){return kx||=new Ai(null,is)}function ru(t){cp(is);var e=t.g;return(e=e==null||Er(e)?e:typeof e=="string"?op(e):null)==null?e:t.g=e}var Ai=class{h(){return new Uint8Array(ru(this)||0)}constructor(t,e){if(cp(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let kx,zx;function cp(t){if(t!==is)throw Error("illegal external caller")}function lp(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function Al(t){return lp(t=Error(t),"warning"),t}function su(t){if(t!=null){var e=zx??={},n=e[t]||0;n>=5||(e[t]=n+1,lp(t=Error(),"incident"),(function(i){ns.setTimeout((()=>{throw i}),0)})(t))}}var lo=typeof Symbol=="function"&&typeof Symbol()=="symbol";function gs(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var Gx=gs("jas",void 0,!0),gf=gs(void 0,"0di"),Ds=gs(void 0,"1oa"),rs=gs(void 0,Symbol()),Vx=gs(void 0,"0actk"),up=gs(void 0,"8utk");const we=lo?Gx:"Ea",hp={Ea:{value:0,configurable:!0,writable:!0,enumerable:!1}},fp=Object.defineProperties;function uo(t,e){lo||we in t||fp(t,hp),t[we]|=e}function Nt(t,e){lo||we in t||fp(t,hp),t[we]=e}function _s(t){return uo(t,34),t}function Hx(t,e){Nt(e,-15615&(0|t))}function wl(t,e){Nt(e,-15581&(34|t))}function ho(){return typeof BigInt=="function"}function hn(t){return Array.prototype.slice.call(t)}var au,ra={};function fo(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&t.constructor===Object}function ou(t,e){if(t!=null){if(typeof t=="string")t=t?new Ai(t,is):yr();else if(t.constructor!==Ai)if(Er(t))t=t.length?new Ai(new Uint8Array(t),is):yr();else{if(!e)throw Error();t=void 0}}return t}const _f=[];function er(t){if(2&t)throw Error()}Nt(_f,55),au=Object.freeze(_f);class vf{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}function cu(t){return rs?t[rs]:void 0}var Wx=Object.freeze({});function po(t){return t.Na=!0,t}var Xx=po((t=>typeof t=="number")),xf=po((t=>typeof t=="string")),qx=po((t=>typeof t=="boolean")),mo=typeof ns.BigInt=="function"&&typeof ns.BigInt(0)=="bigint";function Yi(t){var e=t;if(xf(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(Xx(e)&&!Number.isSafeInteger(e))throw Error(String(e));return mo?BigInt(t):t=qx(t)?t?"1":"0":xf(t)?t.trim()||"0":String(t)}var Rl=po((t=>mo?t>=jx&&t<=$x:t[0]==="-"?Mf(t,Yx):Mf(t,Kx)));const Yx=Number.MIN_SAFE_INTEGER.toString(),jx=mo?BigInt(Number.MIN_SAFE_INTEGER):void 0,Kx=Number.MAX_SAFE_INTEGER.toString(),$x=mo?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Mf(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const Zx=typeof Uint8Array.prototype.slice=="function";let dp,ht=0,wt=0;function Sf(t){const e=t>>>0;ht=e,wt=(t-e)/4294967296>>>0}function Tr(t){if(t<0){Sf(-t);const[e,n]=fu(ht,wt);ht=e>>>0,wt=n>>>0}else Sf(t)}function lu(t){const e=dp||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),wt=0,ht=e.getUint32(0,!0)}function uu(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Ks(t,e)}function hu(t,e){const n=2147483648&e;return n&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),typeof(t=uu(t,e))=="number"?n?-t:t:n?"-"+t:t}function Ks(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else ho()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Ef(n)+Ef(t));return n}function Ef(t){return t=String(t),"0000000".slice(t.length)+t}function pp(){var t=ht,e=wt;if(2147483648&e)if(ho())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=fu(t,e);t="-"+Ks(n,i)}else t=Ks(t,e);return t}function go(t){if(t.length<16)Tr(Number(t));else if(ho())t=BigInt(t),ht=Number(t&BigInt(4294967295))>>>0,wt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");wt=ht=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));wt*=1e6,ht=1e6*ht+s,ht>=4294967296&&(wt+=Math.trunc(ht/4294967296),wt>>>=0,ht>>>=0)}if(e){const[i,r]=fu(ht,wt);ht=i,wt=r}}}function fu(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}const $s=typeof BigInt=="function"?BigInt.asIntN:void 0,Jx=typeof BigInt=="function"?BigInt.asUintN:void 0,ji=Number.isSafeInteger,_o=Number.isFinite,ss=Math.trunc,Qx=Yi(0);function tr(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function mp(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const e3=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Zs(t){switch(typeof t){case"bigint":return!0;case"number":return _o(t);case"string":return e3.test(t);default:return!1}}function vs(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return _o(t)?0|t:void 0}function gp(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return _o(t)?t>>>0:void 0}function yf(t){if(t[0]==="-")return!1;const e=t.length;return e<20||e===20&&Number(t.substring(0,6))<184467}function _p(t){const e=t.length;return t[0]==="-"?e<20||e===20&&Number(t.substring(0,7))>-922337:e<19||e===19&&Number(t.substring(0,6))<922337}function vp(t){return _p(t)?t:(go(t),pp())}function du(t){return t=ss(t),ji(t)||(Tr(t),t=hu(ht,wt)),t}function xp(t){var e=ss(Number(t));return ji(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),vp(t))}function Tf(t){var e=ss(Number(t));return ji(e)?Yi(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),ho()?Yi($s(64,BigInt(t))):Yi(vp(t)))}function bf(t){if(ji(t))t=Yi(du(t));else{if(t=ss(t),ji(t))t=String(t);else{const e=String(t);_p(e)?t=e:(Tr(t),t=pp())}t=Yi(t)}return t}function Cl(t){return t==null?t:typeof t=="bigint"?(Rl(t)?t=Number(t):(t=$s(64,t),t=Rl(t)?Number(t):String(t)),t):Zs(t)?typeof t=="number"?du(t):xp(t):void 0}function t3(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String(Jx(64,t));if(Zs(t)){if(e==="string")return e=ss(Number(t)),ji(e)&&e>=0?t=String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),yf(t)||(go(t),t=Ks(ht,wt))),t;if(e==="number")return(t=ss(t))>=0&&ji(t)?t:(function(n){if(n<0){Tr(n);var i=Ks(ht,wt);return n=Number(i),ji(n)?n:i}return yf(i=String(n))?i:(Tr(n),uu(ht,wt))})(t)}}function Mp(t){if(typeof t!="string")throw Error();return t}function xs(t){if(t!=null&&typeof t!="string")throw Error();return t}function as(t){return t==null||typeof t=="string"?t:void 0}function pu(t,e,n,i){if(t!=null&&typeof t=="object"&&t.W===ra)return t;if(!Array.isArray(t))return n?2&i?((t=e[gf])||(_s((t=new e).u),t=e[gf]=t),e=t):e=new e:e=void 0,e;let r=n=0|t[we];return r===0&&(r|=32&i),r|=2&i,r!==n&&Nt(t,r),new e(t)}function n3(t,e,n){if(e)e:{if(!Zs(e=t))throw Al("int64");switch(typeof e){case"string":e=Tf(e);break e;case"bigint":e=Yi($s(64,e));break e;default:e=bf(e)}}else t=typeof(e=t),e=e==null?e:t==="bigint"?Yi($s(64,e)):Zs(e)?t==="string"?Tf(e):bf(e):void 0;return(t=e)==null?n?Qx:void 0:t}function i3(t){return t}const r3={};let s3=(function(){try{return co(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class Sc{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const a3=s3?(Object.setPrototypeOf(Sc.prototype,Map.prototype),Object.defineProperties(Sc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Sc):class extends Map{constructor(){super()}};function Af(t){return t}function Ec(t){if(2&t.M)throw Error("Cannot mutate an immutable Map")}var li=class extends a3{constructor(t,e,n=Af,i=Af){super();let r=0|t[we];r|=64,Nt(t,r),this.M=r,this.I=e,this.S=n,this.X=this.I?o3:i;for(let s=0;s<t.length;s++){const a=t[s],o=n(a[0],!1,!0);let c=a[1];e?c===void 0&&(c=null):c=i(a[1],!1,!0,void 0,void 0,r),super.set(o,c)}}La(){var t=f3;if(this.size!==0)return Array.from(super.entries(),(e=>(e[0]=t(e[0]),e[1]=t(e[1]),e)))}da(t=c3){const e=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=t(i[0]),i[1]=t(i[1]),e.push(i);return e}clear(){Ec(this),super.clear()}delete(t){return Ec(this),super.delete(this.S(t,!0,!1))}entries(){if(this.I){var t=super.keys();t=new vf(t,l3,this)}else t=super.entries();return t}values(){if(this.I){var t=super.keys();t=new vf(t,li.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.I?super.forEach(((n,i,r)=>{t.call(e,r.get(i),i,r)})):super.forEach(t,e)}set(t,e){return Ec(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.X(e,!0,!0,this.I,!1,this.M))}Ja(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.I?t===void 0?null:t:this.X(t,!1,!0,void 0,!1,this.M),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.I;return n?((n=this.X(e,!1,!0,n,this.pa,this.M))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function o3(t,e,n,i,r,s){return t=pu(t,i,n,s),r&&(t=Mo(t)),t}function c3(t){return t}function l3(t){return[t,this.get(t)]}let u3,Sp,Ep,h3;function wf(){return u3||=new li(_s([]),void 0,void 0,void 0,r3)}function Pl(t,e,n,i,r){if(t!=null){if(Array.isArray(t)){const s=0|t[we];return t.length===0&&1&s?void 0:r&&2&s?t:vo(t,e,n,i!==void 0,r)}return e(t,i)}}function vo(t,e,n,i,r){const s=i||n?0|t[we]:0,a=i?!!(32&s):void 0;let o=0;const c=(i=hn(t)).length;for(let _=0;_<c;_++){var l=i[_];if(_===c-1&&fo(l)){var u=e,h=n,d=a,g=r;let M;for(let p in l){const f=Pl(l[p],u,h,d,g);f!=null&&((M??={})[p]=f)}l=M}else l=Pl(i[_],e,n,a,r);i[_]=l,l!=null&&(o=_+1)}return o<c&&(i.length=o),n&&((t=cu(t))&&(i[rs]=hn(t)),n(s,i)),i}function f3(t){return Pl(t,mu,void 0,void 0,!1)}function mu(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Rl(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Er(t))return Er(t)&&su(up),pf(t);if(t.W===ra)return yp(t);if(t instanceof Ai){const e=t.g;return e==null?"":typeof e=="string"?e:t.g=pf(e)}return t instanceof li?t.La():void 0}return t}function yp(t){var e=t.u;t=vo(e,mu,void 0,void 0,!1);var n=0|e[we];if((e=t.length)&&!(512&n)){var i=t[e-1],r=!1;fo(i)?(e--,r=!0):i=void 0;var s=e-(n=512&n?0:-1),a=(Sp??i3)(s,n,t,i);if(i&&(t[e]=void 0),s<a&&i){for(var o in s=!0,i){const c=+o;c<=a?(t[r=c+n]=i[o],e=Math.max(r+1,e),r=!1,delete i[o]):s=!1}s&&(i=void 0)}for(s=e-1;e>0;s=e-1)if((o=t[s])==null)e--,r=!0;else{if(!((s-=n)>=a))break;(i??={})[s]=o,e--,r=!0}r&&(t.length=e),i&&t.push(i)}return t}function Ki(t,e,n){return t=Tp(t,e[0],e[1],n?1:2),e!==Ep&&n&&uo(t,8192),t}function Tp(t,e,n,i){if(t==null){var r=96;n?(t=[n],r|=512):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(8192&(r=0|t[we])||!(64&r)||2&r||su(Vx),1024&r)throw Error("farr");if(64&r)return t;if(i===1||i===2||(r|=64),n&&(r|=512,n!==t[0]))throw Error("mid");e:{var s=(n=t).length;if(s){var a=s-1;if(fo(i=n[a])){if((a-=e=512&(r|=256)?0:-1)>=1024)throw Error("pvtlmt");for(var o in i)(s=+o)<a&&(n[s+e]=i[o],delete i[o]);r=-16760833&r|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,s-(512&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return Nt(t,r),t}function Ll(t,e,n=wl){if(t!=null){if(sp&&t instanceof Uint8Array)return e?t:new Uint8Array(t);if(Array.isArray(t)){var i=0|t[we];return 2&i?t:(e&&=i===0||!!(32&i)&&!(64&i||!(16&i)),e?(Nt(t,34|i),4&i&&Object.freeze(t),t):vo(t,Ll,4&i?wl:n,!0,!0))}return t.W===ra?t=2&(i=0|(n=t.u)[we])?t:new t.constructor(xo(n,i,!0)):t instanceof li&&!(2&t.M)&&(n=_s(t.da(Ll)),t=new li(n,t.I,t.S,t.X)),t}}function xo(t,e,n){const i=n||2&e?wl:Hx,r=!!(32&e);return t=(function(s,a,o){const c=hn(s);var l=c.length;const u=256&a?c[l-1]:void 0;for(l+=u?-1:0,a=512&a?1:0;a<l;a++)c[a]=o(c[a]);if(u){a=c[a]={};for(const h in u)a[h]=o(u[h])}return(s=cu(s))&&(c[rs]=hn(s)),c})(t,e,(s=>Ll(s,r,i))),uo(t,32|(n?2:0)),t}function Mo(t){const e=t.u,n=0|e[we];return 2&n?new t.constructor(xo(e,n,!1)):t}function os(t,e){return Fi(t=t.u,0|t[we],e)}function Fi(t,e,n){if(n===-1)return null;const i=n+(512&e?0:-1),r=t.length-1;return i>=r&&256&e?t[r][n]:i<=r?t[i]:void 0}function mt(t,e,n){const i=t.u;let r=0|i[we];return er(r),yt(i,r,e,n),t}function yt(t,e,n,i){const r=512&e?0:-1,s=n+r;var a=t.length-1;return s>=a&&256&e?(t[a][n]=i,e):s<=a?(t[s]=i,e):(i!==void 0&&(n>=(a=e>>14&1023||536870912)?i!=null&&(t[a+r]={[n]:i},Nt(t,e|=256)):t[s]=i),e)}function Ha(t,e){let n=0|(t=t.u)[we];const i=Fi(t,n,e),r=tr(i);return r!=null&&r!==i&&yt(t,n,e,r),r}function bp(t){let e=0|(t=t.u)[we];const n=Fi(t,e,1),i=ou(n,!0);return i!=null&&i!==n&&yt(t,e,1,i),i}function vr(){return Wx===void 0?2:4}function xr(t,e,n,i,r){const s=t.u,a=2&(t=0|s[we])?1:i;r=!!r;let o=0|(i=gu(s,t,e))[we];if(!(4&o)){4&o&&(i=hn(i),o=wi(o,t),t=yt(s,t,e,i));let c=0,l=0;for(;c<i.length;c++){const u=n(i[c]);u!=null&&(i[l++]=u)}l<c&&(i.length=l),o=_u(o,t),n=-2049&(20|o),o=n&=-4097,Nt(i,o),2&o&&Object.freeze(i)}return a===1||a===4&&32&o?Ei(o)||(r=o,o|=2,o!==r&&Nt(i,o),Object.freeze(i)):(a===2&&Ei(o)&&(i=hn(i),o=wi(o,t),o=$i(o,t,r),Nt(i,o),t=yt(s,t,e,i)),Ei(o)||(e=o,o=$i(o,t,r),o!==e&&Nt(i,o))),i}function gu(t,e,n){return t=Fi(t,e,n),Array.isArray(t)?t:au}function _u(t,e){return t===0&&(t=wi(t,e)),1|t}function Ei(t){return!!(2&t)&&!!(4&t)||!!(1024&t)}function Ap(t){t=hn(t);for(let e=0;e<t.length;e++){const n=t[e]=hn(t[e]);Array.isArray(n[1])&&(n[1]=_s(n[1]))}return t}function Dl(t,e,n,i){let r=0|(t=t.u)[we];er(r),yt(t,r,e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Ms(t,e,n,i){er(e);let r=gu(t,e,n);const s=r!==au;if(64&e||!(8192&e)||!s){const a=s?0|r[we]:0;let o=a;(!s||2&o||Ei(o)||4&o&&!(32&o))&&(r=hn(r),o=wi(o,e),e=yt(t,e,n,r)),o=-13&_u(o,e),o=$i(i?-17&o:16|o,e,!0),o!==a&&Nt(r,o)}return r}function yc(t,e){var n=pm;return xu(vu(t=t.u),t,0|t[we],n)===e?e:-1}function vu(t){if(lo)return t[Ds]??(t[Ds]=new Map);if(Ds in t)return t[Ds];const e=new Map;return Object.defineProperty(t,Ds,{value:e}),e}function wp(t,e,n,i){const r=vu(t),s=xu(r,t,e,n);return s!==i&&(s&&(e=yt(t,e,s)),r.set(n,i)),e}function xu(t,e,n,i){let r=t.get(i);if(r!=null)return r;r=0;for(let s=0;s<i.length;s++){const a=i[s];Fi(e,n,a)!=null&&(r!==0&&(n=yt(e,n,r)),r=a)}return t.set(i,r),r}function Mu(t,e,n){let i=0|t[we];const r=Fi(t,i,n);let s;if(r!=null&&r.W===ra)return(e=Mo(r))!==r&&yt(t,i,n,e),e.u;if(Array.isArray(r)){const a=0|r[we];s=2&a?Ki(xo(r,a,!1),e,!0):64&a?r:Ki(s,e,!0)}else s=Ki(void 0,e,!0);return s!==r&&yt(t,i,n,s),s}function Rp(t,e,n){let i=0|(t=t.u)[we];const r=Fi(t,i,n);return(e=pu(r,e,!1,i))!==r&&e!=null&&yt(t,i,n,e),e}function Ke(t,e,n){if((e=Rp(t,e,n))==null)return e;let i=0|(t=t.u)[we];if(!(2&i)){const r=Mo(e);r!==e&&yt(t,i,n,e=r)}return e}function Cp(t,e,n,i,r,s,a){t=t.u;var o=!!(2&e);const c=o?1:r;s=!!s,a&&=!o;var l=0|(r=gu(t,e,i))[we];if(!(o=!!(4&l))){var u=r,h=e;const d=!!(2&(l=_u(l,e)));d&&(h|=2);let g=!d,_=!0,M=0,p=0;for(;M<u.length;M++){const f=pu(u[M],n,!1,h);if(f instanceof n){if(!d){const b=!!(2&(0|f.u[we]));g&&=!b,_&&=b}u[p++]=f}}p<M&&(u.length=p),l|=4,l=_?16|l:-17&l,Nt(u,l=g?8|l:-9&l),d&&Object.freeze(u)}if(a&&!(8&l||!r.length&&(c===1||c===4&&32&l))){for(Ei(l)&&(r=hn(r),l=wi(l,e),e=yt(t,e,i,r)),n=r,a=l,u=0;u<n.length;u++)(l=n[u])!==(h=Mo(l))&&(n[u]=h);a|=8,Nt(n,a=n.length?-17&a:16|a),l=a}return c===1||c===4&&32&l?Ei(l)||(e=l,(l|=!r.length||16&l&&(!o||32&l)?2:1024)!==e&&Nt(r,l),Object.freeze(r)):(c===2&&Ei(l)&&(Nt(r=hn(r),l=$i(l=wi(l,e),e,s)),e=yt(t,e,i,r)),Ei(l)||(i=l,(l=$i(l,e,s))!==i&&Nt(r,l))),r}function Ii(t,e,n){const i=0|t.u[we];return Cp(t,i,e,n,vr(),!1,!(2&i))}function Re(t,e,n,i){return i==null&&(i=void 0),mt(t,n,i)}function zs(t,e,n,i){i==null&&(i=void 0);e:{let r=0|(t=t.u)[we];if(er(r),i==null){const s=vu(t);if(xu(s,t,r,n)!==e)break e;s.set(n,0)}else r=wp(t,r,n,e);yt(t,r,e,i)}}function wi(t,e){return-1025&(t=32|(2&e?2|t:-3&t))}function $i(t,e,n){return 32&e&&n||(t&=-33),t}function So(t,e,n){er(0|t.u[we]),xr(t,e,as,2,!0).push(Mp(n))}function Ja(t,e,n,i){const r=0|t.u[we];er(r),t=Cp(t,r,n,e,2,!0),i=i??new n,t.push(i),t[we]=2&(0|i.u[we])?-9&t[we]:-17&t[we]}function Fn(t,e){return vs(os(t,e))}function On(t,e){return as(os(t,e))}function Ct(t,e){return Ha(t,e)??0}function Js(t,e,n){if(n!=null&&typeof n!="boolean")throw t=typeof n,Error(`Expected boolean but got ${t!="object"?t:n?Array.isArray(n)?"array":t:"null"}: ${n}`);mt(t,e,n)}function ui(t,e,n){if(n!=null){if(typeof n!="number"||!_o(n))throw Al("int32");n|=0}mt(t,e,n)}function ye(t,e,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);mt(t,e,n)}function Qa(t,e,n){{const a=t.u;let o=0|a[we];if(er(o),n==null)yt(a,o,e);else{var i=t=0|n[we],r=Ei(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=hn(n),i=0,t=$i(t=wi(t,o),o,!0),s=!1),t|=21,r=0;r<n.length;r++){const c=n[r],l=Mp(c);Object.is(c,l)||(s&&(n=hn(n),i=0,t=$i(t=wi(t,o),o,!0),s=!1),n[r]=l)}t!==i&&(s&&(n=hn(n),t=$i(t=wi(t,o),o,!0)),Nt(n,t)),yt(a,o,e,n)}}}function Pp(t,e){return Error(`Invalid wire type: ${t} (at position ${e})`)}function Su(){return Error("Failed to read varint, encoding is invalid.")}function Lp(t,e){return Error(`Tried to read past the end of the data ${e} > ${t}`)}function Eu(t){if(typeof t=="string")return{buffer:op(t),O:!1};if(Array.isArray(t))return{buffer:new Uint8Array(t),O:!1};if(t.constructor===Uint8Array)return{buffer:t,O:!1};if(t.constructor===ArrayBuffer)return{buffer:new Uint8Array(t),O:!1};if(t.constructor===Ai)return{buffer:ru(t)||new Uint8Array(0),O:!0};if(t instanceof Uint8Array)return{buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),O:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function yu(t,e){let n,i=0,r=0,s=0;const a=t.h;let o=t.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);for(s>32&&(r|=(127&n)>>4),s=3;s<32&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(Mr(t,o),n<128)return e(i>>>0,r>>>0);throw Su()}function Tu(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return Mr(t,n),!!(127&e)}throw Su()}function Ji(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Su();return Mr(t,n),r}function Ui(t){return Ji(t)>>>0}function Il(t){var e=t.h;const n=t.g,i=e[n],r=e[n+1],s=e[n+2];return e=e[n+3],Mr(t,t.g+4),(i<<0|r<<8|s<<16|e<<24)>>>0}function Ul(t){var e=Il(t);t=2*(e>>31)+1;const n=e>>>23&255;return e&=8388607,n==255?e?NaN:t*(1/0):n==0?1401298464324817e-60*t*e:t*Math.pow(2,n-150)*(e+8388608)}function d3(t){return Ji(t)}function Tc(t,e,{aa:n=!1}={}){t.aa=n,e&&(e=Eu(e),t.h=e.buffer,t.m=e.O,t.j=0,t.l=t.h.length,t.g=t.j)}function Mr(t,e){if(t.g=e,e>t.l)throw Lp(t.l,e)}function Dp(t,e){if(e<0)throw Error(`Tried to read a negative byte length: ${e}`);const n=t.g,i=n+e;if(i>t.l)throw Lp(e,t.l-n);return t.g=i,n}function Ip(t,e){if(e==0)return yr();var n=Dp(t,e);return t.aa&&t.m?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):Zx?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?yr():new Ai(n,is)}li.prototype.toJSON=void 0;var Rf=[];function Up(t){var e=t.g;if(e.g==e.l)return!1;t.l=t.g.g;var n=Ui(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5))throw Pp(n,t.l);if(e<1)throw Error(`Invalid field number: ${e} (at position ${t.l})`);return t.m=e,t.h=n,!0}function Wa(t){switch(t.h){case 0:t.h!=0?Wa(t):Tu(t.g);break;case 1:Mr(t=t.g,t.g+8);break;case 2:if(t.h!=2)Wa(t);else{var e=Ui(t.g);Mr(t=t.g,t.g+e)}break;case 5:Mr(t=t.g,t.g+4);break;case 3:for(e=t.m;;){if(!Up(t))throw Error("Unmatched start-group tag: stream EOF");if(t.h==4){if(t.m!=e)throw Error("Unmatched end-group tag");break}Wa(t)}break;default:throw Pp(t.h,t.l)}}function sa(t,e,n){const i=t.g.l,r=Ui(t.g),s=t.g.g+r;let a=s-i;if(a<=0&&(t.g.l=s,n(e,t,void 0,void 0,void 0),a=s-t.g.g),a)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-a} bytes, either the data ended unexpectedly or the message misreported its own length`);return t.g.g=s,t.g.l=i,e}function bu(t){var e=Ui(t.g),n=Dp(t=t.g,e);if(t=t.h,Dx){var i,r=t;(i=_c)||(i=_c=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if(Da===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Da=!0}catch{Da=!1}}throw!Da&&(_c=void 0),o}}else{e=(s=n)+e,n=[];let o,c=null;for(;s<e;){var a=t[s++];a<128?n.push(a):a<224?s>=e?hr():(o=t[s++],a<194||(192&o)!=128?(s--,hr()):n.push((31&a)<<6|63&o)):a<240?s>=e-1?hr():(o=t[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[s++]))!=128?(s--,hr()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=e-2?hr():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,hr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):hr(),n.length>=8192&&(c=uf(c,n),n.length=0)}s=uf(c,n)}return s}function Fp(t){const e=Ui(t.g);return Ip(t.g,e)}function Eo(t,e,n){var i=Ui(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var Ia=[];function qn(t,e,n){e.g?e.m(t,e.g,e.h,n):e.m(t,e.h,n)}var ve=class{constructor(t,e){this.u=Tp(t,e)}toJSON(){try{var t=yp(this)}finally{Sp=void 0}return t}l(){var t=K3;return t.g?t.l(this,t.g,t.h):t.l(this,t.h,t.defaultValue)}clone(){const t=this.u;return new this.constructor(xo(t,0|t[we],!1))}O(){return!!(2&(0|this.u[we]))}};function Cf(t){return t?/^\d+$/.test(t)?(go(t),new Fl(ht,wt)):null:p3||=new Fl(0,0)}ve.prototype.W=ra,ve.prototype.toString=function(){return this.u.toString()};var Fl=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let p3;function Pf(t){return t?/^-?\d+$/.test(t)?(go(t),new Nl(ht,wt)):null:m3||=new Nl(0,0)}var Nl=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let m3;function jr(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Ss(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function yo(t,e){if(e>=0)Ss(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function Qs(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function cs(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function yn(t,e,n){Ss(t.g,8*e+n)}function Au(t,e){return yn(t,e,2),e=t.g.end(),cs(t,e),e.push(t.h),e}function wu(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function To(t,e,n){yn(t,e,2),Ss(t.g,n.length),cs(t,t.g.end()),cs(t,n)}function eo(t,e,n,i){n!=null&&(e=Au(t,e),i(n,t),wu(t,e))}function Yn(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var Ru=Yn(),Np=Yn(),Cu=Yn(),Pu=Yn(),Op=Yn(),Bp=Yn(),Lu=Yn(),kp=Yn(),zp=Yn(),Es=class{constructor(t,e,n){this.g=t,this.h=e,t=Ru,this.l=!!t&&n===t||!1}};function bo(t,e){return new Es(t,e,Ru)}function Gp(t,e,n,i,r){eo(t,n,Xp(e,i),r)}const g3=bo((function(t,e,n,i,r){return t.h===2&&(sa(t,Mu(e,i,n),r),!0)}),Gp),_3=bo((function(t,e,n,i,r){return t.h===2&&(sa(t,Mu(e,i,n),r),!0)}),Gp);var Ao=Symbol(),Du=Symbol(),Lf=Symbol(),Df=Symbol();let Vp,Hp;function br(t,e,n,i){var r=i[t];if(r)return r;(r={}).Ma=i,r.T=(function(h){switch(typeof h){case"boolean":return Ep||=[0,void 0,!0];case"number":return h>0?void 0:h===0?h3||=[0,void 0]:[-h,void 0];case"string":return[0,h];case"object":return h}})(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ga=s,typeof(s=i[++a])=="function"&&(r.la=!0,Vp??=s,Hp??=i[a+1],s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var c=0;c<s.length;c++)o[s[c]]=s;s=i[++a]}for(c=1;s!==void 0;){let h;typeof s=="number"&&(c+=s,s=i[++a]);var l=void 0;if(s instanceof Es?h=s:(h=g3,a--),h?.l){s=i[++a],l=i;var u=a;typeof s=="function"&&(s=s(),l[u]=s),l=s}for(u=c+1,typeof(s=i[++a])=="number"&&s<0&&(u-=s,s=i[++a]);c<u;c++){const d=o[c];l?n(r,c,h,l,d):e(r,c,h,d)}}return i[t]=r}function Wp(t){return Array.isArray(t)?t[0]instanceof Es?t:[_3,t]:[t,void 0]}function Xp(t,e){return t instanceof ve?t.u:Array.isArray(t)?Ki(t,e,!1):void 0}function Iu(t,e,n,i){const r=n.g;t[e]=i?(s,a,o)=>r(s,a,o,i):r}function Uu(t,e,n,i,r){const s=n.g;let a,o;t[e]=(c,l,u)=>s(c,l,u,o||=br(Du,Iu,Uu,i).T,a||=Fu(i),r)}function Fu(t){let e=t[Lf];if(e!=null)return e;const n=br(Du,Iu,Uu,t);return e=n.la?(i,r)=>Vp(i,r,n):(i,r)=>{const s=0|i[we];for(;Up(r)&&r.h!=4;){var a=r.m,o=n[a];if(o==null){var c=n.ga;c&&(c=c[a])&&(c=v3(c))!=null&&(o=n[a]=c)}o!=null&&o(r,i,a)||(a=(o=r).l,Wa(o),o.fa?o=void 0:(c=o.g.g-a,o.g.g=a,o=Ip(o.g,c)),a=i,o&&((c=a[rs])?c.push(o):a[rs]=[o]))}return 8192&s&&_s(i),!0},t[Lf]=e}function v3(t){const e=(t=Wp(t))[0].g;if(t=t[1]){const n=Fu(t),i=br(Du,Iu,Uu,t).T;return(r,s,a)=>e(r,s,a,i,n)}return e}function wo(t,e,n){t[e]=n.h}function Ro(t,e,n,i){let r,s;const a=n.h;t[e]=(o,c,l)=>a(o,c,l,s||=br(Ao,wo,Ro,i).T,r||=qp(i))}function qp(t){let e=t[Df];if(!e){const n=br(Ao,wo,Ro,t);e=(i,r)=>Yp(i,r,n),t[Df]=e}return e}function Yp(t,e,n){(function(i,r,s){const a=512&r?0:-1,o=i.length,c=o+((r=64&r?256&r:!!o&&fo(i[o-1]))?-1:0);for(let l=0;l<c;l++)s(l-a,i[l]);if(r){i=i[o-1];for(const l in i)!isNaN(l)&&s(+l,i[l])}})(t,0|t[we]|(n.T[1]?512:0),((i,r)=>{if(r!=null){var s=(function(a,o){var c=a[o];if(c)return c;if((c=a.ga)&&(c=c[o])){var l=(c=Wp(c))[0].h;if(c=c[1]){const u=qp(c),h=br(Ao,wo,Ro,c).T;c=a.la?Hp(h,u):(d,g,_)=>l(d,g,_,h,u)}else c=l;return a[o]=c}})(n,i);s&&s(e,r,i)}})),(t=cu(t))&&(function(i,r){cs(i,i.g.end());for(let s=0;s<r.length;s++)cs(i,ru(r[s])||new Uint8Array(0))})(e,t)}function ys(t,e){if(Array.isArray(e)){var n=0|e[we];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),Nt(e,-6145&(5|n)),2&n&&Object.freeze(e),e}}function nn(t,e,n){return new Es(t,e,n)}function Ts(t,e,n){return new Es(t,e,n)}function rn(t,e,n){yt(t,0|t[we],e,n)}var x3=bo((function(t,e,n,i,r){return t.h===2&&(t=sa(t,Ki([void 0,void 0],i,!0),r),er(i=0|e[we]),(r=Fi(e,i,n))instanceof li?(2&r.M)!=0?((r=r.da()).push(t),yt(e,i,n,r)):r.Ja(t):Array.isArray(r)?(2&(0|r[we])&&yt(e,i,n,r=Ap(r)),r.push(t)):yt(e,i,n,[t]),!0)}),(function(t,e,n,i,r){if(e instanceof li)e.forEach(((s,a)=>{eo(t,n,Ki([a,s],i,!1),r)}));else if(Array.isArray(e))for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&eo(t,n,Ki(a,i,!1),r)}}));function jp(t,e,n){if(e=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String($s(64,i));if(Zs(i)){if(r==="string")return xp(i);if(r==="number")return du(i)}})(e),e!=null&&(typeof e=="string"&&Pf(e),e!=null))switch(yn(t,n,0),typeof e){case"number":t=t.g,Tr(e),jr(t,ht,wt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Nl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),jr(t.g,n.h,n.g);break;default:n=Pf(e),jr(t.g,n.h,n.g)}}function Kp(t,e,n){(e=vs(e))!=null&&e!=null&&(yn(t,n,0),yo(t.g,e))}function $p(t,e,n){(e=mp(e))!=null&&(yn(t,n,0),t.g.g.push(e?1:0))}function Zp(t,e,n){(e=as(e))!=null&&To(t,n,np(e))}function Jp(t,e,n,i,r){eo(t,n,Xp(e,i),r)}function Qp(t,e,n){e==null||typeof e=="string"||e instanceof Ai||(Er(e)?Er(e)&&su(up):e=void 0),e!=null&&To(t,n,Eu(e).buffer)}function em(t,e,n){return(t.h===5||t.h===2)&&(e=Ms(e,0|e[we],n,!1),t.h==2?Eo(t,Ul,e):e.push(Ul(t.g)),!0)}var vi=nn((function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=Il(i);const r=Il(i);i=2*(r>>31)+1;const s=r>>>20&2047;return t=4294967296*(1048575&r)+t,rn(e,n,s==2047?t?NaN:i*(1/0):s==0?5e-324*i*t:i*Math.pow(2,s-1075)*(t+4503599627370496)),!0}),(function(t,e,n){(e=tr(e))!=null&&(yn(t,n,1),t=t.g,(n=dp||=new DataView(new ArrayBuffer(8))).setFloat64(0,+e,!0),ht=n.getUint32(0,!0),wt=n.getUint32(4,!0),Qs(t,ht),Qs(t,wt))}),Yn()),Ot=nn((function(t,e,n){return t.h===5&&(rn(e,n,Ul(t.g)),!0)}),(function(t,e,n){(e=tr(e))!=null&&(yn(t,n,5),t=t.g,lu(e),Qs(t,ht))}),Lu),M3=Ts(em,(function(t,e,n){if((e=ys(tr,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(yn(i,r,5),i=i.g,lu(s),Qs(i,ht))}}),Lu),Nu=Ts(em,(function(t,e,n){if((e=ys(tr,e))!=null&&e.length){yn(t,n,2),Ss(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,lu(e[i]),Qs(n,ht)}}),Lu),Qi=nn((function(t,e,n){return t.h===0&&(rn(e,n,yu(t.g,hu)),!0)}),jp,Bp),bc=nn((function(t,e,n){return t.h===0&&(rn(e,n,(t=yu(t.g,hu))===0?void 0:t),!0)}),jp,Bp),S3=nn((function(t,e,n){return t.h===0&&(rn(e,n,yu(t.g,uu)),!0)}),(function(t,e,n){if((e=t3(e))!=null&&(typeof e=="string"&&Cf(e),e!=null))switch(yn(t,n,0),typeof e){case"number":t=t.g,Tr(e),jr(t,ht,wt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Fl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),jr(t.g,n.h,n.g);break;default:n=Cf(e),jr(t.g,n.h,n.g)}}),Yn()),Rt=nn((function(t,e,n){return t.h===0&&(rn(e,n,Ji(t.g)),!0)}),Kp,Pu),Co=Ts((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ms(e,0|e[we],n,!1),t.h==2?Eo(t,Ji,e):e.push(Ji(t.g)),!0)}),(function(t,e,n){if((e=ys(vs,e))!=null&&e.length){n=Au(t,n);for(let i=0;i<e.length;i++)yo(t.g,e[i]);wu(t,n)}}),Pu),Xr=nn((function(t,e,n){return t.h===0&&(rn(e,n,(t=Ji(t.g))===0?void 0:t),!0)}),Kp,Pu),Mt=nn((function(t,e,n){return t.h===0&&(rn(e,n,Tu(t.g)),!0)}),$p,Np),Kr=nn((function(t,e,n){return t.h===0&&(rn(e,n,(t=Tu(t.g))===!1?void 0:t),!0)}),$p,Np),Kt=Ts((function(t,e,n){return t.h===2&&(t=bu(t),Ms(e,0|e[we],n,!1).push(t),!0)}),(function(t,e,n){if((e=ys(as,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&To(i,r,np(s))}}),Cu),Xi=nn((function(t,e,n){return t.h===2&&(rn(e,n,(t=bu(t))===""?void 0:t),!0)}),Zp,Cu),nt=nn((function(t,e,n){return t.h===2&&(rn(e,n,bu(t)),!0)}),Zp,Cu),kt=(function(t,e,n=Ru){return new Es(t,e,n)})((function(t,e,n,i,r){return t.h===2&&(i=Ki(void 0,i,!0),Ms(e,0|e[we],n,!0).push(i),sa(t,i,r),!0)}),(function(t,e,n,i,r){if(Array.isArray(e))for(let s=0;s<e.length;s++)Jp(t,e[s],n,i,r)})),tt=bo((function(t,e,n,i,r,s){return t.h===2&&(wp(e,0|e[we],s,n),sa(t,e=Mu(e,i,n),r),!0)}),Jp),tm=nn((function(t,e,n){return t.h===2&&(rn(e,n,Fp(t)),!0)}),Qp,kp),E3=Ts((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ms(e,0|e[we],n,!1),t.h==2?Eo(t,Ui,e):e.push(Ui(t.g)),!0)}),(function(t,e,n){if((e=ys(gp,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(yn(i,r,0),Ss(i.g,s))}}),Op),y3=nn((function(t,e,n){return t.h===0&&(rn(e,n,(t=Ui(t.g))===0?void 0:t),!0)}),(function(t,e,n){(e=gp(e))!=null&&e!=null&&(yn(t,n,0),Ss(t.g,e))}),Op),Sn=nn((function(t,e,n){return t.h===0&&(rn(e,n,Ji(t.g)),!0)}),(function(t,e,n){(e=vs(e))!=null&&(e=parseInt(e,10),yn(t,n,0),yo(t.g,e))}),zp);class T3{constructor(e,n){this.h=e,this.g=n,this.l=Ke,this.m=Re,this.defaultValue=void 0}register(){co(this)}}function jn(t,e){return new T3(t,e)}function nr(t,e){return(n,i)=>{if(Ia.length){const s=Ia.pop();s.o(i),Tc(s.g,n,i),n=s}else n=new class{constructor(s,a){if(Rf.length){const o=Rf.pop();Tc(o,s,a),s=o}else s=new class{constructor(o,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,Tc(this,o,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.aa=!1}}(s,a);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(a)}o({fa:s=!1}={}){this.fa=s}}(n,i);try{const s=new t,a=s.u;Fu(e)(a,n);var r=s}finally{n.g.clear(),n.m=-1,n.h=-1,Ia.length<100&&Ia.push(n)}return r}}function Po(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};Yp(this.u,e,br(Ao,wo,Ro,t)),cs(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return e.l=[n],n}}var If=class extends ve{constructor(t){super(t)}},Uf=[0,Xi,nn((function(t,e,n){return t.h===2&&(rn(e,n,(t=Fp(t))===yr()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof ve){const i=e.Oa;return void(i&&(e=i(e),e!=null&&To(t,n,Eu(e).buffer)))}if(Array.isArray(e))return}Qp(t,e,n)}),kp)];let Ac,Ff=globalThis.trustedTypes;function Nf(t){Ac===void 0&&(Ac=(function(){let n=null;if(!Ff)return n;try{const i=r=>r;n=Ff.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})());var e=Ac;return new class{constructor(n){this.g=n}toString(){return this.g+""}}(e?e.createScriptURL(t):t)}function b3(t,...e){if(e.length===0)return Nf(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return Nf(n)}var nm=[0,Rt,Sn,Mt,-1,Co,Sn,-1],A3=class extends ve{constructor(t){super(t)}},im=[0,Mt,nt,Mt,Sn,-1,Ts((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ms(e,0|e[we],n,!1),t.h==2?Eo(t,d3,e):e.push(Ji(t.g)),!0)}),(function(t,e,n){if((e=ys(vs,e))!=null&&e.length){n=Au(t,n);for(let i=0;i<e.length;i++)yo(t.g,e[i]);wu(t,n)}}),zp),nt,-1,[0,Mt,-1],Sn,Mt,-1],rm=[0,nt,-2],Of=class extends ve{constructor(t){super(t)}},sm=[0],am=[0,Rt,Mt,1,Mt,-3],En=class extends ve{constructor(t){super(t,2)}},Bt={};Bt[336783863]=[0,nt,Mt,-1,Rt,[0,[1,2,3,4,5,6,7,8,9],tt,sm,tt,im,tt,rm,tt,am,tt,nm,tt,[0,nt,-2],tt,[0,nt,Sn],tt,[0,Sn,nt,-1],tt,[0,Sn,-1]],[0,nt],Mt,[0,[1,3],[2,4],tt,[0,Co],-1,tt,[0,Kt],-1,kt,[0,nt,-1]],nt];var Bf=[0,bc,-1,Kr,-3,bc,Co,Xi,Xr,bc,-1,Kr,Xr,Kr,-2,Xi];function Tn(t,e){Dl(t,2,xs(e),"")}function gt(t,e){So(t,3,e)}function Xe(t,e){So(t,4,e)}var tn=class extends ve{constructor(t){super(t,500)}o(t){return Re(this,0,7,t)}},Gs=[-1,{}],kf=[0,nt,1,Gs],zf=[0,nt,Kt,Gs];function bn(t,e){Ja(t,1,tn,e)}function vt(t,e){So(t,10,e)}function Qe(t,e){So(t,15,e)}var dn=class extends ve{constructor(t){super(t,500)}o(t){return Re(this,0,1001,t)}},om=[-500,kt,[-500,Xi,-1,Kt,-3,[-2,Bt,Mt],kt,Uf,Xr,-1,kf,zf,kt,[0,Xi,Kr],Xi,Bf,Xr,Kt,987,Kt],4,kt,[-500,nt,-1,[-1,{}],998,nt],kt,[-500,nt,Kt,-1,[-2,{},Mt],997,Kt,-1],Xr,kt,[-500,nt,Kt,Gs,998,Kt],Kt,Xr,kf,zf,kt,[0,Xi,-1,Gs],Kt,-2,Bf,Xi,-1,Kr,[0,Kr,y3],978,Gs,kt,Uf];dn.prototype.g=Po(om);var w3=nr(dn,om),R3=class extends ve{constructor(t){super(t)}},cm=class extends ve{constructor(t){super(t)}g(){return Ii(this,R3,1)}},lm=[0,kt,[0,Rt,Ot,nt,-1]],Lo=nr(cm,lm),C3=class extends ve{constructor(t){super(t)}},P3=class extends ve{constructor(t){super(t)}},wc=class extends ve{constructor(t){super(t)}h(){return Ke(this,C3,2)}g(){return Ii(this,P3,5)}},um=nr(class extends ve{constructor(t){super(t)}},[0,Kt,Co,Nu,[0,Sn,[0,Rt,-3],[0,Ot,-3],[0,Rt,-1,[0,kt,[0,Rt,-2]]],kt,[0,Ot,-1,nt,Ot]],nt,-1,Qi,kt,[0,Rt,Ot],Kt,Qi]),hm=class extends ve{constructor(t){super(t)}},$r=nr(class extends ve{constructor(t){super(t)}},[0,kt,[0,Ot,-4]]),fm=class extends ve{constructor(t){super(t)}},aa=nr(class extends ve{constructor(t){super(t)}},[0,kt,[0,Ot,-4]]),L3=class extends ve{constructor(t){super(t)}},D3=[0,Rt,-1,Nu,Sn],dm=class extends ve{constructor(t){super(t)}};dm.prototype.g=Po([0,Ot,-4,Qi]);var I3=class extends ve{constructor(t){super(t)}},U3=nr(class extends ve{constructor(t){super(t)}},[0,kt,[0,1,Rt,nt,lm],Qi]),Gf=class extends ve{constructor(t){super(t)}},F3=class extends ve{constructor(t){super(t)}ma(){const t=bp(this);return t??yr()}},N3=class extends ve{constructor(t){super(t)}},pm=[1,2],O3=nr(class extends ve{constructor(t){super(t)}},[0,kt,[0,pm,tt,[0,Nu],tt,[0,tm],Rt,nt],Qi]),Ou=class extends ve{constructor(t){super(t)}},mm=[0,nt,Rt,Ot,Kt,-1],Vf=class extends ve{constructor(t){super(t)}},B3=[0,Mt,-1],Hf=class extends ve{constructor(t){super(t)}},Xa=[1,2,3,4,5],to=class extends ve{constructor(t){super(t)}g(){return bp(this)!=null}h(){return On(this,2)!=null}},St=class extends ve{constructor(t){super(t)}g(){return mp(os(this,2))??!1}},gm=[0,tm,nt,[0,Rt,Qi,-1],[0,S3,Qi]],Dt=[0,gm,Mt,[0,Xa,tt,am,tt,im,tt,nm,tt,sm,tt,rm],Sn],Do=class extends ve{constructor(t){super(t)}},Bu=[0,Dt,Ot,-1,Rt],k3=jn(502141897,Do);Bt[502141897]=Bu;var z3=nr(class extends ve{constructor(t){super(t)}},[0,[0,Sn,-1,M3,E3],D3]),_m=class extends ve{constructor(t){super(t)}},vm=class extends ve{constructor(t){super(t)}},ku=[0,Dt,Ot,[0,Dt],Mt],xm=[0,Dt,Bu,ku,Ot,[0,[0,gm]]],G3=jn(508968150,vm);Bt[508968150]=xm,Bt[508968149]=ku;var Mm=class extends ve{constructor(t){super(t)}},V3=jn(513916220,Mm);Bt[513916220]=[0,Dt,xm,Rt];var Vr=class extends ve{constructor(t){super(t)}h(){return Ke(this,Ou,2)}g(){mt(this,2)}},Sm=[0,Dt,mm];Bt[478825465]=Sm;var H3=class extends ve{constructor(t){super(t)}},Em=class extends ve{constructor(t){super(t)}},zu=class extends ve{constructor(t){super(t)}},Gu=class extends ve{constructor(t){super(t)}},ym=class extends ve{constructor(t){super(t)}},Wf=[0,Dt,[0,Dt],Sm,-1],Tm=[0,Dt,Ot,Rt],Vu=[0,Dt,Ot],bm=[0,Dt,Tm,Vu,Ot],W3=jn(479097054,ym);Bt[479097054]=[0,Dt,bm,Wf],Bt[463370452]=Wf,Bt[464864288]=Tm;var X3=jn(462713202,Gu);Bt[462713202]=bm,Bt[474472470]=Vu;var q3=class extends ve{constructor(t){super(t)}},Am=class extends ve{constructor(t){super(t)}},wm=class extends ve{constructor(t){super(t)}},Rm=class extends ve{constructor(t){super(t)}},Hu=[0,Dt,Ot,-1,Rt],Ol=[0,Dt,Ot,Mt];Rm.prototype.g=Po([0,Dt,Vu,[0,Dt],Bu,ku,Hu,Ol]);var Cm=class extends ve{constructor(t){super(t)}},Y3=jn(456383383,Cm);Bt[456383383]=[0,Dt,mm];var Pm=class extends ve{constructor(t){super(t)}},j3=jn(476348187,Pm);Bt[476348187]=[0,Dt,B3];var Lm=class extends ve{constructor(t){super(t)}},Xf=class extends ve{constructor(t){super(t)}},Dm=[0,Sn,-1],K3=jn(458105876,class extends ve{constructor(t){super(t)}g(){var t=this.u;const e=0|t[we],n=2&e;return t=(function(i,r,s){var a=Xf;const o=2&r;let c=!1;if(s==null){if(o)return wf();s=[]}else if(s.constructor===li){if((2&s.M)==0||o)return s;s=s.da()}else Array.isArray(s)?c=!!(2&(0|s[we])):s=[];if(o){if(!s.length)return wf();c||(c=!0,_s(s))}else c&&(c=!1,s=Ap(s));return c||(64&(0|s[we])?s[we]&=-33:32&r&&uo(s,32)),yt(i,r,2,a=new li(s,a,n3,void 0)),a})(t,e,Fi(t,e,2)),!n&&Xf&&(t.pa=!0),t}});Bt[458105876]=[0,Dm,x3,[!0,Qi,[0,nt,-1,Kt]]];var Wu=class extends ve{constructor(t){super(t)}},Im=jn(458105758,Wu);Bt[458105758]=[0,Dt,nt,Dm];var Um=class extends ve{constructor(t){super(t)}},$3=jn(443442058,Um);Bt[443442058]=[0,Dt,nt,Rt,Ot,Kt,-1,Mt,Ot],Bt[514774813]=Hu;var Fm=class extends ve{constructor(t){super(t)}},Z3=jn(516587230,Fm);function Bl(t,e){return e=e?e.clone():new Ou,t.displayNamesLocale!==void 0?mt(e,1,xs(t.displayNamesLocale)):t.displayNamesLocale===void 0&&mt(e,1),t.maxResults!==void 0?ui(e,2,t.maxResults):"maxResults"in t&&mt(e,2),t.scoreThreshold!==void 0?ye(e,3,t.scoreThreshold):"scoreThreshold"in t&&mt(e,3),t.categoryAllowlist!==void 0?Qa(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&mt(e,4),t.categoryDenylist!==void 0?Qa(e,5,t.categoryDenylist):"categoryDenylist"in t&&mt(e,5),e}function Xu(t,e=-1,n=""){return{categories:t.map((i=>({index:Fn(i,1)??0??-1,score:Ct(i,2)??0,categoryName:On(i,3)??""??"",displayName:On(i,4)??""??""}))),headIndex:e,headName:n}}function Nm(t){var e=xr(t,3,tr,vr()),n=xr(t,2,vs,vr()),i=xr(t,1,as,vr()),r=xr(t,9,as,vr());const s={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)s.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((e=Ke(t,wc,4)?.h())&&(s.boundingBox={originX:Fn(e,1)??0,originY:Fn(e,2)??0,width:Fn(e,3)??0,height:Fn(e,4)??0,angle:0}),Ke(t,wc,4)?.g().length)for(const a of Ke(t,wc,4).g())s.keypoints.push({x:Ha(a,1)??0,y:Ha(a,2)??0,score:Ha(a,4)??0,label:On(a,3)??""});return s}function Io(t){const e=[];for(const n of Ii(t,fm,1))e.push({x:Ct(n,1)??0,y:Ct(n,2)??0,z:Ct(n,3)??0,visibility:Ct(n,4)??0});return e}function Vs(t){const e=[];for(const n of Ii(t,hm,1))e.push({x:Ct(n,1)??0,y:Ct(n,2)??0,z:Ct(n,3)??0,visibility:Ct(n,4)??0});return e}function qf(t){return Array.from(t,(e=>e>127?e-256:e))}function Yf(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let Ua;Bt[516587230]=[0,Dt,Hu,Ol,Ot],Bt[518928384]=Ol;const J3=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Om(){if(Ua===void 0)try{await WebAssembly.instantiate(J3),Ua=!0}catch{Ua=!1}return Ua}async function Is(t,e=b3``){const n=await Om()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var dr=class{};function Bm(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function jf(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(e)}))}importScripts(t.toString())}function km(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Ae(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function Kf(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=km(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function $f(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function Jn(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function Vi(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}dr.forVisionTasks=function(t){return Is("vision",t)},dr.forTextTasks=function(t){return Is("text",t)},dr.forGenAiExperimentalTasks=function(t){return Is("genai_experimental",t)},dr.forGenAiTasks=function(t){return Is("genai",t)},dr.forAudioTasks=function(t){return Is("audio",t)},dr.isSimdSupported=function(){return Om()};async function Q3(t,e,n,i){return t=await(async(r,s,a,o,c)=>{if(s&&await jf(s),!self.ModuleFactory||a&&(await jf(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function Rc(t,e){const n=Ke(t.baseOptions,to,1)||new to;typeof e=="string"?(mt(n,2,xs(e)),mt(n,1)):e instanceof Uint8Array&&(mt(n,1,ou(e,!1)),mt(n,2)),Re(t.baseOptions,0,1,n)}function Zf(t){try{const e=t.G.length;if(e===1)throw Error(t.G[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.G.map((n=>n.message)).join(", "))}finally{t.G=[]}}function pe(t,e){t.B=Math.max(t.B,e)}function Uo(t,e){t.A=new tn,Tn(t.A,"PassThroughCalculator"),gt(t.A,"free_memory"),Xe(t.A,"free_memory_unused_out"),vt(e,"free_memory"),bn(e,t.A)}function ls(t,e){gt(t.A,e),Xe(t.A,e+"_unused_out")}function Fo(t){t.g.addBoolToStream(!0,"free_memory",t.B)}var kl=class{constructor(t){this.g=t,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){if(e){const n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(Ke(this.baseOptions,to,1)?.g()||Ke(this.baseOptions,to,1)?.h()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,r){let s=Ke(i.baseOptions,Hf,3);if(!s){var a=s=new Hf,o=new Of;zs(a,4,Xa,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new A3,zs(r,2,Xa,a)):(r=s,a=new Of,zs(r,4,Xa,a))),Re(i.baseOptions,0,3,s)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Rc(this,"/model.dat"),this.m(),this.J()}));if(n.modelAssetBuffer instanceof Uint8Array)Rc(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i})(n.modelAssetBuffer).then((i=>{Rc(this,i),this.m(),this.J()}))}return this.m(),this.J(),Promise.resolve()}J(){}ca(){let t;if(this.g.ca((e=>{t=w3(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.G.push(Error(i))})),this.g.Ha(),this.g.setGraph(t,e),this.A=void 0,Zf(this)}finishProcessing(){this.g.finishProcessing(),Zf(this)}close(){this.A=void 0,this.g.closeGraph()}};function Ri(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}kl.prototype.close=kl.prototype.close;class eM{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Jf(t,e,n){const i=t.g;if(n=Ri(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function Qf(t,e){const n=t.g,i=Ri(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=Ri(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.P),n.vertexAttribPointer(t.P,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=Ri(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.J),n.vertexAttribPointer(t.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new eM(n,i,r,s)}function qu(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function Yu(t,e,n,i){return qu(t,e),t.h||(t.m(),t.C()),n?(t.s||(t.s=Qf(t,!0)),n=t.s):(t.v||(t.v=Qf(t,!1)),n=t.v),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function No(t,e,n){return qu(t,e),t=Ri(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function Oo(t,e,n){qu(t,e),t.A||(t.A=Ri(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.A),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function ju(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var Ku=class{G(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=Ri(t.createProgram(),"Failed to create WebGL program"),this.Z=Jf(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.Y=Jf(this,this.G(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.P=t.getAttribLocation(this.h,"aVertex"),this.J=t.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.Z),t.deleteShader(this.Y)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}};function Mi(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function zl(t){var e=Mi(t,1);if(!e){if(e=Mi(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=us(t);var n=$u(t);if(Oo(n,i,zm(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function zm(t){let e=Mi(t,2);if(!e){const n=us(t);e=Vm(t);const i=zl(t),r=Gm(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),Gl(t)}return e}function us(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Ri(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function Gm(t){if(t=us(t),!Fa)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))Fa=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Fa=t.R16F}return Fa}function $u(t){return t.l||(t.l=new Ku),t.l}function Vm(t){const e=us(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Mi(t,2);return n||(n=No($u(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Gl(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var Fa,Wt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--ed===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Da(){return!!Mi(this,0)}ja(){return!!Mi(this,1)}R(){return!!Mi(this,2)}ia(){return(e=Mi(t=this,0))||(e=zl(t),e=new Uint8Array(e.map((n=>255*n))),t.g.push(e)),e;var t,e}ha(){return zl(this)}N(){return zm(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=us(this),r=$u(this);i.activeTexture(i.TEXTURE1),n=No(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=Gm(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Oo(r,i,n),Yu(r,i,!1,(()=>{Vm(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Gl(this)})),ju(r),Gl(this)}}t.push(n)}return new Wt(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&us(this).deleteTexture(Mi(this,2)),ed=-1}};Wt.prototype.close=Wt.prototype.close,Wt.prototype.clone=Wt.prototype.clone,Wt.prototype.getAsWebGLTexture=Wt.prototype.N,Wt.prototype.getAsFloat32Array=Wt.prototype.ha,Wt.prototype.getAsUint8Array=Wt.prototype.ia,Wt.prototype.hasWebGLTexture=Wt.prototype.R,Wt.prototype.hasFloat32Array=Wt.prototype.ja,Wt.prototype.hasUint8Array=Wt.prototype.Da;var ed=250;function ni(t,e){switch(e){case 0:return t.g.find((n=>n instanceof ImageData));case 1:return t.g.find((n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Hm(t){var e=ni(t,0);if(!e){e=hs(t);const n=Bo(t),i=new Uint8Array(t.width*t.height*4);Oo(n,e,qa(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),ju(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.g.push(e)}return e}function qa(t){let e=ni(t,2);if(!e){const n=hs(t);e=Ya(t);const i=ni(t,1)||Hm(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),Os(t)}return e}function hs(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Ri(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function Bo(t){return t.l||(t.l=new Ku),t.l}function Ya(t){const e=hs(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=ni(t,2);return n||(n=No(Bo(t),e),t.g.push(n),t.m=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Os(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function td(t){const e=hs(t);return Yu(Bo(t),e,!0,(()=>(function(n,i){const r=n.canvas;if(r.width===n.width&&r.height===n.height)return i();const s=r.width,a=r.height;return r.width=n.width,r.height=n.height,n=i(),r.width=s,r.height=a,n})(t,(()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))))}var Xt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.j=e,this.m=n,this.canvas=i,this.l=r,this.width=s,this.height=a,(this.j||this.m)&&--nd===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ca(){return!!ni(this,0)}ka(){return!!ni(this,1)}R(){return!!ni(this,2)}Aa(){return Hm(this)}za(){var t=ni(this,1);return t||(qa(this),Ya(this),t=td(this),Os(this),this.g.push(t),this.j=!0),t}N(){return qa(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=hs(this),r=Bo(this);i.activeTexture(i.TEXTURE1),n=No(r,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),Oo(r,i,n),Yu(r,i,!1,(()=>{Ya(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Os(this)})),ju(r),Os(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);qa(this),Ya(this),n=td(this),Os(this)}t.push(n)}return new Xt(t,this.ka(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&ni(this,1).close(),this.m&&hs(this).deleteTexture(ni(this,2)),nd=-1}};Xt.prototype.close=Xt.prototype.close,Xt.prototype.clone=Xt.prototype.clone,Xt.prototype.getAsWebGLTexture=Xt.prototype.N,Xt.prototype.getAsImageBitmap=Xt.prototype.za,Xt.prototype.getAsImageData=Xt.prototype.Aa,Xt.prototype.hasWebGLTexture=Xt.prototype.R,Xt.prototype.hasImageBitmap=Xt.prototype.ka,Xt.prototype.hasImageData=Xt.prototype.Ca;var nd=250;function Kn(...t){return t.map((([e,n])=>({start:e,end:n})))}const tM=(function(t){return class extends t{Ha(){this.i._registerModelResourcesGraphService()}}})((id=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:Bm()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Ae(this,i||"input_audio",(s=>{Ae(this,r=r||"audio_header",(a=>{this.i._configureAudio(s,a,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){Jn(this,"__graph_config__",(e=>{t(e)})),Ae(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Ae(this,i,(a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)}))}addGpuBufferToStream(t,e,n){Ae(this,e,(i=>{const[r,s]=Kf(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(t,e,n){Ae(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){Ae(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){Ae(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){Ae(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){Ae(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){Ae(this,e,(i=>{Ae(this,t,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(t,e,n){Ae(this,e,(i=>{$f(this,Object.keys(t),(r=>{$f(this,Object.values(t),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){Ae(this,n,(r=>{Ae(this,e,(s=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)}))}))}addEmptyPacketToStream(t,e){Ae(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){Ae(this,e,(i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(t,e,n){Ae(this,e,(i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(t,e,n){Ae(this,e,(i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(t,e,n){Ae(this,e,(i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(t,e,n){Ae(this,e,(i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(t,e,n){Ae(this,e,(i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)Ae(this,s,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(t,e){Ae(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){Ae(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){Ae(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){Ae(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){Ae(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){Ae(this,e,(n=>{Ae(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){Ae(this,n,(i=>{Ae(this,e,(r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(t,e){Ae(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){Ae(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){Ae(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){Ae(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){Ae(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){Ae(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)Ae(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){Jn(this,t,e),Ae(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){Vi(this,t,e),Ae(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){Jn(this,t,e),Ae(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){Vi(this,t,e),Ae(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){Jn(this,t,e),Ae(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){Vi(this,t,e),Ae(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){Jn(this,t,e),Ae(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){Vi(this,t,e),Ae(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){Jn(this,t,e),Ae(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){Vi(this,t,e),Ae(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){Jn(this,t,e),Ae(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){Vi(this,t,e),Ae(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){Jn(this,t,e),Ae(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){Vi(this,t,e),Ae(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Jn(this,t,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)})),Ae(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends id{get ea(){return this.i}oa(t,e,n){Ae(this,e,(i=>{const[r,s]=Kf(this,t,i);this.ea._addBoundTextureAsImageToStream(i,r,s,n)}))}V(t,e){Jn(this,t,e),Ae(this,t,(n=>{this.ea._attachImageListener(n)}))}ba(t,e){Vi(this,t,e),Ae(this,t,(n=>{this.ea._attachImageVectorListener(n)}))}}));var id,Bn=class extends tM{};async function We(t,e,n){return(async function(i,r,s,a){return Q3(i,r,s,a)})(t,n.canvas??(Bm()?void 0:document.createElement("canvas")),e,n)}function Wm(t,e,n,i){if(t.U){const s=new dm;if(n?.regionOfInterest){if(!t.na)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");ye(s,1,(r.left+r.right)/2),ye(s,2,(r.top+r.bottom)/2),ye(s,4,r.right-r.left),ye(s,3,r.bottom-r.top)}else ye(s,1,.5),ye(s,2,.5),ye(s,4,1),ye(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(ye(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[a,o]=km(e);n=Ct(s,3)*o/a,r=Ct(s,4)*a/o,ye(s,4,n),ye(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.oa(e,t.Z,i??performance.now()),t.finishProcessing()}function kn(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Wm(t,e,n,t.B+1)}function hi(t,e,n,i){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Wm(t,e,n,i)}function fs(t,e,n,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new Wt([r],n,!1,t.g.i.canvas,t.P,s,e),i?t.clone():t}var fn=class extends kl{constructor(t,e,n,i){super(t),this.g=t,this.Z=e,this.U=n,this.na=i,this.P=new Ku}l(t,e=!0){if("runningMode"in t&&Js(this.baseOptions,2,!!t.runningMode&&t.runningMode!=="IMAGE"),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};fn.prototype.close=fn.prototype.close;var Rn=class extends fn{constructor(t,e){super(new Bn(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Re(t=this.h=new Do,0,1,e=new St),ye(this.h,2,.5),ye(this.h,3,.3)}get baseOptions(){return Ke(this.h,St,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&ye(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&ye(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}D(t,e){return this.j={detections:[]},kn(this,t,e),this.j}F(t,e,n){return this.j={detections:[]},hi(this,t,n,e),this.j}m(){var t=new dn;vt(t,"image_in"),vt(t,"norm_rect_in"),Qe(t,"detections");const e=new En;qn(e,k3,this.h);const n=new tn;Tn(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect_in"),Xe(n,"DETECTIONS:detections"),n.o(e),bn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=um(s),this.j.detections.push(Nm(i));pe(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{pe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Rn.prototype.detectForVideo=Rn.prototype.F,Rn.prototype.detect=Rn.prototype.D,Rn.prototype.setOptions=Rn.prototype.o,Rn.createFromModelPath=async function(t,e){return We(Rn,t,{baseOptions:{modelAssetPath:e}})},Rn.createFromModelBuffer=function(t,e){return We(Rn,t,{baseOptions:{modelAssetBuffer:e}})},Rn.createFromOptions=function(t,e){return We(Rn,t,e)};var Zu=Kn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Ju=Kn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Qu=Kn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Xm=Kn([474,475],[475,476],[476,477],[477,474]),eh=Kn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),th=Kn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),qm=Kn([469,470],[470,471],[471,472],[472,469]),nh=Kn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Ym=[...Zu,...Ju,...Qu,...eh,...th,...nh],jm=Kn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function rd(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var At=class extends fn{constructor(t,e){super(new Bn(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Re(t=this.h=new vm,0,1,e=new St),this.v=new _m,Re(this.h,0,3,this.v),this.s=new Do,Re(this.h,0,2,this.s),ui(this.s,4,1),ye(this.s,2,.5),ye(this.v,2,.5),ye(this.h,4,.5)}get baseOptions(){return Ke(this.h,St,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"numFaces"in t&&ui(this.s,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&ye(this.s,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&ye(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&ye(this.v,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}D(t,e){return rd(this),kn(this,t,e),this.j}F(t,e,n){return rd(this),hi(this,t,n,e),this.j}m(){var t=new dn;vt(t,"image_in"),vt(t,"norm_rect"),Qe(t,"face_landmarks");const e=new En;qn(e,G3,this.h);const n=new tn;Tn(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),Xe(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),bn(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=aa(s),this.j.faceLandmarks.push(Io(i));pe(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{pe(this,i)})),this.outputFaceBlendshapes&&(Qe(t,"blendshapes"),Xe(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Lo(s),this.j.faceBlendshapes.push(Xu(i.g()??[]));pe(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{pe(this,i)}))),this.outputFacialTransformationMatrixes&&(Qe(t,"face_geometry"),Xe(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=Ke(z3(s),L3,2))&&this.j.facialTransformationMatrixes.push({rows:Fn(i,1)??0??0,columns:Fn(i,2)??0??0,data:xr(i,3,tr,vr()).slice()??[]});pe(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{pe(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};At.prototype.detectForVideo=At.prototype.F,At.prototype.detect=At.prototype.D,At.prototype.setOptions=At.prototype.o,At.createFromModelPath=function(t,e){return We(At,t,{baseOptions:{modelAssetPath:e}})},At.createFromModelBuffer=function(t,e){return We(At,t,{baseOptions:{modelAssetBuffer:e}})},At.createFromOptions=function(t,e){return We(At,t,e)},At.FACE_LANDMARKS_LIPS=Zu,At.FACE_LANDMARKS_LEFT_EYE=Ju,At.FACE_LANDMARKS_LEFT_EYEBROW=Qu,At.FACE_LANDMARKS_LEFT_IRIS=Xm,At.FACE_LANDMARKS_RIGHT_EYE=eh,At.FACE_LANDMARKS_RIGHT_EYEBROW=th,At.FACE_LANDMARKS_RIGHT_IRIS=qm,At.FACE_LANDMARKS_FACE_OVAL=nh,At.FACE_LANDMARKS_CONTOURS=Ym,At.FACE_LANDMARKS_TESSELATION=jm;var Qn=class extends fn{constructor(t,e){super(new Bn(t,e),"image_in","norm_rect",!0),Re(t=this.j=new Mm,0,1,e=new St)}get baseOptions(){return Ke(this.j,St,1)}set baseOptions(t){Re(this.j,0,1,t)}o(t){return super.l(t)}Ka(t,e,n){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:n,kn(this,t,i??{}),!this.h)return this.s}m(){var t=new dn;vt(t,"image_in"),vt(t,"norm_rect"),Qe(t,"stylized_image");const e=new En;qn(e,V3,this.j);const n=new tn;Tn(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),Xe(n,"STYLIZED_IMAGE:stylized_image"),n.o(e),bn(t,n),this.g.V("stylized_image",((i,r)=>{var s=!this.h,a=i.data,o=i.width;const c=o*(i=i.height);if(a instanceof Uint8Array)if(a.length===3*c){const l=new Uint8ClampedArray(4*c);for(let u=0;u<c;++u)l[4*u]=a[3*u],l[4*u+1]=a[3*u+1],l[4*u+2]=a[3*u+2],l[4*u+3]=255;a=new ImageData(l,o,i)}else{if(a.length!==4*c)throw Error("Unsupported channel count: "+a.length/c);a=new ImageData(new Uint8ClampedArray(a.buffer,a.byteOffset,a.length),o,i)}else if(!(a instanceof WebGLTexture))throw Error(`Unsupported format: ${a.constructor.name}`);o=new Xt([a],!1,!1,this.g.i.canvas,this.P,o,i),this.s=s=s?o.clone():o,this.h&&this.h(s),pe(this,r)})),this.g.attachEmptyPacketListener("stylized_image",(i=>{this.s=null,this.h&&this.h(null),pe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Qn.prototype.stylize=Qn.prototype.Ka,Qn.prototype.setOptions=Qn.prototype.o,Qn.createFromModelPath=function(t,e){return We(Qn,t,{baseOptions:{modelAssetPath:e}})},Qn.createFromModelBuffer=function(t,e){return We(Qn,t,{baseOptions:{modelAssetBuffer:e}})},Qn.createFromOptions=function(t,e){return We(Qn,t,e)};var ih=Kn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function sd(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function ad(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function od(t,e=!0){const n=[];for(const r of t){var i=Lo(r);t=[];for(const s of i.g())i=e&&Fn(s,1)!=null?Fn(s,1)??0:-1,t.push({score:Ct(s,2)??0,index:i,categoryName:On(s,3)??""??"",displayName:On(s,4)??""??""});n.push(t)}return n}var vn=class extends fn{constructor(t,e){super(new Bn(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Re(t=this.j=new ym,0,1,e=new St),this.s=new Gu,Re(this.j,0,2,this.s),this.C=new zu,Re(this.s,0,3,this.C),this.v=new Em,Re(this.s,0,2,this.v),this.h=new H3,Re(this.j,0,3,this.h),ye(this.v,2,.5),ye(this.s,4,.5),ye(this.C,2,.5)}get baseOptions(){return Ke(this.j,St,1)}set baseOptions(t){Re(this.j,0,1,t)}o(t){if(ui(this.v,3,t.numHands??1),"minHandDetectionConfidence"in t&&ye(this.v,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&ye(this.s,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&ye(this.C,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Vr,n=e,i=Bl(t.cannedGesturesClassifierOptions,Ke(this.h,Vr,3)?.h());Re(n,0,2,i),Re(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&Ke(this.h,Vr,3)?.g();return t.customGesturesClassifierOptions?(Re(n=e=new Vr,0,2,i=Bl(t.customGesturesClassifierOptions,Ke(this.h,Vr,4)?.h())),Re(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&Ke(this.h,Vr,4)?.g(),this.l(t)}Fa(t,e){return sd(this),kn(this,t,e),ad(this)}Ga(t,e,n){return sd(this),hi(this,t,n,e),ad(this)}m(){var t=new dn;vt(t,"image_in"),vt(t,"norm_rect"),Qe(t,"hand_gestures"),Qe(t,"hand_landmarks"),Qe(t,"world_hand_landmarks"),Qe(t,"handedness");const e=new En;qn(e,W3,this.j);const n=new tn;Tn(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),Xe(n,"HAND_GESTURES:hand_gestures"),Xe(n,"LANDMARKS:hand_landmarks"),Xe(n,"WORLD_LANDMARKS:world_hand_landmarks"),Xe(n,"HANDEDNESS:handedness"),n.o(e),bn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=aa(s);const a=[];for(const o of Ii(i,fm,1))a.push({x:Ct(o,1)??0,y:Ct(o,2)??0,z:Ct(o,3)??0,visibility:Ct(o,4)??0});this.landmarks.push(a)}pe(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{pe(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=$r(s);const a=[];for(const o of Ii(i,hm,1))a.push({x:Ct(o,1)??0,y:Ct(o,2)??0,z:Ct(o,3)??0,visibility:Ct(o,4)??0});this.worldLandmarks.push(a)}pe(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{pe(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...od(i,!1)),pe(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{pe(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...od(i)),pe(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{pe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function cd(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}vn.prototype.recognizeForVideo=vn.prototype.Ga,vn.prototype.recognize=vn.prototype.Fa,vn.prototype.setOptions=vn.prototype.o,vn.createFromModelPath=function(t,e){return We(vn,t,{baseOptions:{modelAssetPath:e}})},vn.createFromModelBuffer=function(t,e){return We(vn,t,{baseOptions:{modelAssetBuffer:e}})},vn.createFromOptions=function(t,e){return We(vn,t,e)},vn.HAND_CONNECTIONS=ih;var cn=class extends fn{constructor(t,e){super(new Bn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Re(t=this.h=new Gu,0,1,e=new St),this.s=new zu,Re(this.h,0,3,this.s),this.j=new Em,Re(this.h,0,2,this.j),ui(this.j,3,1),ye(this.j,2,.5),ye(this.s,2,.5),ye(this.h,4,.5)}get baseOptions(){return Ke(this.h,St,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"numHands"in t&&ui(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&ye(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&ye(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&ye(this.s,2,t.minHandPresenceConfidence??.5),this.l(t)}D(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],kn(this,t,e),cd(this)}F(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],hi(this,t,n,e),cd(this)}m(){var t=new dn;vt(t,"image_in"),vt(t,"norm_rect"),Qe(t,"hand_landmarks"),Qe(t,"world_hand_landmarks"),Qe(t,"handedness");const e=new En;qn(e,X3,this.h);const n=new tn;Tn(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),Xe(n,"LANDMARKS:hand_landmarks"),Xe(n,"WORLD_LANDMARKS:world_hand_landmarks"),Xe(n,"HANDEDNESS:handedness"),n.o(e),bn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=aa(s),this.landmarks.push(Io(i));pe(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{pe(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=$r(s),this.worldLandmarks.push(Vs(i));pe(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{pe(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const c of i){i=Lo(c);const l=[];for(const u of i.g())l.push({score:Ct(u,2)??0,index:Fn(u,1)??0??-1,categoryName:On(u,3)??""??"",displayName:On(u,4)??""??""});o.push(l)}a.call(s,...o),pe(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{pe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};cn.prototype.detectForVideo=cn.prototype.F,cn.prototype.detect=cn.prototype.D,cn.prototype.setOptions=cn.prototype.o,cn.createFromModelPath=function(t,e){return We(cn,t,{baseOptions:{modelAssetPath:e}})},cn.createFromModelBuffer=function(t,e){return We(cn,t,{baseOptions:{modelAssetBuffer:e}})},cn.createFromOptions=function(t,e){return We(cn,t,e)},cn.HAND_CONNECTIONS=ih;var Km=Kn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function ld(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function ud(t){try{if(!t.C)return t.h;t.C(t.h)}finally{Fo(t)}}function Na(t,e){t=aa(t),e.push(Io(t))}var xt=class extends fn{constructor(t,e){super(new Bn(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Re(t=this.j=new Rm,0,1,e=new St),this.K=new zu,Re(this.j,0,2,this.K),this.Y=new q3,Re(this.j,0,3,this.Y),this.s=new Do,Re(this.j,0,4,this.s),this.H=new _m,Re(this.j,0,5,this.H),this.v=new Am,Re(this.j,0,6,this.v),this.L=new wm,Re(this.j,0,7,this.L),ye(this.s,2,.5),ye(this.s,3,.3),ye(this.H,2,.5),ye(this.v,2,.5),ye(this.v,3,.3),ye(this.L,2,.5),ye(this.K,2,.5)}get baseOptions(){return Ke(this.j,St,1)}set baseOptions(t){Re(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&ye(this.s,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&ye(this.s,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&ye(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&ye(this.v,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&ye(this.v,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&ye(this.L,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&ye(this.K,2,t.minHandLandmarksConfidence??.5),this.l(t)}D(t,e,n){const i=typeof e!="function"?e:{};return this.C=typeof e=="function"?e:n,ld(this),kn(this,t,i),ud(this)}F(t,e,n,i){const r=typeof n!="function"?n:{};return this.C=typeof n=="function"?n:i,ld(this),hi(this,t,r,e),ud(this)}m(){var t=new dn;vt(t,"input_frames_image"),Qe(t,"pose_landmarks"),Qe(t,"pose_world_landmarks"),Qe(t,"face_landmarks"),Qe(t,"left_hand_landmarks"),Qe(t,"left_hand_world_landmarks"),Qe(t,"right_hand_landmarks"),Qe(t,"right_hand_world_landmarks");const e=new En,n=new If;Dl(n,1,xs("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),(function(r,s){if(s!=null)if(Array.isArray(s))mt(r,2,vo(s,mu,void 0,void 0,!1));else{if(!(typeof s=="string"||s instanceof Ai||Er(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Dl(r,2,ou(s,!1),yr())}})(n,this.j.g());const i=new tn;Tn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Ja(i,8,If,n),gt(i,"IMAGE:input_frames_image"),Xe(i,"POSE_LANDMARKS:pose_landmarks"),Xe(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Xe(i,"FACE_LANDMARKS:face_landmarks"),Xe(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Xe(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Xe(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Xe(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),bn(t,i),Uo(this,t),this.g.attachProtoListener("pose_landmarks",((r,s)=>{Na(r,this.h.poseLandmarks),pe(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{pe(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var a=this.h.poseWorldLandmarks;r=$r(r),a.push(Vs(r)),pe(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{pe(this,r)})),this.outputPoseSegmentationMasks&&(Xe(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),ls(this,"pose_segmentation_mask"),this.g.V("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[fs(this,r,!0,!this.C)],pe(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],pe(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{Na(r,this.h.faceLandmarks),pe(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{pe(this,r)})),this.outputFaceBlendshapes&&(Qe(t,"extra_blendshapes"),Xe(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Lo(r),a.push(Xu(r.g()??[]))),pe(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{pe(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{Na(r,this.h.leftHandLandmarks),pe(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{pe(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var a=this.h.leftHandWorldLandmarks;r=$r(r),a.push(Vs(r)),pe(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{pe(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{Na(r,this.h.rightHandLandmarks),pe(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{pe(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var a=this.h.rightHandWorldLandmarks;r=$r(r),a.push(Vs(r)),pe(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{pe(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};xt.prototype.detectForVideo=xt.prototype.F,xt.prototype.detect=xt.prototype.D,xt.prototype.setOptions=xt.prototype.o,xt.createFromModelPath=function(t,e){return We(xt,t,{baseOptions:{modelAssetPath:e}})},xt.createFromModelBuffer=function(t,e){return We(xt,t,{baseOptions:{modelAssetBuffer:e}})},xt.createFromOptions=function(t,e){return We(xt,t,e)},xt.HAND_CONNECTIONS=ih,xt.POSE_CONNECTIONS=Km,xt.FACE_LANDMARKS_LIPS=Zu,xt.FACE_LANDMARKS_LEFT_EYE=Ju,xt.FACE_LANDMARKS_LEFT_EYEBROW=Qu,xt.FACE_LANDMARKS_LEFT_IRIS=Xm,xt.FACE_LANDMARKS_RIGHT_EYE=eh,xt.FACE_LANDMARKS_RIGHT_EYEBROW=th,xt.FACE_LANDMARKS_RIGHT_IRIS=qm,xt.FACE_LANDMARKS_FACE_OVAL=nh,xt.FACE_LANDMARKS_CONTOURS=Ym,xt.FACE_LANDMARKS_TESSELATION=jm;var Cn=class extends fn{constructor(t,e){super(new Bn(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Re(t=this.h=new Cm,0,1,e=new St)}get baseOptions(){return Ke(this.h,St,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return Re(this.h,0,2,Bl(t,Ke(this.h,Ou,2))),this.l(t)}qa(t,e){return this.j={classifications:[]},kn(this,t,e),this.j}ra(t,e,n){return this.j={classifications:[]},hi(this,t,n,e),this.j}m(){var t=new dn;vt(t,"input_image"),vt(t,"norm_rect"),Qe(t,"classifications");const e=new En;qn(e,Y3,this.h);const n=new tn;Tn(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),gt(n,"IMAGE:input_image"),gt(n,"NORM_RECT:norm_rect"),Xe(n,"CLASSIFICATIONS:classifications"),n.o(e),bn(t,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=(function(s){const a={classifications:Ii(s,I3,1).map((o=>Xu(Ke(o,cm,4)?.g()??[],Fn(o,2)??0,On(o,3)??"")))};return Cl(os(s,2))!=null&&(a.timestampMs=Cl(os(s,2))??0),a})(U3(i)),pe(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{pe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Cn.prototype.classifyForVideo=Cn.prototype.ra,Cn.prototype.classify=Cn.prototype.qa,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(t,e){return We(Cn,t,{baseOptions:{modelAssetPath:e}})},Cn.createFromModelBuffer=function(t,e){return We(Cn,t,{baseOptions:{modelAssetBuffer:e}})},Cn.createFromOptions=function(t,e){return We(Cn,t,e)};var xn=class extends fn{constructor(t,e){super(new Bn(t,e),"image_in","norm_rect",!0),this.h=new Pm,this.embeddings={embeddings:[]},Re(t=this.h,0,1,e=new St)}get baseOptions(){return Ke(this.h,St,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){var e=this.h,n=Ke(this.h,Vf,2);return n=n?n.clone():new Vf,t.l2Normalize!==void 0?Js(n,1,t.l2Normalize):"l2Normalize"in t&&mt(n,1),t.quantize!==void 0?Js(n,2,t.quantize):"quantize"in t&&mt(n,2),Re(e,0,2,n),this.l(t)}xa(t,e){return kn(this,t,e),this.embeddings}ya(t,e,n){return hi(this,t,n,e),this.embeddings}m(){var t=new dn;vt(t,"image_in"),vt(t,"norm_rect"),Qe(t,"embeddings_out");const e=new En;qn(e,j3,this.h);const n=new tn;Tn(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),Xe(n,"EMBEDDINGS:embeddings_out"),n.o(e),bn(t,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=O3(i),this.embeddings=(function(s){return{embeddings:Ii(s,N3,1).map((a=>{const o={headIndex:Fn(a,3)??0??-1,headName:On(a,4)??""??""};if(Rp(a,Gf,yc(a,1))!==void 0)a=xr(a=Ke(a,Gf,yc(a,1)),1,tr,vr()),o.floatEmbedding=a.slice();else{const c=new Uint8Array(0);o.quantizedEmbedding=Ke(a,F3,yc(a,2))?.ma()?.h()??c}return o})),timestampMs:Cl(os(s,2))??0}})(i),pe(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{pe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};xn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Yf(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Yf(qf(t.quantizedEmbedding),qf(e.quantizedEmbedding))}return t},xn.prototype.embedForVideo=xn.prototype.ya,xn.prototype.embed=xn.prototype.xa,xn.prototype.setOptions=xn.prototype.o,xn.createFromModelPath=function(t,e){return We(xn,t,{baseOptions:{modelAssetPath:e}})},xn.createFromModelBuffer=function(t,e){return We(xn,t,{baseOptions:{modelAssetBuffer:e}})},xn.createFromOptions=function(t,e){return We(xn,t,e)};var Vl=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};function hd(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function fd(t){try{const e=new Vl(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{Fo(t)}}Vl.prototype.close=Vl.prototype.close;var on=class extends fn{constructor(t,e){super(new Bn(t,e),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Wu,this.v=new Lm,Re(this.h,0,3,this.v),Re(t=this.h,0,1,e=new St)}get baseOptions(){return Ke(this.h,St,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?mt(this.h,2,xs(t.displayNamesLocale)):"displayNamesLocale"in t&&mt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}J(){(function(t){const e=Ii(t.ca(),tn,1).filter((n=>(On(n,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.s=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(Ke(e[0],En,7)?.l()?.g()??new Map).forEach(((n,i)=>{t.s[Number(i)]=On(n,1)??""}))})(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,hd(this),kn(this,t,i),fd(this)}Ia(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,hd(this),hi(this,t,r,e),fd(this)}Ba(){return this.s}m(){var t=new dn;vt(t,"image_in"),vt(t,"norm_rect");const e=new En;qn(e,Im,this.h);const n=new tn;Tn(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),n.o(e),bn(t,n),Uo(this,t),this.outputConfidenceMasks&&(Qe(t,"confidence_masks"),Xe(n,"CONFIDENCE_MASKS:confidence_masks"),ls(this,"confidence_masks"),this.g.ba("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>fs(this,s,!0,!this.j))),pe(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],pe(this,i)}))),this.outputCategoryMask&&(Qe(t,"category_mask"),Xe(n,"CATEGORY_MASK:category_mask"),ls(this,"category_mask"),this.g.V("category_mask",((i,r)=>{this.categoryMask=fs(this,i,!1,!this.j),pe(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,pe(this,i)}))),Qe(t,"quality_scores"),Xe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,pe(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,pe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};on.prototype.getLabels=on.prototype.Ba,on.prototype.segmentForVideo=on.prototype.Ia,on.prototype.segment=on.prototype.segment,on.prototype.setOptions=on.prototype.o,on.createFromModelPath=function(t,e){return We(on,t,{baseOptions:{modelAssetPath:e}})},on.createFromModelBuffer=function(t,e){return We(on,t,{baseOptions:{modelAssetBuffer:e}})},on.createFromOptions=function(t,e){return We(on,t,e)};var Hl=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};Hl.prototype.close=Hl.prototype.close;var nM=class extends ve{constructor(t){super(t)}},Hr=[0,Rt,-2],no=[0,vi,-3,Mt,vi,-1],dd=[0,no],pd=[0,no,Rt,-1],Cc=class extends ve{constructor(t){super(t)}},md=[0,vi,-1,Mt],iM=class extends ve{constructor(t){super(t)}},gd=class extends ve{constructor(t){super(t)}},Wl=[1,2,3,4,5,6,7,8,9,10,14,15],$m=class extends ve{constructor(t){super(t)}};$m.prototype.g=Po([0,kt,[0,Wl,tt,no,tt,[0,no,Hr],tt,dd,tt,[0,dd,Hr],tt,md,tt,[0,vi,-3,Mt,Sn],tt,[0,vi,-3,Mt],tt,[0,nt,vi,-2,Mt,Rt,Mt,-1,2,vi,Hr],tt,pd,tt,[0,pd,Hr],vi,Hr,nt,tt,[0,vi,-3,Mt,Hr,-1],tt,[0,kt,md]],nt,[0,nt,Rt,-1,Mt]]);var ei=class extends fn{constructor(t,e){super(new Bn(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Wu,this.s=new Lm,Re(this.h,0,3,this.s),Re(t=this.h,0,1,e=new St)}get baseOptions(){return Ke(this.h,St,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,i=new $m;const s=new gd;var a=new nM;if(ui(a,1,255),Re(s,0,12,a),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var o=new Cc;Js(o,3,!0),ye(o,1,e.keypoint.x),ye(o,2,e.keypoint.y),zs(s,5,Wl,o)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(o of(a=new iM,e.scribble))Js(e=new Cc,3,!0),ye(e,1,o.x),ye(e,2,o.y),Ja(a,1,Cc,e);zs(s,15,Wl,a)}Ja(i,1,gd,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),kn(this,t,r);e:{try{const l=new Hl(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break e}this.j(l)}finally{Fo(this)}c=void 0}return c}m(){var t=new dn;vt(t,"image_in"),vt(t,"roi_in"),vt(t,"norm_rect_in");const e=new En;qn(e,Im,this.h);const n=new tn;Tn(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),gt(n,"IMAGE:image_in"),gt(n,"ROI:roi_in"),gt(n,"NORM_RECT:norm_rect_in"),n.o(e),bn(t,n),Uo(this,t),this.outputConfidenceMasks&&(Qe(t,"confidence_masks"),Xe(n,"CONFIDENCE_MASKS:confidence_masks"),ls(this,"confidence_masks"),this.g.ba("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>fs(this,s,!0,!this.j))),pe(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],pe(this,i)}))),this.outputCategoryMask&&(Qe(t,"category_mask"),Xe(n,"CATEGORY_MASK:category_mask"),ls(this,"category_mask"),this.g.V("category_mask",((i,r)=>{this.categoryMask=fs(this,i,!1,!this.j),pe(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,pe(this,i)}))),Qe(t,"quality_scores"),Xe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,pe(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,pe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ei.prototype.segment=ei.prototype.segment,ei.prototype.setOptions=ei.prototype.o,ei.createFromModelPath=function(t,e){return We(ei,t,{baseOptions:{modelAssetPath:e}})},ei.createFromModelBuffer=function(t,e){return We(ei,t,{baseOptions:{modelAssetBuffer:e}})},ei.createFromOptions=function(t,e){return We(ei,t,e)};var Pn=class extends fn{constructor(t,e){super(new Bn(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Re(t=this.h=new Um,0,1,e=new St)}get baseOptions(){return Ke(this.h,St,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?mt(this.h,2,xs(t.displayNamesLocale)):"displayNamesLocale"in t&&mt(this.h,2),t.maxResults!==void 0?ui(this.h,3,t.maxResults):"maxResults"in t&&mt(this.h,3),t.scoreThreshold!==void 0?ye(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&mt(this.h,4),t.categoryAllowlist!==void 0?Qa(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&mt(this.h,5),t.categoryDenylist!==void 0?Qa(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&mt(this.h,6),this.l(t)}D(t,e){return this.j={detections:[]},kn(this,t,e),this.j}F(t,e,n){return this.j={detections:[]},hi(this,t,n,e),this.j}m(){var t=new dn;vt(t,"input_frame_gpu"),vt(t,"norm_rect"),Qe(t,"detections");const e=new En;qn(e,$3,this.h);const n=new tn;Tn(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),gt(n,"IMAGE:input_frame_gpu"),gt(n,"NORM_RECT:norm_rect"),Xe(n,"DETECTIONS:detections"),n.o(e),bn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=um(s),this.j.detections.push(Nm(i));pe(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{pe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Pn.prototype.detectForVideo=Pn.prototype.F,Pn.prototype.detect=Pn.prototype.D,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=async function(t,e){return We(Pn,t,{baseOptions:{modelAssetPath:e}})},Pn.createFromModelBuffer=function(t,e){return We(Pn,t,{baseOptions:{modelAssetBuffer:e}})},Pn.createFromOptions=function(t,e){return We(Pn,t,e)};var Xl=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((t=>{t.close()}))}};function _d(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function vd(t){try{const e=new Xl(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.s)return e;t.s(e)}finally{Fo(t)}}Xl.prototype.close=Xl.prototype.close;var Mn=class extends fn{constructor(t,e){super(new Bn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Re(t=this.h=new Fm,0,1,e=new St),this.v=new wm,Re(this.h,0,3,this.v),this.j=new Am,Re(this.h,0,2,this.j),ui(this.j,4,1),ye(this.j,2,.5),ye(this.v,2,.5),ye(this.h,4,.5)}get baseOptions(){return Ke(this.h,St,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"numPoses"in t&&ui(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&ye(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&ye(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&ye(this.v,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}D(t,e,n){const i=typeof e!="function"?e:{};return this.s=typeof e=="function"?e:n,_d(this),kn(this,t,i),vd(this)}F(t,e,n,i){const r=typeof n!="function"?n:{};return this.s=typeof n=="function"?n:i,_d(this),hi(this,t,r,e),vd(this)}m(){var t=new dn;vt(t,"image_in"),vt(t,"norm_rect"),Qe(t,"normalized_landmarks"),Qe(t,"world_landmarks"),Qe(t,"segmentation_masks");const e=new En;qn(e,Z3,this.h);const n=new tn;Tn(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),Xe(n,"NORM_LANDMARKS:normalized_landmarks"),Xe(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),bn(t,n),Uo(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=aa(s),this.landmarks.push(Io(i));pe(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],pe(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=$r(s),this.worldLandmarks.push(Vs(i));pe(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],pe(this,i)})),this.outputSegmentationMasks&&(Xe(n,"SEGMENTATION_MASK:segmentation_masks"),ls(this,"segmentation_masks"),this.g.ba("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>fs(this,s,!0,!this.s))),pe(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],pe(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Mn.prototype.detectForVideo=Mn.prototype.F,Mn.prototype.detect=Mn.prototype.D,Mn.prototype.setOptions=Mn.prototype.o,Mn.createFromModelPath=function(t,e){return We(Mn,t,{baseOptions:{modelAssetPath:e}})},Mn.createFromModelBuffer=function(t,e){return We(Mn,t,{baseOptions:{modelAssetBuffer:e}})},Mn.createFromOptions=function(t,e){return We(Mn,t,e)},Mn.POSE_CONNECTIONS=Km;class rM{handLandmarker;video;lastVideoTime=-1;isLoaded=!1;isHandDetected=!1;handPosition={x:0,y:0};hands=[];isHandOpen=!1;isPointing=!1;isOkSign=!1;isDoubleOpen=!1;isDomainExpansion=!1;indexFingerPosition={x:0,y:0};constructor(e){this.video=e}async initialize(){try{const e=await dr.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm");this.handLandmarker=await cn.createFromOptions(e,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numHands:2}),this.isLoaded=!0,console.log("Vision tasks loaded"),await this.setupCamera()}catch(e){console.error("Error initializing HandTracker:",e)}}async setupCamera(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw this.showError("Browser API navigator.mediaDevices.getUserMedia not available"),new Error("Browser API navigator.mediaDevices.getUserMedia not available");try{const e=await navigator.mediaDevices.getUserMedia({video:{width:1280,height:720}});this.video.srcObject=e,await new Promise(n=>{this.video.onloadedmetadata=()=>{n()}}),this.video.play()}catch(e){throw console.error("Camera setup failed:",e),this.showError(`Camera Error: ${e}`),e}}showError(e){const n=document.createElement("div");n.style.position="absolute",n.style.top="10px",n.style.left="10px",n.style.color="red",n.style.backgroundColor="rgba(0,0,0,0.7)",n.style.padding="10px",n.style.zIndex="9999",n.textContent=e,document.body.appendChild(n)}detect(){if(!(!this.handLandmarker||!this.isLoaded||this.video.paused||this.video.ended)&&this.video.currentTime!==this.lastVideoTime){const e=performance.now(),n=this.handLandmarker.detectForVideo(this.video,e);this.lastVideoTime=this.video.currentTime,n.landmarks&&n.landmarks.length>0?(this.isHandDetected=!0,this.analyzeGestures(n.landmarks)):(this.isHandDetected=!1,this.resetStates())}}resetStates(){this.isHandOpen=!1,this.isPointing=!1,this.isOkSign=!1,this.isDoubleOpen=!1,this.isDomainExpansion=!1,this.hands=[]}analyzeGestures(e){this.resetStates();let n=0,i=0,r=0,s=0,a=e[0];for(const o of e){const c=o[0],l=o[4],u=o[8],h=o[12],d=o[16],g=o[20];this.hands.push({x:(l.x+c.x)/2,y:(l.y+c.y)/2});const _=(F,V)=>Math.pow(F.x-V.x,2)+Math.pow(F.y-V.y,2),M=_(c,u),p=_(c,h),f=_(c,d),b=_(c,g),y=Math.sqrt(_(l,u));y>.15&&p>.1&&f>.1&&n++;const A=M>.1,R=p<.1&&f<.1&&b<.1;A&&R&&(i++,this.indexFingerPosition={x:u.x,y:u.y},a=o);const U=y<.05,v=p>.1&&f>.1&&b>.1;U&&v&&(r++,a=o);const S=M>.1&&p>.1,C=f<.1&&b<.1,O=Math.sqrt(_(u,h));S&&C&&O<.05&&(s++,a=o)}if(s>0?this.isDomainExpansion=!0:r>0?this.isOkSign=!0:e.length>=2?this.isDoubleOpen=!0:i>0?this.isPointing=!0:this.isHandOpen=n>0,a){const o=a[0],c=a[4];this.handPosition={x:(c.x+o.x)/2,y:(c.y+o.y)/2}}}}class sM{scene;particles;particleCount=4e3;positions;velocities;colors;sizes;targetPosition=new B;isGathering=!1;constructor(e){this.scene=e;const n=new Xn;this.positions=new Float32Array(this.particleCount*3),this.velocities=new Float32Array(this.particleCount*3),this.colors=new Float32Array(this.particleCount*3),this.sizes=new Float32Array(this.particleCount);const i=[new qe(16777215),new qe(11193599),new qe(8913151),new qe(16711816),new qe(170)];for(let s=0;s<this.particleCount;s++){const a=5+Math.random()*10,o=Math.random()*Math.PI*2,c=Math.random()*Math.PI*2,l=a*Math.sin(o)*Math.cos(c),u=a*Math.sin(o)*Math.sin(c),h=a*Math.cos(o);this.positions[s*3]=l,this.positions[s*3+1]=u,this.positions[s*3+2]=h,this.velocities[s*3]=0,this.velocities[s*3+1]=0,this.velocities[s*3+2]=0;const d=i[Math.floor(Math.random()*i.length)];this.colors[s*3]=d.r,this.colors[s*3+1]=d.g,this.colors[s*3+2]=d.b,this.sizes[s]=Math.random()<.9?.05:.2}n.setAttribute("position",new Nn(this.positions,3)),n.setAttribute("color",new Nn(this.colors,3));const r=new jd({size:.08,vertexColors:!0,transparent:!0,opacity:.9,blending:Pc,depthWrite:!1});this.particles=new Pg(n,r),this.scene.add(this.particles)}update(e,n,i,r=!1,s={x:0,y:0},a=!1,o=!1,c=!1,l=[]){let u=(1-i.x-.5)*12,h=(.5-i.y)*8;if(r)u=(1-s.x-.5)*12,h=(.5-s.y)*8;else if(o&&l.length>=2){const y=l[0],T=l[1],A=(y.x+T.x)/2,R=(y.y+T.y)/2;u=(1-A-.5)*12,h=(.5-R)*8}this.targetPosition.set(u,h,0),this.isGathering=!n&&e&&!r&&!a&&!o;const d=n&&e&&!r&&!a&&!o,g=this.particles.geometry.attributes.position,_=this.particles.geometry.attributes.color,M=g.array,p=_.array,f=new qe;let b=!1;c?(f.setHex(16777215),b=!0):o?(f.setHex(35071),b=!0):a?(f.setHex(8913151),b=!0):r&&(f.setHex(16711680),b=!0);for(let y=0;y<this.particleCount;y++){const T=M[y*3],A=M[y*3+1],R=M[y*3+2];let w=this.velocities[y*3],U=this.velocities[y*3+1],v=this.velocities[y*3+2];if(a){const S=this.targetPosition.x-T,C=this.targetPosition.y-A,O=this.targetPosition.z-R,F=Math.sqrt(S*S+C*C+O*O);if(F>.4){const V=(F-.3)*.5;w+=S/F*V,U+=C/F*V,v+=O/F*V}w+=(Math.random()-.5)*.05,U+=(Math.random()-.5)*.05,v+=(Math.random()-.5)*.05,w*=.8,U*=.8,v*=.8}else if(o){const S=this.targetPosition.x-T,C=this.targetPosition.y-A,O=this.targetPosition.z-R,F=Math.sqrt(S*S+C*C+O*O),V=Math.max(F,.1);(F<.2||Math.random()<.1)&&(M[y*3]=this.targetPosition.x+(Math.random()-.5)*.1,M[y*3+1]=this.targetPosition.y+(Math.random()-.5)*.1,M[y*3+2]=this.targetPosition.z+(Math.random()-.5)*.1,w=(Math.random()-.5)*.6,U=(Math.random()-.5)*.6,v=(Math.random()-.5)*.6);const H=.5;w+=S/V*H*.2,U+=C/V*H*.2,v+=O/V*H*.2;const W=.1;w+=-C*W,U+=S*W,w*=.9,U*=.9,v*=.9}else if(r){const S=this.targetPosition.x-T,C=this.targetPosition.y-A,O=this.targetPosition.z-R,F=Math.sqrt(S*S+C*C+O*O),V=Math.max(F,.1);if(F>1.5)w+=S/V*.2,U+=C/V*.2,v+=O/V*.2;else{const H=1.5/V;w-=S/V*H*.5,U-=C/V*H*.5,v-=O/V*H*.5,w+=(Math.random()-.5)*.2,U+=(Math.random()-.5)*.2,v+=(Math.random()-.5)*.2}F>6&&(M[y*3]=this.targetPosition.x+(Math.random()-.5)*.2,M[y*3+1]=this.targetPosition.y+(Math.random()-.5)*.2,M[y*3+2]=this.targetPosition.z+(Math.random()-.5)*.2,w=(Math.random()-.5)*.5,U=(Math.random()-.5)*.5,v=(Math.random()-.5)*.5),w*=.9,U*=.9,v*=.9}else if(this.isGathering){const S=this.targetPosition.x-T,C=this.targetPosition.y-A,O=this.targetPosition.z-R,F=Math.sqrt(S*S+C*C+O*O),V=Math.max(F,.1),H=2/V,W=S/V*H*.1,z=C/V*H*.1,$=O/V*H*.1;w+=W,U+=z,v+=$,w+=-z*.5,U+=W*.5,w*=.85,U*=.85,v*=.85}else if(d){const S=T-this.targetPosition.x,C=A-this.targetPosition.y,O=R-this.targetPosition.z,F=Math.sqrt(S*S+C*C+O*O)+.01;F<5&&(w+=S/F*.05,U+=C/F*.05,v+=O/F*.05),w*=.98,U*=.98,v*=.98}else T*T+A*A+R*R>400&&(w-=T*2e-4,U-=A*2e-4,v-=R*2e-4),w+=(Math.random()-.5)*.001,U+=(Math.random()-.5)*.001,v+=(Math.random()-.5)*.001,w*=.99,U*=.99,v*=.99;this.velocities[y*3]=w,this.velocities[y*3+1]=U,this.velocities[y*3+2]=v,M[y*3]+=w,M[y*3+1]+=U,M[y*3+2]+=v,b?(p[y*3]=Rr.lerp(p[y*3],f.r,.1),p[y*3+1]=Rr.lerp(p[y*3+1],f.g,.1),p[y*3+2]=Rr.lerp(p[y*3+2],f.b,.1)):(p[y*3]=Rr.lerp(p[y*3],1,.02),p[y*3+1]=Rr.lerp(p[y*3+1],1,.02),p[y*3+2]=Rr.lerp(p[y*3+2],1,.02))}g.needsUpdate=!0,_.needsUpdate=!0}}async function aM(){const t=document.getElementById("app"),e=document.getElementById("video-input"),n=document.getElementById("loading");if(!t||!e){console.error("Missing DOM elements");return}const i=new bg,r=new Dn(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=5;const s=new Lx({antialias:!0,alpha:!0});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(window.devicePixelRatio),t.appendChild(s.domElement),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)});const a=new sM(i),o=new rM(e);console.log("Initializing HandTracker..."),await o.initialize(),n&&(n.style.display="none");function c(){requestAnimationFrame(c),o.detect(),a.update(o.isHandDetected,o.isHandOpen,o.handPosition,o.isPointing,o.indexFingerPosition,o.isOkSign,o.isDoubleOpen,o.isDomainExpansion,o.hands),o.isDomainExpansion?(e.style.opacity="0",document.body.style.backgroundColor="black"):(e.style.opacity="1",document.body.style.backgroundColor="black"),s.render(i,r)}c()}aM().catch(t=>console.error(t));
