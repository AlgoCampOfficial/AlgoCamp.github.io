  var snapA = Snap("#svgA");

  // SVG A - "Squiggly" Path
  var myPathA = snapA.path("M62.9 14.9c-25-7.74-56.6 4.8-60.4 24.3-3.73 19.6 21.6 35 39.6 37.6 42.8 6.2 72.9-53.4 116-58.9 65-18.2 191 101 215 28.8 5-16.7-7-49.1-34-44-34 11.5-31 46.5-14 69.3 9.38 12.6 24.2 20.6 39.8 22.9 91.4 9.05 102-98.9 176-86.7 18.8 3.81 33 17.3 36.7 34.6 2.01 10.2.124 21.1-5.18 30.1").attr({
    id: "squiggle",
    fill: "none",
    strokeWidth: "4",
    stroke: "#ffffff",
    strokeMiterLimit: "10",
    strokeDasharray: "9 9",
    strokeDashOffset: "988.01"
  });

  // SVG A - Draw Path
  var len = myPathA.getTotalLength();

  // SVG1 - Animate Path
  myPathA.attr({
	  stroke: '#fff',
	  strokeWidth: 4,
    fill: 'none',
    // Animate Path
    "stroke-dasharray": "12 6",
    "stroke-dashoffset": len
  }).animate({"stroke-dashoffset": 10}, 2500,mina.easeinout);

  // SVG A - Circle
  var CircleA = snapA.circle(32,32,16);
  CircleA.attr({
    fill: "#3f4445",
    stroke: "#fff",
    strokeWidth: 2
  });

  setTimeout( function() {
    Snap.animate(0, len, function( value ) {
       movePoint = myPathA.getPointAtLength( value );
       CircleA.attr({ cx: movePoint.x, cy: movePoint.y }); // move along path via cx & cy attributes
    }, 2500,mina.easeinout);
  });

