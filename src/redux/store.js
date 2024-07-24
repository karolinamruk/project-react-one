import { createStore } from 'redux';
import initialState from './initialState.js';
import shortid from 'shortid';

const reducer = (state, action) => {
  // const reducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case 'ADD_COLUMN': {

  //       const maxColumnId = state.columns.reduce((maxId, column) => Math.max(maxId, column.id), 0);
  //       const newColumnId = maxColumnId + 1;

  //       const newColumn = {
  //         id: newColumnId,
  //         ...action.payload,
  //       };

  //       return {
  //         ...state,
  //         columns: [...state.columns, newColumn],
  //       };
  //     }

  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { id: shortid(), ...action.payload }],
      };

    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { ...action.payload }],
      };

    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
