!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.GoogleAds=t(require("react")):e.GoogleAds=t(e.react)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(3),c=n(a),l=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),u(t,[{key:"componentDidMount",value:function(){!function(e,t,o,n){var r=e.getElementsByTagName(t)[0],i=r,s=r;s=e.createElement(t),s.id=o,s.src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",i.parentNode.insertBefore(s,i),s.onload=n}(document,"script","google-ads-sdk",function(){(adsbygoogle=window.adsbygoogle||[]).push({})})}},{key:"render",value:function(){return c.default.createElement("ins",{className:"adsbygoogle","data-ad-client":this.props.client,"data-ad-slot":this.props.slot,style:this.props.style})}}]),t}(a.Component);l.propTypes={client:a.PropTypes.string.isRequired,slot:a.PropTypes.string.isRequired,style:a.PropTypes.object},l.defaultProps={style:{display:"inline-block"}},t.default=l},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(1),i=n(r);t.default=i.default},function(t,o){t.exports=e}])});