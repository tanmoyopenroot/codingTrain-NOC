function setup() {
	// createCanvas(600, 400);
	// background(51);
	var tree = new Tree();
	tree.addValue(5)
	tree.addValue(4)
	tree.addValue(6)
	tree.addValue(2)
	tree.addValue(1)
	tree.addValue(3)
	console.log(tree);
	tree.traverse();
	tree.search(1);
}

function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
	// this.x = null;
	// this.y = null;
}

function Tree() {
	this.root = null;
	// this.numNodes = 0;
	// this.level = 0;
}

Node.prototype.addNode = function(node) {
	if (this.value > node.value) {
		if (!this.left)
			this.left = node;
		else
			this.left.addNode(node);
	}
	else {
		if (!this.right)
			this.right = node;
		else 
			this.right.addNode(node);
	}
};

Tree.prototype.addValue = function(value) {
	var node = new Node(value)
	if (!this.root) {
		this.root = node;
		// this.root.x = width/2;
		// this.root.y = 16;
	}
	else{
		this.root.addNode(node);
	}
	// this.numNodes++;
	// this.level = Math.pow(2, this.numNodes);
};

Node.prototype.visit = function() {
	if(this.left)
		this.left.visit();
	console.log(this.value);
	// fill(255);
	// noStroke();
	// text(this.value, this.x, this.y);
	if(this.right)
		this.right.visit();
	return;
};

Tree.prototype.traverse = function() {
	this.root.visit();
};

Node.prototype.searchNode = function(value) {
	if (this.right && this.value < value) 
		return this.right.searchNode(value)
	else if (this.left && this.value > value)
		return this.left.searchNode(value)
	else if (this.value == value)
		return ("Found:- " + this.value);
	else
		return("Not Found");


};

Tree.prototype.search = function(value) {
	console.log(this.root.searchNode(value));
};

// Tree.prototype.drawTree = function() {
// };