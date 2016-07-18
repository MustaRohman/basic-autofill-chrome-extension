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

var url = window.location.href;

if (confirm("Fill in form?")){
  fillForm("url");
}

