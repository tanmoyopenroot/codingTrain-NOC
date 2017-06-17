function Vehicle(x, y) {
	this.accleration = new Vector(0, 0);
	this.velocity = new Vector(0, 0);
	this.position = new Vector(x, y);
	this.r = 6;
	this.angle = 0;
	this.maxSpeed = 4;
	this.maxForce = 0.1;
}


Vehicle.prototype.update = function() {
	this.velocity.addTo(this.accleration);
	// this.velocity.limitTo(this.maxSpeed);
	this.position.addTo(this.velocity);
	this.accleration.mulBy(0);

};

Vehicle.prototype.seek = function(target) {
	// console.log(target.getX());
	var desire = target.sub(this.position);
	desire.normalize();
	desire.mulBy(this.maxSpeed);

	var steer = desire.sub(this.velocity);
	steer.limitTo(this.maxForce);

	this.accleration.addTo(steer);
};

Vehicle.prototype.getNormalPoint = function(p, s, e) {
	var SP_Vector = p.sub(s),
			SE_Vector = e.sub(s),
			normalPoint;

			// console.log(s.getLength());
	// console.log(angleBetween);

	SE_Vector.normalize();
	// console.log(SP_Vector.getY());
	// console.log(SE_Vector.getLength());
	// SE_Vector.mulBy(SP_Vector.getLength() * Math.cos(angleBetween));
	SE_Vector.mulBy(SP_Vector.dot(SE_Vector));
	// console.log(SE_Vector.getLength());

	normalPoint =  s.add(SE_Vector);
	// console.log(s.getX());
	ellipse(normalPoint.getX(), normalPoint.getY(), 10, 10);

	return normalPoint;
};


Vehicle.prototype.follow = function(target) {
	var v_copy = this.velocity.copy(),
			predictLocation,
			futurePathLocation,
			distance; 

	// console.log(v_copy.getY());

	v_copy.normalize();

	// console.log(v_copy.getY());

	v_copy.mulBy(50);
	
	predictLocation = this.position.add(v_copy);
	ellipse(predictLocation.getX(), predictLocation.getY(), 10, 10);
	// console.log(predictLocation.getX());
	// console.log(target.start.getY());
	futurePathLocation = this.getNormalPoint(predictLocation, target.start, target.end);
	// ellipse(futurePathLocation.getX(), futurePathLocation.getY(), 10, 10);
	// console.log(futurePathLocation.getX());


	distance = predictLocation.dist(futurePathLocation);
	// console.log(distance);
	// console.log(futurePathLocation.getX());
	// console.log(futurePathLocation.getLength());

	// if (distance > target.radius) {
		this.seek(futurePathLocation);
		// noLoop();
	// }

};

Vehicle.prototype.border = function() {
	if (this.position.getX() > width)
		this.position.setX(10);
	// console.log(this.position.getX());
}	

Vehicle.prototype.display = function() {
	push();
	fill(127);
	stroke(200);
	strokeWeight(2);
	translate(this.position.getX(), this.position.getY());
	rotate(Math.atan2(this.velocity.getY(), this.velocity.getX()) - Math.PI/2);
	beginShape();
	vertex(0, this.r * 2);
	vertex(-this.r, -this.r*2);
	vertex(this.r, -this.r*2);
	endShape(CLOSE);
	pop();
};