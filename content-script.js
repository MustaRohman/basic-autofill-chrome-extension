/**
 * @param  {[type]} Url String
 * @return {Boolean} Yes, if URL is stored in local storage
 */
function isUrlStored(storedUrls, pageURL) {
  console.log(pageUrl, ": Current page url. No. of stored URLS: ", storedUrls.length);
  var value = false;
    for (var i = 0; i < storedUrls.length; i++) {
        var currentURL = urls[i];
        console.log(currentURL, ": url at ", i);
        if (currentURL.trim() === pageUrl.trim()){
          value = true;
          break;
        }   
    }
    return value;
}

//Add event listener to submit button
/**
 * @param  {String} Uses URL string to 
 * @return {[type]}
 */
function fillForm(url) {
    var userNameInput = $("input[type='email']");
    console.log("Number of text inputs: ", userNameInput.length);
    if (userNameInput.length === 0) {
        userNameInput = $("input[type='text']");
    }
    userNameInput.first().val('MustaRohman');
    $("input[type='password']").first().val('Random');
}

var pageUrl = window.location.href;
console.log(pageUrl.trim());
var value = false;

chrome.storage.sync.get('urls', function (items) {
    urls = items.urls;
    if (isUrlStored(urls, pageUrl)){
      console.log("url has been found");
          if (confirm("Fill in form?")){
            fillForm("url");
            console.log("Form has been filled");
          } else {
            console.log("form filling cancelled")
          }
    }
  }); 

// var url = window.location.href;
// console.log(url.trim());
// if (isUrlStored(url)){
//   if (confirm("Fill in form?")){
//     fillForm("url");
//     console.log("Form has been filled");
//   }
// } else {
//   console.log(url, " not found")
// }
