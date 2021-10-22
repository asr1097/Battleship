(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"html, body {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n.container {\n    position: relative;\n    top: 50%;\n    transform: translate(0, -50%);\n}\n\n.boardsDiv {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.boardDiv {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    width: 350px;\n    height: 350px;\n    border: 2px solid black;\n}\n\n.gridElement {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid black;\n    transition: all 0.2s ease;\n}\n\n.gridElement > p {\n    text-align: center;\n    margin: 0;\n    font-size: 14px;\n}\n\n.board2 > .gridElement:hover {\n    transform: scale(1.1);\n    background-color: yellow;\n}\n\n.restartDiv {\n    display: none;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.winnerDiv {\n    display: none;\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    transform: translate(-50%);\n}\n\n.winnerDiv > p {\n    font-size: 20px;\n    color: blue;\n}\n\n.ship {\n    background-color: blue;\n}\n\n.hit {\n    background-color: red;\n}\n\n.miss {\n    background-color: rgb(129, 129, 129, 0.9);\n}",""]);const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=a(f,r);r.byIndex=l,t.splice(l,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var l=n(o[i]);t[l].references--}for(var s=r(e,a),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};(()=>{n.d(r,{T:()=>D,b:()=>$});const e=[4,3,3,2,2,2,1,1,1],t=(e,t)=>({length:e,coordinates:t,hit:e=>(t[e]="X",t),isSunk:()=>t.every((e=>"X"===e))}),a=n=>{const r=n;let a=[],o=[];return(()=>{for(let n=0;n<e.length;n++){let o=t(e[n],r[n]);a.push(o)}})(),{shipsCoord:r,ships:a,missedShots:o,receiveAttack:e=>{for(let t=0;t<a.length;t++)if(a[t].coordinates.includes(e)){let n=a[t].coordinates.indexOf(e);return a[t].hit(n),!a[t].isSunk()||!a.every((e=>!0===e.isSunk()))||"All sunk!"}return o.push(e),!1}}},o=document.querySelector(".container"),i=e=>{let t=document.querySelector(".boardsDiv"),n=document.createElement("div");n.classList.add("boardDiv"),n.classList.add(e);for(let t=1;t<=100;t++){let r=document.createElement("div");r.dataset.index=t,r.classList.add(`${e}gridElement${t}`),r.classList.add(`${e}gridElement`),r.classList.add("gridElement"),n.appendChild(r)}t.appendChild(n)},l=()=>{document.querySelector(".restartDiv").style.display="none"},s=()=>{document.querySelector(".winnerP").textContent="",document.querySelector(".winnerDiv").style.display="none"},c=()=>{(()=>{let e=document.createElement("div");e.classList.add("boardsDiv"),o.appendChild(e)})(),i("board1"),i("board2"),(()=>{let e=document.createElement("div");e.classList.add("restartDiv");let t=document.createElement("button");t.textContent="Restart",t.classList.add("restartBtn"),t.addEventListener("click",(function(){l(),s(),document.querySelector(".board1").remove(),document.querySelector(".board2").remove(),$()})),e.appendChild(t),o.appendChild(e)})(),(()=>{let e=document.createElement("div");e.classList.add("winnerDiv");let t=document.createElement("p");t.classList.add("winnerP"),e.appendChild(t),o.appendChild(e)})()},d=(e,t,n)=>{let r=document.querySelector(`.${n}gridElement${e}`),a=document.createElement("p");t?(a.textContent="X",r.classList.add("hit")):(a.textContent="•",r.classList.add("miss")),r.removeEventListener("click",D),r.appendChild(a)},u=()=>{document.querySelector(".restartDiv").style.display="block"},p=e=>{document.querySelector(".winnerDiv").style.display="block",document.querySelector(".winnerP").textContent=`${e} won!`};var f=n(379),m=n.n(f),v=n(795),h=n.n(v),y=n(569),g=n.n(y),b=n(565),S=n.n(b),x=n(216),k=n.n(x),C=n(589),E=n.n(C),q=n(426),w={};let L,I,A,M,H;w.styleTagTransform=E(),w.setAttributes=S(),w.insert=g().bind(null,"head"),w.domAPI=h(),w.insertStyleElement=k(),m()(q.Z,w),q.Z&&q.Z.locals&&q.Z.locals;const D=e=>{let t=e.target.dataset.index;t=parseInt(t),I.attackedSquare=t},T=()=>{I=void 0,A=void 0,M=void 0,H=void 0},P=()=>{if(!I&&!A){I={name:prompt("Player name: "),attackedSquare:null,attackBoard:e=>e,promptForSquares:()=>{let t=[],n=[];for(let r=0;r<e.length;r++){let a=prompt(`Enter ship's coordinates (e.g. 34,44): (${e[r]}) squares`).split(",");if(!a.every((e=>!n.includes(e)))){alert("Square(s) is already taken!"),r--;continue}if(a.length!==e[r]){alert("Please enter right number of squares."),r--;continue}if(a.length>1){let e=parseInt(a[1])-parseInt(a[0]),t=[];for(let e=0;e<a.length-1;e++){let n=parseInt(a[e+1])-parseInt(a[e]);t.push(n)}if(t.some((t=>t!==e))){alert("Please enter sequential squares!"),r--;continue}let n=[];for(let e=0;e<a.length;e++)n.push(parseInt(a[e]));if(n.some((e=>e%10==1&&e!==n[0]))){alert("Ship must be placed on 1 row."),r--;continue}}n=[...n,...a];let o=a.map((e=>parseInt(e)));t.push(o)}return t}},A=(()=>{let t=[];const n=e=>{let t=[];for(let n=1;n<=e;n++)t.push(n);return t};return t=n(100),{computer:!0,name:"Computer",movesAvailable:t,makeCompMove:()=>{var e;return[t[(e=t.length,Math.floor(Math.random()*e))],!1]},getCoordinates:()=>{let t=[],r=[],a=n(100);const o=(e,t)=>{let n=[e],a=[e];for(let r=1;r<t;r++){let t=e+r,o=e-r;n.push(t),a.push(o)}return a.sort(((e,t)=>e-t)),n.every((e=>!r.includes(e)&&e>0&&e<101))&&l(n)?n:!(!a.every((e=>!r.includes(e)&&e>0&&e<101))||!l(a))&&a},i=(e,t)=>{let n=[e],a=[e];for(let r=1,o=10;r<t;r++,o+=10){let t=e+o,r=e-o;n.push(t),a.push(r)}return a.sort(((e,t)=>e-t)),n.every((e=>!r.includes(e)&&e>0&&e<101))?n:!!a.every((e=>!r.includes(e)&&e>0&&e<101))&&a},l=e=>{let t=parseInt(e[0]/10),n=parseInt(e[e.length-1]/10);return t===n||n+10===e[e.length-1]};for(let n=0;n<e.length;n++){let l=a[Math.floor(Math.random()*a.length)],s=[];if(n%2==0)if(s=o(l,e[n]),s){if(!s){n--;continue}}else s=i(l,e[n]);else if(s=i(l,e[n]),s){if(!s){n--;continue}}else s=o(l,e[n]);r=[...r,...s],t.push(s),s.forEach((e=>{let t=a.indexOf(e);a.splice(t,1)}))}return t},getAdjacentSquare:(e,n)=>{let r,a=((e,n)=>{let r=[e-1,e+1],a=[e-10,e+10];return e%10==0&&(r=[e-1]),e%10==1&&(r=[e+1]),"horizontal"===n?(r=r.filter((e=>t.includes(e)&&e>0&&e<101)),[r,[]]):"vertical"===n?(a=a.filter((e=>t.includes(e)&&e>0&&e<101)),[[],a]):(r=r.filter((e=>t.includes(e)&&e>0&&e<101)),a=a.filter((e=>t.includes(e)&&e>0&&e<101)),[r,a])})(e,n);if(a[0][1])r=[a[0][1],"horizontal"];else if(a[0][0])r=[a[0][0],"horizontal"];else if(a[1][1])r=[a[1][1],"vertical"];else{if(!a[1][0])return!1;r=[a[1][0],"vertical"]}return r},removeAvailableMove:e=>{let n=t.indexOf(e);t.splice(n,1)}}})();let t=a(I.promptForSquares()),n=a(A.getCoordinates());t.name="board1",n.name="board2",I.board=t,A.board=n,M=I,H=A,c(),((e,t)=>{for(let n=0;n<t.length;n++)for(let r=0;r<t[n].length;r++)document.querySelector(`.${e}gridElement${t[n][r]}`).classList.add("ship")})("board1",t.shipsCoord),document.querySelectorAll(".board2gridElement").forEach((e=>e.addEventListener("click",D)))}if(null===M.attackedSquare||M.computer){if(M.computer){let e;M.lastHit?(e=M.getAdjacentSquare(M.lastHit,M.direction),e||(e=M.makeCompMove())):e=M.makeCompMove(),M.removeAvailableMove(e[0]);let t=H.board.receiveAttack(e[0]);if(d(e[0],t,H.board.name),"All sunk!"!==t)return t?(M.lastHit=e[0],M.direction=e[1],M.firstHit&&e[1]?"horizontal"===M.direction&&e[0]%10==0?void(M.lastHit=M.firstHit):void("vertical"===M.direction&&e[0]+10>100&&(M.lastHit=M.firstHit)):(M.lastHit=e[0],M.firstHit=e[0],void(M.direction=e[1]))):(e[1]?M.direction&&(M.lastHit=M.firstHit):(M.firstHit=!1,M.lastHit=!1,M.direction=!1),void(()=>{let e=M;M=H,H=e})());clearInterval(L),setTimeout((function(){p(M.name),T(),u()}),0)}}else{let e=M.attackBoard(M.attackedSquare),t=H.board.receiveAttack(e);if(d(e,t,H.board.name),M.attackedSquare=null,"All sunk!"===t)clearInterval(L),setTimeout((function(){p(M.name),T(),u()}),0);else{if(t)return;{let e=M;M=H,H=e}}}},$=()=>{L=setInterval(P,600)};$()})()})();