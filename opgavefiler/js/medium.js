/* Opgave 1*/
console.group("opgave 1");
const data = {
    egenskabItems: [
        `Item1`, `Item2`, `Item3`, `Item4`, `Item5`
    ]
}
data.egenskabItems.push(`NewString`)

console.log(data.egenskabItems)

console.groupEnd();



/*opgave 2*/
console.group("opgave 2");

data.egenskabItems.splice(1,1)
console.log(data.egenskabItems)
console.groupEnd();


/*opgave 3*/
console.group("opgave 3");

console.groupEnd();




