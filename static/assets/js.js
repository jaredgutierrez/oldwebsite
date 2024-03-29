!function(t,s,e){"use strict";var i=function(t,s){var i=this;this.el=t,this.options={},Object.keys(r).forEach(function(t){i.options[t]=r[t]}),Object.keys(s).forEach(function(t){i.options[t]=s[t]}),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.fadeOut=this.options.fadeOut,this.fadeOutClass=this.options.fadeOutClass,this.fadeOutDelay=this.options.fadeOutDelay,e&&this.options.stringsElement instanceof e?this.stringsElement=this.options.stringsElement[0]:this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=2,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};i.prototype={constructor:i,init:function(){var t=this;t.timeout=setTimeout(function(){for(var s=0;s<t.strings.length;++s)t.sequence[s]=s;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var t=this;if(this.showCursor===!0&&(this.cursor=s.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)),this.stringsElement){this.strings=[],this.stringsElement.style.display="none";var e=Array.prototype.slice.apply(this.stringsElement.children);e.forEach(function(s){t.strings.push(s.innerHTML)})}this.init()},typewrite:function(t,s){if(this.stop!==!0){this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor.classList.remove(this.fadeOutClass));var e=Math.round(70*Math.random())+this.typeSpeed,i=this;i.timeout=setTimeout(function(){var e=0,r=t.substr(s);if("^"===r.charAt(0)){var o=1;/^\^\d+/.test(r)&&(r=/\d+/.exec(r)[0],o+=r.length,e=parseInt(r)),t=t.substring(0,s)+t.substring(s+o)}if("html"===i.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="",h="";for(h="<"===n?">":";";t.substr(s+1).charAt(0)!==h&&(a+=t.substr(s).charAt(0),s++,!(s+1>t.length)););s++,a+=h}}i.timeout=setTimeout(function(){if(s===t.length){if(i.options.onStringTyped(i.arrayPos),i.arrayPos===i.strings.length-1&&(i.options.callback(),i.curLoop++,i.loop===!1||i.curLoop===i.loopCount))return;i.timeout=setTimeout(function(){i.backspace(t,s)},i.backDelay)}else{0===s&&i.options.preStringTyped(i.arrayPos);var e=t.substr(0,s+1);i.attr?i.el.setAttribute(i.attr,e):i.isInput?i.el.value=e:"html"===i.contentType?i.el.innerHTML=e:i.el.textContent=e,s++,i.typewrite(t,s)}},e)},e)}},backspace:function(t,s){var e=this;if(this.stop!==!0){if(this.fadeOut)return void this.initFadeOut();var i=Math.round(70*Math.random())+this.backSpeed;e.timeout=setTimeout(function(){if("html"===e.contentType&&">"===t.substr(s).charAt(0)){for(var i="";"<"!==t.substr(s-1).charAt(0)&&(i-=t.substr(s).charAt(0),s--,!(s<0)););s--,i+="<"}var r=t.substr(0,s);e.replaceText(r),s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.shuffle&&(e.sequence=e.shuffleArray(e.sequence)),e.init()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},i)}},initFadeOut:function(){return self=this,this.el.className+=" "+this.fadeOutClass,this.cursor.className+=" "+this.fadeOutClass,setTimeout(function(){self.arrayPos++,self.replaceText(""),self.typewrite(self.strings[self.sequence[self.arrayPos]],0)},self.fadeOutDelay)},replaceText:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},shuffleArray:function(t){var s,e,i=t.length;if(i)for(;--i;)e=Math.floor(Math.random()*(i+1)),s=t[e],t[e]=t[i],t[i]=s;return t},reset:function(){var t=this;clearInterval(t.timeout);this.el.getAttribute("id");this.el.textContent="","undefined"!=typeof this.cursor&&"undefined"!=typeof this.cursor.parentNode&&this.cursor.parentNode.removeChild(this.cursor),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},i["new"]=function(t,e){var r=Array.prototype.slice.apply(s.querySelectorAll(t));r.forEach(function(t){var s=t._typed,r="object"==typeof e&&e;s&&s.reset(),t._typed=s=new i(t,r),"string"==typeof e&&s[e]()})},e&&(e.fn.typed=function(t){return this.each(function(){var s=e(this),r=s.data("typed"),o="object"==typeof t&&t;r&&r.reset(),s.data("typed",r=new i(this,o)),"string"==typeof t&&r[t]()})}),t.Typed=i;var r={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window,document,window.jQuery);
//mattboldt.com


$(document).ready(function(){






	$(".aux").click(function(){
		$(".modal").removeClass("modal-nonactive")
		$(".modal").addClass("modal-active")
		console.log("modal now up")
		$(".modal").css({"display": "show"});
		$(".auxDesc").css({"display": "show"});
		$(".newsDesc").css({"display": "none"});
		$(".sinDesc").css({"display": "none"});
		$(".copilotDesc").css({"display": "none"});
		$(".mapsDesc").css({"display": "none"});
		$(".enigmaDesc").css({"display": "none"});
		$(".fosterDesc").css({"display": "none"});
		$(".stocksDesc").css({"display": "none"});
	})

	$(".newsNow").click(function(){
		$(".modal").removeClass("modal-nonactive")
		$(".modal").addClass("modal-active")
		console.log("modal now up")
		$(".modal").css({"display": "show"});
		$(".newsDesc").css({"display": "show"});

		$(".sinDesc").css({"display": "none"});
		$(".copilotDesc").css({"display": "none"});
		$(".mapsDesc").css({"display": "none"});
		$(".enigmaDesc").css({"display": "none"});
		$(".fosterDesc").css({"display": "none"});
		$(".stocksDesc").css({"display": "none"});
		$(".auxDesc").css({"display": "none"});

	})
	$(".sincerely").click(function(){
		$(".modal").removeClass("modal-nonactive")
		$(".modal").addClass("modal-active")
		console.log("modal now up")
		$(".auxDesc").css({"display": "none"});
		$(".newsDesc").css({"display": "none"});
		$(".modal").css({"display": "show"});
		$(".sinDesc").css({"display": "show"});
		$(".copilotDesc").css({"display": "none"});
		$(".mapsDesc").css({"display": "none"});
		$(".enigmaDesc").css({"display": "none"});
		$(".fosterDesc").css({"display": "none"});
		$(".stocksDesc").css({"display": "none"});
	})
	$(".copilot").click(function(){
		$(".modal").removeClass("modal-nonactive")
		$(".modal").addClass("modal-active")
		$(".modal").css({"display": "show"});
		$(".copilotDesc").css({"display": "show"});
		$(".auxDesc").css({"display": "none"});
		$(".newsDesc").css({"display": "none"});
		$(".sinDesc").css({"display": "none"});
		$(".mapsDesc").css({"display": "none"});
		$(".enigmaDesc").css({"display": "none"});
		$(".fosterDesc").css({"display": "none"});
		$(".stocksDesc").css({"display": "none"});

	})
	$(".maps").click(function(){
		$(".modal").removeClass("modal-nonactive")
		$(".modal").addClass("modal-active")
		$(".modal").css({"display": "show"});
		$(".mapsDesc").css({"display": "show"});
		$(".auxDesc").css({"display": "none"});
		$(".newsDesc").css({"display": "none"});
		$(".sinDesc").css({"display": "none"});
		$(".copilotDesc").css({"display": "none"});
		$(".enigmaDesc").css({"display": "none"});
		$(".fosterDesc").css({"display": "none"});
		$(".stocksDesc").css({"display": "none"});

	})
	$(".enigma").click(function(){
		$(".modal").removeClass("modal-nonactive")
		$(".modal").addClass("modal-active")
		$(".modal").css({"display": "show"});
		$(".enigmaDesc").css({"display": "show"});
		$(".auxDesc").css({"display": "none"});
		$(".newsDesc").css({"display": "none"});
		$(".sinDesc").css({"display": "none"});
		$(".copilotDesc").css({"display": "none"});
		$(".mapsDesc").css({"display": "none"});
		$(".fosterDesc").css({"display": "none"});
		$(".stocksDesc").css({"display": "none"});

	})
	$(".fosterGrowth").click(function(){
		$(".modal").removeClass("modal-nonactive")
		$(".modal").addClass("modal-active")
		$(".modal").css({"display": "show"});
		$(".fosterDesc").css({"display": "show"});
		$(".auxDesc").css({"display": "none"});
		$(".newsDesc").css({"display": "none"});
		$(".sinDesc").css({"display": "none"});
		$(".copilotDesc").css({"display": "none"});
		$(".mapsDesc").css({"display": "none"});
		$(".enigmaDesc").css({"display": "none"});
		$(".stocksDesc").css({"display": "none"});

	})
	$(".stocks").click(function(){
		$(".modal").removeClass("modal-nonactive")
		$(".modal").addClass("modal-active")
		$(".modal").css({"display": "show"});
		$(".stocksDesc").css({"display": "show"});
		$(".auxDesc").css({"display": "none"});
		$(".newsDesc").css({"display": "none"});
		$(".sinDesc").css({"display": "none"});
		$(".copilotDesc").css({"display": "none"});
		$(".mapsDesc").css({"display": "none"});
		$(".enigmaDesc").css({"display": "none"});
		$(".fosterDesc").css({"display": "none"});

	})


	$(".modal").click(function(){
		$(".modal").removeClass("modal-active")
		$(".modal").addClass("modal-nonactive")
		console.log("modal now down")
		$(".modal").css({"display": "none"});
		$(".auxDesc").css({"display": "none"});
		$(".newsDesc").css({"display": "none"});
		$(".sinDesc").css({"display": "none"});
		$(".copilotDesc").css({"display": "none"});
		$(".mapsDesc").css({"display": "none"});
		$(".enigmaDesc").css({"display": "none"});
		$(".fosterDesc").css({"display": "none"});
		$(".stocksDesc").css({"display": "none"});
	})










});