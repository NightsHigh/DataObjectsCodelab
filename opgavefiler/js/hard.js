/* opgave 1 */



console.group("opgave 1");
const todoApp = {
    work: 
    {name: `Work toDo List`, 
    items: [
        {text: `Buy ingredients for crabby patties`, done: true},
        {text: `Make Crabby patties`, done: false}
    ]
},
    home:
    {name: `Home toDo List`,
    items: [
        {text: `Walk gary`, done: true},
        {text: `Feed gary`, done: false}
    ]
    }
}

console.groupEnd();
/* opgave 2 */
console.group("opgave 2");

function addItem(listKey, itemText){
    const list = todoApp[listKey]
    if(list){
        const newItem = {text: itemText, done: false}
        list.items.push(newItem)
    }
}
addItem(`work`, `Work as a waiter`)

console.groupEnd();
/* opgave 3 */
console.group("opgave 3");

function toggleitemDone(listkey, itemNr){
    const list = todoApp[listkey]
    if(list){
        const item = list.items[itemNr]
        if(item) {
            item.done = !item.done
        }
    }
}
toggleitemDone(`work`, 1)
console.groupEnd();
