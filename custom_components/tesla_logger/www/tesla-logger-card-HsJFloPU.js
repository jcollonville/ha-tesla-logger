/* Tesla Logger Lovelace card. Built from frontend/. Do not edit. */
const lt=globalThis,_t=lt.ShadowRoot&&(lt.ShadyCSS===void 0||lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$t=Symbol(),Rt=new WeakMap;let Wt=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==$t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o;const t=this.t;if(_t&&i===void 0){const e=t!==void 0&&t.length===1;e&&(i=Rt.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&Rt.set(t,i))}return i}toString(){return this.cssText}};const We=i=>new Wt(typeof i=="string"?i:i+"",void 0,$t),Bt=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,s,a)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[a+1],i[0]);return new Wt(e,i,$t)},Be=(i,t)=>{if(_t)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=lt.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}},Ht=_t?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return We(e)})(i):i;const{is:He,defineProperty:je,getOwnPropertyDescriptor:Ge,getOwnPropertyNames:Ve,getOwnPropertySymbols:qe,getPrototypeOf:Ze}=Object,R=globalThis,jt=R.trustedTypes,Ke=jt?jt.emptyScript:"",Gt=R.reactiveElementPolyfillSupport,J=(i,t)=>i,xt={toAttribute(i,t){switch(t){case Boolean:i=i?Ke:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Vt=(i,t)=>!He(i,t),qt={attribute:!0,type:String,converter:xt,reflect:!1,useDefault:!1,hasChanged:Vt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),R.litPropertyMetadata??(R.litPropertyMetadata=new WeakMap);let W=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??(this.l=[])).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,t=qt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(i,t),!t.noAccessor){const e=Symbol(),r=this.getPropertyDescriptor(i,e,t);r!==void 0&&je(this.prototype,i,r)}}static getPropertyDescriptor(i,t,e){const{get:r,set:s}=Ge(this.prototype,i)??{get(){return this[t]},set(a){this[t]=a}};return{get:r,set(a){const n=r?.call(this);s?.call(this,a),this.requestUpdate(i,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??qt}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;const i=Ze(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){const t=this.properties,e=[...Ve(t),...qe(t)];for(const r of e)this.createProperty(r,t[r])}const i=this[Symbol.metadata];if(i!==null){const t=litPropertyMetadata.get(i);if(t!==void 0)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const t=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const r of e)t.unshift(Ht(r))}else i!==void 0&&t.push(Ht(i));return t}static _$Eu(i,t){const e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(t=>t(this))}addController(i){var t;(this._$EO??(this._$EO=new Set)).add(i),this.renderRoot!==void 0&&this.isConnected&&((t=i.hostConnected)==null||t.call(i))}removeController(i){var t;(t=this._$EO)==null||t.delete(i)}_$E_(){const i=new Map,t=this.constructor.elementProperties;for(const e of t.keys())this.hasOwnProperty(e)&&(i.set(e,this[e]),delete this[e]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Be(i,this.constructor.elementStyles),i}connectedCallback(){var i;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$EO)==null||i.forEach(t=>{var e;return(e=t.hostConnected)==null?void 0:e.call(t)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(t=>{var e;return(e=t.hostDisconnected)==null?void 0:e.call(t)})}attributeChangedCallback(i,t,e){this._$AK(i,e)}_$ET(i,t){var e;const r=this.constructor.elementProperties.get(i),s=this.constructor._$Eu(i,r);if(s!==void 0&&r.reflect===!0){const a=(((e=r.converter)==null?void 0:e.toAttribute)!==void 0?r.converter:xt).toAttribute(t,r.type);this._$Em=i,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(i,t){var e,r;const s=this.constructor,a=s._$Eh.get(i);if(a!==void 0&&this._$Em!==a){const n=s.getPropertyOptions(a),o=typeof n.converter=="function"?{fromAttribute:n.converter}:((e=n.converter)==null?void 0:e.fromAttribute)!==void 0?n.converter:xt;this._$Em=a;const l=o.fromAttribute(t,n.type);this[a]=l??((r=this._$Ej)==null?void 0:r.get(a))??l,this._$Em=null}}requestUpdate(i,t,e,r=!1,s){var a;if(i!==void 0){const n=this.constructor;if(r===!1&&(s=this[i]),e??(e=n.getPropertyOptions(i)),!((e.hasChanged??Vt)(s,t)||e.useDefault&&e.reflect&&s===((a=this._$Ej)==null?void 0:a.get(i))&&!this.hasAttribute(n._$Eu(i,e))))return;this.C(i,t,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,t,{useDefault:e,reflect:r,wrapped:s},a){e&&!(this._$Ej??(this._$Ej=new Map)).has(i)&&(this._$Ej.set(i,a??t??this[i]),s!==!0||a!==void 0)||(this._$AL.has(i)||(this.hasUpdated||e||(t=void 0),this._$AL.set(i,t)),r===!0&&this._$Em!==i&&(this._$Eq??(this._$Eq=new Set)).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,a]of r){const{wrapped:n}=a,o=this[s];n!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,a,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(i){}_$AE(i){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostUpdated)==null?void 0:r.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(i){}firstUpdated(i){}};W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[J("elementProperties")]=new Map,W[J("finalized")]=new Map,Gt?.({ReactiveElement:W}),(R.reactiveElementVersions??(R.reactiveElementVersions=[])).push("2.1.2");const ct=globalThis,Zt=i=>i,ht=ct.trustedTypes,Kt=ht?ht.createPolicy("lit-html",{createHTML:i=>i}):void 0,Yt="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,Qt="?"+F,Ye=`<${Qt}>`,I=document,X=()=>I.createComment(""),tt=i=>i===null||typeof i!="object"&&typeof i!="function",yt=Array.isArray,Qe=i=>yt(i)||typeof i?.[Symbol.iterator]=="function",bt=`[ 	
\f\r]`,et=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jt=/-->/g,Xt=/>/g,z=RegExp(`>|${bt}(?:([^\\s"'>=/]+)(${bt}*=${bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),te=/'/g,ee=/"/g,ie=/^(?:script|style|textarea|title)$/i,re=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),h=re(1),$=re(2),B=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),se=new WeakMap,N=I.createTreeWalker(I,129);function ae(i,t){if(!yt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Kt!==void 0?Kt.createHTML(t):t}const Je=(i,t)=>{const e=i.length-1,r=[];let s,a=t===2?"<svg>":t===3?"<math>":"",n=et;for(let o=0;o<e;o++){const l=i[o];let u,p,c=-1,g=0;for(;g<l.length&&(n.lastIndex=g,p=n.exec(l),p!==null);)g=n.lastIndex,n===et?p[1]==="!--"?n=Jt:p[1]!==void 0?n=Xt:p[2]!==void 0?(ie.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=z):p[3]!==void 0&&(n=z):n===z?p[0]===">"?(n=s??et,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,u=p[1],n=p[3]===void 0?z:p[3]==='"'?ee:te):n===ee||n===te?n=z:n===Jt||n===Xt?n=et:(n=z,s=void 0);const _=n===z&&i[o+1].startsWith("/>")?" ":"";a+=n===et?l+Ye:c>=0?(r.push(u),l.slice(0,c)+Yt+l.slice(c)+F+_):l+F+(c===-2?o:_)}return[ae(i,a+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class nt{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let a=0,n=0;const o=t.length-1,l=this.parts,[u,p]=Je(t,e);if(this.el=nt.createElement(u,r),N.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=N.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Yt)){const g=p[n++],_=s.getAttribute(c).split(F),v=/([.?@])?(.*)/.exec(g);l.push({type:1,index:a,name:v[2],strings:_,ctor:v[1]==="."?ti:v[1]==="?"?ei:v[1]==="@"?ii:dt}),s.removeAttribute(c)}else c.startsWith(F)&&(l.push({type:6,index:a}),s.removeAttribute(c));if(ie.test(s.tagName)){const c=s.textContent.split(F),g=c.length-1;if(g>0){s.textContent=ht?ht.emptyScript:"";for(let _=0;_<g;_++)s.append(c[_],X()),N.nextNode(),l.push({type:2,index:++a});s.append(c[g],X())}}}else if(s.nodeType===8)if(s.data===Qt)l.push({type:2,index:a});else{let c=-1;for(;(c=s.data.indexOf(F,c+1))!==-1;)l.push({type:7,index:a}),c+=F.length-1}a++}}static createElement(t,e){const r=I.createElement("template");return r.innerHTML=t,r}}function H(i,t,e=i,r){var s,a;if(t===B)return t;let n=r!==void 0?(s=e._$Co)==null?void 0:s[r]:e._$Cl;const o=tt(t)?void 0:t._$litDirective$;return n?.constructor!==o&&((a=n?._$AO)==null||a.call(n,!1),o===void 0?n=void 0:(n=new o(i),n._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=n:e._$Cl=n),n!==void 0&&(t=H(i,n._$AS(i,t.values),n,r)),t}class Xe{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=(t?.creationScope??I).importNode(e,!0);N.currentNode=s;let a=N.nextNode(),n=0,o=0,l=r[0];for(;l!==void 0;){if(n===l.index){let u;l.type===2?u=new ot(a,a.nextSibling,this,t):l.type===1?u=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(u=new ri(a,this,t)),this._$AV.push(u),l=r[++o]}n!==l?.index&&(a=N.nextNode(),n++)}return N.currentNode=I,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class ot{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),tt(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==B&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Qe(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&tt(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:s}=t,a=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=nt.createElement(ae(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)==null?void 0:e._$AD)===a)this._$AH.p(r);else{const n=new Xe(a,this),o=n.u(this.options);n.p(r),this.T(o),this._$AH=n}}_$AC(t){let e=se.get(t.strings);return e===void 0&&se.set(t.strings,e=new nt(t)),e}k(t){yt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const a of t)s===e.length?e.push(r=new ot(this.O(X()),this.O(X()),this,this.options)):r=e[s],r._$AI(a),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t!==this._$AB;){const s=Zt(t).nextSibling;Zt(t).remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class dt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,a){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(t,e=this,r,s){const a=this.strings;let n=!1;if(a===void 0)t=H(this,t,e,0),n=!tt(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const o=t;let l,u;for(t=a[0],l=0;l<a.length-1;l++)u=H(this,o[r+l],e,l),u===B&&(u=this._$AH[l]),n||(n=!tt(u)||u!==this._$AH[l]),u===d?t=d:t!==d&&(t+=(u??"")+a[l+1]),this._$AH[l]=u}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ti extends dt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class ei extends dt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class ii extends dt{constructor(t,e,r,s,a){super(t,e,r,s,a),this.type=5}_$AI(t,e=this){if((t=H(this,t,e,0)??d)===B)return;const r=this._$AH,s=t===d&&r!==d||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==d&&(r===d||s);s&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ri{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const ne=ct.litHtmlPolyfillSupport;ne?.(nt,ot),(ct.litHtmlVersions??(ct.litHtmlVersions=[])).push("3.3.3");const si=(i,t,e)=>{const r=e?.renderBefore??t;let s=r._$litPart$;if(s===void 0){const a=e?.renderBefore??null;r._$litPart$=s=new ot(t.insertBefore(X(),a),a,void 0,e??{})}return s._$AI(i),s};const it=globalThis;let j=class extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(i){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=si(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return B}};var oe;j._$litElement$=!0,j.finalized=!0,(oe=it.litElementHydrateSupport)==null||oe.call(it,{LitElement:j});const le=it.litElementPolyfillSupport;le?.({LitElement:j}),(it.litElementVersions??(it.litElementVersions=[])).push("4.2.2");const ai=i=>i.strings===void 0;const ni={CHILD:2},oi=i=>(...t)=>({_$litDirective$:i,values:t});class li{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const rt=(i,t)=>{var e;const r=i._$AN;if(r===void 0)return!1;for(const s of r)(e=s._$AO)==null||e.call(s,t,!1),rt(s,t);return!0},ut=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},ce=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),di(t)}};function ci(i){this._$AN!==void 0?(ut(this),this._$AM=i,ce(this)):this._$AM=i}function hi(i,t=!1,e=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let a=e;a<r.length;a++)rt(r[a],!1),ut(r[a]);else r!=null&&(rt(r,!1),ut(r));else rt(this,i)}const di=i=>{i.type==ni.CHILD&&(i._$AP??(i._$AP=hi),i._$AQ??(i._$AQ=ci))};class ui extends li{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),ce(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,s;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(s=this.disconnected)==null||s.call(this)),e&&(rt(this,t),ut(this))}setValue(t){if(ai(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const wt=new WeakMap,kt=oi(class extends ui{render(i){return d}update(i,[t]){var e;const r=t!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=(e=i.options)==null?void 0:e.host,this.rt(this.ct=i.element)),d}rt(i){if(this.G!==void 0)if(this.isConnected||(i=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let e=wt.get(t);e===void 0&&(e=new WeakMap,wt.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,i),i!==void 0&&this.G.call(this.ht,i)}else this.G.value=i}get lt(){var i,t;return typeof this.G=="function"?(i=wt.get(this.ht??globalThis))==null?void 0:i.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),he=10,pi=50;function P(i){const t=i?.page_size;return typeof t!="number"||!Number.isFinite(t)?he:Math.min(pi,Math.max(1,Math.round(t)))}const Ct={distance:!0,duration:!0,energy:!0,efficiency:!0,map:!0,speed:!0,power:!0,elevation:!0,battery:!0},At={energy:!0,duration:!0,soc:!0,power:!0,ac_dc:!0,voltage:!0,cost:!0,curve:!0},gi=Object.keys(Ct),mi=Object.keys(At);function de(i,t){const e={...i};if(!t||typeof t!="object")return e;for(const r of Object.keys(i)){const s=t[r];typeof s=="boolean"&&(e[r]=s)}return e}function G(i){return de(Ct,i?.drive_detail)}function V(i){return de(At,i?.charge_detail)}const ue={status:"Status",drives:"Drives",charges:"Charges",stats:"Stats",charts:"Charts",consumptionChart:"Consumption",chargedChart:"Energy charged",emptySeries:"No data for this period.",latest:"Latest",period:"Period",thisWeek:"This week",thisMonth:"This month",thisYear:"This year",consumed:"consumed",batteryHealth:"Battery health",rangeAtFull:"Range at 100%",acDc:"AC/DC charging",fastShare:"fast charging",cost:"Cost",perKm:"/km",perDay:"km/day",idleUse:"Parked consumption",tempUse:"Consumption vs temperature",car:"Car",sections:"Sections",pageSize:"Items per page",driveDetail:"Drive detail",chargeDetail:"Charge detail",resetZoom:"Reset zoom",voltage:"Voltage",soc:"State of charge",acDcShort:"AC/DC",chargeCurve:"Charge curve",noCurve:"This charge has no curve.",battery:"Battery",drivingGroup:"Driving",cabinGroup:"Cabin",chargeGroup:"Charging",viewsGroup:"Views",moreCharts:"More charts",previousPeriod:{week:"previous week",month:"previous month",year:"previous year"},range:"Range",speed:"Speed",power:"Power",inside:"Inside",outside:"Outside",charger:"Charger",added:"Added",odometer:"Odometer",limit:"Limit",location:"Location",unknown:"Unknown",loading:"Loading\u2026",emptyDrives:"No drives in this page.",emptyCharges:"No charges in this page.",back:"Back",refresh:"Refresh",week:"Week",month:"Month",year:"Year",distance:"Distance",duration:"Duration",energy:"Energy",efficiency:"Efficiency",drivesCount:"Drives",chargesCount:"Charges",energyAdded:"Energy added",map:"Route",speedChart:"Speed",elevationChart:"Elevation",batteryChart:"Battery",noRoute:"This drive has no route points.",pick:"Select a Tesla Logger entity in the card editor.",missingDevice:"This entity is not linked to a Tesla Logger device.",failed:"Could not load history.",previous:"Previous",next:"Next",page:"Page",online:"Online",asleep:"Asleep",offline:"Offline",driving:"Driving",charging:"Charging",updating:"Updating",entity:"Entity",defaultView:"Default view",showMap:"Map",officialImage:"Official image",showBlocks:"Blocks",detailFields:{distance:"Distance",duration:"Duration",energy:"Energy",efficiency:"Efficiency",map:"Route map",speed:"Speed chart",power:"Power",elevation:"Elevation chart",battery:"Battery chart",soc:"State of charge",ac_dc:"AC/DC",voltage:"Voltage",cost:"Cost",curve:"Charge curve"},showFields:{car:"Car card",status:"Status",drives:"Drives",charges:"Charges",stats:"Stats",charts:"Charts",chart_consumption:"Consumption (Wh/km)",chart_distance:"Distance",chart_energy:"Energy charged",totals:"Totals",battery_health:"Battery health",charging_split:"AC/DC charging and cost",vampire_drain:"Parked consumption",consumption_vs_temp:"Consumption vs temperature"}},fi={...ue,status:"\xC9tat",drives:"Trajets",charges:"Charges",stats:"Statistiques",perDay:"km/j",charts:"Graphiques",consumptionChart:"Consommation",chargedChart:"\xC9nergie charg\xE9e",emptySeries:"Aucune donn\xE9e sur cette p\xE9riode.",latest:"Dernier",period:"P\xE9riode",thisWeek:"Cette semaine",thisMonth:"Ce mois",thisYear:"Cette ann\xE9e",consumed:"consomm\xE9",batteryHealth:"Sant\xE9 batterie",rangeAtFull:"Autonomie \xE0 100 %",acDc:"Charges AC/DC",fastShare:"recharge rapide",cost:"Co\xFBt",perKm:"/km",idleUse:"Consommation \xE0 l'arr\xEAt",tempUse:"Consommation vs temp\xE9rature",car:"Voiture",sections:"Sections",pageSize:"\xC9l\xE9ments par page",driveDetail:"D\xE9tail du trajet",chargeDetail:"D\xE9tail de la charge",resetZoom:"R\xE9initialiser le zoom",voltage:"Tension",soc:"Niveau de charge",acDcShort:"AC/DC",chargeCurve:"Courbe de charge",noCurve:"Cette charge n'a pas de courbe.",battery:"Batterie",drivingGroup:"D\xE9placement",cabinGroup:"Habitacle",chargeGroup:"Charge",viewsGroup:"Vues",moreCharts:"Autres graphiques",previousPeriod:{week:"semaine pr\xE9c\xE9dente",month:"mois pr\xE9c\xE9dent",year:"ann\xE9e pr\xE9c\xE9dente"},range:"Autonomie",speed:"Vitesse",power:"Puissance",inside:"Int\xE9rieur",outside:"Ext\xE9rieur",charger:"Chargeur",added:"Ajout\xE9e",odometer:"Odom\xE8tre",limit:"Limite",location:"Lieu",unknown:"Inconnu",loading:"Chargement\u2026",emptyDrives:"Aucun trajet sur cette page.",emptyCharges:"Aucune charge sur cette page.",back:"Retour",refresh:"Actualiser",week:"Semaine",month:"Mois",year:"Ann\xE9e",distance:"Distance",duration:"Dur\xE9e",energy:"\xC9nergie",efficiency:"Efficacit\xE9",drivesCount:"Trajets",chargesCount:"Charges",energyAdded:"\xC9nergie ajout\xE9e",map:"Trac\xE9",speedChart:"Vitesse",elevationChart:"Altitude",batteryChart:"Batterie",noRoute:"Ce trajet n'a pas de trac\xE9.",pick:"Choisissez une entit\xE9 Tesla Logger dans l'\xE9diteur.",missingDevice:"Cette entit\xE9 n'est pas li\xE9e \xE0 un appareil Tesla Logger.",failed:"Impossible de charger l'historique.",previous:"Pr\xE9c\xE9dent",next:"Suivant",page:"Page",online:"En ligne",asleep:"Endormie",offline:"Hors ligne",driving:"En route",charging:"En charge",updating:"Mise \xE0 jour",entity:"Entit\xE9",defaultView:"Vue par d\xE9faut",showMap:"Carte",officialImage:"Image officielle",showBlocks:"Blocs",detailFields:{distance:"Distance",duration:"Dur\xE9e",energy:"\xC9nergie",efficiency:"Efficacit\xE9",map:"Carte du trac\xE9",speed:"Graphique de vitesse",power:"Puissance",elevation:"Graphique d'altitude",battery:"Graphique de batterie",soc:"Niveau de charge",ac_dc:"AC/DC",voltage:"Tension",cost:"Co\xFBt",curve:"Courbe de charge"},showFields:{car:"Carte voiture",status:"\xC9tat",drives:"Trajets",charges:"Charges",stats:"Statistiques",charts:"Graphiques",chart_consumption:"Consommation (Wh/km)",chart_distance:"Distance",chart_energy:"\xC9nergie charg\xE9e",totals:"Totaux",battery_health:"Sant\xE9 batterie",charging_split:"Charges AC/DC et co\xFBt",vampire_drain:"Consommation \xE0 l'arr\xEAt",consumption_vs_temp:"Consommation vs temp\xE9rature"}};function pt(i){const t=(i||"").toLowerCase().replace("_","-");return t==="fr"||t.startsWith("fr-")?"fr":"en"}function pe(i){return i==="fr"?fi:ue}function vi(i,t){return i[t]||t||i.unknown}const St={car:!0,status:!0,drives:!0,charges:!0,stats:!0,charts:!0,chart_consumption:!0,chart_distance:!0,chart_energy:!0,totals:!0,battery_health:!0,charging_split:!0,vampire_drain:!0,consumption_vs_temp:!0},_i=Object.keys(St),$i=["car","status","drives","charges","stats","charts"],xi=["chart_consumption","chart_distance","chart_energy","battery_health","charging_split","vampire_drain","consumption_vs_temp"];function q(i){const t={...St},e=i?.show;if(!e||typeof e!="object")return t;for(const r of _i){const s=e[r];typeof s=="boolean"&&(t[r]=s)}return t}function yi(i){return i.chart_consumption||i.chart_distance||i.chart_energy||i.totals||i.battery_health||i.charging_split||i.vampire_drain||i.consumption_vs_temp}function Mt(i){return i.charts&&yi(i)}function ge(i){return i.charts&&(i.chart_consumption||i.chart_distance||i.chart_energy||i.totals||i.battery_health||i.charging_split||i.vampire_drain)}function Z(i){const t=[];return i.status&&t.push("status"),i.drives&&t.push("drives"),i.charges&&t.push("charges"),i.stats&&t.push("stats"),Mt(i)&&t.push("charts"),t}function bi(i,t){return i==="drive"?t.drives?i:Z(t)[0]??"status":i==="charge"?t.charges?i:Z(t)[0]??"status":i==="stats"?t.stats?i:Z(t)[0]??"status":Z(t).includes(i)?i:Z(t)[0]??"status"}const wi=["status","drives","charges","stats","charts"],Ft=class extends j{setConfig(t){const e=q(t);this._config={...t,show_map:t.show_map!==!1,official_image:t.official_image!==!1,page_size:P(t),show:e,drive_detail:G(t),charge_detail:V(t)}}render(){var t;if(!this.hass||!this._config)return h``;const e=pe(pt(((t=this.hass.locale)==null?void 0:t.language)||this.hass.language)),r=q(this._config),s=G(this._config),a=V(this._config);return h`
      <div class="editor">
        ${this.entityField(e)}
        <div class="pair">
          <label class="field">
            ${e.defaultView}
            <select
              data-field="default_view"
              .value=${this._config.default_view||"status"}
              @change=${n=>this.commit({default_view:n.target.value})}
            >
              ${wi.map(n=>{var o;return h`<option value=${n} ?selected=${(((o=this._config)==null?void 0:o.default_view)||"status")===n}>
                  ${e[n]}
                </option>`})}
            </select>
          </label>
          <label class="field">
            ${e.pageSize}
            <input
              data-field="page_size"
              type="number"
              min="1"
              max="50"
              step="1"
              .value=${String(P(this._config))}
              @change=${n=>this.commit({page_size:Number(n.target.value)})}
            />
          </label>
        </div>
        <fieldset>
          <legend>${e.sections}</legend>
          <div class="grid">
            ${this.check(e.showMap,this._config.show_map!==!1,n=>this.commit({show_map:n}))}
            ${this.check(e.officialImage,this._config.official_image!==!1,n=>this.commit({official_image:n}),"official_image")}
            ${$i.map(n=>this.check(e.showFields[n],r[n],o=>this.patchShow(n,o)))}
          </div>
        </fieldset>
        <fieldset>
          <legend>${e.charts}</legend>
          <div class="grid">
            ${xi.map(n=>this.check(e.showFields[n],r[n],o=>this.patchShow(n,o)))}
          </div>
        </fieldset>
        <fieldset>
          <legend>${e.driveDetail}</legend>
          <div class="grid">
            ${gi.map(n=>this.check(e.detailFields[n],s[n],o=>this.patchDrive(n,o)))}
          </div>
        </fieldset>
        <fieldset>
          <legend>${e.chargeDetail}</legend>
          <div class="grid">
            ${mi.map(n=>this.check(e.detailFields[n],a[n],o=>this.patchCharge(n,o)))}
          </div>
        </fieldset>
      </div>
    `}entityField(t){var e;const r=((e=this._config)==null?void 0:e.entity)||"";return customElements.get("ha-entity-picker")?h`
        <ha-entity-picker
          .hass=${this.hass}
          .value=${r}
          .label=${t.entity}
          allow-custom-entity
          @value-changed=${s=>this.commit({entity:s.detail.value||""})}
        ></ha-entity-picker>
      `:h`
      <label class="field">
        ${t.entity}
        <input
          data-field="entity"
          type="text"
          .value=${r}
          @change=${s=>this.commit({entity:s.target.value})}
        />
      </label>
    `}check(t,e,r,s){return h`
      <label class="row">
        <input
          type="checkbox"
          data-field=${s??d}
          .checked=${e}
          @change=${a=>r(a.target.checked)}
        />
        <span>${t}</span>
      </label>
    `}patchShow(t,e){const r={...q(this._config),[t]:e};this.commit({show:r})}patchDrive(t,e){this.commit({drive_detail:{...G(this._config),[t]:e}})}patchCharge(t,e){this.commit({charge_detail:{...V(this._config),[t]:e}})}commit(t){if(!this._config)return;const e={...this._config,...t,show:q({entity:this._config.entity,show:{...q(this._config),...t.show}}),drive_detail:G({entity:this._config.entity,drive_detail:{...G(this._config),...t.drive_detail}}),charge_detail:V({entity:this._config.entity,charge_detail:{...V(this._config),...t.charge_detail}}),page_size:P({entity:this._config.entity,page_size:t.page_size??this._config.page_size}),show_map:t.show_map??this._config.show_map!==!1,official_image:t.official_image??this._config.official_image!==!1};delete e.show_charts,this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}};Ft.properties={hass:{attribute:!1},_config:{state:!0}},Ft.styles=Bt`
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
  `;let me=Ft;const ki={top:[[27,121],[15,111],[16,99],[40,89],[96,80],[142,73],[178,54],[216,46],[254,47],[292,56],[336,69],[367,76],[383,84],[386,104],[377,121]],glass:[[152,73.5],[180,57.5],[216,50],[254,51],[288,59],[327,71.5]],wheels:[87,316],wheelY:113,radius:27,pillar:238,angular:!1},Ci={top:[[25,117],[13,104],[14,88],[40,76],[96,67],[138,59],[176,38],[214,28],[262,29],[306,37],[346,52],[372,61],[386,73],[389,99],[380,116]],glass:[[148,60],[180,42],[214,32.5],[262,33.5],[302,41.5],[336,55]],wheels:[86,316],wheelY:109,radius:29,pillar:240,angular:!1},Ai={top:[[26,121],[12,110],[14,98],[44,88],[110,80],[154,72],[188,54],[224,46],[264,47],[302,56],[345,68],[372,75],[386,83],[389,103],[380,120]],glass:[[164,72.5],[190,57.5],[224,50],[264,51],[298,59],[337,70.5]],wheels:[84,326],wheelY:113,radius:27,pillar:250,angular:!1},Si={top:[[25,118],[12,104],[14,89],[44,78],[104,69],[142,61],[178,40],[216,31],[264,31],[308,38],[348,50],[373,58],[387,70],[389,99],[381,117]],glass:[[152,62],[182,43.5],[216,35.5],[264,35.5],[304,42.5],[342,55.5]],wheels:[85,322],wheelY:110.5,radius:29.5,pillar:244,angular:!1},Mi={top:[[22,120],[12,108],[14,92],[200,36],[388,70],[390,106],[382,120]],glass:[[118,67],[200,42],[282,56],[282,66]],wheels:[84,320],wheelY:110,radius:30,pillar:214,angular:!0},Fi={3:ki,y:Ci,s:Ai,x:Si,ct:Mi},gt="#e8e9eb";function Ei(i){const t=(i||"").toLowerCase().replace(/[_\s-]/g,"").replace(/^tesla/,"").replace(/^model/,"");return t==="y"?"y":t==="s"?"s":t==="x"?"x":t==="cybertruck"||t==="ct"?"ct":"3"}function Et(i,t){const e=Number.parseInt(i.replace("#",""),16),r=s=>{const a=e>>s&255,n=t>=0?255:0,o=a+(n-a)*Math.abs(t);return Math.round(Math.min(255,Math.max(0,o))).toString(16).padStart(2,"0")};return`#${r(16)}${r(8)}${r(0)}`}function fe(i,t){if(t)return i.slice(1).map(r=>` L${r[0].toFixed(1)} ${r[1].toFixed(1)}`).join("");let e="";for(let r=0;r<i.length-1;r+=1){const s=i[Math.max(0,r-1)],a=i[r],n=i[r+1],o=i[Math.min(i.length-1,r+2)],l=a[0]+(n[0]-s[0])/6,u=a[1]+(n[1]-s[1])/6,p=n[0]-(o[0]-a[0])/6,c=n[1]-(o[1]-a[1])/6;e+=` C${l.toFixed(1)} ${u.toFixed(1)} ${p.toFixed(1)} ${c.toFixed(1)} ${n[0].toFixed(1)} ${n[1].toFixed(1)}`}return e}function Di(i){const t=i.top[0],e=i.top[i.top.length-1];let r=`M${t[0].toFixed(1)} ${t[1].toFixed(1)}${fe(i.top,i.angular)}`;const s=Math.max(e[1],t[1]),a=i.radius+4,n=Math.min(a-1,Math.max(0,s-i.wheelY)),o=Math.sqrt(a*a-n*n),[l,u]=i.wheels;return r+=` L${(u+o).toFixed(1)} ${s.toFixed(1)} A${a.toFixed(1)} ${a.toFixed(1)} 0 1 0 ${(u-o).toFixed(1)} ${s.toFixed(1)} L${(l+o).toFixed(1)} ${s.toFixed(1)} A${a.toFixed(1)} ${a.toFixed(1)} 0 1 0 ${(l-o).toFixed(1)} ${s.toFixed(1)} Z`,r}function Ii(i){const t=i.glass[0];return`M${t[0].toFixed(1)} ${t[1].toFixed(1)}${fe(i.glass,i.angular)} Z`}function zi(i,t){const e=t.radius+4;return`M${(i-e).toFixed(1)} ${t.wheelY.toFixed(1)} A${e.toFixed(1)} ${e.toFixed(1)} 0 0 1 ${(i+e).toFixed(1)} ${t.wheelY.toFixed(1)} Z`}function Ni(i,t,e){const r=[];for(let s=0;s<5;s+=1){const a=s*Math.PI*2/5-.3,n=Math.cos(a),o=Math.sin(a);r.push($`
      <line
        x1=${(i+n*e*.2).toFixed(1)}
        y1=${(t+o*e*.2).toFixed(1)}
        x2=${(i+n*e*.55).toFixed(1)}
        y2=${(t+o*e*.55).toFixed(1)}
        stroke="#8d939b"
        stroke-opacity="0.6"
        stroke-width="2"
        stroke-linecap="round"
      ></line>
    `)}return r}function Pi(i,t){const e=Fi[Ei(i)],r=Di(e),s=Ii(e),a=e.glass[0][1],n=Math.max(e.top[0][1],e.top[e.top.length-1][1]),o=e.top[2],l=e.top[e.top.length-3],u=Math.min(...e.glass.map(p=>p[1]));return $`
    <svg class="car" viewBox="0 0 400 160" role="img" aria-label=${t} focusable="false">
      <defs>
        <linearGradient id="tl-car-paint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color=${Et(gt,.28)}></stop>
          <stop offset="0.38" stop-color=${gt}></stop>
          <stop offset="0.72" stop-color=${Et(gt,-.12)}></stop>
          <stop offset="1" stop-color=${Et(gt,-.42)}></stop>
        </linearGradient>
        <linearGradient id="tl-car-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#4a525e"></stop>
          <stop offset="0.45" stop-color="#181b21"></stop>
          <stop offset="1" stop-color="#0a0b0d"></stop>
        </linearGradient>
        <radialGradient id="tl-car-floor" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stop-color="#000" stop-opacity="0.38"></stop>
          <stop offset="1" stop-color="#000" stop-opacity="0"></stop>
        </radialGradient>
        <radialGradient id="tl-car-rim" cx="0.4" cy="0.35" r="0.75">
          <stop offset="0" stop-color="#7d838c"></stop>
          <stop offset="0.6" stop-color="#3b3f46"></stop>
          <stop offset="1" stop-color="#22252a"></stop>
        </radialGradient>
      </defs>
      <ellipse class="car-floor" cx="200" cy="141" rx="196" ry="9" fill="url(#tl-car-floor)"></ellipse>
      ${e.wheels.map(p=>$`<path class="car-well" d=${zi(p,e)} fill="#0c0d0f"></path>`)}
      <path class="car-body" d=${r} fill="url(#tl-car-paint)"></path>
      <path class="car-glass" d=${s} fill="url(#tl-car-glass)"></path>
      <line
        class="car-pillar"
        x1=${(e.pillar-3).toFixed(1)}
        y1=${u.toFixed(1)}
        x2=${e.pillar.toFixed(1)}
        y2=${(a+1).toFixed(1)}
        stroke="#0b0c0e"
        stroke-width="3.2"
      ></line>
      <path
        class="car-line"
        d=${`M${(o[0]+14).toFixed(1)} ${(o[1]-1).toFixed(1)} Q200 ${(a+4).toFixed(1)} ${(l[0]-6).toFixed(1)} ${(l[1]+3).toFixed(1)}`}
        fill="none"
        stroke="#ffffff"
        stroke-opacity="0.22"
        stroke-width="1.2"
      ></path>
      <path
        class="car-line"
        d=${`M${e.pillar.toFixed(1)} ${(a+3).toFixed(1)} L${(e.pillar+2).toFixed(1)} ${(n-6).toFixed(1)}`}
        fill="none"
        stroke="#000"
        stroke-opacity="0.2"
        stroke-width="0.8"
      ></path>
      <rect class="car-handle" x=${(e.pillar-34).toFixed(1)} y=${(a+8).toFixed(1)} width="15" height="2.6" rx="1.3" fill="#000" fill-opacity="0.28"></rect>
      <rect class="car-handle" x=${(e.pillar+30).toFixed(1)} y=${(a+9).toFixed(1)} width="15" height="2.6" rx="1.3" fill="#000" fill-opacity="0.28"></rect>
      <path class="car-lamp" d=${`M${(o[0]+4).toFixed(1)} ${(o[1]-1).toFixed(1)} q16 -6 32 -7 q-14 6 -30 10 z`} fill="#f4f7fb" fill-opacity="0.85"></path>
      <path class="car-lamp rear" d=${`M${(l[0]-21).toFixed(1)} ${(l[1]+1).toFixed(1)} q10 1 17 5 l-1 3.5 q-8 -3 -16.5 -5 z`} fill="#c3212f"></path>
      ${e.wheels.map(p=>$`
          <g class="car-wheel">
            <circle cx=${p} cy=${e.wheelY} r=${e.radius} fill="#141518"></circle>
            <circle cx=${p} cy=${e.wheelY} r=${(e.radius*.7).toFixed(1)} fill="url(#tl-car-rim)"></circle>
            <circle cx=${p} cy=${e.wheelY} r=${(e.radius*.6).toFixed(1)} fill="none" stroke="#a9aeb5" stroke-opacity="0.55" stroke-width="1"></circle>
            ${Ni(p,e.wheelY,e.radius)}
            <circle cx=${p} cy=${e.wheelY} r=${(e.radius*.14).toFixed(1)} fill="#55595f"></circle>
          </g>
        `)}
    </svg>
  `}const Ti=3600;function ve(i){return i?.official_image!==!1}function Li(i){return typeof i!="string"||!/^[A-Za-z0-9_-]{1,128}$/.test(i)?null:i}function Ui(i){return typeof i=="number"&&Number.isInteger(i)&&i>=0&&i<=1e12?i:typeof i=="string"&&/^\d{1,12}$/.test(i)?Number(i):null}function Oi(i){for(const t of i){const e=Li(t.attributes.config_entry_id),r=Ui(t.attributes.vehicle_id);if(e&&r!==null)return{entryId:e,vehicleId:r}}return null}function Ri(i,t){return`/api/tesla_logger/${encodeURIComponent(i)}/${t}/car.png`}async function Wi(i,t,e){if(!i.callWS||!i.hassUrl)return null;const r=Ri(t,e),s=await i.callWS({type:"auth/sign_path",path:r,expires:Ti});return!s||typeof s.path!="string"||!s.path.startsWith("/")||s.path.startsWith("//")?null:i.hassUrl(s.path)||null}function T(i){return i&&typeof i=="object"?{language:i.language||"en",hour12:i.hour12,timeZone:i.timeZone}:{language:i||"en"}}function Bi(i){var t,e,r,s;const a=((t=i?.locale)==null?void 0:t.language)||i?.language||"en",n=(e=i?.locale)==null?void 0:e.time_format;let o;n==="12"?o=!0:n==="24"&&(o=!1);const l=(r=i?.locale)==null?void 0:r.time_zone,u=(s=i?.config)==null?void 0:s.time_zone;return{language:a,hour12:o,timeZone:l==="server"&&typeof u=="string"&&u!==""&&u!=="local"&&u!=="server"?u:void 0}}function f(i,t,e){return i.toLocaleString(e==="fr"?"fr-FR":"en-US",{minimumFractionDigits:t,maximumFractionDigits:t})}const Hi=/^<.*>$/;function _e(i){if(typeof i!="string")return null;const t=i.trim();if(!t||Hi.test(t))return null;const e=t.toLowerCase();return e==="none"||e==="null"?null:t}function $e(i){return i.replace(/[\u00a0\u202f]/g," ").replace(/\s+/g," ").trim()}function Dt(i,t){const e={...t};return i.timeZone&&(e.timeZone=i.timeZone),e}function K(i,t){return $e(new Intl.DateTimeFormat(t.language||"en",Dt(t,{weekday:"short",day:"numeric",month:"short"})).format(i))}function E(i,t){const e=Dt(t,{hour:t.hour12?"numeric":"2-digit",minute:"2-digit"});return typeof t.hour12=="boolean"&&(e.hour12=t.hour12),$e(new Intl.DateTimeFormat(t.language||"en",e).format(i))}function st(i,t){const e=new Intl.DateTimeFormat("en-US",Dt(t,{year:"numeric",month:"2-digit",day:"2-digit"})).formatToParts(i),r=s=>{var a;return((a=e.find(n=>n.type===s))==null?void 0:a.value)??""};return`${r("year")}-${r("month")}-${r("day")}`}function ji(i,t){const e=new Date(i);if(Number.isNaN(e.getTime()))return i;const r=T(t);return`${K(e,r)}, ${E(e,r)}`}function Y(i){if(i==null||Number.isNaN(i))return"\u2014";const t=Math.max(0,Math.round(i)),e=Math.floor(t/3600),r=Math.floor(t%3600/60);return e>0?`${e} h ${r} min`:`${r} min`}function xe(i){return i.map(t=>typeof t=="string"?t.trim():"").filter(t=>t.length>0)}function at(i){return typeof i!="string"?null:i.trim()||null}function L(i){return typeof i=="number"&&Number.isFinite(i)?i:null}function It(i,t,e){const r=L(i),s=L(t);return r==null&&s==null?null:r!=null&&s!=null?`${f(r,0,e)} \u2192 ${f(s,0,e)} %`:`${f(r??s,0,e)} %`}function ye(i,t,e){const r=T(e),s=new Date(i);if(Number.isNaN(s.getTime()))return i;const a=`${K(s,r)}, ${E(s,r)}`;if(!t)return a;const n=new Date(t);if(Number.isNaN(n.getTime()))return a;if(st(s,r)!==st(n,r)){const o=`${K(n,r)}, ${E(n,r)}`;return`${a} \u2013 ${o}`}return`${K(s,r)}, ${E(s,r)}\u2013${E(n,r)}`}function be(i,t){const e=T(t),r=new Date(i);return Number.isNaN(r.getTime())?{key:i,label:i}:{key:st(r,e),label:K(r,e)}}function we(i,t,e){const r=T(e),s=new Date(i);if(Number.isNaN(s.getTime()))return i;const a=E(s,r);if(!t)return a;const n=new Date(t);return Number.isNaN(n.getTime())?a:st(s,r)!==st(n,r)?`${a} \u2013 ${K(n,r)}, ${E(n,r)}`:`${a}\u2013${E(n,r)}`}function ke(i,t){const e=L(i);return e==null?null:`${f(e,1,t)} kWh`}function Ce(i,t){const e=T(t),r=pt(e.language),s=at(i.start_address),a=at(i.end_address),n=s&&a?`${s} \u2192 ${a}`:s||a,o=zt(i.energy_used_kwh,i.distance_km),l=It(i.start_battery_level,i.end_battery_level,r),u=[L(i.duration_s)==null?null:Y(i.duration_s),o==null?null:`${f(o,0,r)} Wh/km`,l??ke(i.energy_used_kwh,r)],p=xe(u),c=L(i.distance_km),g=be(i.start_at,e);return{datetime:i.start_at,when:ye(i.start_at,i.end_at,e),clock:we(i.start_at,i.end_at,e),dayKey:g.key,dayLabel:g.label,place:n,ends:s&&a?[s,a]:null,figure:c==null?null:`${f(c,1,r)} km`,detail:p.join(" \xB7 "),details:p,slots:u}}function Ae(i){if(i.is_dc===!0)return"DC";if(i.is_dc===!1)return"AC";const t=_e(i.charger_type);return t==="AC"||t==="DC"?t:null}function Se(i,t){const e=T(t),r=pt(e.language),s=at(i.address)||at(i.geofence)||at(i.location),a=_e(i.charger_type),n=a&&a!=="AC"&&a!=="DC"?a:null,o=L(i.max_power_kw),l=[L(i.duration_s)==null?null:Y(i.duration_s),It(i.start_battery_level,i.end_battery_level,r),o==null?null:`${f(o,0,r)} kW`,Ae(i)],u=xe(l),p=be(i.start_at,e);return{datetime:i.start_at,when:ye(i.start_at,i.end_at,e),clock:we(i.start_at,i.end_at,e),dayKey:p.key,dayLabel:p.label,place:s||n,ends:null,figure:ke(i.energy_added_kwh,r),detail:u.join(" \xB7 "),details:u,slots:l}}function zt(i,t){return i==null||t==null||t<=0?null:i*1e3/t}function Me(i,t=new Date){const e=new Date(t);if(i==="week"){const s=(e.getDay()+6)%7;e.setDate(e.getDate()-s)}else i==="month"?e.setDate(1):e.setMonth(0,1);e.setHours(0,0,0,0);const r=new Date(e);return i==="week"?r.setDate(r.getDate()+7):i==="month"?r.setMonth(r.getMonth()+1):r.setFullYear(r.getFullYear()+1),{start:e,end:r}}function Fe(i,t,e=new Date){const r=new Date(i).getTime();if(Number.isNaN(r))return!1;const{start:s,end:a}=Me(t,e);return r>=s.getTime()&&r<a.getTime()}function Gi(i){const t=new Date;return{from:Me(i,t).start.toISOString(),to:t.toISOString()}}function Vi(i){return typeof i=="string"?i:i instanceof Error||i&&typeof i=="object"&&"message"in i&&typeof i.message=="string"?i.message:""}function qi(i,t){const e=Vi(i);return!e||e.includes("tl_")?t:e.slice(0,180)}function U(i){return!i||typeof i!="object"?null:i}const Ee={week:12,month:12,year:5},Zi=480;function Nt(i,t=!1){const e=t?200:360,r=i!=null&&Number.isFinite(i)&&i>=64?i:e,s=r<Zi;return{width:r,height:t?s?116:132:s?184:208,left:t?32:42,right:t?8:12,top:t?8:12,bottom:t?22:28}}function Ki(i){if(!Number.isFinite(i)||i<=0)return 1;const t=10**Math.floor(Math.log10(i)),e=i/t;return(e<=1?1:e<=2?2:e<=5?5:10)*t}function De(i,t,e=new Date){let r=-1;return i.forEach((s,a)=>{Fe(s,t,e)&&(r=a)}),r>=0?r:Math.max(0,i.length-1)}function Yi(i,t,e=new Date){var r;if(i.length<2)return null;const s=De(i.map(n=>n.start),t,e);if(s<=0)return null;const a=(r=i[s-1])==null?void 0:r.distance_km;return typeof a=="number"&&Number.isFinite(a)?a:null}function mt(i,t,e){const r=new Date(i);if(Number.isNaN(r.getTime()))return i;const s=T(e),a=s.language||"en",n=s.timeZone?{timeZone:s.timeZone}:{};return t==="year"?new Intl.DateTimeFormat(a,{year:"numeric",...n}).format(r):t==="month"?new Intl.DateTimeFormat(a,{month:"short",...n}).format(r).replace(/[\u00a0\u202f]/g," ").replace(/\.$/,"").trim():new Intl.DateTimeFormat(a,{day:"numeric",month:"short",...n}).format(r).replace(/[\u00a0\u202f]/g," ").replace(/,/g,"").replace(/\s+/g," ").trim()}function Qi(i,t,e,r=!1){if(e<=0||t.width<=0)return null;const s=Nt(t.width,r),a=(i-t.left)/t.width*s.width,n=s.width-s.left-s.right,o=n/e;return a<s.left||a>s.left+n?null:Math.max(0,Math.min(e-1,Math.floor((a-s.left)/o)))}function Ji(i,t){const e=Math.min(i,t),r=Math.max(i,t);return r>e?{start:e,end:r}:null}function Pt(i,t,e,r=!1){const s=Nt(e,r),a=s.width-s.left-s.right,n=t>0?a/t:a;return{left:(s.left+n*i)/s.width*100,width:n/s.width*100}}function Xi(i,t,e,r,s={}){const a=Nt(s.width,s.compact),n=i.map(m=>t==="stack"?Math.max(0,m.value??0)+Math.max(0,m.stack??0):m.value!=null&&Number.isFinite(m.value)&&m.value>0?m.value:0).filter(m=>m>0),o=Ki(n.length?Math.max(...n):0),l=a.width-a.left-a.right,u=a.height-a.top-a.bottom,p=i.length>0?l/i.length:l,c=m=>a.top+u-m/o*u,g=c(0),_=[o,o/2,0],v=i.map((m,y)=>{const M=a.left+p*y+p/2,A=m.value!=null&&Number.isFinite(m.value)?m.value:null,w=A==null?null:c(Math.max(0,A));return{...m,x:M,y:w,value:A}}),x=i.length>8?2:1,k=(m,y,M)=>{if(!s.onSelect)return $`<g><title>${y}</title>${M}</g>`;const A=s.selected===m;return $`
      <g
        class=${A?"selected":""}
        role="button"
        tabindex="0"
        aria-pressed=${A?"true":"false"}
        aria-label=${y}
        @click=${()=>{var w;return(w=s.onSelect)==null?void 0:w.call(s,m)}}
        @keydown=${w=>{var Q;(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),(Q=s.onSelect)==null||Q.call(s,m))}}
      >
        <title>${y}</title>
        ${M}
      </g>
    `},D=t==="line"?[]:v.map((m,y)=>{const M=Math.min(s.compact?16:22,p*.62),A=(m.x-M/2).toFixed(1),w=$`
            <rect
              class="hit"
              x=${(m.x-p/2).toFixed(1)}
              y=${a.top}
              width=${p.toFixed(1)}
              height=${u}
            ></rect>
          `;if(t==="stack"){const Ue=[{amount:Math.max(0,m.value??0),className:"bar ac"},{amount:Math.max(0,m.stack??0),className:"bar dc"}];let vt=0;const Oe=Ue.map(Lt=>{const Re=c(vt);vt+=Lt.amount;const Ut=c(vt),Ot=Math.max(0,Re-Ut);return Ot<=0?$``:$`
                <rect
                  class=${Lt.className}
                  x=${A}
                  y=${Ut.toFixed(1)}
                  width=${M.toFixed(1)}
                  height=${Ot.toFixed(1)}
                  rx="2"
                ></rect>
              `});return k(y,m.title,$`${w}${Oe}`)}const Q=m.y??g,Le=Math.max(0,g-Q);return k(y,m.title,$`
              ${w}
              <rect
                class="bar"
                x=${A}
                y=${Q.toFixed(1)}
                width=${M.toFixed(1)}
                height=${Le.toFixed(1)}
                rx="2"
              ></rect>
            `)}),C=[];let S=!1;if(t==="line")for(const m of v){if(m.y==null){S=!1;continue}C.push(`${S?"L":"M"}${m.x.toFixed(1)},${m.y.toFixed(1)}`),S=!0}const ft=t==="line"?v.map((m,y)=>m.y==null?$``:k(y,m.title,$`
              <circle class="hit" cx=${m.x.toFixed(1)} cy=${m.y.toFixed(1)} r="12"></circle>
              <circle class="dot" cx=${m.x.toFixed(1)} cy=${m.y.toFixed(1)} r="3.5"></circle>
            `)):[];return $`
    <svg
      class=${s.compact?"series-chart compact":"series-chart"}
      viewBox=${`0 0 ${a.width} ${a.height}`}
      width="100%"
      height=${String(a.height)}
      role="group"
      aria-label=${e}
      preserveAspectRatio="xMinYMin meet"
    >
      ${_.map(m=>{const y=c(m);return $`
          <line class="grid" x1=${a.left} y1=${y.toFixed(1)} x2=${a.width-a.right} y2=${y.toFixed(1)}></line>
          <text class="y-label" x=${a.left-4} y=${(y+4).toFixed(1)} text-anchor="end">
            ${r(m)}
          </text>
        `})}
      ${D}
      ${C.length>1?$`<path class="line" d=${C.join(" ")}></path>`:$``}
      ${s.highlight!=null&&v[s.highlight]?$`<line class="crosshair" x1=${v[s.highlight].x.toFixed(1)} y1=${a.top} x2=${v[s.highlight].x.toFixed(1)} y2=${g.toFixed(1)}></line>`:$``}
      ${ft}
      ${v.map((m,y)=>y%x===0||y===v.length-1?$`<text class="x-label" x=${m.x.toFixed(1)} y=${a.height-6} text-anchor="middle">${m.label}</text>`:$``)}
    </svg>
  `}const Ie=15,O=256,ze=85.05112878;function tr(i,t){return typeof i!="number"||typeof t!="number"||!Number.isFinite(i)||!Number.isFinite(t)||i<-90||i>90||t<-180||t>180?null:{lat:i,lon:t}}function er(i,t,e=Ie){const r=O*2**e,s=Math.min(ze,Math.max(-ze,i))*Math.PI/180,a=(t+180)/360*r,n=(1-Math.log(Math.tan(Math.PI/4+s/2))/Math.PI)/2*r;return{x:a,y:n}}function ir(i,t,e,r,s=Ie){const a=er(i,t,s),n=a.x-e/2,o=a.y-r/2,l=Math.floor(n/O),u=Math.floor((n+Math.max(e,1)-.001)/O),p=Math.floor(o/O),c=Math.floor((o+Math.max(r,1)-.001)/O),g=2**s,_=[];for(let v=l;v<=u;v+=1)for(let x=p;x<=c;x+=1){if(x<0||x>=g)continue;const k=(v%g+g)%g;_.push({x:k,y:x,left:Math.round((v*O-n)*10)/10,top:Math.round((x*O-o)*10)/10,url:`https://tile.openstreetmap.org/${s}/${k}/${x}.png`})}return{tiles:_,dot:{left:e/2,top:r/2}}}function rr(i){return{entity:Object.keys(i.states).find(t=>{var e,r;return((r=(e=i.states[t])==null?void 0:e.attributes)==null?void 0:r.key)==="location"})||"",show_map:!0,official_image:!0,page_size:he,show:{...St},drive_detail:{...Ct},charge_detail:{...At}}}function Ne(i){const t=U(i);return!!(t&&Array.isArray(t.data))}function sr(i){const t=U(i);return!!(t&&Array.isArray(t.route)&&Array.isArray(t.series))}function ar(i){const t=U(i);return!!(t&&typeof t.distance_km=="number")}function Pe(i){const t=U(i);return!!(t&&Array.isArray(t.buckets))}function nr(i){const t=U(i);return(t&&Array.isArray(t.data)?t.data:[]).filter(e=>{const r=U(e);return!!(r&&typeof r.temp_c_bucket=="number")})}function b(i){return typeof i=="number"&&Number.isFinite(i)?i:null}const Tt=class extends j{constructor(){super(...arguments),this._view="status",this._bucketIndex=null,this._period="month",this._page=1,this._loading=!1,this._error="",this._plotWidths={},this._headerBox={width:0,height:0},this._headerVisible=!1,this._mainChart="consumption",this._previousKm=null,this._narrow=!1,this._tabsOverflow=!1,this._hover=null,this._zoom=null,this._brush=null,this._dragAnchor=null,this._eatClick=!1,this._carImageUrl="",this._carImageFailed=!1,this._carImageKey="",this._carImageGen=0,this.mapToken=0,this.watchSize=t=>{var e;t&&((e=this._resize)==null||e.observe(t))}}setConfig(t){var e;if(!t||typeof t.entity!="string"||!t.entity)throw new Error("Please select a Tesla Logger entity");const r=((e=this._config)==null?void 0:e.entity)!==t.entity,s=this._config!=null&&P(this._config)!==P(t);this._config=t,r?(this._view=t.default_view||"status",this.clearHistory()):s&&(this._page=1,this._drives=void 0,this._charges=void 0),this.ensureVisibleView()}get flags(){return q(this._config)}ensureVisibleView(){const t=bi(this._view,this.flags);t!==this._view&&(this._view=t)}static getConfigElement(){return document.createElement("tesla-logger-card-editor-impl")}static getStubConfig(t){return rr(t)}getCardSize(){return 6}connectedCallback(){super.connectedCallback(),this.watchVisibility(),typeof ResizeObserver=="function"&&(this._resize=new ResizeObserver(t=>{const e=t.map(r=>{const s=r.target;return{plot:s.dataset.plot,mapHost:s.dataset.mapHost!=null,tabs:s.dataset.tabs!=null,host:s===this,width:Math.round(r.contentRect.width),height:Math.round(r.contentRect.height),overflow:s.dataset.tabs!=null&&s.scrollWidth>s.clientWidth+1}});queueMicrotask(()=>{if(!this._resize)return;let r=this._plotWidths,s=!1,a=this._headerBox,n=!1,o=this._narrow,l=!1,u=this._tabsOverflow,p=!1;for(const c of e){if(c.host&&c.width>0&&o!==c.width<=420&&(o=c.width<=420,l=!0),c.tabs&&u!==c.overflow&&(u=c.overflow,p=!0),c.plot){c.width>0&&r[c.plot]!==c.width&&(s||(r={...r},s=!0),r[c.plot]=c.width);continue}c.mapHost&&(a.width!==c.width||a.height!==c.height)&&(a={width:c.width,height:c.height},n=!0)}s&&(this._plotWidths=r),n&&(this._headerBox=a),l&&(this._narrow=o),p&&(this._tabsOverflow=u)})}),this._resize.observe(this))}disconnectedCallback(){var t,e;(t=this._onScreen)==null||t.disconnect(),this._onScreen=void 0,(e=this._resize)==null||e.disconnect(),this._resize=void 0,this.destroyMap(),super.disconnectedCallback()}watchVisibility(){if(!(this._headerVisible||this._onScreen)){if(typeof IntersectionObserver!="function"){this._headerVisible=!0;return}this._onScreen=new IntersectionObserver(t=>{var e;t.some(r=>r.isIntersecting)&&((e=this._onScreen)==null||e.disconnect(),this._onScreen=void 0,this._headerVisible=!0)}),this._onScreen.observe(this)}}updated(t){(t.has("_view")||t.has("_config"))&&this.ensureView(),this._view==="drive"&&(t.has("_detail")||t.has("_view")||t.has("_headerVisible"))&&this.syncMap(),t.has("_view")&&this._view!=="drive"&&this.destroyMap(),this.shouldLoadMapChunk()&&this.loadMapModule().catch(()=>{}),(t.has("hass")||t.has("_config"))&&this.ensureCarImage()}render(){var t,e,r;if(!((t=this._config)!=null&&t.entity))return h`<ha-card><p class="message">${this.text.pick}</p></ha-card>`;const s=!!((r=(e=this.hass)==null?void 0:e.themes)!=null&&r.darkMode);return h`
      <ha-card class=${s?"dark":""}>
        ${this.header()}
        <div class=${this._tabsOverflow?"tabbar overflow":"tabbar"}>
          <div class="tabs" role="tablist" data-tabs ${kt(this.watchSize)}>
            ${Z(this.flags).map(a=>this.tab(a,this.text[a]))}
          </div>
        </div>
        ${this._error?h`<p class="message">${this._error}</p>`:d}
        ${this._loading?h`<p class="message">${this.text.loading}</p>`:d}
        ${this.body()}
      </ha-card>
    `}get dates(){return Bi(this.hass)}get cardLang(){return pt(this.dates.language)}get text(){return pe(this.cardLang)}get readings(){var t,e,r,s;const a=new Map,n=this.hass,o=(t=this._config)==null?void 0:t.entity;if(!n||!o||!n.states[o])return a;const l=(r=(e=n.entities)==null?void 0:e[o])==null?void 0:r.device_id,u=n.states[o].attributes.vin;for(const[p,c]of Object.entries(n.states)){const g=(s=n.entities)==null?void 0:s[p],_=!!(l&&g?.device_id===l),v=!!(u&&c.attributes.vin===u);if(!_&&!v)continue;const x=g?.translation_key||(typeof c.attributes.key=="string"?c.attributes.key:void 0);x&&a.set(x,c)}return a}get deviceId(){var t,e,r;const s=(t=this._config)==null?void 0:t.entity;if(!(!this.hass||!s))return(r=(e=this.hass.entities)==null?void 0:e[s])==null?void 0:r.device_id}numeric(t){var e;const r=(e=this.readings.get(t))==null?void 0:e.state;if(!r||r==="unknown"||r==="unavailable")return null;const s=Number(r);return Number.isFinite(s)?s:null}label(t){var e;const r=(e=this.readings.get(t))==null?void 0:e.state;return!r||r==="unknown"||r==="unavailable"?null:r}header(){var t,e,r,s,a,n,o,l,u;const p=this.flags.car,c=this.mapEnabled();if(!p&&!c)return d;const g=this.label("activity")||"",_=this.deviceId?(r=(e=(t=this.hass)==null?void 0:t.devices)==null?void 0:e[this.deviceId])==null?void 0:r.name:void 0,v=this.deviceId?(n=(a=(s=this.hass)==null?void 0:s.devices)==null?void 0:a[this.deviceId])==null?void 0:n.model:void 0,x=(u=(l=this.hass)==null?void 0:l.states[((o=this._config)==null?void 0:o.entity)||""])==null?void 0:u.attributes.friendly_name,k=_||(typeof x=="string"?x:this.text.unknown),D=this.label("geofence"),C=or(g),S=h`
      <div class="header">
        <div class="hero-head">
          <div>
            <p class="name">${k}</p>
            ${D?h`<p class="sub">${D}</p>`:d}
          </div>
          <span class=${`pill ${C}`}>
            <span class="status-dot" aria-hidden="true"></span>
            ${vi(this.text,g)}
          </span>
        </div>
      </div>
    `;return h`
      <div class="header-wrap">
        <div class="map-band" data-map-host ${kt(this.watchSize)}>
          ${c?this.watermark():d}
          ${p?S:h`<div class="map-only-spacer"></div>`}
        </div>
        ${p?h`<div class="car-stage">
              ${this.carArt(typeof v=="string"?v:void 0)}
            </div>`:d}
      </div>
    `}mapEnabled(){var t;return((t=this._config)==null?void 0:t.show_map)!==!1}carArt(t){return ve(this._config)&&this._carImageUrl&&!this._carImageFailed?h`<img
        class="car official"
        alt=${this.text.car}
        src=${this._carImageUrl}
        @error=${()=>this.failCarImage()}
      />`:Pi(t,this.text.car)}failCarImage(){this._carImageFailed=!0}async ensureCarImage(){const t=this.flags.car&&ve(this._config),e=t?Oi(this.readings.values()):null,r=e?`${e.entryId}:${e.vehicleId}`:"";if(!t||!e){(this._carImageKey||this._carImageUrl||this._carImageFailed)&&(this._carImageKey="",this._carImageUrl="",this._carImageFailed=!1);return}if(r===this._carImageKey&&(this._carImageUrl||this._carImageFailed))return;this._carImageGen+=1;const s=this._carImageGen;this._carImageKey=r,this._carImageUrl="",this._carImageFailed=!1;const a=this.hass;if(!(a!=null&&a.callWS)||!a.hassUrl){this._carImageFailed=!0;return}try{const n=await Wi(a,e.entryId,e.vehicleId);if(s!==this._carImageGen)return;if(!n){this._carImageFailed=!0;return}this._carImageUrl=n}catch{s===this._carImageGen&&(this._carImageFailed=!0)}}headerMapReady(){if(!this.mapEnabled())return!1;const t=this.carPosition(),{width:e,height:r}=this._headerBox;return!!(t&&e>=32&&r>=32)}shouldLoadMapChunk(){var t;return this._headerVisible?this._view==="drive"&&(((t=this._detail)==null?void 0:t.route.length)??0)>0?!0:this.headerMapReady():!1}loadMapModule(){return this.mapModule??(this.mapModule=import("./leaflet-DlpW1new.js?v=0.2.1").catch(t=>{throw this.mapModule=void 0,t})),this.mapModule}carPosition(){const t=this.readings.get("location");return tr(t?.attributes.latitude,t?.attributes.longitude)}watermark(){var t,e;if(!this._headerVisible||!this.headerMapReady())return d;const r=this.carPosition();if(!r)return d;const{width:s,height:a}=this._headerBox,n=ir(r.lat,r.lon,s,a),o=!!((e=(t=this.hass)==null?void 0:t.themes)!=null&&e.darkMode);return h`
      <div class=${o?"map-bg dark":"map-bg"} aria-hidden="true">
        ${n.tiles.map(l=>h`
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
        style=${`left:${n.dot.left}px;top:${n.dot.top}px`}
      ></span>
    `}tab(t,e){return h`
      <button
        role="tab"
        aria-selected=${this._view===t?"true":"false"}
        @click=${()=>this.open(t)}
      >
        ${e}
      </button>
    `}open(t){this._error="",this.clearZoom(),this._view=t,t!=="drive"&&(this._driveId=void 0,this._detail=void 0),t!=="charge"&&(this._chargeId=void 0)}body(){return this._view==="status"?this.status():this._view==="drives"?this.drives():this._view==="drive"?this.drive():this._view==="charges"?this.charges():this._view==="charge"?this.charge():this._view==="charts"?this.charts():this.stats()}metric(t,e,r){return h`<div class="metric">
      ${r?h`<ha-icon icon=${r}></ha-icon>`:d}
      <div><span>${t}</span><strong>${e}</strong></div>
    </div>`}quantity(t,e,r){const s=this.numeric(t);return s==null?"\u2014":`${f(s,e,this.cardLang)} ${r}`}get chargingNow(){return(this.label("activity")||"").toLowerCase()==="charging"}status(){const t=this.numeric("battery_level"),e=t==null?"\u2014":`${f(t,0,this.cardLang)} %`;return h`
      <div class="status-board">
        <div class="status-hero">
          ${this.metric(this.text.battery,e)}
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
            ${this.chargingNow?this.metric(this.text.charger,this.quantity("charger_power",1,"kW")):d}
            ${this.chargingNow?this.metric(this.text.added,this.quantity("energy_added",1,"kWh")):d}
            ${this.metric(this.text.limit,this.quantity("charge_limit",0,"%"))}
          </div>
        </section>
      </div>
    `}drives(){const t=this._drives,e=t?.data||[];return h`
      ${this.listToolbar(t)}
      ${this.historyGroups(e,r=>Ce(r,this.dates),3,r=>this.openDrive(r.id))}
      ${t&&t.data.length===0?h`<p class="message">${this.text.emptyDrives}</p>`:d}
    `}drive(){const t=this._detail,e=G(this._config),r=zt(t?.energy_used_kwh,t?.distance_km),s=t?this.visibleSamples(t.series):[];return h`
      <div class="toolbar">
        <div class="back">
          ${this.iconButton("mdi:arrow-left",this.text.back,!1,()=>this.open("drives"))}
          <button type="button" class="back-label" @click=${()=>this.open("drives")}>
            ${this.text.back}
          </button>
        </div>
        <span class="page-indicator">${t?this.when(t.start_at):""}</span>
      </div>
      ${t?h`
            ${this.routeTitle(t)}
            <div class="grid">
              ${e.distance?this.metric(this.text.distance,this.km(t.distance_km)):d}
              ${e.duration?this.metric(this.text.duration,Y(t.duration_s)):d}
              ${e.energy?this.metric(this.text.energy,this.kwh(t.energy_used_kwh)):d}
              ${e.efficiency?this.metric(this.text.efficiency,r==null?"\u2014":`${f(r,0,this.cardLang)} Wh/km`):d}
            </div>
            ${e.map?h`
                  <p class="message">${this.text.map}</p>
                  ${t.route.length?h`<div class="map"></div>`:h`<p class="message">${this.text.noRoute}</p>`}
                `:d}
            ${this.sampleCharts(s,[e.speed?["speed_kmh",this.text.speedChart,"km/h"]:null,e.power?["power_kw",this.text.power,"kW"]:null,e.elevation?["elevation_m",this.text.elevationChart,"m"]:null,e.battery?["battery_level",this.text.batteryChart,"%"]:null])}
          `:d}
    `}charge(){const t=this.selectedCharge(),e=V(this._config),r=t?Se(t,this.dates):void 0,s=t?Ae(t):null,a=t?It(t.start_battery_level,t.end_battery_level,this.cardLang):null,n=t!=null&&t.series?this.visibleSamples(t.series):[];return h`
      <div class="toolbar">
        <div class="back">
          ${this.iconButton("mdi:arrow-left",this.text.back,!1,()=>this.open("charges"))}
          <button type="button" class="back-label" @click=${()=>this.open("charges")}>
            ${this.text.back}
          </button>
        </div>
        <span class="page-indicator">${t?this.when(t.start_at):""}</span>
      </div>
      ${t?h`
            ${r!=null&&r.place?h`<p class="route-name">${r.place}</p>`:d}
            <div class="grid">
              ${e.energy?this.metric(this.text.energyAdded,this.kwh(t.energy_added_kwh)):d}
              ${e.duration?this.metric(this.text.duration,Y(t.duration_s)):d}
              ${e.soc?this.metric(this.text.soc,a??"\u2014"):d}
              ${e.power?this.metric(this.text.power,t.max_power_kw==null?"\u2014":`${f(t.max_power_kw,0,this.cardLang)} kW`):d}
              ${e.ac_dc?this.metric(this.text.acDcShort,s??"\u2014"):d}
              ${e.voltage?this.metric(this.text.voltage,t.voltage_v==null?"\u2014":`${f(t.voltage_v,0,this.cardLang)} V`):d}
              ${e.cost?this.metric(this.text.cost,t.cost==null?"\u2014":f(t.cost,2,this.cardLang)):d}
            </div>
            ${e.curve?n.length?this.sampleCharts(n,[["power_kw",this.text.power,"kW"],["battery_level",this.text.batteryChart,"%"]]):h`<p class="message">${this.text.noCurve}</p>`:d}
          `:d}
    `}selectedCharge(){var t;return(t=this._charges)==null?void 0:t.data.find(e=>e.id===this._chargeId)}charges(){const t=this._charges;return h`
      ${this.listToolbar(t)}
      ${this.historyGroups(t?.data||[],e=>Se(e,this.dates),4,e=>this.openCharge(e.id))}
      ${t&&t.data.length===0?h`<p class="message">${this.text.emptyCharges}</p>`:d}
    `}stats(){const t=this._stats,e=zt(t?.energy_used_kwh,t?.distance_km),r=this._previousKm==null?d:h`<span>${this.text.previousPeriod[this._period]} ${this.km(this._previousKm)}</span>`;return h`
      ${this.periodBar()}
      ${t?h`
            <section class="stats-hero">
              <span>${this.text.distance}</span>
              <strong>${this.km(t.distance_km)}</strong>
              ${r}
            </section>
            <div class="grid">
              ${this.metric(this.text.duration,Y(t.drive_duration_s))}
              ${this.metric(this.text.energy,this.kwh(t.energy_used_kwh))}
              ${this.metric(this.text.efficiency,e==null?"\u2014":`${f(e,0,this.cardLang)} Wh/km`)}
              ${this.metric(this.text.drivesCount,String(t.drive_count))}
              ${this.metric(this.text.chargesCount,String(t.charge_count))}
              ${this.metric(this.text.energyAdded,this.kwh(t.energy_added_kwh))}
            </div>
          `:d}
    `}periodBar(){return h`
      ${this._zoom?this.zoomReset():d}
      <div class="periods" role="group" aria-label=${this.text.period}>
        ${["week","month","year"].map(t=>h`
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
    `}charts(){const t=this.flags,e=this._series,r=e?.buckets??[],s=this.sliceWindow(r),a=r.length?this.relativeSelection(r):-1,n=t.chart_consumption||t.chart_distance||t.chart_energy,o=t.battery_health||t.charging_split||t.vampire_drain||t.consumption_vs_temp;return h`
      ${this.periodBar()}
      ${n&&e&&r.length===0?h`<p class="message">${this.text.emptySeries}</p>`:d}
      ${n&&s.length?h`
            ${this.chartSwitch()}
            <div class="chart-stage series-list">
              ${this.syncedTooltip(s)}
              ${this.mainChart(a)}
            </div>
          `:d}
      ${t.totals&&this.absoluteSelection(r)>=0?this.bucketTotals(r[this.absoluteSelection(r)]):d}
      ${o?this.extraCharts(s,a):d}
    `}extraCharts(t,e){const r=this.flags,s=h`
      <div class="series-extra">
        ${r.battery_health&&e>=0?this.seriesFigure("health","line",this.text.batteryHealth,"km",a=>b(a.range_at_100_km),e,!0):d}
        ${r.charging_split&&e>=0?this.acDcFigure(t,e):d}
        ${r.vampire_drain&&e>=0?this.seriesFigure("idle","bar",this.text.idleUse,this.text.perDay,a=>b(a.idle_range_loss_km_per_day),e,!0):d}
        ${r.consumption_vs_temp?this.tempFigure():d}
      </div>
    `;return this._narrow?h`<details class="extras"><summary>${this.text.moreCharts}</summary>${s}</details>`:s}chartChoices(){const t=this.flags,e=[];return t.chart_consumption&&e.push("consumption"),t.chart_distance&&e.push("distance"),t.chart_energy&&e.push("energy"),e}activeChart(){const t=this.chartChoices();return t.includes(this._mainChart)?this._mainChart:t[0]??null}chartSwitch(){const t=this.chartChoices();if(t.length<2)return d;const e=this.activeChart(),r={consumption:this.text.consumptionChart,distance:this.text.distance,energy:this.text.chargedChart};return h`
      <div class="periods" role="group" aria-label=${this.text.charts}>
        ${t.map(s=>h`
            <button
              type="button"
              aria-pressed=${e===s?"true":"false"}
              class=${e===s?"active":""}
              @click=${()=>{this._mainChart=s}}
            >
              ${r[s]}
            </button>
          `)}
      </div>
    `}mainChart(t){const e=this.activeChart();return e==="distance"?this.seriesFigure("distance","bar",this.text.distance,"km",r=>b(r.distance_km),t):e==="energy"?this.seriesFigure("energy","bar",this.text.chargedChart,"kWh",r=>b(r.energy_charged_kwh),t):e==="consumption"?this.seriesFigure("consumption","line",this.text.consumptionChart,"Wh/km",r=>b(r.wh_per_km),t):d}selectedBucketIndex(t){return this._bucketIndex!=null&&this._bucketIndex>=0&&this._bucketIndex<t.length?this._bucketIndex:De(t.map(e=>e.start),this._period)}selectBucket(t){var e;if(this._eatClick){this._eatClick=!1;return}const r=((e=this._zoom)==null?void 0:e.start)??0;this._bucketIndex=r+t}absoluteSelection(t){return t.length?this.selectedBucketIndex(t):-1}relativeSelection(t){var e,r;const s=this.absoluteSelection(t),a=((e=this._zoom)==null?void 0:e.start)??0,n=((r=this._zoom)==null?void 0:r.end)??Math.max(0,t.length-1);return s<a||s>n?Math.max(0,Math.min(n,s)-a):s-a}sliceWindow(t){if(!this._zoom||t.length===0)return t;const e=Math.max(0,Math.min(this._zoom.start,t.length-1)),r=Math.max(e,Math.min(this._zoom.end,t.length-1));return t.slice(e,r+1)}bucketHeading(t){return Fe(t.start,this._period)?this._period==="week"?this.text.thisWeek:this._period==="month"?this.text.thisMonth:this.text.thisYear:mt(t.start,this._period,this.dates)}bucketTotals(t){const e=b(t.energy_used_kwh);return h`
      <section class="totals" aria-live="polite">
        <h3 class="totals-label">${this.bucketHeading(t)}</h3>
        <div class="totals-row">
          <div>
            <span>${this.text.distance}</span>
            <strong>${this.km(t.distance_km)}</strong>
          </div>
          <div>
            <span>${this.text.duration}</span>
            <strong>${Y(t.drive_duration_s)}</strong>
          </div>
          <div>
            <span>${this.text.chargedChart}</span>
            <strong>${this.kwh(t.energy_charged_kwh)}</strong>
            ${e==null?d:h`<span class="totals-sub">${this.text.consumed} ${this.kwh(e)}</span>`}
          </div>
        </div>
      </section>
    `}seriesFigure(t,e,r,s,a,n,o=!1){var l;const u=this.sliceWindow(((l=this._series)==null?void 0:l.buckets)??[]),p=s==="Wh/km"?0:1,c=u.map(D=>{const C=a(D),S=mt(D.start,this._period,this.dates),ft=C==null?"\u2014":`${f(C,p,this.cardLang)} ${s}`;return{label:S,value:C,title:`${S} \xB7 ${ft}`}}),g=this.chartFocus(c,n,o),_=g.point,v=o||g.index===n?this.bucketHeading(u[Math.max(0,n)]):_?.label??"",x=_?.value==null?"\u2014":`${f(_.value,p,this.cardLang)} ${s}`,k=`${r}. ${v} \xB7 ${x}`;return h`
      <figure class=${o?"series-card compact":"series-card"}>
        <figcaption>
          <span class="series-title">${r}</span>
          <span class="series-value">${v} · ${x}</span>
        </figcaption>
        ${this.drawSeries(t,c,e,k,n,o)}
      </figure>
    `}acDcFigure(t,e){const r=t[e],s=b(r?.dc_share_pct),a=b(r?.charge_cost),n=b(r?.cost_per_km),o=t.map(u=>{const p=mt(u.start,this._period,this.dates),c=b(u.ac_energy_kwh),g=b(u.dc_energy_kwh),_=c==null?"\u2014":`${f(c,1,this.cardLang)} kWh`,v=g==null?"\u2014":`${f(g,1,this.cardLang)} kWh`;return{label:p,value:c,stack:g,title:`${p} \xB7 AC ${_} \xB7 DC ${v}`}}),l=`${this.text.acDc}. ${this.bucketHeading(r)}`;return h`
      <figure class="series-card compact">
        <figcaption>
          <span class="series-title">${this.text.acDc}</span>
        </figcaption>
        <p class="series-note">${this.chargeNote(s,a,n)}</p>
        <p class="legend">
          <span><i class="swatch ac" aria-hidden="true"></i>AC</span>
          <span><i class="swatch dc" aria-hidden="true"></i>DC</span>
        </p>
        ${this.drawSeries("acdc",o,"stack",l,e,!0)}
      </figure>
    `}tempFigure(){const t=(this._tempBins??[]).map(e=>{const r=e.temp_c_bucket,s=`${f(r,0,this.cardLang)}\u2013${f(r+5,0,this.cardLang)}\xB0`,a=b(e.wh_per_km),n=b(e.distance_km),o=a==null?"\u2014":`${f(a,0,this.cardLang)} Wh/km`,l=n==null?"":` \xB7 ${f(n,0,this.cardLang)} km`;return{label:s,value:a,title:`${s} \xB7 ${o}${l}`}});return h`
      <figure class="series-card compact">
        <figcaption>
          <span class="series-title">${this.text.tempUse}</span>
        </figcaption>
        ${t.length?this.drawSeries("temp",t,"bar",this.text.tempUse,-1,!0,!1,!1):h`<p class="message">${this.text.emptySeries}</p>`}
      </figure>
    `}drawSeries(t,e,r,s,a,n,o=!0,l=!0){const u=g=>f(g,g>=10||g===0?0:1,this.cardLang),p=this._plotWidths[t]??(n?200:360),c=l?this.brushStyle(e.length,p,n):void 0;return h`
      <div
        class="plot"
        data-plot=${t}
        ${kt(this.watchSize)}
        @pointerdown=${g=>this.chartPointerDown(g,e.length,n)}
        @pointermove=${g=>this.chartPointerMove(g,e.length,n)}
        @pointerup=${()=>this.chartPointerUp(e.length)}
        @pointercancel=${()=>this.chartPointerLeave(!0)}
        @pointerleave=${()=>this.chartPointerLeave(!1)}
      >
        ${c?h`<div class="brush" style=${c}></div>`:d}
        ${Xi(e,r,s,u,{width:this._plotWidths[t],compact:n,selected:a,highlight:l?this._hover:null,onSelect:o?g=>this.selectBucket(g):void 0})}
      </div>
    `}brushStyle(t,e,r){if(!this._brush||t<=0)return;const s=Pt(this._brush.start,t,e,r),a=Pt(this._brush.end,t,e,r),n=Math.min(s.left,a.left),o=Math.max(s.left+s.width,a.left+a.width);return`left:${n.toFixed(2)}%;width:${Math.max(0,o-n).toFixed(2)}%`}chartPointerDown(t,e,r){var s,a;const n=this.indexFromEvent(t,e,r);n!=null&&(this._dragAnchor=n,(a=(s=t.currentTarget).setPointerCapture)==null||a.call(s,t.pointerId))}chartPointerMove(t,e,r){var s,a;const n=this.indexFromEvent(t,e,r);if(n==null||(this._hover!==n&&(this._hover=n),this._dragAnchor==null))return;const o=Ji(this._dragAnchor,n),l=o?{start:o.start,end:o.end}:null;(((s=this._brush)==null?void 0:s.start)!==l?.start||((a=this._brush)==null?void 0:a.end)!==l?.end)&&(this._brush=l)}chartPointerUp(t){var e;const r=this._dragAnchor,s=this._brush;if(this._dragAnchor=null,this._brush=null,r==null||!s)return;this._eatClick=!0;const a=((e=this._zoom)==null?void 0:e.start)??0;this.applyZoom(a+s.start,a+s.end,a+t)}chartPointerLeave(t){t&&(this._dragAnchor=null,this._brush=null),this._dragAnchor==null&&this._hover!=null&&(this._hover=null)}indexFromEvent(t,e,r){var s;const a=t.currentTarget,n=(s=a?.querySelector("svg")??a)==null?void 0:s.getBoundingClientRect();return n?Qi(t.clientX,n,e,r):null}applyZoom(t,e,r){if(r<=2||e-t<1)return;const s=r-1,a=Math.max(0,Math.min(t,s)),n=Math.max(a,Math.min(e,s));if(a===0&&n===s){this._zoom=null;return}this._zoom={start:a,end:n},(this._bucketIndex==null||this._bucketIndex<a||this._bucketIndex>n)&&(this._bucketIndex=n),this._hover=null}clearZoom(){this._zoom=null,this._brush=null,this._hover=null,this._dragAnchor=null}zoomReset(){return h`
      <button type="button" class="zoom-reset" @click=${()=>this.clearZoom()}>
        ${this.text.resetZoom}
      </button>
    `}syncedTooltip(t){const e=this._hover,r=e==null?void 0:t[e];if(e==null||!r)return d;const s=this._plotWidths.consumption||this._plotWidths.distance||this._plotWidths.energy||360,a=Pt(e,t.length,s,!1),n=[[this.text.consumptionChart,b(r.wh_per_km),"Wh/km",0],[this.text.distance,b(r.distance_km),"km",1],[this.text.chargedChart,b(r.energy_charged_kwh),"kWh",1]];return h`
      <div class="chart-tooltip" style=${`left:${Math.min(a.left,62).toFixed(1)}%;top:8px`}>
        <div class="tip-head">${mt(r.start,this._period,this.dates)}</div>
        ${n.map(([o,l,u,p])=>h`
            <div>${o} ${l==null?"\u2014":`${f(l,p,this.cardLang)} ${u}`}</div>
          `)}
      </div>
    `}sampleCharts(t,e){const r=e.filter(s=>s!=null).map(([s,a,n])=>({key:s,title:a,unit:n,points:this.samplePoints(t,s,n)})).filter(s=>s.points.filter(a=>a.value!=null).length>=2);return r.length===0?d:h`
      <div class="detail-charts">
        ${this._zoom?this.zoomReset():d}
        ${r.map(s=>h`
            <figure class="series-card compact">
              <figcaption>
                <span class="series-title">${s.title}</span>
                <span class="series-value">${this.sampleHeadline(s.points,s.unit)}</span>
              </figcaption>
              ${this.drawSeries(s.key,s.points,"line",s.title,this._hover??-1,!0,!1)}
            </figure>
          `)}
      </div>
    `}samplePoints(t,e,r){return t.map(s=>{const a=s[e],n=typeof a=="number"&&Number.isFinite(a)?a:null,o=r==="kW"?1:0,l=n==null?"\u2014":`${f(n,o,this.cardLang)} ${r}`,u=this.sampleClock(s.recorded_at);return{label:u,value:n,title:`${u} \xB7 ${l}`}})}sampleHeadline(t,e){const r=this._hover!=null&&t[this._hover]?this._hover:t.length-1,s=t[r];if(!s||s.value==null)return"\u2014";const a=e==="kW"?1:0;return`${s.label} \xB7 ${f(s.value,a,this.cardLang)} ${e}`}sampleClock(t){const e=new Date(t);return Number.isNaN(e.getTime())?"":new Intl.DateTimeFormat(this.dates.language||"en",{hour:"numeric",minute:"2-digit",hour12:this.dates.hour12,timeZone:this.dates.timeZone}).format(e)}visibleSamples(t){return this.sliceWindow(t)}listToolbar(t){const e=t?.page??this._page,r=t&&t.per_page>0?Math.ceil(t.total/t.per_page):1;return h`
      <div class="toolbar list-toolbar">
        <div class="toolbar-actions">
          ${this.iconButton("mdi:chevron-left",this.text.previous,!t||e<=1,()=>this.setPage(e-1))}
          ${this.iconButton("mdi:chevron-right",this.text.next,!t||e>=r,()=>this.setPage(e+1))}
          ${this.iconButton("mdi:refresh",this.text.refresh,!1,()=>this.reload())}
        </div>
        <span class="page-indicator">${this.pageIndicator(t)}</span>
      </div>
    `}pageIndicator(t){if(!t||t.total<=0||t.per_page<=0||t.total<=t.per_page)return`${this.text.page} ${t?.page??this._page}`;const e=(t.page-1)*t.per_page+1,r=Math.min(t.page*t.per_page,t.total);return`${e}\u2013${r}`}iconButton(t,e,r,s){return h`
      <ha-icon-button
        .label=${e}
        aria-label=${e}
        title=${e}
        ?disabled=${r}
        @click=${()=>{r||s()}}
      >
        <ha-icon icon=${t}></ha-icon>
      </ha-icon-button>
    `}chartFocus(t,e,r){var s,a;if(r||((s=t[e])==null?void 0:s.value)!=null)return{point:t[e],index:e};for(let n=e-1;n>=0;n-=1)if(((a=t[n])==null?void 0:a.value)!=null)return{point:t[n],index:n};return{point:t[e],index:e}}chargeNote(t,e,r){const s=[];return t!=null&&s.push(`${f(t,0,this.cardLang)} % ${this.text.fastShare}`),e!=null&&s.push(`${this.text.cost} ${f(e,2,this.cardLang)}`),r!=null&&s.push(`${f(r,2,this.cardLang)} ${this.text.perKm}`),s.join(" \xB7 ")}historyGroups(t,e,r,s){const a=[];for(const n of t){const o=e(n),l=a[a.length-1];l&&l.key===o.dayKey?l.items.push(n):a.push({key:o.dayKey,label:o.dayLabel,items:[n]})}return h`
      ${a.map(n=>h`
          <section class="day-group">
            <h3 class="day-heading">${n.label}</h3>
            <ul class="list" data-slots=${String(r)}>
              ${n.items.map(o=>this.historyRow(e(o),s?()=>s(o):void 0))}
            </ul>
          </section>
        `)}
    `}routeTitle(t){const e=Ce(t,this.dates);return e.place?h`<p class="route-name">${this.placeBody(e)}</p>`:d}placeBody(t){return t.ends?h`<span class="entry-place route" title=${t.place??""} aria-label=${t.place??d}
      ><span class="place-point">${t.ends[0]}</span
      ><span class="place-join" aria-hidden="true">→</span
      ><span class="place-point">${t.ends[1]}</span></span
    >`:t.place??""}historyRow(t,e){const r=h`<span class="entry-line"
        ><time class="entry-when" datetime=${t.datetime} title=${t.when} aria-label=${t.when}
          >${t.clock}</time
        ><span
          class=${t.ends?"entry-place route":"entry-place"}
          title=${t.place??""}
          aria-label=${t.place??d}
          >${t.ends?h`<span class="place-point">${t.ends[0]}</span
                ><span class="place-join" aria-hidden="true">→</span
                ><span class="place-point">${t.ends[1]}</span>`:t.place??""}</span
        ><strong class="entry-figure">${t.figure??"\u2014"}</strong></span
      ><span class="entry-line entry-secondary"
        ><span class="entry-metrics" title=${t.detail}
          >${t.slots.map(s=>s?h`<span class="chip">${s}</span>`:h`<span class="chip" aria-hidden="true"></span>`)}</span
        ></span
      >`;return e?h`
        <li>
          <button type="button" class="entry" @click=${e}>${r}</button>
        </li>
      `:h`<li><div class="entry">${r}</div></li>`}km(t){return t==null?"\u2014":`${f(t,1,this.cardLang)} km`}kwh(t){return t==null?"\u2014":`${f(t,1,this.cardLang)} kWh`}when(t){return ji(t,this.dates)}openDrive(t){this._driveId=t,this._detail=void 0,this.clearZoom(),this._view="drive"}openCharge(t){this._chargeId=t,this.clearZoom(),this._view="charge"}setPeriod(t){if(this._period=t,this._bucketIndex=null,this.clearZoom(),this._view==="charts"){this.loadSeries();return}this._stats=void 0,this._previousKm=null,this.loadStats()}setPage(t){this._page=t,this._view==="drives"?(this._drives=void 0,this.loadDrives()):this._view==="charges"&&(this._charges=void 0,this.loadCharges())}reload(){this.clearHistory(),this.ensureView()}clearHistory(){this._drives=void 0,this._charges=void 0,this._detail=void 0,this._stats=void 0,this._series=void 0,this._tempBins=void 0,this._seriesPeriod=void 0,this._bucketIndex=null,this._page=1,this._error=""}async ensureView(){this._view==="drives"&&this.flags.drives&&!this._drives?await this.loadDrives():this._view==="charges"&&this.flags.charges&&!this._charges?await this.loadCharges():this._view==="stats"&&this.flags.stats&&!this._stats?await this.loadStats():this._view==="charts"&&Mt(this.flags)&&this.seriesStale()?await this.loadSeries():this._view==="drive"&&this.flags.drives&&this._driveId!=null&&!this._detail?await this.loadDrive():this._view==="charge"&&this.flags.charges&&!this._charges&&await this.loadCharges()}async loadDrives(){await this.load("drives",async()=>{const t=await this.call("get_drives",{page:this._page,per_page:P(this._config)});if(!Ne(t))throw new Error(this.text.failed);this._drives=t})}async loadCharges(){await this.load("charges",async()=>{const t=await this.call("get_charges",{page:this._page,per_page:P(this._config)});if(!Ne(t))throw new Error(this.text.failed);this._charges=t})}async loadDrive(){const t=this._driveId;t!=null&&await this.load("drive",async()=>{const e=await this.call("get_drive",{drive_id:t,max_points:300});if(!sr(e))throw new Error(this.text.failed);this._detail=e})}seriesStale(){const t=this.flags;return!!(this._seriesPeriod!==this._period||ge(t)&&!this._series||t.consumption_vs_temp&&!this._tempBins)}async loadSeries(){const t=this.flags;if(!Mt(t))return;const e=this._period,r=ge(t),s=t.consumption_vs_temp;r&&(this._series=void 0),s&&(this._tempBins=void 0),await this.load("charts",async()=>{const a=Ee[e];if(r){const n=await this.call("get_stats_series",{period:e,count:a});if(!Pe(n))throw new Error(this.text.failed);this._series=n}if(s)try{this._tempBins=nr(await this.call("get_consumption_by_temp",{period:e,count:a}))}catch{this._tempBins=[]}this._seriesPeriod=e})}async loadStats(){const t=this._period;await this.load("stats",async()=>{const e=Gi(t),r=await this.call("get_stats",e);if(!ar(r))throw new Error(this.text.failed);this._stats=r,this._previousKm=null;try{const s=await this.call("get_stats_series",{period:t,count:Ee[t]});Pe(s)&&(this._previousKm=Yi(s.buckets,t))}catch{this._previousKm=null}})}async load(t,e){if(!this.deviceId){this._error=this.text.missingDevice;return}this._loading=!0,this._error="";try{if(await e(),this._view!==t&&t!=="drive")return}catch(r){this._error=qi(r,this.text.failed)}finally{this._loading=!1}}async call(t,e){if(!this.hass||!this.deviceId)throw new Error(this.text.missingDevice);const r=await this.hass.callService("tesla_logger",t,{device_id:this.deviceId,...e},void 0,!1,!0),s=U(r);return s&&"response"in s?s.response:r}syncMap(){var t,e,r;const s=this.renderRoot.querySelector(".map"),a=((t=this._detail)==null?void 0:t.route)??[];if(!s||a.length===0){this.destroyMap();return}if(!this._headerVisible)return;const n=++this.mapToken,o=!!((r=(e=this.hass)==null?void 0:e.themes)!=null&&r.darkMode),l=getComputedStyle(this).getPropertyValue("--primary-color").trim()||"#03a9f4";this.loadMapModule().then(u=>{n!==this.mapToken||!this.isConnected||this.renderRoot.querySelector(".map")!==s||(this.routeMap=u.mountRoute(this.routeMap,s,a,o,l))}).catch(()=>{})}destroyMap(){this.mapToken+=1;const t=this.routeMap;this.routeMap=void 0,t?.destroy()}};Tt.properties={hass:{attribute:!1},_config:{state:!0},_view:{state:!0},_drives:{state:!0},_charges:{state:!0},_detail:{state:!0},_stats:{state:!0},_series:{state:!0},_tempBins:{state:!0},_bucketIndex:{state:!0},_period:{state:!0},_page:{state:!0},_loading:{state:!0},_error:{state:!0},_plotWidths:{state:!0},_headerBox:{state:!0},_headerVisible:{state:!0},_mainChart:{state:!0},_previousKm:{state:!0},_narrow:{state:!0},_tabsOverflow:{state:!0},_hover:{state:!0},_zoom:{state:!0},_brush:{state:!0},_carImageUrl:{state:!0},_carImageFailed:{state:!0}},Tt.styles=Bt`
      :host {
        display: block;
        --tl-text: var(--primary-text-color, #171a20);
        --tl-muted: var(--secondary-text-color, #5c5e62);
        --tl-surface: var(--card-background-color, var(--ha-card-background, #fff));
        --tl-surface-2: var(--secondary-background-color, #f4f4f4);
        --tl-line: var(--divider-color, rgba(23, 26, 32, 0.12));
        --tl-accent: var(--primary-color, #3e6ae1);
        --tl-green: var(--success-color, #1d9b52);
        --tl-radius: 14px;
        color: var(--tl-text);
        font-family: var(
          --ha-card-font-family,
          var(--ha-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif)
        );
      }
      ha-card.dark {
        --tl-green: var(--success-color, #4fd17c);
      }
      ha-card {
        padding-bottom: 8px;
      }
      .header-wrap {
        position: relative;
        overflow: hidden;
      }
      .map-band {
        position: relative;
        min-height: 84px;
        overflow: hidden;
      }
      .header {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 16px 16px 12px;
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
        font-size: 1.35rem;
        font-weight: 500;
        letter-spacing: -0.02em;
        color: var(--tl-text);
      }
      .sub {
        margin: 2px 0 0;
        color: var(--tl-muted);
        font-size: 0.92rem;
      }
      .hero-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 8px;
      }
      .car-stage {
        margin: 8px -8px 0;
      }
      svg.car {
        display: block;
        width: 100%;
        height: auto;
        aspect-ratio: 400 / 160;
      }
      img.car {
        display: block;
        width: min(100%, 560px);
        max-height: 240px;
        margin: 0 auto;
        object-fit: contain;
        object-position: center bottom;
      }
      .car-floor {
        opacity: 0.85;
      }
      ha-card.dark .car-floor {
        opacity: 1;
      }
      .map-only-spacer {
        height: 72px;
      }
      .pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-top: 6px;
        padding: 2px 10px;
        border-radius: 999px;
        background: var(--tl-surface-2);
        color: var(--tl-text);
        font-size: 0.78rem;
        font-weight: 500;
        letter-spacing: 0.02em;
      }
      .pill.drive {
        background: color-mix(in srgb, var(--tl-accent) 14%, transparent);
        color: var(--tl-accent);
      }
      .pill.charge {
        background: color-mix(in srgb, var(--tl-green) 16%, transparent);
        color: var(--tl-green);
      }
      .pill .status-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: currentColor;
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
      .tabs, .periods {
        display: flex;
        flex-wrap: nowrap;
        gap: 4px;
        width: max-content;
        max-width: calc(100% - 24px);
        margin: 0 12px 12px;
        padding: 4px;
        overflow-x: auto;
        scrollbar-width: none;
        border-radius: 999px;
        background: color-mix(in srgb, var(--tl-text) 8%, var(--tl-surface));
      }
      .tabs button, .periods button, .chart-switch button, button.zoom-reset {
        border: 0;
        border-bottom: 0;
        border-radius: 999px;
        background: transparent;
        color: var(--tl-muted);
        font: inherit;
        font-size: 0.875rem;
        font-weight: 500;
        min-height: 36px;
        padding: 0 14px;
        white-space: nowrap;
        cursor: pointer;
      }
      .tabs button[aria-selected="true"], .periods button[aria-pressed="true"], .chart-switch button[aria-pressed="true"] {
        background: var(--tl-surface);
        color: var(--tl-text);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
      }
      .chart-switch {
        display: flex;
        gap: 4px;
        width: max-content;
        max-width: calc(100% - 24px);
        margin: 0 12px 8px;
        padding: 3px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--tl-text) 8%, var(--tl-surface));
      }
      button.zoom-reset {
        margin: 0 12px 8px;
        background: var(--tl-surface-2);
        color: var(--tl-text);
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
      .day-group {
        margin: 0 12px 12px;
      }
      .day-heading {
        margin: 0 4px 8px;
        color: var(--tl-text);
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: -0.01em;
        text-transform: none;
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
        padding: 0;
        overflow: hidden;
        list-style: none;
        border: 1px solid var(--tl-line);
        border-radius: var(--tl-radius);
        background: var(--tl-surface);
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
        grid-template-columns: 8.5rem minmax(0, 1fr) auto;
        column-gap: 12px;
        align-items: start;
        min-width: 0;
        max-width: 100%;
      }
      .entry-secondary {
        display: block;
        margin-top: 4px;
        padding-left: calc(8.5rem + 12px);
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
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 4px;
      }
      .entry-place.route::before {
        content: "";
        position: absolute;
        left: 3.25px;
        top: 0.55em;
        bottom: 0.55em;
        width: 1.5px;
        background: var(--tl-line);
      }
      .place-point {
        position: relative;
        padding-left: 16px;
      }
      .place-point::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.45em;
        width: 8px;
        height: 8px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 2px solid var(--tl-muted);
        background: var(--tl-surface);
      }
      .place-point:last-child::before {
        border: 0;
        background: var(--tl-accent);
      }
      .place-join {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
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
      .list[data-slots="4"] .entry-figure {
        color: var(--tl-green);
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
        stroke: var(--tl-line);
        stroke-width: 1;
      }
      .series-chart .crosshair {
        stroke: var(--tl-muted);
        stroke-width: 1;
        stroke-dasharray: 3 3;
        pointer-events: none;
      }
      .plot {
        position: relative;
        touch-action: pan-y;
        user-select: none;
      }
      .brush {
        position: absolute;
        top: 12px;
        bottom: 28px;
        background: color-mix(in srgb, var(--tl-accent) 16%, transparent);
        pointer-events: none;
      }
      .chart-tooltip {
        position: absolute;
        z-index: 3;
        min-width: 8rem;
        padding: 8px 10px;
        border: 1px solid var(--tl-line);
        border-radius: 10px;
        background: var(--tl-surface);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        color: var(--tl-text);
        font-size: 0.8125rem;
        line-height: 1.35;
        pointer-events: none;
        white-space: nowrap;
      }
      .chart-tooltip .tip-head {
        margin-bottom: 4px;
        color: var(--tl-muted);
      }
      .chart-stage {
        position: relative;
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
          padding: 0;
        }
        .entry-line {
          grid-template-columns: 6.6rem minmax(0, 1fr) auto;
          column-gap: 8px;
        }
        .entry-secondary {
          padding-left: calc(6.6rem + 8px);
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
    `;let Te=Tt;function or(i){const t=i.toLowerCase();return t==="driving"?"drive":t==="charging"?"charge":t==="asleep"||t==="offline"?"idle":"park"}customElements.get("tesla-logger-card-impl")||customElements.define("tesla-logger-card-impl",Te),customElements.get("tesla-logger-card-editor-impl")||customElements.define("tesla-logger-card-editor-impl",me);export{Te as TeslaLoggerCard,me as TeslaLoggerCardEditor};
