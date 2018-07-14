function loader()
	{
		var canvas = document.getElementById( "canvas" );
		var canvas2d = canvas.getContext("2d");
		
		// Rectangles
		canvas2d.fillStyle = "rgba( 0, 0, 200, 1 )";
		canvas2d.fillRect( 30, 30, 75, 70 );
		
		canvas2d.fillStyle = "rgba(200, 200, 0, 1 )";
		canvas2d.fillRect( 70, 50, 55, 70 );
		
		canvas2d.fillStyle = "rgba( 200, 0, 0, 1 )";
		canvas2d.fillRect( 90, 50, 75, 50 );
		
		// Filled triangle
		canvas2d.fillStyle = "rgba( 0, 200, 0, 0.5 )";
		canvas2d.beginPath();
		canvas2d.moveTo( 225, 25 );
		canvas2d.lineTo( 305, 25 ); // Canvas 상 절대위치f
		canvas2d.lineTo( 225, 105 );
		canvas2d.closePath();
		canvas2d.fill();
		
		// Stroked triangles
		canvas2d.beginPath();
		canvas2d.strokeStyle = "rgba( 200, 0, 0, 0.5 )";
		canvas2d.moveTo( 110, 205 );
		canvas2d.lineTo( 110, 125 );
		canvas2d.lineTo( 30, 205 );
		canvas2d.closePath();
		canvas2d.stroke();
		
		canvas2d.beginPath();
		canvas2d.moveTo( 100, 205 );
		canvas2d.lineTo( 100, 125 );
		canvas2d.lineTo( 20, 205 );
		canvas2d.closePath();
		canvas2d.stroke();
		
		canvas2d.beginPath();
		canvas2d.moveTo( 90, 205 );
		canvas2d.lineTo( 90, 125 );
		canvas2d.lineTo( 10, 205 );
		canvas2d.closePath();
		canvas2d.stroke();
		
		// Heart
		canvas2d.fillStyle = "rgba( 200, 0, 0, 0.5 )";
		canvas2d.beginPath();
		canvas2d.moveTo( 75, 250 );
		canvas2d.bezierCurveTo( 75, 247, 70, 235, 50, 235 );
                  // cpx1, cpy1, cpx2, cpy2, x, y

		canvas2d.bezierCurveTo( 20, 235, 20, 272.5, 20, 272);
		canvas2d.bezierCurveTo( 20, 290, 40, 312, 75, 330 );
		canvas2d.bezierCurveTo( 110, 312, 130, 290, 130, 272 );
		canvas2d.bezierCurveTo( 130, 272.5, 130, 235, 100, 235 );
		canvas2d.bezierCurveTo( 85, 235, 75, 247, 75, 250 );
		canvas2d.closePath();
		canvas2d.fill();
		
		// Quadratic curves
		canvas2d.strokeStyle = "rgba( 0, 0, 0, 1 )";
		canvas2d.beginPath();
		canvas2d.moveTo( 275, 125 );
		canvas2d.quadraticCurveTo( 225, 125, 225, 162 ); // cpx, cpy, x, y
		canvas2d.quadraticCurveTo( 260, 200, 265, 200 );
		canvas2d.quadraticCurveTo( 325, 200, 325, 162 );
		canvas2d.quadraticCurveTo( 325, 125, 275, 125 );
		canvas2d.closePath();
		canvas2d.stroke();
		
		// Arcs
		canvas2d.beginPath();
		canvas2d.arc( 275,275,50,0,Math.PI * 2, true );
		canvas2d.moveTo( 310, 275 );
		canvas2d.arc( 275,275,35,0,0.75*Math.PI, false);
		
		canvas2d.moveTo( 300, 255 );
		canvas2d.arc( 265,255,35,0,0.5*Math.PI, false);
		
		canvas2d.moveTo( 200, 255 );
		canvas2d.arc( 245,255,35,0,0.2*Math.PI, false );
		canvas2d.closePath();
		canvas2d.stroke();
		
		canvas2d.font = "italic 40px sans-serif";
		canvas2d.strokeText( "Hello!", 50, 400 );
	}