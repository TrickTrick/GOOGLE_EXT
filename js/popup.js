var button = document.getElementById('button');
var buttonAction = function () {
    // console.dir(chrome);
    chrome.tabs.executeScript({
         code: 'ready()'
    });
}
button.addEventListener("click", buttonAction);