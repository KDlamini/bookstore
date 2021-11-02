import React from 'react';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

function Books() {
  return (
    <section className="books-page">
      <Book />
      <AddBook />
    </section>
  );
}

export default Books;
