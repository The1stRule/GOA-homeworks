
const form = document.querySelector('form');
const message = document.getElementById('message');
const elements = document.querySelectorAll('.t-element');

const loadMessage = () => {
    message.textContent = "Loading..."
    message.style.color = "white";
}

const errorMessage = (error) => {
    message.textContent = error;
    message.style.color = "red";
}

const renderUserProfile = (data) => {
    elements[0].src = data.Poster;
    elements[0].style.borderRadius = "0px"
    elements[1].textContent = data.Title;
    elements[2].textContent = `Year: ${data.Year}`;
    elements[3].textContent = `Plot: ${data.Plot}`;
    elements[4].textContent = `Rating: ${data.Ratings[0].Value}`;
    elements[5].textContent = `Language: ${data.Language}`;
}

const getUser = () => {
    const movieTitle = form.movieTitle.value.trim();

    const promise = fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=74c140db`);
    
    loadMessage();

    promise
        .then((response) => {
            console.log(response)
            if(!response.ok) {
                errorMessage("Movie not found")
                return;
            }

            return response.json();
        })
        .then((data) => {
            if (data.Response === "False") {
                errorMessage("Movie not found");
            } else {
                message.textContent = '';
                renderUserProfile(data);
            }
        })
        .catch((error) => {
            console.log(error);
            errorMessage("An error occurred. Please try again later");
        });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    getUser();
    form.reset();
})