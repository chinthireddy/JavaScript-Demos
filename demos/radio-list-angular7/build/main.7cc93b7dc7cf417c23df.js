(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0ZzE":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t("DHAg");var o=t("wov0");t("ZYjt").platformBrowser().bootstrapModuleFactory(o.AppModuleNgFactory)},DHAg:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t("kzjQ"),t("0TWp")},E3Oc:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("CcnG"),l=function(){function e(){this.value=null,this.valueChangeEvents=new o.EventEmitter}return e.prototype.selectValue=function(e){this.valueChangeEvents.emit(e)},e}();n.ToggleListComponent=l;var i=function(){function e(e){this.toggleList=e,this.value=null}return e.prototype.handleClick=function(){this.toggleList.selectValue(this.value)},e}();n.ToggleListItemComponent=i},GTwE:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("LRL7"),l=t("CcnG"),i=t("E3Oc"),r=t("l30p"),u=[o.styles],a=l.ɵcrt({encapsulation:0,styles:u,data:{}});function s(e){return l.ɵvid(0,[l.ɵncd(null,0)],null,null)}function p(e){return l.ɵvid(0,[(e()(),l.ɵeld(0,0,null,null,1,"bn-toggle-list",[],null,null,null,s,a)),l.ɵdid(1,49152,null,0,i.ToggleListComponent,[],null,null)],null,null)}n.RenderType_ToggleListComponent=a,n.View_ToggleListComponent_0=s,n.View_ToggleListComponent_Host_0=p;var c=l.ɵccf("bn-toggle-list",i.ToggleListComponent,p,{value:"value"},{valueChangeEvents:"valueChange"},["*"]);n.ToggleListComponentNgFactory=c;var d=[r.styles],g=l.ɵcrt({encapsulation:0,styles:d,data:{}});function m(e){return l.ɵvid(0,[l.ɵncd(null,0)],null,null)}function _(e){return l.ɵvid(0,[(e()(),l.ɵeld(0,0,null,null,1,"bn-toggle-list-item",[],[[2,"selected",null]],[[null,"click"]],function(e,n,t){var o=!0;"click"===n&&(o=!1!==l.ɵnov(e,1).handleClick()&&o);return o},m,g)),l.ɵdid(1,49152,null,0,i.ToggleListItemComponent,[i.ToggleListComponent],null,null)],null,function(e,n){e(n,0,0,l.ɵnov(n,1).toggleList.value===l.ɵnov(n,1).value)})}n.RenderType_ToggleListItemComponent=g,n.View_ToggleListItemComponent_0=m,n.View_ToggleListItemComponent_Host_0=_;var v=l.ɵccf("bn-toggle-list-item",i.ToggleListItemComponent,_,{value:"value"},{},["*"]);n.ToggleListItemComponentNgFactory=v},K0Kg:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.styles=["[_nghost-%COMP%] {\n  display: block ;\n  font-size: 18px ;\n}\n.list-one[_ngcontent-%COMP%] {\n  display: flex ;\n}\n.list-one[_ngcontent-%COMP%]   bn-toggle-list-item[_ngcontent-%COMP%] {\n  margin-right: 15px ;\n}\n.list-one[_ngcontent-%COMP%]   bn-toggle-list-item.selected[_ngcontent-%COMP%] {\n  color: red ;\n}"]},LRL7:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.styles=["[_nghost-%COMP%] {\n  display: inline-block;\n}"]},Mn8e:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(){this.selectedPlan=null,this.plans=[{id:1,name:"Free",description:"For developers",price:0},{id:2,name:"Starter",description:"For small companies",price:7},{id:3,name:"Pro",description:"For agenecies.",price:25},{id:4,name:"Enterprise",description:"For global companies",price:150}]}return e.prototype.logChange=function(e){console.log("selected plan:",e)},e}();n.AppComponent=o},SmDo:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){return function(){}}();n.AppModule=o},kcRK:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("K0Kg"),l=t("CcnG"),i=t("GTwE"),r=t("E3Oc"),u=t("Ip0R"),a=t("Mn8e"),s=[o.styles],p=l.ɵcrt({encapsulation:0,styles:s,data:{}});function c(e){return l.ɵvid(0,[(e()(),l.ɵeld(0,0,null,null,2,"bn-toggle-list-item",[],[[2,"selected",null]],[[null,"click"]],function(e,n,t){var o=!0;"click"===n&&(o=!1!==l.ɵnov(e,1).handleClick()&&o);return o},i.View_ToggleListItemComponent_0,i.RenderType_ToggleListItemComponent)),l.ɵdid(1,49152,null,0,r.ToggleListItemComponent,[r.ToggleListComponent],{value:[0,"value"]},null),(e()(),l.ɵted(2,0,[" "," "]))],function(e,n){e(n,1,0,n.context.$implicit)},function(e,n){e(n,0,0,l.ɵnov(n,1).toggleList.value===l.ɵnov(n,1).value),e(n,2,0,n.context.$implicit.name)})}function d(e){return l.ɵvid(0,[(e()(),l.ɵeld(0,0,null,null,3,"bn-toggle-list",[["class","list-one"]],null,[[null,"valueChange"]],function(e,n,t){var o=!0,l=e.component;"valueChange"===n&&(o=!1!==(l.selectedPlan=t)&&o);return o},i.View_ToggleListComponent_0,i.RenderType_ToggleListComponent)),l.ɵdid(1,49152,null,0,r.ToggleListComponent,[],{value:[0,"value"]},{valueChangeEvents:"valueChange"}),(e()(),l.ɵand(16777216,null,0,1,null,c)),l.ɵdid(3,278528,null,0,u.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(e,n){var t=n.component;e(n,1,0,t.selectedPlan),e(n,3,0,t.plans)},null)}function g(e){return l.ɵvid(0,[(e()(),l.ɵeld(0,0,null,null,1,"my-app",[],null,null,null,d,p)),l.ɵdid(1,49152,null,0,a.AppComponent,[],null,null)],null,null)}n.RenderType_AppComponent=p,n.View_AppComponent_0=d,n.View_AppComponent_Host_0=g;var m=l.ɵccf("my-app",a.AppComponent,g,{},{},[]);n.AppComponentNgFactory=m},l30p:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.styles=["[_nghost-%COMP%] {\n  cursor: pointer ;\n  display: inline-block;\n}"]},wov0:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("CcnG"),l=t("SmDo"),i=t("Mn8e"),r=t("kcRK"),u=t("Ip0R"),a=t("ZYjt"),s=o.ɵcmf(l.AppModule,[i.AppComponent],function(e){return o.ɵmod([o.ɵmpd(512,o.ComponentFactoryResolver,o.ɵCodegenComponentFactoryResolver,[[8,[r.AppComponentNgFactory]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o.ɵmpd(5120,o.LOCALE_ID,o.ɵangular_packages_core_core_o,[[3,o.LOCALE_ID]]),o.ɵmpd(4608,u.NgLocalization,u.NgLocaleLocalization,[o.LOCALE_ID,[2,u.ɵangular_packages_common_common_a]]),o.ɵmpd(4608,o.Compiler,o.Compiler,[]),o.ɵmpd(5120,o.APP_ID,o.ɵangular_packages_core_core_g,[]),o.ɵmpd(5120,o.IterableDiffers,o.ɵangular_packages_core_core_m,[]),o.ɵmpd(5120,o.KeyValueDiffers,o.ɵangular_packages_core_core_n,[]),o.ɵmpd(4608,a.DomSanitizer,a.ɵDomSanitizerImpl,[u.DOCUMENT]),o.ɵmpd(6144,o.Sanitizer,null,[a.DomSanitizer]),o.ɵmpd(4608,a.HAMMER_GESTURE_CONFIG,a.HammerGestureConfig,[]),o.ɵmpd(5120,a.EVENT_MANAGER_PLUGINS,function(e,n,t,o,l,i,r,u){return[new a.ɵDomEventsPlugin(e,n,t),new a.ɵKeyEventsPlugin(o),new a.ɵHammerGesturesPlugin(l,i,r,u)]},[u.DOCUMENT,o.NgZone,o.PLATFORM_ID,u.DOCUMENT,u.DOCUMENT,a.HAMMER_GESTURE_CONFIG,o.ɵConsole,[2,a.HAMMER_LOADER]]),o.ɵmpd(4608,a.EventManager,a.EventManager,[a.EVENT_MANAGER_PLUGINS,o.NgZone]),o.ɵmpd(135680,a.ɵDomSharedStylesHost,a.ɵDomSharedStylesHost,[u.DOCUMENT]),o.ɵmpd(4608,a.ɵDomRendererFactory2,a.ɵDomRendererFactory2,[a.EventManager,a.ɵDomSharedStylesHost]),o.ɵmpd(6144,o.RendererFactory2,null,[a.ɵDomRendererFactory2]),o.ɵmpd(6144,a.ɵSharedStylesHost,null,[a.ɵDomSharedStylesHost]),o.ɵmpd(4608,o.Testability,o.Testability,[o.NgZone]),o.ɵmpd(1073742336,u.CommonModule,u.CommonModule,[]),o.ɵmpd(1024,o.ErrorHandler,a.ɵangular_packages_platform_browser_platform_browser_a,[]),o.ɵmpd(1024,o.APP_INITIALIZER,function(e){return[a.ɵangular_packages_platform_browser_platform_browser_j(e)]},[[2,o.NgProbeToken]]),o.ɵmpd(512,o.ApplicationInitStatus,o.ApplicationInitStatus,[[2,o.APP_INITIALIZER]]),o.ɵmpd(131584,o.ApplicationRef,o.ApplicationRef,[o.NgZone,o.ɵConsole,o.Injector,o.ErrorHandler,o.ComponentFactoryResolver,o.ApplicationInitStatus]),o.ɵmpd(1073742336,o.ApplicationModule,o.ApplicationModule,[o.ApplicationRef]),o.ɵmpd(1073742336,a.BrowserModule,a.BrowserModule,[[3,a.BrowserModule]]),o.ɵmpd(1073742336,l.AppModule,l.AppModule,[]),o.ɵmpd(256,o.ɵAPP_ROOT,!0,[])])});n.AppModuleNgFactory=s},zn8P:function(e,n){function t(e){return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id="zn8P"}},[["0ZzE",1,2]]]);
//# sourceMappingURL=main.7cc93b7dc7cf417c23df.js.map