/* Tesla Logger Lovelace card. Built from frontend/. Do not edit. */
const et=globalThis,ct=et.ShadowRoot&&(et.ShadyCSS===void 0||et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),Ct=new WeakMap;let St=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ct&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Ct.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Ct.set(t,e))}return e}toString(){return this.cssText}};const ye=e=>new St(typeof e=="string"?e:e+"",void 0,dt),xe=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((i,r,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1],e[0]);return new St(s,e,dt)},be=(e,t)=>{if(ct)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const i=document.createElement("style"),r=et.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,e.appendChild(i)}},Et=ct?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return ye(s)})(e):e;const{is:we,defineProperty:ke,getOwnPropertyDescriptor:Ae,getOwnPropertyNames:Ce,getOwnPropertySymbols:Se,getPrototypeOf:Ee}=Object,F=globalThis,Mt=F.trustedTypes,Me=Mt?Mt.emptyScript:"",Dt=F.reactiveElementPolyfillSupport,j=(e,t)=>e,ut={toAttribute(e,t){switch(t){case Boolean:e=e?Me:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Pt=(e,t)=>!we(e,t),Tt={attribute:!0,type:String,converter:ut,reflect:!1,useDefault:!1,hasChanged:Pt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),F.litPropertyMetadata??(F.litPropertyMetadata=new WeakMap);let L=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Tt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&ke(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:r}=Ae(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){const a=i?.call(this);r?.call(this,n),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Tt}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;const e=Ee(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){const t=this.properties,s=[...Ce(t),...Se(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(Et(i))}else e!==void 0&&t.push(Et(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return be(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const n=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:ut).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var s,i;const r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const a=r.getPropertyOptions(n),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:ut;this._$Em=n;const l=o.fromAttribute(t,a.type);this[n]=l??((i=this._$Ej)==null?void 0:i.get(n))??l,this._$Em=null}}requestUpdate(e,t,s,i=!1,r){var n;if(e!==void 0){const a=this.constructor;if(i===!1&&(r=this[e]),s??(s=a.getPropertyOptions(e)),!((s.hasChanged??Pt)(r,t)||s.useDefault&&s.reflect&&r===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(a._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i){const{wrapped:a}=n,o=this[r];a!==!0||this._$AL.has(r)||o===void 0||this.C(r,void 0,n,o)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(s)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[j("elementProperties")]=new Map,L[j("finalized")]=new Map,Dt?.({ReactiveElement:L}),(F.reactiveElementVersions??(F.reactiveElementVersions=[])).push("2.1.2");const st=globalThis,Nt=e=>e,it=st.trustedTypes,zt=it?it.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ft="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,Lt="?"+S,De=`<${Lt}>`,E=document,W=()=>E.createComment(""),V=e=>e===null||typeof e!="object"&&typeof e!="function",pt=Array.isArray,Pe=e=>pt(e)||typeof e?.[Symbol.iterator]=="function",gt=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,It=/-->/g,Ut=/>/g,M=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rt=/'/g,Ht=/"/g,Ot=/^(?:script|style|textarea|title)$/i,Bt=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),u=Bt(1),y=Bt(2),I=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),jt=new WeakMap,D=E.createTreeWalker(E,129);function Wt(e,t){if(!pt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return zt!==void 0?zt.createHTML(t):t}const Te=(e,t)=>{const s=e.length-1,i=[];let r,n=t===2?"<svg>":t===3?"<math>":"",a=q;for(let o=0;o<s;o++){const l=e[o];let h,g,d=-1,m=0;for(;m<l.length&&(a.lastIndex=m,g=a.exec(l),g!==null);)m=a.lastIndex,a===q?g[1]==="!--"?a=It:g[1]!==void 0?a=Ut:g[2]!==void 0?(Ot.test(g[2])&&(r=RegExp("</"+g[2],"g")),a=M):g[3]!==void 0&&(a=M):a===M?g[0]===">"?(a=r??q,d=-1):g[1]===void 0?d=-2:(d=a.lastIndex-g[2].length,h=g[1],a=g[3]===void 0?M:g[3]==='"'?Ht:Rt):a===Ht||a===Rt?a=M:a===It||a===Ut?a=q:(a=M,r=void 0);const f=a===M&&e[o+1].startsWith("/>")?" ":"";n+=a===q?l+De:d>=0?(i.push(h),l.slice(0,d)+Ft+l.slice(d)+S+f):l+S+(d===-2?o:f)}return[Wt(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class X{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let n=0,a=0;const o=t.length-1,l=this.parts,[h,g]=Te(t,s);if(this.el=X.createElement(h,i),D.currentNode=this.el.content,s===2||s===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=D.nextNode())!==null&&l.length<o;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Ft)){const m=g[a++],f=r.getAttribute(d).split(S),v=/([.?@])?(.*)/.exec(m);l.push({type:1,index:n,name:v[2],strings:f,ctor:v[1]==="."?ze:v[1]==="?"?Fe:v[1]==="@"?Le:rt}),r.removeAttribute(d)}else d.startsWith(S)&&(l.push({type:6,index:n}),r.removeAttribute(d));if(Ot.test(r.tagName)){const d=r.textContent.split(S),m=d.length-1;if(m>0){r.textContent=it?it.emptyScript:"";for(let f=0;f<m;f++)r.append(d[f],W()),D.nextNode(),l.push({type:2,index:++n});r.append(d[m],W())}}}else if(r.nodeType===8)if(r.data===Lt)l.push({type:2,index:n});else{let d=-1;for(;(d=r.data.indexOf(S,d+1))!==-1;)l.push({type:7,index:n}),d+=S.length-1}n++}}static createElement(t,s){const i=E.createElement("template");return i.innerHTML=t,i}}function U(e,t,s=e,i){var r,n;if(t===I)return t;let a=i!==void 0?(r=s._$Co)==null?void 0:r[i]:s._$Cl;const o=V(t)?void 0:t._$litDirective$;return a?.constructor!==o&&((n=a?._$AO)==null||n.call(a,!1),o===void 0?a=void 0:(a=new o(e),a._$AT(e,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=a:s._$Cl=a),a!==void 0&&(t=U(e,a._$AS(e,t.values),a,i)),t}class Ne{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,r=(t?.creationScope??E).importNode(s,!0);D.currentNode=r;let n=D.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new tt(n,n.nextSibling,this,t):l.type===1?h=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(h=new Ie(n,this,t)),this._$AV.push(h),l=i[++o]}a!==l?.index&&(n=D.nextNode(),a++)}return D.currentNode=E,r}p(t){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class tt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,s,i,r){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=U(this,t,s),V(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pe(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){var s;const{values:i,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=X.createElement(Wt(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(i);else{const a=new Ne(n,this),o=a.u(this.options);a.p(i),this.T(o),this._$AH=a}}_$AC(t){let s=jt.get(t.strings);return s===void 0&&jt.set(t.strings,s=new X(t)),s}k(t){pt(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const n of t)r===s.length?s.push(i=new tt(this.O(W()),this.O(W()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(t=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);t!==this._$AB;){const r=Nt(t).nextSibling;Nt(t).remove(),t=r}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}}class rt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,r,n){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=s,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=c}_$AI(t,s=this,i,r){const n=this.strings;let a=!1;if(n===void 0)t=U(this,t,s,0),a=!V(t)||t!==this._$AH&&t!==I,a&&(this._$AH=t);else{const o=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=U(this,o[i+l],s,l),h===I&&(h=this._$AH[l]),a||(a=!V(h)||h!==this._$AH[l]),h===c?t=c:t!==c&&(t+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!r&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ze extends rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class Fe extends rt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class Le extends rt{constructor(t,s,i,r,n){super(t,s,i,r,n),this.type=5}_$AI(t,s=this){if((t=U(this,t,s,0)??c)===I)return;const i=this._$AH,r=t===c&&i!==c||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==c&&(i===c||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,t):this._$AH.handleEvent(t)}}class Ie{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}}const Vt=st.litHtmlPolyfillSupport;Vt?.(X,tt),(st.litHtmlVersions??(st.litHtmlVersions=[])).push("3.3.3");const Ue=(e,t,s)=>{const i=s?.renderBefore??t;let r=i._$litPart$;if(r===void 0){const n=s?.renderBefore??null;i._$litPart$=r=new tt(t.insertBefore(W(),n),n,void 0,s??{})}return r._$AI(e),r};const G=globalThis;let R=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ue(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return I}};var qt;R._$litElement$=!0,R.finalized=!0,(qt=G.litElementHydrateSupport)==null||qt.call(G,{LitElement:R});const Gt=G.litElementPolyfillSupport;Gt?.({LitElement:R}),(G.litElementVersions??(G.litElementVersions=[])).push("4.2.2");const Re=e=>e.strings===void 0;const He={CHILD:2},Oe=e=>(...t)=>({_$litDirective$:e,values:t});class Be{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}const Z=(e,t)=>{var s;const i=e._$AN;if(i===void 0)return!1;for(const r of i)(s=r._$AO)==null||s.call(r,t,!1),Z(r,t);return!0},nt=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},Zt=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Ve(t)}};function je(e){this._$AN!==void 0?(nt(this),this._$AM=e,Zt(this)):this._$AM=e}function We(e,t=!1,s=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let n=s;n<i.length;n++)Z(i[n],!1),nt(i[n]);else i!=null&&(Z(i,!1),nt(i));else Z(this,e)}const Ve=e=>{e.type==He.CHILD&&(e._$AP??(e._$AP=We),e._$AQ??(e._$AQ=je))};class qe extends Be{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),Zt(this),this.isConnected=t._$AU}_$AO(t,s=!0){var i,r;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),s&&(Z(this,t),nt(this))}setValue(t){if(Re(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const mt=new WeakMap,Yt=Oe(class extends qe{render(e){return c}update(e,[t]){var s;const i=t!==this.G;return i&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=(s=e.options)==null?void 0:s.host,this.rt(this.ct=e.element)),c}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=mt.get(t);s===void 0&&(s=new WeakMap,mt.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=mt.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Kt={status:"Status",drives:"Drives",charges:"Charges",stats:"Stats",charts:"Charts",consumptionChart:"Consumption",chargedChart:"Energy charged",emptySeries:"No data for this period.",latest:"Latest",period:"Period",thisWeek:"This week",thisMonth:"This month",thisYear:"This year",consumed:"consumed",batteryHealth:"Battery health",rangeAtFull:"Range at 100%",acDc:"AC/DC charging",fastShare:"fast charging",cost:"Cost",perKm:"/km",idleUse:"Parked consumption",tempUse:"Consumption vs temperature",range:"Range",speed:"Speed",power:"Power",inside:"Inside",outside:"Outside",charger:"Charger",added:"Added",odometer:"Odometer",limit:"Limit",location:"Location",unknown:"Unknown",loading:"Loading\u2026",emptyDrives:"No drives in this page.",emptyCharges:"No charges in this page.",back:"Back",refresh:"Refresh",week:"Week",month:"Month",year:"Year",distance:"Distance",duration:"Duration",energy:"Energy",efficiency:"Efficiency",drivesCount:"Drives",chargesCount:"Charges",energyAdded:"Energy added",map:"Route",speedChart:"Speed",elevationChart:"Elevation",batteryChart:"Battery",noRoute:"This drive has no route points.",pick:"Select a Tesla Logger entity in the card editor.",missingDevice:"This entity is not linked to a Tesla Logger device.",failed:"Could not load history.",previous:"Previous",next:"Next",page:"Page",online:"Online",asleep:"Asleep",offline:"Offline",driving:"Driving",charging:"Charging",updating:"Updating",entity:"Entity",defaultView:"Default view",showMap:"Map",showBlocks:"Blocks",showFields:{status:"Status",drives:"Drives",charges:"Charges",chart_consumption:"Consumption (Wh/km)",chart_distance:"Distance",chart_energy:"Energy charged",totals:"Totals",battery_health:"Battery health",charging_split:"AC/DC charging and cost",vampire_drain:"Parked consumption",consumption_vs_temp:"Consumption vs temperature"}},Ge={...Kt,status:"\xC9tat",drives:"Trajets",charges:"Charges",stats:"Stats",charts:"Graphiques",consumptionChart:"Consommation",chargedChart:"\xC9nergie charg\xE9e",emptySeries:"Aucune donn\xE9e sur cette p\xE9riode.",latest:"Dernier",period:"P\xE9riode",thisWeek:"Cette semaine",thisMonth:"Ce mois",thisYear:"Cette ann\xE9e",consumed:"consomm\xE9",batteryHealth:"Sant\xE9 batterie",rangeAtFull:"Autonomie \xE0 100 %",acDc:"Charges AC/DC",fastShare:"recharge rapide",cost:"Co\xFBt",perKm:"/km",idleUse:"Consommation \xE0 l'arr\xEAt",tempUse:"Consommation vs temp\xE9rature",range:"Autonomie",speed:"Vitesse",power:"Puissance",inside:"Int\xE9rieur",outside:"Ext\xE9rieur",charger:"Chargeur",added:"Ajout\xE9e",odometer:"Odom\xE8tre",limit:"Limite",location:"Lieu",unknown:"Inconnu",loading:"Chargement\u2026",emptyDrives:"Aucun trajet sur cette page.",emptyCharges:"Aucune charge sur cette page.",back:"Retour",refresh:"Actualiser",week:"Semaine",month:"Mois",year:"Ann\xE9e",distance:"Distance",duration:"Dur\xE9e",energy:"\xC9nergie",efficiency:"Efficacit\xE9",drivesCount:"Trajets",chargesCount:"Charges",energyAdded:"\xC9nergie ajout\xE9e",map:"Trac\xE9",speedChart:"Vitesse",elevationChart:"Altitude",batteryChart:"Batterie",noRoute:"Ce trajet n'a pas de trac\xE9.",pick:"Choisissez une entit\xE9 Tesla Logger dans l'\xE9diteur.",missingDevice:"Cette entit\xE9 n'est pas li\xE9e \xE0 un appareil Tesla Logger.",failed:"Impossible de charger l'historique.",previous:"Pr\xE9c\xE9dent",next:"Suivant",page:"Page",online:"En ligne",asleep:"Endormie",offline:"Hors ligne",driving:"En route",charging:"En charge",updating:"Mise \xE0 jour",entity:"Entit\xE9",defaultView:"Vue par d\xE9faut",showMap:"Carte",showBlocks:"Blocs",showFields:{status:"\xC9tat",drives:"Trajets",charges:"Charges",chart_consumption:"Consommation (Wh/km)",chart_distance:"Distance",chart_energy:"\xC9nergie charg\xE9e",totals:"Totaux",battery_health:"Sant\xE9 batterie",charging_split:"Charges AC/DC et co\xFBt",vampire_drain:"Consommation \xE0 l'arr\xEAt",consumption_vs_temp:"Consommation vs temp\xE9rature"}};function at(e){return(e||"").toLowerCase().startsWith("fr")?"fr":"en"}function Jt(e){return e==="fr"?Ge:Kt}function Ze(e,t){return e[t]||t||e.unknown}function Y(e){return e&&typeof e=="object"?{language:e.language||"en",hour12:e.hour12,timeZone:e.timeZone}:{language:e||"en"}}function Ye(e){var t,s,i,r;const n=((t=e?.locale)==null?void 0:t.language)||e?.language||"en",a=(s=e?.locale)==null?void 0:s.time_format;let o;a==="12"?o=!0:a==="24"&&(o=!1);const l=(i=e?.locale)==null?void 0:i.time_zone,h=(r=e?.config)==null?void 0:r.time_zone;return{language:n,hour12:o,timeZone:l==="server"&&typeof h=="string"&&h!==""&&h!=="local"&&h!=="server"?h:void 0}}function _(e,t,s){return e.toLocaleString(s==="fr"?"fr-FR":"en-US",{minimumFractionDigits:t,maximumFractionDigits:t})}const Ke=/^<.*>$/;function Qt(e){if(typeof e!="string")return null;const t=e.trim();if(!t||Ke.test(t))return null;const s=t.toLowerCase();return s==="none"||s==="null"?null:t}function Xt(e){return e.replace(/[\u00a0\u202f]/g," ").replace(/\s+/g," ").trim()}function vt(e,t){const s={...t};return e.timeZone&&(s.timeZone=e.timeZone),s}function ot(e,t){return Xt(new Intl.DateTimeFormat(t.language||"en",vt(t,{weekday:"short",day:"numeric",month:"short"})).format(e))}function K(e,t){const s=vt(t,{hour:t.hour12?"numeric":"2-digit",minute:"2-digit"});return typeof t.hour12=="boolean"&&(s.hour12=t.hour12),Xt(new Intl.DateTimeFormat(t.language||"en",s).format(e))}function te(e,t){const s=new Intl.DateTimeFormat("en-US",vt(t,{year:"numeric",month:"2-digit",day:"2-digit"})).formatToParts(e),i=r=>{var n;return((n=s.find(a=>a.type===r))==null?void 0:n.value)??""};return`${i("year")}-${i("month")}-${i("day")}`}function Je(e,t){const s=new Date(e);if(Number.isNaN(s.getTime()))return e;const i=Y(t);return`${ot(s,i)}, ${K(s,i)}`}function J(e){if(e==null||Number.isNaN(e))return"\u2014";const t=Math.max(0,Math.round(e)),s=Math.floor(t/3600),i=Math.floor(t%3600/60);return s>0?`${s} h ${i} min`:`${i} min`}function ee(e){return e.map(t=>typeof t=="string"?t.trim():"").filter(t=>t.length>0)}function Q(e){return typeof e!="string"?null:e.trim()||null}function P(e){return typeof e=="number"&&Number.isFinite(e)?e:null}function se(e,t,s){const i=P(e),r=P(t);return i==null&&r==null?null:i!=null&&r!=null?`${_(i,0,s)} \u2192 ${_(r,0,s)} %`:`${_(i??r,0,s)} %`}function ie(e,t,s){const i=Y(s),r=new Date(e);if(Number.isNaN(r.getTime()))return e;const n=`${ot(r,i)}, ${K(r,i)}`;if(!t)return n;const a=new Date(t);if(Number.isNaN(a.getTime()))return n;if(te(r,i)!==te(a,i)){const o=`${ot(a,i)}, ${K(a,i)}`;return`${n} \u2013 ${o}`}return`${ot(r,i)}, ${K(r,i)}\u2013${K(a,i)}`}function re(e,t){const s=P(e);return s==null?null:`${_(s,1,t)} kWh`}function Qe(e,t){const s=Y(t),i=at(s.language),r=Q(e.start_address),n=Q(e.end_address),a=r&&n?`${r} \u2192 ${n}`:r||n,o=_t(e.energy_used_kwh,e.distance_km),l=se(e.start_battery_level,e.end_battery_level,i),h=ee([P(e.duration_s)==null?null:J(e.duration_s),o==null?null:`${_(o,0,i)} Wh/km`,l??re(e.energy_used_kwh,i)]),g=P(e.distance_km);return{datetime:e.start_at,when:ie(e.start_at,e.end_at,s),place:a,figure:g==null?null:`${_(g,1,i)} km`,detail:h.join(" \xB7 "),details:h}}function Xe(e){if(e.is_dc===!0)return"DC";if(e.is_dc===!1)return"AC";const t=Qt(e.charger_type);return t==="AC"||t==="DC"?t:null}function ts(e,t){const s=Y(t),i=at(s.language),r=Q(e.address)||Q(e.geofence)||Q(e.location),n=Qt(e.charger_type),a=n&&n!=="AC"&&n!=="DC"?n:null,o=P(e.max_power_kw),l=ee([P(e.duration_s)==null?null:J(e.duration_s),se(e.start_battery_level,e.end_battery_level,i),o==null?null:`${_(o,0,i)} kW`,Xe(e)]);return{datetime:e.start_at,when:ie(e.start_at,e.end_at,s),place:r||a,figure:re(e.energy_added_kwh,i),detail:l.join(" \xB7 "),details:l}}function _t(e,t){return e==null||t==null||t<=0?null:e*1e3/t}function ne(e,t=new Date){const s=new Date(t);if(e==="week"){const r=(s.getDay()+6)%7;s.setDate(s.getDate()-r)}else e==="month"?s.setDate(1):s.setMonth(0,1);s.setHours(0,0,0,0);const i=new Date(s);return e==="week"?i.setDate(i.getDate()+7):e==="month"?i.setMonth(i.getMonth()+1):i.setFullYear(i.getFullYear()+1),{start:s,end:i}}function ae(e,t,s=new Date){const i=new Date(e).getTime();if(Number.isNaN(i))return!1;const{start:r,end:n}=ne(t,s);return i>=r.getTime()&&i<n.getTime()}function es(e){const t=new Date;return{from:ne(e,t).start.toISOString(),to:t.toISOString()}}function ss(e){return typeof e=="string"?e:e instanceof Error||e&&typeof e=="object"&&"message"in e&&typeof e.message=="string"?e.message:""}function is(e,t){const s=ss(e);return!s||s.includes("tl_")?t:s.slice(0,180)}function T(e){return!e||typeof e!="object"?null:e}const rs={week:12,month:12,year:5},ns=480;function as(e,t=!1){const s=t?200:360,i=e!=null&&Number.isFinite(e)&&e>=64?e:s,r=i<ns;return{width:i,height:t?r?116:132:r?184:208,left:t?32:42,right:t?8:12,top:t?8:12,bottom:t?22:28}}function os(e){if(!Number.isFinite(e)||e<=0)return 1;const t=10**Math.floor(Math.log10(e)),s=e/t;return(s<=1?1:s<=2?2:s<=5?5:10)*t}function ls(e,t,s=new Date){let i=-1;return e.forEach((r,n)=>{ae(r,t,s)&&(i=n)}),i>=0?i:Math.max(0,e.length-1)}function ft(e,t,s){const i=new Date(e);if(Number.isNaN(i.getTime()))return e;const r=Y(s),n=r.language||"en",a=r.timeZone?{timeZone:r.timeZone}:{};return t==="year"?new Intl.DateTimeFormat(n,{year:"numeric",...a}).format(i):t==="month"?new Intl.DateTimeFormat(n,{month:"short",...a}).format(i).replace(/[\u00a0\u202f]/g," ").replace(/\.$/,"").trim():new Intl.DateTimeFormat(n,{day:"numeric",month:"short",...a}).format(i).replace(/[\u00a0\u202f]/g," ").replace(/,/g,"").replace(/\s+/g," ").trim()}function hs(e,t,s,i,r={}){const n=as(r.width,r.compact),a=e.map(p=>t==="stack"?Math.max(0,p.value??0)+Math.max(0,p.stack??0):p.value!=null&&Number.isFinite(p.value)&&p.value>0?p.value:0).filter(p=>p>0),o=os(a.length?Math.max(...a):0),l=n.width-n.left-n.right,h=n.height-n.top-n.bottom,g=e.length>0?l/e.length:l,d=p=>n.top+h-p/o*h,m=d(0),f=[o,o/2,0],v=e.map((p,$)=>{const C=n.left+g*$+g/2,A=p.value!=null&&Number.isFinite(p.value)?p.value:null,w=A==null?null:d(Math.max(0,A));return{...p,x:C,y:w,value:A}}),x=e.length>8?2:1,k=(p,$,C)=>{if(!r.onSelect)return y`<g><title>${$}</title>${C}</g>`;const A=r.selected===p;return y`
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
          `;if(t==="stack"){const _e=[{amount:Math.max(0,p.value??0),className:"bar ac"},{amount:Math.max(0,p.stack??0),className:"bar dc"}];let ht=0;const fe=_e.map(wt=>{const $e=d(ht);ht+=wt.amount;const kt=d(ht),At=Math.max(0,$e-kt);return At<=0?y``:y`
                <rect
                  class=${wt.className}
                  x=${A}
                  y=${kt.toFixed(1)}
                  width=${C.toFixed(1)}
                  height=${At.toFixed(1)}
                  rx="2"
                ></rect>
              `});return k($,p.title,y`${w}${fe}`)}const B=p.y??m,ve=Math.max(0,m-B);return k($,p.title,y`
              ${w}
              <rect
                class="bar"
                x=${A}
                y=${B.toFixed(1)}
                width=${C.toFixed(1)}
                height=${ve.toFixed(1)}
                rx="2"
              ></rect>
            `)}),z=[];let O=!1;if(t==="line")for(const p of v){if(p.y==null){O=!1;continue}z.push(`${O?"L":"M"}${p.x.toFixed(1)},${p.y.toFixed(1)}`),O=!0}const me=t==="line"?v.map((p,$)=>p.y==null?y``:k($,p.title,y`
              <circle class="hit" cx=${p.x.toFixed(1)} cy=${p.y.toFixed(1)} r="12"></circle>
              <circle class="dot" cx=${p.x.toFixed(1)} cy=${p.y.toFixed(1)} r="3.5"></circle>
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
      ${f.map(p=>{const $=d(p);return y`
          <line class="grid" x1=${n.left} y1=${$.toFixed(1)} x2=${n.width-n.right} y2=${$.toFixed(1)}></line>
          <text class="y-label" x=${n.left-4} y=${($+4).toFixed(1)} text-anchor="end">
            ${i(p)}
          </text>
        `})}
      ${H}
      ${z.length>1?y`<path class="line" d=${z.join(" ")}></path>`:y``}
      ${me}
      ${v.map((p,$)=>$%x===0||$===v.length-1?y`<text class="x-label" x=${p.x.toFixed(1)} y=${n.height-6} text-anchor="middle">${p.label}</text>`:y``)}
    </svg>
  `}function cs(e,t){const s=[];for(const i of e){const r=i[t];typeof r=="number"&&Number.isFinite(r)&&s.push(r)}return s}function ds(e,t=320,s=56){if(e.length<2)return y``;const i=Math.min(...e),r=Math.max(...e)-i||1,n=t/(e.length-1),a=e.map((o,l)=>{const h=l*n,g=s-4-(o-i)/r*(s-8);return`${h.toFixed(1)},${g.toFixed(1)}`}).join(" ");return y`
    <svg class="chart" viewBox="0 0 ${t} ${s}" preserveAspectRatio="none" aria-hidden="true">
      <polyline points=${a}></polyline>
    </svg>
  `}const oe=15,N=256,le=85.05112878;function us(e,t){return typeof e!="number"||typeof t!="number"||!Number.isFinite(e)||!Number.isFinite(t)||e<-90||e>90||t<-180||t>180?null:{lat:e,lon:t}}function ps(e,t,s=oe){const i=N*2**s,r=Math.min(le,Math.max(-le,e))*Math.PI/180,n=(t+180)/360*i,a=(1-Math.log(Math.tan(Math.PI/4+r/2))/Math.PI)/2*i;return{x:n,y:a}}function gs(e,t,s,i,r=oe){const n=ps(e,t,r),a=n.x-s/2,o=n.y-i/2,l=Math.floor(a/N),h=Math.floor((a+Math.max(s,1)-.001)/N),g=Math.floor(o/N),d=Math.floor((o+Math.max(i,1)-.001)/N),m=2**r,f=[];for(let v=l;v<=h;v+=1)for(let x=g;x<=d;x+=1){if(x<0||x>=m)continue;const k=(v%m+m)%m;f.push({x:k,y:x,left:Math.round((v*N-a)*10)/10,top:Math.round((x*N-o)*10)/10,url:`https://tile.openstreetmap.org/${r}/${k}/${x}.png`})}return{tiles:f,dot:{left:s/2,top:i/2}}}const $t={status:!0,drives:!0,charges:!0,chart_consumption:!0,chart_distance:!0,chart_energy:!0,totals:!0,battery_health:!0,charging_split:!0,vampire_drain:!0,consumption_vs_temp:!0},he=Object.keys($t);function yt(e){const t={...$t},s=e?.show;if(!s||typeof s!="object")return t;for(const i of he){const r=s[i];typeof r=="boolean"&&(t[i]=r)}return t}function xt(e){return e.chart_consumption||e.chart_distance||e.chart_energy||e.totals||e.battery_health||e.charging_split||e.vampire_drain||e.consumption_vs_temp}function ce(e){return e.chart_consumption||e.chart_distance||e.chart_energy||e.totals||e.battery_health||e.charging_split||e.vampire_drain}function lt(e){const t=[];return e.status&&t.push("status"),e.drives&&t.push("drives"),e.charges&&t.push("charges"),t.push("stats"),xt(e)&&t.push("charts"),t}function ms(e,t){return e==="drive"?t.drives?e:lt(t)[0]??"stats":e==="stats"||lt(t).includes(e)?e:lt(t)[0]??"stats"}function de(e){const t=T(e);return!!(t&&Array.isArray(t.data))}function vs(e){const t=T(e);return!!(t&&Array.isArray(t.route)&&Array.isArray(t.series))}function _s(e){const t=T(e);return!!(t&&typeof t.distance_km=="number")}function fs(e){const t=T(e);return!!(t&&Array.isArray(t.buckets))}function $s(e){const t=T(e);return(t&&Array.isArray(t.data)?t.data:[]).filter(s=>{const i=T(s);return!!(i&&typeof i.temp_c_bucket=="number")})}function b(e){return typeof e=="number"&&Number.isFinite(e)?e:null}const bt=class extends R{constructor(){super(...arguments),this._view="status",this._bucketIndex=null,this._period="month",this._page=1,this._loading=!1,this._error="",this._plotWidths={},this._headerBox={width:0,height:0},this._headerVisible=!1,this.mapToken=0,this.watchSize=t=>{var s;t&&((s=this._resize)==null||s.observe(t))}}setConfig(t){var s;if(!t||typeof t.entity!="string"||!t.entity)throw new Error("Please select a Tesla Logger entity");const i=((s=this._config)==null?void 0:s.entity)!==t.entity;this._config=t,i&&(this._view=t.default_view||"status",this.clearHistory()),this.ensureVisibleView()}get flags(){return yt(this._config)}ensureVisibleView(){const t=ms(this._view,this.flags);t!==this._view&&(this._view=t)}static getConfigElement(){return document.createElement("tesla-logger-card-editor-impl")}static getStubConfig(t){return{entity:Object.keys(t.states).find(s=>{var i,r;return((r=(i=t.states[s])==null?void 0:i.attributes)==null?void 0:r.key)==="location"})||"",show:{...$t}}}getCardSize(){return 6}connectedCallback(){super.connectedCallback(),this.watchVisibility(),typeof ResizeObserver=="function"&&(this._resize=new ResizeObserver(t=>{const s=t.map(i=>{const r=i.target;return{plot:r.dataset.plot,mapHost:r.dataset.mapHost!=null,width:Math.round(i.contentRect.width),height:Math.round(i.contentRect.height)}});queueMicrotask(()=>{if(!this._resize)return;let i=this._plotWidths,r=!1,n=this._headerBox,a=!1;for(const o of s){if(o.plot){o.width>0&&i[o.plot]!==o.width&&(r||(i={...i},r=!0),i[o.plot]=o.width);continue}o.mapHost&&(n.width!==o.width||n.height!==o.height)&&(n={width:o.width,height:o.height},a=!0)}r&&(this._plotWidths=i),a&&(this._headerBox=n)})}))}disconnectedCallback(){var t,s;(t=this._onScreen)==null||t.disconnect(),this._onScreen=void 0,(s=this._resize)==null||s.disconnect(),this._resize=void 0,this.destroyMap(),super.disconnectedCallback()}watchVisibility(){if(!(this._headerVisible||this._onScreen)){if(typeof IntersectionObserver!="function"){this._headerVisible=!0;return}this._onScreen=new IntersectionObserver(t=>{var s;t.some(i=>i.isIntersecting)&&((s=this._onScreen)==null||s.disconnect(),this._onScreen=void 0,this._headerVisible=!0)}),this._onScreen.observe(this)}}updated(t){(t.has("_view")||t.has("_config"))&&this.ensureView(),this._view==="drive"&&(t.has("_detail")||t.has("_view")||t.has("_headerVisible"))&&this.syncMap(),t.has("_view")&&this._view!=="drive"&&this.destroyMap(),this.shouldLoadMapChunk()&&this.loadMapModule().catch(()=>{})}render(){var t;return(t=this._config)!=null&&t.entity?u`
      <ha-card>
        ${this.header()}
        <div class="tabs" role="tablist">
          ${lt(this.flags).map(s=>this.tab(s,this.text[s]))}
        </div>
        ${this._error?u`<p class="message">${this._error}</p>`:c}
        ${this._loading?u`<p class="message">${this.text.loading}</p>`:c}
        ${this.body()}
      </ha-card>
    `:u`<ha-card><p class="message">${this.text.pick}</p></ha-card>`}get dates(){return Ye(this.hass)}get cardLang(){return at(this.dates.language)}get text(){return Jt(this.cardLang)}get readings(){var t,s,i,r;const n=new Map,a=this.hass,o=(t=this._config)==null?void 0:t.entity;if(!a||!o||!a.states[o])return n;const l=(i=(s=a.entities)==null?void 0:s[o])==null?void 0:i.device_id,h=a.states[o].attributes.vin;for(const[g,d]of Object.entries(a.states)){const m=(r=a.entities)==null?void 0:r[g],f=!!(l&&m?.device_id===l),v=!!(h&&d.attributes.vin===h);if(!f&&!v)continue;const x=m?.translation_key||(typeof d.attributes.key=="string"?d.attributes.key:void 0);x&&n.set(x,d)}return n}get deviceId(){var t,s,i;const r=(t=this._config)==null?void 0:t.entity;if(!(!this.hass||!r))return(i=(s=this.hass.entities)==null?void 0:s[r])==null?void 0:i.device_id}numeric(t){var s;const i=(s=this.readings.get(t))==null?void 0:s.state;if(!i||i==="unknown"||i==="unavailable")return null;const r=Number(i);return Number.isFinite(r)?r:null}label(t){var s;const i=(s=this.readings.get(t))==null?void 0:s.state;return!i||i==="unknown"||i==="unavailable"?null:i}header(){var t,s,i,r,n,a;const o=this.numeric("battery_level"),l=o==null?"\u2014":`${Math.round(o)}`,h=o==null?0:Math.max(0,Math.min(100,o)),g=this.label("activity")||"",d=this.deviceId?(i=(s=(t=this.hass)==null?void 0:t.devices)==null?void 0:s[this.deviceId])==null?void 0:i.name:void 0,m=(a=(n=this.hass)==null?void 0:n.states[((r=this._config)==null?void 0:r.entity)||""])==null?void 0:a.attributes.friendly_name,f=d||(typeof m=="string"?m:this.text.unknown),v=this.label("geofence");return u`
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
            ${v?u`<p class="sub">${v}</p>`:c}
            <span class="pill">${Ze(this.text,g)}</span>
          </div>
        </div>
      </div>
    `}mapEnabled(){var t;return((t=this._config)==null?void 0:t.show_map)!==!1}headerMapReady(){if(!this.mapEnabled())return!1;const t=this.carPosition(),{width:s,height:i}=this._headerBox;return!!(t&&s>=32&&i>=32)}shouldLoadMapChunk(){var t;return this._headerVisible?this._view==="drive"&&(((t=this._detail)==null?void 0:t.route.length)??0)>0?!0:this.headerMapReady():!1}loadMapModule(){return this.mapModule??(this.mapModule=import("./leaflet-DlpW1new.js?v=0.1.11").catch(t=>{throw this.mapModule=void 0,t})),this.mapModule}carPosition(){const t=this.readings.get("location");return us(t?.attributes.latitude,t?.attributes.longitude)}watermark(){var t,s;if(!this._headerVisible||!this.headerMapReady())return c;const i=this.carPosition();if(!i)return c;const{width:r,height:n}=this._headerBox,a=gs(i.lat,i.lon,r,n),o=!!((s=(t=this.hass)==null?void 0:t.themes)!=null&&s.darkMode);return u`
      <div class=${o?"map-bg dark":"map-bg"} aria-hidden="true">
        ${a.tiles.map(l=>u`
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
    `}tab(t,s){return u`
      <button
        role="tab"
        aria-selected=${this._view===t?"true":"false"}
        @click=${()=>this.open(t)}
      >
        ${s}
      </button>
    `}open(t){this._error="",this._view=t,t!=="drive"&&(this._driveId=void 0,this._detail=void 0)}body(){return this._view==="status"?this.status():this._view==="drives"?this.drives():this._view==="drive"?this.drive():this._view==="charges"?this.charges():this._view==="charts"?this.charts():this.stats()}metric(t,s,i){return u`<div class="metric">
      ${i?u`<ha-icon icon=${i}></ha-icon>`:c}
      <div><span>${t}</span><strong>${s}</strong></div>
    </div>`}quantity(t,s,i){const r=this.numeric(t);return r==null?"\u2014":`${_(r,s,this.cardLang)} ${i}`}status(){return u`
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
    `}drives(){const t=this._drives;return u`
      ${this.listToolbar(t)}
      <ul class="list">
        ${(t?.data||[]).map(s=>this.historyRow(Qe(s,this.dates),()=>this.openDrive(s.id)))}
      </ul>
      ${t&&t.data.length===0?u`<p class="message">${this.text.emptyDrives}</p>`:c}
    `}drive(){const t=this._detail,s=_t(t?.energy_used_kwh,t?.distance_km);return u`
      <div class="toolbar">
        <div class="back">
          ${this.iconButton("mdi:arrow-left",this.text.back,!1,()=>this.open("drives"))}
          <button type="button" class="back-label" @click=${()=>this.open("drives")}>
            ${this.text.back}
          </button>
        </div>
        <span class="page-indicator">${t?this.when(t.start_at):""}</span>
      </div>
      ${t?u`
            <div class="grid">
              ${this.metric(this.text.distance,this.km(t.distance_km))}
              ${this.metric(this.text.duration,J(t.duration_s))}
              ${this.metric(this.text.energy,this.kwh(t.energy_used_kwh))}
              ${this.metric(this.text.efficiency,s==null?"\u2014":`${_(s,0,this.cardLang)} Wh/km`)}
            </div>
            <p class="message">${this.text.map}</p>
            ${t.route.length?u`<div class="map"></div>`:u`<p class="message">${this.text.noRoute}</p>`}
            ${this.chart(this.text.speedChart,t.series,"speed_kmh","km/h")}
            ${this.chart(this.text.elevationChart,t.series,"elevation_m","m")}
            ${this.chart(this.text.batteryChart,t.series,"battery_level","%")}
          `:c}
    `}charges(){const t=this._charges;return u`
      ${this.listToolbar(t)}
      <ul class="list">
        ${(t?.data||[]).map(s=>this.historyRow(ts(s,this.dates)))}
      </ul>
      ${t&&t.data.length===0?u`<p class="message">${this.text.emptyCharges}</p>`:c}
    `}stats(){const t=this._stats,s=_t(t?.energy_used_kwh,t?.distance_km);return u`
      ${this.periodBar()}
      ${t?u`
            <div class="grid">
              ${this.metric(this.text.distance,this.km(t.distance_km))}
              ${this.metric(this.text.duration,J(t.drive_duration_s))}
              ${this.metric(this.text.energy,this.kwh(t.energy_used_kwh))}
              ${this.metric(this.text.efficiency,s==null?"\u2014":`${_(s,0,this.cardLang)} Wh/km`)}
              ${this.metric(this.text.drivesCount,String(t.drive_count))}
              ${this.metric(this.text.chargesCount,String(t.charge_count))}
              ${this.metric(this.text.energyAdded,this.kwh(t.energy_added_kwh))}
            </div>
          `:c}
    `}periodBar(){return u`
      <div class="periods" role="group" aria-label=${this.text.period}>
        ${["week","month","year"].map(t=>u`
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
    `}charts(){const t=this.flags,s=this._series,i=s?.buckets??[],r=i.length?this.selectedBucketIndex(i):-1,n=t.chart_consumption||t.chart_distance||t.chart_energy,a=t.battery_health||t.charging_split||t.vampire_drain||t.consumption_vs_temp;return u`
      ${this.periodBar()}
      ${n&&s&&i.length===0?u`<p class="message">${this.text.emptySeries}</p>`:c}
      ${n&&i.length?u`
            <div class="series-list">
              ${t.chart_consumption?this.seriesFigure("consumption","line",this.text.consumptionChart,"Wh/km",o=>b(o.wh_per_km),r):c}
              ${t.chart_distance?this.seriesFigure("distance","bar",this.text.distance,"km",o=>b(o.distance_km),r):c}
              ${t.chart_energy?this.seriesFigure("energy","bar",this.text.chargedChart,"kWh",o=>b(o.energy_charged_kwh),r):c}
            </div>
          `:c}
      ${t.totals&&r>=0?this.bucketTotals(i[r]):c}
      ${a?u`
            <div class="series-extra">
              ${t.battery_health&&r>=0?this.seriesFigure("health","line",this.text.batteryHealth,"km",o=>b(o.range_at_100_km),r,!0):c}
              ${t.charging_split&&r>=0?this.acDcFigure(i,r):c}
              ${t.vampire_drain&&r>=0?this.seriesFigure("idle","bar",this.text.idleUse,"km/j",o=>b(o.idle_range_loss_km_per_day),r,!0):c}
              ${t.consumption_vs_temp?this.tempFigure():c}
            </div>
          `:c}
    `}selectedBucketIndex(t){return this._bucketIndex!=null&&this._bucketIndex>=0&&this._bucketIndex<t.length?this._bucketIndex:ls(t.map(s=>s.start),this._period)}selectBucket(t){this._bucketIndex=t}bucketHeading(t){return ae(t.start,this._period)?this._period==="week"?this.text.thisWeek:this._period==="month"?this.text.thisMonth:this.text.thisYear:ft(t.start,this._period,this.dates)}bucketTotals(t){const s=b(t.energy_used_kwh);return u`
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
            ${s==null?c:u`<span class="totals-sub">${this.text.consumed} ${this.kwh(s)}</span>`}
          </div>
        </div>
      </section>
    `}seriesFigure(t,s,i,r,n,a,o=!1){var l;const h=((l=this._series)==null?void 0:l.buckets)??[],g=r==="Wh/km"?0:1,d=h.map(k=>{const H=n(k),z=ft(k.start,this._period,this.dates),O=H==null?"\u2014":`${_(H,g,this.cardLang)} ${r}`;return{label:z,value:H,title:`${z} \xB7 ${O}`}}),m=o?d[a]:d[d.length-1],f=o?this.bucketHeading(h[a]):this.text.latest,v=m?.value==null?"\u2014":`${_(m.value,g,this.cardLang)} ${r}`,x=`${i}. ${f} ${v}`;return u`
      <figure class=${o?"series-card compact":"series-card"}>
        <figcaption>
          <span class="series-title">${i}</span>
          <span class="series-value">${f} ${v}</span>
        </figcaption>
        ${this.drawSeries(t,d,s,x,a,o)}
      </figure>
    `}acDcFigure(t,s){const i=t[s],r=b(i?.dc_share_pct),n=b(i?.charge_cost),a=b(i?.cost_per_km),o=t.map(h=>{const g=ft(h.start,this._period,this.dates),d=b(h.ac_energy_kwh),m=b(h.dc_energy_kwh),f=d==null?"\u2014":`${_(d,1,this.cardLang)} kWh`,v=m==null?"\u2014":`${_(m,1,this.cardLang)} kWh`;return{label:g,value:d,stack:m,title:`${g} \xB7 AC ${f} \xB7 DC ${v}`}}),l=`${this.text.acDc}. ${this.bucketHeading(i)}`;return u`
      <figure class="series-card compact">
        <figcaption>
          <span class="series-title">${this.text.acDc}</span>
        </figcaption>
        <p class="series-note">
          ${r==null?c:u`${_(r,0,this.cardLang)} % ${this.text.fastShare}`}
          ${n==null?c:u`${r==null?"":" \xB7 "}${this.text.cost} ${_(n,2,this.cardLang)}`}
          ${a==null?c:u`<span class="totals-sub">${_(a,2,this.cardLang)} ${this.text.perKm}</span>`}
        </p>
        <p class="legend">
          <span><i class="swatch ac" aria-hidden="true"></i>AC</span>
          <span><i class="swatch dc" aria-hidden="true"></i>DC</span>
        </p>
        ${this.drawSeries("acdc",o,"stack",l,s,!0)}
      </figure>
    `}tempFigure(){const t=(this._tempBins??[]).map(s=>{const i=s.temp_c_bucket,r=`${_(i,0,this.cardLang)}\u2013${_(i+5,0,this.cardLang)}\xB0`,n=b(s.wh_per_km),a=b(s.distance_km),o=n==null?"\u2014":`${_(n,0,this.cardLang)} Wh/km`,l=a==null?"":` \xB7 ${_(a,0,this.cardLang)} km`;return{label:r,value:n,title:`${r} \xB7 ${o}${l}`}});return u`
      <figure class="series-card compact">
        <figcaption>
          <span class="series-title">${this.text.tempUse}</span>
        </figcaption>
        ${t.length?this.drawSeries("temp",t,"bar",this.text.tempUse,-1,!0,!1):u`<p class="message">${this.text.emptySeries}</p>`}
      </figure>
    `}drawSeries(t,s,i,r,n,a,o=!0){const l=h=>_(h,h>=10||h===0?0:1,this.cardLang);return u`
      <div class="plot" data-plot=${t} ${Yt(this.watchSize)}>
        ${hs(s,i,r,l,{width:this._plotWidths[t],compact:a,selected:n,onSelect:o?h=>this.selectBucket(h):void 0})}
      </div>
    `}chart(t,s,i,r){const n=cs(s,i);if(n.length<2)return c;const a=n[n.length-1];return u`
      <div class="chart-block">
        <span class="muted">${t} · ${_(a,0,this.cardLang)} ${r}</span>
        ${ds(n)}
      </div>
    `}listToolbar(t){const s=t?.page??this._page,i=t&&t.per_page>0?Math.ceil(t.total/t.per_page):1;return u`
      <div class="toolbar list-toolbar">
        <div class="toolbar-actions">
          ${this.iconButton("mdi:chevron-left",this.text.previous,!t||s<=1,()=>this.setPage(s-1))}
          ${this.iconButton("mdi:chevron-right",this.text.next,!t||s>=i,()=>this.setPage(s+1))}
          ${this.iconButton("mdi:refresh",this.text.refresh,!1,()=>this.reload())}
        </div>
        <span class="page-indicator">${this.pageIndicator(t)}</span>
      </div>
    `}pageIndicator(t){if(!t||t.total<=0||t.per_page<=0||t.total<=t.per_page)return`${this.text.page} ${t?.page??this._page}`;const s=(t.page-1)*t.per_page+1,i=Math.min(t.page*t.per_page,t.total);return`${s}\u2013${i}`}iconButton(t,s,i,r){return u`
      <ha-icon-button
        .label=${s}
        aria-label=${s}
        title=${s}
        ?disabled=${i}
        @click=${()=>{i||r()}}
      >
        <ha-icon icon=${t}></ha-icon>
      </ha-icon-button>
    `}historyRow(t,s){const i=t.place?`${t.when} \xB7 ${t.place}`:t.when,r=u`<span class="entry-line"
        ><span class="entry-main" title=${i}
          ><time datetime=${t.datetime}>${t.when}</time>${t.place?` \xB7 ${t.place}`:c}</span
        ><strong class="entry-figure">${t.figure??"\u2014"}</strong></span
      >${t.details.length?u`<span class="entry-meta" title=${t.detail}
            >${t.details.map(n=>u`<span>${n}</span>`)}</span
          >`:c}`;return s?u`
        <li>
          <button type="button" class="entry" @click=${s}>${r}</button>
        </li>
      `:u`<li><div class="entry">${r}</div></li>`}km(t){return t==null?"\u2014":`${_(t,1,this.cardLang)} km`}kwh(t){return t==null?"\u2014":`${_(t,1,this.cardLang)} kWh`}when(t){return Je(t,this.dates)}openDrive(t){this._driveId=t,this._detail=void 0,this._view="drive"}setPeriod(t){if(this._period=t,this._bucketIndex=null,this._view==="charts"){this.loadSeries();return}this._stats=void 0,this.loadStats()}setPage(t){this._page=t,this._view==="drives"?(this._drives=void 0,this.loadDrives()):this._view==="charges"&&(this._charges=void 0,this.loadCharges())}reload(){this.clearHistory(),this.ensureView()}clearHistory(){this._drives=void 0,this._charges=void 0,this._detail=void 0,this._stats=void 0,this._series=void 0,this._tempBins=void 0,this._seriesPeriod=void 0,this._bucketIndex=null,this._page=1,this._error=""}async ensureView(){this._view==="drives"&&this.flags.drives&&!this._drives?await this.loadDrives():this._view==="charges"&&this.flags.charges&&!this._charges?await this.loadCharges():this._view==="stats"&&!this._stats?await this.loadStats():this._view==="charts"&&xt(this.flags)&&this.seriesStale()?await this.loadSeries():this._view==="drive"&&this.flags.drives&&this._driveId!=null&&!this._detail&&await this.loadDrive()}async loadDrives(){await this.load("drives",async()=>{const t=await this.call("get_drives",{page:this._page,per_page:20});if(!de(t))throw new Error(this.text.failed);this._drives=t})}async loadCharges(){await this.load("charges",async()=>{const t=await this.call("get_charges",{page:this._page,per_page:20});if(!de(t))throw new Error(this.text.failed);this._charges=t})}async loadDrive(){const t=this._driveId;t!=null&&await this.load("drive",async()=>{const s=await this.call("get_drive",{drive_id:t,max_points:300});if(!vs(s))throw new Error(this.text.failed);this._detail=s})}seriesStale(){const t=this.flags;return!!(this._seriesPeriod!==this._period||ce(t)&&!this._series||t.consumption_vs_temp&&!this._tempBins)}async loadSeries(){const t=this.flags;if(!xt(t))return;const s=this._period,i=ce(t),r=t.consumption_vs_temp;i&&(this._series=void 0),r&&(this._tempBins=void 0),await this.load("charts",async()=>{const n=rs[s];if(i){const a=await this.call("get_stats_series",{period:s,count:n});if(!fs(a))throw new Error(this.text.failed);this._series=a}if(r)try{this._tempBins=$s(await this.call("get_consumption_by_temp",{period:s,count:n}))}catch{this._tempBins=[]}this._seriesPeriod=s})}async loadStats(){const t=this._period;await this.load("stats",async()=>{const s=es(t),i=await this.call("get_stats",s);if(!_s(i))throw new Error(this.text.failed);this._stats=i})}async load(t,s){if(!this.deviceId){this._error=this.text.missingDevice;return}this._loading=!0,this._error="";try{if(await s(),this._view!==t&&t!=="drive")return}catch(i){this._error=is(i,this.text.failed)}finally{this._loading=!1}}async call(t,s){if(!this.hass||!this.deviceId)throw new Error(this.text.missingDevice);const i=await this.hass.callService("tesla_logger",t,{device_id:this.deviceId,...s},void 0,!1,!0),r=T(i);return r&&"response"in r?r.response:i}syncMap(){var t,s,i;const r=this.renderRoot.querySelector(".map"),n=((t=this._detail)==null?void 0:t.route)??[];if(!r||n.length===0){this.destroyMap();return}if(!this._headerVisible)return;const a=++this.mapToken,o=!!((i=(s=this.hass)==null?void 0:s.themes)!=null&&i.darkMode),l=getComputedStyle(this).getPropertyValue("--primary-color").trim()||"#03a9f4";this.loadMapModule().then(h=>{a!==this.mapToken||!this.isConnected||this.renderRoot.querySelector(".map")!==r||(this.routeMap=h.mountRoute(this.routeMap,r,n,o,l))}).catch(()=>{})}destroyMap(){this.mapToken+=1;const t=this.routeMap;this.routeMap=void 0,t?.destroy()}};bt.properties={hass:{attribute:!1},_config:{state:!0},_view:{state:!0},_drives:{state:!0},_charges:{state:!0},_detail:{state:!0},_stats:{state:!0},_series:{state:!0},_tempBins:{state:!0},_bucketIndex:{state:!0},_period:{state:!0},_page:{state:!0},_loading:{state:!0},_error:{state:!0},_plotWidths:{state:!0},_headerBox:{state:!0},_headerVisible:{state:!0}},bt.styles=xe`
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
        gap: 2px;
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        max-width: 100%;
        margin: 0;
        padding: 7px 4px;
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
        column-gap: 12px;
        align-items: baseline;
        min-width: 0;
      }
      .entry-main {
        min-width: 0;
        overflow: hidden;
        color: var(--primary-text-color, #212121);
        font-size: 0.92rem;
        font-weight: 600;
        line-height: 1.25;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .entry-figure {
        color: var(--primary-text-color, #212121);
        font-size: 0.92rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        line-height: 1.25;
        white-space: nowrap;
      }
      button.entry {
        font: inherit;
        min-height: 0;
        border-bottom: 0;
        cursor: pointer;
      }
      button.entry:hover {
        background: color-mix(
          in srgb,
          var(--primary-text-color, #212121) 8%,
          var(--secondary-background-color, transparent)
        );
      }
      button.entry:focus-visible {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: 2px;
      }
      .entry-meta {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 12px;
        min-width: 0;
        max-width: 100%;
        overflow: hidden;
        color: var(--secondary-text-color);
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.3;
      }
      .entry-meta > span {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
        width: 36px;
        height: 36px;
        --mdc-icon-button-size: 36px;
        --mdc-icon-size: 20px;
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
          padding: 6px 2px;
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
    `;let ue=bt;function ys(e,t){const s=e.split(".").pop()??e;return s==="entity"?t.entity:s==="default_view"?t.defaultView:s==="show"?t.showBlocks:s==="show_map"?t.showMap:s in t.showFields?t.showFields[s]:e}const xs=[{name:"entity",required:!0,selector:{entity:{integration:"tesla_logger"}}},{name:"show_map",selector:{boolean:{}}},{name:"default_view",selector:{select:{options:[{value:"status",label:"Status"},{value:"drives",label:"Drives"},{value:"charges",label:"Charges"},{value:"stats",label:"Stats"},{value:"charts",label:"Charts"}]}}},{name:"show",type:"grid",column_min_width:"200px",schema:he.map(e=>({name:e,selector:{boolean:{}}}))}],pe=class extends R{setConfig(t){this._config={...t,show_map:t.show_map!==!1,show:yt(t)}}render(){var t;if(!this.hass||!this._config)return c;const s=Jt(at(((t=this.hass.locale)==null?void 0:t.language)||this.hass.language));return u`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${xs}
        .computeLabel=${i=>ys(i.name,s)}
        @value-changed=${i=>{const r={...this._config,...i.detail.value};this._config={...r,show:yt(r)},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}}
      ></ha-form>
    `}};pe.properties={hass:{attribute:!1},_config:{state:!0}};let ge=pe;customElements.get("tesla-logger-card-impl")||customElements.define("tesla-logger-card-impl",ue),customElements.get("tesla-logger-card-editor-impl")||customElements.define("tesla-logger-card-editor-impl",ge);export{ue as TeslaLoggerCard,ge as TeslaLoggerCardEditor};
