function Vehicle(x, y, ms, mf) {
	this.accleration = new Vector(0, 0);
	this.velocity = new Vector(0, 0);
	this.position = new Vector(x, y);
	this.r = 6;
	this.angle = 0;
	this.maxSpeed = ms || 8;
	this.maxForce = mf || 0.1;
}

Vehicle.prototype.update = function() {
	this.velocity.addTo(this.accleration);
	// this.velocity.limitTo(this.maxSpeed);
	// console.log(this.velocity.getLength());
	this.position.addTo(this.velocity);
	this.accleration.mulBy(0);

};

Vehicle.prototype.bound = function() {
	if (this.position.getX() < -this.r)
		this.position.setX(width + this.r);
	if (this.position.getY() < -this.r)
		this.position.setY(height + this.r);
	if (this.position.getX() > width + this.r)
		this.position.setX(-this.r);
	if (this.position.getY() > height + this.r)
		this.position.setY(-this.r);
};

Vehicle.prototype.follow = function(flowfield) {
	var desire = flowfield.getVector(this.position.getX(), this.position.getY());
	// console.log(desire.getX(), desire.getY());
	// console.log(desire.getLength());
	
	desire.normalize();
	// console.log(desire.getX(), desire.getY());
	// console.log(desire.getLength());	

	desire.mulBy(this.maxSpeed);
	// console.log(desire.getX(), desire.getY());
	// console.log(desire.getLength());

	var steer = desire.sub(this.velocity);
	steer.limitTo(this.maxForce);

	this.accleration.addTo(steer);	
};

Vehicle.prototype.display = function() {
	fill(127);
	stroke(200);
	strokeWeight(2);
	push();
	translate(this.position.getX(), this.position.getY());
	rotate(Math.atan2(this.velocity.getY(), this.velocity.getX()) - Math.PI/2);
	beginShape();
	vertex(0, this.r * 2);
	vertex(-this.r, -this.r*2);
	vertex(this.r, -this.r*2);
	endShape(CLOSE);
	pop();
};