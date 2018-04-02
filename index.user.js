// ==UserScript==
// @name         YouTube Subscriptions as startpage
// @namespace    https://mikaelporttila.se/
// @version      0.1
// @description  Make subscriptions the YouTube start page. 
// @author       Mikael Porttila
// @match        https://www.youtube.com/
// @grant        none
// @run-at document-start
// ==/UserScript==
window.location.replace('https://www.youtube.com/feed/subscriptions');
