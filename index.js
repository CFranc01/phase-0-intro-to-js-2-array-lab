// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat(name) {
  cats.push(name);
}
console.log(destructivelyAppendCat);

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
console.log(destructivelyPrependCat);

function destructivelyRemoveLastCat(name) {
    cats.pop();
}
console.log(destructivelyRemoveLastCat);

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}
console.log(destructivelyRemoveFirstCat);

function appendCat(name) {
    let Catz = [...cats, name];
    return Catz
}
function prependCat(name) {
    let Catz = [name, ...cats];
    return Catz
}

function removeLastCat(name) {
    let Catz = cats.slice(0, -1);
    return Catz
}

function removeFirstCat(name) {
    let Catz = cats.slice(1);
    return Catz
}