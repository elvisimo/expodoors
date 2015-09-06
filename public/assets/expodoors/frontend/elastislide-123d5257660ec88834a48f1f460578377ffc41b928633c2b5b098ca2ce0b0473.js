/**
 * jquery.elastislide.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
!function(t,e,n){"use strict";/*
	* debouncedresize: special jQuery event that happens once after a window resize
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
	*
	* Copyright 2011 @louis_remi
	* Licensed under the MIT license.
	*/
var i,o,r=t.event;i=r.special.debouncedresize={setup:function(){t(this).on("resize",i.handler)},teardown:function(){t(this).off("resize",i.handler)},handler:function(t,e){var n=this,s=arguments,a=function(){t.type="debouncedresize",r.dispatch.apply(n,s)};o&&clearTimeout(o),e?a():o=setTimeout(a,i.threshold)},threshold:150};var s="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.fn.imagesLoaded=function(e){function i(){var n=t(d),i=t(h);a&&(h.length?a.reject(u,n,i):a.resolve(u)),t.isFunction(e)&&e.call(r,u,n,i)}function o(e,n){e.src!==s&&-1===t.inArray(e,c)&&(c.push(e),n?h.push(e):d.push(e),t.data(e,"imagesLoaded",{isBroken:n,src:e.src}),l&&a.notifyWith(t(e),[n,u,t(d),t(h)]),u.length===c.length&&(setTimeout(i),u.unbind(".imagesLoaded")))}var r=this,a=t.isFunction(t.Deferred)?t.Deferred():0,l=t.isFunction(a.notify),u=r.find("img").add(r.filter("img")),c=[],d=[],h=[];return t.isPlainObject(e)&&t.each(e,function(t,n){"callback"===t?e=n:a&&a[t](n)}),u.length?u.bind("load.imagesLoaded error.imagesLoaded",function(t){o(t.target,"error"===t.type)}).each(function(e,i){var r=i.src,a=t.data(i,"imagesLoaded");return a&&a.src===r?void o(i,a.isBroken):i.complete&&i.naturalWidth!==n?void o(i,0===i.naturalWidth||0===i.naturalHeight):void((i.readyState||i.complete)&&(i.src=s,i.src=r))}):i(),a?a.promise(r):r};var a=t(e),l=e.Modernizr;t.Elastislide=function(e,n){this.$el=t(n),this._init(e)},t.Elastislide.defaults={orientation:"horizontal",speed:500,easing:"ease-in-out",minItems:3,start:0,onClick:function(){return!1},onReady:function(){return!1},onBeforeSlide:function(){return!1},onAfterSlide:function(){return!1}},t.Elastislide.prototype={_init:function(e){this.options=t.extend(!0,{},t.Elastislide.defaults,e);var n=this,i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"};return this.transEndEventName=i[l.prefixed("transition")],this.support=l.csstransitions&&l.csstransforms,this.current=this.options.start,this.isSliding=!1,this.$items=this.$el.children("li"),this.itemsCount=this.$items.length,0===this.itemsCount?!1:(this._validate(),this.$items.detach(),this.$el.empty(),this.$el.append(this.$items),this.$el.wrap('<div class="elastislide-wrapper elastislide-loading elastislide-'+this.options.orientation+'"></div>'),this.hasTransition=!1,this.hasTransitionTimeout=setTimeout(function(){n._addTransition()},100),void this.$el.imagesLoaded(function(){n.$el.show(),n._layout(),n._configure(),n.hasTransition?(n._removeTransition(),n._slideToItem(n.current),n.$el.on(n.transEndEventName,function(){n.$el.off(n.transEndEventName),n._setWrapperSize(),n._addTransition(),n._initEvents()})):(clearTimeout(n.hasTransitionTimeout),n._setWrapperSize(),n._initEvents(),n._slideToItem(n.current),setTimeout(function(){n._addTransition()},25)),n.options.onReady()}))},_validate:function(){this.options.speed<0&&(this.options.speed=500),(this.options.minItems<1||this.options.minItems>this.itemsCount)&&(this.options.minItems=1),(this.options.start<0||this.options.start>this.itemsCount-1)&&(this.options.start=0),"horizontal"!=this.options.orientation&&"vertical"!=this.options.orientation&&(this.options.orientation="horizontal")},_layout:function(){this.$el.wrap('<div class="elastislide-carousel"></div>'),this.$carousel=this.$el.parent(),this.$wrapper=this.$carousel.parent().removeClass("elastislide-loading");var t=this.$items.find("img:first");this.imgSize={width:t.outerWidth(!0),height:t.outerHeight(!0)},this._setItemsSize(),this._addControls()},_addTransition:function(){this.support&&this.$el.css("transition","all "+this.options.speed+"ms "+this.options.easing),this.hasTransition=!0},_removeTransition:function(){this.support&&this.$el.css("transition","all 0s"),this.hasTransition=!1},_addControls:function(){var e=this;this.$navigation=t('<nav><span class="elastislide-prev">Previous</span><span class="elastislide-next">Next</span></nav>').appendTo(this.$wrapper),this.$navPrev=this.$navigation.find("span.elastislide-prev").on("mousedown.elastislide",function(){return e._slide("prev"),!1}),this.$navNext=this.$navigation.find("span.elastislide-next").on("mousedown.elastislide",function(){return e._slide("next"),!1})},_setItemsSize:function(){var t="horizontal"===this.options.orientation?100*Math.floor(this.$carousel.width()/this.options.minItems)/this.$carousel.width():100;this.$items.css({width:t+"%","max-width":this.imgSize.width,"max-height":this.imgSize.height}),"vertical"===this.options.orientation&&this.$wrapper.css("max-width",this.imgSize.width+parseInt(this.$wrapper.css("padding-left"))+parseInt(this.$wrapper.css("padding-right")))},_setWrapperSize:function(){"vertical"===this.options.orientation&&this.$wrapper.css({height:this.options.minItems*this.imgSize.height+parseInt(this.$wrapper.css("padding-top"))+parseInt(this.$wrapper.css("padding-bottom"))})},_configure:function(){this.fitCount="horizontal"===this.options.orientation?this.$carousel.width()<this.options.minItems*this.imgSize.width?this.options.minItems:Math.floor(this.$carousel.width()/this.imgSize.width):this.$carousel.height()<this.options.minItems*this.imgSize.height?this.options.minItems:Math.floor(this.$carousel.height()/this.imgSize.height)},_initEvents:function(){var e=this;a.on("debouncedresize.elastislide",function(){e._setItemsSize(),e._configure(),e._slideToItem(e.current)}),this.$el.on(this.transEndEventName,function(){e._onEndTransition()}),this.$el.on("horizontal"===this.options.orientation?{swipeleft:function(){e._slide("next")},swiperight:function(){e._slide("prev")}}:{swipeup:function(){e._slide("next")},swipedown:function(){e._slide("prev")}}),this.$el.on("click.elastislide","li",function(n){var i=t(this);e.options.onClick(i,i.index(),n)})},_destroy:function(t){this.$el.off(this.transEndEventName).off("swipeleft swiperight swipeup swipedown .elastislide"),a.off(".elastislide"),this.$el.css({"max-height":"none",transition:"none"}).unwrap(this.$carousel).unwrap(this.$wrapper),this.$items.css({width:"auto","max-width":"none","max-height":"none"}),this.$navigation.remove(),this.$wrapper.remove(),t&&t.call()},_toggleControls:function(t,e){e?"next"===t?this.$navNext.show():this.$navPrev.show():"next"===t?this.$navNext.hide():this.$navPrev.hide()},_slide:function(e,i){if(this.isSliding)return!1;this.options.onBeforeSlide(),this.isSliding=!0;var o=this,r=this.translation||0,s="horizontal"===this.options.orientation?this.$items.outerWidth(!0):this.$items.outerHeight(!0),a=this.itemsCount*s,l="horizontal"===this.options.orientation?this.$carousel.width():this.$carousel.height();if(i===n){var u=this.fitCount*s;if(0>u)return!1;if("next"===e&&a-(Math.abs(r)+u)<l)u=a-(Math.abs(r)+l),this._toggleControls("next",!1),this._toggleControls("prev",!0);else if("prev"===e&&Math.abs(r)-u<0)u=Math.abs(r),this._toggleControls("next",!0),this._toggleControls("prev",!1);else{var c="next"===e?Math.abs(r)+Math.abs(u):Math.abs(r)-Math.abs(u);c>0?this._toggleControls("prev",!0):this._toggleControls("prev",!1),a-l>c?this._toggleControls("next",!0):this._toggleControls("next",!1)}i="next"===e?r-u:r+u}else{var u=Math.abs(i);Math.max(a,l)-u<l&&(i=-(Math.max(a,l)-l)),u>0?this._toggleControls("prev",!0):this._toggleControls("prev",!1),Math.max(a,l)-l>u?this._toggleControls("next",!0):this._toggleControls("next",!1)}if(this.translation=i,r===i)return this._onEndTransition(),!1;if(this.support)"horizontal"===this.options.orientation?this.$el.css("transform","translateX("+i+"px)"):this.$el.css("transform","translateY("+i+"px)");else{t.fn.applyStyle=this.hasTransition?t.fn.animate:t.fn.css;var d="horizontal"===this.options.orientation?{left:i}:{top:i};this.$el.stop().applyStyle(d,t.extend(!0,[],{duration:this.options.speed,complete:function(){o._onEndTransition()}}))}this.hasTransition||this._onEndTransition()},_onEndTransition:function(){this.isSliding=!1,this.options.onAfterSlide()},_slideTo:function(t){var t=t||this.current,e=Math.abs(this.translation)||0,n="horizontal"===this.options.orientation?this.$items.outerWidth(!0):this.$items.outerHeight(!0),i=e+this.$carousel.width(),o=Math.abs(t*n);(o+n>i||e>o)&&this._slideToItem(t)},_slideToItem:function(t){var e="horizontal"===this.options.orientation?t*this.$items.outerWidth(!0):t*this.$items.outerHeight(!0);this._slide("",-e)},add:function(t){var e=this,n=this.current,i=this.$items.eq(this.current);this.$items=this.$el.children("li"),this.itemsCount=this.$items.length,this.current=i.index(),this._setItemsSize(),this._configure(),this._removeTransition(),n<this.current?this._slideToItem(this.current):this._slide("next",this.translation),setTimeout(function(){e._addTransition()},25),t&&t.call()},setCurrent:function(t,e){this.current=t,this._slideTo(),e&&e.call()},next:function(){self._slide("next")},previous:function(){self._slide("prev")},slideStart:function(){this._slideTo(0)},slideEnd:function(){this._slideTo(this.itemsCount-1)},destroy:function(t){this._destroy(t)}};var u=function(t){e.console&&e.console.error(t)};t.fn.elastislide=function(e){var n=t.data(this,"elastislide");if("string"==typeof e){var i=Array.prototype.slice.call(arguments,1);this.each(function(){return n?t.isFunction(n[e])&&"_"!==e.charAt(0)?void n[e].apply(n,i):void u("no such method '"+e+"' for elastislide self"):void u("cannot call methods on elastislide prior to initialization; attempted to call method '"+e+"'")})}else this.each(function(){n?n._init():n=t.data(this,"elastislide",new t.Elastislide(e,this))});return n}}(jQuery,window);