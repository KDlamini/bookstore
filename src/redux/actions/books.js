import {
  CREATE_BOOK, REMOVE_BOOK, FETCH_ALL_BOOKS, DELETE_BOOK,
} from './actionTypes';
import * as api from '../../api/api';

// Action creators
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// API action creators
export const getBooks = () => async (dispatch) => {
  try {
    const data = await api.fetchBooks();

    dispatch({ type: FETCH_ALL_BOOKS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addBook = (book) => async (dispatch) => {
  try {
    await api.postBook(book);

    dispatch({ type: CREATE_BOOK, payload: book });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    await api.deleteBook(id);

    dispatch({ type: DELETE_BOOK, payload: id });
  } catch (error) {
    throw new Error(error.message);
  }
};
