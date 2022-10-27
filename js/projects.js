var lastScrollTop = 0;
var st;
var hello = true;
var projects = [];

$(window).scroll(function(){    
	for(var i = 0; i < projects.length; i++)
	{
		if(isScrolledInto(projects[i], $('#toolbar')))
		{
			projects[i].style.opacity = 1;
		}
		else
		{
			projects[i].style.opacity = 0.5;
		}
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
	projects = document.getElementsByClassName("Project");
});
