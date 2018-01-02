 $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
            $("#carousel-pause").click(function(){
                $("#mycarousel").carousel('pause');
            });
			
			
                        $("#carousel-button").click(function(){
                if ($("#carousel-button").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carousel-button").children("span").removeClass('fa-pause');
                    $("#carousel-button").children("span").addClass('fa-play');
                }
                else if ($("#carousel-button").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carousel-button").children("span").removeClass('fa-play');
                    $("#carousel-button").children("span").addClass('fa-pause');                    
                }
            });
	 
	 $("#reservejq").click(function(){
	 $("#reserveModal").modal(
		 {
			show:true
		 })
	 });
	 
	 $("#loginjq").click(function(){
	 $("#loginModal").modal(
		 {
			show:true
		 })
	 });
	
            
        });
    