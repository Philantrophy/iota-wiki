"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[64013,29514,1755],{18607:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(63366),r=n(67294),l=n(86010),o=n(58122),s=n(51384),i="sidebar_2ahu",c="sidebarItemTitle_2hhb",u="sidebarItemList_2xAf",m="sidebarItem_2UVv",d="sidebarItemLink_1RT6",f="sidebarItemLinkActive_12pM",v=n(54416);function b(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),r.createElement("ul",{className:u},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:m},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var p=["sidebar","toc","children"];var g=function(e){var t=e.sidebar,n=e.toc,s=e.children,i=(0,a.Z)(e,p),c=t&&t.items.length>0;return r.createElement(o.Z,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(b,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),n&&r.createElement("div",{className:"col col--2"},n))))}},31313:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(67294),r=n(18607),l=n(19004),o=n(3978),s="tag_21yA";function i(e){var t=e.letterEntry;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return a.createElement("li",{key:e.permalink,className:s},a.createElement(l.Z,e))}))),a.createElement("hr",null))}var c=function(e){var t=e.tags,n=(0,o.PZ)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return a.createElement(i,{key:e.letter,letterEntry:e})})))};var u=function(e){var t=e.tags,n=e.sidebar,l=(0,o.MA)();return a.createElement(r.Z,{title:l,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},a.createElement("h1",null,l),a.createElement(c,{tags:Object.values(t)}))}},19004:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=n(86010),l=n(51384),o="tag_1Okp",s="tagRegular_3MiF",i="tagWithCount_1HU1";var c=function(e){var t,n=e.permalink,c=e.name,u=e.count;return a.createElement(l.Z,{href:n,className:(0,r.Z)(o,(t={},t[s]=!u,t[i]=u,t))},c,u&&a.createElement("span",null,u))}},15502:function(e,t,n){var a=n(67294).createContext(void 0);t.Z=a},26266:function(e,t,n){var a=n(67294),r=n(15502);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},32577:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(63366),l=n(67294),o=n(86010),s=n(51384),i=n(3978),c=n(51402),u=n(45697),m=n.n(u),d=n(34455);function f(e){var t=e.title,n=e.icon,a=e.url,r=e.backgroundColor;return l.createElement("a",{className:"social__link padding-horiz--sm padding-vert--md",style:{backgroundColor:r},href:a},l.createElement("div",{className:"social__font social__icon"},n),l.createElement("div",{className:"social__title"},t))}f.propTypes={title:m().string,icon:m().string,url:m().string,backgroundColor:m().string};var v=function(){var e=(0,i.LU)().socials;return l.createElement("div",{className:"social"},e&&e.map((function(e,t){return l.createElement(f,(0,a.Z)({key:t},e))})))},b=["to","href","label","prependBaseUrlToHref"];function p(e){var t=e.to,n=e.href,o=e.label,i=e.prependBaseUrlToHref,u=(0,r.Z)(e,b),m=(0,c.Z)(t),d=(0,c.Z)(n,{forcePrependBaseUrl:!0});return l.createElement(s.Z,(0,a.Z)({className:"footer__link-item"},n?{href:i?d:n}:{to:m},u),o)}p.propTypes={to:m().string,href:m().string,label:m().string,prependBaseUrlToHref:m().bool};var g=function(e){var t=e.sources,n=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:n,sources:t})};g.propTypes={sources:m().shape({light:m().string,dark:m().string}),alt:m().string};var h=function(){var e=(0,i.LU)().footer,t=e||{},n=t.copyright,a=t.links,r=void 0===a?[]:a,u=t.logo,m=void 0===u?{}:u,d={light:(0,c.Z)(m.src),dark:(0,c.Z)(m.srcDark||m.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer","padding--none",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links padding-vert--xl"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(p,e))}))):null)}))),(m||n)&&l.createElement("div",{className:"footer__bottom padding-bottom--xl"},m&&(m.src||m.srcDark)&&l.createElement("div",null,m.href?l.createElement(s.Z,{href:m.href},l.createElement(g,{alt:m.alt,sources:d})):l.createElement(g,{alt:m.alt,sources:d})),n?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null)),l.createElement(v,null)):null}},53366:function(e,t,n){n.d(t,{Z:function(){return D}});var a=n(87462),r=n(67294),l=n(86010),o=n(54416),s=n(43101),i=n(45697),c=n.n(i),u=n(3978),m=n(5730),d=(0,r.memo)((function(e){var t=e.className,n=e.styles,a=e.icons,o=e.checked,s=e.disabled,i=e.onChange,c=(0,r.useState)(o),u=c[0],m=c[1],d=(0,r.useState)(!1),f=d[0],v=d[1],b=(0,r.useRef)(null);return r.createElement("div",{className:(0,l.Z)("toggle",t,{"toggle--checked":u,"toggle--focused":f,"toggle--disabled":s}),role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=b.current)?void 0:e.click()}},r.createElement("div",{className:"toggle__icon toggle__icon--unchecked",style:n.unchecked},a.unchecked),r.createElement("div",{className:"toggle__icon toggle__icon--checked",style:n.checked},a.checked),r.createElement("input",{ref:b,checked:u,type:"checkbox",className:"toggle__screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onClick:function(){return m(!u)},onFocus:function(){return v(!0)},onBlur:function(){return v(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=b.current)||t.click())}}))}));function f(e){var t=(0,u.LU)().colorMode.switchConfig,n=t.darkIcon,l=t.darkIconStyle,o=t.lightIcon,s=t.lightIconStyle,i=(0,m.Z)();return r.createElement(d,(0,a.Z)({disabled:!i,styles:{unchecked:s,checked:l},icons:{unchecked:o,checked:n}},e))}d.displayName="ToggleMemo",d.propTypes={className:c().string,styles:c().shape({unchecked:c().any,checked:c().any}),icons:c().shape({unchecked:c().string,checked:c().string}),checked:c().bool,disabled:c().bool,onChange:c().func};var v=n(26266),b=n(98565),p=n(74909),g=n(27213),h=n(57617),_=n(52807),E=n(90974),k=n(3089),N=n(45962),y={toggle:"toggle_2xs0",navbarHideable:"navbarHideable_1VR7",navbarHidden:"navbarHidden_1FmO",navbarSidebarToggle:"navbarSidebarToggle_nWi-"},Z="right";function w(){return(0,u.LU)().navbar.items}function C(){var e=(0,u.LU)().colorMode.disableSwitch,t=(0,v.Z)(),n=t.isDarkTheme,a=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?l():a()}),[a,l]),disabled:e}}function T(e){var t,n=e.sidebarShown,a=e.toggleSidebar,l=null==(t=(0,u.g8)())?void 0:t({toggleSidebar:a}),o=(0,u.D9)(l),s=(0,r.useState)((function(){return!1})),i=s[0],c=s[1];(0,r.useEffect)((function(){l&&!o&&c(!0)}),[l,o]);var m=!!l;return(0,r.useEffect)((function(){m?n||c(!0):c(!1)}),[n,m]),{shown:i,hide:(0,r.useCallback)((function(){c(!1)}),[]),content:l}}function S(e){var t=e.sidebarShown,n=e.toggleSidebar;(0,p.Z)(t);var s=w(),i=C(),c=T({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(E.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!i.disabled&&r.createElement(f,{className:y.navbarSidebarToggle,checked:i.isDarkTheme,onChange:i.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},r.createElement(N.Z,{color:"var(--ifm-color-emphasis-600)",className:y.navbarSidebarCloseSvg}))),r.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":c.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},s.map((function(e,t){return r.createElement(_.Z,(0,a.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},s.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:c.hide},r.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),c.content)))}T.propTypes={sidebarShown:c().bool,toggleSidebar:c().bool},S.propTypes={sidebarShown:c().bool,toggleSidebar:c().func};var D=function(){var e,t=(0,u.LU)().navbar,n=t.hideOnScroll,o=t.style,i=function(){var e=(0,g.Z)(),t="mobile"===e,n=(0,r.useState)(!1),a=n[0],l=n[1];(0,u.Rb)((function(){if(a)return l(!1),!1}));var o=(0,r.useCallback)((function(){l((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&l(!1)}),[e]),{shouldRender:t,toggle:o,shown:a}}(),c=C(),m=(0,h.gA)(),d=(0,b.Z)(n),v=d.navbarRef,p=d.isNavbarVisible,N=w(),T=N.some((function(e){return"search"===e.type})),D=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:Z)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:Z)}))}}(N),x=D.leftItems,I=D.rightItems;return r.createElement("nav",{ref:v,className:(0,l.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":i.shown},e[y.navbarHideable]=n,e[y.navbarHidden]=n&&!p,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},r.createElement(E.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),x.map((function(e,t){return r.createElement(_.Z,(0,a.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},I.map((function(e,t){return r.createElement(_.Z,(0,a.Z)({},e,{key:t}))})),r.createElement("div",{className:"navbar__item navbar__item--dock"},!c.disabled&&r.createElement(f,{className:y.toggle,checked:c.isDarkTheme,onChange:c.toggle}),!T&&r.createElement(s.Z,null),((null==N?void 0:N.length)>0||m)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:i.toggle,onKeyDown:i.toggle},r.createElement(k.Z,null))))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:i.toggle}),i.shouldRender&&r.createElement(S,{sidebarShown:i.shown,toggleSidebar:i.toggle}))}},78358:function(e,t,n){n.d(t,{O:function(){return g}});var a=n(87462),r=n(63366),l=n(67294),o=n(86010),s=n(45697),i=n.n(s),c=n(51384),u=n(51402),m=n(78168),d=n(71699),f=["activeBasePath","activeBaseRegex","to","href","label","sublabel","icon","activeClassName","prependBaseUrlToHref"],v=["className","isDropdownItem"],b=["className"],p=["mobile","to","label"];function g(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,s=e.href,i=e.label,v=e.sublabel,b=e.icon,p=e.activeClassName,g=void 0===p?"navbar__link--active":p,h=e.prependBaseUrlToHref,_=(0,r.Z)(e,f),E=(0,u.Z)(o),k=(0,u.Z)(t),N=(0,u.Z)(s,{forcePrependBaseUrl:!0}),y=i&&s&&!(0,d.Z)(s),Z="dropdown__link--active"===g;return l.createElement(c.Z,(0,a.Z)({},s?{href:h?N:s}:Object.assign({isNavLink:!0,activeClassName:g,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(k)}}:null),_),l.createElement("div",{className:"link"},b&&l.createElement("div",{className:"link__icon"},b),l.createElement("div",{className:"link__body"},l.createElement("div",{className:"link__label"},y?l.createElement("span",null,i,l.createElement(m.Z,Z&&{width:12,height:12})):i),v&&l.createElement("div",{className:"link__sublabel"},v))))}function h(e){var t=e.className,n=e.isDropdownItem,s=void 0!==n&&n,i=(0,r.Z)(e,v),c=l.createElement(g,(0,a.Z)({className:(0,o.Z)(s?"dropdown__link":"navbar__item navbar__link",t)},i));return s?l.createElement("li",null,c):c}function _(e){var t=e.className,n=(0,r.Z)(e,b);return delete n.isDropdownItem,l.createElement("li",{className:"menu__list-item"},l.createElement(g,(0,a.Z)({className:(0,o.Z)("menu__link",t)},n)))}function E(e){var t=e.mobile,n=void 0!==t&&t,o=e.to,s=e.label,i=(0,r.Z)(e,p);if(delete i.position,"category-header"===o){return l.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},s)}var c=n?_:h;return l.createElement(c,(0,a.Z)({to:o,label:s},i))}g.propTypes={activeBasePath:i().string,activeBaseRegex:i().string,to:i().string,href:i().string,label:i().string,sublabel:i().string,icon:i().string,activeClassName:i().string,prependBaseUrlToHref:i().bool},g.defaultProps={activeClassName:"navbar__link--active"},h.propTypes={className:i().string,isDropdownItem:i().bool},h.defaultProps={isDropdownItem:!1},_.propTypes={className:i().string},E.propTypes={mobile:i().bool,to:i().string,label:i().string},E.defaultProps={mobile:!1},t.Z=E},61142:function(e,t,n){var a=n(87462),r=n(63366),l=n(67294),o=n(86010),s=n(45697),i=n.n(s),c=n(3978),u=n(78358),m=n(52807),d=["items","position","className"],f=["items","className"],v=["mobile"];function b(e,t){return!!(0,c.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function p(e){var t,n=e.items,s=e.position,i=e.className,f=(0,r.Z)(e,d),v=(0,l.useRef)(null),p=(0,l.useRef)(null),g=(0,l.useState)(!1),h=g[0],_=g[1],E=function(e,t,n){var a=t.filter((function(e){return b(e,n)}));return a.length?Object.assign({},a[0],{label:e.label+" > "+a[0].label}):e}(f,n,(0,c.be)());return(0,l.useEffect)((function(){var e=function(e){v.current&&!v.current.contains(e.target)&&_(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[v]),l.createElement("div",{ref:v,className:(0,o.Z)("dropdown","dropdown--hoverable",{"dropdown--right":"right"===s,"dropdown--show":h})},l.createElement(u.O,(0,a.Z)({className:(0,o.Z)("navbar__item navbar__link",i)},E,{onClick:f.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),_(!h))}}),null!=(t=f.children)?t:f.label),l.createElement("ul",{ref:p,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(m.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),_(!1);var a=v.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function g(e){var t,n=e.items,s=e.className,i=(0,r.Z)(e,f);delete i.position;var d=(0,c.be)(),v=function(e,t){return e.some((function(e){return b(e,t)}))}(n,d),p=(0,c.uR)({initialState:function(){return!v}}),g=p.collapsed,h=p.toggleCollapsed,_=p.setCollapsed;return(0,l.useEffect)((function(){v&&_(!v)}),[d,v]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":g})},l.createElement(u.O,(0,a.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",s)},i,{onClick:function(e){e.preventDefault(),h()}}),null!=(t=i.children)?t:i.label),l.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return l.createElement(m.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:i.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function h(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,v);delete a.isDropdownItem;var o=n?g:p;return l.createElement(o,a)}p.propTypes=Object.assign({items:i().array,position:i().string,className:i().string},u.O.propTypes),g.propTypes=Object.assign({items:i().array,className:i().string},u.O.propTypes),h.propTypes={mobile:i().bool},h.defaultProps={mobile:!1},t.Z=h},52807:function(e,t,n){n.d(t,{Z:function(){return R}});var a=n(87462),r=n(63366),l=n(67294),o=n(45697),s=n.n(o),i=n(78358),c=n(61142),u=n(86010),m=n(3978),d=n(98565),f=["items","label","className"],v=["className","to","href","label"],b=["items_","layout","position","className"],p=["items_","className"],g=["mobile"];function h(e,t){return!!(0,m.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||e.activeBasePath&&t.startsWith(e.activeBasePath))}function _(e,t){return e.some((function(e){return h(e,t)}))}function E(e){var t,n=e.items,a=e.label,l=e.className,o=(0,r.Z)(e,f),s={items:[],index:0};n?(a&&s.items.push({label:a,className:l}),(t=s.items).push.apply(t,n)):s.items.push(Object.assign({label:a,className:l},o));return s}function k(e){var t=e.className,n=e.to,o=e.href,s=e.label,c=(0,r.Z)(e,v);if(n||o)return l.createElement(i.O,(0,a.Z)({className:(0,u.Z)("dropdown__link",t),activeClassName:"dropdown__link--active",to:n,href:o,label:s},c));if(s)return l.createElement("div",{className:"dropdown__label"},s);throw"Mega dropdown item must be a link or a category header."}function N(e){var t=[];return e.map((function(e){e.items.map((function(e){t.push(e)}))})),t}function y(e,t,n){var a=t.filter((function(e){return h(e,n)}));return a.length?{activeBaseRegex:a[0].activeBaseRegex,label:e.label+" | "+a[0].label}:e}function Z(e){var t,n=e.items_,o=e.layout,s=e.position,c=e.className,f=(0,r.Z)(e,b),v=(0,m.be)(),p=(0,l.useRef)(null),g=(0,l.useState)(!1),h=g[0],Z=g[1],w=(0,m.LU)().navbar.hideOnScroll,C=(0,d.Z)(w).isNavbarVisible,T=n.map(E),S=N(n),D=y(f,S,(0,m.be)()),x=_(S,v),I=o.length,B=Math.max.apply(Math,o.map((function(e){return e.split(/\s+/).length}))),R=[];o.forEach((function(e,t){e.split(/\s+/).forEach((function(e,n){e&&"."!==e&&(R[t+n*I]=e)}))}));for(var L=R.map((function(e){var t,n=T[e];if(n)return null!=(t=n.items[n.index++])?t:null})),O=[],P=null,M=0;M<I;M++){for(var U=[],A=0;A<B;A++){var H=L[M+A*I];U.push(H),H&&(P=H)}O.push(U)}return P.onKeyDown=function(e){"Tab"===e.key&&Z(!1)},(0,l.useEffect)((function(){C||Z(!1)}),[C]),(0,l.useEffect)((function(){var e=function(e){p.current&&!p.current.contains(e.target)&&Z(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[p]),l.createElement("div",{ref:p,className:(0,u.Z)("dropdown","dropdown--hoverable","dropdown--mega",{"dropdown--right":"right"===s,"dropdown--show":h}),onMouseLeave:function(){return Z(!1)}},l.createElement(i.O,(0,a.Z)({className:(0,u.Z)("navbar__item navbar__link",c,{"navbar__link--active":x})},D,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),Z(!h))},onMouseEnter:function(){return Z(!0)}}),null!=(t=f.children)?t:f.label),l.createElement("div",{className:"dropdown__container"},l.createElement("div",{className:"dropdown__menu"},O.map((function(e,t){return l.createElement("div",{className:"row row--no-gutters dropdown__row",key:t},e.map((function(e,t){return l.createElement("div",{className:"col margin-horiz--xs dropdown__col",key:t},e?l.createElement(k,e):null)})))})))))}function w(e){var t=e.items_,n=e.className,o=(0,r.Z)(e,p);delete o.position,delete o.layout;var s=(0,m.be)(),c=N(t),d=y(o,c,(0,m.be)()),f=_(c,s),v=(0,m.uR)({initialState:function(){return!f}}),b=v.collapsed,g=v.toggleCollapsed,h=v.setCollapsed;return(0,l.useEffect)((function(){f&&h(!f)}),[s,f]),l.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":b})},l.createElement(i.O,(0,a.Z)({role:"button",className:(0,u.Z)("menu__link menu__link--sublist",n)},o,{onClick:function(e){e.preventDefault(),g()}}),d),l.createElement(m.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},t.map((function(e,t){return l.createElement(R,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:o.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function C(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,g),o=n?w:Z;return l.createElement(o,a)}k.propTypes={className:s().string,to:s().string,href:s().string,label:s().string},Z.propTypes=Object.assign({items_:s().array,layout:s().arrayOf(s().string),position:s().string,className:s().string},i.O.propTypes),w.propTypes=Object.assign({items_:s().array,className:s().string},i.O.propTypes),C.propTypes={mobile:s().bool},C.defaultProps={mobile:!1};var T=C,S=n(36508),D=n(62437),x=["type","items","layout"],I={default:function(){return i.Z},localeDropdown:function(){return S.Z},search:function(){return D.Z},dropdown:function(){return c.Z},megaDropdown:function(){return T},docsVersion:function(){return n(39693).Z},docsVersionDropdown:function(){return n(74493).Z},doc:function(){return n(36673).Z}};function B(e){var t=e.type,n=e.items,o=e.layout,s=(0,r.Z)(e,x),i=function(e,t,n){return n?"megaDropdown":e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n,void 0!==o),c=function(e){var t=I[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(i);return l.createElement(c,(0,a.Z)({items:n,layout:o},s))}B.propTypes={type:s().string,items:s().array,layout:s().arrayOf(s().string)};var R=B},43101:function(e,t,n){var a=n(87462),r=n(63366),l=n(67294),o=n(73935),s=n(6832),i=n(5977),c=n(51402),u=n(51384),m=n(9932),d=n(53158),f=n(57052),v=n(16747),b=n(59524),p=n(54416),g=n(45697),h=n.n(g),_=["contextualSearch"],E=null;function k(e){var t=e.hit,n=e.children;return l.createElement(u.Z,{to:t.url},n)}function N(e){var t=e.state,n=e.onClose,a=(0,d.Z)().generateSearchPageLink;return l.createElement(u.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function y(e){var t,u,d=e.contextualSearch,g=(0,r.Z)(e,_),h=(0,s.Z)().siteMetadata,y=(0,b.Z)(),Z=null!=(t=null==(u=g.searchParameters)?void 0:u.facetFilters)?t:[],w=d?[].concat(y,Z):Z,C=Object.assign({},g.searchParameters,{facetFilters:w}),T=(0,c.C)().withBaseUrl,S=(0,i.k6)(),D=(0,l.useRef)(null),x=(0,l.useRef)(null),I=(0,l.useState)(!1),B=I[0],R=I[1],L=(0,l.useState)(null),O=L[0],P=L[1],M=(0,l.useCallback)((function(){return E?Promise.resolve():Promise.all([n.e(44300).then(n.bind(n,44300)),Promise.all([n.e(40532),n.e(46945)]).then(n.bind(n,46945)),Promise.all([n.e(40532),n.e(69393)]).then(n.bind(n,69393))]).then((function(e){var t=e[0].DocSearchModal;E=t}))}),[]),U=(0,l.useCallback)((function(){M().then((function(){D.current=document.createElement("div"),document.body.insertBefore(D.current,document.body.firstChild),R(!0)}))}),[M,R]),A=(0,l.useCallback)((function(){R(!1),D.current.remove()}),[R]),H=(0,l.useCallback)((function(e){M().then((function(){R(!0),P(e.key)}))}),[M,R,P]),F=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;S.push(t)}}).current,j=(0,l.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:T(""+t.pathname+t.hash)})}))})).current,V=(0,l.useMemo)((function(){return function(e){return l.createElement(N,(0,a.Z)({},e,{onClose:A}))}}),[A]);V.displayName="resultsFooterComponent";var z=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",h.docusaurusVersion),e}),[h.docusaurusVersion]);(0,f.D)({isOpen:B,onOpen:U,onClose:A,onInput:H,searchButtonRef:x});var K=(0,p.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(m.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+g.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement("div",null,l.createElement(v.a,{onTouchStart:M,onFocus:M,onMouseOver:M,onClick:U,ref:x,translations:{buttonText:K,buttonAriaLabel:K}})),B&&(0,o.createPortal)(l.createElement(E,(0,a.Z)({onClose:A,initialScrollY:window.scrollY,initialQuery:O,navigator:F,transformItems:j,hitComponent:k,resultsFooterComponent:V,transformSearchClient:z},g,{searchParameters:C})),D.current))}k.propTypes={hit:h().node,children:h().node},N.propTypes={state:h().node,onClose:h().func},t.Z=function(){var e=(0,s.Z)().siteConfig;return l.createElement(y,e.themeConfig.algolia)}}}]);