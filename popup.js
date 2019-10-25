document.addEventListener('DOMContentLoaded', function(){

	chrome.tabs.getSelected(null, function(tab){
		document.getElementById("archiveIs").addEventListener("click", function(){
			chrome.tabs.create({url: "http://archive.today/?run=1&url="+encodeURIComponent(tab.url)});
		});
		document.getElementById("searchIs").addEventListener("click", function(){
			chrome.tabs.create({url: "http://archive.today/"+tab.url});
		});
		document.getElementById("archiveOrg").addEventListener("click", function(){
			chrome.tabs.create({url: "https://web.archive.org/save/"+tab.url});
		});
		document.getElementById("searchOrg").addEventListener("click", function(){
			chrome.tabs.create({url: "https://web.archive.org/web/*/"+tab.url});
		});
	});

});