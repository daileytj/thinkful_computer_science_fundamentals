// HashMap class

class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._slots = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }

    get(key) {
        const index = this._findSlot(key);
        if (this._slots[index] === undefined) {
            throw new Error('Key error');
        }
        return this._slots[index].value;
    }

    set(key, value) {
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }

        const index = this._findSlot(key);
        this._slots[index] = {
            key,
            value,
            deleted: false
        };
        this.length++;
    }

    remove(key) {
        const index = this._findSlot(key);
        const slot = this._slots[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.deleted = true;
        this.length--;
        this._deleted++;
    }

    _findSlot(key) {
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;

        for (let i=start; i<start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._slots[index];
            if (slot === undefined || (slot.key == key && !slot.deleted)) {
                return index;
            }
        }
    }

    _resize(size) {
        const oldSlots = this._slots;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._deleted = 0;
        this._slots = [];

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.deleted) {
                this.set(slot.key, slot.value);
            }
        }
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i=0; i<string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
    }
}

HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;

// End HashMap Class

// let aHashMap = new HashMap();
//
// aHashMap.set(1,1);
// aHashMap.set(2,5);
// aHashMap.set(3,10);
// aHashMap.set(4,15);
// aHashMap.set(5,20);
//
// console.log('aHashMap: ', aHashMap);
// console.log('hashmap "get" value from key 4: ', aHashMap.get(4));
// console.log('hashmap "remove" key 3: ', aHashMap.remove(3));
// console.log('aHashMap post remove: ', aHashMap);


// Write an algorithm to check whether any permutation of a string is a palindrome
// (a string which reads the same forwards and backwards). For example, "madam",
// "amadm" and "cllci" should all return true, whereas "caabl" and "aaxxis" should return false.

let isPermutationPalindrome = word => {
    let hashMapOfWord = new HashMap();
    let pushWordToHashMap = wordToSplit => {
        let wordArray = wordToSplit.split('');
        for ( let i = 0; i < wordArray.length; i+=1){
            hashMapOfWord.set( i+1, wordArray[i] );
        }
    }
    pushWordToHashMap(word);
    console.log('hashMapOfWord', hashMapOfWord);
}

isPermutationPalindrome('madam'); // should equal 'true'
// isPermutationPalindrome('amadm'); // should equal 'true'
// isPermutationPalindrome('cllci'); // should equal 'true'
// isPermutationPalindrome('caabl'); // should equal 'false'
// isPermutationPalindrome('aaxxis'); // should equal 'false'


// Write an algorithm to group a list of words into anagrams. For example,
// if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'],
// the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].


// Write a hash map implementation which uses separate chaining.
