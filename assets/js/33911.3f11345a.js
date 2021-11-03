"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33911],{16747:function(e,t,n){n.d(t,{a:function(){return u}});var r=n(67294);function a(){return r.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var o=n(20830);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l="Ctrl";var u=r.forwardRef((function(e,t){var n=e.translations,u=void 0===n?{}:n,s=c(e,["translations"]),d=u.buttonText,m=void 0===d?"Search":d,f=u.buttonAriaLabel,v=void 0===f?"Search":f,h=(0,r.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":l:null}),[]);return r.createElement("button",i({type:"button",className:"DocSearch DocSearch-Button","aria-label":v},s,{ref:t}),r.createElement("span",{className:"DocSearch-Button-Container"},r.createElement(o.W,null),r.createElement("span",{className:"DocSearch-Button-Placeholder"},m)),r.createElement("span",{className:"DocSearch-Button-Keys"},null!==h&&r.createElement(r.Fragment,null,r.createElement("span",{className:"DocSearch-Button-Key"},h===l?r.createElement(a,null):h),r.createElement("span",{className:"DocSearch-Button-Key"},"K"))))}))},20830:function(e,t,n){n.d(t,{W:function(){return a}});var r=n(67294);function a(){return r.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},57052:function(e,t,n){n.d(t,{D:function(){return a}});var r=n(67294);function a(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,o=e.onInput,i=e.searchButtonRef;r.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),i&&i.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,o,i])}},51384:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(63366),a=n(67294),o=n(73727),i=n(6832),c=n(71699),l=n(19901),u=(0,a.createContext)({collectLink:function(){}}),s=n(51402),d=n(79861),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,v=e.to,h=e.href,g=e.activeClassName,p=e.isActive,b=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,w=void 0===E||E,k=(0,r.Z)(e,m),Z=(0,i.Z)().siteConfig,y=Z.trailingSlash,C=Z.baseUrl,L=(0,s.C)().withBaseUrl,N=(0,a.useContext)(u),S=v||h,I=(0,c.Z)(S),_=null==S?void 0:S.replace("pathname://",""),A=void 0!==_?(n=_,w&&function(e){return e.startsWith("/")}(n)?L(n):n):void 0;A&&I&&(A=(0,d.applyTrailingSlash)(A,{trailingSlash:y,baseUrl:C}));var B=(0,a.useRef)(!1),M=f?o.OL:o.rU,D=l.Z.canUseIntersectionObserver,T=(0,a.useRef)();(0,a.useEffect)((function(){return!D&&I&&null!=A&&window.docusaurus.prefetch(A),function(){D&&T.current&&T.current.disconnect()}}),[T,A,D,I]);var U=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,P=!A||!I||U;return A&&I&&!U&&!b&&N.collectLink(A),P?a.createElement("a",Object.assign({href:A},S&&!I&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(M,Object.assign({},k,{onMouseEnter:function(){B.current||null==A||(window.docusaurus.preload(A),B.current=!0)},innerRef:function(e){var t,n;D&&e&&I&&(t=e,n=function(){null!=A&&window.docusaurus.prefetch(A)},T.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.current.unobserve(t),T.current.disconnect(),n())}))})),T.current.observe(t))},to:A||""},f&&{isActive:p,activeClassName:g}))}},71699:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},51402:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(6832),a=n(71699);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},45962:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(87462),a=n(63366),o=n(67294),i=["width","height","color","strokeWidth","className"];function c(e){var t=e.width,n=void 0===t?21:t,c=e.height,l=void 0===c?21:c,u=e.color,s=void 0===u?"currentColor":u,d=e.strokeWidth,m=void 0===d?1.2:d,f=(e.className,(0,a.Z)(e,i));return o.createElement("svg",(0,r.Z)({viewBox:"0 0 15 15",width:n,height:l},f),o.createElement("g",{stroke:s,strokeWidth:m},o.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})))}},78168:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a="iconExternalLink_3J9K",o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,i=void 0===o?13.5:o;return r.createElement("svg",{width:n,height:i,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},3089:function(e,t,n){var r=n(87462),a=n(63366),o=n(67294),i=["width","height","className"];t.Z=function(e){var t=e.width,n=void 0===t?30:t,c=e.height,l=void 0===c?30:c,u=e.className,s=(0,a.Z)(e,i);return o.createElement("svg",(0,r.Z)({className:u,width:n,height:l,viewBox:"0 0 30 30","aria-hidden":"true"},s),o.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},58122:function(e,t,n){n.d(t,{Z:function(){return V}});var r=n(67294),a=n(86010),o=n(5977),i=n(54416),c=n(3978),l="skipToContent_1oUP";function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null),t=(0,o.k6)().action;return(0,c.SL)((function(n){var r=n.location;e.current&&!r.hash&&"PUSH"===t&&u(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:l,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.createElement(i.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},d=n(45962),m="announcementBar_3WsW",f="announcementBarPlaceholder_2m9F",v="announcementBarClose_38nx",h="announcementBarContent_3EUC";var g=function(){var e=(0,c.nT)(),t=e.isActive,n=e.close,o=(0,c.LU)().announcementBar;if(!t)return null;var l=o.content,u=o.backgroundColor,s=o.textColor,g=o.isCloseable;return r.createElement("div",{className:m,style:{backgroundColor:u,color:s},role:"banner"},g&&r.createElement("div",{className:f}),r.createElement("div",{className:h,dangerouslySetInnerHTML:{__html:l}}),g?r.createElement("button",{type:"button",className:(0,a.Z)("clean-btn close",v),onClick:n,"aria-label":(0,i.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement(d.Z,{width:14,height:14,strokeWidth:3.1})):null)},p=n(53366),b=n(32577),E=n(19901),w=(0,c.WA)("theme"),k="light",Z="dark",y=function(e){return e===Z?Z:k},C=function(e){(0,c.WA)("theme").set(y(e))},L=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return E.Z.canUseDOM?y(document.documentElement.getAttribute("data-theme")):y(e)}(t)),i=o[0],l=o[1],u=(0,r.useCallback)((function(){l(k),C(k)}),[]),s=(0,r.useCallback)((function(){l(Z),C(Z)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",y(i))}),[i]),(0,r.useEffect)((function(){if(!n)try{var e=w.get();null!==e&&l(y(e))}catch(t){console.error(t)}}),[n,l]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;l(t?Z:k)}))}),[n,a]),{isDarkTheme:i===Z,setLightTheme:u,setDarkTheme:s}},N=n(15502);var S=function(e){var t=L(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(N.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},I="docusaurus.tab.",_=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith(I)){var n=t.substring(I.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},A=n(54179);var B=function(e){var t=_(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(A.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function M(e){var t=e.children;return r.createElement(S,null,r.createElement(c.pl,null,r.createElement(B,null,r.createElement(c.OC,null,r.createElement(c.L5,null,r.createElement(c.Cn,null,t))))))}var D=n(87462),T=n(9932),U=n(6832),P=n(51402);function O(e){var t=e.locale,n=e.version,a=e.tag,o=t;return r.createElement(T.Z,null,o&&r.createElement("meta",{name:"docsearch:language",content:o}),n&&r.createElement("meta",{name:"docsearch:version",content:n}),a&&r.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var W=n(37027);function j(){var e=(0,U.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,c.l5)();return r.createElement(T.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function x(e){var t=e.permalink,n=(0,U.Z)().siteConfig.url,a=function(){var e=(0,U.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,P.Z)(t)}(),i=t?""+n+t:a;return r.createElement(T.Z,null,r.createElement("meta",{property:"og:url",content:i}),r.createElement("link",{rel:"canonical",href:i}))}function R(e){var t=(0,U.Z)(),n=t.siteConfig.favicon,a=t.i18n,o=a.currentLocale,i=a.localeConfigs,l=(0,c.LU)(),u=l.metadatas,s=l.image,d=e.title,m=e.description,f=e.image,v=e.keywords,h=e.searchMetadatas,g=(0,P.Z)(n),p=(0,c.pe)(d),b=o,E=i[o].direction;return r.createElement(r.Fragment,null,r.createElement(T.Z,null,r.createElement("html",{lang:b,dir:E}),n&&r.createElement("link",{rel:"shortcut icon",href:g}),r.createElement("title",null,p),r.createElement("meta",{property:"og:title",content:p}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),s&&r.createElement(W.Z,{image:s}),f&&r.createElement(W.Z,{image:f}),r.createElement(W.Z,{description:m,keywords:v}),r.createElement(x,null),r.createElement(j,null),r.createElement(O,(0,D.Z)({tag:c.HX,locale:o},h)),r.createElement(T.Z,null,u.map((function(e,t){return r.createElement("meta",(0,D.Z)({key:"metadata_"+t},e))}))))}var z=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var V=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,i=e.pageClassName;return z(),r.createElement(M,null,r.createElement(R,e),r.createElement(s,null),r.createElement(g,null),r.createElement(p.Z,null),r.createElement("div",{className:(0,a.Z)(c.kM.wrapper.main,o,i)},t),!n&&r.createElement(b.Z,null))}},90974:function(e,t,n){var r=n(87462),a=n(63366),o=n(67294),i=n(51384),c=n(34455),l=n(51402),u=n(6832),s=n(3978),d=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,u.Z)().siteConfig.title,n=(0,s.LU)().navbar,m=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,g=e.titleClassName,p=(0,a.Z)(e,d),b=(0,l.Z)(v.href||"/"),E={light:(0,l.Z)(v.src),dark:(0,l.Z)(v.srcDark||v.src)},w=o.createElement(c.Z,{sources:E,alt:v.alt||m||t});return o.createElement(i.Z,(0,r.Z)({to:b},p,v.target&&{target:v.target}),v.src&&(h?o.createElement("div",{className:h},w):o.createElement(o.Fragment,null,w)),null!=m&&o.createElement("b",{className:g},m))}},36673:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(63366),o=n(67294),i=n(78358),c=n(57617),l=n(86010);n(61142),n(36508),n(62437);var u=n(3978),s=n(79861),d=["docId","label","docsPluginId"];function m(e){var t,n=e.docId,m=e.label,f=e.docsPluginId,v=(0,a.Z)(e,d),h=(0,c.Iw)(f),g=h.activeVersion,p=h.activeDoc,b=(0,u.J)(f).preferredVersion,E=(0,c.yW)(f),w=function(e,t){var n=e.flatMap((function(e){return e.docs})),r=n.find((function(e){return e.id===t}));if(!r){var a=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return r}((0,s.uniq)([g,b,E].filter(Boolean)),n),k=v.mobile?"menu__link--active":"navbar__link--active";return o.createElement(i.Z,(0,r.Z)({exact:!0},v,{className:(0,l.Z)(v.className,(t={},t[k]=(null==p?void 0:p.sidebar)&&p.sidebar===w.sidebar,t)),activeClassName:k,label:null!=m?m:w.id,to:w.path}))}},74493:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(87462),a=n(63366),o=n(67294),i=n(78358),c=n(61142),l=n(57617),u=n(3978),s=n(54416),d=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],m=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,h=e.dropdownActiveClassDisabled,g=e.dropdownItemsBefore,p=e.dropdownItemsAfter,b=(0,a.Z)(e,d),E=(0,l.Iw)(v),w=(0,l.gB)(v),k=(0,l.yW)(v),Z=(0,u.J)(v),y=Z.preferredVersion,C=Z.savePreferredVersionName;var L,N=(L=w.map((function(e){var t=(null==E?void 0:E.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==E?void 0:E.activeVersion)},onClick:function(){C(e.name)}}})),[].concat(g,L,p)),S=null!=(t=null!=(n=E.activeVersion)?n:y)?t:k,I=f&&N?(0,s.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):S.label,_=f&&N?void 0:m(S).path;return N.length<=1?o.createElement(i.Z,(0,r.Z)({},b,{mobile:f,label:I,to:_,isActive:h?function(){return!1}:void 0})):o.createElement(c.Z,(0,r.Z)({},b,{mobile:f,label:I,to:_,items:N,isActive:h?function(){return!1}:void 0}))}},39693:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(87462),a=n(63366),o=n(67294),i=n(78358),c=n(57617),l=n(3978),u=["label","to","docsPluginId"];function s(e){var t,n=e.label,s=e.to,d=e.docsPluginId,m=(0,a.Z)(e,u),f=(0,c.zu)(d),v=(0,l.J)(d).preferredVersion,h=(0,c.yW)(d),g=null!=(t=null!=f?f:v)?t:h,p=null!=n?n:g.label,b=null!=s?s:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return o.createElement(i.Z,(0,r.Z)({},m,{label:p,to:b}))}},36508:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(87462),a=n(63366),o=n(67294),i=n(61142),c=["width","height"],l=function(e){var t=e.width,n=void 0===t?20:t,i=e.height,l=void 0===i?20:i,u=(0,a.Z)(e,c);return o.createElement("svg",(0,r.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},u),o.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},u=n(6832),s=n(3978),d="iconLanguage_3vod",m=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function f(e){var t=e.mobile,n=e.dropdownItemsBefore,c=e.dropdownItemsAfter,f=(0,a.Z)(e,m),v=(0,u.Z)().i18n,h=v.currentLocale,g=v.locales,p=v.localeConfigs,b=(0,s.l5)();function E(e){return p[e].label}var w=g.map((function(e){var t="pathname://"+b.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:E(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),k=[].concat(n,w,c),Z=t?"Languages":E(h);return o.createElement(i.Z,(0,r.Z)({},f,{href:"#",mobile:t,label:o.createElement("span",null,o.createElement(l,{className:d}),o.createElement("span",null,Z)),items:k}))}},62437:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(43101);function o(e){return e.mobile?null:r.createElement(a.Z,null)}},37027:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(9932),o=n(3978),i=n(51402);function c(e){var t=e.title,n=e.description,c=e.keywords,l=e.image,u=e.children,s=(0,o.pe)(t),d=(0,i.C)().withBaseUrl,m=l?d(l,{absolute:!0}):void 0;return r.createElement(a.Z,null,t&&r.createElement("title",null,s),t&&r.createElement("meta",{property:"og:title",content:s}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),c&&r.createElement("meta",{name:"keywords",content:Array.isArray(c)?c.join(","):c}),m&&r.createElement("meta",{property:"og:image",content:m}),m&&r.createElement("meta",{name:"twitter:image",content:m}),u)}},34455:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(87462),a=n(63366),o=n(67294),i=n(86010),c=n(5730),l=n(26266),u={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},s=["sources","className","alt"],d=function(e){var t=(0,c.Z)(),n=(0,l.Z)().isDarkTheme,d=e.sources,m=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,s),g=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,g.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:d[e],alt:v,className:(0,i.Z)(u.themedImage,u["themedImage--"+e],m)},h))})))}},54179:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},98565:function(e,t,n){var r=n(67294),a=n(3978);t.Z=function(e){var t=(0,r.useState)(e),n=t[0],o=t[1],i=(0,r.useRef)(!1),c=(0,r.useRef)(0),l=(0,r.useCallback)((function(e){null!==e&&(c.current=e.getBoundingClientRect().height)}),[]);return(0,a.RF)((function(t,n){if(e){var r=t.scrollY;if(r<c.current)o(!0);else if(i.current)i.current=!1;else{var a=null==n?void 0:n.scrollY,l=document.documentElement.scrollHeight-c.current,u=window.innerHeight;a&&r>=a?o(!1):r+u<l&&o(!0)}}})),(0,a.SL)((function(t){if(e)return t.location.hash?(i.current=!0,void o(!1)):void o(!0)})),{navbarRef:l,isNavbarVisible:n}}},74909:function(e,t,n){var r=n(67294);t.Z=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},27213:function(e,t,n){var r=n(67294),a=n(19901),o="desktop",i="mobile",c="ssr";function l(){return a.Z.canUseDOM?window.innerWidth>996?o:i:c}t.Z=function(){var e=(0,r.useState)((function(){return l()})),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n(l())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},59524:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(57617),a=n(3978),o=n(6832);function i(){var e=function(){var e=(0,o.Z)().i18n,t=(0,r._r)(),n=(0,r.WS)(),i=(0,a.Oh)(),c=[a.HX].concat(Object.keys(t).map((function(e){var r,o,c=(null==n||null==(r=n.activePlugin)?void 0:r.pluginId)===e?n.activeVersion:void 0,l=i[e],u=t[e].versions.find((function(e){return e.isLast})),s=null!=(o=null!=c?c:l)?o:u;return(0,a.os)(e,s.name)})));return{locale:e.currentLocale,tags:c}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}},53158:function(e,t,n){var r=n(5977),a=n(6832),o=n(67294);t.Z=function(){var e=(0,r.k6)(),t=(0,a.Z)().siteConfig.baseUrl,n=(0,o.useState)(""),i=n[0],c=n[1];return(0,o.useEffect)((function(){var e,t=null!=(e=new URLSearchParams(window.location.search).get("q"))?e:"";c(t)}),[]),{searchQuery:i,setSearchQuery:(0,o.useCallback)((function(t){var n=new URLSearchParams(window.location.search);t?n.set("q",t):n.delete("q"),e.replace({search:n.toString()}),c(t)}),[e]),generateSearchPageLink:(0,o.useCallback)((function(e){return t+"search?q="+encodeURIComponent(e)}),[t])}}},54357:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,o=e.split(/[#?]/)[0],i="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,i)}},79861:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(54357);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(45479);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},45479:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);