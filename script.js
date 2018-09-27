// Parse the URL parameter
	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

  document.getElementById("name1").innerHTML = getParameterByName('name1');
	document.getElementById("teacher1").innerHTML = getParameterByName('teacher1');
	document.getElementById("teacher2").innerHTML = getParameterByName('teacher2');
	document.getElementById("teacher3").innerHTML = getParameterByName('teacher3');
	document.getElementById("teacher4").innerHTML = getParameterByName('teacher4');
	document.getElementById("teacher5").innerHTML = getParameterByName('teacher5');
	document.getElementById("teacher6").innerHTML = getParameterByName('teacher6');
	document.getElementById("room1").innerHTML = getParameterByName('room1');
	document.getElementById("room2").innerHTML = getParameterByName('room2');
	document.getElementById("room3").innerHTML = getParameterByName('room3');
	document.getElementById("room4").innerHTML = getParameterByName('room4');
	document.getElementById("room5").innerHTML = getParameterByName('room5');
	document.getElementById("room6").innerHTML = getParameterByName('room6');
