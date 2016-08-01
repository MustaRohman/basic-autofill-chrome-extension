/**
 * [Creates a list-group item with the relevant website name and username, and adds it to the list-group]
 * @param  {[type]} websiteObj [Must contain websiteName and username property]
 */
function createListGroupItem(websiteObj) {
	console.log("Adding new list item...");
	// With list-group items, heading and text is enclosed within an 'a' element
	var $aElem = $('<a></a>');
	$aElem.toggleClass("list-group-item");
	
	var $h4Elem = $('<h4></h4>');
	$h4Elem.addClass("list-group-item-heading")
	$h4Elem.text(websiteObj.websiteName); 

	var $pElem = $('<p></p>');
	$pElem.text(websiteObj.username);
	$pElem.addClass("list-group-item-text");

	$aElem.append([$h4Elem, $pElem]);

	$aElem.click(function () {
		// Other items are deselected when this one is selected 
		$(".active").toggleClass("active");
		$(this).toggleClass("active");
		$("input, textarea").val("");
		fillForm(websiteObj);

	})
	$(".list-group").append($aElem);
}

/**
 * [Takes an object with website properties (websiteName, url, username, password, notes) and fills 
 * in the settings form]
 * @param  {Object} websiteObj [Takes in object instead of string literals so to emulate function overloading. 
 * For example, settings for a saved website may not have notes data. This is accepted as best practice for overloading.
 * Must contain websiteName, url, username and password properties]
 */
function fillForm(websiteObj) {
	//websiteObj must have these properties, but may not have notes property
	$('#website-name').val(websiteObj.websiteName);
	$('#url').val(websiteObj.url);
	$('#user-field').val(websiteObj.username);
	$('#pass-field').val(websiteObj.password);
	if (websiteObj.hasOwnProperty('notes')){
		console.log("Has notes property");
		$('#notes').val(websiteObj.notes);
	} else {
		console.log("Does not have notes property");
	}
}

function createListGroup(urlList) {
	//This code is for testing the list-group item creation
	for (var i = 10; i >= 0; i--) {
		//With notes
		createListGroupItem({"websiteName":"Github", "username": "testing@test.com", "url":"https://*.co.uk", "password":"something", "notes":"random stuff, and things"});
		//Without notes
		createListGroupItem({"websiteName":"Bitbucket", "username": "testing123@test.com", "url":"https://*.com", "password":"something"});
	}
}

$(document).ready(function () {
	//Retrieve user website data, including url, username and password
	createListGroup("urlList")

	// Autocomplete functionality of the search bar uses an array of strings for suggestions. These names (websiteNames) are for testing purposes
	var websiteNames = ["Github", "Bitbucket", "Google", "Twitter"];
	// Search bar has id #names. This implementes autocomplete function to the textfield with suggestions
	$("#names").autocomplete({
		source: websiteNames
	})

});
