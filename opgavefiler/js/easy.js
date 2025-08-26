/* opgave 1 */
console.group("opgave 1");
const person = {name: 'SpongeBob', age: 39, job: 'Chef'}
console.log(person)
console.groupEnd();

/* opgave 2 */
console.group("opgave 2");
console.log(person.name)
console.log(person.age)
console.log(person.job)


console.groupEnd();

/* opgave 3 */
console.group("opgave 3");


delete person.age
console.log(person)
console.groupEnd();
