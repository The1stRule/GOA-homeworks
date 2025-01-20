
// გამოიყენეთ https://dummyjson.com/docs/posts ეს API იმისათის რომ, შეძლოთ პოსტების წამოღება და დარენდერება,
//როგორც ფბზე ხდება  news feed. შექმენით navigation სადაც გექნებათ რამდენიმე ლინკი, News Feed, Registration, Authorization

// შექმენით გასაფილტრი ველი, საიდანა შეგეძლებათ სპეციფიკური ტეგის მქონე პოსტების არჩევა, პოსტის სათაურით მოძებნა,
// სორტირება ანუ დალაგება ზრდადობით სათაურის მიხედვით, დასერჩის შემდეგ უნდა ამოაგდოს მხოლოდ ის ერთი კონკლრეტული
// პოსტი რომელის მონაცემებიც ემთხვევა მოძიებულს, შეიძლება ერთი არ იყოს რამდენიმეს დარენდერებაც არის შესაძლებელი

const mainDiv = document.querySelector('main');
const tagsForm = document.querySelector('#tagsForm');
const titleForm = document.querySelector('#titleForm');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const message = document.querySelector('span');

const errorMessage = (error) => {
    message.textContent = error;
    message.style.color = "red";
}

const filterByTags = (posts) => {
    const selectedTags = [];
    for(const checkbox of checkboxes) {
        if(checkbox.checked) {
            selectedTags.push(checkbox.value);
        }
    }

    const filteredPosts = posts.filter((curValue) => {
        for(const tag of curValue.tags) {
            if(selectedTags.includes(tag)) {
                return true
            };
        }
        return false;
    })

    renderPosts(filteredPosts);
}

const postsFilter = () => {
    const q = titleForm.postTag.value;
    message.textContent = '';
    
    fetch(`https://dummyjson.com/posts/search?q=${q}`)
        .then((response) => {
            if(!response.ok){
                return;
            }

            return response.json();
        })
        .then((data) => {
            if(data.posts.length === 0) {
                errorMessage("Post not found");
                return;
            }

            console.log(data);
            renderPosts(data.posts);
        })
        .catch((error) =>{
            console.log(error);
        })
}

const renderPosts = posts => {
    mainDiv.innerHTML = '';
    posts.forEach((curValue) => {
        mainDiv.innerHTML += `
            <div class="post">
                <div class="title-div">
                    <div></div>
                    <h3>${curValue.title}</h3>
                </div>
                <p>${curValue.body}</p>
                <div class="reactions-div">
                    <i class="fa-regular fa-thumbs-up"></i>
                    <p>${curValue.reactions.likes} likes</p>
                    <i class="fa-regular fa-thumbs-down"></i>
                    <p>${curValue.reactions.dislikes} dislikes</p>
                </div>
            </div>
        `
    });
}

let posts = []

const fetchData = () => {
    const allPosts = fetch('https://dummyjson.com/posts')

    allPosts
        .then((response) => {
            if(!response.ok){
                return;
            }

            return response.json();
        })
        .then((data) => {
            console.log(data);
            posts = data.posts
            renderPosts(data.posts);
        })
        .catch((error) => {
            console.log(error);
        })
}

document.addEventListener('DOMContentLoaded', fetchData);
titleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    postsFilter();
    titleForm.reset();
})
tagsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    filterByTags(posts);
})