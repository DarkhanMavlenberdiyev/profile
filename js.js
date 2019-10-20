

$(document).ready( function(){
	

	$('#myName').css('animation-duration','2s');


	$('.header').mouseover(function(){
		
		$('span').css('color','blue');
	});
	$('.header').mouseout(function(){
		$('span').css('color','red');
	});


		
	$('#imgChangeSize').on('click',function(){
		
		$('.img1').toggleClass('img12');
		
	});

	var imgs = ['dazai.jpg','dazai3.jpg','dazai2.jpg'];
	var ind = 0;
	$('#imgChange').on('click',function(){
			if (ind>2) {
				ind=0;
				$('.img1').attr('src',imgs[0]);
				ind++;
			}else{
				$('.img1').attr('src',imgs[ind++]);

			}
	});

	$('.img1').mouseover(function(){
		$('.img1').css({height:'400px',width:'400px'});
	});
	$('.img1').mouseout(function(){
		$('.img1').css({height:'300px',width:'300px'});
	});


	
});


