
// Task 1

// შექმენით reduce მეთოდის კლონი, იქონიეთ რიცხვების მასივი, ჯერ გამოიყენეთ თვითონ
// reduce მეთოდი და ნახეთ როგორ  მუშაობს (გაიგეთ რიცხვთა ჯამი,ნამრავლი) შემდეგ კი შექმენით მისი კლონი

// .reduce

let numbers = [1,2,3,4,5];

const sum = numbers.reduce((acc, curValue) => acc + curValue, 0);

console.log(sum);

const product = numbers.reduce((acc, curValue) => acc * curValue, 1);

console.log(product);

// manualReduce

const manualReduceSum = (arr, func, startValue) => {
    let acc = startValue;
    
    for(value of arr) {
        acc = func(acc, value);
    }
    
    return acc;
}

console.log(manualReduceSum(numbers, (acc, curValue) => acc + curValue, 0));

const manualReduceProduct = (arr, func, startValue) => {
    let acc = startValue;
    
    for(value of arr) {
        acc = func(acc, value);
    }
    
    return acc;
}

console.log(manualReduceProduct(numbers, (acc, curValue) => acc * curValue, 1));

// Task 2

// შექმენით რიცხვების მასივი, სადაც გექნებაათ 10 რიცხვი, გამოიყენეთ map მეთოდი, და გააკეთეთ ესეთი რამ, თუ ინდექსი
// არის ლუწი მაშინ ამჟამინდელი რიცხვი გაამრავლეთ 2 ზე ხოლო თუ არის კენტი მაშინ დააბრუნეთ ხელშეუხებლად ამჟამინდელი
// რიცხვი, შემდეგ კი იგივე რამე გააკეთეთ თქვენი კლონი მეთოდით ახსენით დეტალურად თქვენი კლონი კომენტარებით

// .map

let nums = [1,2,3,4,5,6,7,8,9,10];

const newNums = nums.map((curValue, index) => {
    if(index % 2 === 0) {
        return curValue * 2;
    } else {
        return curValue;
    }
})

console.log(newNums);

// manualMap

// შევქმენი ფუნქცია, რომელსაც არგუმენტად გადაეცემა მასივი და ერთი ფუნქცია.
// გადაცემულ ფუნქციას კი 3-არგუმენტი ახლანდელი მნიშვნელობა, ინდექსი და მასივი.

const manualMap = (arr, func) => {
    // ფუნქციის შიგნით შევქმენი სია სადაც ჩაემატება ახალი ელემენტები .
    const result = [];
    // გამოვიყენე for loop-ი, რომ გამეგო სიაში არსებული ელემენტების ინდექსი.
    for(let i = 0; i < arr.length; i++) {
        // for ციკლში იქმნება საიტერაციო ცვლადი i(თავიდან ის უდრის 0-ს),
        // რომლის მნიშვნელობაც ყოველი იტერაციისას იცვლება(ემატება ერთი). ეს იქამდე გაგრძელდება,
        // სანამ i საიტერაციო ცვლადის მნიშვნელობა ნაკლებია გადმოცემული მასივის სიგრძეზე.
        
        // ვიძახებ func ფუნქციას და მის დაბრუნებულ მნიშვნელობას ვამატებ result მასივში.
        result.push(func(arr[i], i));
    }

    // საბოლოოდ ვაბრუნებ result მასივს.
    return result;
}

// ვიძახებ manualMap ფუნქციას, გადავცემ მას ორ არგუმენტს, მასივს და ფუნქციას,
// რომელიც გადმოცემული სამი პარამეტრიდან ამოწმებს ინდექსს, თუ ის ლუწია,
// ფუნქცია დააბრუნებს ამჟამინდელ მნიშვნელობას გამრავლებულს ორზე,
// სხვა შემთხვევაში დააბრუნებს ამჟამინდელ მნიშვნელობას შეუცვლელს.

console.log(manualMap(nums, (curValue, index) => {
    if(index % 2 == 0) {
        return curValue * 2;
    } else {
        return curValue;
    }
}))

// Task 3

// შექმენით რიცხვების მასივი სადაც გექნებათ 10 რიცხვი, თქვენი დავალებაა გაფილტროთ ეს მასივი და დააბრუნოთ
// ახალი მასივი სადაც მოთავსებული იქნება ისეთი რიცხვები რომელიც ორიგინალ მასივიში მეორდება ზუსტად 2ჯერ,
// შექმენით filter მეთოდის კლონი და გააკეთეთ იგივე რამე (აუცილებლად ახსენით დეტალურად თვენი კლონის მუშაობა)

numbers = [1, 2, 2, 3, 4, 4, 4, 5, 7, 7];

// .reduce & .filter

const filterDuplicates = arr => {
    const numsCount = arr.reduce((acc, curValue) => {
        acc[curValue] = (acc[curValue] || 0) + 1;
        return acc;
    }, {})
    
    const filteredNums = arr.filter((curValue, index, arr) => numsCount[curValue] == 2 && arr.indexOf(curValue) == index);
    
    return filteredNums;
}

console.log(filterDuplicates(numbers));

// manualFilter

// შევქმენი ფუნქცია manualFilter, რომელსაც გადაეცემა ორი არგუმენტი, მასივი და ფუნქცია.
const manualFilter = (arr, func) => {
    // შევქმენი ცარიელი ობიექტი, რომელსაც გამოვიყენბ სიაში არსებული თითოეული ელემენტის count-ის გასაგებად.
    const numsCount = {};
    // გადავვუარე გადმოცემულ სიას for of-ით, რადგან მინდოდა გამეგო მხოლოდ სიის ელემენტების მნიშვნელობა.
    for(value of arr) {
        // ვქმნი numsCount ობიექტისთვის თვისებას, რომლის მნიშვნელობაც თავიდან იქნება 1,
        // ხოლო თუ ასეთი თვისება უკვე არსებობს, მის მნიშვნელობას დაემატება ერთი.
        numsCount[value] = (numsCount[value] || 0) + 1;
    }
    
    // მიღებული ობიექტის key-ები არის სიის ელემენტები, ხოლო მათი value, ამ ელემენტების რაოდენობა სიაში.
    
    // შევქმენი ცარიელი სია, სადაც გაფილტვრის პირობის მიხედვით ჩაემატება რიცხვები.
    const result = [];
    
    // გადავუარე for of-ით გადმოცემულ მასივს. ყოველი იტერაციისას ვიძახებ ფუნქციას,
    // რომელსაც გადაეცემა numsCount ობიექტი და ამჟამინდელი მნიშვნელობა. შემდეგ ვამოწმებ,
    // თუ ფუნქცია დააბრუენბს True-ს საიტერაციო ცვლადის მნიშვნელობა ჩაემატება result მასივში.
    for(value of arr) {
        if(func(numsCount, value, result)) {
            result.push(value);
        }
    }
    
    // საბოლოოდ ვაბრუნებ result მასივს.
    return result;
}

// ვიძახებ manualFilter ფუნქციას, რომელსაც არგუმენტად გადავცემ numbers მასივს და ფუნქციას,
// რომელიც ამოწმებს გადმოცემული ობიექტიდან ამჟამინდელი მნიშვნელობის გასაღების value
// უდრის თუ არა 2-ს და აბრუნებს შედეგს(True/False).

console.log(manualFilter(numbers, (object, curValue, arr) => object[curValue] == 2 && !arr.includes(curValue)));