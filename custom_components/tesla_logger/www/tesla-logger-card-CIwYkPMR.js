/* Tesla Logger Lovelace card. Built from frontend/. Do not edit. */
const it=globalThis,pt=it.ShadowRoot&&(it.ShadyCSS===void 0||it.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gt=Symbol(),Et=new WeakMap;let Dt=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(pt&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Et.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Et.set(t,e))}return e}toString(){return this.cssText}};const Ee=e=>new Dt(typeof e=="string"?e:e+"",void 0,gt),De=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((i,r,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1],e[0]);return new Dt(s,e,gt)},Ne=(e,t)=>{if(pt)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const i=document.createElement("style"),r=it.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,e.appendChild(i)}},Nt=pt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return Ee(s)})(e):e;const{is:Te,defineProperty:Pe,getOwnPropertyDescriptor:ze,getOwnPropertyNames:Le,getOwnPropertySymbols:Fe,getPrototypeOf:Oe}=Object,I=globalThis,Tt=I.trustedTypes,Ie=Tt?Tt.emptyScript:"",Pt=I.reactiveElementPolyfillSupport,V=(e,t)=>e,mt={toAttribute(e,t){switch(t){case Boolean:e=e?Ie:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},zt=(e,t)=>!Te(e,t),Lt={attribute:!0,type:String,converter:mt,reflect:!1,useDefault:!1,hasChanged:zt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),I.litPropertyMetadata??(I.litPropertyMetadata=new WeakMap);let U=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Lt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Pe(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:r}=ze(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){const a=i?.call(this);r?.call(this,n),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Lt}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;const e=Oe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){const t=this.properties,s=[...Le(t),...Fe(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(Nt(i))}else e!==void 0&&t.push(Nt(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ne(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const n=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:mt).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var s,i;const r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const a=r.getPropertyOptions(n),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:mt;this._$Em=n;const l=o.fromAttribute(t,a.type);this[n]=l??((i=this._$Ej)==null?void 0:i.get(n))??l,this._$Em=null}}requestUpdate(e,t,s,i=!1,r){var n;if(e!==void 0){const a=this.constructor;if(i===!1&&(r=this[e]),s??(s=a.getPropertyOptions(e)),!((s.hasChanged??zt)(r,t)||s.useDefault&&s.reflect&&r===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(a._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i){const{wrapped:a}=n,o=this[r];a!==!0||this._$AL.has(r)||o===void 0||this.C(r,void 0,n,o)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(s)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[V("elementProperties")]=new Map,U[V("finalized")]=new Map,Pt?.({ReactiveElement:U}),(I.reactiveElementVersions??(I.reactiveElementVersions=[])).push("2.1.2");const rt=globalThis,Ft=e=>e,nt=rt.trustedTypes,Ot=nt?nt.createPolicy("lit-html",{createHTML:e=>e}):void 0,It="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,Ut="?"+S,Ue=`<${Ut}>`,D=document,G=()=>D.createComment(""),q=e=>e===null||typeof e!="object"&&typeof e!="function",vt=Array.isArray,He=e=>vt(e)||typeof e?.[Symbol.iterator]=="function",ft=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ht=/-->/g,Rt=/>/g,N=RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bt=/'/g,jt=/"/g,Wt=/^(?:script|style|textarea|title)$/i,Vt=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),d=Vt(1),y=Vt(2),H=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Gt=new WeakMap,T=D.createTreeWalker(D,129);function qt(e,t){if(!vt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ot!==void 0?Ot.createHTML(t):t}const Re=(e,t)=>{const s=e.length-1,i=[];let r,n=t===2?"<svg>":t===3?"<math>":"",a=K;for(let o=0;o<s;o++){const l=e[o];let c,p,h=-1,m=0;for(;m<l.length&&(a.lastIndex=m,p=a.exec(l),p!==null);)m=a.lastIndex,a===K?p[1]==="!--"?a=Ht:p[1]!==void 0?a=Rt:p[2]!==void 0?(Wt.test(p[2])&&(r=RegExp("</"+p[2],"g")),a=N):p[3]!==void 0&&(a=N):a===N?p[0]===">"?(a=r??K,h=-1):p[1]===void 0?h=-2:(h=a.lastIndex-p[2].length,c=p[1],a=p[3]===void 0?N:p[3]==='"'?jt:Bt):a===jt||a===Bt?a=N:a===Ht||a===Rt?a=K:(a=N,r=void 0);const f=a===N&&e[o+1].startsWith("/>")?" ":"";n+=a===K?l+Ue:h>=0?(i.push(c),l.slice(0,h)+It+l.slice(h)+S+f):l+S+(h===-2?o:f)}return[qt(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class tt{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let n=0,a=0;const o=t.length-1,l=this.parts,[c,p]=Re(t,s);if(this.el=tt.createElement(c,i),T.currentNode=this.el.content,s===2||s===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=T.nextNode())!==null&&l.length<o;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(It)){const m=p[a++],f=r.getAttribute(h).split(S),_=/([.?@])?(.*)/.exec(m);l.push({type:1,index:n,name:_[2],strings:f,ctor:_[1]==="."?je:_[1]==="?"?We:_[1]==="@"?Ve:at}),r.removeAttribute(h)}else h.startsWith(S)&&(l.push({type:6,index:n}),r.removeAttribute(h));if(Wt.test(r.tagName)){const h=r.textContent.split(S),m=h.length-1;if(m>0){r.textContent=nt?nt.emptyScript:"";for(let f=0;f<m;f++)r.append(h[f],G()),T.nextNode(),l.push({type:2,index:++n});r.append(h[m],G())}}}else if(r.nodeType===8)if(r.data===Ut)l.push({type:2,index:n});else{let h=-1;for(;(h=r.data.indexOf(S,h+1))!==-1;)l.push({type:7,index:n}),h+=S.length-1}n++}}static createElement(t,s){const i=D.createElement("template");return i.innerHTML=t,i}}function R(e,t,s=e,i){var r,n;if(t===H)return t;let a=i!==void 0?(r=s._$Co)==null?void 0:r[i]:s._$Cl;const o=q(t)?void 0:t._$litDirective$;return a?.constructor!==o&&((n=a?._$AO)==null||n.call(a,!1),o===void 0?a=void 0:(a=new o(e),a._$AT(e,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=a:s._$Cl=a),a!==void 0&&(t=R(e,a._$AS(e,t.values),a,i)),t}class Be{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,r=(t?.creationScope??D).importNode(s,!0);T.currentNode=r;let n=T.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new et(n,n.nextSibling,this,t):l.type===1?c=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(c=new Ge(n,this,t)),this._$AV.push(c),l=i[++o]}a!==l?.index&&(n=T.nextNode(),a++)}return T.currentNode=D,r}p(t){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class et{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,s,i,r){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=R(this,t,s),q(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):He(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&q(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){var s;const{values:i,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=tt.createElement(qt(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(i);else{const a=new Be(n,this),o=a.u(this.options);a.p(i),this.T(o),this._$AH=a}}_$AC(t){let s=Gt.get(t.strings);return s===void 0&&Gt.set(t.strings,s=new tt(t)),s}k(t){vt(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const n of t)r===s.length?s.push(i=new et(this.O(G()),this.O(G()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(t=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);t!==this._$AB;){const r=Ft(t).nextSibling;Ft(t).remove(),t=r}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}}class at{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,r,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=s,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(t,s=this,i,r){const n=this.strings;let a=!1;if(n===void 0)t=R(this,t,s,0),a=!q(t)||t!==this._$AH&&t!==H,a&&(this._$AH=t);else{const o=t;let l,c;for(t=n[0],l=0;l<n.length-1;l++)c=R(this,o[i+l],s,l),c===H&&(c=this._$AH[l]),a||(a=!q(c)||c!==this._$AH[l]),c===u?t=u:t!==u&&(t+=(c??"")+n[l+1]),this._$AH[l]=c}a&&!r&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class je extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class We extends at{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class Ve extends at{constructor(t,s,i,r,n){super(t,s,i,r,n),this.type=5}_$AI(t,s=this){if((t=R(this,t,s,0)??u)===H)return;const i=this._$AH,r=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==u&&(i===u||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,t):this._$AH.handleEvent(t)}}class Ge{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const Kt=rt.litHtmlPolyfillSupport;Kt?.(tt,et),(rt.litHtmlVersions??(rt.litHtmlVersions=[])).push("3.3.3");const qe=(e,t,s)=>{const i=s?.renderBefore??t;let r=i._$litPart$;if(r===void 0){const n=s?.renderBefore??null;i._$litPart$=r=new et(t.insertBefore(G(),n),n,void 0,s??{})}return r._$AI(e),r};const Z=globalThis;let B=class extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return H}};var Zt;B._$litElement$=!0,B.finalized=!0,(Zt=Z.litElementHydrateSupport)==null||Zt.call(Z,{LitElement:B});const Yt=Z.litElementPolyfillSupport;Yt?.({LitElement:B}),(Z.litElementVersions??(Z.litElementVersions=[])).push("4.2.2");const Ke=e=>e.strings===void 0;const Ze={CHILD:2},Ye=e=>(...t)=>({_$litDirective$:e,values:t});class Je{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}const Y=(e,t)=>{var s;const i=e._$AN;if(i===void 0)return!1;for(const r of i)(s=r._$AO)==null||s.call(r,t,!1),Y(r,t);return!0},ot=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},Jt=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),ts(t)}};function Qe(e){this._$AN!==void 0?(ot(this),this._$AM=e,Jt(this)):this._$AM=e}function Xe(e,t=!1,s=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let n=s;n<i.length;n++)Y(i[n],!1),ot(i[n]);else i!=null&&(Y(i,!1),ot(i));else Y(this,e)}const ts=e=>{e.type==Ze.CHILD&&(e._$AP??(e._$AP=Xe),e._$AQ??(e._$AQ=Qe))};class es extends Je{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),Jt(this),this.isConnected=t._$AU}_$AO(t,s=!0){var i,r;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),s&&(Y(this,t),ot(this))}setValue(t){if(Ke(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const _t=new WeakMap,$t=Ye(class extends es{render(e){return u}update(e,[t]){var s;const i=t!==this.G;return i&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=(s=e.options)==null?void 0:s.host,this.rt(this.ct=e.element)),u}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=_t.get(t);s===void 0&&(s=new WeakMap,_t.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=_t.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Qt={status:"Status",drives:"Drives",charges:"Charges",stats:"Stats",charts:"Charts",consumptionChart:"Consumption",chargedChart:"Energy charged",emptySeries:"No data for this period.",latest:"Latest",period:"Period",thisWeek:"This week",thisMonth:"This month",thisYear:"This year",consumed:"consumed",batteryHealth:"Battery health",rangeAtFull:"Range at 100%",acDc:"AC/DC charging",fastShare:"fast charging",cost:"Cost",perKm:"/km",perDay:"km/day",idleUse:"Parked consumption",tempUse:"Consumption vs temperature",battery:"Battery",drivingGroup:"Driving",cabinGroup:"Cabin",chargeGroup:"Charging",viewsGroup:"Views",moreCharts:"More charts",previousPeriod:{week:"previous week",month:"previous month",year:"previous year"},range:"Range",speed:"Speed",power:"Power",inside:"Inside",outside:"Outside",charger:"Charger",added:"Added",odometer:"Odometer",limit:"Limit",location:"Location",unknown:"Unknown",loading:"Loading\u2026",emptyDrives:"No drives in this page.",emptyCharges:"No charges in this page.",back:"Back",refresh:"Refresh",week:"Week",month:"Month",year:"Year",distance:"Distance",duration:"Duration",energy:"Energy",efficiency:"Efficiency",drivesCount:"Drives",chargesCount:"Charges",energyAdded:"Energy added",map:"Route",speedChart:"Speed",elevationChart:"Elevation",batteryChart:"Battery",noRoute:"This drive has no route points.",pick:"Select a Tesla Logger entity in the card editor.",missingDevice:"This entity is not linked to a Tesla Logger device.",failed:"Could not load history.",previous:"Previous",next:"Next",page:"Page",online:"Online",asleep:"Asleep",offline:"Offline",driving:"Driving",charging:"Charging",updating:"Updating",entity:"Entity",defaultView:"Default view",showMap:"Map",showBlocks:"Blocks",showFields:{status:"Status",drives:"Drives",charges:"Charges",chart_consumption:"Consumption (Wh/km)",chart_distance:"Distance",chart_energy:"Energy charged",totals:"Totals",battery_health:"Battery health",charging_split:"AC/DC charging and cost",vampire_drain:"Parked consumption",consumption_vs_temp:"Consumption vs temperature"}},ss={...Qt,status:"\xC9tat",drives:"Trajets",charges:"Charges",stats:"Statistiques",perDay:"km/j",charts:"Graphiques",consumptionChart:"Consommation",chargedChart:"\xC9nergie charg\xE9e",emptySeries:"Aucune donn\xE9e sur cette p\xE9riode.",latest:"Dernier",period:"P\xE9riode",thisWeek:"Cette semaine",thisMonth:"Ce mois",thisYear:"Cette ann\xE9e",consumed:"consomm\xE9",batteryHealth:"Sant\xE9 batterie",rangeAtFull:"Autonomie \xE0 100 %",acDc:"Charges AC/DC",fastShare:"recharge rapide",cost:"Co\xFBt",perKm:"/km",idleUse:"Consommation \xE0 l'arr\xEAt",tempUse:"Consommation vs temp\xE9rature",battery:"Batterie",drivingGroup:"D\xE9placement",cabinGroup:"Habitacle",chargeGroup:"Charge",viewsGroup:"Vues",moreCharts:"Autres graphiques",previousPeriod:{week:"semaine pr\xE9c\xE9dente",month:"mois pr\xE9c\xE9dent",year:"ann\xE9e pr\xE9c\xE9dente"},range:"Autonomie",speed:"Vitesse",power:"Puissance",inside:"Int\xE9rieur",outside:"Ext\xE9rieur",charger:"Chargeur",added:"Ajout\xE9e",odometer:"Odom\xE8tre",limit:"Limite",location:"Lieu",unknown:"Inconnu",loading:"Chargement\u2026",emptyDrives:"Aucun trajet sur cette page.",emptyCharges:"Aucune charge sur cette page.",back:"Retour",refresh:"Actualiser",week:"Semaine",month:"Mois",year:"Ann\xE9e",distance:"Distance",duration:"Dur\xE9e",energy:"\xC9nergie",efficiency:"Efficacit\xE9",drivesCount:"Trajets",chargesCount:"Charges",energyAdded:"\xC9nergie ajout\xE9e",map:"Trac\xE9",speedChart:"Vitesse",elevationChart:"Altitude",batteryChart:"Batterie",noRoute:"Ce trajet n'a pas de trac\xE9.",pick:"Choisissez une entit\xE9 Tesla Logger dans l'\xE9diteur.",missingDevice:"Cette entit\xE9 n'est pas li\xE9e \xE0 un appareil Tesla Logger.",failed:"Impossible de charger l'historique.",previous:"Pr\xE9c\xE9dent",next:"Suivant",page:"Page",online:"En ligne",asleep:"Endormie",offline:"Hors ligne",driving:"En route",charging:"En charge",updating:"Mise \xE0 jour",entity:"Entit\xE9",defaultView:"Vue par d\xE9faut",showMap:"Carte",showBlocks:"Blocs",showFields:{status:"\xC9tat",drives:"Trajets",charges:"Charges",chart_consumption:"Consommation (Wh/km)",chart_distance:"Distance",chart_energy:"\xC9nergie charg\xE9e",totals:"Totaux",battery_health:"Sant\xE9 batterie",charging_split:"Charges AC/DC et co\xFBt",vampire_drain:"Consommation \xE0 l'arr\xEAt",consumption_vs_temp:"Consommation vs temp\xE9rature"}};function lt(e){const t=(e||"").toLowerCase().replace("_","-");return t==="fr"||t.startsWith("fr-")?"fr":"en"}function Xt(e){return e==="fr"?ss:Qt}function is(e,t){return e[t]||t||e.unknown}function P(e){return e&&typeof e=="object"?{language:e.language||"en",hour12:e.hour12,timeZone:e.timeZone}:{language:e||"en"}}function rs(e){var t,s,i,r;const n=((t=e?.locale)==null?void 0:t.language)||e?.language||"en",a=(s=e?.locale)==null?void 0:s.time_format;let o;a==="12"?o=!0:a==="24"&&(o=!1);const l=(i=e?.locale)==null?void 0:i.time_zone,c=(r=e?.config)==null?void 0:r.time_zone;return{language:n,hour12:o,timeZone:l==="server"&&typeof c=="string"&&c!==""&&c!=="local"&&c!=="server"?c:void 0}}function v(e,t,s){return e.toLocaleString(s==="fr"?"fr-FR":"en-US",{minimumFractionDigits:t,maximumFractionDigits:t})}const ns=/^<.*>$/;function te(e){if(typeof e!="string")return null;const t=e.trim();if(!t||ns.test(t))return null;const s=t.toLowerCase();return s==="none"||s==="null"?null:t}function ee(e){return e.replace(/[\u00a0\u202f]/g," ").replace(/\s+/g," ").trim()}function yt(e,t){const s={...t};return e.timeZone&&(s.timeZone=e.timeZone),s}function j(e,t){return ee(new Intl.DateTimeFormat(t.language||"en",yt(t,{weekday:"short",day:"numeric",month:"short"})).format(e))}function M(e,t){const s=yt(t,{hour:t.hour12?"numeric":"2-digit",minute:"2-digit"});return typeof t.hour12=="boolean"&&(s.hour12=t.hour12),ee(new Intl.DateTimeFormat(t.language||"en",s).format(e))}function J(e,t){const s=new Intl.DateTimeFormat("en-US",yt(t,{year:"numeric",month:"2-digit",day:"2-digit"})).formatToParts(e),i=r=>{var n;return((n=s.find(a=>a.type===r))==null?void 0:n.value)??""};return`${i("year")}-${i("month")}-${i("day")}`}function as(e,t){const s=new Date(e);if(Number.isNaN(s.getTime()))return e;const i=P(t);return`${j(s,i)}, ${M(s,i)}`}function Q(e){if(e==null||Number.isNaN(e))return"\u2014";const t=Math.max(0,Math.round(e)),s=Math.floor(t/3600),i=Math.floor(t%3600/60);return s>0?`${s} h ${i} min`:`${i} min`}function se(e){return e.map(t=>typeof t=="string"?t.trim():"").filter(t=>t.length>0)}function X(e){return typeof e!="string"?null:e.trim()||null}function z(e){return typeof e=="number"&&Number.isFinite(e)?e:null}function ie(e,t,s){const i=z(e),r=z(t);return i==null&&r==null?null:i!=null&&r!=null?`${v(i,0,s)} \u2192 ${v(r,0,s)} %`:`${v(i??r,0,s)} %`}function re(e,t,s){const i=P(s),r=new Date(e);if(Number.isNaN(r.getTime()))return e;const n=`${j(r,i)}, ${M(r,i)}`;if(!t)return n;const a=new Date(t);if(Number.isNaN(a.getTime()))return n;if(J(r,i)!==J(a,i)){const o=`${j(a,i)}, ${M(a,i)}`;return`${n} \u2013 ${o}`}return`${j(r,i)}, ${M(r,i)}\u2013${M(a,i)}`}function ne(e,t){const s=P(t),i=new Date(e);return Number.isNaN(i.getTime())?{key:e,label:e}:{key:J(i,s),label:j(i,s)}}function ae(e,t,s){const i=P(s),r=new Date(e);if(Number.isNaN(r.getTime()))return e;const n=M(r,i);if(!t)return n;const a=new Date(t);return Number.isNaN(a.getTime())?n:J(r,i)!==J(a,i)?`${n} \u2013 ${j(a,i)}, ${M(a,i)}`:`${n}\u2013${M(a,i)}`}function oe(e,t){const s=z(e);return s==null?null:`${v(s,1,t)} kWh`}function le(e,t){const s=P(t),i=lt(s.language),r=X(e.start_address),n=X(e.end_address),a=r&&n?`${r} \u2192 ${n}`:r||n,o=xt(e.energy_used_kwh,e.distance_km),l=ie(e.start_battery_level,e.end_battery_level,i),c=[z(e.duration_s)==null?null:Q(e.duration_s),o==null?null:`${v(o,0,i)} Wh/km`,l??oe(e.energy_used_kwh,i)],p=se(c),h=z(e.distance_km),m=ne(e.start_at,s);return{datetime:e.start_at,when:re(e.start_at,e.end_at,s),clock:ae(e.start_at,e.end_at,s),dayKey:m.key,dayLabel:m.label,place:a,ends:r&&n?[r,n]:null,figure:h==null?null:`${v(h,1,i)} km`,detail:p.join(" \xB7 "),details:p,slots:c}}function os(e){if(e.is_dc===!0)return"DC";if(e.is_dc===!1)return"AC";const t=te(e.charger_type);return t==="AC"||t==="DC"?t:null}function ls(e,t){const s=P(t),i=lt(s.language),r=X(e.address)||X(e.geofence)||X(e.location),n=te(e.charger_type),a=n&&n!=="AC"&&n!=="DC"?n:null,o=z(e.max_power_kw),l=[z(e.duration_s)==null?null:Q(e.duration_s),ie(e.start_battery_level,e.end_battery_level,i),o==null?null:`${v(o,0,i)} kW`,os(e)],c=se(l),p=ne(e.start_at,s);return{datetime:e.start_at,when:re(e.start_at,e.end_at,s),clock:ae(e.start_at,e.end_at,s),dayKey:p.key,dayLabel:p.label,place:r||a,ends:null,figure:oe(e.energy_added_kwh,i),detail:c.join(" \xB7 "),details:c,slots:l}}function xt(e,t){return e==null||t==null||t<=0?null:e*1e3/t}function he(e,t=new Date){const s=new Date(t);if(e==="week"){const r=(s.getDay()+6)%7;s.setDate(s.getDate()-r)}else e==="month"?s.setDate(1):s.setMonth(0,1);s.setHours(0,0,0,0);const i=new Date(s);return e==="week"?i.setDate(i.getDate()+7):e==="month"?i.setMonth(i.getMonth()+1):i.setFullYear(i.getFullYear()+1),{start:s,end:i}}function ce(e,t,s=new Date){const i=new Date(e).getTime();if(Number.isNaN(i))return!1;const{start:r,end:n}=he(t,s);return i>=r.getTime()&&i<n.getTime()}function hs(e){const t=new Date;return{from:he(e,t).start.toISOString(),to:t.toISOString()}}function cs(e){return typeof e=="string"?e:e instanceof Error||e&&typeof e=="object"&&"message"in e&&typeof e.message=="string"?e.message:""}function ds(e,t){const s=cs(e);return!s||s.includes("tl_")?t:s.slice(0,180)}function L(e){return!e||typeof e!="object"?null:e}const de={week:12,month:12,year:5},us=480;function ps(e,t=!1){const s=t?200:360,i=e!=null&&Number.isFinite(e)&&e>=64?e:s,r=i<us;return{width:i,height:t?r?116:132:r?184:208,left:t?32:42,right:t?8:12,top:t?8:12,bottom:t?22:28}}function gs(e){if(!Number.isFinite(e)||e<=0)return 1;const t=10**Math.floor(Math.log10(e)),s=e/t;return(s<=1?1:s<=2?2:s<=5?5:10)*t}function ue(e,t,s=new Date){let i=-1;return e.forEach((r,n)=>{ce(r,t,s)&&(i=n)}),i>=0?i:Math.max(0,e.length-1)}function ms(e,t,s=new Date){var i;if(e.length<2)return null;const r=ue(e.map(a=>a.start),t,s);if(r<=0)return null;const n=(i=e[r-1])==null?void 0:i.distance_km;return typeof n=="number"&&Number.isFinite(n)?n:null}function bt(e,t,s){const i=new Date(e);if(Number.isNaN(i.getTime()))return e;const r=P(s),n=r.language||"en",a=r.timeZone?{timeZone:r.timeZone}:{};return t==="year"?new Intl.DateTimeFormat(n,{year:"numeric",...a}).format(i):t==="month"?new Intl.DateTimeFormat(n,{month:"short",...a}).format(i).replace(/[\u00a0\u202f]/g," ").replace(/\.$/,"").trim():new Intl.DateTimeFormat(n,{day:"numeric",month:"short",...a}).format(i).replace(/[\u00a0\u202f]/g," ").replace(/,/g,"").replace(/\s+/g," ").trim()}function vs(e,t,s,i,r={}){const n=ps(r.width,r.compact),a=e.map(g=>t==="stack"?Math.max(0,g.value??0)+Math.max(0,g.stack??0):g.value!=null&&Number.isFinite(g.value)&&g.value>0?g.value:0).filter(g=>g>0),o=gs(a.length?Math.max(...a):0),l=n.width-n.left-n.right,c=n.height-n.top-n.bottom,p=e.length>0?l/e.length:l,h=g=>n.top+c-g/o*c,m=h(0),f=[o,o/2,0],_=e.map((g,$)=>{const C=n.left+p*$+p/2,k=g.value!=null&&Number.isFinite(g.value)?g.value:null,w=k==null?null:h(Math.max(0,k));return{...g,x:C,y:w,value:k}}),x=e.length>8?2:1,A=(g,$,C)=>{if(!r.onSelect)return y`<g><title>${$}</title>${C}</g>`;const k=r.selected===g;return y`
      <g
        class=${k?"selected":""}
        role="button"
        tabindex="0"
        aria-pressed=${k?"true":"false"}
        aria-label=${$}
        @click=${()=>{var w;return(w=r.onSelect)==null?void 0:w.call(r,g)}}
        @keydown=${w=>{var W;(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),(W=r.onSelect)==null||W.call(r,g))}}
      >
        <title>${$}</title>
        ${C}
      </g>
    `},st=t==="line"?[]:_.map((g,$)=>{const C=Math.min(r.compact?16:22,p*.62),k=(g.x-C/2).toFixed(1),w=y`
            <rect
              class="hit"
              x=${(g.x-p/2).toFixed(1)}
              y=${n.top}
              width=${p.toFixed(1)}
              height=${c}
            ></rect>
          `;if(t==="stack"){const Ce=[{amount:Math.max(0,g.value??0),className:"bar ac"},{amount:Math.max(0,g.stack??0),className:"bar dc"}];let ut=0;const Se=Ce.map(Ct=>{const Me=h(ut);ut+=Ct.amount;const St=h(ut),Mt=Math.max(0,Me-St);return Mt<=0?y``:y`
                <rect
                  class=${Ct.className}
                  x=${k}
                  y=${St.toFixed(1)}
                  width=${C.toFixed(1)}
                  height=${Mt.toFixed(1)}
                  rx="2"
                ></rect>
              `});return A($,g.title,y`${w}${Se}`)}const W=g.y??m,Ae=Math.max(0,m-W);return A($,g.title,y`
              ${w}
              <rect
                class="bar"
                x=${k}
                y=${W.toFixed(1)}
                width=${C.toFixed(1)}
                height=${Ae.toFixed(1)}
                rx="2"
              ></rect>
            `)}),E=[];let O=!1;if(t==="line")for(const g of _){if(g.y==null){O=!1;continue}E.push(`${O?"L":"M"}${g.x.toFixed(1)},${g.y.toFixed(1)}`),O=!0}const dt=t==="line"?_.map((g,$)=>g.y==null?y``:A($,g.title,y`
              <circle class="hit" cx=${g.x.toFixed(1)} cy=${g.y.toFixed(1)} r="12"></circle>
              <circle class="dot" cx=${g.x.toFixed(1)} cy=${g.y.toFixed(1)} r="3.5"></circle>
            `)):[];return y`
    <svg
      class=${r.compact?"series-chart compact":"series-chart"}
      viewBox=${`0 0 ${n.width} ${n.height}`}
      width="100%"
      height=${String(n.height)}
      role="group"
      aria-label=${s}
      preserveAspectRatio="xMinYMin meet"
    >
      ${f.map(g=>{const $=h(g);return y`
          <line class="grid" x1=${n.left} y1=${$.toFixed(1)} x2=${n.width-n.right} y2=${$.toFixed(1)}></line>
          <text class="y-label" x=${n.left-4} y=${($+4).toFixed(1)} text-anchor="end">
            ${i(g)}
          </text>
        `})}
      ${st}
      ${E.length>1?y`<path class="line" d=${E.join(" ")}></path>`:y``}
      ${dt}
      ${_.map((g,$)=>$%x===0||$===_.length-1?y`<text class="x-label" x=${g.x.toFixed(1)} y=${n.height-6} text-anchor="middle">${g.label}</text>`:y``)}
    </svg>
  `}function fs(e,t){const s=[];for(const i of e){const r=i[t];typeof r=="number"&&Number.isFinite(r)&&s.push(r)}return s}function _s(e,t=320,s=90){if(e.length<2)return y``;const i=Math.min(...e),r=Math.max(...e)-i||1,n=t/(e.length-1),a=e.map((o,l)=>{const c=l*n,p=s-4-(o-i)/r*(s-8);return`${c.toFixed(1)},${p.toFixed(1)}`}).join(" ");return y`
    <svg class="chart" viewBox="0 0 ${t} ${s}" preserveAspectRatio="none" aria-hidden="true">
      <polyline points=${a}></polyline>
    </svg>
  `}const pe=15,F=256,ge=85.05112878;function $s(e,t){return typeof e!="number"||typeof t!="number"||!Number.isFinite(e)||!Number.isFinite(t)||e<-90||e>90||t<-180||t>180?null:{lat:e,lon:t}}function ys(e,t,s=pe){const i=F*2**s,r=Math.min(ge,Math.max(-ge,e))*Math.PI/180,n=(t+180)/360*i,a=(1-Math.log(Math.tan(Math.PI/4+r/2))/Math.PI)/2*i;return{x:n,y:a}}function xs(e,t,s,i,r=pe){const n=ys(e,t,r),a=n.x-s/2,o=n.y-i/2,l=Math.floor(a/F),c=Math.floor((a+Math.max(s,1)-.001)/F),p=Math.floor(o/F),h=Math.floor((o+Math.max(i,1)-.001)/F),m=2**r,f=[];for(let _=l;_<=c;_+=1)for(let x=p;x<=h;x+=1){if(x<0||x>=m)continue;const A=(_%m+m)%m;f.push({x:A,y:x,left:Math.round((_*F-a)*10)/10,top:Math.round((x*F-o)*10)/10,url:`https://tile.openstreetmap.org/${r}/${A}/${x}.png`})}return{tiles:f,dot:{left:s/2,top:i/2}}}const wt={status:!0,drives:!0,charges:!0,chart_consumption:!0,chart_distance:!0,chart_energy:!0,totals:!0,battery_health:!0,charging_split:!0,vampire_drain:!0,consumption_vs_temp:!0},bs=Object.keys(wt),me=["status","drives","charges","totals"],ve=["chart_consumption","chart_distance","chart_energy","battery_health","charging_split","vampire_drain","consumption_vs_temp"];function ht(e){const t={...wt},s=e?.show;if(!s||typeof s!="object")return t;for(const i of bs){const r=s[i];typeof r=="boolean"&&(t[i]=r)}return t}function kt(e){return e.chart_consumption||e.chart_distance||e.chart_energy||e.totals||e.battery_health||e.charging_split||e.vampire_drain||e.consumption_vs_temp}function fe(e){return e.chart_consumption||e.chart_distance||e.chart_energy||e.totals||e.battery_health||e.charging_split||e.vampire_drain}function ct(e){const t=[];return e.status&&t.push("status"),e.drives&&t.push("drives"),e.charges&&t.push("charges"),t.push("stats"),kt(e)&&t.push("charts"),t}function ws(e,t){return e==="drive"?t.drives?e:ct(t)[0]??"stats":e==="stats"||ct(t).includes(e)?e:ct(t)[0]??"stats"}function _e(e){const t=L(e);return!!(t&&Array.isArray(t.data))}function ks(e){const t=L(e);return!!(t&&Array.isArray(t.route)&&Array.isArray(t.series))}function As(e){const t=L(e);return!!(t&&typeof t.distance_km=="number")}function $e(e){const t=L(e);return!!(t&&Array.isArray(t.buckets))}function Cs(e){const t=L(e);return(t&&Array.isArray(t.data)?t.data:[]).filter(s=>{const i=L(s);return!!(i&&typeof i.temp_c_bucket=="number")})}function b(e){return typeof e=="number"&&Number.isFinite(e)?e:null}const ye=10,At=class extends B{constructor(){super(...arguments),this._view="status",this._bucketIndex=null,this._period="month",this._page=1,this._loading=!1,this._error="",this._plotWidths={},this._headerBox={width:0,height:0},this._headerVisible=!1,this._mainChart="consumption",this._previousKm=null,this._narrow=!1,this._tabsOverflow=!1,this.mapToken=0,this.watchSize=t=>{var s;t&&((s=this._resize)==null||s.observe(t))}}setConfig(t){var s;if(!t||typeof t.entity!="string"||!t.entity)throw new Error("Please select a Tesla Logger entity");const i=((s=this._config)==null?void 0:s.entity)!==t.entity;this._config=t,i&&(this._view=t.default_view||"status",this.clearHistory()),this.ensureVisibleView()}get flags(){return ht(this._config)}ensureVisibleView(){const t=ws(this._view,this.flags);t!==this._view&&(this._view=t)}static getConfigElement(){return document.createElement("tesla-logger-card-editor-impl")}static getStubConfig(t){return{entity:Object.keys(t.states).find(s=>{var i,r;return((r=(i=t.states[s])==null?void 0:i.attributes)==null?void 0:r.key)==="location"})||"",show:{...wt}}}getCardSize(){return 6}connectedCallback(){super.connectedCallback(),this.watchVisibility(),typeof ResizeObserver=="function"&&(this._resize=new ResizeObserver(t=>{const s=t.map(i=>{const r=i.target;return{plot:r.dataset.plot,mapHost:r.dataset.mapHost!=null,tabs:r.dataset.tabs!=null,host:r===this,width:Math.round(i.contentRect.width),height:Math.round(i.contentRect.height),overflow:r.dataset.tabs!=null&&r.scrollWidth>r.clientWidth+1}});queueMicrotask(()=>{if(!this._resize)return;let i=this._plotWidths,r=!1,n=this._headerBox,a=!1,o=this._narrow,l=!1,c=this._tabsOverflow,p=!1;for(const h of s){if(h.host&&h.width>0&&o!==h.width<=420&&(o=h.width<=420,l=!0),h.tabs&&c!==h.overflow&&(c=h.overflow,p=!0),h.plot){h.width>0&&i[h.plot]!==h.width&&(r||(i={...i},r=!0),i[h.plot]=h.width);continue}h.mapHost&&(n.width!==h.width||n.height!==h.height)&&(n={width:h.width,height:h.height},a=!0)}r&&(this._plotWidths=i),a&&(this._headerBox=n),l&&(this._narrow=o),p&&(this._tabsOverflow=c)})}),this._resize.observe(this))}disconnectedCallback(){var t,s;(t=this._onScreen)==null||t.disconnect(),this._onScreen=void 0,(s=this._resize)==null||s.disconnect(),this._resize=void 0,this.destroyMap(),super.disconnectedCallback()}watchVisibility(){if(!(this._headerVisible||this._onScreen)){if(typeof IntersectionObserver!="function"){this._headerVisible=!0;return}this._onScreen=new IntersectionObserver(t=>{var s;t.some(i=>i.isIntersecting)&&((s=this._onScreen)==null||s.disconnect(),this._onScreen=void 0,this._headerVisible=!0)}),this._onScreen.observe(this)}}updated(t){(t.has("_view")||t.has("_config"))&&this.ensureView(),this._view==="drive"&&(t.has("_detail")||t.has("_view")||t.has("_headerVisible"))&&this.syncMap(),t.has("_view")&&this._view!=="drive"&&this.destroyMap(),this.shouldLoadMapChunk()&&this.loadMapModule().catch(()=>{})}render(){var t;return(t=this._config)!=null&&t.entity?d`
      <ha-card>
        ${this.header()}
        <div class=${this._tabsOverflow?"tabbar overflow":"tabbar"}>
          <div class="tabs" role="tablist" data-tabs ${$t(this.watchSize)}>
            ${ct(this.flags).map(s=>this.tab(s,this.text[s]))}
          </div>
        </div>
        ${this._error?d`<p class="message">${this._error}</p>`:u}
        ${this._loading?d`<p class="message">${this.text.loading}</p>`:u}
        ${this.body()}
      </ha-card>
    `:d`<ha-card><p class="message">${this.text.pick}</p></ha-card>`}get dates(){return rs(this.hass)}get cardLang(){return lt(this.dates.language)}get text(){return Xt(this.cardLang)}get readings(){var t,s,i,r;const n=new Map,a=this.hass,o=(t=this._config)==null?void 0:t.entity;if(!a||!o||!a.states[o])return n;const l=(i=(s=a.entities)==null?void 0:s[o])==null?void 0:i.device_id,c=a.states[o].attributes.vin;for(const[p,h]of Object.entries(a.states)){const m=(r=a.entities)==null?void 0:r[p],f=!!(l&&m?.device_id===l),_=!!(c&&h.attributes.vin===c);if(!f&&!_)continue;const x=m?.translation_key||(typeof h.attributes.key=="string"?h.attributes.key:void 0);x&&n.set(x,h)}return n}get deviceId(){var t,s,i;const r=(t=this._config)==null?void 0:t.entity;if(!(!this.hass||!r))return(i=(s=this.hass.entities)==null?void 0:s[r])==null?void 0:i.device_id}numeric(t){var s;const i=(s=this.readings.get(t))==null?void 0:s.state;if(!i||i==="unknown"||i==="unavailable")return null;const r=Number(i);return Number.isFinite(r)?r:null}label(t){var s;const i=(s=this.readings.get(t))==null?void 0:s.state;return!i||i==="unknown"||i==="unavailable"?null:i}header(){var t,s,i,r,n,a;const o=this.numeric("battery_level"),l=o==null?"\u2014":`${Math.round(o)}%`,c=o==null?0:Math.max(0,Math.min(100,o)),p=this.label("activity")||"",h=this.deviceId?(i=(s=(t=this.hass)==null?void 0:t.devices)==null?void 0:s[this.deviceId])==null?void 0:i.name:void 0,m=(a=(n=this.hass)==null?void 0:n.states[((r=this._config)==null?void 0:r.entity)||""])==null?void 0:a.attributes.friendly_name,f=h||(typeof m=="string"?m:this.text.unknown),_=this.label("geofence");return d`
      <div class="header-wrap" data-map-host ${$t(this.watchSize)}>
        ${this.watermark()}
        <div class="header">
          <svg class="ring" viewBox="0 0 36 36" aria-label=${l}>
            <circle class="track" cx="18" cy="18" r="15.5"></circle>
            <circle
              class="value"
              cx="18"
              cy="18"
              r="15.5"
              pathLength="100"
              stroke-dasharray="${c} 100"
            ></circle>
            <text x="18" y="20">${l}</text>
          </svg>
          <div>
            <p class="name">${f}</p>
            ${_?d`<p class="sub">${_}</p>`:u}
            <span class="pill">${is(this.text,p)}</span>
          </div>
        </div>
      </div>
    `}mapEnabled(){var t;return((t=this._config)==null?void 0:t.show_map)!==!1}headerMapReady(){if(!this.mapEnabled())return!1;const t=this.carPosition(),{width:s,height:i}=this._headerBox;return!!(t&&s>=32&&i>=32)}shouldLoadMapChunk(){var t;return this._headerVisible?this._view==="drive"&&(((t=this._detail)==null?void 0:t.route.length)??0)>0?!0:this.headerMapReady():!1}loadMapModule(){return this.mapModule??(this.mapModule=import("./leaflet-DlpW1new.js?v=0.1.14").catch(t=>{throw this.mapModule=void 0,t})),this.mapModule}carPosition(){const t=this.readings.get("location");return $s(t?.attributes.latitude,t?.attributes.longitude)}watermark(){var t,s;if(!this._headerVisible||!this.headerMapReady())return u;const i=this.carPosition();if(!i)return u;const{width:r,height:n}=this._headerBox,a=xs(i.lat,i.lon,r,n),o=!!((s=(t=this.hass)==null?void 0:t.themes)!=null&&s.darkMode);return d`
      <div class=${o?"map-bg dark":"map-bg"} aria-hidden="true">
        ${a.tiles.map(l=>d`
            <img
              alt=""
              width="256"
              height="256"
              src=${l.url}
              referrerpolicy="strict-origin-when-cross-origin"
              style=${`left:${l.left}px;top:${l.top}px`}
              draggable="false"
            />
          `)}
        <span class="map-credit">© OpenStreetMap</span>
      </div>
      <span
        class="map-dot"
        aria-hidden="true"
        style=${`left:${a.dot.left}px;top:${a.dot.top}px`}
      ></span>
    `}tab(t,s){return d`
      <button
        role="tab"
        aria-selected=${this._view===t?"true":"false"}
        @click=${()=>this.open(t)}
      >
        ${s}
      </button>
    `}open(t){this._error="",this._view=t,t!=="drive"&&(this._driveId=void 0,this._detail=void 0)}body(){return this._view==="status"?this.status():this._view==="drives"?this.drives():this._view==="drive"?this.drive():this._view==="charges"?this.charges():this._view==="charts"?this.charts():this.stats()}metric(t,s,i){return d`<div class="metric">
      ${i?d`<ha-icon icon=${i}></ha-icon>`:u}
      <div><span>${t}</span><strong>${s}</strong></div>
    </div>`}quantity(t,s,i){const r=this.numeric(t);return r==null?"\u2014":`${v(r,s,this.cardLang)} ${i}`}get chargingNow(){return(this.label("activity")||"").toLowerCase()==="charging"}status(){const t=this.numeric("battery_level"),s=t==null?"\u2014":`${v(t,0,this.cardLang)} %`;return d`
      <div class="status-board">
        <div class="status-hero">
          ${this.metric(this.text.battery,s)}
          ${this.metric(this.text.range,this.quantity("rated_range",0,"km"),"mdi:map-marker-distance")}
        </div>
        <section>
          <h3 class="group-label">${this.text.drivingGroup}</h3>
          <div class="tiles">
            ${this.metric(this.text.speed,this.quantity("speed",0,"km/h"))}
            ${this.metric(this.text.power,this.quantity("power",1,"kW"))}
            ${this.metric(this.text.odometer,this.quantity("odometer",0,"km"))}
          </div>
        </section>
        <section>
          <h3 class="group-label">${this.text.cabinGroup}</h3>
          <div class="tiles">
            ${this.metric(this.text.inside,this.quantity("inside_temp",1,"\xB0C"))}
            ${this.metric(this.text.outside,this.quantity("outside_temp",1,"\xB0C"))}
          </div>
        </section>
        <section>
          <h3 class="group-label">${this.text.chargeGroup}</h3>
          <div class="tiles">
            ${this.chargingNow?this.metric(this.text.charger,this.quantity("charger_power",1,"kW")):u}
            ${this.chargingNow?this.metric(this.text.added,this.quantity("energy_added",1,"kWh")):u}
            ${this.metric(this.text.limit,this.quantity("charge_limit",0,"%"))}
          </div>
        </section>
      </div>
    `}drives(){const t=this._drives,s=t?.data||[];return d`
      ${this.listToolbar(t)}
      ${this.historyGroups(s,i=>le(i,this.dates),3,i=>this.openDrive(i.id))}
      ${t&&t.data.length===0?d`<p class="message">${this.text.emptyDrives}</p>`:u}
    `}drive(){const t=this._detail,s=xt(t?.energy_used_kwh,t?.distance_km);return d`
      <div class="toolbar">
        <div class="back">
          ${this.iconButton("mdi:arrow-left",this.text.back,!1,()=>this.open("drives"))}
          <button type="button" class="back-label" @click=${()=>this.open("drives")}>
            ${this.text.back}
          </button>
        </div>
        <span class="page-indicator">${t?this.when(t.start_at):""}</span>
      </div>
      ${t?d`
            ${this.routeTitle(t)}
            <div class="grid">
              ${this.metric(this.text.distance,this.km(t.distance_km))}
              ${this.metric(this.text.duration,Q(t.duration_s))}
              ${this.metric(this.text.energy,this.kwh(t.energy_used_kwh))}
              ${this.metric(this.text.efficiency,s==null?"\u2014":`${v(s,0,this.cardLang)} Wh/km`)}
            </div>
            <p class="message">${this.text.map}</p>
            ${t.route.length?d`<div class="map"></div>`:d`<p class="message">${this.text.noRoute}</p>`}
            ${this.chart(this.text.speedChart,t.series,"speed_kmh","km/h")}
            ${this.chart(this.text.elevationChart,t.series,"elevation_m","m")}
            ${this.chart(this.text.batteryChart,t.series,"battery_level","%")}
          `:u}
    `}charges(){const t=this._charges;return d`
      ${this.listToolbar(t)}
      ${this.historyGroups(t?.data||[],s=>ls(s,this.dates),4)}
      ${t&&t.data.length===0?d`<p class="message">${this.text.emptyCharges}</p>`:u}
    `}stats(){const t=this._stats,s=xt(t?.energy_used_kwh,t?.distance_km),i=this._previousKm==null?u:d`<span>${this.text.previousPeriod[this._period]} ${this.km(this._previousKm)}</span>`;return d`
      ${this.periodBar()}
      ${t?d`
            <section class="stats-hero">
              <span>${this.text.distance}</span>
              <strong>${this.km(t.distance_km)}</strong>
              ${i}
            </section>
            <div class="grid">
              ${this.metric(this.text.duration,Q(t.drive_duration_s))}
              ${this.metric(this.text.energy,this.kwh(t.energy_used_kwh))}
              ${this.metric(this.text.efficiency,s==null?"\u2014":`${v(s,0,this.cardLang)} Wh/km`)}
              ${this.metric(this.text.drivesCount,String(t.drive_count))}
              ${this.metric(this.text.chargesCount,String(t.charge_count))}
              ${this.metric(this.text.energyAdded,this.kwh(t.energy_added_kwh))}
            </div>
          `:u}
    `}periodBar(){return d`
      <div class="periods" role="group" aria-label=${this.text.period}>
        ${["week","month","year"].map(t=>d`
            <button
              type="button"
              aria-pressed=${this._period===t?"true":"false"}
              class=${this._period===t?"active":""}
              @click=${()=>this.setPeriod(t)}
            >
              ${this.text[t]}
            </button>
          `)}
      </div>
    `}charts(){const t=this.flags,s=this._series,i=s?.buckets??[],r=i.length?this.selectedBucketIndex(i):-1,n=t.chart_consumption||t.chart_distance||t.chart_energy,a=t.battery_health||t.charging_split||t.vampire_drain||t.consumption_vs_temp;return d`
      ${this.periodBar()}
      ${n&&s&&i.length===0?d`<p class="message">${this.text.emptySeries}</p>`:u}
      ${n&&i.length?d`
            ${this.chartSwitch()}
            <div class="series-list">${this.mainChart(r)}</div>
          `:u}
      ${t.totals&&r>=0?this.bucketTotals(i[r]):u}
      ${a?this.extraCharts(i,r):u}
    `}extraCharts(t,s){const i=this.flags,r=d`
      <div class="series-extra">
        ${i.battery_health&&s>=0?this.seriesFigure("health","line",this.text.batteryHealth,"km",n=>b(n.range_at_100_km),s,!0):u}
        ${i.charging_split&&s>=0?this.acDcFigure(t,s):u}
        ${i.vampire_drain&&s>=0?this.seriesFigure("idle","bar",this.text.idleUse,this.text.perDay,n=>b(n.idle_range_loss_km_per_day),s,!0):u}
        ${i.consumption_vs_temp?this.tempFigure():u}
      </div>
    `;return this._narrow?d`<details class="extras"><summary>${this.text.moreCharts}</summary>${r}</details>`:r}chartChoices(){const t=this.flags,s=[];return t.chart_consumption&&s.push("consumption"),t.chart_distance&&s.push("distance"),t.chart_energy&&s.push("energy"),s}activeChart(){const t=this.chartChoices();return t.includes(this._mainChart)?this._mainChart:t[0]??null}chartSwitch(){const t=this.chartChoices();if(t.length<2)return u;const s=this.activeChart(),i={consumption:this.text.consumptionChart,distance:this.text.distance,energy:this.text.chargedChart};return d`
      <div class="periods" role="group" aria-label=${this.text.charts}>
        ${t.map(r=>d`
            <button
              type="button"
              aria-pressed=${s===r?"true":"false"}
              class=${s===r?"active":""}
              @click=${()=>{this._mainChart=r}}
            >
              ${i[r]}
            </button>
          `)}
      </div>
    `}mainChart(t){const s=this.activeChart();return s==="distance"?this.seriesFigure("distance","bar",this.text.distance,"km",i=>b(i.distance_km),t):s==="energy"?this.seriesFigure("energy","bar",this.text.chargedChart,"kWh",i=>b(i.energy_charged_kwh),t):s==="consumption"?this.seriesFigure("consumption","line",this.text.consumptionChart,"Wh/km",i=>b(i.wh_per_km),t):u}selectedBucketIndex(t){return this._bucketIndex!=null&&this._bucketIndex>=0&&this._bucketIndex<t.length?this._bucketIndex:ue(t.map(s=>s.start),this._period)}selectBucket(t){this._bucketIndex=t}bucketHeading(t){return ce(t.start,this._period)?this._period==="week"?this.text.thisWeek:this._period==="month"?this.text.thisMonth:this.text.thisYear:bt(t.start,this._period,this.dates)}bucketTotals(t){const s=b(t.energy_used_kwh);return d`
      <section class="totals" aria-live="polite">
        <h3 class="totals-label">${this.bucketHeading(t)}</h3>
        <div class="totals-row">
          <div>
            <span>${this.text.distance}</span>
            <strong>${this.km(t.distance_km)}</strong>
          </div>
          <div>
            <span>${this.text.duration}</span>
            <strong>${Q(t.drive_duration_s)}</strong>
          </div>
          <div>
            <span>${this.text.chargedChart}</span>
            <strong>${this.kwh(t.energy_charged_kwh)}</strong>
            ${s==null?u:d`<span class="totals-sub">${this.text.consumed} ${this.kwh(s)}</span>`}
          </div>
        </div>
      </section>
    `}seriesFigure(t,s,i,r,n,a,o=!1){var l;const c=((l=this._series)==null?void 0:l.buckets)??[],p=r==="Wh/km"?0:1,h=c.map(st=>{const E=n(st),O=bt(st.start,this._period,this.dates),dt=E==null?"\u2014":`${v(E,p,this.cardLang)} ${r}`;return{label:O,value:E,title:`${O} \xB7 ${dt}`}}),m=this.chartFocus(h,a,o),f=m.point,_=o||m.index===a?this.bucketHeading(c[Math.max(0,a)]):f?.label??"",x=f?.value==null?"\u2014":`${v(f.value,p,this.cardLang)} ${r}`,A=`${i}. ${_} \xB7 ${x}`;return d`
      <figure class=${o?"series-card compact":"series-card"}>
        <figcaption>
          <span class="series-title">${i}</span>
          <span class="series-value">${_} · ${x}</span>
        </figcaption>
        ${this.drawSeries(t,h,s,A,a,o)}
      </figure>
    `}acDcFigure(t,s){const i=t[s],r=b(i?.dc_share_pct),n=b(i?.charge_cost),a=b(i?.cost_per_km),o=t.map(c=>{const p=bt(c.start,this._period,this.dates),h=b(c.ac_energy_kwh),m=b(c.dc_energy_kwh),f=h==null?"\u2014":`${v(h,1,this.cardLang)} kWh`,_=m==null?"\u2014":`${v(m,1,this.cardLang)} kWh`;return{label:p,value:h,stack:m,title:`${p} \xB7 AC ${f} \xB7 DC ${_}`}}),l=`${this.text.acDc}. ${this.bucketHeading(i)}`;return d`
      <figure class="series-card compact">
        <figcaption>
          <span class="series-title">${this.text.acDc}</span>
        </figcaption>
        <p class="series-note">${this.chargeNote(r,n,a)}</p>
        <p class="legend">
          <span><i class="swatch ac" aria-hidden="true"></i>AC</span>
          <span><i class="swatch dc" aria-hidden="true"></i>DC</span>
        </p>
        ${this.drawSeries("acdc",o,"stack",l,s,!0)}
      </figure>
    `}tempFigure(){const t=(this._tempBins??[]).map(s=>{const i=s.temp_c_bucket,r=`${v(i,0,this.cardLang)}\u2013${v(i+5,0,this.cardLang)}\xB0`,n=b(s.wh_per_km),a=b(s.distance_km),o=n==null?"\u2014":`${v(n,0,this.cardLang)} Wh/km`,l=a==null?"":` \xB7 ${v(a,0,this.cardLang)} km`;return{label:r,value:n,title:`${r} \xB7 ${o}${l}`}});return d`
      <figure class="series-card compact">
        <figcaption>
          <span class="series-title">${this.text.tempUse}</span>
        </figcaption>
        ${t.length?this.drawSeries("temp",t,"bar",this.text.tempUse,-1,!0,!1):d`<p class="message">${this.text.emptySeries}</p>`}
      </figure>
    `}drawSeries(t,s,i,r,n,a,o=!0){const l=c=>v(c,c>=10||c===0?0:1,this.cardLang);return d`
      <div class="plot" data-plot=${t} ${$t(this.watchSize)}>
        ${vs(s,i,r,l,{width:this._plotWidths[t],compact:a,selected:n,onSelect:o?c=>this.selectBucket(c):void 0})}
      </div>
    `}chart(t,s,i,r){const n=fs(s,i);if(n.length<2)return u;const a=Math.min(...n),o=Math.max(...n),l=`${v(a,0,this.cardLang)}\u2013${v(o,0,this.cardLang)} ${r}`;return d`
      <div class="chart-block">
        <span class="muted">${t} · ${l}</span>
        ${_s(n)}
      </div>
    `}listToolbar(t){const s=t?.page??this._page,i=t&&t.per_page>0?Math.ceil(t.total/t.per_page):1;return d`
      <div class="toolbar list-toolbar">
        <div class="toolbar-actions">
          ${this.iconButton("mdi:chevron-left",this.text.previous,!t||s<=1,()=>this.setPage(s-1))}
          ${this.iconButton("mdi:chevron-right",this.text.next,!t||s>=i,()=>this.setPage(s+1))}
          ${this.iconButton("mdi:refresh",this.text.refresh,!1,()=>this.reload())}
        </div>
        <span class="page-indicator">${this.pageIndicator(t)}</span>
      </div>
    `}pageIndicator(t){if(!t||t.total<=0||t.per_page<=0||t.total<=t.per_page)return`${this.text.page} ${t?.page??this._page}`;const s=(t.page-1)*t.per_page+1,i=Math.min(t.page*t.per_page,t.total);return`${s}\u2013${i}`}iconButton(t,s,i,r){return d`
      <ha-icon-button
        .label=${s}
        aria-label=${s}
        title=${s}
        ?disabled=${i}
        @click=${()=>{i||r()}}
      >
        <ha-icon icon=${t}></ha-icon>
      </ha-icon-button>
    `}chartFocus(t,s,i){var r,n;if(i||((r=t[s])==null?void 0:r.value)!=null)return{point:t[s],index:s};for(let a=s-1;a>=0;a-=1)if(((n=t[a])==null?void 0:n.value)!=null)return{point:t[a],index:a};return{point:t[s],index:s}}chargeNote(t,s,i){const r=[];return t!=null&&r.push(`${v(t,0,this.cardLang)} % ${this.text.fastShare}`),s!=null&&r.push(`${this.text.cost} ${v(s,2,this.cardLang)}`),i!=null&&r.push(`${v(i,2,this.cardLang)} ${this.text.perKm}`),r.join(" \xB7 ")}historyGroups(t,s,i,r){const n=[];for(const a of t){const o=s(a),l=n[n.length-1];l&&l.key===o.dayKey?l.items.push(a):n.push({key:o.dayKey,label:o.dayLabel,items:[a]})}return d`
      ${n.map(a=>d`
          <section class="day-group">
            <h3 class="day-heading">${a.label}</h3>
            <ul class="list" data-slots=${String(i)}>
              ${a.items.map(o=>this.historyRow(s(o),r?()=>r(o):void 0))}
            </ul>
          </section>
        `)}
    `}routeTitle(t){const s=le(t,this.dates);return s.place?d`<p class="route-name">${this.placeBody(s)}</p>`:u}placeBody(t){return t.ends?d`<span class="entry-place route" title=${t.place??""} aria-label=${t.place??u}
      ><span class="place-point">${t.ends[0]}</span
      ><span class="place-join" aria-hidden="true">→</span
      ><span class="place-point">${t.ends[1]}</span></span
    >`:t.place??""}historyRow(t,s){const i=d`<span class="entry-line"
        ><time class="entry-when" datetime=${t.datetime} title=${t.when} aria-label=${t.when}
          >${t.clock}</time
        ><strong class="entry-figure">${t.figure??"\u2014"}</strong></span
      ><span class="entry-line entry-secondary"
        ><span
          class=${t.ends?"entry-place route":"entry-place"}
          title=${t.place??""}
          aria-label=${t.place??u}
          >${t.ends?d`<span class="place-point">${t.ends[0]}</span
                ><span class="place-join" aria-hidden="true">→</span
                ><span class="place-point">${t.ends[1]}</span>`:t.place??""}</span
        ><span class="entry-metrics" title=${t.detail}
          >${t.slots.map(r=>r?d`<span class="chip">${r}</span>`:d`<span class="chip" aria-hidden="true"></span>`)}</span
        ></span
      >`;return s?d`
        <li>
          <button type="button" class="entry" @click=${s}>${i}</button>
        </li>
      `:d`<li><div class="entry">${i}</div></li>`}km(t){return t==null?"\u2014":`${v(t,1,this.cardLang)} km`}kwh(t){return t==null?"\u2014":`${v(t,1,this.cardLang)} kWh`}when(t){return as(t,this.dates)}openDrive(t){this._driveId=t,this._detail=void 0,this._view="drive"}setPeriod(t){if(this._period=t,this._bucketIndex=null,this._view==="charts"){this.loadSeries();return}this._stats=void 0,this._previousKm=null,this.loadStats()}setPage(t){this._page=t,this._view==="drives"?(this._drives=void 0,this.loadDrives()):this._view==="charges"&&(this._charges=void 0,this.loadCharges())}reload(){this.clearHistory(),this.ensureView()}clearHistory(){this._drives=void 0,this._charges=void 0,this._detail=void 0,this._stats=void 0,this._series=void 0,this._tempBins=void 0,this._seriesPeriod=void 0,this._bucketIndex=null,this._page=1,this._error=""}async ensureView(){this._view==="drives"&&this.flags.drives&&!this._drives?await this.loadDrives():this._view==="charges"&&this.flags.charges&&!this._charges?await this.loadCharges():this._view==="stats"&&!this._stats?await this.loadStats():this._view==="charts"&&kt(this.flags)&&this.seriesStale()?await this.loadSeries():this._view==="drive"&&this.flags.drives&&this._driveId!=null&&!this._detail&&await this.loadDrive()}async loadDrives(){await this.load("drives",async()=>{const t=await this.call("get_drives",{page:this._page,per_page:ye});if(!_e(t))throw new Error(this.text.failed);this._drives=t})}async loadCharges(){await this.load("charges",async()=>{const t=await this.call("get_charges",{page:this._page,per_page:ye});if(!_e(t))throw new Error(this.text.failed);this._charges=t})}async loadDrive(){const t=this._driveId;t!=null&&await this.load("drive",async()=>{const s=await this.call("get_drive",{drive_id:t,max_points:300});if(!ks(s))throw new Error(this.text.failed);this._detail=s})}seriesStale(){const t=this.flags;return!!(this._seriesPeriod!==this._period||fe(t)&&!this._series||t.consumption_vs_temp&&!this._tempBins)}async loadSeries(){const t=this.flags;if(!kt(t))return;const s=this._period,i=fe(t),r=t.consumption_vs_temp;i&&(this._series=void 0),r&&(this._tempBins=void 0),await this.load("charts",async()=>{const n=de[s];if(i){const a=await this.call("get_stats_series",{period:s,count:n});if(!$e(a))throw new Error(this.text.failed);this._series=a}if(r)try{this._tempBins=Cs(await this.call("get_consumption_by_temp",{period:s,count:n}))}catch{this._tempBins=[]}this._seriesPeriod=s})}async loadStats(){const t=this._period;await this.load("stats",async()=>{const s=hs(t),i=await this.call("get_stats",s);if(!As(i))throw new Error(this.text.failed);this._stats=i,this._previousKm=null;try{const r=await this.call("get_stats_series",{period:t,count:de[t]});$e(r)&&(this._previousKm=ms(r.buckets,t))}catch{this._previousKm=null}})}async load(t,s){if(!this.deviceId){this._error=this.text.missingDevice;return}this._loading=!0,this._error="";try{if(await s(),this._view!==t&&t!=="drive")return}catch(i){this._error=ds(i,this.text.failed)}finally{this._loading=!1}}async call(t,s){if(!this.hass||!this.deviceId)throw new Error(this.text.missingDevice);const i=await this.hass.callService("tesla_logger",t,{device_id:this.deviceId,...s},void 0,!1,!0),r=L(i);return r&&"response"in r?r.response:i}syncMap(){var t,s,i;const r=this.renderRoot.querySelector(".map"),n=((t=this._detail)==null?void 0:t.route)??[];if(!r||n.length===0){this.destroyMap();return}if(!this._headerVisible)return;const a=++this.mapToken,o=!!((i=(s=this.hass)==null?void 0:s.themes)!=null&&i.darkMode),l=getComputedStyle(this).getPropertyValue("--primary-color").trim()||"#03a9f4";this.loadMapModule().then(c=>{a!==this.mapToken||!this.isConnected||this.renderRoot.querySelector(".map")!==r||(this.routeMap=c.mountRoute(this.routeMap,r,n,o,l))}).catch(()=>{})}destroyMap(){this.mapToken+=1;const t=this.routeMap;this.routeMap=void 0,t?.destroy()}};At.properties={hass:{attribute:!1},_config:{state:!0},_view:{state:!0},_drives:{state:!0},_charges:{state:!0},_detail:{state:!0},_stats:{state:!0},_series:{state:!0},_tempBins:{state:!0},_bucketIndex:{state:!0},_period:{state:!0},_page:{state:!0},_loading:{state:!0},_error:{state:!0},_plotWidths:{state:!0},_headerBox:{state:!0},_headerVisible:{state:!0},_mainChart:{state:!0},_previousKm:{state:!0},_narrow:{state:!0},_tabsOverflow:{state:!0}},At.styles=De`
      :host {
        display: block;
      }
      ha-card {
        padding-bottom: 8px;
      }
      .header-wrap {
        position: relative;
        overflow: hidden;
      }
      .header {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: 72px 1fr;
        gap: 12px;
        align-items: center;
        padding: 16px 16px 8px;
      }
      .map-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
        overflow: hidden;
        pointer-events: none;
        user-select: none;
      }
      .map-bg img {
        position: absolute;
        width: 256px;
        height: 256px;
        filter: grayscale(1);
        opacity: 0.22;
        pointer-events: none;
      }
      .map-bg.dark img {
        filter: invert(1) hue-rotate(180deg) grayscale(1) brightness(0.85);
        opacity: 0.2;
      }
      .map-dot {
        position: absolute;
        z-index: 2;
        width: 8px;
        height: 8px;
        margin-left: -4px;
        margin-top: -4px;
        border-radius: 50%;
        background: #c62828;
        box-shadow: 0 0 0 1.5px #fff;
      }
      .map-credit {
        position: absolute;
        right: 8px;
        bottom: 4px;
        color: var(--secondary-text-color, #666);
        font-size: 9px;
        line-height: 1;
      }
      .ring {
        width: 72px;
        height: 72px;
      }
      .ring circle {
        fill: none;
        stroke-width: 3.5;
      }
      .ring .track {
        stroke: var(--divider-color, rgba(127, 127, 127, 0.35));
      }
      .ring .value {
        stroke: var(--primary-color, #03a9f4);
        stroke-linecap: round;
        transform: rotate(-90deg);
        transform-origin: 18px 18px;
      }
      .ring text {
        fill: var(--primary-text-color, #212121);
        font-size: 6.5px;
        text-anchor: middle;
        font-weight: 600;
      }
      .name {
        margin: 0;
        font-size: 1.15rem;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      .sub {
        margin: 2px 0 0;
        color: var(--secondary-text-color);
        font-size: 0.92rem;
      }
      .pill {
        display: inline-block;
        margin-top: 6px;
        padding: 2px 8px;
        border-radius: 999px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
        color: var(--primary-text-color);
        font-size: 0.78rem;
        letter-spacing: 0.02em;
      }
      .tabbar {
        position: relative;
      }
      .tabbar.overflow::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 18px;
        pointer-events: none;
        background: linear-gradient(
          90deg,
          transparent,
          var(--card-background-color, var(--ha-card-background, #fff))
        );
      }
      .tabs, .periods, .pager {
        display: flex;
        gap: 6px;
        overflow-x: auto;
        padding: 4px 12px 8px;
      }
      button {
        border: 0;
        background: transparent;
        color: var(--secondary-text-color);
        font: inherit;
        min-height: 40px;
        padding: 8px 10px;
        border-bottom: 2px solid transparent;
        cursor: pointer;
      }
      button[aria-selected="true"], button.active {
        color: var(--primary-text-color);
        border-bottom-color: var(--primary-color, #03a9f4);
      }
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        padding: 0 12px 8px;
      }
      .metric {
        display: flex;
        align-items: center;
        gap: 10px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        border-radius: 12px;
        padding: 10px 12px;
      }
      .metric ha-icon {
        flex: none;
        --mdc-icon-size: 22px;
        color: var(--primary-color, #03a9f4);
      }
      .metric span, .muted {
        display: block;
        color: var(--secondary-text-color);
        font-size: 0.78rem;
      }
      .metric strong {
        color: var(--primary-text-color);
        font-size: 1rem;
        font-variant-numeric: tabular-nums;
      }
      .status-board {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 0 12px 8px;
      }
      .status-hero,
      .tiles {
        display: grid;
        gap: 8px;
      }
      .status-hero {
        grid-template-columns: 1fr 1fr;
      }
      .tiles {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .group-label {
        margin: 0 0 6px;
        color: var(--secondary-text-color);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      .stats-hero {
        margin: 0 12px 8px;
        padding: 12px 14px;
        border-radius: 12px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
      }
      .stats-hero span {
        display: block;
        color: var(--secondary-text-color);
        font-size: 0.78rem;
      }
      .stats-hero strong {
        display: block;
        color: var(--primary-text-color);
        font-size: 1.55rem;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
        line-height: 1.2;
      }
      .day-heading {
        margin: 10px 12px 0;
        color: var(--secondary-text-color);
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      .route-name {
        margin: 0 16px 8px;
        min-width: 0;
        color: var(--primary-text-color);
        font-weight: 600;
      }
      details.extras {
        margin: 0 12px 8px;
      }
      details.extras summary {
        display: flex;
        align-items: center;
        min-height: 40px;
        color: var(--primary-text-color);
        font-weight: 600;
        cursor: pointer;
      }
      details.extras summary:focus-visible {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: 2px;
      }
      details.extras .series-extra {
        padding: 0;
      }
      .list {
        display: flex;
        flex-direction: column;
        gap: 0;
        box-sizing: border-box;
        width: 100%;
        margin: 0;
        padding: 0 12px 4px;
        list-style: none;
      }
      .entry {
        display: flex;
        flex-direction: column;
        gap: 4px;
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        max-width: 100%;
        min-height: 44px;
        margin: 0;
        padding: 10px 2px;
        border: 0;
        border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.35));
        border-radius: 0;
        background: transparent;
        color: var(--primary-text-color, #212121);
        text-align: left;
      }
      .entry-line {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        column-gap: 10px;
        align-items: center;
        min-width: 0;
        max-width: 100%;
      }
      .entry-when {
        min-width: 0;
        overflow: hidden;
        color: var(--primary-text-color, #212121);
        font-size: 0.95rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        line-height: 1.25;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .entry-figure {
        color: var(--primary-text-color, #212121);
        font-size: 1.05rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        line-height: 1.25;
        text-align: right;
        white-space: nowrap;
      }
      .entry-place {
        display: block;
        min-width: 0;
        overflow: hidden;
        color: var(--secondary-text-color, #727272);
        font-size: 0.8rem;
        font-weight: 500;
        line-height: 1.3;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .entry-place.route {
        display: flex;
        align-items: baseline;
        gap: 0.35em;
      }
      .place-point {
        flex: 0 1 auto;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .place-join {
        flex: none;
      }
      .entry-metrics {
        display: grid;
        align-items: center;
        justify-content: end;
        min-width: 0;
        column-gap: 6px;
        color: var(--primary-text-color, #212121);
        font-size: 0.72rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        line-height: 1.2;
      }
      .list[data-slots="3"] .entry-metrics {
        grid-template-columns: 12ch 12ch 13ch;
      }
      .list[data-slots="4"] .entry-metrics {
        grid-template-columns: 12ch 13ch 8ch 4.5ch;
      }
      .chip {
        min-width: 0;
        overflow: hidden;
        text-align: right;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .chip:not(:empty) {
        padding: 2px 6px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--primary-text-color, #212121) 8%, transparent);
      }
      button.entry {
        font: inherit;
        width: 100%;
        min-height: 44px;
        border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.35));
        cursor: pointer;
      }
      button.entry:hover {
        background: color-mix(
          in srgb,
          var(--primary-text-color, #212121) 8%,
          var(--secondary-background-color, transparent)
        );
      }
      button.entry:focus-visible,
      ha-icon-button:focus-visible {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: 2px;
      }
      .map {
        height: 220px;
        margin: 0 12px 8px;
        border-radius: 12px;
        overflow: hidden;
        background: var(--secondary-background-color);
      }
      .chart-block {
        padding: 0 12px 8px;
      }
      .chart {
        width: 100%;
        height: 90px;
        display: block;
      }
      .chart polyline {
        fill: none;
        stroke: var(--primary-color, #03a9f4);
        stroke-width: 2;
      }
      .series-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 0 12px 8px;
      }
      .series-card {
        margin: 0;
        padding: 8px 8px 2px;
        border-radius: 12px;
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
      }
      .series-card figcaption {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 8px;
        padding: 0 4px 2px;
      }
      .series-title {
        color: var(--primary-text-color, #212121);
        font-size: 0.92rem;
        font-weight: 700;
      }
      .series-value {
        color: var(--secondary-text-color);
        font-size: 0.8rem;
      }
      .plot {
        width: 100%;
        min-width: 0;
      }
      .series-chart {
        width: 100%;
        display: block;
      }
      .series-chart .grid {
        stroke: var(--divider-color, rgba(127, 127, 127, 0.45));
        stroke-width: 1;
      }
      .series-chart g[role="button"] {
        cursor: pointer;
      }
      .series-chart .bar {
        fill: var(--primary-color, #03a9f4);
        opacity: 0.62;
      }
      .series-chart g.selected .bar,
      .series-chart g[role="button"]:focus-visible .bar {
        opacity: 1;
        stroke: var(--primary-text-color, #212121);
        stroke-width: 1.5;
      }
      .series-chart .hit {
        fill: transparent;
      }
      .series-chart .line {
        fill: none;
        stroke: var(--primary-color, #03a9f4);
        stroke-width: 2;
        stroke-linejoin: round;
        stroke-linecap: round;
        vector-effect: non-scaling-stroke;
      }
      .series-chart .grid,
      .series-chart .dot,
      .series-chart .bar {
        vector-effect: non-scaling-stroke;
      }
      .series-chart .dot {
        fill: var(--primary-color, #03a9f4);
        stroke: var(--card-background-color, #fff);
        stroke-width: 1;
        opacity: 0.75;
      }
      .series-chart g.selected .dot,
      .series-chart g[role="button"]:focus-visible .dot {
        opacity: 1;
        stroke: var(--primary-text-color, #212121);
        stroke-width: 2;
      }
      .totals {
        margin: 0 12px 8px;
        padding: 8px 10px;
        border-radius: 12px;
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
      }
      .totals-label {
        margin: 0 0 6px;
        color: var(--primary-text-color, #212121);
        font-size: 0.92rem;
        font-weight: 700;
      }
      .totals-row {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
      }
      .totals-row span {
        display: block;
        color: var(--secondary-text-color);
        font-size: 0.75rem;
      }
      .totals-row strong {
        display: block;
        color: var(--primary-text-color, #212121);
        font-size: 0.95rem;
      }
      .totals-sub {
        margin-top: 2px;
      }
      .series-extra {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        padding: 0 12px 8px;
      }
      .series-card.compact {
        padding: 6px 6px 0;
      }
      .series-card.compact .series-title {
        font-size: 0.82rem;
      }
      .series-note {
        margin: 0;
        padding: 0 4px 2px;
        color: var(--secondary-text-color);
        font-size: 0.75rem;
      }
      .legend {
        display: flex;
        gap: 8px;
        align-items: center;
        margin: 0;
        padding: 0 4px 2px;
        color: var(--secondary-text-color);
        font-size: 0.72rem;
      }
      .swatch {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 3px;
        border-radius: 2px;
      }
      .swatch.ac {
        background: var(--primary-color, #03a9f4);
      }
      .swatch.dc {
        background: var(--accent-color, #ff9800);
      }
      .series-chart .bar.ac {
        fill: var(--primary-color, #03a9f4);
      }
      .series-chart .bar.dc {
        fill: var(--accent-color, #ff9800);
      }
      .series-chart.compact text {
        font-size: 12px;
      }
      .series-chart text {
        fill: var(--secondary-text-color, currentColor);
        font-size: 11px;
        font-family: inherit;
      }
      .message, .toolbar {
        padding: 4px 16px 8px;
        color: var(--secondary-text-color);
      }
      .toolbar {
        display: flex;
        align-items: center;
        gap: 4px;
        box-sizing: border-box;
        width: 100%;
      }
      .toolbar-actions,
      .back {
        display: flex;
        align-items: center;
        min-width: 0;
      }
      .page-indicator {
        margin-left: auto;
        color: var(--secondary-text-color);
        font-size: 0.85rem;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      ha-icon-button {
        width: 40px;
        height: 40px;
        --mdc-icon-button-size: 40px;
        --mdc-icon-size: 22px;
        color: var(--primary-text-color);
      }
      ha-icon-button[disabled] {
        color: var(--disabled-text-color, var(--secondary-text-color));
        opacity: 0.4;
      }
      button.back-label {
        min-height: 0;
        margin: 0;
        padding: 0 4px 0 0;
        border-bottom: 0;
        color: var(--primary-text-color);
        font-size: 0.92rem;
        font-weight: 600;
      }
      @media (max-width: 420px) {
        .header {
          grid-template-columns: 64px 1fr;
        }
        .tabs {
          gap: 0;
          padding: 4px 4px 8px;
        }
        .tabs button,
        .periods button {
          padding: 8px 6px;
          font-size: 0.82rem;
          white-space: nowrap;
        }
        .tiles {
          grid-template-columns: 1fr 1fr;
        }
        .list {
          gap: 0;
          padding: 0 8px 4px;
        }
        .entry {
          padding: 10px 0;
        }
        .entry-when {
          font-size: 0.84rem;
        }
        .entry-figure {
          font-size: 0.98rem;
        }
        .entry-secondary {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          row-gap: 3px;
        }
        .entry-metrics {
          width: 100%;
          font-size: 0.7rem;
        }
        .chip:not(:empty) {
          padding: 1px 2px;
        }
        .list[data-slots="3"] .entry-metrics {
          column-gap: 4px;
          grid-template-columns: 12ch 13ch 13ch;
        }
        .list[data-slots="4"] .entry-metrics {
          column-gap: 4px;
          grid-template-columns: 12ch 13ch 8ch 4.5ch;
        }
        .totals-row {
          gap: 4px;
        }
        .totals-row strong {
          font-size: 0.85rem;
        }
        .series-extra {
          grid-template-columns: 1fr;
        }
      }
    `;let xe=At;function Ss(e,t){const s=e.split(".").pop()??e;return s==="entity"?t.entity:s==="default_view"?t.defaultView:s==="show"?t.viewsGroup:s==="show_charts"?t.charts:s==="show_map"?t.showMap:s in t.showFields?t.showFields[s]:e}function be(e,t){return{name:e,type:"grid",column_min_width:"200px",schema:t.map(s=>({name:s,selector:{boolean:{}}}))}}function Ms(e){return[{name:"entity",required:!0,selector:{entity:{integration:"tesla_logger"}}},{name:"show_map",selector:{boolean:{}}},{name:"default_view",selector:{select:{options:[{value:"status",label:e.status},{value:"drives",label:e.drives},{value:"charges",label:e.charges},{value:"stats",label:e.stats},{value:"charts",label:e.charts}]}}},be("show",me),be("show_charts",ve)]}const we=class extends B{setConfig(t){this._config={...t,show_map:t.show_map!==!1,show:ht(t)}}render(){var t;if(!this.hass||!this._config)return u;const s=Xt(lt(((t=this.hass.locale)==null?void 0:t.language)||this.hass.language)),i=ht(this._config),r={...this._config,show:Object.fromEntries(me.map(n=>[n,i[n]])),show_charts:Object.fromEntries(ve.map(n=>[n,i[n]]))};return d`
      <ha-form
        .hass=${this.hass}
        .data=${r}
        .schema=${Ms(s)}
        .computeLabel=${n=>Ss(n.name,s)}
        @value-changed=${n=>{var a;const o=n.detail.value,l=ht({entity:((a=this._config)==null?void 0:a.entity)||"",show:{...i,...o.show,...o.show_charts}}),c={...this._config,...o,show:l};delete c.show_charts,this._config=c,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
      ></ha-form>
    `}};we.properties={hass:{attribute:!1},_config:{state:!0}};let ke=we;customElements.get("tesla-logger-card-impl")||customElements.define("tesla-logger-card-impl",xe),customElements.get("tesla-logger-card-editor-impl")||customElements.define("tesla-logger-card-editor-impl",ke);export{xe as TeslaLoggerCard,ke as TeslaLoggerCardEditor};
