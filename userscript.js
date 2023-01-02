// ==UserScript==
// @name         Message invalide
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  L'immunité contre le message invalide
// @author       You
// @match       http://www.jeuxvideo.com/forums/*
// @match       https://www.jeuxvideo.com/forums/*
// @match       http://www.jeuxvideo.com/forums/*
// @match       https://www.jeuxvideo.com/forums/*
// @match       http://www.jeuxvideo.com/recherche/forums/*
// @match       https://www.jeuxvideo.com/recherche/forums/*
// @icon        https://image.noelshack.com/fichiers/2023/01/1/1672664689-vtff.png
// @grant       none
// ==/UserScript==

(function() {

    window.addEventListener('load', function() {
        let elementToSurvey = "message_topic"
        let messageArea = document.getElementById(elementToSurvey);

        messageArea.addEventListener('change', () => {
            messageArea.value = messageArea.value.split('\n').filter(function(line){
                return line.indexOf( "> Le         " ) == -1;
            }).join('\n')
        });

}, false);


    'use strict';

    // Your code here...
})();