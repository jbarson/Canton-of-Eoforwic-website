/*
 * Javascript for the Eoforwic website
 * Written by Jon Barson
 */

// Initialize variables
	var picList=new Array("swordshield.jpg","thorolfr.jpg","blacksmith.jpg","clayfire.jpg","melee.jpg","sharpstuff.jpg");
	var i=0;	
			
	function picChange(){
			var d=document.getElementById("title");
			d.className = "back" + i ;
			i++
			if (i>=picList.length){i=0};
		}
	function rotateImage(){
			document.getElementById("title").className = "back5";
			setInterval(picChange,30000);
		}
	window.onload = function(){rotateImage()}