var vehicles = [], 
		desiredDistance = 50;

function setup() {
	var text = createP("Drag the mouse to generate new vehicles.");
	text.position(10,365);


	createCanvas(640, 360);
	for (var i = 0; i < 80; i++) 
		vehicles.push(new Vehicle(0 + Math.random() * width, 0 + Math.random() * height));	
}

function draw() {
	background(51);

	for (var i = 0; i < vehicles.length; i++) {
		vehicles[i].flock(vehicles, desiredDistance);
		vehicles[i].update();
		vehicles[i].border();
		vehicles[i].display();
	}
} 

function mouseDragged() {
  vehicles.push(new Vehicle(mouseX, mouseY));
}
