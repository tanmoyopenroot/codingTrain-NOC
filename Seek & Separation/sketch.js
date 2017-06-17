var vehicles = [], 
		desiredDistance = 25,
		mouse;

function setup() {
	var text = createP("Drag the mouse to generate new vehicles.");
	text.position(10,365);


	createCanvas(640, 360);
	for (var i = 0; i < 25; i++) 
		vehicles.push(new Vehicle(0 + Math.random() * width, 0 + Math.random() * height, 1 + Math.random() * 2 , 0.1 + Math.random() * 0.2));	

	mouse = new Vector(mouseX, mouseY);
}

function draw() {
	background(51);

	mouse.setXY(mouseX, mouseY);

	for (var i = 0; i < vehicles.length; i++) {
		vehicles[i].applyForce(mouse, vehicles, desiredDistance);
		vehicles[i].update();
		vehicles[i].border();
		vehicles[i].display();
	}

	console.log(mouse.getX());

	fill(127);
	stroke(200);
	strokeWeight(2);
	ellipse(mouse.getX(), mouse.getY(), 48, 48);
} 

function mouseDragged() {
  vehicles.push(new Vehicle(mouse.getX(), mouse.getY(), 1 + Math.random() * 2 , 0.1 + Math.random() * 0.2));
}