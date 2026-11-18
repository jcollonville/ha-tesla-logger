/* Tesla Logger Lovelace card. Built from frontend/. Do not edit. */
import{G as ie}from"./tesla-logger-ui-CmIwhtNr.js?v=0.3.0";const V=globalThis,J=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),mt=new WeakMap;let vt=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o;const t=this.t;if(J&&i===void 0){const e=t!==void 0&&t.length===1;e&&(i=mt.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&mt.set(t,i))}return i}toString(){return this.cssText}};const ae=i=>new vt(typeof i=="string"?i:i+"",void 0,Q),_t=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((a,s,r)=>a+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new vt(e,i,Q)},se=(i,t)=>{if(J)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const a=document.createElement("style"),s=V.litNonce;s!==void 0&&a.setAttribute("nonce",s),a.textContent=e.cssText,i.appendChild(a)}},ft=J?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const a of t.cssRules)e+=a.cssText;return ae(e)})(i):i;const{is:re,defineProperty:ne,getOwnPropertyDescriptor:oe,getOwnPropertyNames:le,getOwnPropertySymbols:he,getPrototypeOf:ce}=Object,S=globalThis,yt=S.trustedTypes,de=yt?yt.emptyScript:"",bt=S.reactiveElementPolyfillSupport,O=(i,t)=>i,X={toAttribute(i,t){switch(t){case Boolean:i=i?de:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},$t=(i,t)=>!re(i,t),wt={attribute:!0,type:String,converter:X,reflect:!1,useDefault:!1,hasChanged:$t};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);let D=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??(this.l=[])).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,t=wt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(i,t),!t.noAccessor){const e=Symbol(),a=this.getPropertyDescriptor(i,e,t);a!==void 0&&ne(this.prototype,i,a)}}static getPropertyDescriptor(i,t,e){const{get:a,set:s}=oe(this.prototype,i)??{get(){return this[t]},set(r){this[t]=r}};return{get:a,set(r){const n=a?.call(this);s?.call(this,r),this.requestUpdate(i,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??wt}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const i=ce(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const t=this.properties,e=[...le(t),...he(t)];for(const a of e)this.createProperty(a,t[a])}const i=this[Symbol.metadata];if(i!==null){const t=litPropertyMetadata.get(i);if(t!==void 0)for(const[e,a]of t)this.elementProperties.set(e,a)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const a=this._$Eu(t,e);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const t=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const a of e)t.unshift(ft(a))}else i!==void 0&&t.push(ft(i));return t}static _$Eu(i,t){const e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(t=>t(this))}addController(i){var t;(this._$EO??(this._$EO=new Set)).add(i),this.renderRoot!==void 0&&this.isConnected&&((t=i.hostConnected)==null||t.call(i))}removeController(i){var t;(t=this._$EO)==null||t.delete(i)}_$E_(){const i=new Map,t=this.constructor.elementProperties;for(const e of t.keys())this.hasOwnProperty(e)&&(i.set(e,this[e]),delete this[e]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return se(i,this.constructor.elementStyles),i}connectedCallback(){var i;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$EO)==null||i.forEach(t=>{var e;return(e=t.hostConnected)==null?void 0:e.call(t)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(t=>{var e;return(e=t.hostDisconnected)==null?void 0:e.call(t)})}attributeChangedCallback(i,t,e){this._$AK(i,e)}_$ET(i,t){var e;const a=this.constructor.elementProperties.get(i),s=this.constructor._$Eu(i,a);if(s!==void 0&&a.reflect===!0){const r=(((e=a.converter)==null?void 0:e.toAttribute)!==void 0?a.converter:X).toAttribute(t,a.type);this._$Em=i,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(i,t){var e,a;const s=this.constructor,r=s._$Eh.get(i);if(r!==void 0&&this._$Em!==r){const n=s.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:((e=n.converter)==null?void 0:e.fromAttribute)!==void 0?n.converter:X;this._$Em=r;const l=o.fromAttribute(t,n.type);this[r]=l??((a=this._$Ej)==null?void 0:a.get(r))??l,this._$Em=null}}requestUpdate(i,t,e,a=!1,s){var r;if(i!==void 0){const n=this.constructor;if(a===!1&&(s=this[i]),e??(e=n.getPropertyOptions(i)),!((e.hasChanged??$t)(s,t)||e.useDefault&&e.reflect&&s===((r=this._$Ej)==null?void 0:r.get(i))&&!this.hasAttribute(n._$Eu(i,e))))return;this.C(i,t,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,t,{useDefault:e,reflect:a,wrapped:s},r){e&&!(this._$Ej??(this._$Ej=new Map)).has(i)&&(this._$Ej.set(i,r??t??this[i]),s!==!0||r!==void 0)||(this._$AL.has(i)||(this.hasUpdated||e||(t=void 0),this._$AL.set(i,t)),a===!0&&this._$Em!==i&&(this._$Eq??(this._$Eq=new Set)).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[s,r]of a){const{wrapped:n}=r,o=this[s];n!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,r,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(a=>{var s;return(s=a.hostUpdate)==null?void 0:s.call(a)}),this.update(e)):this._$EM()}catch(a){throw t=!1,this._$EM(),a}t&&this._$AE(e)}willUpdate(i){}_$AE(i){var t;(t=this._$EO)==null||t.forEach(e=>{var a;return(a=e.hostUpdated)==null?void 0:a.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(i){}firstUpdated(i){}};D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[O("elementProperties")]=new Map,D[O("finalized")]=new Map,bt?.({ReactiveElement:D}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.1.2");const Z=globalThis,Ct=i=>i,G=Z.trustedTypes,kt=G?G.createPolicy("lit-html",{createHTML:i=>i}):void 0,xt="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,At="?"+y,ue=`<${At}>`,$=document,R=()=>$.createComment(""),F=i=>i===null||typeof i!="object"&&typeof i!="function",tt=Array.isArray,ge=i=>tt(i)||typeof i?.[Symbol.iterator]=="function",et=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,St=/-->/g,Dt=/>/g,w=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Et=/'/g,Pt=/"/g,Tt=/^(?:script|style|textarea|title)$/i,pe=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),u=pe(1),E=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),It=new WeakMap,C=$.createTreeWalker($,129);function Mt(i,t){if(!tt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return kt!==void 0?kt.createHTML(t):t}const me=(i,t)=>{const e=i.length-1,a=[];let s,r=t===2?"<svg>":t===3?"<math>":"",n=H;for(let o=0;o<e;o++){const l=i[o];let h,c,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,c=n.exec(l),c!==null);)p=n.lastIndex,n===H?c[1]==="!--"?n=St:c[1]!==void 0?n=Dt:c[2]!==void 0?(Tt.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=w):c[3]!==void 0&&(n=w):n===w?c[0]===">"?(n=s??H,d=-1):c[1]===void 0?d=-2:(d=n.lastIndex-c[2].length,h=c[1],n=c[3]===void 0?w:c[3]==='"'?Pt:Et):n===Pt||n===Et?n=w:n===St||n===Dt?n=H:(n=w,s=void 0);const m=n===w&&i[o+1].startsWith("/>")?" ":"";r+=n===H?l+ue:d>=0?(a.push(h),l.slice(0,d)+xt+l.slice(d)+y+m):l+y+(d===-2?o:m)}return[Mt(i,r+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]};class z{constructor({strings:t,_$litType$:e},a){let s;this.parts=[];let r=0,n=0;const o=t.length-1,l=this.parts,[h,c]=me(t,e);if(this.el=z.createElement(h,a),C.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=C.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(xt)){const p=c[n++],m=s.getAttribute(d).split(y),_=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:_[2],strings:m,ctor:_[1]==="."?_e:_[1]==="?"?fe:_[1]==="@"?ye:q}),s.removeAttribute(d)}else d.startsWith(y)&&(l.push({type:6,index:r}),s.removeAttribute(d));if(Tt.test(s.tagName)){const d=s.textContent.split(y),p=d.length-1;if(p>0){s.textContent=G?G.emptyScript:"";for(let m=0;m<p;m++)s.append(d[m],R()),C.nextNode(),l.push({type:2,index:++r});s.append(d[p],R())}}}else if(s.nodeType===8)if(s.data===At)l.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(y,d+1))!==-1;)l.push({type:7,index:r}),d+=y.length-1}r++}}static createElement(t,e){const a=$.createElement("template");return a.innerHTML=t,a}}function P(i,t,e=i,a){var s,r;if(t===E)return t;let n=a!==void 0?(s=e._$Co)==null?void 0:s[a]:e._$Cl;const o=F(t)?void 0:t._$litDirective$;return n?.constructor!==o&&((r=n?._$AO)==null||r.call(n,!1),o===void 0?n=void 0:(n=new o(i),n._$AT(i,e,a)),a!==void 0?(e._$Co??(e._$Co=[]))[a]=n:e._$Cl=n),n!==void 0&&(t=P(i,n._$AS(i,t.values),n,a)),t}class ve{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:a}=this._$AD,s=(t?.creationScope??$).importNode(e,!0);C.currentNode=s;let r=C.nextNode(),n=0,o=0,l=a[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new W(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new be(r,this,t)),this._$AV.push(h),l=a[++o]}n!==l?.index&&(r=C.nextNode(),n++)}return C.currentNode=$,s}p(t){let e=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}}class W{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,a,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),F(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ge(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){var e;const{values:a,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=z.createElement(Mt(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)==null?void 0:e._$AD)===r)this._$AH.p(a);else{const n=new ve(r,this),o=n.u(this.options);n.p(a),this.T(o),this._$AH=n}}_$AC(t){let e=It.get(t.strings);return e===void 0&&It.set(t.strings,e=new z(t)),e}k(t){tt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let a,s=0;for(const r of t)s===e.length?e.push(a=new W(this.O(R()),this.O(R()),this,this.options)):a=e[s],a._$AI(r),s++;s<e.length&&(this._$AR(a&&a._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,e);t!==this._$AB;){const s=Ct(t).nextSibling;Ct(t).remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,s,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=g}_$AI(t,e=this,a,s){const r=this.strings;let n=!1;if(r===void 0)t=P(this,t,e,0),n=!F(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const o=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=P(this,o[a+l],e,l),h===E&&(h=this._$AH[l]),n||(n=!F(h)||h!==this._$AH[l]),h===g?t=g:t!==g&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}n&&!s&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _e extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class fe extends q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class ye extends q{constructor(t,e,a,s,r){super(t,e,a,s,r),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??g)===E)return;const a=this._$AH,s=t===g&&a!==g||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,r=t!==g&&(a===g||s);s&&this.element.removeEventListener(this.name,this,a),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class be{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const Nt=Z.litHtmlPolyfillSupport;Nt?.(z,W),(Z.litHtmlVersions??(Z.litHtmlVersions=[])).push("3.3.3");const $e=(i,t,e)=>{const a=e?.renderBefore??t;let s=a._$litPart$;if(s===void 0){const r=e?.renderBefore??null;a._$litPart$=s=new W(t.insertBefore(R(),r),r,void 0,e??{})}return s._$AI(i),s};const j=globalThis;class T extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$e(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}}var Ut;T._$litElement$=!0,T.finalized=!0,(Ut=j.litElementHydrateSupport)==null||Ut.call(j,{LitElement:T});const Lt=j.litElementPolyfillSupport;Lt?.({LitElement:T}),(j.litElementVersions??(j.litElementVersions=[])).push("4.2.2");const we=3600;function Ce(i){return typeof i!="string"||!/^[A-Za-z0-9_-]{1,128}$/.test(i)?null:i}function ke(i){return typeof i=="number"&&Number.isInteger(i)&&i>=0&&i<=1e12?i:typeof i=="string"&&/^\d{1,12}$/.test(i)?Number(i):null}function xe(i){for(const t of i){const e=Ce(t.attributes.config_entry_id),a=ke(t.attributes.vehicle_id);if(e&&a!==null)return{entryId:e,vehicleId:a}}return null}function Ae(i,t){return`/api/tesla_logger/${encodeURIComponent(i)}/${t}/car.png`}async function Se(i,t,e){if(!i.callWS||!i.hassUrl)return null;const a=Ae(t,e),s=await i.callWS({type:"auth/sign_path",path:a,expires:we});return!s||typeof s.path!="string"||!s.path.startsWith("/")||s.path.startsWith("//")?null:i.hassUrl(s.path)||null}const Ot=10,De=50;function k(i){const t=i?.page_size;return typeof t!="number"||!Number.isFinite(t)?Ot:Math.min(De,Math.max(1,Math.round(t)))}const it={distance:!0,duration:!0,energy:!0,efficiency:!0,map:!0,speed:!0,power:!0,elevation:!0,battery:!0},at={energy:!0,duration:!0,soc:!0,power:!0,ac_dc:!0,voltage:!0,cost:!0,curve:!0},Ee=Object.keys(it),Pe=Object.keys(at);function Rt(i,t){const e={...i};if(!t||typeof t!="object")return e;for(const a of Object.keys(i)){const s=t[a];typeof s=="boolean"&&(e[a]=s)}return e}function x(i){return Rt(it,i?.drive_detail)}function I(i){return Rt(at,i?.charge_detail)}const Ft={overview:"Overview",status:"Status",drives:"Drives",charges:"Charges",stats:"Stats",days7:"7 days",days30:"30 days",yearToDate:"This year",allTime:"All",byWeek:"Weeks",byMonth:"Months",byYear:"Years",lastDrive:"Last drive",lastCharge:"Last charge",allDrives:"All drives",allCharges:"All charges",noDrive:"No drives",noCharge:"No charges",thisMonthTitle:"This month",statsLink:"Statistics",behindWheel:"Driving time",energyCharged:"Energy charged",chargeCostChart:"Charging cost",idleLoss:"Parked loss",tempChart:"Consumption by temperature",efficiencyChart:"Efficiency",backToList:"Back to the list",telemetry:"Telemetry",chartHint:"Hover to read, drag to zoom.",noGps:"No GPS points.",notEnoughPoints:"Not enough points.",updatedLabel:"Updated",position:"Position",unknownPosition:"Unknown position",dcShare:"DC share",pluggedFor:"Plugged in",selectionTotals:"Selection totals",charts:"Charts",consumptionChart:"Consumption",chargedChart:"Energy charged",emptySeries:"No data for this period.",latest:"Latest",period:"Period",thisWeek:"This week",thisMonth:"This month",thisYear:"This year",consumed:"consumed",batteryHealth:"Battery health",rangeAtFull:"Range at 100%",acDc:"AC/DC charging",fastShare:"fast charging",cost:"Cost",perKm:"/km",perDay:"km/day",idleUse:"Parked consumption",tempUse:"Consumption vs temperature",car:"Car",sections:"Sections",pageSize:"Items per page",driveDetail:"Drive detail",chargeDetail:"Charge detail",resetZoom:"Reset zoom",voltage:"Voltage",soc:"State of charge",acDcShort:"AC/DC",chargeCurve:"Charge curve",noCurve:"This charge has no curve.",battery:"Battery",drivingGroup:"Driving",cabinGroup:"Cabin",chargeGroup:"Charging",viewsGroup:"Views",moreCharts:"More charts",previousPeriod:{week:"previous week",month:"previous month",year:"previous year"},range:"Range",speed:"Speed",power:"Power",inside:"Inside",outside:"Outside",charger:"Charger",added:"Added",odometer:"Odometer",limit:"Limit",location:"Location",unknown:"Unknown",loading:"Loading\u2026",emptyDrives:"No drives in this page.",emptyCharges:"No charges in this page.",back:"Back",refresh:"Refresh",week:"Week",month:"Month",year:"Year",distance:"Distance",duration:"Duration",energy:"Energy",efficiency:"Efficiency",drivesCount:"Drives",chargesCount:"Charges",energyAdded:"Energy added",map:"Route",speedChart:"Speed",elevationChart:"Elevation",batteryChart:"Battery",noRoute:"This drive has no route points.",pick:"Select a Tesla Logger entity in the card editor.",missingDevice:"This entity is not linked to a Tesla Logger device.",failed:"Could not load history.",previous:"Previous",next:"Next",page:"Page",online:"Online",asleep:"Asleep",offline:"Offline",driving:"Driving",charging:"Charging",updating:"Updating",entity:"Entity",defaultView:"Default view",showMap:"Map",carImageUnavailable:"Vehicle image unavailable",showBlocks:"Blocks",detailFields:{distance:"Distance",duration:"Duration",energy:"Energy",efficiency:"Efficiency",map:"Route map",speed:"Speed chart",power:"Power",elevation:"Elevation chart",battery:"Battery chart",soc:"State of charge",ac_dc:"AC/DC",voltage:"Voltage",cost:"Cost",curve:"Charge curve"},showFields:{car:"Car card",status:"Status",drives:"Drives",charges:"Charges",stats:"Stats",charts:"Charts",chart_consumption:"Consumption (Wh/km)",chart_distance:"Distance",chart_energy:"Energy charged",totals:"Totals",battery_health:"Battery health",charging_split:"AC/DC charging and cost",vampire_drain:"Parked consumption",consumption_vs_temp:"Consumption vs temperature"}},Te={...Ft,overview:"Aper\xE7u",status:"\xC9tat",drives:"Trajets",charges:"Charges",stats:"Stats",days7:"7 jours",days30:"30 jours",yearToDate:"Cette ann\xE9e",allTime:"Tout",byWeek:"Semaines",byMonth:"Mois",byYear:"Ann\xE9es",lastDrive:"Dernier trajet",lastCharge:"Derni\xE8re charge",allDrives:"Tous les trajets",allCharges:"Toutes les charges",noDrive:"Aucun trajet",noCharge:"Aucune charge",thisMonthTitle:"Ce mois-ci",statsLink:"Statistiques",behindWheel:"Au volant",energyCharged:"\xC9nergie charg\xE9e",chargeCostChart:"Co\xFBt des charges",idleLoss:"Perte \xE0 l'arr\xEAt",tempChart:"Consommation par temp\xE9rature",efficiencyChart:"Efficacit\xE9",backToList:"Retour \xE0 la liste",telemetry:"T\xE9l\xE9m\xE9trie",chartHint:"Survolez pour lire, faites glisser pour zoomer.",noGps:"Pas de points GPS.",notEnoughPoints:"Pas assez de points.",updatedLabel:"Mis \xE0 jour",position:"Position",unknownPosition:"Position inconnue",dcShare:"Part DC",pluggedFor:"Branch\xE9e",selectionTotals:"Totaux de la s\xE9lection",perDay:"km/j",charts:"Graphiques",consumptionChart:"Consommation",chargedChart:"\xC9nergie charg\xE9e",emptySeries:"Aucune donn\xE9e sur cette p\xE9riode.",latest:"Dernier",period:"P\xE9riode",thisWeek:"Cette semaine",thisMonth:"Ce mois",thisYear:"Cette ann\xE9e",consumed:"consomm\xE9",batteryHealth:"Sant\xE9 batterie",rangeAtFull:"Autonomie \xE0 100 %",acDc:"Charges AC/DC",fastShare:"recharge rapide",cost:"Co\xFBt",perKm:"/km",idleUse:"Consommation \xE0 l'arr\xEAt",tempUse:"Consommation vs temp\xE9rature",car:"Voiture",sections:"Sections",pageSize:"\xC9l\xE9ments par page",driveDetail:"D\xE9tail du trajet",chargeDetail:"D\xE9tail de la charge",resetZoom:"R\xE9initialiser le zoom",voltage:"Tension",soc:"Niveau de charge",acDcShort:"AC/DC",chargeCurve:"Courbe de charge",noCurve:"Cette charge n'a pas de courbe.",battery:"Batterie",drivingGroup:"D\xE9placement",cabinGroup:"Habitacle",chargeGroup:"Charge",viewsGroup:"Vues",moreCharts:"Autres graphiques",previousPeriod:{week:"semaine pr\xE9c\xE9dente",month:"mois pr\xE9c\xE9dent",year:"ann\xE9e pr\xE9c\xE9dente"},range:"Autonomie",speed:"Vitesse",power:"Puissance",inside:"Int\xE9rieur",outside:"Ext\xE9rieur",charger:"Chargeur",added:"Ajout\xE9e",odometer:"Odom\xE8tre",limit:"Limite",location:"Lieu",unknown:"Inconnu",loading:"Chargement\u2026",emptyDrives:"Aucun trajet sur cette page.",emptyCharges:"Aucune charge sur cette page.",back:"Retour",refresh:"Actualiser",week:"Semaine",month:"Mois",year:"Ann\xE9e",distance:"Distance",duration:"Dur\xE9e",energy:"\xC9nergie",efficiency:"Efficacit\xE9",drivesCount:"Trajets",chargesCount:"Charges",energyAdded:"\xC9nergie ajout\xE9e",map:"Trac\xE9",speedChart:"Vitesse",elevationChart:"Altitude",batteryChart:"Batterie",noRoute:"Ce trajet n'a pas de trac\xE9.",pick:"Choisissez une entit\xE9 Tesla Logger dans l'\xE9diteur.",missingDevice:"Cette entit\xE9 n'est pas li\xE9e \xE0 un appareil Tesla Logger.",failed:"Impossible de charger l'historique.",previous:"Pr\xE9c\xE9dent",next:"Suivant",page:"Page",online:"En ligne",asleep:"Endormie",offline:"Hors ligne",driving:"En route",charging:"En charge",updating:"Mise \xE0 jour",entity:"Entit\xE9",defaultView:"Vue par d\xE9faut",showMap:"Carte",carImageUnavailable:"Image du v\xE9hicule indisponible",showBlocks:"Blocs",detailFields:{distance:"Distance",duration:"Dur\xE9e",energy:"\xC9nergie",efficiency:"Efficacit\xE9",map:"Carte du trac\xE9",speed:"Graphique de vitesse",power:"Puissance",elevation:"Graphique d'altitude",battery:"Graphique de batterie",soc:"Niveau de charge",ac_dc:"AC/DC",voltage:"Tension",cost:"Co\xFBt",curve:"Courbe de charge"},showFields:{car:"Carte voiture",status:"\xC9tat",drives:"Trajets",charges:"Charges",stats:"Statistiques",charts:"Graphiques",chart_consumption:"Consommation (Wh/km)",chart_distance:"Distance",chart_energy:"\xC9nergie charg\xE9e",totals:"Totaux",battery_health:"Sant\xE9 batterie",charging_split:"Charges AC/DC et co\xFBt",vampire_drain:"Consommation \xE0 l'arr\xEAt",consumption_vs_temp:"Consommation vs temp\xE9rature"}};function Ht(i){const t=(i||"").toLowerCase().replace("_","-");return t==="fr"||t.startsWith("fr-")?"fr":"en"}function jt(i){return i==="fr"?Te:Ft}const st={car:!0,status:!0,drives:!0,charges:!0,stats:!0,charts:!0,chart_consumption:!0,chart_distance:!0,chart_energy:!0,totals:!0,battery_health:!0,charging_split:!0,vampire_drain:!0,consumption_vs_temp:!0},Ie=Object.keys(st),Me=["car","status","drives","charges","stats","charts"],Ne=["chart_consumption","chart_distance","chart_energy","battery_health","charging_split","vampire_drain","consumption_vs_temp"];function M(i){const t={...st},e=i?.show;if(!e||typeof e!="object")return t;for(const a of Ie){const s=e[a];typeof s=="boolean"&&(t[a]=s)}return t}function Ue(i){return i.chart_consumption||i.chart_distance||i.chart_energy||i.totals||i.battery_health||i.charging_split||i.vampire_drain||i.consumption_vs_temp}function N(i){return i.charts&&Ue(i)}function Bt(i){return i.charts&&(i.chart_consumption||i.chart_distance||i.chart_energy||i.totals||i.battery_health||i.charging_split||i.vampire_drain)}function zt(i,t=!0){const e=[];return(i.car||i.status||t)&&e.push("status"),i.drives&&e.push("drives"),i.charges&&e.push("charges"),(i.stats||N(i))&&e.push("stats"),e}function Le(i,t,e=!0){const a=zt(t,e);if(i==="drive")return t.drives?i:a[0]??"status";if(i==="charge")return t.charges?i:a[0]??"status";const s=i==="charts"?"stats":i;return s==="stats"?t.stats||N(t)?"stats":a[0]??"status":a.includes(s)?s:a[0]??"status"}const Oe=["status","drives","charges","stats"],Re={status:"overview",drives:"drives",charges:"charges",stats:"stats"},rt=class extends T{setConfig(t){const e=M(t);this._config={...t,default_view:t.default_view==="charts"?"stats":t.default_view,show_map:t.show_map!==!1,page_size:k(t),show:e,drive_detail:x(t),charge_detail:I(t)}}render(){var t;if(!this.hass||!this._config)return u``;const e=jt(Ht(((t=this.hass.locale)==null?void 0:t.language)||this.hass.language)),a=M(this._config),s=x(this._config),r=I(this._config);return u`
      <div class="editor">
        ${this.entityField(e)}
        <div class="pair">
          <label class="field">
            ${e.defaultView}
            <select
              data-field="default_view"
              @change=${n=>this.commit({default_view:n.target.value})}
            >
              ${Oe.map(n=>{var o;return u`<option value=${n} ?selected=${(((o=this._config)==null?void 0:o.default_view)||"status")===n}>
                  ${e[Re[n]]}
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
              .value=${String(k(this._config))}
              @change=${n=>this.commit({page_size:Number(n.target.value)})}
            />
          </label>
        </div>
        <fieldset>
          <legend>${e.sections}</legend>
          <div class="grid">
            ${this.check(e.showMap,this._config.show_map!==!1,n=>this.commit({show_map:n}))}
            ${Me.map(n=>this.check(e.showFields[n],a[n],o=>this.patchShow(n,o)))}
          </div>
        </fieldset>
        <fieldset>
          <legend>${e.charts}</legend>
          <div class="grid">
            ${Ne.map(n=>this.check(e.showFields[n],a[n],o=>this.patchShow(n,o)))}
          </div>
        </fieldset>
        <fieldset>
          <legend>${e.driveDetail}</legend>
          <div class="grid">
            ${Ee.map(n=>this.check(e.detailFields[n],s[n],o=>this.patchDrive(n,o)))}
          </div>
        </fieldset>
        <fieldset>
          <legend>${e.chargeDetail}</legend>
          <div class="grid">
            ${Pe.map(n=>this.check(e.detailFields[n],r[n],o=>this.patchCharge(n,o)))}
          </div>
        </fieldset>
      </div>
    `}entityField(t){var e;const a=((e=this._config)==null?void 0:e.entity)||"";return customElements.get("ha-entity-picker")?u`
        <ha-entity-picker
          .hass=${this.hass}
          .value=${a}
          .label=${t.entity}
          allow-custom-entity
          @value-changed=${s=>this.commit({entity:s.detail.value||""})}
        ></ha-entity-picker>
      `:u`
      <label class="field">
        ${t.entity}
        <input
          data-field="entity"
          type="text"
          .value=${a}
          @change=${s=>this.commit({entity:s.target.value})}
        />
      </label>
    `}check(t,e,a,s){return u`
      <label class="row">
        <input
          type="checkbox"
          data-field=${s??g}
          .checked=${e}
          @change=${r=>a(r.target.checked)}
        />
        <span>${t}</span>
      </label>
    `}patchShow(t,e){const a={...M(this._config),[t]:e};this.commit({show:a})}patchDrive(t,e){this.commit({drive_detail:{...x(this._config),[t]:e}})}patchCharge(t,e){this.commit({charge_detail:{...I(this._config),[t]:e}})}commit(t){if(!this._config)return;const e={...this._config,...t,show:M({entity:this._config.entity,show:{...M(this._config),...t.show}}),drive_detail:x({entity:this._config.entity,drive_detail:{...x(this._config),...t.drive_detail}}),charge_detail:I({entity:this._config.entity,charge_detail:{...I(this._config),...t.charge_detail}}),page_size:k({entity:this._config.entity,page_size:t.page_size??this._config.page_size}),show_map:t.show_map??this._config.show_map!==!1};delete e.show_charts,this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}};rt.properties={hass:{attribute:!1},_config:{state:!0}},rt.styles=_t`
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
  `;let Wt=rt;function K(i){return i&&typeof i=="object"?{language:i.language||"en",hour12:i.hour12,timeZone:i.timeZone}:{language:i||"en"}}function Fe(i){var t,e,a,s;const r=((t=i?.locale)==null?void 0:t.language)||i?.language||"en",n=(e=i?.locale)==null?void 0:e.time_format;let o;n==="12"?o=!0:n==="24"&&(o=!1);const l=(a=i?.locale)==null?void 0:a.time_zone,h=(s=i?.config)==null?void 0:s.time_zone;return{language:r,hour12:o,timeZone:l==="server"&&typeof h=="string"&&h!==""&&h!=="local"&&h!=="server"?h:void 0}}function Vt(i){return i.replace(/[\u00a0\u202f]/g," ").replace(/\s+/g," ").trim()}function nt(i,t){const e={...t};return i.timeZone&&(e.timeZone=i.timeZone),e}function Zt(i,t){return Vt(new Intl.DateTimeFormat(t.language||"en",nt(t,{weekday:"short",day:"numeric",month:"short"})).format(i))}function He(i,t){const e=nt(t,{hour:t.hour12?"numeric":"2-digit",minute:"2-digit"});return typeof t.hour12=="boolean"&&(e.hour12=t.hour12),Vt(new Intl.DateTimeFormat(t.language||"en",e).format(i))}function je(i,t){const e=new Intl.DateTimeFormat("en-US",nt(t,{year:"numeric",month:"2-digit",day:"2-digit"})).formatToParts(i),a=s=>{var r;return((r=e.find(n=>n.type===s))==null?void 0:r.value)??""};return`${a("year")}-${a("month")}-${a("day")}`}function ot(i,t){const e=new Date(i);return Number.isNaN(e.getTime())?i:He(e,K(t))}function Be(i,t){const e=new Date(i);return Number.isNaN(e.getTime())?i:Zt(e,K(t))}function ze(i,t){const e=K(t),a=new Date(i);return Number.isNaN(a.getTime())?{key:i,label:i}:{key:je(a,e),label:Zt(a,e)}}function We(i){return typeof i=="string"?i:i instanceof Error||i&&typeof i=="object"&&"message"in i&&typeof i.message=="string"?i.message:""}function Ve(i,t){const e=We(i);return!e||e.includes("tl_")?t:e.slice(0,180)}function A(i){return!i||typeof i!="object"?null:i}const Gt={week:12,month:12,year:5},Y=360,B=220;function qt(i,t){const e=new Intl.DateTimeFormat("en-US",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(i),a=s=>{var r;return Number((r=e.find(n=>n.type===s))==null?void 0:r.value)};return{y:a("year"),m:a("month"),d:a("day")}}function lt(i,t){const e=new Date(Date.UTC(i.y,i.m-1,i.d));return e.setUTCDate(e.getUTCDate()+t),{y:e.getUTCFullYear(),m:e.getUTCMonth()+1,d:e.getUTCDate()}}function Kt(i,t){const e=new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).formatToParts(t),a=n=>{var o;return((o=e.find(l=>l.type===n))==null?void 0:o.value)??"0"},s=a("hour")==="24"?0:Number(a("hour")),r=Date.UTC(Number(a("year")),Number(a("month"))-1,Number(a("day")),s,Number(a("minute")),Number(a("second")));return Math.round((r-t.getTime())/6e4)}function Yt(i,t){const e=new Date(Date.UTC(t.y,t.m-1,t.d)),a=Kt(i,e);return new Date(e.getTime()-a*6e4)}function ht(i,t,e=new Date){if(i==="all")return{};const a=qt(e,t),s=i==="7d"?lt(a,-6):i==="30d"?lt(a,-29):{y:a.y,m:1,d:1};return{from:Yt(t,s).toISOString(),to:e.toISOString()}}function Ze(i,t=new Date){return Jt("month",i,t)}function Jt(i,t,e=new Date){const a=qt(e,t);let s;if(i==="year")s={y:a.y,m:1,d:1};else if(i==="month")s={y:a.y,m:a.m,d:1};else{const r=new Date(Date.UTC(a.y,a.m-1,a.d));s=lt(a,-((r.getUTCDay()+6)%7))}return{from:Yt(t,s).toISOString(),to:e.toISOString()}}function Ge(i,t,e){const a=new Date(i);if(Number.isNaN(a.getTime()))return i;const s=K(e),r=s.timeZone?{timeZone:s.timeZone}:{},n=s.language||"en";return t==="year"?new Intl.DateTimeFormat(n,{year:"numeric",...r}).format(a):t==="month"?new Intl.DateTimeFormat(n,{month:"short",...r}).format(a).replace(/[\u00a0\u202f]/g," ").replace(/\.$/,"").trim():new Intl.DateTimeFormat(n,{day:"numeric",month:"short",...r}).format(a).replace(/[\u00a0\u202f]/g," ").replace(/,/g,"").replace(/\s+/g," ").trim()}function Qt(i,t){if(i<=t||t<2)return Array.from({length:i},(a,s)=>s);const e=Array.from({length:t},(a,s)=>Math.round(s*(i-1)/(t-1)));return e.filter((a,s)=>s===0||a!==e[s-1])}function qe(i){const t=i.filter(v=>Number.isFinite(v.latitude)&&Number.isFinite(v.longitude));if(t.length<2)return[];const e=Qt(t.length,90).map(v=>t[v]),a=e.map(v=>v.latitude),s=e.map(v=>v.longitude),r=Math.min(...a),n=Math.max(...a),o=Math.min(...s),l=Math.max(...s),h=Math.max(n-r,1e-9),c=Math.max(l-o,1e-9),d=28,p=Math.min((Y-d*2)/c,(B-d*2)/h),m=(Y-c*p)/2,_=(B-h*p)/2;return[e.map((v,U)=>{const L=m+(v.longitude-o)*p,ee=B-(_+(v.latitude-r)*p);return`${U===0?"M":"L"}${L.toFixed(1)} ${ee.toFixed(1)}`}).join(" ")]}function Ke(i,t,e){return{label:i,moving:t,empty:!e,width:Y,height:B,roads:[]}}function Ye(i,t){return{label:i,moving:!1,empty:t.length===0,width:Y,height:B,roads:t}}function Je(i){const t=typeof i.charger_type=="string"?i.charger_type.trim():"",e=t.toLowerCase(),a=t&&!/^<.*>$/.test(t)&&e!=="none"&&e!=="null"?t:null;let s=i.is_dc??null;const r=a;return a==="AC"&&(s=!1),a==="DC"&&(s=!0),{id:i.id,start_at:i.start_at,end_at:i.end_at,energy_added_kwh:i.energy_added_kwh,duration_s:i.duration_s,cost:i.cost,is_dc:s,charger_type:r,max_power_kw:i.max_power_kw,start_battery_level:i.start_battery_level,end_battery_level:i.end_battery_level,address:i.address||i.location,geofence:i.geofence}}function Qe(i,t){return typeof i!="number"||typeof t!="number"||!Number.isFinite(i)||!Number.isFinite(t)||Math.abs(i)>90||Math.abs(t)>180?null:{lat:i,lon:t}}function ct(i,t,e,a=!1){return{kind:"bar",labels:i,titles:t,series:e,stacked:a}}function Xe(i,t,e,a){return{kind:"line",x:{kind:"time",origin_ms:i,offset_min:t},t:e,series:a}}function ti(i,t=240){return Qt(i.length,t).map(e=>i[e])}function b(i){return typeof i=="number"&&Number.isFinite(i)?i:null}function dt(i,t){const e=b(i),a=b(t);return e==null||a==null||a<=0?null:e*1e3/a}function f(i){return i.reduce((t,e)=>t+(b(e)??0),0)}function ei(i,t,e){const a=dt(i.energy_used_kwh,i.distance_km);return[{label:t.drives,value:e.number(i.drive_count||0,0)},{label:t.distance,value:e.distance(i.distance_km)},{label:t.duration,value:e.duration(i.drive_duration_s)},{label:t.energy,value:e.energy(i.energy_used_kwh)},{label:t.efficiency,value:a==null?"\u2014":e.unit(a,0,"Wh/km")}]}function ii(i){return{entity:Object.keys(i.states).find(t=>{var e,a;return((a=(e=i.states[t])==null?void 0:e.attributes)==null?void 0:a.key)==="location"})||"",show_map:!0,page_size:Ot,show:{...st},drive_detail:{...it},charge_detail:{...at}}}const Xt=["--tl-bg:var(--tl-ha-bg)","--tl-surface:var(--tl-ha-surface)","--tl-surface-2:var(--tl-ha-surface-2)","--tl-text:var(--tl-ha-text)","--tl-muted:var(--tl-ha-muted)","--tl-accent:var(--tl-ha-accent)","--tl-line:var(--tl-ha-line)","--tl-green:var(--tl-ha-green)","--tl-danger:var(--tl-ha-danger)","--tl-map-bg:var(--tl-ha-map)"].join(";"),ai="tl-vehicle-card, tl-mini-map, tl-recent-card, tl-summary-strip, tl-tabs, tl-period-chips, tl-day-group, tl-drive-row, tl-charge-row, tl-chart";function ut(i){const t=A(i);return!!(t&&Array.isArray(t.data))}function si(i){const t=A(i);return!!(t&&Array.isArray(t.route)&&Array.isArray(t.series))}function gt(i){const t=A(i);return!!(t&&typeof t.distance_km=="number")}function ri(i){const t=A(i);return!!(t&&Array.isArray(t.buckets))}function ni(i){const t=A(i);return(t&&Array.isArray(t.data)?t.data:[]).filter(e=>{const a=A(e);return!!(a&&typeof a.temp_c_bucket=="number")})}const pt=class extends T{constructor(){super(...arguments),this._view="status",this._period="month",this._range="all",this._page=1,this._loading=!1,this._error="",this._rangeStatsKey="",this._recentDrivePending=!1,this._recentChargePending=!1,this._monthPending=!1,this._inflight=new Set,this._carImageUrl="",this._carImageFailed=!1,this._carImageKey="",this._carImageGen=0,this._hooksKey="",this._hooks={}}setConfig(t){var e;if(!t||typeof t.entity!="string"||!t.entity)throw new Error("Please select a Tesla Logger entity");const a=((e=this._config)==null?void 0:e.entity)!==t.entity,s=this._config!=null&&k(this._config)!==k(t);this._config=t,a?(this._view=this.openingView(t.default_view),this.clearHistory()):s&&(this._page=1,this._drives=void 0,this._charges=void 0),this.ensureVisibleView()}openingView(t){return t==="charts"?"stats":t||"status"}get flags(){return M(this._config)}ensureVisibleView(){const t=Le(this._view,this.flags,this.mapEnabled());t!==this._view&&(this._view=t)}static getConfigElement(){return document.createElement("tesla-logger-card-editor-impl")}static getStubConfig(t){return ii(t)}getCardSize(){return 6}updated(){this.classList.toggle("dark",this.dark),this.paintHosts(),this.patchSharedShadows(),this.syncPositionMap(),this._config&&(this.ensureView(),this.ensureCarImage())}paintHosts(){const t=this.locale,e=this.timeZone,a=this.dark?"dark":"light",s=this.hooks;this.renderRoot.querySelectorAll(ai).forEach(r=>{const n=r;n.locale!==t&&(n.locale=t),n.timeZone!==e&&(n.timeZone=e),n.theme!==a&&(n.theme=a),n.format!==s&&(n.format=s),n.getAttribute("style")!==Xt&&n.setAttribute("style",Xt)})}patchSharedShadows(){const t=[["tl-summary-strip",":host dd,:host dt{margin-inline:0;margin-left:0;margin-right:0;text-align:start} :host dd{margin-top:4px}"],["tl-recent-card",":host .route.single .route-stop{padding-left:18px}"]];for(const[e,a]of t)this.renderRoot.querySelectorAll(e).forEach(s=>{const r=s.shadowRoot;if(!r||r.querySelector("style[data-card-patch]"))return;const n=document.createElement("style");n.dataset.cardPatch=e,n.textContent=a,r.append(n)})}syncPositionMap(){const t=this.renderRoot.querySelector("tl-mini-map.where");if(!t)return;const e=this.carPosition(),a=e?.lat??null,s=e?.lon??null,r=this.numeric("heading");t.latitude!==a&&(t.latitude=a),t.longitude!==s&&(t.longitude=s),t.heading!==r&&(t.heading=r)}render(){var t;return(t=this._config)!=null&&t.entity?u`
      <ha-card>
        <tl-tabs
          label=${this.text.sections}
          .data=${this.tabOptions()}
          @tl-change=${this.onTab}
          @click=${this.blockLink}
        ></tl-tabs>
        ${this._error?u`<p class="message">${this._error}</p>`:g}
        ${this._loading?u`<p class="message">${this.text.loading}</p>`:g}
        ${this.body()}
      </ha-card>
    `:u`<ha-card><p class="message">${this.text.pick}</p></ha-card>`}get dark(){var t,e;return!!((e=(t=this.hass)==null?void 0:t.themes)!=null&&e.darkMode)}get dates(){return Fe(this.hass)}get locale(){return this.dates.language||"en"}get timeZone(){if(this.dates.timeZone)return this.dates.timeZone;try{return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}catch{return"UTC"}}get hooks(){const t=this.dates,e=`${t.language}|${String(t.hour12)}|${t.timeZone??""}`;return e!==this._hooksKey&&(this._hooksKey=e,this._hooks={clock:a=>ot(a,t),dayLabel:a=>Be(a,t)}),this._hooks}get fmt(){return ie({locale:this.locale,timeZone:this.timeZone,format:this.hooks})}get text(){return jt(Ht(this.locale))}get readings(){var t,e,a,s;const r=new Map,n=this.hass,o=(t=this._config)==null?void 0:t.entity;if(!n||!o||!n.states[o])return r;const l=(a=(e=n.entities)==null?void 0:e[o])==null?void 0:a.device_id,h=n.states[o].attributes.vin;for(const[c,d]of Object.entries(n.states)){const p=(s=n.entities)==null?void 0:s[c],m=!!(l&&p?.device_id===l),_=!!(h&&d.attributes.vin===h);if(!m&&!_)continue;const v=p?.translation_key||(typeof d.attributes.key=="string"?d.attributes.key:void 0);v&&r.set(v,d)}return r}get deviceId(){var t,e,a;const s=(t=this._config)==null?void 0:t.entity;if(!(!this.hass||!s))return(a=(e=this.hass.entities)==null?void 0:e[s])==null?void 0:a.device_id}numeric(t){var e;const a=(e=this.readings.get(t))==null?void 0:e.state;if(!a||a==="unknown"||a==="unavailable")return null;const s=Number(a);return Number.isFinite(s)?s:null}label(t){var e;const a=(e=this.readings.get(t))==null?void 0:e.state;return!a||a==="unknown"||a==="unavailable"?null:a}binary(t){var e;const a=(e=this.readings.get(t))==null?void 0:e.state;return!a||a==="unknown"||a==="unavailable"?null:t==="lock"?a==="off"?!0:a==="on"?!1:null:a==="on"?!0:a==="off"?!1:null}vehicleName(){var t,e,a,s,r,n;const o=this.deviceId?(a=(e=(t=this.hass)==null?void 0:t.devices)==null?void 0:e[this.deviceId])==null?void 0:a.name:void 0,l=(n=(r=this.hass)==null?void 0:r.states[((s=this._config)==null?void 0:s.entity)||""])==null?void 0:n.attributes.friendly_name;return typeof o=="string"&&o?o:typeof l=="string"&&l?l:this.text.unknown}mapEnabled(){var t;return((t=this._config)==null?void 0:t.show_map)!==!1}carPosition(){const t=this.readings.get("location");return Qe(t?.attributes.latitude,t?.attributes.longitude)}tabOptions(){const t=this.text,e={status:t.overview,drives:t.drives,charges:t.charges,stats:t.stats};return zt(this.flags,this.mapEnabled()).map(a=>({id:a==="status"?"tab-overview":`tab-${a}`,label:e[a],href:"",selected:this._view===a||a==="drives"&&this._view==="drive"||a==="charges"&&this._view==="charge"}))}onTab(t){var e;const a=(e=t.detail)==null?void 0:e.id,s=a==="tab-drives"?"drives":a==="tab-charges"?"charges":a==="tab-stats"?"stats":"status";this.open(s)}blockLink(t){t.composedPath().some(e=>e instanceof HTMLAnchorElement)&&t.preventDefault()}onChip(t){var e;const a=(e=t.detail)==null?void 0:e.id;if(this._view==="stats"){(a==="week"||a==="month"||a==="year")&&this.setPeriod(a);return}(a==="7d"||a==="30d"||a==="year"||a==="all")&&this._range!==a&&(this._range=a,this._page=1,this._drives=void 0,this._charges=void 0,this._rangeStats=void 0,this._rangeStatsKey="",this.ensureView())}open(t){this._error="",this._view=t,t!=="drive"&&(this._driveId=void 0,this._detail=void 0),t!=="charge"&&(this._chargeId=void 0,this._charge=void 0),this.ensureVisibleView()}body(){return this._view==="drive"?this.driveDetail():this._view==="charge"?this.chargeDetail():this._view==="drives"?this.driveList():this._view==="charges"?this.chargeList():this._view==="stats"?this.statsPanel():this.overview()}vehicleData(){var t,e,a;const s=this.flags.status,r={name:this.vehicleName(),model:this.deviceId?(a=(e=(t=this.hass)==null?void 0:t.devices)==null?void 0:e[this.deviceId])==null?void 0:a.model:void 0,activity:this.label("activity"),charging_state:this.label("charging_state"),plugged_in:this.binary("plugged_in"),battery_level:this.numeric("battery_level"),charge_limit_soc:this.numeric("charge_limit"),rated_range_km:this.numeric("rated_range")??this.numeric("estimated_range"),note:this.vehicleNote()};return s?(r.locked=this.binary("lock"),r.inside_temp_c=this.numeric("inside_temp"),r.outside_temp_c=this.numeric("outside_temp"),r.odometer_km=this.numeric("odometer"),r.sentry_mode=this.binary("sentry")===!0?!0:null,r.software_version=this.label("software_version")):r.facts=[],r}vehicleNote(){const t=this.fmt,e=(this.label("activity")||"").toLowerCase(),a=this.locale.toLowerCase().startsWith("fr");if(e==="charging"){const r=[a?"En charge":"Charging"],n=this.numeric("charger_power");n!=null&&n>0&&r.push(t.unit(n,1,"kW"));const o=this.numeric("energy_added");return o!=null&&o>0&&r.push(`+${t.energy(o)}`),r.join(" \xB7 ")}if(e==="driving"){const r=this.numeric("speed");if(r!=null){const n=t.unit(r,0,"km/h");return a?`Roule \xE0 ${n}`:`Driving at ${n}`}}const s=this.numeric("charge_limit");if(s!=null){const r=t.percent(s);return a?`Limite de charge ${r}`:`Charge limit ${r}`}return null}placeDetail(t){var e;const a=this.readings.get("location"),s=a?.attributes.address??((e=this.readings.get("geofence"))==null?void 0:e.attributes.address);if(typeof s!="string")return null;const r=s.trim();return!r||r===t?null:r}updatedAgo(){const t=[...this.readings.values()].flatMap(e=>[e.last_updated,e.last_changed]).filter(e=>typeof e=="string"&&!Number.isNaN(Date.parse(e))).sort().at(-1);return t?this.fmt.ago(t):null}overview(){const t=this.text,e=this.flags.car||this.flags.status,a=this.label("geofence"),s=a||t.unknownPosition,r=this.placeDetail(s),n=this.updatedAgo(),o=this.carPosition()!=null;return u`
      <div class="overview">
        ${e?u`<tl-vehicle-card
              unavailable=${t.carImageUnavailable}
              alt=${this.vehicleName()}
              image-url=${this._carImageUrl&&!this._carImageFailed?this._carImageUrl:g}
              .data=${this.vehicleData()}
            ></tl-vehicle-card>`:g}
        ${this.mapEnabled()?u`<section class="place-card">
              <h2 class="visually-hidden">${t.position}</h2>
              <div class="map-frame">
                <tl-mini-map
                  class="where"
                  .data=${Ke(a?`${t.position} : ${a}`:t.unknownPosition,(this.label("activity")||"")==="driving",o)}
                ></tl-mini-map>
              </div>
              <div class="place-text">
                <p class="place-name">${s}</p>
                ${r?u`<p class="place-detail">${r}</p>`:g}
                ${n?u`<p class="updated">${t.updatedLabel} ${n}</p>`:g}
              </div>
            </section>`:g}
        ${this.flags.drives?u`<tl-recent-card
              title=${t.lastDrive}
              empty=${t.noDrive}
              link-href="#drives"
              link-label=${t.allDrives}
              .data=${this._recentDrive??null}
              @click=${l=>this.onRecent(l,"drive")}
            ></tl-recent-card>`:g}
        ${this.flags.charges?u`<tl-recent-card
              id="derniere-charge"
              title=${t.lastCharge}
              empty=${t.noCharge}
              link-href="#charges"
              link-label=${t.allCharges}
              .data=${this._recentCharge??null}
              @click=${l=>this.onRecent(l,"charge")}
            ></tl-recent-card>`:g}
        ${this._month&&(this.flags.stats||this.flags.totals)?u`<tl-summary-strip
              variant="card"
              title=${t.thisMonthTitle}
              label=${t.thisMonthTitle}
              link-href="#stats"
              link-label=${t.statsLink}
              .data=${this.monthFacts(this._month)}
              @click=${l=>this.onRecent(l,"stats")}
            ></tl-summary-strip>`:g}
      </div>
    `}monthFacts(t){const e=this.fmt,a=dt(t.energy_used_kwh,t.distance_km);return[{label:this.text.distance,value:e.distance(t.distance_km)},{label:this.text.drivesCount,value:e.number(t.drive_count||0,0)},{label:this.text.efficiency,value:a==null?"\u2014":e.unit(a,0,"Wh/km")},{label:this.text.energyCharged,value:e.energy(t.energy_added_kwh)}]}onRecent(t,e){const a=t.composedPath().find(s=>s instanceof HTMLAnchorElement);if(a instanceof HTMLAnchorElement){if(t.preventDefault(),a.classList.contains("text-link")||e==="stats"){this.open(e==="drive"?"drives":e==="charge"?"charges":"stats");return}e==="drive"&&this._recentDrive?this.openDrive(this._recentDrive):e==="charge"&&this._recentCharge&&this.openCharge(this._recentCharge)}}listChips(){const t=this.text;return[{id:"7d",label:t.days7,href:"",current:this._range==="7d"},{id:"30d",label:t.days30,href:"",current:this._range==="30d"},{id:"year",label:t.yearToDate,href:"",current:this._range==="year"},{id:"all",label:t.allTime,href:"",current:this._range==="all"}]}driveList(){const t=this._drives,e=this.dayGroups(t?.data??[]);return u`
      <div class="panel">
        ${this.listToolbar(t)}
        <tl-period-chips label=${this.text.period} .data=${this.listChips()} @tl-change=${this.onChip} @click=${this.blockLink}></tl-period-chips>
        ${this.flags.totals&&this._rangeStats?this.summary(this.driveFacts(this._rangeStats)):g}
        ${e.length?e.map(a=>u`<tl-day-group heading=${a.heading} summary=${this.driveDaySummary(a.items)}>
                ${a.items.map(s=>u`<tl-drive-row .data=${s} @tl-open=${()=>this.openDrive(s)}></tl-drive-row>`)}
              </tl-day-group>`):u`<p class="message">${this.text.emptyDrives}</p>`}
      </div>
    `}chargeList(){const t=this._charges,e=this.dayGroups(t?.data??[]);return u`
      <div class="panel">
        ${this.listToolbar(t)}
        <tl-period-chips label=${this.text.period} .data=${this.listChips()} @tl-change=${this.onChip} @click=${this.blockLink}></tl-period-chips>
        ${this.flags.totals&&this._rangeStats?this.summary(this.chargeFactsFromStats(this._rangeStats)):g}
        ${e.length?e.map(a=>u`<tl-day-group heading=${a.heading} summary=${this.chargeDaySummary(a.items)}>
                ${a.items.map(s=>u`<tl-charge-row .data=${Je(s)} @tl-open=${()=>this.openCharge(s)}></tl-charge-row>`)}
              </tl-day-group>`):u`<p class="message">${this.text.emptyCharges}</p>`}
      </div>
    `}summary(t){return u`<tl-summary-strip variant="strip" label=${this.text.selectionTotals} .data=${t}></tl-summary-strip>`}driveFacts(t){return ei(t,{drives:this.text.drivesCount,distance:this.text.distance,duration:this.text.behindWheel,energy:this.text.energy,efficiency:this.text.efficiency},this.fmt)}chargeFactsFromStats(t){const e=this.fmt;return[{label:this.text.chargesCount,value:e.number(t.charge_count||0,0)},{label:this.text.energyAdded,value:e.energy(t.energy_added_kwh)}]}dayGroups(t){const e=[];for(const a of t){const s=ze(a.start_at,this.dates),r=e[e.length-1];r&&r.key===s.key?r.items.push(a):e.push({key:s.key,heading:s.label,items:[a]})}return e}driveDaySummary(t){const e=t.length,a=this.locale.toLowerCase().startsWith("fr")?e>1?"trajets":"trajet":e>1?"drives":"drive",s=this.fmt;return`${e} ${a} \xB7 ${s.distance(f(t.map(r=>r.distance_km)))} \xB7 ${s.duration(f(t.map(r=>r.duration_s)))}`}chargeDaySummary(t){const e=t.length,a=(this.locale.toLowerCase().startsWith("fr"),e>1?"charges":"charge"),s=f(t.map(r=>r.energy_added_kwh));return`${e} ${a} \xB7 +${this.fmt.energy(s)}`}listToolbar(t){const e=t?.page??this._page,a=t&&t.per_page>0?Math.max(1,Math.ceil(t.total/t.per_page)):1;return u`
      <div class="list-toolbar">
        <div class="toolbar-actions">
          ${this.iconButton("mdi:chevron-left",this.text.previous,!t||e<=1,()=>this.setPage(e-1))}
          ${this.iconButton("mdi:chevron-right",this.text.next,!t||e>=a,()=>this.setPage(e+1))}
          ${this.iconButton("mdi:refresh",this.text.refresh,!1,()=>this.reload())}
        </div>
        <span class="page-indicator">${this.pageIndicator(t)}</span>
      </div>
    `}pageIndicator(t){if(!t||t.total<=0||t.per_page<=0||t.total<=t.per_page)return`${this.text.page} ${t?.page??this._page}`;const e=(t.page-1)*t.per_page+1,a=Math.min(t.page*t.per_page,t.total);return`${e}\u2013${a}`}iconButton(t,e,a,s){return u`
      <ha-icon-button
        .label=${e}
        aria-label=${e}
        title=${e}
        ?disabled=${a}
        @click=${()=>{a||s()}}
      >
        <ha-icon icon=${t}></ha-icon>
      </ha-icon-button>
    `}statsPanel(){const t=this.text,e=[{id:"week",label:t.byWeek,href:"",current:this._period==="week"},{id:"month",label:t.byMonth,href:"",current:this._period==="month"},{id:"year",label:t.byYear,href:"",current:this._period==="year"}],a=this.flags.charts?this.statCharts():[],s=this.flags.totals?this.statsStrip():void 0;return u`
      <div class="panel">
        <tl-period-chips label=${t.period} .data=${e} @tl-change=${this.onChip} @click=${this.blockLink}></tl-period-chips>
        ${s?this.summary(s):g}
        ${a.length?u`<div class="chart-grid">
              ${a.map(r=>u`<tl-chart variant="card" title=${r.title} summary=${r.summary} .data=${r.data}></tl-chart>`)}
            </div>`:g}
        ${this._series&&a.length===0&&!s?u`<p class="message">${t.emptySeries}</p>`:g}
      </div>
    `}statsStrip(){var t;const e=(t=this._series)==null?void 0:t.buckets;return e&&e.length&&this._seriesPeriod===this._period?this.driveFacts({drive_count:f(e.map(a=>a.drive_count)),distance_km:f(e.map(a=>a.distance_km)),drive_duration_s:f(e.map(a=>a.drive_duration_s)),energy_used_kwh:f(e.map(a=>a.energy_used_kwh)),charge_count:0,energy_added_kwh:f(e.map(a=>a.energy_charged_kwh))}):this._stats?this.driveFacts(this._stats):void 0}statCharts(){var t,e,a;const s=this.flags,r=this.text,n=this._seriesPeriod===this._period?((t=this._series)==null?void 0:t.buckets)??[]:[],o=[];if(!s.charts||!n.length)return s.charts&&s.consumption_vs_temp&&(e=this._tempBins)!=null&&e.length&&o.push(this.tempChart(this._tempBins)),o;const l=n.map(c=>Ge(c.start,this._period,this.dates)),h=(c,d,p,m,_,v)=>{o.push({title:c,summary:this.foldSummary(_,d,p,v),data:ct(l,l,[this.series(c,d,p,m,_)])})};if(s.chart_distance&&h(r.distance,"km",0,"accent",n.map(c=>c.distance_km),"total"),s.chart_consumption&&h(r.efficiencyChart,"Wh/km",0,"amber",n.map(c=>c.wh_per_km),"mean"),s.chart_energy){const c=n.map(m=>m.ac_energy_kwh),d=n.map(m=>m.dc_energy_kwh),p=this.locale.toLowerCase().startsWith("fr");o.push({title:r.energyCharged,summary:`${this.fmt.energy(f(c))} ${p?"en AC":"AC"} \xB7 ${this.fmt.energy(f(d))} ${p?"en DC":"DC"}`,data:ct(l,l,[this.series("AC","kWh",1,"accent",c),this.series("DC","kWh",1,"green",d)],!0)})}return s.charging_split&&h(r.chargeCostChart,"\u20AC",2,"violet",n.map(c=>c.charge_cost),"total"),s.battery_health&&h(r.rangeAtFull,"km",0,"accent",n.map(c=>c.range_at_100_km),"mean"),s.vampire_drain&&h(r.idleLoss,r.perDay,1,"slate",n.map(c=>c.idle_range_loss_km_per_day),"mean"),s.consumption_vs_temp&&(a=this._tempBins)!=null&&a.length&&o.push(this.tempChart(this._tempBins)),o}tempChart(t){const e=this.text,a=t.map(o=>`${o.temp_c_bucket}\xB0`),s=t.map(o=>`${o.temp_c_bucket}\u2013${o.temp_c_bucket+5}\xB0`),r=t.reduce((o,l)=>l.wh_per_km==null||!Number.isFinite(l.wh_per_km)?o:!o||l.wh_per_km<o.wh?{temp:l.temp_c_bucket,wh:l.wh_per_km}:o,null),n=r?`${r.temp}\u2013${r.temp+5}\xB0 \xB7 ${this.fmt.unit(r.wh,0,"Wh/km")}`:e.emptySeries;return{title:e.tempChart,summary:n,data:ct(a,s,[this.series(e.efficiencyChart,"Wh/km",0,"amber",t.map(o=>o.wh_per_km))])}}series(t,e,a,s,r){return{name:t,unit:e,decimals:a,tone:s,values:r.map(n=>b(n))}}foldSummary(t,e,a,s){const r=t.map(c=>b(c)).filter(c=>c!=null);if(!r.length)return this.text.emptySeries;const n=r.reduce((c,d)=>c+d,0),o=s==="mean"?n/r.length:n,l=Math.max(...r),h=this.locale.toLowerCase().startsWith("fr");return`${s==="mean"?h?"Moyenne":"Average":"Total"} ${this.fmt.unit(o,a,e)} \xB7 max ${this.fmt.unit(l,a,e)}`}driveDetail(){const t=this._detail,e=x(this._config),a=this.text;if(!t)return u`<div class="panel">${this.backButton("drives")}</div>`;const s=e.map?qe(t.route):[],r=this.detailDriveFacts(t);return u`
      <div class="panel">
        <div class="detail-head">
          ${this.backButton("drives")}
          <p class="eyebrow">${ot(t.start_at,this.dates)}</p>
        </div>
        ${e.map?s.length?u`<tl-mini-map class="route" .data=${Ye(a.map,s)}></tl-mini-map>`:u`<p class="message">${a.noGps}</p>`:g}
        ${r.length?this.summary(r):g}
        ${this.lineCharts(t.start_at,t.series,[e.speed?["speed_kmh",a.speedChart,"km/h",0,"accent",!1]:null,e.power?["power_kw",a.power,"kW",0,"violet",!0]:null,e.elevation?["elevation_m",a.elevationChart,"m",0,"amber",!1]:null,e.battery?["battery_level",a.batteryChart,"%",0,"green",!1]:null])}
      </div>
    `}detailDriveFacts(t){const e=x(this._config),a=this.fmt,s=[];if(e.distance&&s.push({label:this.text.distance,value:a.distance(t.distance_km??null)}),e.duration&&s.push({label:this.text.duration,value:a.duration(t.duration_s??null)}),e.energy&&s.push({label:this.text.energy,value:a.energy(t.energy_used_kwh??null)}),e.efficiency){const r=dt(t.energy_used_kwh,t.distance_km);s.push({label:this.text.efficiency,value:r==null?"\u2014":a.unit(r,0,"Wh/km")})}return s}chargeDetail(){const t=this.selectedCharge(),e=this.text;if(!t)return u`<div class="panel">${this.backButton("charges")}</div>`;const a=I(this._config),s=this.fmt,r=[];if(a.energy&&r.push({label:e.energyAdded,value:s.energy(t.energy_added_kwh??null)}),a.duration&&r.push({label:e.duration,value:s.duration(t.duration_s??null)}),a.soc){const o=b(t.start_battery_level),l=b(t.end_battery_level),h=o!=null&&l!=null?`${s.number(o,0)} \u2192 ${s.percent(l)}`:s.percent(o??l);r.push({label:e.battery,value:h})}if(a.power&&r.push({label:e.power,value:s.unit(t.max_power_kw??null,0,"kW")}),a.ac_dc){const o=t.is_dc===!0?"DC":t.is_dc===!1?"AC":"\u2014";r.push({label:e.acDcShort,value:o})}a.voltage&&r.push({label:e.voltage,value:s.unit(t.voltage_v??null,0,"V")}),a.cost&&r.push({label:e.cost,value:s.money(t.cost??null)});const n=t.series??[];return u`
      <div class="panel">
        <div class="detail-head">
          ${this.backButton("charges")}
          <p class="eyebrow">${ot(t.start_at,this.dates)}</p>
        </div>
        ${r.length?this.summary(r):g}
        ${a.curve?this.lineCharts(t.start_at,n,[a.power?["power_kw",e.power,"kW",0,"green",!1]:null,a.soc?["battery_level",e.battery,"%",0,"accent",!1]:null]):g}
      </div>
    `}lineCharts(t,e,a){const s=ti(e);if(s.length<2)return u`<p class="message">${this.text.notEnoughPoints}</p>`;const r=new Date(t).getTime(),n=Kt(this.timeZone,new Date(r)),o=s.map(h=>(new Date(h.recorded_at).getTime()-r)/1e3),l=a.flatMap(h=>{if(!h)return[];const[c,d,p,m,_,v]=h,U=s.map(L=>b(L[c]));return U.filter(L=>L!=null).length<2?[]:[{title:d,summary:this.foldSummary(U,p,m,"mean"),data:Xe(r,n,o,[{name:d,unit:p,decimals:m,tone:_,values:U,area:!0,signed:v}])}]});return l.length?u`
      <section>
        <h2>${this.text.telemetry}</h2>
        <p class="hint">${this.text.chartHint}</p>
        ${l.map(h=>u`<tl-chart variant="card" sync="detail" title=${h.title} summary=${h.summary} .data=${h.data}></tl-chart>`)}
      </section>
    `:g}backButton(t){return u`
      <button class="back" type="button" @click=${()=>this.open(t)}>
        <ha-icon icon="mdi:arrow-left"></ha-icon>
        <span class="back-label">${this.text.back}</span>
      </button>
    `}selectedCharge(){var t;return this._charge&&this._charge.id===this._chargeId?this._charge:((t=this._charges)==null?void 0:t.data.find(e=>e.id===this._chargeId))??(this._recentCharge&&this._recentCharge.id===this._chargeId?this._recentCharge:void 0)}openDrive(t){this._driveId=t.id,this._detail=void 0,this._view="drive"}openCharge(t){this._charge=t,this._chargeId=t.id,this._view="charge"}setPeriod(t){this._period!==t&&(this._period=t,this._series=void 0,this._tempBins=void 0,this._seriesPeriod=void 0,this._stats=void 0,this.ensureView())}setPage(t){this._page=t,this._view==="drives"?(this._drives=void 0,this.loadDrives()):this._view==="charges"&&(this._charges=void 0,this.loadCharges())}reload(){this.clearHistory(),this.ensureView()}clearHistory(){this._drives=void 0,this._charges=void 0,this._detail=void 0,this._charge=void 0,this._stats=void 0,this._series=void 0,this._tempBins=void 0,this._seriesPeriod=void 0,this._recentDrive=void 0,this._recentCharge=void 0,this._month=void 0,this._rangeStats=void 0,this._rangeStatsKey="",this._page=1,this._error=""}async ensureView(){this._view==="status"?await this.loadOverview():this._view==="drives"&&this.flags.drives&&!this._drives?await this.loadDrives():this._view==="charges"&&this.flags.charges&&!this._charges?await this.loadCharges():this._view==="stats"&&(this.flags.stats||N(this.flags))?N(this.flags)&&this.seriesStale()?await this.loadSeries():!N(this.flags)&&this.flags.stats&&!this._stats&&await this.loadStats():this._view==="drive"&&this.flags.drives&&this._driveId!=null&&!this._detail&&await this.loadDrive()}async loadOverview(){if(!this.deviceId){this._error=this.text.missingDevice;return}const t=[];this.flags.drives&&this._recentDrive===void 0&&!this._recentDrivePending&&(this._recentDrivePending=!0,t.push(this.fetchRecent("drive"))),this.flags.charges&&this._recentCharge===void 0&&!this._recentChargePending&&(this._recentChargePending=!0,t.push(this.fetchRecent("charge"))),(this.flags.stats||this.flags.totals)&&this._month===void 0&&!this._monthPending&&(this._monthPending=!0,t.push(this.fetchMonth())),await Promise.all(t)}async fetchRecent(t){try{const e=await this.call(t==="drive"?"get_drives":"get_charges",{page:1,per_page:1}),a=ut(e)?e.data[0]??null:null;t==="drive"?this._recentDrive=a:this._recentCharge=a}catch{t==="drive"?this._recentDrive=null:this._recentCharge=null}finally{t==="drive"?this._recentDrivePending=!1:this._recentChargePending=!1}}async fetchMonth(){try{const t=await this.call("get_stats",Ze(this.timeZone));this._month=gt(t)?t:null}catch{this._month=null}finally{this._monthPending=!1}}async loadDrives(){await this.once("drives",()=>this.load(async()=>{const t=await this.call("get_drives",{page:this._page,per_page:k(this._config),...ht(this._range,this.timeZone)});if(!ut(t))throw new Error(this.text.failed);this._drives=t,await this.loadRangeStats()}))}async loadCharges(){await this.once("charges",()=>this.load(async()=>{const t=await this.call("get_charges",{page:this._page,per_page:k(this._config),...ht(this._range,this.timeZone)});if(!ut(t))throw new Error(this.text.failed);this._charges=t,await this.loadRangeStats()}))}async once(t,e){if(!this._inflight.has(t)){this._inflight.add(t);try{await e()}finally{this._inflight.delete(t)}}}async loadRangeStats(){if(!this.flags.totals)return;const t=`${this._range}|${this.timeZone}`;if(!(this._rangeStatsKey===t&&this._rangeStats!==void 0)){try{const e=await this.call("get_stats",ht(this._range,this.timeZone));this._rangeStats=gt(e)?e:null}catch{this._rangeStats=null}this._rangeStatsKey=t}}async loadDrive(){const t=this._driveId;t!=null&&await this.once(`drive:${t}`,()=>this.load(async()=>{const e=await this.call("get_drive",{drive_id:t,max_points:300});if(!si(e))throw new Error(this.text.failed);this._detail=e}))}seriesStale(){const t=this.flags;return!!(this._seriesPeriod!==this._period||Bt(t)&&!this._series||t.consumption_vs_temp&&!this._tempBins)}async loadSeries(){const t=this.flags;if(!N(t))return;const e=this._period,a=Bt(t),s=t.consumption_vs_temp;await this.once(`series:${e}`,()=>this.load(async()=>{if(a){const r=await this.call("get_stats_series",{period:e,count:Gt[e]});if(!ri(r))throw new Error(this.text.failed);this._series=r}if(s)try{this._tempBins=ni(await this.call("get_consumption_by_temp",{period:e,count:Gt[e]}))}catch{this._tempBins=[]}this._seriesPeriod=e}))}async loadStats(){const t=this._period;await this.once(`stats:${t}`,()=>this.load(async()=>{const e=await this.call("get_stats",Jt(t,this.timeZone));if(!gt(e))throw new Error(this.text.failed);this._stats=e}))}async load(t){if(!this.deviceId){this._error=this.text.missingDevice;return}this._loading=!0,this._error="";try{await t()}catch(e){this._error=Ve(e,this.text.failed)}finally{this._loading=!1}}async call(t,e){if(!this.hass||!this.deviceId)throw new Error(this.text.missingDevice);const a=await this.hass.callService("tesla_logger",t,{device_id:this.deviceId,...e},void 0,!1,!0),s=A(a);return s&&"response"in s?s.response:a}async ensureCarImage(){const t=this.flags.car||this.flags.status,e=t?xe(this.readings.values()):null,a=e?`${e.entryId}:${e.vehicleId}`:"";if(!t||!e){this._carImageKey="",this._carImageUrl="",this._carImageFailed=t&&!e;return}if(a===this._carImageKey&&(this._carImageUrl||this._carImageFailed))return;this._carImageGen+=1;const s=this._carImageGen;this._carImageKey=a,this._carImageUrl="",this._carImageFailed=!1;const r=this.hass;if(!(r!=null&&r.callWS)||!r.hassUrl){this._carImageFailed=!0;return}try{const n=await Se(r,e.entryId,e.vehicleId);if(s!==this._carImageGen)return;if(!n){this._carImageFailed=!0;return}this._carImageUrl=n}catch{s===this._carImageGen&&(this._carImageFailed=!0)}}};pt.properties={hass:{attribute:!1},_config:{state:!0},_view:{state:!0},_drives:{state:!0},_charges:{state:!0},_detail:{state:!0},_stats:{state:!0},_series:{state:!0},_tempBins:{state:!0},_period:{state:!0},_range:{state:!0},_page:{state:!0},_loading:{state:!0},_error:{state:!0},_recentDrive:{state:!0},_recentCharge:{state:!0},_month:{state:!0},_rangeStats:{state:!0},_carImageUrl:{state:!0},_carImageFailed:{state:!0}},pt.styles=_t`
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
      overflow: hidden;
      background: var(--tl-ha-map);
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
  `;let te=pt;customElements.get("tesla-logger-card-impl")||customElements.define("tesla-logger-card-impl",te),customElements.get("tesla-logger-card-editor-impl")||customElements.define("tesla-logger-card-editor-impl",Wt);export{te as TeslaLoggerCard,Wt as TeslaLoggerCardEditor};
