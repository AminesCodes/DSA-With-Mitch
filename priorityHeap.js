class PriorityQueue {
    constructor(length) {
        this.queue = new Array(length + 1);
        this.queue[0] = null;
        this.indexOfLastItem = 0;
    }

    bubbleDownParent(index) {
        if (index > this.indexOfLastItem) {
            return null;
        }
        const parent = this.queue[index];
        const leftChild = this.queue[2 * index];
        const rightChild = this.queue[2 * index + 1];

        if ((leftChild !== undefined && parent > leftChild ) || (rightChild !== undefined && parent > rightChild )) {
            if (rightChild === undefined || leftChild < rightChild) {
                this.queue[2 * index] = parent;
                this.queue[index] = leftChild;
                this.bubbleDownParent(2 * index);
            } else {
                this.queue[2 * index + 1] = parent;
                this.queue[index] = rightChild;
                this.bubbleDownParent(2 * index + 1);
            }
        }
    }

    pop() {
        if (this.indexOfLastItem === 0) {
            return null;
        }
        const root = this.queue[1];
        this.queue[1] = this.queue[this.indexOfLastItem];
        delete this.queue[this.indexOfLastItem];
        this.indexOfLastItem -= 1;
        this.bubbleDownParent(1);
        return root;
    }

    bubbleUpChild(index) {
        const parentIndex = Math.floor(index / 2)
        if (parentIndex && this.queue[parentIndex].priority > this.queue[index].priority) {
            const temp = this.queue[parentIndex];
            this.queue[parentIndex] = this.queue[index];
            this.queue[index] = temp;
            this.bubbleUpChild(parentIndex);
        }
    }

    push(item) {
        const newIndex = this.indexOfLastItem + 1;

        if (newIndex >= this.queue.length) {
            this.doubleQueueLength();
        }

        this.queue[newIndex] = item;
        this.bubbleUpChild(newIndex);
        this.indexOfLastItem += 1;
    }

    doubleQueueLength() {
        this.queue = this.queue.concat(new Array(this.queue.length));
    }

    sort() {
        const sorted = [];
        while (this.indexOfLastItem >= 0) {
            sorted.push(this.pop());
        }
        return sorted
    }
}