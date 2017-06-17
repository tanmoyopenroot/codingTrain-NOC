var vehicles = [], 
		flowfield, 
		resolution = 10;

function setup() {
	createCanvas(640, 360);
	for (var i = 0; i < 120; i++) {
		vehicles.push(new Vehicle(Math.random() * width, Math.random() * height, Math.random() * 2 + 3, Math.random() * 0.1 + 0.5));	
	}

	flowfield = new FlowField(resolution);
}

function draw() {
	background(51);
	// flowfield.display();

	for (var i = 0; i < vehicles.length; i++) {
		vehicles[i].follow(flowfield);
		vehicles[i].update();
		vehicles[i].bound();
		vehicles[i].display();
	}
}