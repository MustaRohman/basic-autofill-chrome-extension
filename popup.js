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



document.addEventListener('DOMContentLoaded', function () {
	// var anObject = {
	// 	name: "anObject",
	// 	number: 28,
	// 	something: 'something'
	// }

	// alert(anObject.name);

  // chrome.tabs.query({active:true, currentWindow:true}, function (tabs) {
  // 	// body...
  // 	var tab = tabs[0];
  // 	tab.
  // })

	var setButton = document.getElementById('settings');
	setButton.addEventListener('click', function () {
		// body...
		window.open("http://www.google.com");
	})

  
  

});