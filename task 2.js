function hasProperty(name, obj) {
    return obj.hasOwnProperty(name);
}

let person = {
    name: "Sam",
    age: 20
};

console.log(hasProperty("name", person));
console.log(hasProperty("age", person));
console.log(hasProperty("address", person));