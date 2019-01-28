(function()  {
	var video= document.getElementById( 'video'),
			vendorUrl = window.URL || window.webkitURL;

   navigator.getMedia = navigator.getUserMEdia ||
			navigator.webkitGetUserMedia ||
			navigator.mozGetUserMedia ||
			navigator.msGetUserMedia;

			// Capture video
			navigator.getMedia({
				video: true,
				audio: false
    }, function(stream); {
                 video.src = vendorUrl.createObjectURL(stream);
                 video.play();
    }, function(error) {
			    	// body...
		
			});
})();
