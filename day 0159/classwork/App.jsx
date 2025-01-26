// შექმენით კალულატორის პროექტი, სადაც გექნბათ 2 ინფუთი და ღილაკი,
// თქვენი დავალებაა ამ ორი ინფუთიდან წამოიღოთ რიცხვები და როცა ღილაკზე მოხდება დაკლიკება გამოიანგარიშოთ მათი ჯამი.
// მთავარი იდეა:
// გამოიყენეთ ახლანს ნასწავლი ნიმუში (Container and Presentational splitting) რომ გაამარტივოთ კოდი (აგრეთვე გამოიყენეთ State lifiting)

import Container from "./components/Container ";

const App = () => {
  return (
    <main>
      <Container />
    </main>
  );
}

export default App;