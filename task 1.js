function ownProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}

let person = {
    name: "Sam",
    age: 20
};

ownProperties(person);