
// Task 1

// შექმენით კომპონენტი რომელიც არგუმენტად მიიღებს სახელების სიას,
// და თვქენ ul თეგში უნდა დაარენდეროთ თითოეული მნიშვნელობისთი ერთი li თეგი ახსენით კომენტარებით რა არის პროპსი

// const NameList = ({names}) => {
//     return (
//       <ul>
//         {names.map((curName, index) => 
//           <li key={`name-${index}`}>{curName}</li>
//         )}
//       </ul>
//     );
//   };
  
// export default NameList;

// Props(Properties) - არის ობიექტი, სადაც თვისებების სახით არის თავმოყრილი, კომპონენტისთვის გადაცემული არგუმენტები.
// როდესაც ჩვენ გვინდა, რომ კომპონენტს გადაეცემოდეს არგუმენტი მისი გამოძახებისას html-ის თეგის სახით,
// ეს არგუმენტები უნდა გადავცეთ როგორც ატრიბუტი(attributeName = argumentName & attributeValue = argumentName).
// მიუხედავად იმისა, ჩვენ კომპონენტს გადავეცემთ არგუმენტად მასივის, სთრინგის თუ ნებისმიერ სხვა მონაცემს. ის შეინახება ერთ ობიექტში,
// რომელსაც უწოდებენ Props-ს. ამ ობიექტის კუთვნილებები იქნება, კომპონენტისთვის გადაცემული არგუმენტები.

// გადაცემული არგუმენტები ყოველთვის ობიექტიდან რომ არ წამოვიღოთ, ჩვენ შეგვიძლია გავუკეთოთ მას დესტრუქცია.

// Task 2

// მშობელი კომპონენტიდან გადაეცით მონაცემი შვილ კომპონენტს, მაგალითად თქვენი სახელი

// App.jsx

// export default function App({name}) {
//     return (
//       <main>
//         <NameList names={["Nika", "Luka", "Vano"]} name={name} />
//       </main>
//     );
// }

// NameList.jsx

// const NameList = ({names, name}) => {
//     return (
//       <ul>
//         {names.map((curName, index) => 
//           <li key={`name-${index}`}>{curName === name ? "Admin " + curName : curName}</li>
//         )}
//       </ul>
//     );
//   };
  
// export default NameList;

// Task 3

// შვილი კომპონენტიდან გადაეცით მშობელ კომპონენტს მონაცემი

// ეს არის ცუდი გზა, უბრალოდ მაგალითია

// App.jsx

// export default function App() {
//     let name;
//     const handleClick = (value) => {
//       name = value;
//       console.log(name)
//     }
//     return (
//       <main>
//         <NameList names={["Nika", "Luka", "Vano"]} handleClick={handleClick} />
//       </main>
//     );
// }

// NameList.jsx

// const NameList = ({names, handleClick}) => {
//     return (
//       <ul>
//         {names.map((curName, index) => 
//           <li onClick={() => handleClick(curName)} key={`name-${index}`}>{curName}</li>
//         )}
//       </ul>
//     );
// };

// export default NameList;