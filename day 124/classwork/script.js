// გამოიყენეთ:
// React, ReactDOM და Babel-ის cdn-ები,
// დააკავშირეთ ისინი თქვენს html ის ფაილს (ჩააკოპირეთ), 
// შემდეგ შექმენით html ში root/ფესვი ელემენტი, 
// ჯავასკრიპტის ფაილში კი jsx გამოყენებით შექმენით კომპონენტი/ნაწილი, სადაც გამოიტანთ: სათაურს, პარაგრაფებს და ღილაკებს, 

// საბოლოოდ კი დარეენდერეთ/გამოიტანეთ გვერდზე ეს ობიექტები, 
// კომენტარებით ახსენით რას აკეთებს ყველა ის ბიბლიოთეკა რაც ჩამოვთვალეთ და ახსენით რა არის jsx.

const p = (
    <>
        <h1>Hello, JSX!</h1>
        <p>Nika</p>
        <button>Click me</button>
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(p);

// React არის JavaScript-ის ბიბლიოთეკა, რომელიც გვძლევს საშუალებას შევქმნათ React-ის კომპონენტები/ელემენტები და ვმართოთ ისინი.
// ის ასევე ამატებს JSX - სინტაქსურ გაფართოებას

// ReactDOM არის ბიბლიოთეკა, რომელიც აკავშირებს React-ს, ბრაუზერის DOM-თან და გვაძლევს საშუალებას დავარენდეროთ კომპონენტები/ელემენტები

// Babel არის ბიბლიოთეკა ტრასპილატორი, რაც ნიშნავს სინტაქსის მთარგმნელს.
// ის გვჭირდება JSX-ის სინტაქსის ტრანსპილაციაში(თარგმნაში), ჩვეულებრივი(vanila) ჯავასკრიპტის კოდად

// JSX არის სინტაქსური გაფართოება, რომელიც გვაძლევს საშუალებას მარტივი სინტაქსით შევქმნათ React-ის კომპონენტები/ელემენტები.
// JSX-ის სიმარტივე გამოიხატება იმაში, რომ მისი სინტაქსი ძალიან ჰგავას HTML-ს, მაგრამ არ არის ის