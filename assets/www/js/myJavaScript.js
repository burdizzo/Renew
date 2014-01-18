	function init() {
           document.addEventListener("deviceready", onDeviceReady, false);
		  		   
 	       }   
		
	// Device is ready
    function onDeviceReady() {
        navigator.splashscreen.hide();
		document.getElementById("devready").innerHTML = "OnDeviceReady fired.";
    }	
	
 	
				$(document).on("pageshow","#landingmap", function() {
                var yourStartLatLng = new google.maps.LatLng(53.270872,-9.056643);
				alert("pageshow was called");
                $('#mapcanvas').gmap({'center': yourStartLatLng});
				getPanelHeight();
				getMaxHeight();
        });
	 
		
	function getMaxHeight() 
	{
	   var header = $('[data-role=header]').outerHeight();
		var footer = $('[data-role=footer]').outerHeight();
		var content = $("div[data-role='content']:visible:visible");
		var window_size_height = $(window).height();
		
		var window_size_height = (window_size_height - header - footer);
		if((content.outerHeight() - header - footer) <= window_size_height) {
			window_size_height -= (content.outerHeight() - content.height());
		} 
		$.mobile.activePage.find('[data-role="content"]').height(window_size_height);
		
		alert('content height is now:' + window_size_height );
	}
	
	function getPanelHeight() {
       var header = $('[data-role=header]').outerHeight();
	   var panel = $('.ui-panel').height();
	   var panelheight = panel - header;
	   
			$('.ui-panel').css({
				'top': (header - 2 ),
				'min-height': panelheight
			});
    }	
