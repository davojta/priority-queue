class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;

		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		node.parent = this;
		if (!this.left) {
			this.left = node;
		} else if (!this.right) {
			this.right = node;
		} 
	}

	removeChild(node) {
		if (this.left === node) {
			this.left = null;
			node.parent = null;
		} else if (this.right === node) {
			this.right = null;
			node.parent = null;
		} else {
			throw new Error('Not a child')
		}
		
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (!this.parent) return;
		const temp = this.parent;
		const thatLeft = this.left;
		const thatRight = this.right;

		// this.left = temp.left
		// this.right = temp.right;
		this.parent = temp.parent;

		if (temp.parent && temp.parent.left === temp) {
			temp.parent.left = this;
		} else if (temp.parent && temp.parent.right === temp) {
			temp.parent.right = this;
		}

		temp.parent = this;

		if (this === temp.left) {
			temp.left = this.left;
			this.left = temp;
			if (temp.right) {
				this.right = temp.right;
				this.right.parent = this;

				temp.right = thatRight;
			}
		} else if (this === temp.right) {
			temp.right = this.right;
			this.right = temp;
			if (temp.left) {
				this.left = temp.left;
				this.left.parent = this;

				temp.left = thatLeft;
			}
		}
		// temp.left = thatLeft;
		// temp.right = thatRight;
	}
}

module.exports = Node;
