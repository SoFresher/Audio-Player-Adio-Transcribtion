$('#inputTextToSave').hide();
function loadFileAsText(){
	var fileToLoad = document.getElementById("fileToLoad").files[0];
	if (!fileToLoad) {
		alert('No file is chosen.')
	}
	else{
		var fileReader = new FileReader();
		fileReader.onload = function(fileLoadedEvent){
			var csv = fileLoadedEvent.target.result;
			document.getElementById("inputTextToSave").value = csv;

			localStorage.id = csv;
			console.log(localStorage.id);
		};

		fileReader.readAsText(fileToLoad, "UTF-8");
		// $('#inputTextToSave').show();

		window.location.replace("player-trans.html");
	} 
}