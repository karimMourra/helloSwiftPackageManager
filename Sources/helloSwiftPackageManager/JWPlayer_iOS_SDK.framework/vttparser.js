(window.webpackJsonpjwplayer=window.webpackJsonpjwplayer||[]).push([[18],{142:function(t,e,r){"use strict";function n(){return{decode:function(t){if(!t)return"";if("string"!=typeof t)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))}}}function i(){this.values=Object.create(null)}function s(t,e,r){function n(){var e=function(t){function e(t,e,r,n){return 3600*(0|t)+60*(0|e)+(0|r)+(0|n)/1e3}var r=t.match(o);return r?r[3]?e(r[1],r[2],r[3].replace(":",""),r[4]):r[1]>59?e(r[1],r[2],0,r[4]):e(0,r[1],r[2],r[4]):null}(t);if(null===e)throw new Error("Malformed timestamp: "+a);return t=t.replace(h,""),e}function s(){t=t.replace(p,"")}var a=t;if(s(),e.startTime=n(),s(),"-->"!==t.substr(0,3))throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+a);t=t.substr(3),s(),e.endTime=n(),s(),function(t,e){var n=new i;!function(t,e,r,n){for(var i=n?t.split(n):[t],s=0;s<=i.length;s+=1)if("string"==typeof i[s]){var a=i[s].split(r);2===a.length&&e(a[0],a[1])}}(t,function(t,e){switch(t){case"region":for(var i=r.length-1;i>=0;i--)if(r[i].id===e){n.set(t,r[i].region);break}break;case"vertical":n.alt(t,e,["rl","lr"]);break;case"line":var s=e.split(","),a=s[0];n.integer(t,a),n.percent(t,a)&&n.set("snapToLines",!1),n.alt(t,a,["auto"]),2===s.length&&n.alt("lineAlign",s[1],["start",T,"end"]);break;case"position":var u=e.split(",");n.percent(t,u[0]),2===u.length&&n.alt("positionAlign",u[1],["start",T,"end","line-left","line-right","auto"]);break;case"size":n.percent(t,e);break;case"align":n.alt(t,e,["start",T,"end","left","right"])}},g,d),e.region=n.get("region",null),e.vertical=n.get("vertical","");var s=n.get("line","auto");"auto"===s&&-1===w.line&&(s=-1),e.line=s,e.lineAlign=n.get("lineAlign","start"),e.snapToLines=n.get("snapToLines",!0),e.size=n.get("size",100),e.align=n.get("align",T);var a=n.get("position","auto");"auto"===a&&50===w.position&&(a="start"===e.align||"left"===e.align?0:"end"===e.align||"right"===e.align?100:50),e.position=a}(t,e)}r.r(e);var a=r(49),u=r(75),o=/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/,c=/^-?\d+$/,l=/\r\n|\n/,f=/^NOTE($|[ \t])/,h=/^[^\sa-zA-Z-]+/,g=/:/,d=/\s/,p=/^\s+/,b=/-->/,v=/^WEBVTT([ \t].*)?$/,E=function(t,e){this.window=t,this.state="INITIAL",this.buffer="",this.decoder=e||new n,this.regionList=[],this.maxCueBatch=1e3};i.prototype={set:function(t,e){this.get(t)||""===e||(this.values[t]=e)},get:function(t,e,r){return r?this.has(t)?this.values[t]:e[r]:this.has(t)?this.values[t]:e},has:function(t){return t in this.values},alt:function(t,e,r){for(var n=0;n<r.length;++n)if(e===r[n]){this.set(t,e);break}},integer:function(t,e){c.test(e)&&this.set(t,parseInt(e,10))},percent:function(t,e){return(e=parseFloat(e))>=0&&e<=100&&(this.set(t,e),!0)}};var w=new u.a(0,0,0),T="middle"===w.align?"middle":"center";E.prototype={parse:function(t,e){function r(){for(var t=o.buffer,e=0;e<t.length&&"\r"!==t[e]&&"\n"!==t[e];)++e;var r=t.substr(0,e);return"\r"===t[e]&&++e,"\n"===t[e]&&++e,o.buffer=t.substr(e),r}function n(){"CUETEXT"===o.state&&o.cue&&o.oncue&&o.oncue(o.cue),o.cue=null,o.state="INITIAL"===o.state?"BADWEBVTT":"BADCUE"}var i,o=this;t&&(o.buffer+=o.decoder.decode(t,{stream:!0}));try{if("INITIAL"===o.state){if(!l.test(o.buffer))return this;var c=(i=r()).match(v);if(!c||!c[0])throw new Error("Malformed WebVTT signature.");o.state="HEADER"}}catch(t){return n(),this}var h=!1,d=0;!function t(){try{for(;o.buffer&&d<=o.maxCueBatch;){if(!l.test(o.buffer))return o.flush(),this;switch(h?h=!1:i=r(),o.state){case"HEADER":g.test(i)||i||(o.state="ID");break;case"NOTE":i||(o.state="ID");break;case"ID":if(f.test(i)){o.state="NOTE";break}if(!i)break;if(o.cue=new u.a(0,0,""),o.state="CUE",!b.test(i)){o.cue.id=i;break}case"CUE":try{s(i,o.cue,o.regionList)}catch(t){o.cue=null,o.state="BADCUE";break}o.state="CUETEXT";break;case"CUETEXT":var c=b.test(i);if(!i||c&&(h=!0)){o.oncue&&(d+=1,o.oncue(o.cue)),o.cue=null,o.state="ID";break}o.cue.text&&(o.cue.text+="\n"),o.cue.text+=i;break;case"BADCUE":i||(o.state="ID")}}if(d=0,o.buffer)Object(a.b)(t);else if(!e)return o.flush(),this}catch(t){return n(),this}}()},flush:function(){try{if(this.buffer+=this.decoder.decode(),(this.cue||"HEADER"===this.state)&&(this.buffer+="\n\n",this.parse(void 0,!0)),"INITIAL"===this.state)throw new Error("Malformed WebVTT signature.")}catch(t){throw t}return this.onflush&&this.onflush(),this}},e.default=E}}]);
