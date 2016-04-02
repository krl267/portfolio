$(document).ready(function() {
	$('.about').hide();
	$('.project-list').hide();
	$('#port-2').hide().css({"opacity":"0","margin-top":"+10px"});
	$('#port-3').hide().css({"opacity":"0","margin-top":"+10px"});
	var imageNumber = $('#slideshow > span').length;
	console.log(imageNumber);
	var currentImage = 0;


	//Sets scroll length to 15rem
	$(".scroll").click(function(event){
        $('html, body').animate({scrollTop: '+=1000px'}, 800);
    });

	//Right Arrow Nav
	$('#arrow-right').click(function() {
		if (currentImage == 0) {
			$('.intro').fadeOut(function() {
				$(this).hide();
				$('.about').fadeIn(function(){
					$(this).show();
				});
			currentImage++;
			});
		}else if (currentImage == 1) {
			$('.about').fadeOut(function() {
				$(this).hide();
				$('.project-list').fadeIn(function(){
					$(this).show();
				});
			currentImage++;
			});
		}else if (currentImage == 2) {
			$('.project-list').fadeOut(function() {
				$(this).hide();
				$('.intro').fadeIn(function(){
					$(this).show();
				});
			currentImage--;
			currentImage--;
			});
		}
	});

	//Left Arrow Nav
	$('#arrow-left').click(function() {
		if (currentImage == 0) {
			$('.intro').fadeOut(function() {
				$(this).hide;
				$('.project-list').fadeIn(function() {
					$(this).show();
				});
			});
			currentImage++;
			currentImage++;
		}else if (currentImage == 1) {
			$('.about').fadeOut(function() {
				$(this).hide;
				$('.intro').fadeIn(function() {
					$(this).show();
				});
			});
			currentImage--;
		}else if (currentImage == 2) {
			$('.project-list').fadeOut(function() {
				$(this).hide;
				$('.about').fadeIn(function() {
					$(this).show();
				});
			});
			currentImage--;
		}
	});

	var fadeCount = 0
	

	//Scroll Through Projects Nav
	 //Firefox
 	 $('.project-list').bind('mousewheel', function(e){
     if(e.originalEvent.wheelDelta < 0 && fadeCount == 0) {
         //scroll down
         console.log('Down');
         $('#port-1').animate({'opacity':'0', "margin-top":"-10px"}, 'slow',function() {
         	$(this).hide();
         	$('#port-2').show().animate({'opacity':'1',"margin-top":"-10px"},'slow')
         });;
         fadeCount++;
     }else if (e.originalEvent.wheelDelta < 0 && fadeCount == 1) {
         //scroll down
         console.log('Down');
         $('#port-2').animate({'opacity':'0', "margin-top":"-10px"}, 'slow',function() {
         	$(this).hide();
         	$('#port-3').show().animate({'opacity':'1',"margin-top":"-10px"},'slow');
         });;
         fadeCount++;
     }else if (e.originalEvent.wheelDelta > 0 && fadeCount == 2){
         //scroll up
         console.log('Up');
         $('#port-3').animate({'opacity':'0', "margin-top":"+10px"}, 'slow',function() {
         	$(this).hide();
         	$('#port-2').show().animate({'opacity':'1',"margin-top":"+10px"},'slow');
         });	
         fadeCount--;
     }else if ((e.originalEvent.wheelDelta > 0 && fadeCount == 1)) {
     	$('#port-2').animate({'opacity':'0', "margin-top":"+10px"}, 'slow',function() {
         	$(this).hide();
         	$('#port-1').show().animate({'opacity':'1',"margin-top":"+10px"},'slow');
         });
     	fadeCount--;
     }

     //prevent page from scrolling
     return false;
 });

 //IE, Opera, Safari, Chrome
 $('.project-container').bind('mousewheel', function(e){
     if(e.originalEvent.wheelDelta < 0 && fadeCount == 0) {
         //scroll down
         console.log('Down');
         $('#port-1').animate({'opacity':'0', "margin-top":"-10px"}, 'slow',function() {
         	$(this).hide();
         	$('#port-2').show().animate({'opacity':'1',"margin-top":"-10px"},'slow')
         });;
         fadeCount++;
     }else if (e.originalEvent.wheelDelta < 0 && fadeCount == 1) {
         //scroll down
         console.log('Down');
         $('#port-2').animate({'opacity':'0', "margin-top":"-10px"}, 'slow',function() {
         	$(this).hide();
         	$('#port-3').show().animate({'opacity':'1',"margin-top":"-10px"},'slow');
         });;
         fadeCount++;
     }else if (e.originalEvent.wheelDelta > 0 && fadeCount == 2){
         //scroll up
         console.log('Up');
         $('#port-3').animate({'opacity':'0', "margin-top":"+10px"}, 'slow',function() {
         	$(this).hide();
         	$('#port-2').show().animate({'opacity':'1',"margin-top":"+10px"},'slow');
         });	
         fadeCount--;
     }else if ((e.originalEvent.wheelDelta > 0 && fadeCount == 1)) {
     	$('#port-2').animate({'opacity':'0', "margin-top":"+10px"}, 'slow',function() {
         	$(this).hide();
         	$('#port-1').show().animate({'opacity':'1',"margin-top":"+10px"},'slow');
         });
     	fadeCount--;
     }

     //prevent page fom scrolling
     return false;
 });


 //Hide nav bar on scroll
 var headerHidden = false;
//Firefox 

//IE, Opera, Safari, Chrome
 $('.main-content').bind('mousewheel', function(e) {
 	if (e.originalEvent.wheelDelta < 0 && headerHidden == false) {
 		$('.header').animate({'margin-bottom':'-100px','opacity':'0'},'slow');
 		headerHidden = true;
 	}else if (e.originalEvent.wheelDelta > 0 && headerHidden == true) {
 		$('.header').animate({'opacity':'1'},'slow');
 		headerHidden = false;
 	}
 });



 //Nav with NavBar
 //Home
 $('#home').click(function() {
 	if (currentImage == 1) {
 		//Go to home from about
 		$('.about').fadeOut(function() {
				$(this).hide;
				$('.intro').fadeIn(function() {
					$(this).show();
				});
			});
			currentImage--;
 	}else if (currentImage == 2) {
 		//Go to home from projects
 		$('.project-list').fadeOut(function() {
				$(this).hide();
				$('.intro').fadeIn(function(){
					$(this).show();
				});
			currentImage--;
			currentImage--;
			});
 	}else {
 		//Do nothing if on the page
 	}
 });

 //About
 $('#about').click(function() {
 	if (currentImage == 0) {
 		//navigate from home to about
 		$('.intro').fadeOut(function() {
				$(this).hide();
				$('.about').fadeIn(function(){
					$(this).show();
				});
			currentImage++;
			});
 	}else if (currentImage == 2) {
 		//navigatge from projects to about
 		$('.project-list').fadeOut(function() {
				$(this).hide;
				$('.about').fadeIn(function() {
					$(this).show();
				});
			});
			currentImage--;
 	}else {
 		//Do nothing remain on page
 	}
 });

 //Projects
 $('#projects').click(function() {
 	if(currentImage == 0) {
 		//Navigate from home to projects
 		$('.intro').fadeOut(function() {
				$(this).hide;
				$('.project-list').fadeIn(function() {
					$(this).show();
				});
			});
			currentImage++;
			currentImage++;
 	}else if (currentImage == 1) {
 		//Nav from about to projects
 		$('.about').fadeOut(function() {
				$(this).hide();
				$('.project-list').fadeIn(function(){
					$(this).show();
				});
			currentImage++;
			});
 	}else {
 		//Remain on projects page
 	}
 });




});
