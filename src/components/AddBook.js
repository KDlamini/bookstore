import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions/books';

function AddBook({ setCurrentId }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e, title, author) => {
    e.preventDefault();// TEMPORALLY CODE: prevent clearing console and inputs to test redux logger.
    const id = title + Math.floor(Math.random() * (1000 - 100 + 1) + 100);
    setCurrentId(id);

    const newBook = {
      item_id: id,
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
        type="text"
        name="author"
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <button
        type="submit"
        onClick={(e) => submitBookToStore(e, title, author)}
      >
        ADD BOOK
      </button>
    </form>
  );
}

AddBook.propTypes = {
  setCurrentId: PropTypes.func.isRequired,
};

export default AddBook;
