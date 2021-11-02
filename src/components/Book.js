import React from 'react';
import '../styles/Book.css';

function Book() {
  return (
    <div className="book-container">
      <h3>Genre</h3>
      <h2>Book name</h2>
      <p>Author name</p>
      <ul className="book-actions">
        <li>
          <button type="button" className="action comments">Comments</button>
        </li>
        <li>
          <button type="button" className="action remove">Remove</button>
        </li>
        <li>
          <button type="button" className="action edit">Edit</button>
        </li>
      </ul>
    </div>
  );
}

export default Book;
