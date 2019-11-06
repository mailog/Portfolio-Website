var lastScrollTop = 0;
var st;
var hello = true;

function scrollToAnchor(aid){
    $('html,body').animate({scrollTop: $("#" + aid.toString()).offset().top},'slow');
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
		tmpToolbar[i].style.color = "#00CED1";
	}
	document.getElementById("home-txt").style.color = "#ffd700";
	    document.getElementById("intro").getElementsByClassName("title")[0].style.color = "#ffd700"; 
	    document.getElementById("projects").getElementsByClassName("title")[0].style.color = "#00CED1"; 
	    document.getElementById("contact").getElementsByClassName("title")[0].style.color = "#00CED1"; 
    }   
    else if($(window).scrollTop() - 100 <= 0)
    {
    	var tmpToolbar = document.getElementsByClassName("toolbar-txt");
	for(var i = 0; i < tmpToolbar.length; i++)
	{
		tmpToolbar[i].style.color = "#00CED1";
	}
	document.getElementById("home-txt").style.color = "#ffd700";
	    document.getElementById("intro").getElementsByClassName("title")[0].style.color = "#ffd700"; 
	    document.getElementById("projects").getElementsByClassName("title")[0].style.color = "#00CED1"; 
	    document.getElementById("contact").getElementsByClassName("title")[0].style.color = "#00CED1"; 
    } 
	else if(isScrolledInto($('#projects'),$('#toolbar')))
    {
    	var tmpToolbar = document.getElementsByClassName("toolbar-txt");
    	for(var i = 0; i < tmpToolbar.length; i++)
		{
			tmpToolbar[i].style.color = "#00CED1";
		}
		document.getElementById("projects-txt").style.color = "#ffd700";
	    document.getElementById("intro").getElementsByClassName("title")[0].style.color = "#00CED1"; 
	    document.getElementById("projects").getElementsByClassName("title")[0].style.color = "#ffd700"; 
	    document.getElementById("contact").getElementsByClassName("title")[0].style.color = "#00CED1"; 
    }    
	else if(isScrolledInto($('#intro'),$('#toolbar')))
    {
    	var tmpToolbar = document.getElementsByClassName("toolbar-txt");
		for(var i = 0; i < tmpToolbar.length; i++)
		{
			tmpToolbar[i].style.color = "#00CED1";
		}
		document.getElementById("home-txt").style.color = "#ffd700";
	    document.getElementById("intro").getElementsByClassName("title")[0].style.color = "#ffd700"; 
	    document.getElementById("projects").getElementsByClassName("title")[0].style.color = "#00CED1"; 
	    document.getElementById("contact").getElementsByClassName("title")[0].style.color = "#00CED1"; 
    }
    else if(isScrolledInto($('#contact'),$('#toolbar')))
    {
    	var tmpToolbar = document.getElementsByClassName("toolbar-txt");
		for(var i = 0; i < tmpToolbar.length; i++)
		{
			tmpToolbar[i].style.color = "#00CED1";
		}
		document.getElementById("contact-txt").style.color = "#ffd700";
	    document.getElementById("intro").getElementsByClassName("title")[0].style.color = "#00CED1"; 
	    document.getElementById("projects").getElementsByClassName("title")[0].style.color = "#00CED1"; 
	    document.getElementById("contact").getElementsByClassName("title")[0].style.color = "#ffd700"; 
    }
    	
    /*if(isScrolledInto($('#contact'),$('#toolbar')))
    {
    	var tmpToolbar = document.getElementsByClassName("toolbar-txt");
		for(var i = 0; i < tmpToolbar.length; i++)
		{
			tmpToolbar[i].style.color = "#FF1493";
		}
		document.getElementById("contact-txt").style.color = "#ffd700";
    }
    else if($(window).scrollTop() + $(window).height() === $(document).height())
    {
    	var tmpToolbar = document.getElementsByClassName("toolbar-txt");
		for(var i = 0; i < tmpToolbar.length; i++)
		{
			tmpToolbar[i].style.color = "#00CED1";
		}
		document.getElementById("contact-txt").style.color = "#ffd700";
	    document.getElementById("intro").getElementsByClassName("title")[0].style.color = "#00CED1"; 
	    document.getElementById("projects").getElementsByClassName("title")[0].style.color = "#00CED1"; 
	    document.getElementById("contact").getElementsByClassName("title")[0].style.color = "#ffd700"; 
    }
    else if($(window).scrollTop() + $(window).height() === $(document).height())
    {
    	var tmpToolbar = document.getElementsByClassName("toolbar-txt");
		for(var i = 0; i < tmpToolbar.length; i++)
		{
			tmpToolbar[i].style.color = "#00CED1";
		}
		document.getElementById("contact-txt").style.color = "#ffd700";
	    document.getElementById("intro").getElementsByClassName("title")[0].style.color = "#00CED1"; 
	    document.getElementById("projects").getElementsByClassName("title")[0].style.color = "#00CED1"; 
	    document.getElementById("contact").getElementsByClassName("title")[0].style.color = "#ffd700"; 
    }
    */
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
