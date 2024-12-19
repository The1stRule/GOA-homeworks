const greet = (name) => {
    console.log(`Hello, ${name}`);
}

// Named export - კოდის დაექსპორტების ტექნიკა, სახელის შეცვლის შესაძლებობის გარეშე(დაიმპორტებისას არ შეგვიძლია მნიშვნელობის სახელის შეცვლა)
// ამ ტექნიკით დაექსპორტებული მნიშვნელობები, დაიმპორტებისას აუცილებლად უნდა ჩავსვათ ფიგურულ ბრჩხილებში - {}

export const firstname = "Nika";
export const group = 11;

// Default export - კოდის დაექსპორტების ტექნიკა, სახელის შეცვლის შესაძლებლობით(დაიმპორტებისას შეგვიძლია მნიშვნელობის სახელის შეცვლა)
// ამ ტექნიკით დაექსპორტებული მნიშვნელობები, დაიმპორტებისას არ უნდა ჩავსვათ ფიგურულ ბრჩხილებში.
// ამით node js-ი მიხვდეს, რომ ეს არის default-ად დაექსპორტებული

export default greet;
