function checkForm() {
	var fail = [];
	if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#email").val())) {
	}
	else {
		fail.push("valid email address");
	}
	if($("#message").val() == "") {
		fail.push("message");
	}
	if(fail.length == 0) {
		$("#formerror").html("Thank you for your message");
    $("#formerror").css("color", "green");
	} else {
    $("#formerror").html("Please enter the following: " + fail);
    $("#formerror").css("color", "red");
  }
}

$(window).scroll(function() {
  $("#line").css({
    'height': 250 + ($(this).scrollTop())
  })
});

function myMap() {
	var myCenter = new google.maps.LatLng(37.435105, -122.12426);
    var mapOptions = {
        center: myCenter,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }

var map = new google.maps.Map(document.getElementById("map"), mapOptions);


var marker = new google.maps.Marker({position: myCenter});

marker.setMap(map);
} 

$(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 700) {
          $(this).addClass("slide2");
        }
    });
  });

$(document).ready(function() {
  $("#eventmenu").mouseenter(function(){
      $("#dropdown").slideDown();
  }); 

  $("#eventmenu").mouseleave(function(){
      $("#dropdown").slideUp();
  }); 

  $("#eventmenu2").mouseenter(function(){
      $("#dropdown2").slideDown();
  }); 

  $("#eventmenu2").mouseleave(function(){
      $("#dropdown2").slideUp();
  }); 
});

$("#objective").click(function(){
    $("#objectivepara").slideToggle();
}); 

$("#lectureform").click(function(){
    $("#lectureformpara").slideToggle();
}); 

$("#members").click(function(){
    $("#memberspara").slideToggle();
}); 

$("#coursewarecontent").click(function(){
    $("#coursewarecontentpara").slideToggle();
}); 

$("#recentresults").click(function(){
    $("#recentresultspara").slideToggle();
}); 

$("#futureplan").click(function(){
    $("#futureplanpara").slideToggle();
});

function rotate(x) {
  x.classList.toggle("change")
  $("#phonenavlinks").slideToggle(500)
  }

