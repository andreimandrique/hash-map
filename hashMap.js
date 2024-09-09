import { LinkedList } from "./linkedList.js";

function HashMap() {
    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    let LOAD_FACTOR = 0.75;
    let defaultSize = 16;
    let buckets = new Array(defaultSize).fill(null);

    function doubleBuckets() {
        defaultSize *= 2;
        return (buckets = new Array(defaultSize).fill(null));
    }

    function checkBuckets() {
        let expand = 0;
        expand = defaultSize * LOAD_FACTOR;

        // console.log(expand);

        let bucketNumber = 0;
        for (let bucket of buckets) {
            if (bucket != null) {
                bucketNumber++;
            }
        }
        // console.log(bucketNumber);

        if (bucketNumber == expand) {
            doubleBuckets();
        }
    }

    this.set = function (key, value) {
        checkBuckets();

        const index = hash(key) % buckets.length;

        const hashKey = key;
        const hashValue = value;

        //if empty bucket
        if (buckets[index] == null) {
            buckets[index] = new LinkedList();
        }

        //if bucket head is null
        if (buckets[index].head() == null) {
            buckets[index].append({ hashKey, hashValue });
        } else {
            //same key different value
            if (buckets[index].head().hashKey == hashKey) {
                buckets[index].head().hashValue = hashValue;
            }

            //same index different value
            buckets[index].append({ hashKey, hashValue });
        }
    };

    this.get = function (key) {
        const index = hash(key) % buckets.length;

        if (buckets[index].head().hashKey == key) {
            return buckets[index].head().hashValue;
        } else {
            return null;
        }
    };

    this.has = function (key) {
        const index = hash(key) % buckets.length;

        if (buckets[index]) {
            return true;
        } else {
            return false;
        }
    };

    this.remove = function (key) {
        const index = hash(key) % buckets.length;

        if (buckets[index] == null) {
            return false;
        } else {
            buckets[index] = null;
            return true;
        }
    };

    this.length = function () {
        let numberOfKey = 0;
        for (const bucket of buckets) {
            if (bucket != null) {
                numberOfKey++;
            }
        }
        return numberOfKey;
    };

    this.clear = function () {
        buckets = new Array(defaultSize).fill(null);
    };

    this.keys = function () {
        let keys = [];
        for (let bucket of buckets) {
            if (bucket != null) {
                keys.push(bucket.head().hashKey);
            }
        }
        return keys;
    };

    this.values = function () {
        let values = [];
        for (let bucket of buckets) {
            if (bucket != null) {
                values.push(bucket.head().hashValue);
            }
        }
        return values;
    };

    this.entries = function () {
        let pairs = [];

        for (let bucket of buckets) {
            if (bucket != null) {
                let pair = [];
                pair.push(bucket.head().hashKey);
                pair.push(bucket.head().hashValue);
                pairs.push(pair);
            }
        }
        return pairs;
    };
}

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("apple", "pink");

test.set("moon", "silver");

test.set("dog", "grey");

console.log(test.get("apple"));
console.log(test.has("banana"));
console.log(test.remove("carrot"));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.clear();
