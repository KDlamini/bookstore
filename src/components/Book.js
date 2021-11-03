import React from 'react';
import PropTypes from 'prop-types';
import removeBook from './removeBook';
import '../styles/Book.css';

function Book({ book }) {
  return (
    <div className="book-container">
      <h3>{book.genre}</h3>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <ul className="book-actions">
        <li>
          <button type="button" className="action comments">Comments</button>
        </li>
        <li>
          <button
            type="button"
            className="action remove"
            onClick={() => removeBook()}
          >
            Remove
          </button>
        </li>
        <li>
          <button type="button" className="action edit">Edit</button>
        </li>
      </ul>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
  }),
};

Book.defaultProps = {
  book: {
    id: 'sdasas42323', title: 'The Hunger Games', author: 'Suzanne Collins', genre: 'Dystopian Fiction',
  },
};

export default Book;
