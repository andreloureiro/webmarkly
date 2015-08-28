chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    console.log(msg);
    sendResponse(document.all[0].outerHTML);
});
