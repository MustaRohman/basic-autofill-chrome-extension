
function storeURL(url) {
     chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
          var storedURL = [];
          if (typeof(Storage) !== "undefined") {
            storedURL = JSON.parse(localStorage.getItem("urls"));
            if (storedURL === null) {
              console.assert(storedURL !== null, "storedURL is null");
              storedURL = [];
            }
            storedURL.push(url);
            localStorage.setItem("urls", JSON.stringify(storedURL));
          }
    });
}

function fillUsername() {
    chrome.tabs.executeScript(null, {file : "content-script.js"});
}

function isUrlStored(url) {
  if (typeof(Storage) !== "undefined") {
        if (localStorage.urls) {
          var storedURL = JSON.parse(localStorage.getItem("urls"));
          for (var i = 0; i < storedURL.length; i++) {
            if (storedURL[i] == url) {
              return true;
            } 
          }
        }
  }
  return false;
} 

document.addEventListener('DOMContentLoaded', function () {

    var currentURL;

    chrome.tabs.getSelected(null, function (tab) {
            currentURL = tab.url;
    });
    var checkURL = isUrlStored(currentURL);    // if (typeof checkURL === 'boolean'){
    //   alert("YES boolean");
    // } else {
    //   alert("NOT boolean");
    // }
    // chrome.tabs.executeScript({
    //   code: 'console.log(checkURL)'
    // })

    



    var setButton = document.getElementById('settings');
    setButton.addEventListener('click', function () {

      if (checkURL) {
        fillUsername();
        chrome.tabs.executeScript({
          code: 'console.log("Auto fill form?")'
        })
      } else {
        chrome.tabs.executeScript({
          code: 'console.log("No stored data")'
        })
      }
        // fillUsername();
    });

    var viewButton = document.getElementById('view');
    viewButton.addEventListener('click', function () {
         // var tabURL = localStorage.url;
         // alert(tabURL);
    })

});