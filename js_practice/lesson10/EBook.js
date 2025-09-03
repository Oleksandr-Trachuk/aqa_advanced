const Book = require('./Book');

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }
  set fileFormat(v) {
    if (typeof v !== 'string' || !v.trim()) {
      throw new Error('fileFormat must be a non-empty string');
    }
    const fmt = v.trim().toLowerCase();
    const allowed = ['pdf', 'epub', 'mobi', 'azw', 'txt'];
    if (!allowed.includes(fmt)) {
      throw new Error(`Unsupported file format: ${fmt}. Allowed: ${allowed.join(', ')}`);
    }
    this._fileFormat = fmt;
  }

  printInfo() {
    return `EBook: "${this.title}" — ${this.author} (${this.year}), format: ${this.fileFormat}`;
  }

  static fromBook(book, fileFormat) {
    if (!(book instanceof Book)) {
      throw new Error('fromBook expects an instance of Book');
    }
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

module.exports = EBook;
