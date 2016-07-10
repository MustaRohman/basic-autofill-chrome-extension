// document.addEventListenerdocument.addEventListener('DOMContentLoaded', function() {
//   var checkPageButton = document.getElementById('checkPage');
//   checkPageButton.addEventListener('click', function() {

//     chrome.tabs.getSelected(null, function(tab) {
//       d = document;

//       var f = d.createElement('form');
//       f.action = 'http://gtmetrix.com/analyze.html?bm';
//       f.method = 'post';
//       var i = d.createElement('input');
//       i.type = 'hidden';
//       i.name = 'url';
//       i.value = tab.url;
//       f.appendChild(i);
//       d.body.appendChild(f);
//       f.submit();
//     });
//   }, false);
// }, false);


function storeURL() {
     chrome.tabs.query({active:true, currentWindow:true}, function (tabs) {
          var activeTab = tabs[0];
          var tabURL = activeTab.url;
          localStorage.setItem("url", tabURL);

     });

} ;

function fillUsername() {
    // body...
    chrome.tabs.executeScript({
          code: 'var formObjects = document.getElementsByClassName("form-control"); console.log("Number of items: " + formObjects.length); var userField = formObjects[0]; userField.value = "Musta Rohman";'
    });
    // var userField = formObjects[0];
    // userField.value = "Musta Rohman";
}


document.addEventListener('DOMContentLoaded', function () {

    var currentTab;

    var setButton = document.getElementById('settings');
    setButton.addEventListener('click', function () {

        // console.log("hellooooo");

        // chrome.tabs.getSelected(null, function (tab) {
        //     currentTab = tab;
        //     tab.console.log(tab.title);
        // });
        fillUsername();

        // if (typeof(Storage) !== "undefined") {
        //     storeURL();
        // } else {
        //     alert("Sorry");
        // }

        // chrome.tabs.executeScript({
        //   code: 'console.log("Testing")'
        // });
    });

    var viewButton = document.getElementById('view');
    viewButton.addEventListener('click', function () {
         var tabURL = localStorage.url;
         alert(tabURL);
    })

});