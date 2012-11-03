(function () {	
	var jq = document.createElement('script'); 
	jq.type = 'text/javascript'; 
	jq.async = true;
    	jq.src =  ('https:' == document.location.protocol ? 'https:' : 'http:') + '//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
	if (jq.readyState) {
            jq.onreadystatechange = function () {
                if (jq.readyState == "loaded" || jq.readyState == "complete") {
                    jq.onreadystatechange = null;
                    loadTweets();
                }
            };
        } else {
            jq.onload = function () {
                loadTweets();
            };
        }

	var s = document.getElementsByTagName('script')[0]; 
	s.parentNode.insertBefore(jq, s);

    //setInterval('changeReferences()', 5000);
})();
/*
var changeReferences = function(){

    if ($('#fullpull').length > 0 ) {
        $('#fullpull').fadeOut('slow', function() {
            $('#fullpull').replaceWith('<div id="atn" style="display: none;"><div class="referenceIconContainer"><a href="http://austrian-training-network.at" target="_blank"><img src="./images/atn.png" alt="Austrian Training Network" /></a></div><p class="center">Corporate and Media Design</p></div>');
            $('#atn').fadeIn('slow');
        });
    }
    else{
        $('#atn').fadeOut('slow', function() {
            $('#atn').replaceWith('<div id="fullpull" style="display: none;"><div class="referenceIconContainer"><a href="http://fullpull-carpbaits.com" target="_blank"><img src="./images/fullpull.min.png" alt="FullPull Carpbaits" /></a></div><p class="center">Web Design sowie Entwurf und Umsetzung eines integrierten Online-Shops für Endverbraucher</p></div>');
            $('#fullpull').fadeIn('slow');
        });
    }

};
*/
var loadTweets = function(){

	$.ajax({
 		dataType: 'jsonp',
    		url: ('https:' == document.location.protocol ? 'https:' : 'http:') + '//api.twitter.com/1/statuses/user_timeline.json?include_rts=true&screen_name=scheiner&count=20&trim_user=true&callback=?',
    		success: function (data) {
			tweet = "";
			for(i = 0; i < data.length; i++){
        			tweet += '<div class="twitterFeed"><a href="https://twitter.com/scheiner/status/' + data[i].id_str + '" target="_blank"><p class="no-margin">' + data[i].text + '</p><span class="twitterTime">' + data[i].created_at + '</span></a></div>';
			}
			$(tweet).appendTo('#twitterContent');
			$('.twitterFeed').animate({
    				opacity: 1
			});
    		}
	});

};
