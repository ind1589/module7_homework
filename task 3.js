function noPrototype() {
    let obj = Object.create(null);
    return obj;
}

let emptyObject = noPrototype();
console.log(emptyObject);