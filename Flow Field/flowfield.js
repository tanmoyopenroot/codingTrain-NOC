function FlowField(resolution) {
	this.arrowSize = 4;
	this.resolution = resolution;
	this.rows = width / this.resolution;
	this.cols = height / this.resolution;
	this.field = [];
	for (var i = 0; i < this.rows; i++) {
		this.field[i] = [];
		for (var j = 0; j < this.cols ; j++) {
			this.field[i][j] = new Vector(Math.cos(Math.PI * Math.random()), Math.sin(Math.PI * Math.random()));
			// console.log(this.field[i][j].getLength());
		}
	}

	// console.log("Main", this.rows, this.cols);
}



FlowField.prototype.drawVector = function(vector, x, y) {
	push();
	translate(x, y);
	rotate(Math.atan2(vector.getY(), vector.getX()));
	stroke(200, 100);
	strokeWeight(1);
	line(5,0,5-this.arrowSize,+this.arrowSize/2);
	line(5,0,5-this.arrowSize,-this.arrowSize/2);
	line(0, 0, 5, 0);
	pop();
};

FlowField.prototype.display = function() {
	for (var i = 0; i < this.rows; i++) {
		for (var  j = 0; j < this.cols; j++) {
			this.drawVector(this.field[i][j], i * this.resolution, j * this.resolution)
		}
	}
};

FlowField.prototype.getVector = function(posX, posY) {
	var row = Math.floor(constrain(posX / this.resolution, 0, this.rows - 1)),
			col = Math.floor(constrain(posY / this.resolution, 0, this.cols - 1));
	// this.field[row][col].setY(1);
	// console.log(row, col)
	// console.log(this.field[row][col].getLength());
	// console.log(this.field[row][col].setY(1));
	// console.log(this.field[row][col].getY());
	return this.field[row][col];
};