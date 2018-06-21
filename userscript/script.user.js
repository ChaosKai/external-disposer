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

var scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.src = "https://rawgit.com/ChaosKai/external-disposer/master/page/script/jquery.min.js";
//document.body.appendChild(scriptElement);

var scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.src = "https://rawgit.com/ChaosKai/external-disposer/master/page/script/simplepeer.min.js";
document.body.appendChild(scriptElement);

var scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.src = "https://rawgit.com/ChaosKai/external-disposer/master/page/script/clipboard.min.js";
document.body.appendChild(scriptElement);

var scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.src = "https://rawgit.com/ChaosKai/external-disposer/master/userscript/lss.js";
document.body.appendChild(scriptElement);
