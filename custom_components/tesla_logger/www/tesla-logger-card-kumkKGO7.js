/* Tesla Logger Lovelace card. Built from frontend/. Do not edit. */
import{G as pt}from"./tesla-logger-ui-CmIwhtNr.js?v=0.3.1";const G=globalThis,ee=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol(),ke=new WeakMap;let Ce=class{constructor(i,e,t){if(this._$cssResult$=!0,t!==te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=e}get styleSheet(){let i=this.o;const e=this.t;if(ee&&i===void 0){const t=e!==void 0&&e.length===1;t&&(i=ke.get(e)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),t&&ke.set(e,i))}return i}toString(){return this.cssText}};const gt=i=>new Ce(typeof i=="string"?i:i+"",void 0,te),xe=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((a,r,s)=>a+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new Ce(t,i,te)},mt=(i,e)=>{if(ee)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const a=document.createElement("style"),r=G.litNonce;r!==void 0&&a.setAttribute("nonce",r),a.textContent=t.cssText,i.appendChild(a)}},Ae=ee?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return gt(t)})(i):i;const{is:vt,defineProperty:_t,getOwnPropertyDescriptor:ft,getOwnPropertyNames:yt,getOwnPropertySymbols:bt,getPrototypeOf:$t}=Object,S=globalThis,Se=S.trustedTypes,wt=Se?Se.emptyScript:"",De=S.reactiveElementPolyfillSupport,O=(i,e)=>i,ie={toAttribute(i,e){switch(e){case Boolean:i=i?wt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Ee=(i,e)=>!vt(i,e),Te={attribute:!0,type:String,converter:ie,reflect:!1,useDefault:!1,hasChanged:Ee};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);let D=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??(this.l=[])).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,e=Te){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(i,e),!e.noAccessor){const t=Symbol(),a=this.getPropertyDescriptor(i,t,e);a!==void 0&&_t(this.prototype,i,a)}}static getPropertyDescriptor(i,e,t){const{get:a,set:r}=ft(this.prototype,i)??{get(){return this[e]},set(s){this[e]=s}};return{get:a,set(s){const n=a?.call(this);r?.call(this,s),this.requestUpdate(i,n,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??Te}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const i=$t(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const e=this.properties,t=[...yt(e),...bt(e)];for(const a of t)this.createProperty(a,e[a])}const i=this[Symbol.metadata];if(i!==null){const e=litPropertyMetadata.get(i);if(e!==void 0)for(const[t,a]of e)this.elementProperties.set(t,a)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const a=this._$Eu(e,t);a!==void 0&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const e=[];if(Array.isArray(i)){const t=new Set(i.flat(1/0).reverse());for(const a of t)e.unshift(Ae(a))}else i!==void 0&&e.push(Ae(i));return e}static _$Eu(i,e){const t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(e=>e(this))}addController(i){var e;(this._$EO??(this._$EO=new Set)).add(i),this.renderRoot!==void 0&&this.isConnected&&((e=i.hostConnected)==null||e.call(i))}removeController(i){var e;(e=this._$EO)==null||e.delete(i)}_$E_(){const i=new Map,e=this.constructor.elementProperties;for(const t of e.keys())this.hasOwnProperty(t)&&(i.set(t,this[t]),delete this[t]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mt(i,this.constructor.elementStyles),i}connectedCallback(){var i;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$EO)==null||i.forEach(e=>{var t;return(t=e.hostConnected)==null?void 0:t.call(e)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(e=>{var t;return(t=e.hostDisconnected)==null?void 0:t.call(e)})}attributeChangedCallback(i,e,t){this._$AK(i,t)}_$ET(i,e){var t;const a=this.constructor.elementProperties.get(i),r=this.constructor._$Eu(i,a);if(r!==void 0&&a.reflect===!0){const s=(((t=a.converter)==null?void 0:t.toAttribute)!==void 0?a.converter:ie).toAttribute(e,a.type);this._$Em=i,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(i,e){var t,a;const r=this.constructor,s=r._$Eh.get(i);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),o=typeof n.converter=="function"?{fromAttribute:n.converter}:((t=n.converter)==null?void 0:t.fromAttribute)!==void 0?n.converter:ie;this._$Em=s;const l=o.fromAttribute(e,n.type);this[s]=l??((a=this._$Ej)==null?void 0:a.get(s))??l,this._$Em=null}}requestUpdate(i,e,t,a=!1,r){var s;if(i!==void 0){const n=this.constructor;if(a===!1&&(r=this[i]),t??(t=n.getPropertyOptions(i)),!((t.hasChanged??Ee)(r,e)||t.useDefault&&t.reflect&&r===((s=this._$Ej)==null?void 0:s.get(i))&&!this.hasAttribute(n._$Eu(i,t))))return;this.C(i,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,e,{useDefault:t,reflect:a,wrapped:r},s){t&&!(this._$Ej??(this._$Ej=new Map)).has(i)&&(this._$Ej.set(i,s??e??this[i]),r!==!0||s!==void 0)||(this._$AL.has(i)||(this.hasUpdated||t||(e=void 0),this._$AL.set(i,e)),a===!0&&this._$Em!==i&&(this._$Eq??(this._$Eq=new Set)).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[r,s]of a){const{wrapped:n}=s,o=this[r];n!==!0||this._$AL.has(r)||o===void 0||this.C(r,void 0,s,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(a=>{var r;return(r=a.hostUpdate)==null?void 0:r.call(a)}),this.update(t)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(t)}willUpdate(i){}_$AE(i){var e;(e=this._$EO)==null||e.forEach(t=>{var a;return(a=t.hostUpdated)==null?void 0:a.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(i){}firstUpdated(i){}};D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[O("elementProperties")]=new Map,D[O("finalized")]=new Map,De?.({ReactiveElement:D}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.1.2");const q=globalThis,Pe=i=>i,K=q.trustedTypes,Me=K?K.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ne="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,Ie="?"+y,kt=`<${Ie}>`,$=document,F=()=>$.createComment(""),j=i=>i===null||typeof i!="object"&&typeof i!="function",ae=Array.isArray,Ct=i=>ae(i)||typeof i?.[Symbol.iterator]=="function",re=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ue=/-->/g,Le=/>/g,w=RegExp(`>|${re}(?:([^\\s"'>=/]+)(${re}*=${re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Re=/'/g,Oe=/"/g,Fe=/^(?:script|style|textarea|title)$/i,xt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),d=xt(1),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),je=new WeakMap,k=$.createTreeWalker($,129);function ze(i,e){if(!ae(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Me!==void 0?Me.createHTML(e):e}const At=(i,e)=>{const t=i.length-1,a=[];let r,s=e===2?"<svg>":e===3?"<math>":"",n=z;for(let o=0;o<t;o++){const l=i[o];let h,c,u=-1,g=0;for(;g<l.length&&(n.lastIndex=g,c=n.exec(l),c!==null);)g=n.lastIndex,n===z?c[1]==="!--"?n=Ue:c[1]!==void 0?n=Le:c[2]!==void 0?(Fe.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=w):c[3]!==void 0&&(n=w):n===w?c[0]===">"?(n=r??z,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,h=c[1],n=c[3]===void 0?w:c[3]==='"'?Oe:Re):n===Oe||n===Re?n=w:n===Ue||n===Le?n=z:(n=w,r=void 0);const m=n===w&&i[o+1].startsWith("/>")?" ":"";s+=n===z?l+kt:u>=0?(a.push(h),l.slice(0,u)+Ne+l.slice(u)+y+m):l+y+(u===-2?o:m)}return[ze(i,s+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]};class Z{constructor({strings:e,_$litType$:t},a){let r;this.parts=[];let s=0,n=0;const o=e.length-1,l=this.parts,[h,c]=At(e,t);if(this.el=Z.createElement(h,a),k.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=k.nextNode())!==null&&l.length<o;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(Ne)){const g=c[n++],m=r.getAttribute(u).split(y),_=/([.?@])?(.*)/.exec(g);l.push({type:1,index:s,name:_[2],strings:m,ctor:_[1]==="."?Dt:_[1]==="?"?Et:_[1]==="@"?Tt:Y}),r.removeAttribute(u)}else u.startsWith(y)&&(l.push({type:6,index:s}),r.removeAttribute(u));if(Fe.test(r.tagName)){const u=r.textContent.split(y),g=u.length-1;if(g>0){r.textContent=K?K.emptyScript:"";for(let m=0;m<g;m++)r.append(u[m],F()),k.nextNode(),l.push({type:2,index:++s});r.append(u[g],F())}}}else if(r.nodeType===8)if(r.data===Ie)l.push({type:2,index:s});else{let u=-1;for(;(u=r.data.indexOf(y,u+1))!==-1;)l.push({type:7,index:s}),u+=y.length-1}s++}}static createElement(e,t){const a=$.createElement("template");return a.innerHTML=e,a}}function T(i,e,t=i,a){var r,s;if(e===E)return e;let n=a!==void 0?(r=t._$Co)==null?void 0:r[a]:t._$Cl;const o=j(e)?void 0:e._$litDirective$;return n?.constructor!==o&&((s=n?._$AO)==null||s.call(n,!1),o===void 0?n=void 0:(n=new o(i),n._$AT(i,t,a)),a!==void 0?(t._$Co??(t._$Co=[]))[a]=n:t._$Cl=n),n!==void 0&&(e=T(i,n._$AS(i,e.values),n,a)),e}class St{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,r=(e?.creationScope??$).importNode(t,!0);k.currentNode=r;let s=k.nextNode(),n=0,o=0,l=a[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new V(s,s.nextSibling,this,e):l.type===1?h=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(h=new Pt(s,this,e)),this._$AV.push(h),l=a[++o]}n!==l?.index&&(s=k.nextNode(),n++)}return k.currentNode=$,r}p(e){let t=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class V{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,a,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=T(this,e,t),j(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ct(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T($.createTextNode(e)),this._$AH=e}$(e){var t;const{values:a,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Z.createElement(ze(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)==null?void 0:t._$AD)===s)this._$AH.p(a);else{const n=new St(s,this),o=n.u(this.options);n.p(a),this.T(o),this._$AH=n}}_$AC(e){let t=je.get(e.strings);return t===void 0&&je.set(e.strings,t=new Z(e)),t}k(e){ae(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,r=0;for(const s of e)r===t.length?t.push(a=new V(this.O(F()),this.O(F()),this,this.options)):a=t[r],a._$AI(s),r++;r<t.length&&(this._$AR(a&&a._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,t);e!==this._$AB;){const r=Pe(e).nextSibling;Pe(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,r,s){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=p}_$AI(e,t=this,a,r){const s=this.strings;let n=!1;if(s===void 0)e=T(this,e,t,0),n=!j(e)||e!==this._$AH&&e!==E,n&&(this._$AH=e);else{const o=e;let l,h;for(e=s[0],l=0;l<s.length-1;l++)h=T(this,o[a+l],t,l),h===E&&(h=this._$AH[l]),n||(n=!j(h)||h!==this._$AH[l]),h===p?e=p:e!==p&&(e+=(h??"")+s[l+1]),this._$AH[l]=h}n&&!r&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Dt extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class Et extends Y{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Tt extends Y{constructor(e,t,a,r,s){super(e,t,a,r,s),this.type=5}_$AI(e,t=this){if((e=T(this,e,t,0)??p)===E)return;const a=this._$AH,r=e===p&&a!==p||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,s=e!==p&&(a===p||r);r&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Pt{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}}const Be=q.litHtmlPolyfillSupport;Be?.(Z,V),(q.litHtmlVersions??(q.litHtmlVersions=[])).push("3.3.3");const Mt=(i,e,t)=>{const a=t?.renderBefore??e;let r=a._$litPart$;if(r===void 0){const s=t?.renderBefore??null;a._$litPart$=r=new V(e.insertBefore(F(),s),s,void 0,t??{})}return r._$AI(i),r};const B=globalThis;class P extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Mt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return E}}var He;P._$litElement$=!0,P.finalized=!0,(He=B.litElementHydrateSupport)==null||He.call(B,{LitElement:P});const We=B.litElementPolyfillSupport;We?.({LitElement:P}),(B.litElementVersions??(B.litElementVersions=[])).push("4.2.2");const Nt=3600;function It(i){return typeof i!="string"||!/^[A-Za-z0-9_-]{1,128}$/.test(i)?null:i}function Ut(i){return typeof i=="number"&&Number.isInteger(i)&&i>=0&&i<=1e12?i:typeof i=="string"&&/^\d{1,12}$/.test(i)?Number(i):null}function Lt(i){for(const e of i){const t=It(e.attributes.config_entry_id),a=Ut(e.attributes.vehicle_id);if(t&&a!==null)return{entryId:t,vehicleId:a}}return null}function Rt(i,e){return`/api/tesla_logger/${encodeURIComponent(i)}/${e}/car.png`}async function Ot(i,e,t){if(!i.callWS||!i.hassUrl)return null;const a=Rt(e,t),r=await i.callWS({type:"auth/sign_path",path:a,expires:Nt});return!r||typeof r.path!="string"||!r.path.startsWith("/")||r.path.startsWith("//")?null:i.hassUrl(r.path)||null}const H="/api/tesla_logger/map/",se="\xA9 OpenMapTiles \xA9 OpenStreetMap contributors";function Ze(i,e,t){const a=new URL(t),r={};e&&(r.Authorization=`Bearer ${e}`);let s;try{s=new URL(i,a)}catch{return{url:ne(a),headers:r}}return s.origin!==a.origin||!s.pathname.includes(H)?{url:ne(a),headers:r}:s.username||s.password||s.pathname.includes("..")?{url:ne(a),headers:r}:{url:`${s.origin}${s.pathname}`,headers:r}}function Ft(i,e){return`${new URL(i).origin}${H}styles/${e?"dark":"positron"}?v=1`}function jt(i){var e;const t=i?.auth,a=((e=t?.data)==null?void 0:e.access_token)??t?.accessToken;return typeof a=="string"&&a?a:void 0}function Ve(i){const e=[];for(const t of i)!Number.isFinite(t.latitude)||!Number.isFinite(t.longitude)||Math.abs(t.latitude)>90||Math.abs(t.longitude)>180||e.push([t.longitude,t.latitude]);return e}function J(i,e){if(typeof i=="string")return i.startsWith(H)?`${e}${i}`:i;if(Array.isArray(i))return i.map(t=>J(t,e));if(i&&typeof i=="object"){const t={};for(const[a,r]of Object.entries(i))t[a]=J(r,e);return t}return i}async function zt(i){var e;const t=new URL(i.origin).origin,a=J(await Ge(Ft(i.origin,i.dark),i),t);for(const r of Object.values(a.sources??{})){if(!((e=r.url)!=null&&e.startsWith(`${t}${H}`)))continue;const s=await Ge(r.url,i);r.tiles=J(s.tiles,t),delete r.url}return a}async function Ge(i,e){const t=Ze(i,e.accessToken,e.origin),a=await fetch(t.url,{headers:t.headers});if(!a.ok)throw new Error("basemap style");return a.json()}function ne(i){return`${i.origin}${H}rejected`}const M=new WeakMap;function Bt(i,e){const t=Wt(e),a=M.get(i);if(a?.key===t)return;a?.destroy();let r=!1,s;const n={key:t,destroy(){r=!0,s?.destroy(),M.get(i)===n&&M.delete(i)}};M.set(i,n),Ht(i,e).then(o=>{if(r||M.get(i)!==n){o?.destroy();return}s=o??void 0}).catch(()=>{})}function oe(i){var e;(e=M.get(i))==null||e.destroy()}async function Ht(i,e){var t;if(!e.points.length)return null;const a=await Zt(),r=a.css;Vt(i,r);const s=a.maplibregl;(t=s.setWorkerUrl)==null||t.call(s,new URL("./maplibre-gl-csp-worker.js",import.meta.url).href);const n=await zt(e),o=new s.Map({container:i,style:n,center:e.points[0],zoom:e.interactive?11:14,maxZoom:14,interactive:e.interactive,attributionControl:!1,dragRotate:!1,pitchWithRotate:!1,fadeDuration:0,locale:{"NavigationControl.ZoomIn":"Zoom in","NavigationControl.ZoomOut":"Zoom out"},transformRequest:g=>Ze(g,e.accessToken,e.origin)});e.interactive&&(o.addControl(new s.NavigationControl({showCompass:!1,visualizePitch:!1}),"top-right"),o.touchZoomRotate.disableRotation());let l=0,h=0,c=0;const u=new ResizeObserver(()=>{const g=i.clientWidth,m=i.clientHeight;c>8||g<2||m<2||g===l&&m===h||(c+=1,l=g,h=m,o.resize())});return u.observe(i),o.on("load",()=>{Gt(o,e),o.resize(),qt(o,s,e)}),{destroy(){u.disconnect(),o.remove()}}}function Wt(i){const e=i.points.map(t=>`${t[0].toFixed(5)},${t[1].toFixed(5)}`).join(";");return`${i.dark?"d":"l"}|${i.interactive?"i":"s"}|${i.accessToken?"a":"n"}|${i.origin}|${e}`}async function Zt(){const[i,e]=await Promise.all([import("./maplibre-CLYeJfqJ.js?v=0.3.1").then(r=>r.m),import("./maplibre-CLYeJfqJ.js?v=0.3.1").then(r=>r.a)]),t=i.default,a=e.default;return{maplibregl:t,css:a}}function Vt(i,e){const t=i.getRootNode(),a=t instanceof ShadowRoot?t:document.head;if(a.querySelector("style[data-tesla-logger-maplibre]"))return;const r=document.createElement("style");r.dataset.teslaLoggerMaplibre="",r.textContent=`${e}
.basemap{position:relative;overflow:hidden}
.maplibregl-map{position:absolute;inset:0;width:100%;height:100%}`,a.append(r)}function Gt(i,e){const t=e.points.length>=2?e.points:[];t.length>=2&&(i.addSource("route",{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:t}}}),i.addLayer({id:"route-casing",type:"line",source:"route",layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#ffffff","line-width":7,"line-opacity":.92}}),i.addLayer({id:"route-line",type:"line",source:"route",layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#3e6ae1","line-width":4}}));const a=[];t.length>=1?(a.push(le(t[0],"start")),a.push(le(t[t.length-1],"end"))):e.points.length===1&&a.push(le(e.points[0],"end")),i.addSource("ends",{type:"geojson",data:{type:"FeatureCollection",features:a}}),i.addLayer({id:"ends",type:"circle",source:"ends",paint:{"circle-radius":["match",["get","kind"],"end",7,6],"circle-color":["match",["get","kind"],"end","#3e6ae1","#ffffff"],"circle-stroke-width":3,"circle-stroke-color":["match",["get","kind"],"end","#ffffff","#171a20"]}})}function le(i,e){return{type:"Feature",properties:{kind:e},geometry:{type:"Point",coordinates:i}}}function qt(i,e,t){if(t.points.length>=2){const a=new e.LngLatBounds(t.points[0],t.points[0]);for(const r of t.points)a.extend(r);i.fitBounds(a,{padding:48,maxZoom:14,animate:!1,duration:0});return}i.jumpTo({center:t.points[0],zoom:14})}const qe=10,Kt=50;function C(i){const e=i?.page_size;return typeof e!="number"||!Number.isFinite(e)?qe:Math.min(Kt,Math.max(1,Math.round(e)))}const he={distance:!0,duration:!0,energy:!0,efficiency:!0,map:!0,speed:!0,power:!0,elevation:!0,battery:!0},ce={energy:!0,duration:!0,soc:!0,power:!0,ac_dc:!0,voltage:!0,cost:!0,curve:!0},Yt=Object.keys(he),Jt=Object.keys(ce);function Ke(i,e){const t={...i};if(!e||typeof e!="object")return t;for(const a of Object.keys(i)){const r=e[a];typeof r=="boolean"&&(t[a]=r)}return t}function x(i){return Ke(he,i?.drive_detail)}function N(i){return Ke(ce,i?.charge_detail)}const Ye={overview:"Overview",status:"Status",drives:"Drives",charges:"Charges",stats:"Stats",days7:"7 days",days30:"30 days",yearToDate:"This year",allTime:"All",byWeek:"Weeks",byMonth:"Months",byYear:"Years",lastDrive:"Last drive",lastCharge:"Last charge",allDrives:"All drives",allCharges:"All charges",noDrive:"No drives",noCharge:"No charges",thisMonthTitle:"This month",statsLink:"Statistics",behindWheel:"Driving time",energyCharged:"Energy charged",chargeCostChart:"Charging cost",idleLoss:"Parked loss",tempChart:"Consumption by temperature",efficiencyChart:"Efficiency",backToList:"Back to the list",telemetry:"Telemetry",chartHint:"Hover to read, drag to zoom.",noGps:"No GPS points.",notEnoughPoints:"Not enough points.",updatedLabel:"Updated",position:"Position",unknownPosition:"Unknown position",dcShare:"DC share",pluggedFor:"Plugged in",selectionTotals:"Selection totals",charts:"Charts",consumptionChart:"Consumption",chargedChart:"Energy charged",emptySeries:"No data for this period.",latest:"Latest",period:"Period",thisWeek:"This week",thisMonth:"This month",thisYear:"This year",consumed:"consumed",batteryHealth:"Battery health",rangeAtFull:"Range at 100%",acDc:"AC/DC charging",fastShare:"fast charging",cost:"Cost",perKm:"/km",perDay:"km/day",idleUse:"Parked consumption",tempUse:"Consumption vs temperature",car:"Car",sections:"Sections",pageSize:"Items per page",driveDetail:"Drive detail",chargeDetail:"Charge detail",resetZoom:"Reset zoom",voltage:"Voltage",soc:"State of charge",acDcShort:"AC/DC",chargeCurve:"Charge curve",noCurve:"This charge has no curve.",battery:"Battery",drivingGroup:"Driving",cabinGroup:"Cabin",chargeGroup:"Charging",viewsGroup:"Views",moreCharts:"More charts",previousPeriod:{week:"previous week",month:"previous month",year:"previous year"},range:"Range",speed:"Speed",power:"Power",inside:"Inside",outside:"Outside",charger:"Charger",added:"Added",odometer:"Odometer",limit:"Limit",location:"Location",unknown:"Unknown",loading:"Loading\u2026",emptyDrives:"No drives in this page.",emptyCharges:"No charges in this page.",back:"Back",refresh:"Refresh",week:"Week",month:"Month",year:"Year",distance:"Distance",duration:"Duration",energy:"Energy",efficiency:"Efficiency",drivesCount:"Drives",chargesCount:"Charges",energyAdded:"Energy added",map:"Route",speedChart:"Speed",elevationChart:"Elevation",batteryChart:"Battery",noRoute:"This drive has no route points.",pick:"Select a Tesla Logger entity in the card editor.",missingDevice:"This entity is not linked to a Tesla Logger device.",failed:"Could not load history.",previous:"Previous",next:"Next",page:"Page",online:"Online",asleep:"Asleep",offline:"Offline",driving:"Driving",charging:"Charging",updating:"Updating",entity:"Entity",defaultView:"Default view",showMap:"Map",showBasemap:"Basemap",carImageUnavailable:"Vehicle image unavailable",showBlocks:"Blocks",detailFields:{distance:"Distance",duration:"Duration",energy:"Energy",efficiency:"Efficiency",map:"Route map",speed:"Speed chart",power:"Power",elevation:"Elevation chart",battery:"Battery chart",soc:"State of charge",ac_dc:"AC/DC",voltage:"Voltage",cost:"Cost",curve:"Charge curve"},showFields:{car:"Car card",status:"Status",drives:"Drives",charges:"Charges",stats:"Stats",charts:"Charts",chart_consumption:"Consumption (Wh/km)",chart_distance:"Distance",chart_energy:"Energy charged",totals:"Totals",battery_health:"Battery health",charging_split:"AC/DC charging and cost",vampire_drain:"Parked consumption",consumption_vs_temp:"Consumption vs temperature"}},Qt={...Ye,overview:"Aper\xE7u",status:"\xC9tat",drives:"Trajets",charges:"Charges",stats:"Stats",days7:"7 jours",days30:"30 jours",yearToDate:"Cette ann\xE9e",allTime:"Tout",byWeek:"Semaines",byMonth:"Mois",byYear:"Ann\xE9es",lastDrive:"Dernier trajet",lastCharge:"Derni\xE8re charge",allDrives:"Tous les trajets",allCharges:"Toutes les charges",noDrive:"Aucun trajet",noCharge:"Aucune charge",thisMonthTitle:"Ce mois-ci",statsLink:"Statistiques",behindWheel:"Au volant",energyCharged:"\xC9nergie charg\xE9e",chargeCostChart:"Co\xFBt des charges",idleLoss:"Perte \xE0 l'arr\xEAt",tempChart:"Consommation par temp\xE9rature",efficiencyChart:"Efficacit\xE9",backToList:"Retour \xE0 la liste",telemetry:"T\xE9l\xE9m\xE9trie",chartHint:"Survolez pour lire, faites glisser pour zoomer.",noGps:"Pas de points GPS.",notEnoughPoints:"Pas assez de points.",updatedLabel:"Mis \xE0 jour",position:"Position",unknownPosition:"Position inconnue",dcShare:"Part DC",pluggedFor:"Branch\xE9e",selectionTotals:"Totaux de la s\xE9lection",perDay:"km/j",charts:"Graphiques",consumptionChart:"Consommation",chargedChart:"\xC9nergie charg\xE9e",emptySeries:"Aucune donn\xE9e sur cette p\xE9riode.",latest:"Dernier",period:"P\xE9riode",thisWeek:"Cette semaine",thisMonth:"Ce mois",thisYear:"Cette ann\xE9e",consumed:"consomm\xE9",batteryHealth:"Sant\xE9 batterie",rangeAtFull:"Autonomie \xE0 100 %",acDc:"Charges AC/DC",fastShare:"recharge rapide",cost:"Co\xFBt",perKm:"/km",idleUse:"Consommation \xE0 l'arr\xEAt",tempUse:"Consommation vs temp\xE9rature",car:"Voiture",sections:"Sections",pageSize:"\xC9l\xE9ments par page",driveDetail:"D\xE9tail du trajet",chargeDetail:"D\xE9tail de la charge",resetZoom:"R\xE9initialiser le zoom",voltage:"Tension",soc:"Niveau de charge",acDcShort:"AC/DC",chargeCurve:"Courbe de charge",noCurve:"Cette charge n'a pas de courbe.",battery:"Batterie",drivingGroup:"D\xE9placement",cabinGroup:"Habitacle",chargeGroup:"Charge",viewsGroup:"Vues",moreCharts:"Autres graphiques",previousPeriod:{week:"semaine pr\xE9c\xE9dente",month:"mois pr\xE9c\xE9dent",year:"ann\xE9e pr\xE9c\xE9dente"},range:"Autonomie",speed:"Vitesse",power:"Puissance",inside:"Int\xE9rieur",outside:"Ext\xE9rieur",charger:"Chargeur",added:"Ajout\xE9e",odometer:"Odom\xE8tre",limit:"Limite",location:"Lieu",unknown:"Inconnu",loading:"Chargement\u2026",emptyDrives:"Aucun trajet sur cette page.",emptyCharges:"Aucune charge sur cette page.",back:"Retour",refresh:"Actualiser",week:"Semaine",month:"Mois",year:"Ann\xE9e",distance:"Distance",duration:"Dur\xE9e",energy:"\xC9nergie",efficiency:"Efficacit\xE9",drivesCount:"Trajets",chargesCount:"Charges",energyAdded:"\xC9nergie ajout\xE9e",map:"Trac\xE9",speedChart:"Vitesse",elevationChart:"Altitude",batteryChart:"Batterie",noRoute:"Ce trajet n'a pas de trac\xE9.",pick:"Choisissez une entit\xE9 Tesla Logger dans l'\xE9diteur.",missingDevice:"Cette entit\xE9 n'est pas li\xE9e \xE0 un appareil Tesla Logger.",failed:"Impossible de charger l'historique.",previous:"Pr\xE9c\xE9dent",next:"Suivant",page:"Page",online:"En ligne",asleep:"Endormie",offline:"Hors ligne",driving:"En route",charging:"En charge",updating:"Mise \xE0 jour",entity:"Entit\xE9",defaultView:"Vue par d\xE9faut",showMap:"Carte",showBasemap:"Fond de carte",carImageUnavailable:"Image du v\xE9hicule indisponible",showBlocks:"Blocs",detailFields:{distance:"Distance",duration:"Dur\xE9e",energy:"\xC9nergie",efficiency:"Efficacit\xE9",map:"Carte du trac\xE9",speed:"Graphique de vitesse",power:"Puissance",elevation:"Graphique d'altitude",battery:"Graphique de batterie",soc:"Niveau de charge",ac_dc:"AC/DC",voltage:"Tension",cost:"Co\xFBt",curve:"Courbe de charge"},showFields:{car:"Carte voiture",status:"\xC9tat",drives:"Trajets",charges:"Charges",stats:"Statistiques",charts:"Graphiques",chart_consumption:"Consommation (Wh/km)",chart_distance:"Distance",chart_energy:"\xC9nergie charg\xE9e",totals:"Totaux",battery_health:"Sant\xE9 batterie",charging_split:"Charges AC/DC et co\xFBt",vampire_drain:"Consommation \xE0 l'arr\xEAt",consumption_vs_temp:"Consommation vs temp\xE9rature"}};function Je(i){const e=(i||"").toLowerCase().replace("_","-");return e==="fr"||e.startsWith("fr-")?"fr":"en"}function Qe(i){return i==="fr"?Qt:Ye}const de={car:!0,status:!0,drives:!0,charges:!0,stats:!0,charts:!0,chart_consumption:!0,chart_distance:!0,chart_energy:!0,totals:!0,battery_health:!0,charging_split:!0,vampire_drain:!0,consumption_vs_temp:!0},Xt=Object.keys(de),ei=["car","status","drives","charges","stats","charts"],ti=["chart_consumption","chart_distance","chart_energy","battery_health","charging_split","vampire_drain","consumption_vs_temp"];function I(i){const e={...de},t=i?.show;if(!t||typeof t!="object")return e;for(const a of Xt){const r=t[a];typeof r=="boolean"&&(e[a]=r)}return e}function ii(i){return i.chart_consumption||i.chart_distance||i.chart_energy||i.totals||i.battery_health||i.charging_split||i.vampire_drain||i.consumption_vs_temp}function U(i){return i.charts&&ii(i)}function Xe(i){return i.charts&&(i.chart_consumption||i.chart_distance||i.chart_energy||i.totals||i.battery_health||i.charging_split||i.vampire_drain)}function et(i,e=!0){const t=[];return(i.car||i.status||e)&&t.push("status"),i.drives&&t.push("drives"),i.charges&&t.push("charges"),(i.stats||U(i))&&t.push("stats"),t}function ai(i,e,t=!0){const a=et(e,t);if(i==="drive")return e.drives?i:a[0]??"status";if(i==="charge")return e.charges?i:a[0]??"status";const r=i==="charts"?"stats":i;return r==="stats"?e.stats||U(e)?"stats":a[0]??"status":a.includes(r)?r:a[0]??"status"}const ri=["status","drives","charges","stats"],si={status:"overview",drives:"drives",charges:"charges",stats:"stats"},ue=class extends P{setConfig(e){const t=I(e);this._config={...e,default_view:e.default_view==="charts"?"stats":e.default_view,show_map:e.show_map!==!1,show_basemap:e.show_basemap!==!1,page_size:C(e),show:t,drive_detail:x(e),charge_detail:N(e)}}render(){var e;if(!this.hass||!this._config)return d``;const t=Qe(Je(((e=this.hass.locale)==null?void 0:e.language)||this.hass.language)),a=I(this._config),r=x(this._config),s=N(this._config);return d`
      <div class="editor">
        ${this.entityField(t)}
        <div class="pair">
          <label class="field">
            ${t.defaultView}
            <select
              data-field="default_view"
              @change=${n=>this.commit({default_view:n.target.value})}
            >
              ${ri.map(n=>{var o;return d`<option value=${n} ?selected=${(((o=this._config)==null?void 0:o.default_view)||"status")===n}>
                  ${t[si[n]]}
                </option>`})}
            </select>
          </label>
          <label class="field">
            ${t.pageSize}
            <input
              data-field="page_size"
              type="number"
              min="1"
              max="50"
              step="1"
              .value=${String(C(this._config))}
              @change=${n=>this.commit({page_size:Number(n.target.value)})}
            />
          </label>
        </div>
        <fieldset>
          <legend>${t.sections}</legend>
          <div class="grid">
            ${this.check(t.showMap,this._config.show_map!==!1,n=>this.commit({show_map:n}))}
            ${this.check(t.showBasemap,this._config.show_basemap!==!1,n=>this.commit({show_basemap:n}),"show_basemap")}
            ${ei.map(n=>this.check(t.showFields[n],a[n],o=>this.patchShow(n,o)))}
          </div>
        </fieldset>
        <fieldset>
          <legend>${t.charts}</legend>
          <div class="grid">
            ${ti.map(n=>this.check(t.showFields[n],a[n],o=>this.patchShow(n,o)))}
          </div>
        </fieldset>
        <fieldset>
          <legend>${t.driveDetail}</legend>
          <div class="grid">
            ${Yt.map(n=>this.check(t.detailFields[n],r[n],o=>this.patchDrive(n,o)))}
          </div>
        </fieldset>
        <fieldset>
          <legend>${t.chargeDetail}</legend>
          <div class="grid">
            ${Jt.map(n=>this.check(t.detailFields[n],s[n],o=>this.patchCharge(n,o)))}
          </div>
        </fieldset>
      </div>
    `}entityField(e){var t;const a=((t=this._config)==null?void 0:t.entity)||"";return customElements.get("ha-entity-picker")?d`
        <ha-entity-picker
          .hass=${this.hass}
          .value=${a}
          .label=${e.entity}
          allow-custom-entity
          @value-changed=${r=>this.commit({entity:r.detail.value||""})}
        ></ha-entity-picker>
      `:d`
      <label class="field">
        ${e.entity}
        <input
          data-field="entity"
          type="text"
          .value=${a}
          @change=${r=>this.commit({entity:r.target.value})}
        />
      </label>
    `}check(e,t,a,r){return d`
      <label class="row">
        <input
          type="checkbox"
          data-field=${r??p}
          .checked=${t}
          @change=${s=>a(s.target.checked)}
        />
        <span>${e}</span>
      </label>
    `}patchShow(e,t){const a={...I(this._config),[e]:t};this.commit({show:a})}patchDrive(e,t){this.commit({drive_detail:{...x(this._config),[e]:t}})}patchCharge(e,t){this.commit({charge_detail:{...N(this._config),[e]:t}})}commit(e){if(!this._config)return;const t={...this._config,...e,show:I({entity:this._config.entity,show:{...I(this._config),...e.show}}),drive_detail:x({entity:this._config.entity,drive_detail:{...x(this._config),...e.drive_detail}}),charge_detail:N({entity:this._config.entity,charge_detail:{...N(this._config),...e.charge_detail}}),page_size:C({entity:this._config.entity,page_size:e.page_size??this._config.page_size}),show_map:e.show_map??this._config.show_map!==!1,show_basemap:e.show_basemap??this._config.show_basemap!==!1};delete t.show_charts,this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}};ue.properties={hass:{attribute:!1},_config:{state:!0}},ue.styles=xe`
    :host {
      display: block;
      color: var(--primary-text-color, #171a20);
      font: inherit;
    }
    .editor {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    fieldset {
      margin: 0;
      padding: 12px 12px 4px;
      border: 1px solid var(--divider-color, rgba(23, 26, 32, 0.12));
      border-radius: 14px;
      background: var(--card-background-color, transparent);
    }
    legend {
      padding: 0 6px;
      color: var(--secondary-text-color, #5c5e62);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 4px 12px;
      margin: 0 0 8px;
    }
    label.row {
      display: flex;
      align-items: center;
      gap: 8px;
      min-height: 36px;
      color: var(--primary-text-color, #171a20);
      font-size: 0.92rem;
    }
    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      margin: 0;
      accent-color: var(--primary-color, #3e6ae1);
    }
    label.field {
      display: flex;
      flex-direction: column;
      gap: 6px;
      color: var(--secondary-text-color, #5c5e62);
      font-size: 0.82rem;
      font-weight: 600;
    }
    input[type="number"],
    input[type="text"],
    select {
      min-height: 40px;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, rgba(23, 26, 32, 0.16));
      border-radius: 10px;
      background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
      color: var(--primary-text-color, #171a20);
      font: inherit;
      font-weight: 500;
    }
    .pair {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 8rem;
      gap: 12px;
    }
    ha-entity-picker {
      display: block;
    }
  `;let tt=ue;function Q(i){return i&&typeof i=="object"?{language:i.language||"en",hour12:i.hour12,timeZone:i.timeZone}:{language:i||"en"}}function ni(i){var e,t,a,r;const s=((e=i?.locale)==null?void 0:e.language)||i?.language||"en",n=(t=i?.locale)==null?void 0:t.time_format;let o;n==="12"?o=!0:n==="24"&&(o=!1);const l=(a=i?.locale)==null?void 0:a.time_zone,h=(r=i?.config)==null?void 0:r.time_zone;return{language:s,hour12:o,timeZone:l==="server"&&typeof h=="string"&&h!==""&&h!=="local"&&h!=="server"?h:void 0}}function it(i){return i.replace(/[\u00a0\u202f]/g," ").replace(/\s+/g," ").trim()}function pe(i,e){const t={...e};return i.timeZone&&(t.timeZone=i.timeZone),t}function at(i,e){return it(new Intl.DateTimeFormat(e.language||"en",pe(e,{weekday:"short",day:"numeric",month:"short"})).format(i))}function oi(i,e){const t=pe(e,{hour:e.hour12?"numeric":"2-digit",minute:"2-digit"});return typeof e.hour12=="boolean"&&(t.hour12=e.hour12),it(new Intl.DateTimeFormat(e.language||"en",t).format(i))}function li(i,e){const t=new Intl.DateTimeFormat("en-US",pe(e,{year:"numeric",month:"2-digit",day:"2-digit"})).formatToParts(i),a=r=>{var s;return((s=t.find(n=>n.type===r))==null?void 0:s.value)??""};return`${a("year")}-${a("month")}-${a("day")}`}function ge(i,e){const t=new Date(i);return Number.isNaN(t.getTime())?i:oi(t,Q(e))}function hi(i,e){const t=new Date(i);return Number.isNaN(t.getTime())?i:at(t,Q(e))}function ci(i,e){const t=Q(e),a=new Date(i);return Number.isNaN(a.getTime())?{key:i,label:i}:{key:li(a,t),label:at(a,t)}}function di(i){return typeof i=="string"?i:i instanceof Error||i&&typeof i=="object"&&"message"in i&&typeof i.message=="string"?i.message:""}function ui(i,e){const t=di(i);return!t||t.includes("tl_")?e:t.slice(0,180)}function A(i){return!i||typeof i!="object"?null:i}const rt={week:12,month:12,year:5},X=360,W=220;function st(i,e){const t=new Intl.DateTimeFormat("en-US",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(i),a=r=>{var s;return Number((s=t.find(n=>n.type===r))==null?void 0:s.value)};return{y:a("year"),m:a("month"),d:a("day")}}function me(i,e){const t=new Date(Date.UTC(i.y,i.m-1,i.d));return t.setUTCDate(t.getUTCDate()+e),{y:t.getUTCFullYear(),m:t.getUTCMonth()+1,d:t.getUTCDate()}}function nt(i,e){const t=new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).formatToParts(e),a=n=>{var o;return((o=t.find(l=>l.type===n))==null?void 0:o.value)??"0"},r=a("hour")==="24"?0:Number(a("hour")),s=Date.UTC(Number(a("year")),Number(a("month"))-1,Number(a("day")),r,Number(a("minute")),Number(a("second")));return Math.round((s-e.getTime())/6e4)}function ot(i,e){const t=new Date(Date.UTC(e.y,e.m-1,e.d)),a=nt(i,t);return new Date(t.getTime()-a*6e4)}function ve(i,e,t=new Date){if(i==="all")return{};const a=st(t,e),r=i==="7d"?me(a,-6):i==="30d"?me(a,-29):{y:a.y,m:1,d:1};return{from:ot(e,r).toISOString(),to:t.toISOString()}}function pi(i,e=new Date){return lt("month",i,e)}function lt(i,e,t=new Date){const a=st(t,e);let r;if(i==="year")r={y:a.y,m:1,d:1};else if(i==="month")r={y:a.y,m:a.m,d:1};else{const s=new Date(Date.UTC(a.y,a.m-1,a.d));r=me(a,-((s.getUTCDay()+6)%7))}return{from:ot(e,r).toISOString(),to:t.toISOString()}}function gi(i,e,t){const a=new Date(i);if(Number.isNaN(a.getTime()))return i;const r=Q(t),s=r.timeZone?{timeZone:r.timeZone}:{},n=r.language||"en";return e==="year"?new Intl.DateTimeFormat(n,{year:"numeric",...s}).format(a):e==="month"?new Intl.DateTimeFormat(n,{month:"short",...s}).format(a).replace(/[\u00a0\u202f]/g," ").replace(/\.$/,"").trim():new Intl.DateTimeFormat(n,{day:"numeric",month:"short",...s}).format(a).replace(/[\u00a0\u202f]/g," ").replace(/,/g,"").replace(/\s+/g," ").trim()}function ht(i,e){if(i<=e||e<2)return Array.from({length:i},(a,r)=>r);const t=Array.from({length:e},(a,r)=>Math.round(r*(i-1)/(e-1)));return t.filter((a,r)=>r===0||a!==t[r-1])}function mi(i){const e=i.filter(v=>Number.isFinite(v.latitude)&&Number.isFinite(v.longitude));if(e.length<2)return[];const t=ht(e.length,90).map(v=>e[v]),a=t.map(v=>v.latitude),r=t.map(v=>v.longitude),s=Math.min(...a),n=Math.max(...a),o=Math.min(...r),l=Math.max(...r),h=Math.max(n-s,1e-9),c=Math.max(l-o,1e-9),u=28,g=Math.min((X-u*2)/c,(W-u*2)/h),m=(X-c*g)/2,_=(W-h*g)/2;return[t.map((v,L)=>{const R=m+(v.longitude-o)*g,ut=W-(_+(v.latitude-s)*g);return`${L===0?"M":"L"}${R.toFixed(1)} ${ut.toFixed(1)}`}).join(" ")]}function vi(i,e,t){return{label:i,moving:e,empty:!t,width:X,height:W,roads:[]}}function _i(i,e){return{label:i,moving:!1,empty:e.length===0,width:X,height:W,roads:e}}function fi(i){const e=typeof i.charger_type=="string"?i.charger_type.trim():"",t=e.toLowerCase(),a=e&&!/^<.*>$/.test(e)&&t!=="none"&&t!=="null"?e:null;let r=i.is_dc??null;const s=a;return a==="AC"&&(r=!1),a==="DC"&&(r=!0),{id:i.id,start_at:i.start_at,end_at:i.end_at,energy_added_kwh:i.energy_added_kwh,duration_s:i.duration_s,cost:i.cost,is_dc:r,charger_type:s,max_power_kw:i.max_power_kw,start_battery_level:i.start_battery_level,end_battery_level:i.end_battery_level,address:i.address||i.location,geofence:i.geofence}}function _e(i,e){return typeof i!="number"||typeof e!="number"||!Number.isFinite(i)||!Number.isFinite(e)||Math.abs(i)>90||Math.abs(e)>180?null:{lat:i,lon:e}}function fe(i,e,t,a=!1){return{kind:"bar",labels:i,titles:e,series:t,stacked:a}}function yi(i,e,t,a){return{kind:"line",x:{kind:"time",origin_ms:i,offset_min:e},t,series:a}}function bi(i,e=240){return ht(i.length,e).map(t=>i[t])}function b(i){return typeof i=="number"&&Number.isFinite(i)?i:null}function ye(i,e){const t=b(i),a=b(e);return t==null||a==null||a<=0?null:t*1e3/a}function f(i){return i.reduce((e,t)=>e+(b(t)??0),0)}function $i(i,e,t){const a=ye(i.energy_used_kwh,i.distance_km);return[{label:e.drives,value:t.number(i.drive_count||0,0)},{label:e.distance,value:t.distance(i.distance_km)},{label:e.duration,value:t.duration(i.drive_duration_s)},{label:e.energy,value:t.energy(i.energy_used_kwh)},{label:e.efficiency,value:a==null?"\u2014":t.unit(a,0,"Wh/km")}]}function wi(i){return{entity:Object.keys(i.states).find(e=>{var t,a;return((a=(t=i.states[e])==null?void 0:t.attributes)==null?void 0:a.key)==="location"})||"",show_map:!0,show_basemap:!0,page_size:qe,show:{...de},drive_detail:{...he},charge_detail:{...ce}}}ki();function ki(){var i;const e=(i=customElements.get("tl-mini-map"))==null?void 0:i.prototype;if(!(e!=null&&e.render)||e._guard)return;e._guard=!0;const t=e.render;e.render=function(){t.call(this),this._tiles=!0,this.querySelector("[slot='tiles']")&&this.classList.add("has-tiles")}}const ct=["--tl-bg:var(--tl-ha-bg)","--tl-surface:var(--tl-ha-surface)","--tl-surface-2:var(--tl-ha-surface-2)","--tl-text:var(--tl-ha-text)","--tl-muted:var(--tl-ha-muted)","--tl-accent:var(--tl-ha-accent)","--tl-line:var(--tl-ha-line)","--tl-green:var(--tl-ha-green)","--tl-danger:var(--tl-ha-danger)","--tl-map-bg:var(--tl-ha-map)"].join(";"),Ci="tl-vehicle-card, tl-mini-map, tl-recent-card, tl-summary-strip, tl-tabs, tl-period-chips, tl-day-group, tl-drive-row, tl-charge-row, tl-chart";function be(i){const e=A(i);return!!(e&&Array.isArray(e.data))}function xi(i){const e=A(i);return!!(e&&Array.isArray(e.route)&&Array.isArray(e.series))}function $e(i){const e=A(i);return!!(e&&typeof e.distance_km=="number")}function Ai(i){const e=A(i);return!!(e&&Array.isArray(e.buckets))}function Si(i){const e=A(i);return(e&&Array.isArray(e.data)?e.data:[]).filter(t=>{const a=A(t);return!!(a&&typeof a.temp_c_bucket=="number")})}const we=class extends P{constructor(){super(...arguments),this._view="status",this._period="month",this._range="all",this._page=1,this._loading=!1,this._error="",this._rangeStatsKey="",this._recentDrivePending=!1,this._recentChargePending=!1,this._monthPending=!1,this._inflight=new Set,this._carImageUrl="",this._carImageFailed=!1,this._carImageKey="",this._carImageGen=0,this._hooksKey="",this._hooks={},this._basemapNodes=new Set}setConfig(e){var t;if(!e||typeof e.entity!="string"||!e.entity)throw new Error("Please select a Tesla Logger entity");const a=((t=this._config)==null?void 0:t.entity)!==e.entity,r=this._config!=null&&C(this._config)!==C(e);this._config=e,a?(this._view=this.openingView(e.default_view),this.clearHistory()):r&&(this._page=1,this._drives=void 0,this._charges=void 0),this.ensureVisibleView()}openingView(e){return e==="charts"?"stats":e||"status"}get flags(){return I(this._config)}ensureVisibleView(){const e=ai(this._view,this.flags,this.mapEnabled());e!==this._view&&(this._view=e)}static getConfigElement(){return document.createElement("tesla-logger-card-editor-impl")}static getStubConfig(e){return wi(e)}getCardSize(){return 6}updated(){this.classList.toggle("dark",this.dark),this.paintHosts(),this.patchSharedShadows(),this.syncPositionMap(),this.syncBasemaps(),this._config&&(this.ensureView(),this.ensureCarImage())}paintHosts(){const e=this.locale,t=this.timeZone,a=this.dark?"dark":"light",r=this.hooks;this.renderRoot.querySelectorAll(Ci).forEach(s=>{const n=s;n.locale!==e&&(n.locale=e),n.timeZone!==t&&(n.timeZone=t),n.theme!==a&&(n.theme=a),n.format!==r&&(n.format=r),n.getAttribute("style")!==ct&&n.setAttribute("style",ct)})}patchSharedShadows(){const e=[["tl-summary-strip",":host dd,:host dt{margin-inline:0;margin-left:0;margin-right:0;text-align:start} :host dd{margin-top:4px}"],["tl-recent-card",":host .route.single .route-stop{padding-left:18px}"]];this.basemapOn()&&e.push(["tl-mini-map",":host .map-stack{background:transparent}:host .map-bg,:host .map-dots,:host .map-vignette{display:none}"]);for(const[t,a]of e)this.renderRoot.querySelectorAll(t).forEach(r=>{const s=r.shadowRoot;if(!s||s.querySelector("style[data-card-patch]"))return;const n=document.createElement("style");n.dataset.cardPatch=t,n.textContent=a,s.append(n)})}syncPositionMap(){const e=this.renderRoot.querySelector("tl-mini-map.where");if(!e)return;const t=this.carPosition(),a=t?.lat??null,r=t?.lon??null,s=this.numeric("heading");e.latitude!==a&&(e.latitude=a),e.longitude!==r&&(e.longitude=r),e.heading!==s&&(e.heading=s)}disconnectedCallback(){for(const e of this._basemapNodes)oe(e);this._basemapNodes.clear(),super.disconnectedCallback()}basemapOn(){var e;return((e=this._config)==null?void 0:e.show_basemap)!==!1}syncBasemaps(){const e=new Set(Array.from(this.renderRoot.querySelectorAll(".basemap")));for(const t of this._basemapNodes)e.has(t)||(oe(t),this._basemapNodes.delete(t));for(const t of e){this._basemapNodes.add(t);const a=this.basemapSpec(t.dataset.map||"");a?Bt(t,a):oe(t)}}basemapSpec(e){const t=window.location.origin,a=jt(this.hass),r=this.dark;if(e==="overview"){const s=this.carPosition();return s?{dark:r,interactive:!1,accessToken:a,origin:t,points:[[s.lon,s.lat]]}:null}if(e==="drive"){const s=this._detail?Ve(this._detail.route):[];return s.length?{dark:r,interactive:!0,accessToken:a,origin:t,points:s}:null}if(e==="charge"){const s=this.selectedCharge(),n=s?_e(s.latitude,s.longitude):null;return n?{dark:r,interactive:!0,accessToken:a,origin:t,points:[[n.lon,n.lat]]}:null}return null}render(){var e;return(e=this._config)!=null&&e.entity?d`
      <ha-card>
        <tl-tabs
          label=${this.text.sections}
          .data=${this.tabOptions()}
          @tl-change=${this.onTab}
          @click=${this.blockLink}
        ></tl-tabs>
        ${this._error?d`<p class="message">${this._error}</p>`:p}
        ${this._loading?d`<p class="message">${this.text.loading}</p>`:p}
        ${this.body()}
      </ha-card>
    `:d`<ha-card><p class="message">${this.text.pick}</p></ha-card>`}get dark(){var e,t;return!!((t=(e=this.hass)==null?void 0:e.themes)!=null&&t.darkMode)}get dates(){return ni(this.hass)}get locale(){return this.dates.language||"en"}get timeZone(){if(this.dates.timeZone)return this.dates.timeZone;try{return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}catch{return"UTC"}}get hooks(){const e=this.dates,t=`${e.language}|${String(e.hour12)}|${e.timeZone??""}`;return t!==this._hooksKey&&(this._hooksKey=t,this._hooks={clock:a=>ge(a,e),dayLabel:a=>hi(a,e)}),this._hooks}get fmt(){return pt({locale:this.locale,timeZone:this.timeZone,format:this.hooks})}get text(){return Qe(Je(this.locale))}get readings(){var e,t,a,r;const s=new Map,n=this.hass,o=(e=this._config)==null?void 0:e.entity;if(!n||!o||!n.states[o])return s;const l=(a=(t=n.entities)==null?void 0:t[o])==null?void 0:a.device_id,h=n.states[o].attributes.vin;for(const[c,u]of Object.entries(n.states)){const g=(r=n.entities)==null?void 0:r[c],m=!!(l&&g?.device_id===l),_=!!(h&&u.attributes.vin===h);if(!m&&!_)continue;const v=g?.translation_key||(typeof u.attributes.key=="string"?u.attributes.key:void 0);v&&s.set(v,u)}return s}get deviceId(){var e,t,a;const r=(e=this._config)==null?void 0:e.entity;if(!(!this.hass||!r))return(a=(t=this.hass.entities)==null?void 0:t[r])==null?void 0:a.device_id}numeric(e){var t;const a=(t=this.readings.get(e))==null?void 0:t.state;if(!a||a==="unknown"||a==="unavailable")return null;const r=Number(a);return Number.isFinite(r)?r:null}label(e){var t;const a=(t=this.readings.get(e))==null?void 0:t.state;return!a||a==="unknown"||a==="unavailable"?null:a}binary(e){var t;const a=(t=this.readings.get(e))==null?void 0:t.state;return!a||a==="unknown"||a==="unavailable"?null:e==="lock"?a==="off"?!0:a==="on"?!1:null:a==="on"?!0:a==="off"?!1:null}vehicleName(){var e,t,a,r,s,n;const o=this.deviceId?(a=(t=(e=this.hass)==null?void 0:e.devices)==null?void 0:t[this.deviceId])==null?void 0:a.name:void 0,l=(n=(s=this.hass)==null?void 0:s.states[((r=this._config)==null?void 0:r.entity)||""])==null?void 0:n.attributes.friendly_name;return typeof o=="string"&&o?o:typeof l=="string"&&l?l:this.text.unknown}mapEnabled(){var e;return((e=this._config)==null?void 0:e.show_map)!==!1}carPosition(){const e=this.readings.get("location");return _e(e?.attributes.latitude,e?.attributes.longitude)}tabOptions(){const e=this.text,t={status:e.overview,drives:e.drives,charges:e.charges,stats:e.stats};return et(this.flags,this.mapEnabled()).map(a=>({id:a==="status"?"tab-overview":`tab-${a}`,label:t[a],href:"",selected:this._view===a||a==="drives"&&this._view==="drive"||a==="charges"&&this._view==="charge"}))}onTab(e){var t;const a=(t=e.detail)==null?void 0:t.id,r=a==="tab-drives"?"drives":a==="tab-charges"?"charges":a==="tab-stats"?"stats":"status";this.open(r)}blockLink(e){e.composedPath().some(t=>t instanceof HTMLAnchorElement)&&e.preventDefault()}onChip(e){var t;const a=(t=e.detail)==null?void 0:t.id;if(this._view==="stats"){(a==="week"||a==="month"||a==="year")&&this.setPeriod(a);return}(a==="7d"||a==="30d"||a==="year"||a==="all")&&this._range!==a&&(this._range=a,this._page=1,this._drives=void 0,this._charges=void 0,this._rangeStats=void 0,this._rangeStatsKey="",this.ensureView())}open(e){this._error="",this._view=e,e!=="drive"&&(this._driveId=void 0,this._detail=void 0),e!=="charge"&&(this._chargeId=void 0,this._charge=void 0),this.ensureVisibleView()}body(){return this._view==="drive"?this.driveDetail():this._view==="charge"?this.chargeDetail():this._view==="drives"?this.driveList():this._view==="charges"?this.chargeList():this._view==="stats"?this.statsPanel():this.overview()}vehicleData(){var e,t,a;const r=this.flags.status,s={name:this.vehicleName(),model:this.deviceId?(a=(t=(e=this.hass)==null?void 0:e.devices)==null?void 0:t[this.deviceId])==null?void 0:a.model:void 0,activity:this.label("activity"),charging_state:this.label("charging_state"),plugged_in:this.binary("plugged_in"),battery_level:this.numeric("battery_level"),charge_limit_soc:this.numeric("charge_limit"),rated_range_km:this.numeric("rated_range")??this.numeric("estimated_range"),note:this.vehicleNote()};return r?(s.locked=this.binary("lock"),s.inside_temp_c=this.numeric("inside_temp"),s.outside_temp_c=this.numeric("outside_temp"),s.odometer_km=this.numeric("odometer"),s.sentry_mode=this.binary("sentry")===!0?!0:null,s.software_version=this.label("software_version")):s.facts=[],s}vehicleNote(){const e=this.fmt,t=(this.label("activity")||"").toLowerCase(),a=this.locale.toLowerCase().startsWith("fr");if(t==="charging"){const s=[a?"En charge":"Charging"],n=this.numeric("charger_power");n!=null&&n>0&&s.push(e.unit(n,1,"kW"));const o=this.numeric("energy_added");return o!=null&&o>0&&s.push(`+${e.energy(o)}`),s.join(" \xB7 ")}if(t==="driving"){const s=this.numeric("speed");if(s!=null){const n=e.unit(s,0,"km/h");return a?`Roule \xE0 ${n}`:`Driving at ${n}`}}const r=this.numeric("charge_limit");if(r!=null){const s=e.percent(r);return a?`Limite de charge ${s}`:`Charge limit ${s}`}return null}placeDetail(e){var t;const a=this.readings.get("location"),r=a?.attributes.address??((t=this.readings.get("geofence"))==null?void 0:t.attributes.address);if(typeof r!="string")return null;const s=r.trim();return!s||s===e?null:s}updatedAgo(){const e=[...this.readings.values()].flatMap(t=>[t.last_updated,t.last_changed]).filter(t=>typeof t=="string"&&!Number.isNaN(Date.parse(t))).sort().at(-1);return e?this.fmt.ago(e):null}overview(){const e=this.text,t=this.flags.car||this.flags.status,a=this.label("geofence"),r=a||e.unknownPosition,s=this.placeDetail(r),n=this.updatedAgo(),o=this.carPosition()!=null;return d`
      <div class="overview">
        ${t?d`<tl-vehicle-card
              unavailable=${e.carImageUnavailable}
              alt=${this.vehicleName()}
              image-url=${this._carImageUrl&&!this._carImageFailed?this._carImageUrl:p}
              .data=${this.vehicleData()}
            ></tl-vehicle-card>`:p}
        ${this.mapEnabled()?d`<section class="place-card">
              <h2 class="visually-hidden">${e.position}</h2>
              <div class="map-frame">
                ${this.basemapOn()&&o?d`<div class="basemap overview" data-map="overview"></div>`:p}
                <tl-mini-map
                  class="where"
                  .data=${vi(a?`${e.position} : ${a}`:e.unknownPosition,(this.label("activity")||"")==="driving",o)}
                ></tl-mini-map>
                ${this.basemapOn()&&o?d`<p class="map-credit">${se}</p>`:p}
              </div>
              <div class="place-text">
                <p class="place-name">${r}</p>
                ${s?d`<p class="place-detail">${s}</p>`:p}
                ${n?d`<p class="updated">${e.updatedLabel} ${n}</p>`:p}
              </div>
            </section>`:p}
        ${this.flags.drives?d`<tl-recent-card
              title=${e.lastDrive}
              empty=${e.noDrive}
              link-href="#drives"
              link-label=${e.allDrives}
              .data=${this._recentDrive??null}
              @click=${l=>this.onRecent(l,"drive")}
            ></tl-recent-card>`:p}
        ${this.flags.charges?d`<tl-recent-card
              id="derniere-charge"
              title=${e.lastCharge}
              empty=${e.noCharge}
              link-href="#charges"
              link-label=${e.allCharges}
              .data=${this._recentCharge??null}
              @click=${l=>this.onRecent(l,"charge")}
            ></tl-recent-card>`:p}
        ${this._month&&(this.flags.stats||this.flags.totals)?d`<tl-summary-strip
              variant="card"
              title=${e.thisMonthTitle}
              label=${e.thisMonthTitle}
              link-href="#stats"
              link-label=${e.statsLink}
              .data=${this.monthFacts(this._month)}
              @click=${l=>this.onRecent(l,"stats")}
            ></tl-summary-strip>`:p}
      </div>
    `}monthFacts(e){const t=this.fmt,a=ye(e.energy_used_kwh,e.distance_km);return[{label:this.text.distance,value:t.distance(e.distance_km)},{label:this.text.drivesCount,value:t.number(e.drive_count||0,0)},{label:this.text.efficiency,value:a==null?"\u2014":t.unit(a,0,"Wh/km")},{label:this.text.energyCharged,value:t.energy(e.energy_added_kwh)}]}onRecent(e,t){const a=e.composedPath().find(r=>r instanceof HTMLAnchorElement);if(a instanceof HTMLAnchorElement){if(e.preventDefault(),a.classList.contains("text-link")||t==="stats"){this.open(t==="drive"?"drives":t==="charge"?"charges":"stats");return}t==="drive"&&this._recentDrive?this.openDrive(this._recentDrive):t==="charge"&&this._recentCharge&&this.openCharge(this._recentCharge)}}listChips(){const e=this.text;return[{id:"7d",label:e.days7,href:"",current:this._range==="7d"},{id:"30d",label:e.days30,href:"",current:this._range==="30d"},{id:"year",label:e.yearToDate,href:"",current:this._range==="year"},{id:"all",label:e.allTime,href:"",current:this._range==="all"}]}driveList(){const e=this._drives,t=this.dayGroups(e?.data??[]);return d`
      <div class="panel">
        ${this.listToolbar(e)}
        <tl-period-chips label=${this.text.period} .data=${this.listChips()} @tl-change=${this.onChip} @click=${this.blockLink}></tl-period-chips>
        ${this.flags.totals&&this._rangeStats?this.summary(this.driveFacts(this._rangeStats)):p}
        ${t.length?t.map(a=>d`<tl-day-group heading=${a.heading} summary=${this.driveDaySummary(a.items)}>
                ${a.items.map(r=>d`<tl-drive-row .data=${r} @tl-open=${()=>this.openDrive(r)}></tl-drive-row>`)}
              </tl-day-group>`):d`<p class="message">${this.text.emptyDrives}</p>`}
      </div>
    `}chargeList(){const e=this._charges,t=this.dayGroups(e?.data??[]);return d`
      <div class="panel">
        ${this.listToolbar(e)}
        <tl-period-chips label=${this.text.period} .data=${this.listChips()} @tl-change=${this.onChip} @click=${this.blockLink}></tl-period-chips>
        ${this.flags.totals&&this._rangeStats?this.summary(this.chargeFactsFromStats(this._rangeStats)):p}
        ${t.length?t.map(a=>d`<tl-day-group heading=${a.heading} summary=${this.chargeDaySummary(a.items)}>
                ${a.items.map(r=>d`<tl-charge-row .data=${fi(r)} @tl-open=${()=>this.openCharge(r)}></tl-charge-row>`)}
              </tl-day-group>`):d`<p class="message">${this.text.emptyCharges}</p>`}
      </div>
    `}summary(e){return d`<tl-summary-strip variant="strip" label=${this.text.selectionTotals} .data=${e}></tl-summary-strip>`}driveFacts(e){return $i(e,{drives:this.text.drivesCount,distance:this.text.distance,duration:this.text.behindWheel,energy:this.text.energy,efficiency:this.text.efficiency},this.fmt)}chargeFactsFromStats(e){const t=this.fmt;return[{label:this.text.chargesCount,value:t.number(e.charge_count||0,0)},{label:this.text.energyAdded,value:t.energy(e.energy_added_kwh)}]}dayGroups(e){const t=[];for(const a of e){const r=ci(a.start_at,this.dates),s=t[t.length-1];s&&s.key===r.key?s.items.push(a):t.push({key:r.key,heading:r.label,items:[a]})}return t}driveDaySummary(e){const t=e.length,a=this.locale.toLowerCase().startsWith("fr")?t>1?"trajets":"trajet":t>1?"drives":"drive",r=this.fmt;return`${t} ${a} \xB7 ${r.distance(f(e.map(s=>s.distance_km)))} \xB7 ${r.duration(f(e.map(s=>s.duration_s)))}`}chargeDaySummary(e){const t=e.length,a=(this.locale.toLowerCase().startsWith("fr"),t>1?"charges":"charge"),r=f(e.map(s=>s.energy_added_kwh));return`${t} ${a} \xB7 +${this.fmt.energy(r)}`}listToolbar(e){const t=e?.page??this._page,a=e&&e.per_page>0?Math.max(1,Math.ceil(e.total/e.per_page)):1;return d`
      <div class="list-toolbar">
        <div class="toolbar-actions">
          ${this.iconButton("mdi:chevron-left",this.text.previous,!e||t<=1,()=>this.setPage(t-1))}
          ${this.iconButton("mdi:chevron-right",this.text.next,!e||t>=a,()=>this.setPage(t+1))}
          ${this.iconButton("mdi:refresh",this.text.refresh,!1,()=>this.reload())}
        </div>
        <span class="page-indicator">${this.pageIndicator(e)}</span>
      </div>
    `}pageIndicator(e){if(!e||e.total<=0||e.per_page<=0||e.total<=e.per_page)return`${this.text.page} ${e?.page??this._page}`;const t=(e.page-1)*e.per_page+1,a=Math.min(e.page*e.per_page,e.total);return`${t}\u2013${a}`}iconButton(e,t,a,r){return d`
      <ha-icon-button
        .label=${t}
        aria-label=${t}
        title=${t}
        ?disabled=${a}
        @click=${()=>{a||r()}}
      >
        <ha-icon icon=${e}></ha-icon>
      </ha-icon-button>
    `}statsPanel(){const e=this.text,t=[{id:"week",label:e.byWeek,href:"",current:this._period==="week"},{id:"month",label:e.byMonth,href:"",current:this._period==="month"},{id:"year",label:e.byYear,href:"",current:this._period==="year"}],a=this.flags.charts?this.statCharts():[],r=this.flags.totals?this.statsStrip():void 0;return d`
      <div class="panel">
        <tl-period-chips label=${e.period} .data=${t} @tl-change=${this.onChip} @click=${this.blockLink}></tl-period-chips>
        ${r?this.summary(r):p}
        ${a.length?d`<div class="chart-grid">
              ${a.map(s=>d`<tl-chart variant="card" title=${s.title} summary=${s.summary} .data=${s.data}></tl-chart>`)}
            </div>`:p}
        ${this._series&&a.length===0&&!r?d`<p class="message">${e.emptySeries}</p>`:p}
      </div>
    `}statsStrip(){var e;const t=(e=this._series)==null?void 0:e.buckets;return t&&t.length&&this._seriesPeriod===this._period?this.driveFacts({drive_count:f(t.map(a=>a.drive_count)),distance_km:f(t.map(a=>a.distance_km)),drive_duration_s:f(t.map(a=>a.drive_duration_s)),energy_used_kwh:f(t.map(a=>a.energy_used_kwh)),charge_count:0,energy_added_kwh:f(t.map(a=>a.energy_charged_kwh))}):this._stats?this.driveFacts(this._stats):void 0}statCharts(){var e,t,a;const r=this.flags,s=this.text,n=this._seriesPeriod===this._period?((e=this._series)==null?void 0:e.buckets)??[]:[],o=[];if(!r.charts||!n.length)return r.charts&&r.consumption_vs_temp&&(t=this._tempBins)!=null&&t.length&&o.push(this.tempChart(this._tempBins)),o;const l=n.map(c=>gi(c.start,this._period,this.dates)),h=(c,u,g,m,_,v)=>{o.push({title:c,summary:this.foldSummary(_,u,g,v),data:fe(l,l,[this.series(c,u,g,m,_)])})};if(r.chart_distance&&h(s.distance,"km",0,"accent",n.map(c=>c.distance_km),"total"),r.chart_consumption&&h(s.efficiencyChart,"Wh/km",0,"amber",n.map(c=>c.wh_per_km),"mean"),r.chart_energy){const c=n.map(m=>m.ac_energy_kwh),u=n.map(m=>m.dc_energy_kwh),g=this.locale.toLowerCase().startsWith("fr");o.push({title:s.energyCharged,summary:`${this.fmt.energy(f(c))} ${g?"en AC":"AC"} \xB7 ${this.fmt.energy(f(u))} ${g?"en DC":"DC"}`,data:fe(l,l,[this.series("AC","kWh",1,"accent",c),this.series("DC","kWh",1,"green",u)],!0)})}return r.charging_split&&h(s.chargeCostChart,"\u20AC",2,"violet",n.map(c=>c.charge_cost),"total"),r.battery_health&&h(s.rangeAtFull,"km",0,"accent",n.map(c=>c.range_at_100_km),"mean"),r.vampire_drain&&h(s.idleLoss,s.perDay,1,"slate",n.map(c=>c.idle_range_loss_km_per_day),"mean"),r.consumption_vs_temp&&(a=this._tempBins)!=null&&a.length&&o.push(this.tempChart(this._tempBins)),o}tempChart(e){const t=this.text,a=e.map(o=>`${o.temp_c_bucket}\xB0`),r=e.map(o=>`${o.temp_c_bucket}\u2013${o.temp_c_bucket+5}\xB0`),s=e.reduce((o,l)=>l.wh_per_km==null||!Number.isFinite(l.wh_per_km)?o:!o||l.wh_per_km<o.wh?{temp:l.temp_c_bucket,wh:l.wh_per_km}:o,null),n=s?`${s.temp}\u2013${s.temp+5}\xB0 \xB7 ${this.fmt.unit(s.wh,0,"Wh/km")}`:t.emptySeries;return{title:t.tempChart,summary:n,data:fe(a,r,[this.series(t.efficiencyChart,"Wh/km",0,"amber",e.map(o=>o.wh_per_km))])}}series(e,t,a,r,s){return{name:e,unit:t,decimals:a,tone:r,values:s.map(n=>b(n))}}foldSummary(e,t,a,r){const s=e.map(c=>b(c)).filter(c=>c!=null);if(!s.length)return this.text.emptySeries;const n=s.reduce((c,u)=>c+u,0),o=r==="mean"?n/s.length:n,l=Math.max(...s),h=this.locale.toLowerCase().startsWith("fr");return`${r==="mean"?h?"Moyenne":"Average":"Total"} ${this.fmt.unit(o,a,t)} \xB7 max ${this.fmt.unit(l,a,t)}`}driveDetail(){const e=this._detail,t=x(this._config),a=this.text;if(!e)return d`<div class="panel">${this.backButton("drives")}</div>`;const r=t.map&&this.basemapOn()?Ve(e.route):[],s=t.map&&!r.length?mi(e.route):[],n=this.detailDriveFacts(e);return d`
      <div class="panel">
        <div class="detail-head">
          ${this.backButton("drives")}
          <p class="eyebrow">${ge(e.start_at,this.dates)}</p>
        </div>
        ${t.map?r.length?d`<div class="map-frame detail">
                <div class="basemap interactive" data-map="drive"></div>
                <p class="map-credit">${se}</p>
              </div>`:s.length?d`<tl-mini-map class="route" .data=${_i(a.map,s)}></tl-mini-map>`:d`<p class="message">${a.noGps}</p>`:p}
        ${n.length?this.summary(n):p}
        ${this.lineCharts(e.start_at,e.series,[t.speed?["speed_kmh",a.speedChart,"km/h",0,"accent",!1]:null,t.power?["power_kw",a.power,"kW",0,"violet",!0]:null,t.elevation?["elevation_m",a.elevationChart,"m",0,"amber",!1]:null,t.battery?["battery_level",a.batteryChart,"%",0,"green",!1]:null])}
      </div>
    `}detailDriveFacts(e){const t=x(this._config),a=this.fmt,r=[];if(t.distance&&r.push({label:this.text.distance,value:a.distance(e.distance_km??null)}),t.duration&&r.push({label:this.text.duration,value:a.duration(e.duration_s??null)}),t.energy&&r.push({label:this.text.energy,value:a.energy(e.energy_used_kwh??null)}),t.efficiency){const s=ye(e.energy_used_kwh,e.distance_km);r.push({label:this.text.efficiency,value:s==null?"\u2014":a.unit(s,0,"Wh/km")})}return r}chargeDetail(){const e=this.selectedCharge(),t=this.text;if(!e)return d`<div class="panel">${this.backButton("charges")}</div>`;const a=N(this._config),r=this.fmt,s=[];if(a.energy&&s.push({label:t.energyAdded,value:r.energy(e.energy_added_kwh??null)}),a.duration&&s.push({label:t.duration,value:r.duration(e.duration_s??null)}),a.soc){const o=b(e.start_battery_level),l=b(e.end_battery_level),h=o!=null&&l!=null?`${r.number(o,0)} \u2192 ${r.percent(l)}`:r.percent(o??l);s.push({label:t.battery,value:h})}if(a.power&&s.push({label:t.power,value:r.unit(e.max_power_kw??null,0,"kW")}),a.ac_dc){const o=e.is_dc===!0?"DC":e.is_dc===!1?"AC":"\u2014";s.push({label:t.acDcShort,value:o})}a.voltage&&s.push({label:t.voltage,value:r.unit(e.voltage_v??null,0,"V")}),a.cost&&s.push({label:t.cost,value:r.money(e.cost??null)});const n=e.series??[];return d`
      <div class="panel">
        <div class="detail-head">
          ${this.backButton("charges")}
          <p class="eyebrow">${ge(e.start_at,this.dates)}</p>
        </div>
        ${this.chargeMap(e)}
        ${s.length?this.summary(s):p}
        ${a.curve?this.lineCharts(e.start_at,n,[a.power?["power_kw",t.power,"kW",0,"green",!1]:null,a.soc?["battery_level",t.battery,"%",0,"accent",!1]:null]):p}
      </div>
    `}lineCharts(e,t,a){const r=bi(t);if(r.length<2)return d`<p class="message">${this.text.notEnoughPoints}</p>`;const s=new Date(e).getTime(),n=nt(this.timeZone,new Date(s)),o=r.map(h=>(new Date(h.recorded_at).getTime()-s)/1e3),l=a.flatMap(h=>{if(!h)return[];const[c,u,g,m,_,v]=h,L=r.map(R=>b(R[c]));return L.filter(R=>R!=null).length<2?[]:[{title:u,summary:this.foldSummary(L,g,m,"mean"),data:yi(s,n,o,[{name:u,unit:g,decimals:m,tone:_,values:L,area:!0,signed:v}])}]});return l.length?d`
      <section>
        <h2>${this.text.telemetry}</h2>
        <p class="hint">${this.text.chartHint}</p>
        ${l.map(h=>d`<tl-chart variant="card" sync="detail" title=${h.title} summary=${h.summary} .data=${h.data}></tl-chart>`)}
      </section>
    `:p}backButton(e){return d`
      <button class="back" type="button" @click=${()=>this.open(e)}>
        <ha-icon icon="mdi:arrow-left"></ha-icon>
        <span class="back-label">${this.text.back}</span>
      </button>
    `}chargeMap(e){return!this.basemapOn()||!_e(e.latitude,e.longitude)?p:d`<div class="map-frame detail">
      <div class="basemap interactive" data-map="charge"></div>
      <p class="map-credit">${se}</p>
    </div>`}selectedCharge(){var e;return this._charge&&this._charge.id===this._chargeId?this._charge:((e=this._charges)==null?void 0:e.data.find(t=>t.id===this._chargeId))??(this._recentCharge&&this._recentCharge.id===this._chargeId?this._recentCharge:void 0)}openDrive(e){this._driveId=e.id,this._detail=void 0,this._view="drive"}openCharge(e){this._charge=e,this._chargeId=e.id,this._view="charge"}setPeriod(e){this._period!==e&&(this._period=e,this._series=void 0,this._tempBins=void 0,this._seriesPeriod=void 0,this._stats=void 0,this.ensureView())}setPage(e){this._page=e,this._view==="drives"?(this._drives=void 0,this.loadDrives()):this._view==="charges"&&(this._charges=void 0,this.loadCharges())}reload(){this.clearHistory(),this.ensureView()}clearHistory(){this._drives=void 0,this._charges=void 0,this._detail=void 0,this._charge=void 0,this._stats=void 0,this._series=void 0,this._tempBins=void 0,this._seriesPeriod=void 0,this._recentDrive=void 0,this._recentCharge=void 0,this._month=void 0,this._rangeStats=void 0,this._rangeStatsKey="",this._page=1,this._error=""}async ensureView(){this._view==="status"?await this.loadOverview():this._view==="drives"&&this.flags.drives&&!this._drives?await this.loadDrives():this._view==="charges"&&this.flags.charges&&!this._charges?await this.loadCharges():this._view==="stats"&&(this.flags.stats||U(this.flags))?U(this.flags)&&this.seriesStale()?await this.loadSeries():!U(this.flags)&&this.flags.stats&&!this._stats&&await this.loadStats():this._view==="drive"&&this.flags.drives&&this._driveId!=null&&!this._detail&&await this.loadDrive()}async loadOverview(){if(!this.deviceId){this._error=this.text.missingDevice;return}const e=[];this.flags.drives&&this._recentDrive===void 0&&!this._recentDrivePending&&(this._recentDrivePending=!0,e.push(this.fetchRecent("drive"))),this.flags.charges&&this._recentCharge===void 0&&!this._recentChargePending&&(this._recentChargePending=!0,e.push(this.fetchRecent("charge"))),(this.flags.stats||this.flags.totals)&&this._month===void 0&&!this._monthPending&&(this._monthPending=!0,e.push(this.fetchMonth())),await Promise.all(e)}async fetchRecent(e){try{const t=await this.call(e==="drive"?"get_drives":"get_charges",{page:1,per_page:1}),a=be(t)?t.data[0]??null:null;e==="drive"?this._recentDrive=a:this._recentCharge=a}catch{e==="drive"?this._recentDrive=null:this._recentCharge=null}finally{e==="drive"?this._recentDrivePending=!1:this._recentChargePending=!1}}async fetchMonth(){try{const e=await this.call("get_stats",pi(this.timeZone));this._month=$e(e)?e:null}catch{this._month=null}finally{this._monthPending=!1}}async loadDrives(){await this.once("drives",()=>this.load(async()=>{const e=await this.call("get_drives",{page:this._page,per_page:C(this._config),...ve(this._range,this.timeZone)});if(!be(e))throw new Error(this.text.failed);this._drives=e,await this.loadRangeStats()}))}async loadCharges(){await this.once("charges",()=>this.load(async()=>{const e=await this.call("get_charges",{page:this._page,per_page:C(this._config),...ve(this._range,this.timeZone)});if(!be(e))throw new Error(this.text.failed);this._charges=e,await this.loadRangeStats()}))}async once(e,t){if(!this._inflight.has(e)){this._inflight.add(e);try{await t()}finally{this._inflight.delete(e)}}}async loadRangeStats(){if(!this.flags.totals)return;const e=`${this._range}|${this.timeZone}`;if(!(this._rangeStatsKey===e&&this._rangeStats!==void 0)){try{const t=await this.call("get_stats",ve(this._range,this.timeZone));this._rangeStats=$e(t)?t:null}catch{this._rangeStats=null}this._rangeStatsKey=e}}async loadDrive(){const e=this._driveId;e!=null&&await this.once(`drive:${e}`,()=>this.load(async()=>{const t=await this.call("get_drive",{drive_id:e,max_points:300});if(!xi(t))throw new Error(this.text.failed);this._detail=t}))}seriesStale(){const e=this.flags;return!!(this._seriesPeriod!==this._period||Xe(e)&&!this._series||e.consumption_vs_temp&&!this._tempBins)}async loadSeries(){const e=this.flags;if(!U(e))return;const t=this._period,a=Xe(e),r=e.consumption_vs_temp;await this.once(`series:${t}`,()=>this.load(async()=>{if(a){const s=await this.call("get_stats_series",{period:t,count:rt[t]});if(!Ai(s))throw new Error(this.text.failed);this._series=s}if(r)try{this._tempBins=Si(await this.call("get_consumption_by_temp",{period:t,count:rt[t]}))}catch{this._tempBins=[]}this._seriesPeriod=t}))}async loadStats(){const e=this._period;await this.once(`stats:${e}`,()=>this.load(async()=>{const t=await this.call("get_stats",lt(e,this.timeZone));if(!$e(t))throw new Error(this.text.failed);this._stats=t}))}async load(e){if(!this.deviceId){this._error=this.text.missingDevice;return}this._loading=!0,this._error="";try{await e()}catch(t){this._error=ui(t,this.text.failed)}finally{this._loading=!1}}async call(e,t){if(!this.hass||!this.deviceId)throw new Error(this.text.missingDevice);const a=await this.hass.callService("tesla_logger",e,{device_id:this.deviceId,...t},void 0,!1,!0),r=A(a);return r&&"response"in r?r.response:a}async ensureCarImage(){const e=this.flags.car||this.flags.status,t=e?Lt(this.readings.values()):null,a=t?`${t.entryId}:${t.vehicleId}`:"";if(!e||!t){this._carImageKey="",this._carImageUrl="",this._carImageFailed=e&&!t;return}if(a===this._carImageKey&&(this._carImageUrl||this._carImageFailed))return;this._carImageGen+=1;const r=this._carImageGen;this._carImageKey=a,this._carImageUrl="",this._carImageFailed=!1;const s=this.hass;if(!(s!=null&&s.callWS)||!s.hassUrl){this._carImageFailed=!0;return}try{const n=await Ot(s,t.entryId,t.vehicleId);if(r!==this._carImageGen)return;if(!n){this._carImageFailed=!0;return}this._carImageUrl=n}catch{r===this._carImageGen&&(this._carImageFailed=!0)}}};we.properties={hass:{attribute:!1},_config:{state:!0},_view:{state:!0},_drives:{state:!0},_charges:{state:!0},_detail:{state:!0},_stats:{state:!0},_series:{state:!0},_tempBins:{state:!0},_period:{state:!0},_range:{state:!0},_page:{state:!0},_loading:{state:!0},_error:{state:!0},_recentDrive:{state:!0},_recentCharge:{state:!0},_month:{state:!0},_rangeStats:{state:!0},_carImageUrl:{state:!0},_carImageFailed:{state:!0}},we.styles=xe`
    :host {
      display: block;
      --tl-ha-bg: var(--primary-background-color, #f4f4f4);
      --tl-ha-surface: var(--card-background-color, var(--ha-card-background, #fff));
      --tl-ha-surface-2: var(--secondary-background-color, #f4f4f4);
      --tl-ha-text: var(--primary-text-color, #171a20);
      --tl-ha-muted: var(--secondary-text-color, #5c5e62);
      --tl-ha-accent: var(--primary-color, #3e6ae1);
      --tl-ha-line: var(--divider-color, rgba(23, 26, 32, 0.12));
      --tl-ha-green: var(--success-color, #1d9b52);
      --tl-ha-danger: var(--error-color, #c8332f);
      --tl-ha-map: var(--secondary-background-color, #eef0f3);
      --tl-bg: var(--tl-ha-bg);
      --tl-surface: var(--tl-ha-surface);
      --tl-text: var(--tl-ha-text);
      --tl-muted: var(--tl-ha-muted);
      --tl-accent: var(--tl-ha-accent);
      --tl-line: var(--tl-ha-line);
      --tl-radius: 14px;
      --ha-card-background: var(--tl-ha-bg);
      color: var(--tl-text);
      color-scheme: light;
      font-family: var(--ha-font-family, var(--tl-font, inherit));
    }
    :host(.dark) {
      color-scheme: dark;
      --tl-ha-bg: var(--primary-background-color, #111318);
      --tl-ha-surface: var(--card-background-color, #181b21);
      --tl-ha-surface-2: var(--secondary-background-color, #20242b);
      --tl-ha-text: var(--primary-text-color, #f2f3f5);
      --tl-ha-muted: var(--secondary-text-color, #a3a6ad);
      --tl-ha-accent: var(--primary-color, #6f93ff);
      --tl-ha-line: var(--divider-color, rgba(255, 255, 255, 0.12));
      --tl-ha-green: var(--success-color, #4fd17c);
      --tl-ha-danger: var(--error-color, #ff7a70);
      --tl-ha-map: var(--secondary-background-color, #1d2128);
    }
    ha-card {
      padding: 8px 0 16px;
      color: var(--tl-text);
    }
    tl-vehicle-card,
    tl-recent-card,
    tl-summary-strip,
    tl-mini-map,
    tl-day-group,
    tl-chart,
    tl-tabs,
    tl-period-chips {
      display: block;
    }
    tl-tabs {
      margin: 0 8px 8px;
    }
    .overview {
      display: grid;
      gap: 16px;
      padding: 0 16px;
    }
    .overview > tl-summary-strip {
      grid-column: 1 / -1;
    }
    .place-card {
      display: flex;
      flex-direction: column;
      gap: 16px;
      overflow: hidden;
      padding: 0;
      border: 1px solid var(--tl-line);
      border-radius: var(--tl-radius);
      background: var(--tl-surface);
    }
    .map-frame {
      position: relative;
      overflow: hidden;
      background: var(--tl-ha-map);
    }
    .map-frame.detail {
      border: 1px solid var(--tl-line);
      border-radius: var(--tl-radius);
    }
    .basemap {
      width: 100%;
      height: 100%;
    }
    .basemap.interactive {
      height: 320px;
    }
    .basemap.overview {
      position: absolute;
      inset: 0 0 auto;
      height: 100%;
      z-index: 0;
    }
    tl-mini-map.where {
      position: relative;
      z-index: 1;
      display: block;
      aspect-ratio: 360 / 220;
      background: transparent;
    }
    .map-credit {
      position: absolute;
      right: 6px;
      bottom: 4px;
      z-index: 2;
      margin: 0;
      padding: 0 4px;
      border-radius: 2px;
      background: color-mix(in srgb, var(--tl-surface, #fff) 82%, transparent);
      color: var(--tl-muted, #5c5e62);
      font-size: 10px;
      line-height: 1.4;
      pointer-events: none;
    }
    .place-text {
      padding: 0 24px 24px;
    }
    .place-name,
    .place-detail,
    .updated {
      margin: 0;
    }
    .place-name {
      font-size: 1.125rem;
      font-weight: 500;
    }
    .place-detail {
      margin-top: 2px;
      color: var(--tl-muted);
      font-size: 0.875rem;
    }
    .updated {
      margin-top: 12px;
      color: var(--tl-muted);
      font-size: 0.8125rem;
    }
    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
    .place-card .muted,
    .message,
    .page-indicator,
    .hint {
      color: var(--tl-muted);
    }
    .panel {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 0 16px;
    }
    .list-toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }
    .toolbar-actions {
      display: flex;
      align-items: center;
    }
    ha-icon-button {
      display: inline-flex;
      width: 40px;
      height: 40px;
      color: var(--tl-text);
      --mdc-icon-size: 24px;
    }
    .page-indicator {
      font-variant-numeric: tabular-nums;
    }
    .chart-grid {
      display: grid;
      gap: 16px;
    }
    .back {
      display: flex;
      align-items: center;
      gap: 4px;
      margin: 0;
      padding: 0;
      border: 0;
      background: transparent;
      color: var(--tl-accent);
      font: inherit;
      cursor: pointer;
    }
    .detail-head {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .eyebrow {
      margin: 0;
      color: var(--tl-muted);
    }
    @media (min-width: 720px) {
      .chart-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media (min-width: 900px) {
      .overview {
        grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
        align-items: start;
      }
      .overview > tl-vehicle-card {
        grid-row: span 3;
      }
    }
  `;let dt=we;customElements.get("tesla-logger-card-impl")||customElements.define("tesla-logger-card-impl",dt),customElements.get("tesla-logger-card-editor-impl")||customElements.define("tesla-logger-card-editor-impl",tt);export{dt as TeslaLoggerCard,tt as TeslaLoggerCardEditor};
