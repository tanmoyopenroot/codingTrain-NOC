function Path(startVector, endVector, pathRadius) {
	this.start = startVector;
	this.end = endVector;
	this.radius = pathRadius;
}

Path.prototype.display = function() {
	push();
	// translate(0, 0);
	strokeWeight(this.radius * 2);
	stroke(200,100);
	// console.log(this.end.getX());
	line(this.start.getX(), this.start.getY(), this.end.getX(), this.end.getY());
	strokeWeight(1);
	stroke(200);
	line(this.start.getX(), this.start.getY(), this.end.getX(), this.end.getY());
	pop();
};