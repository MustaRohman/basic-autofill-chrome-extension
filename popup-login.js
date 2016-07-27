function checkLoginCredentials() {
    // body...
}


$(document).ready(function () {
    var submitBtn = $("#submit");
    console.log(submitBtn.length);
    submitBtn.click(function () {
        console.log("Testing Submit button");
        checkLoginCredentials();
        chrome.browserAction.setPopup({popup: "popup.html"});
        window.location.href = "popup.html";
    });
});

