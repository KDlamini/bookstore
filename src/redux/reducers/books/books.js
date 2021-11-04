/* eslint-disable consistent-return */
import { ADD_BOOK, REMOVE_BOOK } from '../../actions/actionTypes';
import getBooks from '../../../api/api';

const initialState = getBooks();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
