const Book = require('./Book');
const EBook = require('./EBook');

const b1 = new Book('Clean Code', 'Robert C. Martin', 2008);
const b2 = new Book('The Pragmatic Programmer', 'Andy Hunt & Dave Thomas', 1999);
const b3 = new Book('Design Patterns', 'GoF', 1994);

console.log(b1.printInfo());
console.log(b2.printInfo());
console.log(b3.printInfo());

const e1 = new EBook('You Don’t Know JS', 'Kyle Simpson', 2015, 'epub');
console.log(e1.printInfo());

const e2 = EBook.fromBook(new Book('Refactoring', 'Martin Fowler', 1999), 'pdf');
console.log(e2.printInfo());

b1.title = 'Clean Code (Updated)';
e1.fileFormat = 'mobi';
console.log(b1.printInfo());
console.log(e1.printInfo());

const library = [b1, b2, b3, e1, e2];
const oldest = Book.oldest(library);
console.log('Oldest:', oldest ? oldest.printInfo() : 'none');
