function Vehicle(x, y) {
	this.accleration = new Vector(0, 0);
	this.velocity = new Vector(0, 0);
	this.position = new Vector(x, y);
	this.r = 6;
	this.d = 25;
	this.angle = 0;
	this.maxSpeed = 8;
	this.maxForce = 0.1;
}

Vehicle.prototype.update = function() {
	this.velocity.addTo(this.accleration);
	// this.velocity.limitTo(this.maxSpeed);
	this.position.addTo(this.velocity);
	this.accleration.mulBy(0);

};

Vehicle.prototype.rotate = function(target) {
	dx = this.position.getX() - target.getX();
	dy = this.position.getY() - target.getY();
	this.angle = Math.atan2(dy, dx);
};

Vehicle.prototype.seek = function() {

	if (this.position.x > this.d) {
		
	} else {}



	var steer = desire.sub(this.velocity);
	steer.limitTo(this.maxForce);
	// console.log(steer.getX());

	this.accleration.addTo(steer);	
	this.rotate(target);
};

Vehicle.prototype.display = function() {
	fill(127);
	stroke(200);
	strokeWeight(2);
	push();
	translate(this.position.getX(), this.position.getY());
	rotate(this.angle + Math.PI/2);
	beginShape();
	vertex(0, this.r * 2);
	vertex(-this.r, -this.r*2);
	vertex(this.r, -this.r*2);
	endShape(CLOSE);
	pop();
};