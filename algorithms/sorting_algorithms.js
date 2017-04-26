// Bubble Sort - Best Case O(n) if the array is already sorted
// Worst Case O(n^2)if each value needs to be swapped with another value
// note: very terrible way to sort an array!!

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array) {
    let swaps = 0;
    for (let i=0; i<array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};

// Merge Sort
// Best, worst, and average case of O(nlog(n))

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i=leftIndex; i<left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i=rightIndex; i<right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

// Quicksort
// Best Case - O(nlog(n))
// Wrost Case - O(n^2)

function quickSort(array, start=0, end=array.length) {
    start = start;
    end = end;
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i=start; i<end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

// Interview questions
let test = [9, 1, 10, 7, 4, 8]
let test2 = [ 1, 4, 7, 8, 9, 10 ]
let books = ['In Search of Lost Time', 'Ulysses', 'Don Quixote', 'Moby Dick', 'Hamlet', 'War and Peace', 'The Odyssey', 'The Great Gatsby', 'The Divine Comedy', 'Madame Bovary', 'The Brothers Karamazov', 'One Hundred Years of Solitude', 'The Adventures of Huckleberry Finn', 'The Iliad', 'Lolita', 'Anna Karenina', 'Crime and Punishment', 'Alices Adventures in Wonderland', 'The Sound and the Fury', 'Pride and Prejudice'];


// Write an O(n) algorithm to sort an array of integers, where you know in advance
// what the lowest and highest values are.
console.log("-------------------");
console.log("Sort Int");
console.log("-------------------");

let sortInt = (array, low, high) => {
	let temp = new Array(high)
	let output = []
	for (let i=0; i < array.length; i++) {
		temp[array[i]] = array[i]
	}
	for (let i=0; i < temp.length; i++) {
		if (temp[i]) {
			output.push(temp[i])
		}
	}
	return output
}
// account for duplicates e.g., sortInt([1,1,1,2,1,3,2,1,4,1,5,1,2,1,4,1,2,1,3], 1, 4);
console.log(sortInt(test, 1, 10));

// Write an algorithm to shuffle an array into a random order in-place (i.e. without
// creating a new array).
console.log("-------------------");
console.log("Randomize");
console.log("-------------------");

let randomize = (array) => {
	for (let i=0; i < array.length - 1; i++) {
		let j = Math.floor(Math.random() * (array.length - (i + 1))) + (i + 1);
		swap(array, i, j)
	}
	return array
}

console.log(randomize(test2));

// Imagine that I gave you twenty books to sort in alphabetical order. How would you
// go about it? Can you express this as an algorithm?

console.log("-------------------");
console.log("Sort Books");
console.log("-------------------");

let sortBooks = (array) => {
	let output = [array[0]]

	for (let i=1; i < array.length; i++) {
		let book = array[i]
		for (let j=0; j < output.length; j++) {
			let bookComp = book.replace(/^(the|a) /i, '')
			let outputComp = output[j].replace(/^(the|a) /i, '')
			if (bookComp < outputComp) {
				output.splice(j, 0, book)
				break
			}
		}
		if (output.length < i + 1) {
			output.push(book)
		}

	}
	return output
}

console.log(sortBooks(books));
