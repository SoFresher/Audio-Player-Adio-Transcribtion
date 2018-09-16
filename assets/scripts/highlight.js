function getdata(url){
	$.ajax({
	    url: url,
	    type: 'get',
	    dataType: 'json',
	    error: function (XMLHttpRequest, textStatus, errorThrown) {

			// console.log(JSON.stringify(XMLHttpRequest));
			// console.log(JSON.stringify(textStatus));
			// console.log(JSON.stringify(errorThrown));
			if (errorThrown) {
				console.log(errorThrown);
				errorThrown = 'Presently Not Available.\nContact the Administrators'
				$('#alert').show();
				document.getElementById("transcript").value = document.getElementById("transcript").value+'Transcript here...';
				document.getElementById("chunks").value = document.getElementById("chunks").value+'Transcript here...';
	      		$('#downasch').attr('disabled', 'true');
	      		$('#download').attr('disabled', 'true');
			}
	      	// console.log(document.getElementById("chunks").value);
	      	// if (document.getElementById("chunks").value == 'Transcript here...') {
	      	// }
	      	// alert(errorThrown);

	    },
	    success: function (data) {
	        // console.log(data);
	        var link = data.link;
	        // console.log(link);

	        var transcript = data.transcript;
	        // console.log(transcript);
	      	$('#mp3').attr("src", link);
	        $('#transcript').html(transcript);
	        $('#chunks').html(transcript);
	        $('#alert').hide();
	    }
	});
}
// document.getElementById("transcript").value = ''
// document.getElementById("chunks").value = ''
$('#alert').hide();
var get = window.location.search.substring(1);
// console.log(get);
for (var i = 1;  ; i++) {
	if (get == i) {
		url = 'https://raw.githubusercontent.com/SoFresher/Audio-Player-Adio-Transcribtion/master/assets/json/'+get+'.json';
		// alert(url);
		getdata(url);

	break;
	}
}
// alert($(document).width()+'\n'+$(window).height());
if ($(window).width() < 768 || $(window).height() < 500) {
	$('#texts').hide();
}
