import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import getBooks from '../api/api';

function Books() {
  const books = getBooks();
  const state = useSelector((state) => state.booksReducer);

  state.map((book) => books.push(book));

  return (
    <section className="books-page">
      {
        books.map((book) => <Book key={book.id} book={book} />)
      }
      <AddBook />
    </section>
  );
}

export default Books;
