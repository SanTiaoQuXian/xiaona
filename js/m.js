
$(function(){
	//支付页面slide
	if($('.slide').length>0){
		var swiper = new Swiper('.swiper-container', {
			direction:'horizontal',
		    slidesPerView: 1,
		    spaceBetween: 0,
		    loop: true,
		    autoplay:3000,
		    speed:800,
		    pagination:'.swiper-pagination'
		});
	}	
})
