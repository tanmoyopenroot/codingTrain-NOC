var vehicle, path;

function setup() {
	createCanvas(640, 360);
	var startVector = new Vector(0, height/3),
			endVector = new Vector(width, 2*height/3);
	path = new Path(startVector, endVector, 20);
	vehicle = new Vehicle(width/3, height/1.2);

	// console.log(path.start.getY());	
}

function draw() {
	background(51);

	path.display();


	vehicle.follow(path);
	vehicle.update();
	vehicle.border();
	vehicle.display();
}