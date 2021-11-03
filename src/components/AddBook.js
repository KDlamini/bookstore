import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function AddBook() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (title, author) => {
    const id = title + Math.floor(Math.random() * (1000 - 100 + 1) + 100);

    const newBook = {
      id,
      title,
      author,
    };

    dispatch(addBook(newBook));
  };

  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <input
        type="text"
        name="title"
        placeholder="Book title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="dropdown"
        name="category"
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <button
        type="submit"
        onClick={(e) => { e.preventDefault(); submitBookToStore(title, category); }}
      >
        ADD BOOK
      </button>
    </form>
  );
}

export default AddBook;
