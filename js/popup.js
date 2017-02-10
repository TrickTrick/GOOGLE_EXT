var button = document.getElementById('button');
var buttonAction = function () {
    // call function in ActiveTab from content.js
    chrome.tabs.executeScript({
         code: 'ready()'
    });
}

button.addEventListener("click", buttonAction);