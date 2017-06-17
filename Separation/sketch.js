var vehicles = [], desiredDistance = 25;

function setup() {
	var text = createP("Drag the mouse to generate new vehicles.");
	text.position(10,365);


	createCanvas(640, 360);
	for (var i = 0; i < 50; i++) 
		vehicles.push(new Vehicle(0 + Math.random() * width, 0 + Math.random() * height, 1 + Math.random() * 2 , 0.1 + Math.random() * 0.2));	
}

function draw() {
	background(51);

	for (var i = 0; i < vehicles.length; i++) {
		vehicles[i].separate(vehicles, desiredDistance);
		vehicles[i].update();
		vehicles[i].border();
		vehicles[i].display();
	}

	// ellipse(mouseX, mouseY, 28, 28);
} 

function mouseDragged() {
  vehicles.push(new Vehicle(mouseX, mouseY, 1 + Math.random() * 2 , 0.1 + Math.random() * 0.2));
}