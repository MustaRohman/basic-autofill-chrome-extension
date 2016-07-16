
var userNameInput = $("input[type='email']");
console.log("Number of text inputs: ", userNameInput.length);
if (userNameInput.length === 0) {
	userNameInput = $("input[type='text']");
}
userNameInput.first().val('MustaRohman');
$("input[type='password']").first().val('Random');


console.log("Web page is ready!");
