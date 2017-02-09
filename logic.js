var button = document.getElementById('button');
var buttonAction = function () {
    var logo = document.getElementById("logo");
        console.debug(logo);
    // if( logo.length > 0 ){
    //     console.debug(logo.tagName);
    // } else {
    //     console.debug("Logo is empty");
    // }
}
button.addEventListener("click", buttonAction);
chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
});
