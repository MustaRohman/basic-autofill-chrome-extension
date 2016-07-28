$(document).ready(function () {
	console.log("Adding new list item...");
	var $aElem = $('<a></a>');
	$aElem.addClass("list-group-item");
	var $h4Elem = $('<h4></h4>');
	$h4Elem.text("Github"); 
	var $pElem = $('<p></p>');
	$pElem.text("mustarohman@gmail.com");
	$aElem.append([$h4Elem, $pElem]);
	$(".list-group").append($aElem);
})
