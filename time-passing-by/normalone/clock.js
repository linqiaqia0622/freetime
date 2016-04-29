var canvas =document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
	
	
	function drawCircle() {
		ctx.beginPath();
		ctx.arc(canvas.width/2,canvas.height/2,150,0,Math.PI*2,true);
		ctx.strokeStyle="#ff0080";
		ctx.fillStyle='#ffe6f7';
		ctx.fill();
		ctx.stroke();
	}
	
	function drawNumber() {
		var numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
		var angle = 0;
		var numberwidth = 0;
		
		numbers.forEach(function(number) {
			angle = Math.PI/6*(number-3);
			numberwidth = ctx.measureText(number).width;
			ctx.fillStyle='#cc0088';
			ctx.font="30px Arial";
			ctx.fillText(number,
			canvas.width/2+Math.cos(angle)*130-numberwidth/2,
			canvas.height/2+Math.sin(angle)*130+10);
		});
	}
	
	function drawcenter() {
		ctx.beginPath();
		ctx.arc(canvas.width/2,canvas.height/2,5,0,Math.PI*2,true);
		ctx.fill();
	}
	
	function drawhand(loc,ishour) {
		var angle = (Math.PI*2)*(loc/60)-Math.PI/2;
		var handradius = ishour?80:100;
		
		ctx.moveTo(canvas.width/2,canvas.height/2);
		ctx.lineTo(canvas.width/2+Math.cos(angle)*handradius,canvas.height/2+Math.sin(angle)*handradius);
		ctx.stroke();
	}
	
	function drawhands() {
		var date = new Date();
		var hour = date.getHours();
		
		hour = hour>12?hour-12:hour;
		
		drawhand(hour*5+(date.getMinutes()/60)*5,true,0.5);
	    drawhand(date.getMinutes(),false,0.5);
        drawhand(date.getSeconds(),false,0.5);
	}

  function drawclock(){
      drawCircle();
	  drawNumber();
      drawcenter();
      drawhands();
  } 

  loop=setInterval(drawclock,1000);
	
	
