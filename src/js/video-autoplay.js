var parallaxer=function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){n(1),t.exports=n(4)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=(n.n(o),n(3));n.n(i)},function(t,e){try{var n=new window.CustomEvent("test");if(n.preventDefault(),!0!==n.defaultPrevented)throw new Error("Could not prevent default")}catch(t){var o=function(t,e){var n,o;return e=e||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),o=n.preventDefault,n.preventDefault=function(){o.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},n};o.prototype=window.Event.prototype,window.CustomEvent=o}},function(t,e,n){"use strict";"function"!=typeof Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");t=Object(t);for(var e=1;e<arguments.length;e++){var n=arguments[e];if(null!=n)for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5);e.dispatchRepainEvent=o.dispatch;var i=n(7);e.PositionCalculator=i.default,setTimeout(o.default,1e3)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),i=window,r={scrollY:0,isDimensionsChange:!1,windowWidth:0,windowHeight:0,documentHeight:0},s=new CustomEvent("repaint",{detail:{}});e.dispatch=function(){Object.assign(s.detail,r),i.dispatchEvent(s)};var u=function(){r.scrollY=i.pageYOffset,r.windowWidth=i.innerWidth,r.windowHeight=i.innerHeight,r.documentHeight=document.body.offsetHeight,r.isDimensionsChange=!0,e.dispatch(),r.isDimensionsChange=!1};e.default=function(){u(),i.addEventListener("resize",u),i.addEventListener("orientationchange",u),i.addEventListener("scroll",function(){o.liteThrottle(function(){r.scrollY=i.pageYOffset,e.dispatch()})},!1)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=!1,i=!1,r=[[]];e.throttle=function(t,n,s){void 0===s&&(s=0),o?(i=!0,r[s]=void 0!==n?n:[]):(o=!0,t(n),setTimeout(function(){o=!1,i&&(i=!1,e.throttle(t,r[s]))},16))},e.liteThrottle=function(t){o?i=!0:(o=!0,t(),setTimeout(function(){o=!1,i&&(i=!1,e.liteThrottle(t))},16))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(8),i=function(){function t(t,e,n){this.root=t,this.from=e,this.to=n,this.shouldInit=!0}return t.prototype.getPosition=function(t){var e=this,n=[this.scrollStart,this.scrollEnd],o=n[0],i=n[1],r=t.scrollY;return(this.shouldInit||t.isDimensionsChange)&&(this.update(t),this.shouldInit=!0,0!==this.scrollLength&&setTimeout(function(){e.shouldInit=!1},1e3)),r<=o?0:r>=i?1:(r-o)/this.scrollLength},t.prototype.calcDefaultPosition=function(t){var e=t.scrollY,n=t.windowHeight,i=this.root,r=i.getBoundingClientRect(),s=o.default(getComputedStyle(i).transform.slice(0,-1).split(",")[5]);this.height=r.height,this.topEdgeDefaultPosition=e+r.top-s,this.bottomEdgeDefaultPosition=e+r.bottom-n+s},t.prototype.getEdgeOffset=function(t,e){var n=t[0],o=t[1],i=this.height*o+n;return i=i>e?e:i,i<0?0:i},t.prototype.parseConfig=function(t){var e=[0,0],n="top"===t[0];return e[0]=n?this.topEdgeDefaultPosition:this.bottomEdgeDefaultPosition,e[1]=n?t[1]:-t[1],e},t.prototype.update=function(t){this.calcDefaultPosition(t),this.scrollStart=this.getEdgeOffset(this.parseConfig(this.from),t.documentHeight),this.scrollEnd=this.getEdgeOffset(this.parseConfig(this.to),t.documentHeight),this.scrollLength=this.scrollEnd-this.scrollStart},t}();e.default=i},function(t,e,n){"use strict";function o(t){var e=Number(t);return e===e?e:0}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o}]);

var makeVideoPlayableInline=function(){"use strict";function e(e){function r(t){n=requestAnimationFrame(r),e(t-(i||t)),i=t}var n,i;this.start=function(){n||r(0)},this.stop=function(){cancelAnimationFrame(n),n=null,i=0}}function r(e,r,n,i){function t(r){Boolean(e[n])===Boolean(i)&&r.stopImmediatePropagation(),delete e[n]}return e.addEventListener(r,t,!1),t}function n(e,r,n,i){function t(){return n[r]}function d(e){n[r]=e}i&&d(e[r]),Object.defineProperty(e,r,{get:t,set:d})}function i(e,r,n){n.addEventListener(r,function(){return e.dispatchEvent(new Event(r))})}function t(e,r){Promise.resolve().then(function(){e.dispatchEvent(new Event(r))})}function d(e){var r=new Audio;return i(e,"play",r),i(e,"playing",r),i(e,"pause",r),r.crossOrigin=e.crossOrigin,r.src=e.src||e.currentSrc||"data:",r}function a(e,r,n){(f||0)+200<Date.now()&&(e[h]=!0,f=Date.now()),n||(e.currentTime=r),T[++w%3]=100*r|0}function o(e){return e.driver.currentTime>=e.video.duration}function u(e){var r=this;r.video.readyState>=r.video.HAVE_FUTURE_DATA?(r.hasAudio||(r.driver.currentTime=r.video.currentTime+e*r.video.playbackRate/1e3,r.video.loop&&o(r)&&(r.driver.currentTime=0)),a(r.video,r.driver.currentTime)):r.video.networkState!==r.video.NETWORK_IDLE||r.video.buffered.length||r.video.load(),r.video.ended&&(delete r.video[h],r.video.pause(!0))}function s(){var e=this,r=e[g];return e.webkitDisplayingFullscreen?void e[b]():("data:"!==r.driver.src&&r.driver.src!==e.src&&(a(e,0,!0),r.driver.src=e.src),void(e.paused&&(r.paused=!1,e.buffered.length||e.load(),r.driver.play(),r.updater.start(),r.hasAudio||(t(e,"play"),r.video.readyState>=r.video.HAVE_ENOUGH_DATA&&t(e,"playing")))))}function c(e){var r=this,n=r[g];n.driver.pause(),n.updater.stop(),r.webkitDisplayingFullscreen&&r[E](),n.paused&&!e||(n.paused=!0,n.hasAudio||t(r,"pause"),r.ended&&(r[h]=!0,t(r,"ended")))}function v(r,n){var i=r[g]={};i.paused=!0,i.hasAudio=n,i.video=r,i.updater=new e(u.bind(i)),n?i.driver=d(r):(r.addEventListener("canplay",function(){r.paused||t(r,"playing")}),i.driver={src:r.src||r.currentSrc||"data:",muted:!0,paused:!0,pause:function(){i.driver.paused=!0},play:function(){i.driver.paused=!1,o(i)&&a(r,0)},get ended(){return o(i)}}),r.addEventListener("emptied",function(){var e=!i.driver.src||"data:"===i.driver.src;i.driver.src&&i.driver.src!==r.src&&(a(r,0,!0),i.driver.src=r.src,e?i.driver.play():i.updater.stop())},!1),r.addEventListener("webkitbeginfullscreen",function(){r.paused?n&&!i.driver.buffered.length&&i.driver.load():(r.pause(),r[b]())}),n&&(r.addEventListener("webkitendfullscreen",function(){i.driver.currentTime=r.currentTime}),r.addEventListener("seeking",function(){T.indexOf(100*r.currentTime|0)<0&&(i.driver.currentTime=r.currentTime)}))}function p(e){var i=e[g];e[b]=e.play,e[E]=e.pause,e.play=s,e.pause=c,n(e,"paused",i.driver),n(e,"muted",i.driver,!0),n(e,"playbackRate",i.driver,!0),n(e,"ended",i.driver),n(e,"loop",i.driver,!0),r(e,"seeking"),r(e,"seeked"),r(e,"timeupdate",h,!1),r(e,"ended",h,!1)}function l(e,r,n){void 0===r&&(r=!0),void 0===n&&(n=!0),n&&!y||e[g]||(v(e,r),p(e),e.classList.add("IIV"),!r&&e.autoplay&&e.play(),"MacIntel"!==navigator.platform&&"Windows"!==navigator.platform||console.warn("iphone-inline-video is not guaranteed to work in emulated environments"))}var f,m="undefined"==typeof Symbol?function(e){return"@"+(e||"@")+Math.random()}:Symbol,y=/iPhone|iPod/i.test(navigator.userAgent)&&void 0===document.head.style.grid,g=m(),h=m(),b=m("nativeplay"),E=m("nativepause"),T=[],w=0;return l.isWhitelisted=y,l}();

var videoPlayers;

(function IIFE() {
  var d = document;
  var s = d.createElement("style");
  s.innerHTML =
    ".IIV::-webkit-media-controls-play-button,.IIV::-webkit-media-controls-start-playback-button{opacity:0;pointer-events:none;width: 5px;}";
  d.head.appendChild(s);
})();

setTimeout(function() {
  var Player = (function() {
    function Player(video) {
      var _this = this;
      this.video = video;
      this.isPaused = true;
      this.isBlocked = false;
      this.blockId = -1;
      this.ended = false;
      this.pauseBefore = 0;
      this.pauseAfter = 0;
      this.loop = true;
      this.autoplay = true;
      this.prepareVideo();
      this.video.addEventListener("ended", function() {
        _this.isPaused = true;
        _this.block(_this.pauseAfter);
        _this.ended = true;
        if (_this.loop) {
          _this.play();
          _this.ended = false;
        }
      });
      var details;
      var pos = new parallaxer.PositionCalculator(
        video,
        ["bottom", 0.5],
        ["top", 0.5]
      );
      this.shouldPlay = function(e) {
        var currentPosition = pos.getPosition(e.detail);
        return currentPosition > 0 && currentPosition < 1;
      };
      window.addEventListener("repaint", function(e) {
        details = e.details;
        if (_this.autoplay) {
          _this.shouldPlay(e) ? _this.play() : _this.pause();
        }
      });
    }
    Player.prototype.prepareVideo = function() {
      var video = this.video;
      video.pause();
      video.muted = true;
      video.autoplay = false;
      video.loop = false;
      if (video.webkitPlaysInline !== undefined) {
        video.webkitPlaysInline = true;
      }
      if (video.playsInline !== undefined) {
        video.playsInline = true;
      }
      makeVideoPlayableInline(video);
    };
    Player.prototype.play = function() {
      if (this.isPaused && (this.loop || !this.ended)) {
        this.block(this.pauseBefore);
        this.video.play();
        this.isPaused = false;
      }
    };
    Player.prototype.pause = function() {
      if (!this.isPaused) {
        this.video.pause();
        this.isPaused = true;
      }
    };
    Player.prototype.block = function(duration) {
      var _this = this;
      if (duration > 0 && !this.isBlocked) {
        this.video.playbackRate = 0;
        // this.isBlocked = true;
        clearInterval(this.blockId);
        this.blockId = setTimeout(function() {
          // _this.isBlocked = false;
          _this.video.playbackRate = 1;
          _this.blockId = -1;
          if (!this.ended) {
            _this.video.play();
          }
        }, duration * 1000);
      }
    };
    return Player;
  })();

  // Create players
  videoPlayers = [].map.call(document.querySelectorAll("video"), function(vid) {
    var cl = vid.classList;
    var player = new Player(vid);

    player.pauseAfter = 0;

    if (cl.contains("noautoplay")) {
      player.autoplay = false;
    }

    if (cl.contains("noloop")) {
      player.loop = false;
    }

    if (cl.contains("initial-play")) {
      player.play();
    }

    return player;
  });

  videoPlayers[0].pauseAfter = 0;
}, 1000);

