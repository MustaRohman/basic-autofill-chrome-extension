function createListGroupItem(username, websiteName) {
	console.log("Adding new list item...");
	var $aElem = $('<a></a>');
	$aElem.toggleClass("list-group-item");
	
	var $h4Elem = $('<h4></h4>');
	$h4Elem.addClass("list-group-item-heading")
	$h4Elem.text(websiteName); 

	var $pElem = $('<p></p>');
	$pElem.text(username);
	$pElem.addClass("list-group-item-text");

	$aElem.append([$h4Elem, $pElem]);
	$aElem.click(function () {
		console.log("Number of items: ", $(".active").length);
		$(".active").toggleClass("active");
		$(this).toggleClass("active");
	})
	$(".list-group").append($aElem);
}

function createListGroup(urlList) {
	for (var i = 5; i >= 0; i--) {
		createListGroupItem("mustarohman@gmail.com", "Github");
	}
}

$(document).ready(function () {
	createListGroup("urlList")
});
