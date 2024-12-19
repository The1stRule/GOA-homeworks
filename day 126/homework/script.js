// ### **1. Rendering a List**
// - Render a list of strings stored in a constant array using `.map()` inside JSX.
// - Example: Render an unordered list (`<ul>`) of items like `["Apple", "Banana", "Cherry"]`.

// export default function App() {
//     const fruits = ["Apple", "Banana", "Cherry"];
//     return (
//       <main>
//         <ul>{fruits.map((curValue, index) => <li key={`fruit-${index}`}>{curValue}</li>)}</ul>
//       </main>
//     );
// }
  

// ### **2. Conditional Rendering**
// - Create a variable that holds a boolean value.
// - Use conditional rendering to display either a "Welcome" message or a "Please log in" message based on the variable.

// export default function App() {
//     const isLogin = true;
//     return (
//       <main>
//         <p>{isLogin ? "Welcome" : "Please log in"}</p>
//       </main>
//     );
// }

// ### **3. Dynamic Attributes**
// - Create a component that renders an `<img>` element.
// - Pass dynamic `src` and `alt` attributes using an object of values.

// export default function App() {
//     const imgAttributes = {
//       src: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*XdcrYecW6uCLwJOOe5048Q.jpeg",
//       alt: "This is React"
//     }
//     return (
//       <main>
//         <img
//           src={imgAttributes.src}
//           alt={imgAttributes.alt}
//           width="200px" />
//       </main>
//     );
// }

// ### **4. Inline Styles**
// - Create a style object and use it to apply inline styles to a `<div>` dynamically.
// - Example: Change the `backgroundColor` based on a value from a predefined variable.

// ---

// ### **5. Rendering JSX from a Function**
// - Define a function that returns a JSX element.
// - Call this function inside the render method of your parent component.

// const Info = () => {
//     return (
//         <>
//             <h1>Hello JSX!</h1>
//             <p>Nika</p>
//             <button>Click me</button>
//         </>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Info());

// ### **6. Template Strings in JSX**
// - Use template strings to dynamically render a sentence by combining multiple variables.
// - Example: `const name = "John"; const age = 30;` renders "John is 30 years old."

// export default function App() {
//     const name = "John";
//     const age = 30;
//     return (
//       <main>
//         <p>{`${name} is ${age} years old.`}</p>
//       </main>
//     );
// }

// ### **7. Dynamic HTML Tag Rendering**
// - Create a constant that stores the name of an HTML tag (e.g., `h1`, `p`).
// - Use JSX to render the dynamic tag with content like "This is dynamic!"

// export default function App() {
//   const elementName = "h1";
//   return (
//     <main>
//       {React.createElement(elementName, null, "This is dynamic!")}
//     </main>
//   );
// }

// ### **8. Nested Map Rendering**
// - Use `.map()` inside another `.map()` to render a nested structure.
// - Example: An array of categories where each category contains an array of items.

// export default function App() {
//     const categories = [
//       {
//         id: 1,
//         name: 'Fruits',
//         items: ['Apple', 'Banana', 'Cherry']
//       },
//       {
//         id: 2,
//         name: 'Vegetables',
//         items: ['Carrot', 'Lettuce', 'Tomato']
//       },
//       {
//         id: 3,
//         name: 'Dairy',
//         items: ['Milk', 'Cheese', 'Butter']
//       }
//     ];
  
  
//     return (
//       <main>
//           <ul>{categories.map((curValue, index) => {
//               return (
//                   <ul key={`list-${index}`}>{curValue.items.map((item, itemIndex) => <li key={`item-${itemIndex}`}>{item}</li>)}</ul>
//               );
//           })}</ul>
//       </main>
//     );
// }

// ### **9. Rendering a Table**
// - Create a constant that holds an array of objects (e.g., a list of users with `name` and `age` properties).
// - Render a table (`<table>`) where each row corresponds to an object.

// export default function App() {
//     const users = [
//       { id: 1, name: 'John Doe', age: 28 },
//       { id: 2, name: 'Jane Smith', age: 34 },
//       { id: 3, name: 'Alice Johnson', age: 25 },
//       { id: 4, name: 'Bob Brown', age: 40 },
//       { id: 5, name: 'Charlie Davis', age: 29 }
//     ];
  
  
//       return (
//         <main>
//           <table border="1">
//             <thead>
//               <tr>
//                 <th>Id</th>
//                 <th>Name</th>
//                 <th>Age</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((curValue, index) => {
//                 return (
//                   <tr key={`row-${index}`}>
//                     <td key={`id-${index}`}>{curValue.id}</td>
//                     <td key={`name-${index}`}>{curValue.name}</td>
//                     <td key={`age-${index}`}>{curValue.age}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </main>
//       );
// }

// ### **10. String Interpolation**
// - Render a greeting message using variables and string interpolation.
// - Example: `const greeting = "Hello"; const name = "Alice";` renders "Hello, Alice!"

// export default function App() {
//     const greeting = "Hello";
//     const name = "Alice";
  
  
//       return (
//         <main>
//           <h1>{greeting}, {name}!</h1>
//         </main>
//       );
// }