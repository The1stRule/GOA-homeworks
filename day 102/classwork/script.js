
// ### Exercises for `Map`:

// 1. **Summing Unique Values**
//   - Create a `Map` where each string is associated with its length. Add several strings to the `Map` and then sum up all unique lengths.

const strLength = new Map([["Hello", 5]]);

strLength.set("World", "World".length);
strLength.set("JavaScrpit", "JavaScrpit".length);

console.log(strLength);

console.log([...new Set([...strLength.values()])].reduce((acc, curValue) => acc + curValue, 0));

// 2. **Creating a `Map` of Objects by ID**
//   - Create a few objects containing `id` and `name` properties. Use a `Map` to store each object by its `id`.

class Person {
    static persons = new Map();
    
    constructor(name, id) {
        this.name = name;
        this.id = id;
        Person.addPerson(id, this);
    }
    
    static addPerson(id, person) {
        this.persons.set(id, person);
    }
    
    static get persons() {
        return this.persons;
    }
}

const person1 = new Person("John", 1);
const person2 = new Person("Bob", 2);

console.log(Person.persons);

// 3. **Check for Required Value in `Map`**
//   - Create a `Map` that stores names as keys and ages as values.
// Write a function that takes a name as input and checks if it exists in the `Map`.

const persons = new Map();

persons.set("John", 20).set("Bob", 25);

const hasPerson = name => persons.has(name);

console.log(hasPerson("John"));
console.log(hasPerson("Alice"));

// 4. **Updating Data in `Map`**
//   - Create a `Map` containing products and their prices. Write a function that increases the price of a given product by 10%.

const products = new Map([["Product A", 100], ["Product B", 250]]);

const updatePrice = product => products.set(product, products.get(product) + (products.get(product) / 100) * 10);

updatePrice("Product A");
updatePrice("Product B");

console.log(products);

// 5. **Filtering Even Values from `Map`**
//   - Create a `Map` with numeric `key-value` pairs. Write a function that returns only those pairs whose values are even.

const numbers = new Map([[1, 10], [2, 15], [3, 20], [4, 25], [5, 30]]);

const filterEvens = () => {
    const evenNumbers = new Map();
    
    [...numbers].forEach((curValue) => {
        if(curValue[1] % 2 === 0) {
            evenNumbers.set(curValue[0], curValue[1]);
        }
    });
    
    return evenNumbers;
}

console.log(filterEvens());

// ### Exercises for `Set`:

// 6. **Removing Duplicates Using `Set`**
//   - Write a function that takes an array of numbers and returns all unique numbers as a `Set`.

const getUniqueNumbers = numbers => new Set([...numbers]);

console.log(getUniqueNumbers([1,1,1,2,3,3,4,5]));

// 7. **Iterating Through `Set` Elements**
//   - Create a `Set` containing several color names (strings). Use a loop to print each element to the console.

const colors = new Set(['red', 'blue', 'green', 'yellow', 'blue', 'red']);

for(const color of colors.values()) {
    console.log(color);
}

// 8. **Finding Common Elements Between Two `Sets`**
//   - Create two `Sets` with different elements. Write a function that finds and returns elements that exist in both `Sets`.

const numbers1 = new Set([1,2,2,3,4,5,5]);
const numbers2 = new Set([1,1,2,5,10,20]);

const commonNums = () => {
    const result = [];
    
    for(const number of numbers1) {
        if(numbers2.has(number)) {
            result.push(number);
        }
    }
    
    return result;
}

console.log(commonNums());

// 9. **Union of Multiple `Sets`**
//   - Create three `Sets` with various numbers. Write a function that combines all three `Sets` into one,
// removes duplicates, and returns a `Set` of unique elements.

const nums1 = new Set([1, 2, 3, 4]);
const nums2 = new Set([3, 4, 5, 6]);
const nums3 = new Set([6, 7, 8, 9]);

const mergeSets = () => new Set([...nums1, ...nums2, ...nums3]);

console.log(mergeSets())

// 10. **Deleting Elements from `Set`**
//     - Create a `Set` containing several animal names. Write a function that removes an animal from the `Set` based on the given name.

const animals = new Set(['dog', 'cat', 'elephant', 'lion', 'tiger']);

const deleteAnimal = animal => animals.delete(animal);

deleteAnimal("elephant");

console.log(animals);