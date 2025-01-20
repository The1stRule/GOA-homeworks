
const form = document.querySelector('form');
const mainDiv = document.querySelector('main');
const message = document.querySelector('#message')

const errorMessage = (error) => {
    message.textContent = error;
    message.style.color = "red";
}

const renderCryptoData = (data) => {
    mainDiv.innerHTML = `
        <h2>${data[0].name}</h2>
        <img src="${data[0].image}">
        <div>
            <p><span>Price:</span> $${data[0].current_price}</p>
            <p><span>24-hour price change:</span> $${data[0].price_change_24h}</p>
            <p><span>Market cap:</span> $${data[0].market_cap}</p>
        </div>
    `
}

const fetchCryptoData = async (crypto) => {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`);
        const data = await response.json();
        console.log(data);
        renderCryptoData(data);
    } catch (error) {
        errorMessage('Error fetching crypto data');
        console.log(error);
    }
}

let intervalId = null;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    message.textContent = '';

    if(intervalId !== null) {
        clearInterval(intervalId);
    }

    const crypto = form.crypto.value.toLowerCase()
    fetchCryptoData(crypto);
    
    intervalId = setInterval(() => {
        fetchCryptoData(crypto);
    }, 20000)

    form.reset();
})