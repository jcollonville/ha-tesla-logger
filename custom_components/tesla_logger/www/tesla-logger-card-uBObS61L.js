/* Tesla Logger Lovelace card. Built from frontend/. Do not edit. */
const et=globalThis,ct=et.ShadowRoot&&(et.ShadyCSS===void 0||et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),Ct=new WeakMap;let St=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ct&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ct.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ct.set(t,e))}return e}toString(){return this.cssText}};const xe=e=>new St(typeof e=="string"?e:e+"",void 0,dt),be=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((s,r,n)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1],e[0]);return new St(i,e,dt)},we=(e,t)=>{if(ct)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const s=document.createElement("style"),r=et.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=i.cssText,e.appendChild(s)}},Mt=ct?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return xe(i)})(e):e;const{is:ke,defineProperty:Ae,getOwnPropertyDescriptor:Ce,getOwnPropertyNames:Se,getOwnPropertySymbols:Me,getPrototypeOf:Ee}=Object,F=globalThis,Et=F.trustedTypes,De=Et?Et.emptyScript:"",Dt=F.reactiveElementPolyfillSupport,j=(e,t)=>e,ut={toAttribute(e,t){switch(t){case Boolean:e=e?De:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Pt=(e,t)=>!ke(e,t),Tt={attribute:!0,type:String,converter:ut,reflect:!1,useDefault:!1,hasChanged:Pt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),F.litPropertyMetadata??(F.litPropertyMetadata=new WeakMap);let L=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Tt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Ae(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=Ce(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:s,set(n){const a=s?.call(this);r?.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Tt}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;const e=Ee(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){const t=this.properties,i=[...Se(t),...Me(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Mt(s))}else e!==void 0&&t.push(Mt(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return we(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var i;const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const n=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:ut).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var i,s;const r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const a=r.getPropertyOptions(n),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:ut;this._$Em=n;const l=o.fromAttribute(t,a.type);this[n]=l??((s=this._$Ej)==null?void 0:s.get(n))??l,this._$Em=null}}requestUpdate(e,t,i,s=!1,r){var n;if(e!==void 0){const a=this.constructor;if(s===!1&&(r=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??Pt)(r,t)||i.useDefault&&i.reflect&&r===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,n]of s){const{wrapped:a}=n,o=this[r];a!==!0||this._$AL.has(r)||o===void 0||this.C(r,void 0,n,o)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(i)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[j("elementProperties")]=new Map,L[j("finalized")]=new Map,Dt?.({ReactiveElement:L}),(F.reactiveElementVersions??(F.reactiveElementVersions=[])).push("2.1.2");const it=globalThis,Nt=e=>e,st=it.trustedTypes,zt=st?st.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ft="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,Lt="?"+S,Pe=`<${Lt}>`,M=document,W=()=>M.createComment(""),V=e=>e===null||typeof e!="object"&&typeof e!="function",pt=Array.isArray,Te=e=>pt(e)||typeof e?.[Symbol.iterator]=="function",gt=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,It=/-->/g,Ut=/>/g,E=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rt=/'/g,Ht=/"/g,Ot=/^(?:script|style|textarea|title)$/i,Bt=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),d=Bt(1),y=Bt(2),I=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),jt=new WeakMap,D=M.createTreeWalker(M,129);function Wt(e,t){if(!pt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return zt!==void 0?zt.createHTML(t):t}const Ne=(e,t)=>{const i=e.length-1,s=[];let r,n=t===2?"<svg>":t===3?"<math>":"",a=q;for(let o=0;o<i;o++){const l=e[o];let h,g,c=-1,m=0;for(;m<l.length&&(a.lastIndex=m,g=a.exec(l),g!==null);)m=a.lastIndex,a===q?g[1]==="!--"?a=It:g[1]!==void 0?a=Ut:g[2]!==void 0?(Ot.test(g[2])&&(r=RegExp("</"+g[2],"g")),a=E):g[3]!==void 0&&(a=E):a===E?g[0]===">"?(a=r??q,c=-1):g[1]===void 0?c=-2:(c=a.lastIndex-g[2].length,h=g[1],a=g[3]===void 0?E:g[3]==='"'?Ht:Rt):a===Ht||a===Rt?a=E:a===It||a===Ut?a=q:(a=E,r=void 0);const f=a===E&&e[o+1].startsWith("/>")?" ":"";n+=a===q?l+Pe:c>=0?(s.push(h),l.slice(0,c)+Ft+l.slice(c)+S+f):l+S+(c===-2?o:f)}return[Wt(e,n+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class X{constructor({strings:t,_$litType$:i},s){let r;this.parts=[];let n=0,a=0;const o=t.length-1,l=this.parts,[h,g]=Ne(t,i);if(this.el=X.createElement(h,s),D.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=D.nextNode())!==null&&l.length<o;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(Ft)){const m=g[a++],f=r.getAttribute(c).split(S),v=/([.?@])?(.*)/.exec(m);l.push({type:1,index:n,name:v[2],strings:f,ctor:v[1]==="."?Fe:v[1]==="?"?Le:v[1]==="@"?Ie:rt}),r.removeAttribute(c)}else c.startsWith(S)&&(l.push({type:6,index:n}),r.removeAttribute(c));if(Ot.test(r.tagName)){const c=r.textContent.split(S),m=c.length-1;if(m>0){r.textContent=st?st.emptyScript:"";for(let f=0;f<m;f++)r.append(c[f],W()),D.nextNode(),l.push({type:2,index:++n});r.append(c[m],W())}}}else if(r.nodeType===8)if(r.data===Lt)l.push({type:2,index:n});else{let c=-1;for(;(c=r.data.indexOf(S,c+1))!==-1;)l.push({type:7,index:n}),c+=S.length-1}n++}}static createElement(t,i){const s=M.createElement("template");return s.innerHTML=t,s}}function U(e,t,i=e,s){var r,n;if(t===I)return t;let a=s!==void 0?(r=i._$Co)==null?void 0:r[s]:i._$Cl;const o=V(t)?void 0:t._$litDirective$;return a?.constructor!==o&&((n=a?._$AO)==null||n.call(a,!1),o===void 0?a=void 0:(a=new o(e),a._$AT(e,i,s)),s!==void 0?(i._$Co??(i._$Co=[]))[s]=a:i._$Cl=a),a!==void 0&&(t=U(e,a._$AS(e,t.values),a,s)),t}class ze{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,r=(t?.creationScope??M).importNode(i,!0);D.currentNode=r;let n=D.nextNode(),a=0,o=0,l=s[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new tt(n,n.nextSibling,this,t):l.type===1?h=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(h=new Ue(n,this,t)),this._$AV.push(h),l=s[++o]}a!==l?.index&&(n=D.nextNode(),a++)}return D.currentNode=M,r}p(t){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class tt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,s,r){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=U(this,t,i),V(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Te(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){var i;const{values:s,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=X.createElement(Wt(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===n)this._$AH.p(s);else{const a=new ze(n,this),o=a.u(this.options);a.p(s),this.T(o),this._$AH=a}}_$AC(t){let i=jt.get(t.strings);return i===void 0&&jt.set(t.strings,i=new X(t)),i}k(t){pt(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,r=0;for(const n of t)r===i.length?i.push(s=new tt(this.O(W()),this.O(W()),this,this.options)):s=i[r],s._$AI(n),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,i);t!==this._$AB;){const r=Nt(t).nextSibling;Nt(t).remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class rt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,r,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(t,i=this,s,r){const n=this.strings;let a=!1;if(n===void 0)t=U(this,t,i,0),a=!V(t)||t!==this._$AH&&t!==I,a&&(this._$AH=t);else{const o=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=U(this,o[s+l],i,l),h===I&&(h=this._$AH[l]),a||(a=!V(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!r&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Fe extends rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class Le extends rt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class Ie extends rt{constructor(t,i,s,r,n){super(t,i,s,r,n),this.type=5}_$AI(t,i=this){if((t=U(this,t,i,0)??u)===I)return;const s=this._$AH,r=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class Ue{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}}const Vt=it.litHtmlPolyfillSupport;Vt?.(X,tt),(it.litHtmlVersions??(it.litHtmlVersions=[])).push("3.3.3");const Re=(e,t,i)=>{const s=i?.renderBefore??t;let r=s._$litPart$;if(r===void 0){const n=i?.renderBefore??null;s._$litPart$=r=new tt(t.insertBefore(W(),n),n,void 0,i??{})}return r._$AI(e),r};const G=globalThis;let R=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Re(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return I}};var qt;R._$litElement$=!0,R.finalized=!0,(qt=G.litElementHydrateSupport)==null||qt.call(G,{LitElement:R});const Gt=G.litElementPolyfillSupport;Gt?.({LitElement:R}),(G.litElementVersions??(G.litElementVersions=[])).push("4.2.2");const He=e=>e.strings===void 0;const Oe={CHILD:2},Be=e=>(...t)=>({_$litDirective$:e,values:t});class je{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}const Z=(e,t)=>{var i;const s=e._$AN;if(s===void 0)return!1;for(const r of s)(i=r._$AO)==null||i.call(r,t,!1),Z(r,t);return!0},nt=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},Zt=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),qe(t)}};function We(e){this._$AN!==void 0?(nt(this),this._$AM=e,Zt(this)):this._$AM=e}function Ve(e,t=!1,i=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let n=i;n<s.length;n++)Z(s[n],!1),nt(s[n]);else s!=null&&(Z(s,!1),nt(s));else Z(this,e)}const qe=e=>{e.type==Oe.CHILD&&(e._$AP??(e._$AP=Ve),e._$AQ??(e._$AQ=We))};class Ge extends je{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,s){super._$AT(t,i,s),Zt(this),this.isConnected=t._$AU}_$AO(t,i=!0){var s,r;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(r=this.disconnected)==null||r.call(this)),i&&(Z(this,t),nt(this))}setValue(t){if(He(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const mt=new WeakMap,Yt=Be(class extends Ge{render(e){return u}update(e,[t]){var i;const s=t!==this.G;return s&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),u}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=mt.get(t);i===void 0&&(i=new WeakMap,mt.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=mt.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Kt={status:"Status",drives:"Drives",charges:"Charges",stats:"Stats",charts:"Charts",consumptionChart:"Consumption",chargedChart:"Energy charged",emptySeries:"No data for this period.",latest:"Latest",period:"Period",thisWeek:"This week",thisMonth:"This month",thisYear:"This year",consumed:"consumed",batteryHealth:"Battery health",rangeAtFull:"Range at 100%",acDc:"AC/DC charging",fastShare:"fast charging",cost:"Cost",perKm:"/km",idleUse:"Parked consumption",tempUse:"Consumption vs temperature",range:"Range",speed:"Speed",power:"Power",inside:"Inside",outside:"Outside",charger:"Charger",added:"Added",odometer:"Odometer",limit:"Limit",location:"Location",unknown:"Unknown",loading:"Loading\u2026",emptyDrives:"No drives in this page.",emptyCharges:"No charges in this page.",back:"Back",refresh:"Refresh",week:"Week",month:"Month",year:"Year",distance:"Distance",duration:"Duration",energy:"Energy",efficiency:"Efficiency",drivesCount:"Drives",chargesCount:"Charges",energyAdded:"Energy added",map:"Route",speedChart:"Speed",elevationChart:"Elevation",batteryChart:"Battery",noRoute:"This drive has no route points.",pick:"Select a Tesla Logger entity in the card editor.",missingDevice:"This entity is not linked to a Tesla Logger device.",failed:"Could not load history.",previous:"Previous",next:"Next",page:"Page",online:"Online",asleep:"Asleep",offline:"Offline",driving:"Driving",charging:"Charging",updating:"Updating",entity:"Entity",defaultView:"Default view",showMap:"Map",showBlocks:"Blocks",showFields:{status:"Status",drives:"Drives",charges:"Charges",chart_consumption:"Consumption (Wh/km)",chart_distance:"Distance",chart_energy:"Energy charged",totals:"Totals",battery_health:"Battery health",charging_split:"AC/DC charging and cost",vampire_drain:"Parked consumption",consumption_vs_temp:"Consumption vs temperature"}},Ze={...Kt,status:"\xC9tat",drives:"Trajets",charges:"Charges",stats:"Stats",charts:"Graphiques",consumptionChart:"Consommation",chargedChart:"\xC9nergie charg\xE9e",emptySeries:"Aucune donn\xE9e sur cette p\xE9riode.",latest:"Dernier",period:"P\xE9riode",thisWeek:"Cette semaine",thisMonth:"Ce mois",thisYear:"Cette ann\xE9e",consumed:"consomm\xE9",batteryHealth:"Sant\xE9 batterie",rangeAtFull:"Autonomie \xE0 100 %",acDc:"Charges AC/DC",fastShare:"recharge rapide",cost:"Co\xFBt",perKm:"/km",idleUse:"Consommation \xE0 l'arr\xEAt",tempUse:"Consommation vs temp\xE9rature",range:"Autonomie",speed:"Vitesse",power:"Puissance",inside:"Int\xE9rieur",outside:"Ext\xE9rieur",charger:"Chargeur",added:"Ajout\xE9e",odometer:"Odom\xE8tre",limit:"Limite",location:"Lieu",unknown:"Inconnu",loading:"Chargement\u2026",emptyDrives:"Aucun trajet sur cette page.",emptyCharges:"Aucune charge sur cette page.",back:"Retour",refresh:"Actualiser",week:"Semaine",month:"Mois",year:"Ann\xE9e",distance:"Distance",duration:"Dur\xE9e",energy:"\xC9nergie",efficiency:"Efficacit\xE9",drivesCount:"Trajets",chargesCount:"Charges",energyAdded:"\xC9nergie ajout\xE9e",map:"Trac\xE9",speedChart:"Vitesse",elevationChart:"Altitude",batteryChart:"Batterie",noRoute:"Ce trajet n'a pas de trac\xE9.",pick:"Choisissez une entit\xE9 Tesla Logger dans l'\xE9diteur.",missingDevice:"Cette entit\xE9 n'est pas li\xE9e \xE0 un appareil Tesla Logger.",failed:"Impossible de charger l'historique.",previous:"Pr\xE9c\xE9dent",next:"Suivant",page:"Page",online:"En ligne",asleep:"Endormie",offline:"Hors ligne",driving:"En route",charging:"En charge",updating:"Mise \xE0 jour",entity:"Entit\xE9",defaultView:"Vue par d\xE9faut",showMap:"Carte",showBlocks:"Blocs",showFields:{status:"\xC9tat",drives:"Trajets",charges:"Charges",chart_consumption:"Consommation (Wh/km)",chart_distance:"Distance",chart_energy:"\xC9nergie charg\xE9e",totals:"Totaux",battery_health:"Sant\xE9 batterie",charging_split:"Charges AC/DC et co\xFBt",vampire_drain:"Consommation \xE0 l'arr\xEAt",consumption_vs_temp:"Consommation vs temp\xE9rature"}};function at(e){return(e||"").toLowerCase().startsWith("fr")?"fr":"en"}function Jt(e){return e==="fr"?Ze:Kt}function Ye(e,t){return e[t]||t||e.unknown}function Y(e){return e&&typeof e=="object"?{language:e.language||"en",hour12:e.hour12,timeZone:e.timeZone}:{language:e||"en"}}function Ke(e){var t,i,s,r;const n=((t=e?.locale)==null?void 0:t.language)||e?.language||"en",a=(i=e?.locale)==null?void 0:i.time_format;let o;a==="12"?o=!0:a==="24"&&(o=!1);const l=(s=e?.locale)==null?void 0:s.time_zone,h=(r=e?.config)==null?void 0:r.time_zone;return{language:n,hour12:o,timeZone:l==="server"&&typeof h=="string"&&h!==""&&h!=="local"&&h!=="server"?h:void 0}}function _(e,t,i){return e.toLocaleString(i==="fr"?"fr-FR":"en-US",{minimumFractionDigits:t,maximumFractionDigits:t})}const Je=/^<.*>$/;function Qt(e){if(typeof e!="string")return null;const t=e.trim();if(!t||Je.test(t))return null;const i=t.toLowerCase();return i==="none"||i==="null"?null:t}function Xt(e){return e.replace(/[\u00a0\u202f]/g," ").replace(/\s+/g," ").trim()}function vt(e,t){const i={...t};return e.timeZone&&(i.timeZone=e.timeZone),i}function ot(e,t){return Xt(new Intl.DateTimeFormat(t.language||"en",vt(t,{weekday:"short",day:"numeric",month:"short"})).format(e))}function K(e,t){const i=vt(t,{hour:t.hour12?"numeric":"2-digit",minute:"2-digit"});return typeof t.hour12=="boolean"&&(i.hour12=t.hour12),Xt(new Intl.DateTimeFormat(t.language||"en",i).format(e))}function te(e,t){const i=new Intl.DateTimeFormat("en-US",vt(t,{year:"numeric",month:"2-digit",day:"2-digit"})).formatToParts(e),s=r=>{var n;return((n=i.find(a=>a.type===r))==null?void 0:n.value)??""};return`${s("year")}-${s("month")}-${s("day")}`}function Qe(e,t){const i=new Date(e);if(Number.isNaN(i.getTime()))return e;const s=Y(t);return`${ot(i,s)}, ${K(i,s)}`}function J(e){if(e==null||Number.isNaN(e))return"\u2014";const t=Math.max(0,Math.round(e)),i=Math.floor(t/3600),s=Math.floor(t%3600/60);return i>0?`${i} h ${s} min`:`${s} min`}function ee(e){return e.map(t=>typeof t=="string"?t.trim():"").filter(t=>t.length>0)}function Q(e){return typeof e!="string"?null:e.trim()||null}function P(e){return typeof e=="number"&&Number.isFinite(e)?e:null}function ie(e,t,i){const s=P(e),r=P(t);return s==null&&r==null?null:s!=null&&r!=null?`${_(s,0,i)} \u2192 ${_(r,0,i)} %`:`${_(s??r,0,i)} %`}function se(e,t,i){const s=Y(i),r=new Date(e);if(Number.isNaN(r.getTime()))return e;const n=`${ot(r,s)}, ${K(r,s)}`;if(!t)return n;const a=new Date(t);if(Number.isNaN(a.getTime()))return n;if(te(r,s)!==te(a,s)){const o=`${ot(a,s)}, ${K(a,s)}`;return`${n} \u2013 ${o}`}return`${ot(r,s)}, ${K(r,s)}\u2013${K(a,s)}`}function re(e,t){const i=P(e);return i==null?null:`${_(i,1,t)} kWh`}function Xe(e,t){const i=Y(t),s=at(i.language),r=Q(e.start_address),n=Q(e.end_address),a=r&&n?`${r} \u2192 ${n}`:r||n,o=_t(e.energy_used_kwh,e.distance_km),l=ie(e.start_battery_level,e.end_battery_level,s),h=[P(e.duration_s)==null?null:J(e.duration_s),o==null?null:`${_(o,0,s)} Wh/km`,l??re(e.energy_used_kwh,s)],g=ee(h),c=P(e.distance_km);return{datetime:e.start_at,when:se(e.start_at,e.end_at,i),place:a,ends:r&&n?[r,n]:null,figure:c==null?null:`${_(c,1,s)} km`,detail:g.join(" \xB7 "),details:g,slots:h}}function ti(e){if(e.is_dc===!0)return"DC";if(e.is_dc===!1)return"AC";const t=Qt(e.charger_type);return t==="AC"||t==="DC"?t:null}function ei(e,t){const i=Y(t),s=at(i.language),r=Q(e.address)||Q(e.geofence)||Q(e.location),n=Qt(e.charger_type),a=n&&n!=="AC"&&n!=="DC"?n:null,o=P(e.max_power_kw),l=[P(e.duration_s)==null?null:J(e.duration_s),ie(e.start_battery_level,e.end_battery_level,s),o==null?null:`${_(o,0,s)} kW`,ti(e)],h=ee(l);return{datetime:e.start_at,when:se(e.start_at,e.end_at,i),place:r||a,ends:null,figure:re(e.energy_added_kwh,s),detail:h.join(" \xB7 "),details:h,slots:l}}function _t(e,t){return e==null||t==null||t<=0?null:e*1e3/t}function ne(e,t=new Date){const i=new Date(t);if(e==="week"){const r=(i.getDay()+6)%7;i.setDate(i.getDate()-r)}else e==="month"?i.setDate(1):i.setMonth(0,1);i.setHours(0,0,0,0);const s=new Date(i);return e==="week"?s.setDate(s.getDate()+7):e==="month"?s.setMonth(s.getMonth()+1):s.setFullYear(s.getFullYear()+1),{start:i,end:s}}function ae(e,t,i=new Date){const s=new Date(e).getTime();if(Number.isNaN(s))return!1;const{start:r,end:n}=ne(t,i);return s>=r.getTime()&&s<n.getTime()}function ii(e){const t=new Date;return{from:ne(e,t).start.toISOString(),to:t.toISOString()}}function si(e){return typeof e=="string"?e:e instanceof Error||e&&typeof e=="object"&&"message"in e&&typeof e.message=="string"?e.message:""}function ri(e,t){const i=si(e);return!i||i.includes("tl_")?t:i.slice(0,180)}function T(e){return!e||typeof e!="object"?null:e}const ni={week:12,month:12,year:5},ai=480;function oi(e,t=!1){const i=t?200:360,s=e!=null&&Number.isFinite(e)&&e>=64?e:i,r=s<ai;return{width:s,height:t?r?116:132:r?184:208,left:t?32:42,right:t?8:12,top:t?8:12,bottom:t?22:28}}function li(e){if(!Number.isFinite(e)||e<=0)return 1;const t=10**Math.floor(Math.log10(e)),i=e/t;return(i<=1?1:i<=2?2:i<=5?5:10)*t}function hi(e,t,i=new Date){let s=-1;return e.forEach((r,n)=>{ae(r,t,i)&&(s=n)}),s>=0?s:Math.max(0,e.length-1)}function ft(e,t,i){const s=new Date(e);if(Number.isNaN(s.getTime()))return e;const r=Y(i),n=r.language||"en",a=r.timeZone?{timeZone:r.timeZone}:{};return t==="year"?new Intl.DateTimeFormat(n,{year:"numeric",...a}).format(s):t==="month"?new Intl.DateTimeFormat(n,{month:"short",...a}).format(s).replace(/[\u00a0\u202f]/g," ").replace(/\.$/,"").trim():new Intl.DateTimeFormat(n,{day:"numeric",month:"short",...a}).format(s).replace(/[\u00a0\u202f]/g," ").replace(/,/g,"").replace(/\s+/g," ").trim()}function ci(e,t,i,s,r={}){const n=oi(r.width,r.compact),a=e.map(p=>t==="stack"?Math.max(0,p.value??0)+Math.max(0,p.stack??0):p.value!=null&&Number.isFinite(p.value)&&p.value>0?p.value:0).filter(p=>p>0),o=li(a.length?Math.max(...a):0),l=n.width-n.left-n.right,h=n.height-n.top-n.bottom,g=e.length>0?l/e.length:l,c=p=>n.top+h-p/o*h,m=c(0),f=[o,o/2,0],v=e.map((p,$)=>{const C=n.left+g*$+g/2,A=p.value!=null&&Number.isFinite(p.value)?p.value:null,w=A==null?null:c(Math.max(0,A));return{...p,x:C,y:w,value:A}}),x=e.length>8?2:1,k=(p,$,C)=>{if(!r.onSelect)return y`<g><title>${$}</title>${C}</g>`;const A=r.selected===p;return y`
      <g
        class=${A?"selected":""}
        role="button"
        tabindex="0"
        aria-pressed=${A?"true":"false"}
        aria-label=${$}
        @click=${()=>{var w;return(w=r.onSelect)==null?void 0:w.call(r,p)}}
        @keydown=${w=>{var B;(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),(B=r.onSelect)==null||B.call(r,p))}}
      >
        <title>${$}</title>
        ${C}
      </g>
    `},H=t==="line"?[]:v.map((p,$)=>{const C=Math.min(r.compact?16:22,g*.62),A=(p.x-C/2).toFixed(1),w=y`
            <rect
              class="hit"
              x=${(p.x-g/2).toFixed(1)}
              y=${n.top}
              width=${g.toFixed(1)}
              height=${h}
            ></rect>
          `;if(t==="stack"){const fe=[{amount:Math.max(0,p.value??0),className:"bar ac"},{amount:Math.max(0,p.stack??0),className:"bar dc"}];let ht=0;const $e=fe.map(wt=>{const ye=c(ht);ht+=wt.amount;const kt=c(ht),At=Math.max(0,ye-kt);return At<=0?y``:y`
                <rect
                  class=${wt.className}
                  x=${A}
                  y=${kt.toFixed(1)}
                  width=${C.toFixed(1)}
                  height=${At.toFixed(1)}
                  rx="2"
                ></rect>
              `});return k($,p.title,y`${w}${$e}`)}const B=p.y??m,_e=Math.max(0,m-B);return k($,p.title,y`
              ${w}
              <rect
                class="bar"
                x=${A}
                y=${B.toFixed(1)}
                width=${C.toFixed(1)}
                height=${_e.toFixed(1)}
                rx="2"
              ></rect>
            `)}),z=[];let O=!1;if(t==="line")for(const p of v){if(p.y==null){O=!1;continue}z.push(`${O?"L":"M"}${p.x.toFixed(1)},${p.y.toFixed(1)}`),O=!0}const ve=t==="line"?v.map((p,$)=>p.y==null?y``:k($,p.title,y`
              <circle class="hit" cx=${p.x.toFixed(1)} cy=${p.y.toFixed(1)} r="12"></circle>
              <circle class="dot" cx=${p.x.toFixed(1)} cy=${p.y.toFixed(1)} r="3.5"></circle>
            `)):[];return y`
    <svg
      class=${r.compact?"series-chart compact":"series-chart"}
      viewBox=${`0 0 ${n.width} ${n.height}`}
      width="100%"
      height=${String(n.height)}
      role="group"
      aria-label=${i}
      preserveAspectRatio="xMinYMin meet"
    >
      ${f.map(p=>{const $=c(p);return y`
          <line class="grid" x1=${n.left} y1=${$.toFixed(1)} x2=${n.width-n.right} y2=${$.toFixed(1)}></line>
          <text class="y-label" x=${n.left-4} y=${($+4).toFixed(1)} text-anchor="end">
            ${s(p)}
          </text>
        `})}
      ${H}
      ${z.length>1?y`<path class="line" d=${z.join(" ")}></path>`:y``}
      ${ve}
      ${v.map((p,$)=>$%x===0||$===v.length-1?y`<text class="x-label" x=${p.x.toFixed(1)} y=${n.height-6} text-anchor="middle">${p.label}</text>`:y``)}
    </svg>
  `}function di(e,t){const i=[];for(const s of e){const r=s[t];typeof r=="number"&&Number.isFinite(r)&&i.push(r)}return i}function ui(e,t=320,i=56){if(e.length<2)return y``;const s=Math.min(...e),r=Math.max(...e)-s||1,n=t/(e.length-1),a=e.map((o,l)=>{const h=l*n,g=i-4-(o-s)/r*(i-8);return`${h.toFixed(1)},${g.toFixed(1)}`}).join(" ");return y`
    <svg class="chart" viewBox="0 0 ${t} ${i}" preserveAspectRatio="none" aria-hidden="true">
      <polyline points=${a}></polyline>
    </svg>
  `}const oe=15,N=256,le=85.05112878;function pi(e,t){return typeof e!="number"||typeof t!="number"||!Number.isFinite(e)||!Number.isFinite(t)||e<-90||e>90||t<-180||t>180?null:{lat:e,lon:t}}function gi(e,t,i=oe){const s=N*2**i,r=Math.min(le,Math.max(-le,e))*Math.PI/180,n=(t+180)/360*s,a=(1-Math.log(Math.tan(Math.PI/4+r/2))/Math.PI)/2*s;return{x:n,y:a}}function mi(e,t,i,s,r=oe){const n=gi(e,t,r),a=n.x-i/2,o=n.y-s/2,l=Math.floor(a/N),h=Math.floor((a+Math.max(i,1)-.001)/N),g=Math.floor(o/N),c=Math.floor((o+Math.max(s,1)-.001)/N),m=2**r,f=[];for(let v=l;v<=h;v+=1)for(let x=g;x<=c;x+=1){if(x<0||x>=m)continue;const k=(v%m+m)%m;f.push({x:k,y:x,left:Math.round((v*N-a)*10)/10,top:Math.round((x*N-o)*10)/10,url:`https://tile.openstreetmap.org/${r}/${k}/${x}.png`})}return{tiles:f,dot:{left:i/2,top:s/2}}}const $t={status:!0,drives:!0,charges:!0,chart_consumption:!0,chart_distance:!0,chart_energy:!0,totals:!0,battery_health:!0,charging_split:!0,vampire_drain:!0,consumption_vs_temp:!0},he=Object.keys($t);function yt(e){const t={...$t},i=e?.show;if(!i||typeof i!="object")return t;for(const s of he){const r=i[s];typeof r=="boolean"&&(t[s]=r)}return t}function xt(e){return e.chart_consumption||e.chart_distance||e.chart_energy||e.totals||e.battery_health||e.charging_split||e.vampire_drain||e.consumption_vs_temp}function ce(e){return e.chart_consumption||e.chart_distance||e.chart_energy||e.totals||e.battery_health||e.charging_split||e.vampire_drain}function lt(e){const t=[];return e.status&&t.push("status"),e.drives&&t.push("drives"),e.charges&&t.push("charges"),t.push("stats"),xt(e)&&t.push("charts"),t}function vi(e,t){return e==="drive"?t.drives?e:lt(t)[0]??"stats":e==="stats"||lt(t).includes(e)?e:lt(t)[0]??"stats"}function de(e){const t=T(e);return!!(t&&Array.isArray(t.data))}function _i(e){const t=T(e);return!!(t&&Array.isArray(t.route)&&Array.isArray(t.series))}function fi(e){const t=T(e);return!!(t&&typeof t.distance_km=="number")}function $i(e){const t=T(e);return!!(t&&Array.isArray(t.buckets))}function yi(e){const t=T(e);return(t&&Array.isArray(t.data)?t.data:[]).filter(i=>{const s=T(i);return!!(s&&typeof s.temp_c_bucket=="number")})}function b(e){return typeof e=="number"&&Number.isFinite(e)?e:null}const ue=10,bt=class extends R{constructor(){super(...arguments),this._view="status",this._bucketIndex=null,this._period="month",this._page=1,this._loading=!1,this._error="",this._plotWidths={},this._headerBox={width:0,height:0},this._headerVisible=!1,this.mapToken=0,this.watchSize=t=>{var i;t&&((i=this._resize)==null||i.observe(t))}}setConfig(t){var i;if(!t||typeof t.entity!="string"||!t.entity)throw new Error("Please select a Tesla Logger entity");const s=((i=this._config)==null?void 0:i.entity)!==t.entity;this._config=t,s&&(this._view=t.default_view||"status",this.clearHistory()),this.ensureVisibleView()}get flags(){return yt(this._config)}ensureVisibleView(){const t=vi(this._view,this.flags);t!==this._view&&(this._view=t)}static getConfigElement(){return document.createElement("tesla-logger-card-editor-impl")}static getStubConfig(t){return{entity:Object.keys(t.states).find(i=>{var s,r;return((r=(s=t.states[i])==null?void 0:s.attributes)==null?void 0:r.key)==="location"})||"",show:{...$t}}}getCardSize(){return 6}connectedCallback(){super.connectedCallback(),this.watchVisibility(),typeof ResizeObserver=="function"&&(this._resize=new ResizeObserver(t=>{const i=t.map(s=>{const r=s.target;return{plot:r.dataset.plot,mapHost:r.dataset.mapHost!=null,width:Math.round(s.contentRect.width),height:Math.round(s.contentRect.height)}});queueMicrotask(()=>{if(!this._resize)return;let s=this._plotWidths,r=!1,n=this._headerBox,a=!1;for(const o of i){if(o.plot){o.width>0&&s[o.plot]!==o.width&&(r||(s={...s},r=!0),s[o.plot]=o.width);continue}o.mapHost&&(n.width!==o.width||n.height!==o.height)&&(n={width:o.width,height:o.height},a=!0)}r&&(this._plotWidths=s),a&&(this._headerBox=n)})}))}disconnectedCallback(){var t,i;(t=this._onScreen)==null||t.disconnect(),this._onScreen=void 0,(i=this._resize)==null||i.disconnect(),this._resize=void 0,this.destroyMap(),super.disconnectedCallback()}watchVisibility(){if(!(this._headerVisible||this._onScreen)){if(typeof IntersectionObserver!="function"){this._headerVisible=!0;return}this._onScreen=new IntersectionObserver(t=>{var i;t.some(s=>s.isIntersecting)&&((i=this._onScreen)==null||i.disconnect(),this._onScreen=void 0,this._headerVisible=!0)}),this._onScreen.observe(this)}}updated(t){(t.has("_view")||t.has("_config"))&&this.ensureView(),this._view==="drive"&&(t.has("_detail")||t.has("_view")||t.has("_headerVisible"))&&this.syncMap(),t.has("_view")&&this._view!=="drive"&&this.destroyMap(),this.shouldLoadMapChunk()&&this.loadMapModule().catch(()=>{})}render(){var t;return(t=this._config)!=null&&t.entity?d`
      <ha-card>
        ${this.header()}
        <div class="tabs" role="tablist">
          ${lt(this.flags).map(i=>this.tab(i,this.text[i]))}
        </div>
        ${this._error?d`<p class="message">${this._error}</p>`:u}
        ${this._loading?d`<p class="message">${this.text.loading}</p>`:u}
        ${this.body()}
      </ha-card>
    `:d`<ha-card><p class="message">${this.text.pick}</p></ha-card>`}get dates(){return Ke(this.hass)}get cardLang(){return at(this.dates.language)}get text(){return Jt(this.cardLang)}get readings(){var t,i,s,r;const n=new Map,a=this.hass,o=(t=this._config)==null?void 0:t.entity;if(!a||!o||!a.states[o])return n;const l=(s=(i=a.entities)==null?void 0:i[o])==null?void 0:s.device_id,h=a.states[o].attributes.vin;for(const[g,c]of Object.entries(a.states)){const m=(r=a.entities)==null?void 0:r[g],f=!!(l&&m?.device_id===l),v=!!(h&&c.attributes.vin===h);if(!f&&!v)continue;const x=m?.translation_key||(typeof c.attributes.key=="string"?c.attributes.key:void 0);x&&n.set(x,c)}return n}get deviceId(){var t,i,s;const r=(t=this._config)==null?void 0:t.entity;if(!(!this.hass||!r))return(s=(i=this.hass.entities)==null?void 0:i[r])==null?void 0:s.device_id}numeric(t){var i;const s=(i=this.readings.get(t))==null?void 0:i.state;if(!s||s==="unknown"||s==="unavailable")return null;const r=Number(s);return Number.isFinite(r)?r:null}label(t){var i;const s=(i=this.readings.get(t))==null?void 0:i.state;return!s||s==="unknown"||s==="unavailable"?null:s}header(){var t,i,s,r,n,a;const o=this.numeric("battery_level"),l=o==null?"\u2014":`${Math.round(o)}`,h=o==null?0:Math.max(0,Math.min(100,o)),g=this.label("activity")||"",c=this.deviceId?(s=(i=(t=this.hass)==null?void 0:t.devices)==null?void 0:i[this.deviceId])==null?void 0:s.name:void 0,m=(a=(n=this.hass)==null?void 0:n.states[((r=this._config)==null?void 0:r.entity)||""])==null?void 0:a.attributes.friendly_name,f=c||(typeof m=="string"?m:this.text.unknown),v=this.label("geofence");return d`
      <div class="header-wrap" data-map-host ${Yt(this.watchSize)}>
        ${this.watermark()}
        <div class="header">
          <svg class="ring" viewBox="0 0 36 36" aria-label="${l}%">
            <circle class="track" cx="18" cy="18" r="15.5"></circle>
            <circle
              class="value"
              cx="18"
              cy="18"
              r="15.5"
              pathLength="100"
              stroke-dasharray="${h} 100"
            ></circle>
            <text x="18" y="20">${l}</text>
          </svg>
          <div>
            <p class="name">${f}</p>
            ${v?d`<p class="sub">${v}</p>`:u}
            <span class="pill">${Ye(this.text,g)}</span>
          </div>
        </div>
      </div>
    `}mapEnabled(){var t;return((t=this._config)==null?void 0:t.show_map)!==!1}headerMapReady(){if(!this.mapEnabled())return!1;const t=this.carPosition(),{width:i,height:s}=this._headerBox;return!!(t&&i>=32&&s>=32)}shouldLoadMapChunk(){var t;return this._headerVisible?this._view==="drive"&&(((t=this._detail)==null?void 0:t.route.length)??0)>0?!0:this.headerMapReady():!1}loadMapModule(){return this.mapModule??(this.mapModule=import("./leaflet-DlpW1new.js?v=0.1.12").catch(t=>{throw this.mapModule=void 0,t})),this.mapModule}carPosition(){const t=this.readings.get("location");return pi(t?.attributes.latitude,t?.attributes.longitude)}watermark(){var t,i;if(!this._headerVisible||!this.headerMapReady())return u;const s=this.carPosition();if(!s)return u;const{width:r,height:n}=this._headerBox,a=mi(s.lat,s.lon,r,n),o=!!((i=(t=this.hass)==null?void 0:t.themes)!=null&&i.darkMode);return d`
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
    `}tab(t,i){return d`
      <button
        role="tab"
        aria-selected=${this._view===t?"true":"false"}
        @click=${()=>this.open(t)}
      >
        ${i}
      </button>
    `}open(t){this._error="",this._view=t,t!=="drive"&&(this._driveId=void 0,this._detail=void 0)}body(){return this._view==="status"?this.status():this._view==="drives"?this.drives():this._view==="drive"?this.drive():this._view==="charges"?this.charges():this._view==="charts"?this.charts():this.stats()}metric(t,i,s){return d`<div class="metric">
      ${s?d`<ha-icon icon=${s}></ha-icon>`:u}
      <div><span>${t}</span><strong>${i}</strong></div>
    </div>`}quantity(t,i,s){const r=this.numeric(t);return r==null?"\u2014":`${_(r,i,this.cardLang)} ${s}`}status(){return d`
      <div class="grid">
        ${this.metric(this.text.range,this.quantity("rated_range",0,"km"),"mdi:map-marker-distance")}
        ${this.metric(this.text.speed,this.quantity("speed",0,"km/h"))}
        ${this.metric(this.text.power,this.quantity("power",1,"kW"))}
        ${this.metric(this.text.inside,this.quantity("inside_temp",1,"\xB0C"))}
        ${this.metric(this.text.outside,this.quantity("outside_temp",1,"\xB0C"))}
        ${this.metric(this.text.charger,this.quantity("charger_power",1,"kW"))}
        ${this.metric(this.text.added,this.quantity("energy_added",1,"kWh"))}
        ${this.metric(this.text.odometer,this.quantity("odometer",0,"km"))}
        ${this.metric(this.text.limit,this.quantity("charge_limit",0,"%"))}
      </div>
    `}drives(){const t=this._drives;return d`
      ${this.listToolbar(t)}
      <ul class="list" data-slots="3">
        ${(t?.data||[]).map(i=>this.historyRow(Xe(i,this.dates),()=>this.openDrive(i.id)))}
      </ul>
      ${t&&t.data.length===0?d`<p class="message">${this.text.emptyDrives}</p>`:u}
    `}drive(){const t=this._detail,i=_t(t?.energy_used_kwh,t?.distance_km);return d`
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
            <div class="grid">
              ${this.metric(this.text.distance,this.km(t.distance_km))}
              ${this.metric(this.text.duration,J(t.duration_s))}
              ${this.metric(this.text.energy,this.kwh(t.energy_used_kwh))}
              ${this.metric(this.text.efficiency,i==null?"\u2014":`${_(i,0,this.cardLang)} Wh/km`)}
            </div>
            <p class="message">${this.text.map}</p>
            ${t.route.length?d`<div class="map"></div>`:d`<p class="message">${this.text.noRoute}</p>`}
            ${this.chart(this.text.speedChart,t.series,"speed_kmh","km/h")}
            ${this.chart(this.text.elevationChart,t.series,"elevation_m","m")}
            ${this.chart(this.text.batteryChart,t.series,"battery_level","%")}
          `:u}
    `}charges(){const t=this._charges;return d`
      ${this.listToolbar(t)}
      <ul class="list" data-slots="4">
        ${(t?.data||[]).map(i=>this.historyRow(ei(i,this.dates)))}
      </ul>
      ${t&&t.data.length===0?d`<p class="message">${this.text.emptyCharges}</p>`:u}
    `}stats(){const t=this._stats,i=_t(t?.energy_used_kwh,t?.distance_km);return d`
      ${this.periodBar()}
      ${t?d`
            <div class="grid">
              ${this.metric(this.text.distance,this.km(t.distance_km))}
              ${this.metric(this.text.duration,J(t.drive_duration_s))}
              ${this.metric(this.text.energy,this.kwh(t.energy_used_kwh))}
              ${this.metric(this.text.efficiency,i==null?"\u2014":`${_(i,0,this.cardLang)} Wh/km`)}
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
    `}charts(){const t=this.flags,i=this._series,s=i?.buckets??[],r=s.length?this.selectedBucketIndex(s):-1,n=t.chart_consumption||t.chart_distance||t.chart_energy,a=t.battery_health||t.charging_split||t.vampire_drain||t.consumption_vs_temp;return d`
      ${this.periodBar()}
      ${n&&i&&s.length===0?d`<p class="message">${this.text.emptySeries}</p>`:u}
      ${n&&s.length?d`
            <div class="series-list">
              ${t.chart_consumption?this.seriesFigure("consumption","line",this.text.consumptionChart,"Wh/km",o=>b(o.wh_per_km),r):u}
              ${t.chart_distance?this.seriesFigure("distance","bar",this.text.distance,"km",o=>b(o.distance_km),r):u}
              ${t.chart_energy?this.seriesFigure("energy","bar",this.text.chargedChart,"kWh",o=>b(o.energy_charged_kwh),r):u}
            </div>
          `:u}
      ${t.totals&&r>=0?this.bucketTotals(s[r]):u}
      ${a?d`
            <div class="series-extra">
              ${t.battery_health&&r>=0?this.seriesFigure("health","line",this.text.batteryHealth,"km",o=>b(o.range_at_100_km),r,!0):u}
              ${t.charging_split&&r>=0?this.acDcFigure(s,r):u}
              ${t.vampire_drain&&r>=0?this.seriesFigure("idle","bar",this.text.idleUse,"km/j",o=>b(o.idle_range_loss_km_per_day),r,!0):u}
              ${t.consumption_vs_temp?this.tempFigure():u}
            </div>
          `:u}
    `}selectedBucketIndex(t){return this._bucketIndex!=null&&this._bucketIndex>=0&&this._bucketIndex<t.length?this._bucketIndex:hi(t.map(i=>i.start),this._period)}selectBucket(t){this._bucketIndex=t}bucketHeading(t){return ae(t.start,this._period)?this._period==="week"?this.text.thisWeek:this._period==="month"?this.text.thisMonth:this.text.thisYear:ft(t.start,this._period,this.dates)}bucketTotals(t){const i=b(t.energy_used_kwh);return d`
      <section class="totals" aria-live="polite">
        <h3 class="totals-label">${this.bucketHeading(t)}</h3>
        <div class="totals-row">
          <div>
            <span>${this.text.distance}</span>
            <strong>${this.km(t.distance_km)}</strong>
          </div>
          <div>
            <span>${this.text.duration}</span>
            <strong>${J(t.drive_duration_s)}</strong>
          </div>
          <div>
            <span>${this.text.chargedChart}</span>
            <strong>${this.kwh(t.energy_charged_kwh)}</strong>
            ${i==null?u:d`<span class="totals-sub">${this.text.consumed} ${this.kwh(i)}</span>`}
          </div>
        </div>
      </section>
    `}seriesFigure(t,i,s,r,n,a,o=!1){var l;const h=((l=this._series)==null?void 0:l.buckets)??[],g=r==="Wh/km"?0:1,c=h.map(k=>{const H=n(k),z=ft(k.start,this._period,this.dates),O=H==null?"\u2014":`${_(H,g,this.cardLang)} ${r}`;return{label:z,value:H,title:`${z} \xB7 ${O}`}}),m=o?c[a]:c[c.length-1],f=o?this.bucketHeading(h[a]):this.text.latest,v=m?.value==null?"\u2014":`${_(m.value,g,this.cardLang)} ${r}`,x=`${s}. ${f} ${v}`;return d`
      <figure class=${o?"series-card compact":"series-card"}>
        <figcaption>
          <span class="series-title">${s}</span>
          <span class="series-value">${f} ${v}</span>
        </figcaption>
        ${this.drawSeries(t,c,i,x,a,o)}
      </figure>
    `}acDcFigure(t,i){const s=t[i],r=b(s?.dc_share_pct),n=b(s?.charge_cost),a=b(s?.cost_per_km),o=t.map(h=>{const g=ft(h.start,this._period,this.dates),c=b(h.ac_energy_kwh),m=b(h.dc_energy_kwh),f=c==null?"\u2014":`${_(c,1,this.cardLang)} kWh`,v=m==null?"\u2014":`${_(m,1,this.cardLang)} kWh`;return{label:g,value:c,stack:m,title:`${g} \xB7 AC ${f} \xB7 DC ${v}`}}),l=`${this.text.acDc}. ${this.bucketHeading(s)}`;return d`
      <figure class="series-card compact">
        <figcaption>
          <span class="series-title">${this.text.acDc}</span>
        </figcaption>
        <p class="series-note">
          ${r==null?u:d`${_(r,0,this.cardLang)} % ${this.text.fastShare}`}
          ${n==null?u:d`${r==null?"":" \xB7 "}${this.text.cost} ${_(n,2,this.cardLang)}`}
          ${a==null?u:d`<span class="totals-sub">${_(a,2,this.cardLang)} ${this.text.perKm}</span>`}
        </p>
        <p class="legend">
          <span><i class="swatch ac" aria-hidden="true"></i>AC</span>
          <span><i class="swatch dc" aria-hidden="true"></i>DC</span>
        </p>
        ${this.drawSeries("acdc",o,"stack",l,i,!0)}
      </figure>
    `}tempFigure(){const t=(this._tempBins??[]).map(i=>{const s=i.temp_c_bucket,r=`${_(s,0,this.cardLang)}\u2013${_(s+5,0,this.cardLang)}\xB0`,n=b(i.wh_per_km),a=b(i.distance_km),o=n==null?"\u2014":`${_(n,0,this.cardLang)} Wh/km`,l=a==null?"":` \xB7 ${_(a,0,this.cardLang)} km`;return{label:r,value:n,title:`${r} \xB7 ${o}${l}`}});return d`
      <figure class="series-card compact">
        <figcaption>
          <span class="series-title">${this.text.tempUse}</span>
        </figcaption>
        ${t.length?this.drawSeries("temp",t,"bar",this.text.tempUse,-1,!0,!1):d`<p class="message">${this.text.emptySeries}</p>`}
      </figure>
    `}drawSeries(t,i,s,r,n,a,o=!0){const l=h=>_(h,h>=10||h===0?0:1,this.cardLang);return d`
      <div class="plot" data-plot=${t} ${Yt(this.watchSize)}>
        ${ci(i,s,r,l,{width:this._plotWidths[t],compact:a,selected:n,onSelect:o?h=>this.selectBucket(h):void 0})}
      </div>
    `}chart(t,i,s,r){const n=di(i,s);if(n.length<2)return u;const a=n[n.length-1];return d`
      <div class="chart-block">
        <span class="muted">${t} · ${_(a,0,this.cardLang)} ${r}</span>
        ${ui(n)}
      </div>
    `}listToolbar(t){const i=t?.page??this._page,s=t&&t.per_page>0?Math.ceil(t.total/t.per_page):1;return d`
      <div class="toolbar list-toolbar">
        <div class="toolbar-actions">
          ${this.iconButton("mdi:chevron-left",this.text.previous,!t||i<=1,()=>this.setPage(i-1))}
          ${this.iconButton("mdi:chevron-right",this.text.next,!t||i>=s,()=>this.setPage(i+1))}
          ${this.iconButton("mdi:refresh",this.text.refresh,!1,()=>this.reload())}
        </div>
        <span class="page-indicator">${this.pageIndicator(t)}</span>
      </div>
    `}pageIndicator(t){if(!t||t.total<=0||t.per_page<=0||t.total<=t.per_page)return`${this.text.page} ${t?.page??this._page}`;const i=(t.page-1)*t.per_page+1,s=Math.min(t.page*t.per_page,t.total);return`${i}\u2013${s}`}iconButton(t,i,s,r){return d`
      <ha-icon-button
        .label=${i}
        aria-label=${i}
        title=${i}
        ?disabled=${s}
        @click=${()=>{s||r()}}
      >
        <ha-icon icon=${t}></ha-icon>
      </ha-icon-button>
    `}historyRow(t,i){const s=d`<span class="entry-line"
        ><time class="entry-when" datetime=${t.datetime} title=${t.when}>${t.when}</time
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
      >`;return i?d`
        <li>
          <button type="button" class="entry" @click=${i}>${s}</button>
        </li>
      `:d`<li><div class="entry">${s}</div></li>`}km(t){return t==null?"\u2014":`${_(t,1,this.cardLang)} km`}kwh(t){return t==null?"\u2014":`${_(t,1,this.cardLang)} kWh`}when(t){return Qe(t,this.dates)}openDrive(t){this._driveId=t,this._detail=void 0,this._view="drive"}setPeriod(t){if(this._period=t,this._bucketIndex=null,this._view==="charts"){this.loadSeries();return}this._stats=void 0,this.loadStats()}setPage(t){this._page=t,this._view==="drives"?(this._drives=void 0,this.loadDrives()):this._view==="charges"&&(this._charges=void 0,this.loadCharges())}reload(){this.clearHistory(),this.ensureView()}clearHistory(){this._drives=void 0,this._charges=void 0,this._detail=void 0,this._stats=void 0,this._series=void 0,this._tempBins=void 0,this._seriesPeriod=void 0,this._bucketIndex=null,this._page=1,this._error=""}async ensureView(){this._view==="drives"&&this.flags.drives&&!this._drives?await this.loadDrives():this._view==="charges"&&this.flags.charges&&!this._charges?await this.loadCharges():this._view==="stats"&&!this._stats?await this.loadStats():this._view==="charts"&&xt(this.flags)&&this.seriesStale()?await this.loadSeries():this._view==="drive"&&this.flags.drives&&this._driveId!=null&&!this._detail&&await this.loadDrive()}async loadDrives(){await this.load("drives",async()=>{const t=await this.call("get_drives",{page:this._page,per_page:ue});if(!de(t))throw new Error(this.text.failed);this._drives=t})}async loadCharges(){await this.load("charges",async()=>{const t=await this.call("get_charges",{page:this._page,per_page:ue});if(!de(t))throw new Error(this.text.failed);this._charges=t})}async loadDrive(){const t=this._driveId;t!=null&&await this.load("drive",async()=>{const i=await this.call("get_drive",{drive_id:t,max_points:300});if(!_i(i))throw new Error(this.text.failed);this._detail=i})}seriesStale(){const t=this.flags;return!!(this._seriesPeriod!==this._period||ce(t)&&!this._series||t.consumption_vs_temp&&!this._tempBins)}async loadSeries(){const t=this.flags;if(!xt(t))return;const i=this._period,s=ce(t),r=t.consumption_vs_temp;s&&(this._series=void 0),r&&(this._tempBins=void 0),await this.load("charts",async()=>{const n=ni[i];if(s){const a=await this.call("get_stats_series",{period:i,count:n});if(!$i(a))throw new Error(this.text.failed);this._series=a}if(r)try{this._tempBins=yi(await this.call("get_consumption_by_temp",{period:i,count:n}))}catch{this._tempBins=[]}this._seriesPeriod=i})}async loadStats(){const t=this._period;await this.load("stats",async()=>{const i=ii(t),s=await this.call("get_stats",i);if(!fi(s))throw new Error(this.text.failed);this._stats=s})}async load(t,i){if(!this.deviceId){this._error=this.text.missingDevice;return}this._loading=!0,this._error="";try{if(await i(),this._view!==t&&t!=="drive")return}catch(s){this._error=ri(s,this.text.failed)}finally{this._loading=!1}}async call(t,i){if(!this.hass||!this.deviceId)throw new Error(this.text.missingDevice);const s=await this.hass.callService("tesla_logger",t,{device_id:this.deviceId,...i},void 0,!1,!0),r=T(s);return r&&"response"in r?r.response:s}syncMap(){var t,i,s;const r=this.renderRoot.querySelector(".map"),n=((t=this._detail)==null?void 0:t.route)??[];if(!r||n.length===0){this.destroyMap();return}if(!this._headerVisible)return;const a=++this.mapToken,o=!!((s=(i=this.hass)==null?void 0:i.themes)!=null&&s.darkMode),l=getComputedStyle(this).getPropertyValue("--primary-color").trim()||"#03a9f4";this.loadMapModule().then(h=>{a!==this.mapToken||!this.isConnected||this.renderRoot.querySelector(".map")!==r||(this.routeMap=h.mountRoute(this.routeMap,r,n,o,l))}).catch(()=>{})}destroyMap(){this.mapToken+=1;const t=this.routeMap;this.routeMap=void 0,t?.destroy()}};bt.properties={hass:{attribute:!1},_config:{state:!0},_view:{state:!0},_drives:{state:!0},_charges:{state:!0},_detail:{state:!0},_stats:{state:!0},_series:{state:!0},_tempBins:{state:!0},_bucketIndex:{state:!0},_period:{state:!0},_page:{state:!0},_loading:{state:!0},_error:{state:!0},_plotWidths:{state:!0},_headerBox:{state:!0},_headerVisible:{state:!0}},bt.styles=be`
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
        font-size: 8px;
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
        height: 56px;
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
    `;let pe=bt;function xi(e,t){const i=e.split(".").pop()??e;return i==="entity"?t.entity:i==="default_view"?t.defaultView:i==="show"?t.showBlocks:i==="show_map"?t.showMap:i in t.showFields?t.showFields[i]:e}const bi=[{name:"entity",required:!0,selector:{entity:{integration:"tesla_logger"}}},{name:"show_map",selector:{boolean:{}}},{name:"default_view",selector:{select:{options:[{value:"status",label:"Status"},{value:"drives",label:"Drives"},{value:"charges",label:"Charges"},{value:"stats",label:"Stats"},{value:"charts",label:"Charts"}]}}},{name:"show",type:"grid",column_min_width:"200px",schema:he.map(e=>({name:e,selector:{boolean:{}}}))}],ge=class extends R{setConfig(t){this._config={...t,show_map:t.show_map!==!1,show:yt(t)}}render(){var t;if(!this.hass||!this._config)return u;const i=Jt(at(((t=this.hass.locale)==null?void 0:t.language)||this.hass.language));return d`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${bi}
        .computeLabel=${s=>xi(s.name,i)}
        @value-changed=${s=>{const r={...this._config,...s.detail.value};this._config={...r,show:yt(r)},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
      ></ha-form>
    `}};ge.properties={hass:{attribute:!1},_config:{state:!0}};let me=ge;customElements.get("tesla-logger-card-impl")||customElements.define("tesla-logger-card-impl",pe),customElements.get("tesla-logger-card-editor-impl")||customElements.define("tesla-logger-card-editor-impl",me);export{pe as TeslaLoggerCard,me as TeslaLoggerCardEditor};
