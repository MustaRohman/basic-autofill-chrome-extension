/**
 * @param  {[type]} Url String
 * @return {Boolean} Yes, if URL is stored in local storage
 */
function isUrlStored(storedUrls, pageURL) {
  console.log(pageUrl, ": Current page url. No. of stored URLS: ", storedUrls.length);
  var value = false;
    for (var i = 0; i < storedUrls.length; i++) {
        var currentURL = storedUrls[i];
        console.log(currentURL, ": url at ", i);
        if (currentURL.trim() === pageUrl.trim()){
          value = true;
          break;
        }   
    }
    return value;
}

/**
 * @param  {String} Uses URL string to 
 * @return {[type]}
 */
function getInputFields() {
    var userNameInput = $("input[type='email']");
    console.log("Number of text inputs: ", userNameInput.length);
    if (userNameInput.length === 0) {
        userNameInput = $("input[type='text']");
    }
    var inputFields = [userNameInput.first(), $("input[type='password']").first()];
    return inputFields;
}

function saveData(url) {
  var submitButton = $("input[type='submit']");
  submitButton.first().click(function () {
    if(confirm("Save form data?")){
      console.log("Saving form data...");
      // Retrieve data from form, and store using API
      var inputFields = getInputFields();
      // Here is where we would retrieve the values from the input fields
    }
  })
}

var pageUrl = window.location.href;
if (!isUrlStored(pageUrl)){
  saveData(pageUrl);
}
console.log(pageUrl.trim());

chrome.storage.sync.get('urls', function (items) {
    urls = items.urls;
    if (isUrlStored(urls, pageUrl)){
      console.log("url has been found");
          if (confirm("Fill in form?")){
            var inputFields = getInputFields();
            inputFields[0].val('MustaRohman');
            inputFields[1].val('Random');
            console.log("Form has been filled");
          } else {
            console.log("form filling cancelled")
          }
    }
  }); 

