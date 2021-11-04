/* eslint-disable consistent-return */
import { CREATE_BOOK, FETCH_ALL_BOOKS, REMOVE_BOOK } from '../../actions/actionTypes';
import { Books } from '../../../api/api';

const initialState = Books();
const data = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];

    case FETCH_ALL_BOOKS:
      Object.keys(action.payload).map((key) => data.push(action.payload[key][0]));
      return [...state, ...data];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
