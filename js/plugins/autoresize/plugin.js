/**
 * TinyMCE version 6.0.1 (2022-03-23)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.Env");const o=e=>t=>t.options.get(e),n=o("min_height"),s=o("max_height"),i=o("autoresize_overflow_padding"),r=o("autoresize_bottom_margin"),l=(e,t)=>{const o=e.getBody();o&&(o.style.overflowY=t?"":"hidden",t||(o.scrollTop=0))},a=(e,t,o,n)=>{const s=parseInt(e.getStyle(t,o,n),10);return isNaN(s)?0:s},g=(e,o,i)=>{var c;const u=e.dom,d=e.getDoc();if(!d)return;if((e=>e.plugins.fullscreen&&e.plugins.fullscreen.isFullscreen())(e))return void l(e,!0);const f=d.documentElement,m=r(e),p=null!==(c=n(e))&&void 0!==c?c:e.getElement().offsetHeight;let h=p;const y=a(u,f,"margin-top",!0),v=a(u,f,"margin-bottom",!0);let C=f.offsetHeight+y+v+m;C<0&&(C=0);const S=e.getContainer().offsetHeight-e.getContentAreaContainer().offsetHeight;C+S>p&&(h=C+S);const z=s(e);if(z&&h>z?(h=z,l(e,!0)):l(e,!1),h!==o.get()){const n=h-o.get();if(u.setStyle(e.getContainer(),"height",h+"px"),o.set(h),(e=>{e.dispatch("ResizeEditor")})(e),t.browser.isSafari()&&(t.os.isMacOS()||t.os.isiOS())){const t=e.getWin();t.scrollTo(t.pageXOffset,t.pageYOffset)}e.hasFocus()&&(e=>{if("setcontent"===(null==e?void 0:e.type.toLowerCase())){const t=e;return!0===t.selection||!0===t.paste}return!1})(i)&&e.selection.scrollIntoView(),(t.browser.isSafari()||t.browser.isChromium())&&n<0&&g(e,o,i)}};e.add("autoresize",(e=>{if((e=>{const t=e.options.register;t("autoresize_overflow_padding",{processor:"number",default:1}),t("autoresize_bottom_margin",{processor:"number",default:50})})(e),e.options.isSet("resize")||e.options.set("resize",!1),!e.inline){const t=(e=>{let t=0;return{get:()=>t,set:e=>{t=e}}})();((e,t)=>{e.addCommand("mceAutoResize",(()=>{g(e,t)}))})(e,t),((e,t)=>{e.on("init",(()=>{const t=i(e),o=e.dom;o.setStyles(e.getDoc().documentElement,{height:"auto"}),o.setStyles(e.getBody(),{paddingLeft:t,paddingRight:t,"min-height":0})})),e.on("NodeChange SetContent keyup FullscreenStateChanged ResizeContent",(o=>{g(e,t,o)}))})(e,t)}}))}();