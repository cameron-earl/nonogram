(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,n,t){e.exports={Cell:"Cell_Cell__JGzUO",selectUnknown:"Cell_selectUnknown__1Bym8",selectEmpty:"Cell_selectEmpty__35FUd",selectBlack:"Cell_selectBlack__V-G-D",clickable:"Cell_clickable__3ZAG9",Unknown:"Cell_Unknown__3USQO",Empty:"Cell_Empty__2sjFK",Black:"Cell_Black__ecr59",top:"Cell_top__2Gyux",bottom:"Cell_bottom__1G-3X",left:"Cell_left__1cuDS",right:"Cell_right__lVBPk"}},,,function(e,n,t){e.exports={ColClues:"Clues_ColClues__2Romi",RowClues:"Clues_RowClues__1Qm5X"}},function(e,n,t){e.exports={CellGrid:"CellGrid_CellGrid__8cfMJ",isSolved:"CellGrid_isSolved__vCLhI",row:"CellGrid_row__2jJyw"}},function(e,n,t){e.exports={App:"App_App__16ZpL",AppHeader:"App_AppHeader__2Hhu3"}},,,,,function(e,n,t){e.exports={X:"X_X__25fxN"}},function(e,n,t){e.exports={Game:"Game_Game__2P9KR"}},,function(e,n,t){e.exports=t(22)},,,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r,a=t(0),o=t.n(a),l=t(9),u=t.n(l),c=(t(21),t(7)),i=t.n(c),s=t(1),m=function(e,n,t){return e<n?e<=t&&t<=n:n<=t&&t<=e};!function(e){e[e.Unknown=-1]="Unknown",e[e.Empty=0]="Empty",e[e.Black=1]="Black"}(r||(r={}));var f,p=r,h=function(e){return String.fromCharCode(e+383)},d=function(e){return e.charCodeAt(0)-383},v=function(e,n){var t=new RegExp(".{1,".concat(n,"}"),"g");return e.match(t)||[e]},_=function(e){if(e.length>6)throw new Error('String "'.concat(e,'" is more than 6 digits, cannot parse to num 0-63.'));return h(parseInt(e,2))},w=function(e){var n=e.length,t=e[0].length;return function(e){var n=e.length,t=6*Math.ceil(n/6),r=e.padStart(t,"0");return v(r,6).map(_).join("")}(e.map(function(e){return e.map(function(e){return e===p.Unknown?p.Empty:e}).join("")}).join(""))+h(n)+h(t)},k=function(e){var n=e.slice(-2).split("").map(d),t=Object(s.a)(n,2),r=t[0],a=t[1],o=e.slice(0,e.length-2).split("").map(function(e){return function(e){if(e<0||e>=64)throw new Error("Number must be 0 - 63");return e.toString(2).padStart(6,"0")}(d(e))}).join("").slice(-1*r*a);return v(o,r).map(function(e){return e.split("").map(function(e){return+e})})},b=t(14),C=function(e){return e.map(function(e){return Object(b.a)(e)})},g=t(10),E=t(11),y=function(){function e(n){Object(g.a)(this,e),this.arr=void 0,this.name=void 0,this.clues=void 0,Array.isArray(n)?(this.arr=n,this.name="unknown"):(this.arr=k(n.puzzle),this.name=n.name),this.clues=e.buildClues(this.arr)}return Object(E.a)(e,null,[{key:"buildClues",value:function(n){return{rowClues:n.map(function(n){return e.cluesForLine(n)}),colClues:n[0].map(function(t,r){return e.cluesForCol(n,r)})}}},{key:"cluesForCol",value:function(e,n){for(var t=[],r=0;r<e.length;r++)t.push(e[r][n]);return this.cluesForLine(t)}},{key:"cluesForLine",value:function(e){for(var n=[],t=0;t<e.length;t++){for(var r=0;!r&&e[t]===p.Empty;)t++;for(;e[t]===p.Black;)r++,t++;r&&n.push(r)}return n}}]),e}(),j=function(e,n){return{name:e,puzzle:n}},O=[j("pi","\u0180\u01bc\u0191\u01a4\u018a\u0184\u0184"),j("house","\u017f\u0190\u01b6\u01b9\u01b6\u0184\u0184"),j("heart","\u0180\u01ae\u01be\u01b6\u0183\u0184\u0184"),j("arrow","\u017f\u0190\u0186\u01b3\u0183\u0184\u0184"),j("skull","\u017f\u01ba\u01bc\u019e\u01a9\u0184\u0184"),j("plane","\u017f\u0192\u01be\u01b1\u018d\u0184\u0184"),j("cross","\u017f\u01ba\u019b\u019c\u01ad\u0184\u0184"),j("tower","\u0180\u0196\u01ba\u01a4\u018d\u0184\u0184"),j("hourglass","\u0180\u01bc\u0190\u0186\u019e\u0184\u0184"),j("shuriken","\u0180\u018e\u01b1\u01a6\u01b8\u0184\u0184"),j("leaf","\u017f\u01be\u0184\u0193\u01b4\u01a4\u0199\u0194\u01b8\u0197\u01a6\u01bd\u0187\u0190\u019d\u018b\u017f\u0189\u0189"),j("music","\u017f\u018e\u0186\u0183\u0190\u01b0\u01b8\u0183\u0183\u0190\u01b6\u018e\u01bb\u01be\u01b0\u01a5\u017f\u0189\u0189"),j("tapir","\u018e\u01be\u01af\u017f\u017f\u01be\u017f\u017f\u019e\u01b7\u017f\u018e\u01bd\u0197\u0182\u01b8\u01bd\u0180\u01bc\u01ae\u017f\u019e\u01ae\u01b7\u018e\u01be\u01be\u0182\u01be\u01be\u01af\u01be\u01bd\u01bb\u018e\u01b6\u01be\u0182\u01bc\u01be\u01af\u019e\u01ae\u01bb\u01be\u01bc\u01be\u01b8\u01b2\u01a2\u01bb\u019b\u01b7\u019e\u0186\u018d\u0182\u01b0\u01b2\u019f\u01bb\u019b\u01b7\u018e\u01a6\u01ae\u017f\u0193\u0193")],M=[j("smiley","\u017f\u01a8\u018f\u0187\u01ad\u0184\u0184"),j("vampire","\u0186\u01ba\u01be\u01a5\u0198\u01a6\u01a6\u019e\u01a2\u01af\u01a3\u0187\u0187")],A=[].concat(O,M),U=t(3),S=t(4),G=t.n(S);!function(e){e[e.left=0]="left",e[e.middle=1]="middle",e[e.right=2]="right"}(f||(f={}));var x,B=f,N=function(e,n){return n!==B.left&&n!==B.right?null:(t=n===B.left?e===p.Unknown?p.Black:p.Unknown:e===p.Unknown?p.Empty:p.Unknown,console.debug(n,e,t),t);var t};!function(e){e[e.top=0]="top",e[e.bottom=1]="bottom",e[e.left=2]="left",e[e.right=3]="right"}(x||(x={}));var D,L=x,F=t(12),R=t.n(F),X=function(){return o.a.createElement("svg",{className:R.a.X,viewBox:"0 0 100 100"},o.a.createElement("path",{d:"M 7,7 L 93,93 M 93,7 L 7,93"}))},z=t(2),J=t.n(z),V=o.a.memo(function(e){var n=e.coord,t=e.clickable,r=e.value,l=e.handleMouseDown,u=e.handleMouseOver,c=e.selected,i=e.newVal,s=null!==i?J.a["select"+p[i]]:"",m=G()(Object(U.a)({},J.a.clickable,t),s,c.map(function(e){return J.a[L[e]]}),J.a.Cell);Object(a.useEffect)(0===n[0]&&0===n[1]?function(){return console.count("Cell rerender")}:function(){},[l]);return o.a.createElement("div",{draggable:!1,className:m},o.a.createElement("div",{onDragStart:function(e){return e.preventDefault()},draggable:!1,className:J.a[p[r]],onMouseDown:function(e){return l(e,n)},onMouseOver:function(e){return u(e,n)},onContextMenu:function(e){e.preventDefault(),l(e,n)}},r===p.Empty&&o.a.createElement(X,null)))}),H=t(6),I=t.n(H),K=function(e){var n,t=e.gameArr,r=e.setGameArr,l=e.isSolved,u=Object(a.useState)(null),c=Object(s.a)(u,2),i=c[0],f=c[1],h=Object(a.useState)(null),d=Object(s.a)(h,2),v=d[0],_=d[1],w=Object(a.useState)(null),k=Object(s.a)(w,2),b=k[0],g=k[1];console.time("blah"),Object(a.useEffect)(function(){console.timeEnd("blah")});var E=function(e,n){l||(f(n),g(N(t[n[0]][n[1]],e.button)))},y=function(e){if(null!==b&&null!==i){var n=function(e,n,t,r){for(var a=[n[0],t[0]].sort(function(e,n){return e-n}),o=Object(s.a)(a,2),l=o[0],u=o[1],c=[n[1],t[1]].sort(function(e,n){return e-n}),i=Object(s.a)(c,2),m=i[0],f=i[1],h=C(e),d=l;d<=u;d++)for(var v=m;v<=f;v++)e[d][v]!==p.Unknown&&r!==p.Unknown||(h[d][v]=r);return h}(t,i,v||i,b);r(n)}f(null),_(null)},j=function(e,n){i&&(_(n),console.debug("over",n))},O=function(e){var n=Object(s.a)(e,2),t=n[0],r=n[1],a=[];if(!i||!function(e){var n=Object(s.a)(e,2),t=n[0],r=n[1];return!!i&&(v?m(i[0],v[0],t)&&m(i[1],v[1],r):t===i[0]&&r===i[1])}([t,r]))return a;var o=v?[Math.min(i[0],v[0]),Math.min(i[1],v[1]),Math.max(i[0],v[0]),Math.max(i[1],v[1])]:[i[0],i[1],i[0],i[1]],l=Object(s.a)(o,4),u=l[0],c=l[1],f=l[2],p=l[3];return t===u&&a.push(L.top),r===c&&a.push(L.left),t===f&&a.push(L.bottom),r===p&&a.push(L.right),a},M=t.map(function(e,n){return o.a.createElement("div",{className:I.a.row,key:e.toString()+n},e.map(function(e,t){return o.a.createElement(V,{coord:[n,t],newVal:b,clickable:!l,handleMouseDown:E,handleMouseOver:j,value:l&&e===p.Empty?p.Unknown:e,selected:O([n,t]),key:"".concat(n,",").concat(t)})}))});return o.a.createElement("div",{className:G()((n={},Object(U.a)(n,I.a.CellGrid,!0),Object(U.a)(n,I.a.isSolved,l),n)),onMouseUp:y,onMouseLeave:y},M)},P=t(5),Q=t.n(P),W=function(e){var n=e.clues;return o.a.createElement("div",{className:Q.a.ColClues},n.map(function(e,n){return o.a.createElement("div",{key:e+":"+n},e.map(function(e,t){return o.a.createElement("div",{key:n+""+t},e)}))}))},Z=function(e){var n=e.clues;return o.a.createElement("div",{className:Q.a.RowClues},n.map(function(e,n){return o.a.createElement("div",{key:e+":"+n},e.map(function(e,t){return o.a.createElement("div",{key:n+""+t},e)}))}))},$=function(e){e.gameArr;return o.a.createElement("div",null)},q=t(13),T=t.n(q),Y=!1,ee=new y(Y?(D=15,new Array(15).fill(null).map(function(e){return new Array(D).fill(p.Unknown)})):function(e){return e[(n=0,t=e.length-1,n=Math.ceil(n),t=Math.floor(t),Math.floor(Math.random()*(t-n+1))+n)];var n,t}(A)),ne=function(){var e=Object(a.useState)(ee.arr.map(function(e){return e.map(function(e){return p.Unknown})})),n=Object(s.a)(e,2),t=n[0],r=n[1],l=!function(e,n){if(Y)return!0;for(var t=0;t<e.length;t++)for(var r=0;r<e[t].length;r++){var a=e[t][r],o=n.arr[t][r];if((o===p.Black||a===p.Black)&&a!==o)return!0}return!1}(t,ee);Object(a.useEffect)(function(){l&&console.log(ee.name,"SOLVED!")},[l]);return o.a.createElement("div",{className:T.a.Game,tabIndex:0,onKeyPress:function(e){"~"===e.key&&t&&console.log(w(t))}},o.a.createElement($,{gameArr:t}),o.a.createElement(W,{clues:ee.clues.colClues}),o.a.createElement(Z,{clues:ee.clues.rowClues}),o.a.createElement(K,{isSolved:l,gameArr:t,setGameArr:r}))},te=function(){return o.a.createElement("div",{className:i.a.App},o.a.createElement("header",{className:i.a.AppHeader},"Nonograms"),o.a.createElement(ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.490532a1.chunk.js.map