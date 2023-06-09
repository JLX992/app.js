(function() {
  var canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  var context = canvas.getContext('2d');
  var isDrawing = false;
  var previousX = 0;
  var previousY = 0;

  function startDrawing(event) {
    isDrawing = true;
    previousX = event.pageX - window.pageXOffset;
    previousY = event.pageY - window.pageYOffset;
  }

  function draw(event) {
    if (!isDrawing) return;

    var currentX = event.pageX - window.pageXOffset;
    var currentY = event.pageY - window.pageYOffset;

    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.stroke();

    previousX = currentX;
    previousY = currentY;
  }

  function stopDrawing() {
    isDrawing = false;
  }

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);

  // Enable pointer events on the canvas, so it doesn't block interaction with underlying elements
  canvas.style.pointerEvents = 'auto';
})();
