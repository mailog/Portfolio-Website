var lastScrollTop = 0;
var st;

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
	else if($(window).scrollTop() + $(window).height() === $(document).height())
    {
    	var tmpToolbar = document.getElementsByClassName("toolbar-txt");
		for(var i = 0; i < tmpToolbar.length; i++)
		{
			tmpToolbar[i].style.color = "#FF1493";
		}
		document.getElementById("contact-txt").style.color = "#ffd700";
	    document.getElementById("intro").getElementsByClassName("title")[0].style.color = "#00CED1"; 
	    document.getElementById("projects").getElementsByClassName("title")[0].style.color = "#00CED1"; 
	    document.getElementById("contact").getElementsByClassName("title")[0].style.color = "#ffd700"; 
    }
    
    else
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
    }*/
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
    	if(this.className == "box"){
    		$(this).toggleClass("coloredBox");
    	}
    });
});

$(document).ready(function(){
    $(".messageBox").on("mouseover", function(){
    	if(this.className == "messageBox"){
    		$(this).toggleClass("coloredMessageBox");
    	}
    });
});

$(document).ready(function(){
	document.onclick = function(){
		$(".box").each(function(){
			if(Math.random() >= 0.75)
			{
	        	$(this).toggleClass("coloredBox");
			}
		});
		$(".messageBox").each(function(){
			if(Math.random() >= 0.75)
			{
				$(this).toggleClass("coloredMessageBox");
			}
		});
	}
});
