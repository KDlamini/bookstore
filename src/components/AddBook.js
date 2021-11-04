import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions/books';
import options from './options';
import '../styles/AddBook.css';

function AddBook({ setCurrentId }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = (e, title, author, category) => {
    e.preventDefault();// TEMPORALLY CODE: prevent clearing console and inputs to test redux logger.
    const id = title + Math.floor(Math.random() * (1000 - 100 + 1) + 100);
    setCurrentId(id);

    const newBook = {
      item_id: id,
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));
  };

  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <div className="form-group">
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

        <Select
          options={options()}
          value={category}
          placeholder="Select category"
          onChange={setCategory}
          className="multi-select"
          Searchable
          Clearable
          isMulti
        />

        <button
          type="submit"
          onClick={(e) => submitBookToStore(e, title, author, category)}
        >
          ADD BOOK
        </button>
      </div>
    </form>
  );
}

AddBook.propTypes = {
  setCurrentId: PropTypes.func.isRequired,
};

export default AddBook;
