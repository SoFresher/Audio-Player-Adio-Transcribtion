$(function(){
	var highlight = "The beauty of those beautiful beards you are growing, the nice hijab you are wearing, it is when "+
	"you are shy. Can you imagine! a sister with hijab dancing on street, there is a street jams in the society and she "+ 
	"is there dancing, publicly to people to see Subhanallah!"

	// console.log(highlight);
	
	var audio = document.getElementById('passage-audio');
	
	audio.addEventListener('timeupdate',function(){
	    var currentTime = audio.currentTime;
	    console.log(currentTime);
	},false);
	for (var i = 0; i < wordCount(highlight); i++) {
		var splitWord = highlight.split(" ");
		var currentWord = splitWord[i];
		// console.log(currentWord);

		$('#texts').append(
		  $('<span/>')
		    .attr("data-dur", "2.9")
		    .attr("data-begin", "2.5")
		    .append("<span/>")
		    .text(currentWord + " ")
		);
	}


	function wordCount(string) { 
	  return string.split(" ").length;
	}
	// console.log(wordCount(highlight));
})
