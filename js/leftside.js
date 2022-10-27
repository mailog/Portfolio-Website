var profilepic, pixelpic;

$(window).scroll(function(){    
	if(isScrolledInto($('#projects'), $('#toolbar')))
	{
		profilepic.style.opacity = 0;
		pixelpic.style.opacity = 1;
	}
	else
	{
		profilepic.style.opacity = 1;
		pixelpic.style.opacity = 0;
	}
});

function isScrolledInto(elem,tlbr)
{
    var tlbr;
    if (st > lastScrollTop){
    	tlbr = $(tlbr).offset().top + $(tlbr).innerHeight()/2;// downscroll code
     } else {
    	tlbr = $(tlbr).offset().top + $(tlbr).innerHeight()/2; // upscroll code
     }
	var elemTop = $(elem).position().top;
	var elemBot = $(elem).position().top + $(elem).outerHeight(true);
    return ((tlbr > elemTop) && (tlbr < elemBot));
}

$(document).ready(function(){
	profilepic = document.getElementById("profilepic");
	pixelpic = document.getElementById("pixelpic");
});