
function storeURL(url) {
    //  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    //       var storedURL = [];
    //       if (typeof(Storage) !== "undefined") {
    //         storedURL = JSON.parse(localStorage.getItem("urls"));
    //         if (storedURL === null) {
    //           console.assert(storedURL !== null, "storedURL is null");
    //           storedURL = [];
    //         }
    //         storedURL.push(url);
    //         localStorage.setItem("urls", JSON.stringify(storedURL));
    //         console.log(url + " has been stored");
    //       }
    // });
    chrome.storage.sync.get('urls', function (items) {
        var urls = items.urls;
        if (!urls) {
            urls = [];
        } 
        urls.push(url.trim());
        chrome.storage.sync.set({'urls': urls});
        console.log(url, " has been stored!");
    });
}

function fillUsername() {
  chrome.tabs.executeScript(null, { file: "jquery-3.0.0.js" }, function () {
    chrome.tabs.executeScript(null, { file: "content-script.js" });
    });
}

function isUrlStored(url) {
  // if (typeof(Storage) !== "undefined") {
  //       if (localStorage.urls) {
  //         var storedURL = JSON.parse(localStorage.getItem("urls"));
  //         if (storedURL !== null){
  //           for (var i = 0; i < storedURL.length; i++) {
  //             if (storedURL[i] == url) {
  //               console.log(storedURL[i]);
  //               return true;
  //             } 
  //           }
  //         }
  //       }
  // }
  var value = false;
  var urls = [];
  chrome.storage.sync.get('urls', function (items) {
    console.log(url, ": Current page url");
    urls = items.urls;
  }); 

  for (var i = 0; i < urls.length; i++) {
        var currentURL = urls[i];
        console.log(currentURL, ": url at ", i);
        value = currentURL.trim() === url.trim();
        if (value){
            break;
        }   
    }
  return value;
}

document.addEventListener('DOMContentLoaded', function () {

    var currentURL = "";

    chrome.tabs.getSelected(null, function (tab) {
            currentURL = tab.url;
    });

    var setButton = document.getElementById('settings');
    setButton.addEventListener('click', function () {
        var value = isUrlStored(currentURL);
      if (value) {
        fillUsername();
        console.log("Form has been filled");
      } else {
        console.log("No stored data");
      }
    });

    var viewButton = document.getElementById('view');
    viewButton.addEventListener('click', function () {
      if (!isUrlStored(currentURL)){
         storeURL(currentURL);
       } else {
          console.log("Website Url already stored");
        
       }
    })

});