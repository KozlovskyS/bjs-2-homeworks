class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {
        if (newState <= 0) {
            return this._state = 0;
        } else if (newState >= 100) {
            return this._state = 100;
        }
        return this._state = newState;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        (book.state > 30) ? this.books.push(book) : null;
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        let book = this.findBookBy("name", bookName);
        book !== null ? this.books = this.books.filter((item) => item.name !== bookName) : null;
        return book;
    }
}

// Задача 3. Журнал успеваемости *

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark >= 2 && mark <= 5) {
            if (!this.marks.hasOwnProperty(subject)) {
                this.marks[subject] = [];
            }
            this.marks[subject].push(mark);
        } else {
            return null;
        }
    }

    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            return 0;
        }
        let sum = this.marks[subject].reduce((accum, el) => (accum + el), 0);
        return sum / this.marks[subject].length;
    }

    getAverage() {

        const subject = Object.keys(this.marks);
        if (subject.length > 0) {
            const sum = subject.reduce((accum, el) => (accum + this.getAverageBySubject(el)), 0);
            return sum / subject.length;
        } else {
            return 0;
        }
    }
}