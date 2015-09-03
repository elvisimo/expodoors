/*!
 * jQuery UI Effects 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){var e="ui-effects-",i=t;/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
return t.effects={effect:{}},function(t,e){function i(t,e,i){var n=h[e.type]||{};return null==t?i||!e.def?null:e.def:(t=n.floor?~~t:parseFloat(t),isNaN(t)?e.def:n.mod?(t+n.mod)%n.mod:0>t?0:n.max<t?n.max:t)}function n(e){var i=c(),n=i._rgba=[];return e=e.toLowerCase(),p(l,function(t,s){var o,r=s.re.exec(e),a=r&&s.parse(r),l=s.space||"rgba";return a?(o=i[l](a),i[u[l].cache]=o[u[l].cache],n=i._rgba=o._rgba,!1):void 0}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),i):o[e]}function s(t,e,i){return i=(i+1)%1,1>6*i?t+(e-t)*i*6:1>2*i?e:2>3*i?t+(e-t)*(2/3-i)*6:t}var o,r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",a=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],c=t.Color=function(e,i,n,s){return new t.Color.fn.parse(e,i,n,s)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},h={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},f=c.support={},d=t("<p>")[0],p=t.each;d.style.cssText="background-color:rgba(1,1,1,.5)",f.rgba=d.style.backgroundColor.indexOf("rgba")>-1,p(u,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),c.fn=t.extend(c.prototype,{parse:function(s,r,a,l){if(s===e)return this._rgba=[null,null,null,null],this;(s.jquery||s.nodeType)&&(s=t(s).css(r),r=e);var h=this,f=t.type(s),d=this._rgba=[];return r!==e&&(s=[s,r,a,l],f="array"),"string"===f?this.parse(n(s)||o._default):"array"===f?(p(u.rgba.props,function(t,e){d[e.idx]=i(s[e.idx],e)}),this):"object"===f?(s instanceof c?p(u,function(t,e){s[e.cache]&&(h[e.cache]=s[e.cache].slice())}):p(u,function(e,n){var o=n.cache;p(n.props,function(t,e){if(!h[o]&&n.to){if("alpha"===t||null==s[t])return;h[o]=n.to(h._rgba)}h[o][e.idx]=i(s[t],e,!0)}),h[o]&&t.inArray(null,h[o].slice(0,3))<0&&(h[o][3]=1,n.from&&(h._rgba=n.from(h[o])))}),this):void 0},is:function(t){var e=c(t),i=!0,n=this;return p(u,function(t,s){var o,r=e[s.cache];return r&&(o=n[s.cache]||s.to&&s.to(n._rgba)||[],p(s.props,function(t,e){return null!=r[e.idx]?i=r[e.idx]===o[e.idx]:void 0})),i}),i},_space:function(){var t=[],e=this;return p(u,function(i,n){e[n.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var n=c(t),s=n._space(),o=u[s],r=0===this.alpha()?c("transparent"):this,a=r[o.cache]||o.to(r._rgba),l=a.slice();return n=n[o.cache],p(o.props,function(t,s){var o=s.idx,r=a[o],c=n[o],u=h[s.type]||{};null!==c&&(null===r?l[o]=c:(u.mod&&(c-r>u.mod/2?r+=u.mod:r-c>u.mod/2&&(r-=u.mod)),l[o]=i((c-r)*e+r,s)))}),this[s](l)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),n=i.pop(),s=c(e)._rgba;return c(t.map(i,function(t,e){return(1-n)*s[e]+n*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),n=i.pop();return e&&i.push(~~(255*n)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),c.fn.parse.prototype=c.fn,u.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,n=t[0]/255,s=t[1]/255,o=t[2]/255,r=t[3],a=Math.max(n,s,o),l=Math.min(n,s,o),c=a-l,u=a+l,h=.5*u;return e=l===a?0:n===a?60*(s-o)/c+360:s===a?60*(o-n)/c+120:60*(n-s)/c+240,i=0===c?0:.5>=h?c/u:c/(2-u),[Math.round(e)%360,i,h,null==r?1:r]},u.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],n=t[2],o=t[3],r=.5>=n?n*(1+i):n+i-n*i,a=2*n-r;return[Math.round(255*s(a,r,e+1/3)),Math.round(255*s(a,r,e)),Math.round(255*s(a,r,e-1/3)),o]},p(u,function(n,s){var o=s.props,r=s.cache,l=s.to,u=s.from;c.fn[n]=function(n){if(l&&!this[r]&&(this[r]=l(this._rgba)),n===e)return this[r].slice();var s,a=t.type(n),h="array"===a||"object"===a?n:arguments,f=this[r].slice();return p(o,function(t,e){var n=h["object"===a?t:e.idx];null==n&&(n=f[e.idx]),f[e.idx]=i(n,e)}),u?(s=c(u(f)),s[r]=f,s):c(f)},p(o,function(e,i){c.fn[e]||(c.fn[e]=function(s){var o,r=t.type(s),l="alpha"===e?this._hsla?"hsla":"rgba":n,c=this[l](),u=c[i.idx];return"undefined"===r?u:("function"===r&&(s=s.call(this,u),r=t.type(s)),null==s&&i.empty?this:("string"===r&&(o=a.exec(s),o&&(s=u+parseFloat(o[2])*("+"===o[1]?1:-1))),c[i.idx]=s,this[l](c)))})})}),c.hook=function(e){var i=e.split(" ");p(i,function(e,i){t.cssHooks[i]={set:function(e,s){var o,r,a="";if("transparent"!==s&&("string"!==t.type(s)||(o=n(s)))){if(s=c(o||s),!f.rgba&&1!==s._rgba[3]){for(r="backgroundColor"===i?e.parentNode:e;(""===a||"transparent"===a)&&r&&r.style;)try{a=t.css(r,"backgroundColor"),r=r.parentNode}catch(l){}s=s.blend(a&&"transparent"!==a?a:"_default")}s=s.toRgbaString()}try{e.style[i]=s}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=c(e.elem,i),e.end=c(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},c.hook(r),t.cssHooks.borderColor={expand:function(t){var e={};return p(["Top","Right","Bottom","Left"],function(i,n){e["border"+n+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(i),function(){function e(e){var i,n,s=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(s&&s.length&&s[0]&&s[s[0]])for(n=s.length;n--;)i=s[n],"string"==typeof s[i]&&(o[t.camelCase(i)]=s[i]);else for(i in s)"string"==typeof s[i]&&(o[i]=s[i]);return o}function n(e,i){var n,s,r={};for(n in i)s=i[n],e[n]!==s&&(o[n]||(t.fx.step[n]||!isNaN(parseFloat(s)))&&(r[n]=s));return r}var s=["add","remove","toggle"],o={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,n){t.fx.step[n]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(i.style(t.elem,n,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(i,o,r,a){var l=t.speed(o,r,a);return this.queue(function(){var o,r=t(this),a=r.attr("class")||"",c=l.children?r.find("*").addBack():r;c=c.map(function(){var i=t(this);return{el:i,start:e(this)}}),o=function(){t.each(s,function(t,e){i[e]&&r[e+"Class"](i[e])})},o(),c=c.map(function(){return this.end=e(this.el[0]),this.diff=n(this.start,this.end),this}),r.attr("class",a),c=c.map(function(){var e=this,i=t.Deferred(),n=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,n),i.promise()}),t.when.apply(t,c.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(r[0])})})},t.fn.extend({addClass:function(e){return function(i,n,s,o){return n?t.effects.animateClass.call(this,{add:i},n,s,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,n,s,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},n,s,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,n,s,o,r){return"boolean"==typeof n||void 0===n?s?t.effects.animateClass.call(this,n?{add:i}:{remove:i},s,o,r):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},n,s,o)}}(t.fn.toggleClass),switchClass:function(e,i,n,s,o){return t.effects.animateClass.call(this,{add:i,remove:e},n,s,o)}})}(),function(){function i(e,i,n,s){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(s=i,n=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(s=n,n=i,i={}),t.isFunction(n)&&(s=n,n=null),i&&t.extend(e,i),n=n||i.duration,e.duration=t.fx.off?0:"number"==typeof n?n:n in t.fx.speeds?t.fx.speeds[n]:t.fx.speeds._default,e.complete=s||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.11.4",save:function(t,i){for(var n=0;n<i.length;n++)null!==i[n]&&t.data(e+i[n],t[0].style[i[n]])},restore:function(t,i){var n,s;for(s=0;s<i.length;s++)null!==i[s]&&(n=t.data(e+i[s]),void 0===n&&(n=""),t.css(i[s],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,n;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=t[1]/e.width}return{x:n,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},n=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),s={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(r){o=document.body}return e.wrap(n),(e[0]===o||t.contains(e[0],o))&&t(o).focus(),n=e.parent(),"static"===e.css("position")?(n.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,n){i[n]=e.css(n),isNaN(parseInt(i[n],10))&&(i[n]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(s),n.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,n,s){return s=s||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(s[i]=o[0]*n+o[1])}),s}}),t.fn.extend({effect:function(){function e(e){function i(){t.isFunction(o)&&o.call(s[0]),t.isFunction(e)&&e()}var s=t(this),o=n.complete,a=n.mode;(s.is(":hidden")?"hide"===a:"show"===a)?(s[a](),i()):r.call(s[0],n,i)}var n=i.apply(this,arguments),s=n.mode,o=n.queue,r=t.effects.effect[n.effect];return t.fx.off||!r?s?this[s](n.duration,n.complete):this.each(function(){n.complete&&n.complete.call(this)}):o===!1?this.each(e):this.queue(o||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var s=i.apply(this,arguments);return s.mode="show",this.effect.call(this,s)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var s=i.apply(this,arguments);return s.mode="hide",this.effect.call(this,s)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var s=i.apply(this,arguments);return s.mode="toggle",this.effect.call(this,s)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),n=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(n=[parseFloat(i),e])}),n}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}(),t.effects}),/*!
 * jQuery UI Effects Size 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/size-effect/
 */
function(t){"function"==typeof define&&define.amd?define(["jquery","./effect"],t):t(jQuery)}(function(t){return t.effects.effect.size=function(e,i){var n,s,o,r=t(this),a=["position","top","bottom","left","right","width","height","overflow","opacity"],l=["position","top","bottom","left","right","overflow","opacity"],c=["width","height","overflow"],u=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],f=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],d=t.effects.setMode(r,e.mode||"effect"),p=e.restore||"effect"!==d,g=e.scale||"both",m=e.origin||["middle","center"],v=r.css("position"),b=p?a:l,_={height:0,width:0,outerHeight:0,outerWidth:0};"show"===d&&r.show(),n={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()},"toggle"===e.mode&&"show"===d?(r.from=e.to||_,r.to=e.from||n):(r.from=e.from||("show"===d?_:n),r.to=e.to||("hide"===d?_:n)),o={from:{y:r.from.height/n.height,x:r.from.width/n.width},to:{y:r.to.height/n.height,x:r.to.width/n.width}},("box"===g||"both"===g)&&(o.from.y!==o.to.y&&(b=b.concat(h),r.from=t.effects.setTransition(r,h,o.from.y,r.from),r.to=t.effects.setTransition(r,h,o.to.y,r.to)),o.from.x!==o.to.x&&(b=b.concat(f),r.from=t.effects.setTransition(r,f,o.from.x,r.from),r.to=t.effects.setTransition(r,f,o.to.x,r.to))),("content"===g||"both"===g)&&o.from.y!==o.to.y&&(b=b.concat(u).concat(c),r.from=t.effects.setTransition(r,u,o.from.y,r.from),r.to=t.effects.setTransition(r,u,o.to.y,r.to)),t.effects.save(r,b),r.show(),t.effects.createWrapper(r),r.css("overflow","hidden").css(r.from),m&&(s=t.effects.getBaseline(m,n),r.from.top=(n.outerHeight-r.outerHeight())*s.y,r.from.left=(n.outerWidth-r.outerWidth())*s.x,r.to.top=(n.outerHeight-r.to.outerHeight)*s.y,r.to.left=(n.outerWidth-r.to.outerWidth)*s.x),r.css(r.from),("content"===g||"both"===g)&&(h=h.concat(["marginTop","marginBottom"]).concat(u),f=f.concat(["marginLeft","marginRight"]),c=a.concat(h).concat(f),r.find("*[width]").each(function(){var i=t(this),n={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};p&&t.effects.save(i,c),i.from={height:n.height*o.from.y,width:n.width*o.from.x,outerHeight:n.outerHeight*o.from.y,outerWidth:n.outerWidth*o.from.x},i.to={height:n.height*o.to.y,width:n.width*o.to.x,outerHeight:n.height*o.to.y,outerWidth:n.width*o.to.x},o.from.y!==o.to.y&&(i.from=t.effects.setTransition(i,h,o.from.y,i.from),i.to=t.effects.setTransition(i,h,o.to.y,i.to)),o.from.x!==o.to.x&&(i.from=t.effects.setTransition(i,f,o.from.x,i.from),i.to=t.effects.setTransition(i,f,o.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,function(){p&&t.effects.restore(i,c)})})),r.animate(r.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===r.to.opacity&&r.css("opacity",r.from.opacity),"hide"===d&&r.hide(),t.effects.restore(r,b),p||("static"===v?r.css({position:"relative",top:r.to.top,left:r.to.left}):t.each(["top","left"],function(t,e){r.css(e,function(e,i){var n=parseInt(i,10),s=t?r.to.left:r.to.top;return"auto"===i?s+"px":n+s+"px"})})),t.effects.removeWrapper(r),i()}})}}),/*!
 * jQuery UI Effects Scale 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/scale-effect/
 */
function(t){"function"==typeof define&&define.amd?define(["jquery","./effect","./effect-size"],t):t(jQuery)}(function(t){return t.effects.effect.scale=function(e,i){var n=t(this),s=t.extend(!0,{},e),o=t.effects.setMode(n,e.mode||"effect"),r=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===o?0:100),a=e.direction||"both",l=e.origin,c={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()},u={y:"horizontal"!==a?r/100:1,x:"vertical"!==a?r/100:1};s.effect="size",s.queue=!1,s.complete=i,"effect"!==o&&(s.origin=l||["middle","center"],s.restore=!0),s.from=e.from||("show"===o?{height:0,width:0,outerHeight:0,outerWidth:0}:c),s.to={height:c.height*u.y,width:c.width*u.x,outerHeight:c.outerHeight*u.y,outerWidth:c.outerWidth*u.x},s.fade&&("show"===o&&(s.from.opacity=0,s.to.opacity=1),"hide"===o&&(s.from.opacity=1,s.to.opacity=0)),n.effect(s)}}),/*!
 * jQuery UI Effects Puff 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/puff-effect/
 */
function(t){"function"==typeof define&&define.amd?define(["jquery","./effect","./effect-scale"],t):t(jQuery)}(function(t){return t.effects.effect.puff=function(e,i){var n=t(this),s=t.effects.setMode(n,e.mode||"hide"),o="hide"===s,r=parseInt(e.percent,10)||150,a=r/100,l={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:s,complete:i,percent:o?r:100,from:o?l:{height:l.height*a,width:l.width*a,outerHeight:l.outerHeight*a,outerWidth:l.outerWidth*a}}),n.effect(e)}});