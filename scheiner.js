$(document).ready(function() {

	$.ajax({
 		dataType: 'jsonp',
    		url: 'https://api.twitter.com/1/statuses/user_timeline.json?include_rts=true&screen_name=scheiner&count=20&trim_user=true&callback=?',
    		success: function (data) {
			tweet = "";
			for(i = 0; i < data.length; i++){
        			tweet += '<div class="twitterFeed"><a href="http://twitter.com/scheiner/status/' + data[i].id_str + '" target="_blank"><p>' + data[i].text + '</p><span class="twitterTime">' + data[i].created_at + '</span></a></div>';
			}
			$(tweet).appendTo('#twitterContent');
			$('.twitterFeed').animate({
    				opacity: 1
			});
    		}
	});

});
