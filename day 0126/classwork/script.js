// Task 1

// შექმენით მასივი სადაც ინტერნეტიდან წამოღებული ფოტოების მისამართებს ჩასვამთ მინიმუმ ხუთი,
// შემდეგ კი შექმენით ამ მისამართების რაოდენობის მიხედვით img თეგები, ჩასვით img თეგეში ატრიბუტი src,
// ეს ყველაფერ უნდა გაკეთდეს  map მეთოდის გამოყენებით

// function App() {
//     const imgURL = [
//         "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
//         "https://miro.medium.com/v2/resize:fit:828/format:webp/1*XdcrYecW6uCLwJOOe5048Q.jpeg",
//         "https://cdn.buttercms.com/szRAUQ7tTaurKL95NS9x",
//         "https://www.datapro.in/uploads/c2fcd84408955736c701e1e81ca05577.png",
//         "https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe",
//     ];
//     return (
//         <main>
//             {imgURL.map(url => {
//                 return (
//                     <>
//                         <img src={url} width="200px" />
//                         <br />
//                     </>
//                 );
//             })}
//         </main>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// Task 2

// შექმენით სახელების მასივი, შემდეგ შექმენით სია (ul/ol) და ამ სიაში map მეთოდის დახმარებით დაარრენდერეთ თითოეული სახელი  li თეგებში,
// საბოლოოდ გახსენით კონსოლი და განიხილეთ ერორი სახელად Key error (მოიძიეთ ერორის შესახებ ინფორმაცია)

// function App() {
//     const names = ["Nika", "Luka", "Vano"];
//     return (
//       <main>
//         <ul>{names.map(curName => <li>{curName}</li>)}</ul>
//       </main>
//     );
// }

// ამ დავალებების შესრულებისას, კონსოლში გამოჩნდა key ერორი. ეს იმიტომ, რომ React-ში მასივებზე მუშაობისას(მათი დარენდერებისას),
// ჩვენ აუცილებლად უნდა მივანიჭოთ მასივის თითოეულ ელემენტს უნიკალური key(გასაღები).
// ელემენტის key(გასაღები), ეხმარება React-ს შეცვლილი, დამატებული ან წაშლილი ელემენტის სწრაფად ინდენტიფიცირებაში