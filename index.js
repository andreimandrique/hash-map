import HashMap from "./hashMap.js";

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
