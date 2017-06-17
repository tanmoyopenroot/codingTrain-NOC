function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.setXY = function(x, y) {
	this.x = x || this.x;
	this.y = y || this.y;
};

Vector.prototype.getX = function() {
	return this.x;
};

Vector.prototype.getY = function() {
	return this.y;
};

Vector.prototype.getLength = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector.prototype.setAngle = function(angle) {
	var length = this.getLength();
	this.x = Math.cos(angle) * length;
	this.y = Math.sin(angle) * length;
};

Vector.prototype.getAngle = function() {
	return Math.atan2(this.y, this.x);
};

Vector.prototype.setLength = function(length) {
	var angle = this.getAngle();
	this.x = Math.cos(angle) * length;
	this.y = Math.sin(angle) * length;	
};

Vector.prototype.add = function(vector) {
	return new Vector(this.x + vector.getX(), this.y + vector.getY());
};

Vector.prototype.sub = function(vector) {
	return new Vector(this.x - vector.getX(), this.y - vector.getY());
};

Vector.prototype.mul = function(scalar) {
	return new Vector(this.x * scalar, this.y * scalar);
};

Vector.prototype.div = function(scalar) {
	return new Vector(this.x / scalar, this.y / scalar);
};

Vector.prototype.addTo = function(vector) {
	this.x += vector.getX(); 
	this.y += vector.getY();
};

Vector.prototype.subFrom = function(vector) {
	this.x -= vector.getX(); 
	this.y -= vector.getY();
};

Vector.prototype.mulBy = function(scalar) {
	this.x *= scalar; 
	this.y *= scalar;
};

Vector.prototype.divBy = function(scalar) {
	this.x /= scalar; 
	this.y /= scalar;
};

Vector.prototype.normalize = function() {
	var length = this.getLength();
	this.divBy(length);
};

Vector.prototype.limitTo = function (scalar) {
  this.normalize();
  this.mulBy(Math.min(this.getLength(), scalar));
};

Vector.prototype.map = function(inLower, inUpper, outLower, outUpper) {
	var length = this.getLength();
	// return ((length - inLower) * ((outUpper - outLower) / (inUpper - inLower))) + outLower;
	return ((length-inLower)/(inUpper-inLower))*(outUpper-outLower)+outLower;
};