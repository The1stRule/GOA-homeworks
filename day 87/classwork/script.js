
// Task 1

// შექმენით ინეტრვალი, გადაცემულ ფუნციაში ყოველ ჯერზე შექმენით date
// ობიექტი, როცა ამჟამინდელი წუთი გაუტოლდება 35, უნდა გაითიშოს ინეტრვალი

const id = setInterval(function(){
    const d = new Date();
    console.log(d.getMinutes(), d.getSeconds());

    if(d.getMinutes() === 35){
        clearInterval(id);
        console.log("Time up");
    }
},1000)