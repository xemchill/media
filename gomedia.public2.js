﻿function setCookie(name,value,days){var date,expires;if(days){date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString();}else{expires="";}
document.cookie=name+"="+value+expires+"; path=/";}
function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1);if(c.indexOf(name)!=-1){return c.substring(name.length,c.length);}}
return "";}
function Gophim(postid,episode,server) {
        jQuery.ajax({
            type: "POST",
            url: base_url + "wp-admin/admin-ajax.php",
			data: {
                   action     : 'halim_ajax_player',           
                   episode    : episode,
                   server     : server,
                   postid     : postid
				},
            success: function(data) {
                jQuery("#media-player-box").html(data);
                jQuery('html, body').animate({
                    scrollTop: jQuery("#media-player-box").offset().top
                }, 500);
            }
        });
}

