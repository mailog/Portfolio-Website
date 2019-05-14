$(document).ready(function(){
	dragElement(document.getElementById(("spacecanvas")));
	dragElement(document.getElementById(("snakecanvas")));
	dragElement(document.getElementById(("froggercanvas")));
	
	function dragElement(elmnt){
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	
		console.log(elmnt.id);
		elmnt.onmousedown = dragMouseDown;
		
		console.log("dragelement");
		function dragMouseDown(e){
			elmnt.style.position = "absolute";
			console.log("dragmousedown");
			e = e || window.event;
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			document.onmousemove = elementDrag;
		}
		
		function elementDrag(e){
			console.log("elementdrag");
			e = e || window.event;
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		}
		
		function closeDragElement(){
			console.log("closedragelement");
			document.onmouseup = null;
			document.onmousemove = null;
		}
		
	}
})