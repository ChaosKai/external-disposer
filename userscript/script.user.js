// ==UserScript==
// @name        Externes Leitstellenpersonal
// @namespace   Leitstellenspiel
// @description 
// @downloadURL https://github.com/ChaosKai/external-disposer/raw/master/userscript/script.user.js
// @include     http*://www.leitstellenspiel.de/*
// @version     0.1
// @author      ChaosKai93
// @grant       none
// ==/UserScript==

var scriptElement1 = document.createElement("script");
scriptElement1.type = "text/javascript";
scriptElement1.src = "https://cdnjs.cloudflare.com/ajax/libs/peerjs/0.3.9/peer.min.js";
document.body.appendChild(scriptElement1);

var scriptElement2 = document.createElement("script");
scriptElement2.type = "text/javascript";
scriptElement2.src = "https://rawgit.com/ChaosKai/external-disposer/master/userscript/lss.js";
document.body.appendChild(scriptElement2);
