
// Task 2

// შექმენით მასივი სადაც გექნებათ 3 ობიექტი: product1,product2,product3. ამ ობიექტებს
// უნდა ჰქონდეს title და id კუთვნილებები. ამ მასივს უნდა გადაუაროთ და უნდა შექმნათ
// პროდუქტის ელემენტები რომლებსაც დაამატებთ ვებ გვერდზე

const productsContainer = document.getElementById('product');
const products = [
    {id: 1, title: 'Product 1'},
    {id: 2, title: 'Product 2'},
    {id: 3, title: 'Product 3'}
];

productsContainer.style.display = 'flex';
productsContainer.style.flexDirection = 'column';
productsContainer.style.gap = '10px';

function addProduct(products) {
    for(let i = 0; i < products.length; i++) {
        const product = products[i];
        const newDiv = document.createElement('div');

        newDiv.innerHTML = `
        <div>
            <p>${product.id})</p>
            <h2>${product.title}</h2>
        </div>
        `
        newDiv.style.width = '500px';
        newDiv.style.border = '1px solid black';

        productsContainer.appendChild(newDiv);
    }
}

addProduct(products);