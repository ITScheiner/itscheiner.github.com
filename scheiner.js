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
    	
	var _gaq = _gaq || [];
  	_gaq.push(['_setAccount', 'UA-33475703-1']);
  	_gaq.push(['_setDomainName', 'it-scheiner.at']);
  	_gaq.push(['_trackPageview']);
	var ga = document.createElement('script'); 
	ga.type = 'text/javascript'; 
	ga.async = true;
    	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';

	var s = document.getElementsByTagName('script')[0]; 
	s.parentNode.insertBefore(jq, s);
	s.parentNode.insertBefore(ga, s);
})();

var loadTweets = function(){

	$.ajax({
 		dataType: 'jsonp',
    		url: ('https:' == document.location.protocol ? 'https:' : 'http:') + '//api.twitter.com/1/statuses/user_timeline.json?include_rts=true&screen_name=scheiner&count=20&trim_user=true&callback=?',
    		success: function (data) {
			tweet = "";
			for(i = 0; i < data.length; i++){
        			tweet += '<div class="twitterFeed"><a href="https://twitter.com/scheiner/status/' + data[i].id_str + '" target="_blank"><p>' + data[i].text + '</p><span class="twitterTime">' + data[i].created_at + '</span></a></div>';
			}
			$(tweet).appendTo('#twitterContent');
			$('.twitterFeed').animate({
    				opacity: 1
			});
    		}
	});

};
