var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica","Disquisitiones Arithmeticae"
];

function add (bookList, bookName) {
  // slice on the original array to actually make a copy
  // doing let newBookList = bookList will only reassign the contents of bookList to newBookList lol
  let newBookList = bookList.slice();
  newBookList.push(bookName);
  return newBookList;
}

function remove(bookList, bookName) {
  let newBookList = bookList.slice();
  let bookNameIndex = newBookList.indexOf(bookName);
  if (bookNameIndex > -1) {
    newBookList.splice(bookNameIndex, 1);
  }
  return newBookList;
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);