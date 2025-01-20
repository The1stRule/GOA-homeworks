// import { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   // set-ერ ფუნქცია არის ასინქრონიზირებული. ორივე ფუნქციის გამოძახება მოხდა ერთი მნიშვნელობით,
//   // რადგან როდესაც პირველი ფუნქცია იქნა გამოძახებული, კოდის მუშაობა არ შეჩერდა და პირდაპირ გადავიდა შემდეგ ფუნქციაზე,
//   // ხოლო იმ მომენტში count მდგომარეობის მნიშვნელობა ჯერ არ იყო შეცვლილი, რამაც გამოიწვია
//   // პირველი ფუნქციის გაშვებისას, ჩვეულებრივად შეეცვლება count-ს მნიშვნელობა, მაგრამ მეორე შემთხვევისას არა,

//   const handleClick = () => {
//     setCount(count + 1);
//     setCount(count + 1);
//   };

//   // ამ შემთხვევაში 2 ჯერ მოხდება ცვლილება, რადგან set-ერ ფუნქციას გადაეცემა ქოლბექ ფუნქცია,
//   // რომელიც არის სინქრონული, რაც იმას ნიშნავს, რომ სანამ პირველი set-ერ ფუნქციის
//   // ქოლბექ ფუნქცია არ გაეშვება და არ შეცვლის count მდგომარეობას, მანამდე მეორე ქოლბექი არ გაეშვება.(ხდება დალოდება)

//   const handleCorrect = () => {
//     setCount((prevCount) => prevCount + 1);
//     setCount((prevCount) => prevCount + 1);
//   };

//   console.log("re-render");

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={handleClick}>uncorrect</button>
//       <button onClick={handleCorrect}>correct</button>
//     </div>
//   );
// };

// export default Counter;
