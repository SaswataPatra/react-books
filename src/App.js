import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
  const [books, setBook] = useState([]);
  const createBook = (title) => {
    // console.log(`the book to be created is ${item}`);
    // setBook([...books,item]);
    // console.log(books);
    const updatedBooks = [...books, { id: Math.round(Math.random()*9999), title: title }];
    setBook(updatedBooks);
    console.log(books);
  };
  return (
    <div>
    {books.length}
      <BookList />
      <BookCreate onCreate={createBook} />
    </div>
  );
}
export default App;
