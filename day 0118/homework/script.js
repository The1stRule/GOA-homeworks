class LibraryItem {
    constructor(title, year) {
        this._title = title;
        this._year = year;
        this._isAvailable = true;
    }

    borrowItem() {
        if(this._isAvailable) {
            console.log(`${this._title} has been successfully borrowed from the library.`);
            this._isAvailable = false;
        } else {
            console.log(`${this._title} is currently unavailable.`)
        }
    }

    returnItem() {
        this._isAvailable = true;
        console.log(`${this._title} has been successfully returned in the library.`)
    }
}

class Book extends LibraryItem {
    constructor(title, year, author, genre) {
        super(title, year);
        this._author = author;
        this._genre = genre;
    }

    getSummary() {
        return `Title: ${this._title} / ${this._year}. Gengre: ${this._genre}. Author: ${this._author}`;
    }
}

class Magazine extends LibraryItem {
    constructor(title, year, issueNumber) {
        super(title, year);
        this._issueNumber = issueNumber;
    }

    getSummary() {
        return `Title: ${this._title} / ${this._year}. Issue: ${this._issueNumber}`;
    }
}

const magazine1 = new Magazine("Tech Monthly", 2023, "#123");
const book1 = new Book("The Great Gatsby", 1925, "F. Scott Fitzgerald", "Novel");

console.log(magazine1);
console.log(book1);

console.log(magazine1.getSummary());
console.log(book1.getSummary());

book1.borrowItem();
book1.borrowItem();
book1.returnItem();
book1.borrowItem();