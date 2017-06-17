function Vehicle(x, y) {
	this.accleration = new Vector(0, 0);
	this.velocity = new Vector(1, 1);
	this.position = new Vector(x, y);
	this.r = 3;
	this.maxSpeed = 4;
	this.maxForce = 0.1;
}

Vehicle.prototype.seek = function(desire, factor = 1) {
	// var desire = target.sub(this.position);
	desire.normalize();
	desire.mulBy(this.maxSpeed);

	var steer = desire.sub(this.velocity);
	steer.limitTo(this.maxForce);

	this.accleration.addTo(steer);
	this.accleration.mulBy(factor);
};

Vehicle.prototype.cohesion = function(vehicles, desiredDistance) {
	var sumVector = new Vector(0, 0),
			count = 0,
			distance = 0,
			vector;

	for (var i = 0; i < vehicles.length; i++) {
		distance = this.position.dist(vehicles[i].position);
		// console.log(distance);
		if (distance > 0 && distance < desiredDistance) {
			vector = vehicles[i].position.sub(this.position);
			vector.normalize();
			vector.divBy(distance);
			sumVector.addTo(vector);
			count++;
		}
	}

	// console.log(count);

	if (count) {
		sumVector.divBy(count);
		this.seek(sumVector, 2.2);
	}	
};

Vehicle.prototype.separate = function(vehicles, desiredDistance) {
	var sumVector = new Vector(0, 0),
			count = 0,
			distance = 0,
			vector;

	for (var i = 0; i < vehicles.length; i++) {
		distance = this.position.dist(vehicles[i].position);
		// console.log(distance);
		if (distance > 0 && distance < desiredDistance) {
			vector = this.position.sub(vehicles[i].position);
			vector.normalize();
			vector.divBy(distance);
			sumVector.addTo(vector);
			count++;
		}
	}

	// console.log(count);

	if (count) {
		sumVector.divBy(count);
		this.seek(sumVector, 1.2);
	}

};

Vehicle.prototype.alignment = function(vehicles, desiredDistance) {
	var sumVector = new Vector(0, 0),
			count = 0,
			distance = 0;

	for (var i = 0; i < vehicles.length; i++) {
		distance = this.position.dist(vehicles[i].position);

		if (distance > 0 && distance < desiredDistance) {
			sumVector.addTo(vehicles[i].velocity);
			count++;
		}
	}

	if (count) {
		sumVector.divBy(count)
		this.seek(sumVector, 1)
	}	
};



Vehicle.prototype.flock = function(vehicles, desiredDistance) {
	this.separate(vehicles, desiredDistance);   // Separation
	this.alignment(vehicles, desiredDistance);      // Alignment
	this.cohesion(vehicles, desiredDistance);   // Cohesion
};

Vehicle.prototype.border = function() {
	if (this.position.getX() > width + this.r)
		this.position.setX(-this.r);
	if (this.position.getY() > height + this.r)
		this.position.setY(-this.r);
	if (this.position.getX() < -this.r)
		this.position.setX(width + this.r);
	if (this.position.getY() < -this.r)
		this.position.setY(height + this.r);
}	

Vehicle.prototype.update = function() {
	this.velocity.addTo(this.accleration);
	// this.velocity.limitTo(this.maxSpeed);
	this.position.addTo(this.velocity);
	this.accleration.mulBy(0);

};

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