
function storeURL(url) {
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

function isUrlStored(url) {
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

$( document ).ready(function () {

    var currentURL = "";

    chrome.tabs.getSelected(null, function (tab) {
            currentURL = tab.url;
    });

    var viewButton = $("#view");
    viewButton.click(function () {
      if (!isUrlStored(currentURL)){
         storeURL(currentURL);
      } else {
         console.log("Website Url already stored");
       }
    })

    var settingsButton = $("#settings");
    settingsButton.click(function () {
        window.open("settings.html");
    })

});