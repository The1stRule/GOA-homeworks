
// Task 2

// შექმენით ფოტოს კარუსელი შუაში მოქცეული იქნება img თეგი ხოლო გარშემო ორი ღილაკი,
// მარცხენა ღილაკს დააწერეთ წინა ხოლო მაჯვენას შემდეგი, როცა მოხდება წინაზე დაკლიკება
// გადადით წინა ფოტოზე როცა მხოდება მარჯვენაზე დაკლიკება გადადითშემდეგ ფოტოზე

const btnsArray = document.getElementsByTagName('button');
const img = document.getElementById('mainImg');
const imgsSrc = ['./images1/html.png', './images1/css.png', './images1/js.png'];

function presentational(index) {
    img.src = imgsSrc[index];
}

let index = 0;

function container(number) {
    if(number > 0) {
        if(index + 1 < imgsSrc.length) {
            index += 1;
            console.log(index)
        }
    } else {
        if(index - 1 >= 0) {
            index -= 1;
            console.log(index)
        }
    }
    presentational(index);
}