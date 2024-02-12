const books = [
    {
    title: "Harry Potter and the Philosopher's Stone",
    ISBN : "9781408855652",
    year: 1997,
   genre: "Fantasy",
    author: "J.K. Rowling",
    stock: 10,
    publisher: "Bloomsbury"
},
{
    title: "Harry Potter and the Chamber of Secrets",
    ISBN : "9781408855669",
    year: 1998,
   genre: "Fantasy",
    author: "J.K. Rowling",
    stock: 2,
    publisher: "Bloomsbury"
},
{
    title: "Cracking the Coding Interview",
    ISBN : "9780984782857",
    year: 2015,
   genre: "Technical",
    author: "Gayle Laakmann McDowell",
    stock: 5
},
{
    title: "The Alchemist",
    ISBN : "9780062315007",
    year: 1988,
   genre: "Fantasy",
    author: "Paulo Coelho",
    stock: 3,
    publisher: "HarperOne"
},
{
    title: "Educated",
    ISBN : "9780399590504",
    year: 2018,
   genre: "Memoir",
    author: "Tara Westover",
    stock: 7,
    publisher: "Random House"
},
{
    title: "Sapiens: A Brief History of Humankind",
    ISBN : "9780062316097",
    year: 2014,
   genre: "History",
    author: "Yuval Noah Harari",
    stock: 4,
    publisher: "Harper"
},
{
    title: "Becoming",
    ISBN : "9781524763138",
    year: 2018,
   genre: "Autobiography",
    author: "Michelle Obama",
    stock: 6,
    publisher: "Crown"
},
{
    title: "The Night Circus",
    ISBN : "9780307744432",
    year: 2011,
   genre: "Fantasy",
    author: "Erin Morgenstern",
    stock: 5,
    publisher: "Anchor Books"
},
{
    title: "1984",
    ISBN : "9780451524935",
    year: 1949,
   genre: "Dystopian",
    author: "George Orwell",
    stock: 8,
    publisher: "Plume"
},
{
    title: "The Martian",
    ISBN : "9780804139021",
    year: 2014,
   genre: "Science Fiction",
    author: "Andy Weir",
    stock: 5,
    publisher: "Crown Publishing Group"
},
{
    title: "Where the Crawdads Sing",
    ISBN : "9780735219090",
    year: 2018,
   genre: "Fiction",
    author: "Delia Owens",
    stock: 4,
    publisher: "G.P. Putnam's Sons"
},
{
    title: "Atomic Habits",
    ISBN : "9780735211292",
    year: 2018,
   genre: "Self-help",
    author: "James Clear",
    stock: 7,
    publisher: "Avery"
},
{
    title: "The Power of Now",
    ISBN : "9781577314806",
    year: 1997,
   genre: "Spirituality",
    author: "Eckhart Tolle",
    stock: 9,
    publisher: "New World Library"
},
{
    title: "The Catcher in the Rye",
    ISBN : "9780316769488",
    year: 1951,
   genre: "Fiction",
    author: "J.D. Salinger",
    stock: 7,
    publisher: "Little, Brown and Company"
},
{
    title: "The Great Gatsby",
    ISBN : "9780743273565",
    year: 1925,
   genre: "Fiction",
    author: "F. Scott Fitzgerald",
    stock: 8,
    publisher: "Scribner"
},
{
    title: "To Kill a Mockingbird",
    ISBN : "9780061120084",
    year: 1960,
   genre: "Fiction",
    author: "Harper Lee",
    stock: 0,
    publisher: "HarperPerennial Modern Classics"
},
{
    title: "A Brief History of Time",
    ISBN : "9780553380163",
    year: 1988,
    genre: "Science",
    author: "Stephen Hawking",
    stock: 6,
    publisher: "Bantam"
},
{
    title: "The Four Agreements",
    ISBN : "9781878424310",
    year: 1997,
    genre: "Self-help",
    author: "Don Miguel Ruiz",
    stock: 7,
    publisher: "Amber-Allen Publishing"
},
{
    title: "The Lean Startup",
    ISBN : "9780307887894",
    year: 2011,
    genre: "Business",
    author: "Eric Ries",
    stock: 9,
    publisher: "Crown Business"
},
{
    title: "Thinking, Fast and Slow",
    ISBN : "9780374533557",
    year: 2011,
    genre: "Psychology",
    author: "Daniel Kahneman",
    stock: 5,
    publisher: "Farrar, Straus and Giroux"
}
];


// Function to simulate a GET request for a book by title or ISBN

function getBook(titleOrISBN) {
  const books = books.find(book => book.title === titleOrISBN || book.isbn === titleOrISBN);
  if (books) {
    return { code: 200, data: book };
  } else {
    return { code: 404, message: "Book not found" };
  }
}

// Function to get all existing books
function getBooks() {
    return { code: 200, data: books };
  }

// Function to add a new book to the books array
function addBook(newBook) {
    books.push(newBook);
    return { code: 201, data: { book: newBook, books: books } };
  }
  
// Function to remove a book by title or ISBN
function removeBookByTitleOrISBN(titleOrISBN) {
  const index = books.findIndex(book => book.title === titleOrISBN || book.isbn === titleOrISBN);
  if (index !== -1) {
    const deletedBook = books.splice(index, 1)[0];
    return { code: 200, data: { book: deletedBook, books: books } };
  } else {
    return { code: 404, message: "Book not found" };
  }
}
// Function to filter books by a property and value
function filterBy(property, value) {
    const filteredBooks = books.filter(book => book[property] === value);
    return { code: 200, data: filteredBooks };
  }

  // Function to list all books in the specified format
function listBooks() {
    const bookList = books.map(book => `${book.title} - ${book.author} - ${book.year}`);
    return { code: 200, data: bookList };
  }
// Function to get books by year
function getBooksByYear(year) {
    const filteredBooks = books.filter(book => book.year === year);
    return { code: 200, data: filteredBooks };
  }
//return true or false if all books from a given genre have stock available.
  function genreFullAvailability(books, genre) {
    const genreBooks = books.filter(book => book.genre === genre);
    const allInStock = genreBooks.every(book => book.stock > 0);
    return allInStock;
  }
//return true or false if at least ONE book from a given genre has stock availability.
  function genrePartialAvailability(books, genre) {
    const genreBooks = books.filter(book => book.genre === genre);
    const anyInStock = genreBooks.some(book => book.stock > 0);
    return anyInStock;
  }
//the first param will be the counting property (genre, author, or publisher),you must return a new object with the name of the property that you are counting andthe counter.
  function getCountBy(books, property) {
    const counter = books.reduce((acc, book) => {
      if (book[property] in acc) {
        acc[book[property]]++;
      } else {
        acc[book[property]] = 1;
      }
      return acc;
    }, {});
    return counter;
  }
    
  console.log(getBook("9781878424310"));
  console.log(getBook("Science"));
  
  console.log(getBooks());
  
  const objBook = {
    "title": "The Hunger Games ",
    "ISBN": "9781407132082",
    "year": 2008,
    "genre": "science fiction",
    "author": "Suzanne Collins",
    "stock": 5,
    "publisher": "Scholastic"
  }
  
  console.log(addBook(objBook));
  
  console.log(removeBookByTitleOrISBN('9780553380163'));
  console.log(removeBookByTitleOrISBN('Where the Crawdads Sing'));
  
  console.log(filterBy('genre', 'Self-help'));
  
  console.log(listBooks());
  
  console.log(getBooksByYear(2011));
  
  console.log(genreFullAvailability('Fiction'));
  console.log(genreFullAvailability('Business'));
  
  console.log(genrePartialAvailability('Psychology'));
  
  console.log(getCountBy("genre", "history"));
  