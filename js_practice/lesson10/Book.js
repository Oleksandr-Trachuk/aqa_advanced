class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }
  set title(v) {
    if (typeof v !== 'string' || !v.trim()) {
      throw new Error('Title must be a non-empty string');
    }
    this._title = v.trim();
  }

  get author() {
    return this._author;
  }
  set author(v) {
    if (typeof v !== 'string' || !v.trim()) {
      throw new Error('Author must be a non-empty string');
    }
    this._author = v.trim();
  }

  get year() {
    return this._year;
  }
  set year(v) {
    const current = new Date().getFullYear();
    if (!Number.isInteger(v) || v < 1400 || v > current) {
      throw new Error(`Year must be an integer between 1400 and ${current}`);
    }
    this._year = v;
  }

  printInfo() {
    return `Book: "${this.title}" — ${this.author} (${this.year})`;
  }

  static oldest(books) {
    if (!Array.isArray(books) || books.length === 0) return null;
    const onlyBooks = books.filter((b) => b instanceof Book);
    if (onlyBooks.length === 0) return null;

    return onlyBooks.reduce((oldest, cur) => (cur.year < oldest.year ? cur : oldest));
  }
}

module.exports = Book;
