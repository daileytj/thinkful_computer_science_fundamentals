// Linked List class
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    insert(index, value) {
            if (index < 0 || index > this.length) {
                throw new Error('Index error');
            }

            const newNode = {
                value
            };

            if (index == 0) {
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                // Find the node which we want to insert after
                const node = this._find(index - 1);
                newNode.next = node.next;
                node.next = newNode;
            }

            this.length++;
        }

        _find(index) {
            let node = this.head;
            for (let i=0; i<index; i++) {
                node = node.next;
            }
            return node;
        }

        get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        return this._find(index).value;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (index == 0) {
            this.head = this.head.next;
        }
        else {
            // Find the node before the one we want to remove
            const node = this._find(index - 1);
            node.next = node.next.next;
        }

        this.length--;
    }
}


// initialize new LinkedList
let linkedList1 = new LinkedList();
linkedList1.insert(0,0);
linkedList1.insert(1,1);
linkedList1.insert(2,2);
linkedList1.insert(3,3);
linkedList1.insert(4,4);
console.log(`linked list 1: ${JSON.stringify(linkedList1)}`);
// console.log(`linked list 1 node 1 value = ${linkedList1.get(1)}`);
// console.log(`linked list 1 node 2 value = ${linkedList1.get(2)}`);
// console.log(`linked list 1 head = ${JSON.stringify(linkedList1.head)}`);
// console.log(`linked list 1 find 1 next = ${JSON.stringify(linkedList1._find(1).next)}`);
// console.log(`linked list 1 find 2 next = ${JSON.stringify(linkedList1._find(2).next)}`);

let linkedList2 = new LinkedList();
linkedList2.insert(0,0);
linkedList2.insert(1,2);
linkedList2.insert(2,4);
linkedList2.insert(3,6);
linkedList2.insert(4,8);
linkedList2.insert(5,10);
linkedList2.insert(6,12);
linkedList2.insert(7,14);
linkedList2.insert(8,16);
console.log(`linked list 2: ${JSON.stringify(linkedList2)}`);

// Write an algorithm to find the middle element of a linked list without using the
// .length property
console.log('---------------------------');
console.log('findMiddleElement tests');
console.log('---------------------------');

let findMiddleElement = linkedList =>{
    let middleElement = null;
    let length_counter = 0;
    let i = 0;
    while (linkedList._find(i).next){
        length_counter += 1;
        i += 1;
    }
    middleIndex = Math.floor(length_counter / 2);
    middleElement = linkedList.get(middleIndex);
    console.log(`middle element value = ${middleElement}`);
};

findMiddleElement(linkedList1);
findMiddleElement(linkedList2);

// Write an algorithm to find the third element from the end of a linked list without
// using the .length property
console.log('---------------------------');
console.log('findElementThirdToLast tests');
console.log('---------------------------');

let findElementThirdToLast = linkedList =>{
    let thirdToLastElement = null;
    let length_counter = 0;
    let i = 0;
    while (linkedList._find(i).next){
        length_counter += 1;
        i += 1;
    }
    thirdToLastIndex = length_counter - 3;
    thirdToLastElement = linkedList.get(thirdToLastIndex);
    console.log(`element third to last value = ${thirdToLastElement}`);
};

findElementThirdToLast(linkedList1);
findElementThirdToLast(linkedList2);

// Write an algorithm to reverse a linked list
console.log('---------------------------');
console.log('reverseLinkedList tests');
console.log('---------------------------');
let reverseLinkedList = linkedList =>{
    let reversedLinkedList = new LinkedList();
    let indexCounter = 0;
    for (let i = linkedList.length-1; i >= 0; i -= 1){
        reversedLinkedList.insert(indexCounter,linkedList.get(i));
        indexCounter += 1;
    }
    console.log(`reversed linked list = ${JSON.stringify(reversedLinkedList)}`);
};

reverseLinkedList(linkedList1);
reverseLinkedList(linkedList2);


// Write an algorithm to find whether a linked list has a cycle (i.e. whether a node
// in the list has its next value pointing to an earlier node in the list)
// console.log('---------------------------');
// console.log('linkedListHasCycle tests');
// console.log('---------------------------');
