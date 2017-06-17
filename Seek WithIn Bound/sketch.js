var vehicle, mouse;

function setup() {
	createCanvas(640, 360);
	vehicle = new Vehicle(width/2, height/2);
	mouse = new Vector(mouseX, mouseY);
}

function draw() {
	background(51);

	mouse.setXY(mouseX, mouseY);

	fill(127);
	stroke(200);
	strokeWeight(2);
	ellipse(mouse.getX(), mouse.getY(), 48, 48);


	vehicle.seek();
	vehicle.update();
	vehicle.display();
}