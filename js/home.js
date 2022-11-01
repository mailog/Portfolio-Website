var lastScrollTop = 0;
var st;
var hello = true;
var selectedColor = "#fac311";
var unselectedColor = "#828282";

function scrollToAnchor(aid){
    $('html,body').animate({scrollTop: $("#" + aid.toString()).offset().top},2000);
}

$(window).scroll(function(){    
	st = window.pageYOffset || document.documentElement.scrollTop;
	

    /*if($(window).scrollTop() + $(window).height() >= $(document).height() - 50)
    {
    	var tmpToolbar = document.getElementsByClassName("toolbar-txt");
    	for(var i = 0; i < tmpToolbar.length; i++)
		{
			tmpToolbar[i].style.color = "#00CED1";
		}
		document.getElementById("contact-txt").style.color = "#ffd700";
    }
    */   
    if(isScrolledInto($('#hello'),$('#toolbar')))
    {
    	var tmpToolbar = document.getElementsByClassName("toolbar-txt");
	for(var i = 0; i < tmpToolbar.length; i++)
	{
		tmpToolbar[i].style.color = unselectedColor;
	}
	document.getElementById("home-txt").style.color = selectedColor;
	    document.getElementById("intro").getElementsByClassName("title")[0].style.color = selectedColor; 
	    document.getElementById("projects").getElementsByClassName("title")[0].style.color = unselectedColor; 
	    document.getElementById("projects").getElementsByClassName("title")[1].style.color = unselectedColor; 
	    document.getElementById("contact").getElementsByClassName("title")[0].style.color = unselectedColor; 
    }   
    else if($(window).scrollTop() - 100 <= 0)
    {
    	var tmpToolbar = document.getElementsByClassName("toolbar-txt");
	for(var i = 0; i < tmpToolbar.length; i++)
	{
		tmpToolbar[i].style.color = unselectedColor;
	}
	document.getElementById("home-txt").style.color = selectedColor;
	    document.getElementById("intro").getElementsByClassName("title")[0].style.color = selectedColor; 
	    document.getElementById("projects").getElementsByClassName("title")[0].style.color = unselectedColor; 
	    document.getElementById("projects").getElementsByClassName("title")[1].style.color = unselectedColor; 
	    document.getElementById("contact").getElementsByClassName("title")[0].style.color = unselectedColor; 
    } 
	else if(isScrolledInto($('#projects'),$('#toolbar')))
    {
    	var tmpToolbar = document.getElementsByClassName("toolbar-txt");
    	for(var i = 0; i < tmpToolbar.length; i++)
		{
			tmpToolbar[i].style.color = unselectedColor;
		}
		document.getElementById("projects-txt").style.color = selectedColor;
	    document.getElementById("intro").getElementsByClassName("title")[0].style.color = unselectedColor; 
	    document.getElementById("projects").getElementsByClassName("title")[0].style.color = selectedColor; 
	    document.getElementById("projects").getElementsByClassName("title")[1].style.color = selectedColor; 
	    document.getElementById("contact").getElementsByClassName("title")[0].style.color = unselectedColor; 
    }    
	else if(isScrolledInto($('#intro'),$('#toolbar')))
    {
    	var tmpToolbar = document.getElementsByClassName("toolbar-txt");
		for(var i = 0; i < tmpToolbar.length; i++)
		{
			tmpToolbar[i].style.color = unselectedColor;
		}
		document.getElementById("home-txt").style.color = selectedColor;
	    document.getElementById("intro").getElementsByClassName("title")[0].style.color = selectedColor; 
	    document.getElementById("projects").getElementsByClassName("title")[0].style.color = unselectedColor; 
	    document.getElementById("projects").getElementsByClassName("title")[1].style.color = unselectedColor; 

	    document.getElementById("contact").getElementsByClassName("title")[0].style.color = unselectedColor; 
    }
    else if(isScrolledInto($('#contact'),$('#toolbar')))
    {
    	var tmpToolbar = document.getElementsByClassName("toolbar-txt");
		for(var i = 0; i < tmpToolbar.length; i++)
		{
			tmpToolbar[i].style.color = unselectedColor;
		}
		document.getElementById("contact-txt").style.color = selectedColor;
	    document.getElementById("intro").getElementsByClassName("title")[0].style.color = unselectedColor; 
	    document.getElementById("projects").getElementsByClassName("title")[0].style.color = unselectedColor; 
	    document.getElementById("projects").getElementsByClassName("title")[1].style.color = unselectedColor; 

	    document.getElementById("contact").getElementsByClassName("title")[0].style.color = selectedColor; 
    }
    lastScrollTop = st <= 0 ? 0 : st;
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
    $(".box").on("mouseover", function(){
    		$(this).toggleClass("coloredBox");
    });
	
    $(".messageBox").on("mouseover", function(){
    		$(this).toggleClass("coloredMessageBox");
    });
	
	$(".coloredBox").on("mouseover", function(){
    		$(this).toggleClass("coloredBox");
    });
	
    $(".coloredMessageBox").on("mouseover", function(){
    		$(this).toggleClass("coloredMessageBox");
    });
});


$(document).ready(function(){
	document.onclick = function(){
		hello = !hello;
		if(hello)
		{
			$(".box").each(function(){
				$(this).toggleClass("coloredBox", true);
			});
			$(".messageBox").each(function(){
					$(this).toggleClass("coloredMessageBox", true);
			});
		}
		else
		{
			$(".box").each(function(){
				$(this).toggleClass("coloredBox", false);
			});
			$(".messageBox").each(function(){
					$(this).toggleClass("coloredMessageBox", false);
			});
		}
	}
});
