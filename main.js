status="";

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  
    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();
  
    inputBox = createInput();
    inputBox.position(10, 10);
  
    start();
  }
  
  function start() {
    console.log("Status: Detecting Objects");
  
    let value = inputBox.value();
    // Store the value from the input box in a variable
  
    model = ml5.objectDetector('cocossd', modelLoaded);
  }
  
  function modelLoaded() {
    console.log("Model loaded");
    status = true;
  }
  
  function draw() {
    image(video, 0, 0, width, height);
    // Display the webcam feed on the canvas
  }