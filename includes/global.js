/* Adds the Google Analytics code to the page */

var gaScriptNode = document.createElement('script');
var documentTargetNode = document.getElementsByTagName('script')[0];
gaScriptNode.src = 'https://www.googletagmanager.com/gtag/js?id=G-B4H56GBEH1';
gaScriptNode.async = 1;
documentTargetNode.parentNode.insertBefore(gaScriptNode, documentTargetNode)

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

gtag('js', new Date());
gtag('config', 'G-B4H56GBEH1');
