// var formObjects = document.getElementsByClassName("form-control");
// console.log("Number of items: " + formObjects.length);
// formObjects[0].value = "MustaRohman@test.com";
var textInput = $("input[type='email']");
console.log("Number of text inputs: ", textInput.length);
if (textInput === "undefined"){
	textInput = $("input[type='text']");
}
textInput.first().val('MustaRohman');
$("input[type='password']").first().val('Random');


