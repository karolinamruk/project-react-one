import { createStore } from 'redux';
import initialState from './initialState.js';
import shortid from 'shortid';
import strContains from '../utils/strContains';

// export const getFilteredCards = (state, columnId) =>
//   state.cards.filter(
//     (card) =>
//       card.columnId === columnId &&
//       card.title.toLowerCase().includes(state.searchString.toLowerCase())
//   );

export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );

export const getAllColumns = (state) => state.columns;

// action creators
export const addList = (payload) => ({ type: 'ADD_LIST', payload });

export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });

export const updateSearchString = (payload) => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});

export const toggleCardFavorite = (id) => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload: id,
});

export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);

export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);

export const getAllLists = (state) => state.lists;

export const getAllCards = (state) => state.cards;

export const getFavoriteCards = (state) =>
  state.cards.filter((card) => card.isFavorite);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        ...state,
        lists: [...state.lists, { id: shortid(), ...action.payload }],
      };

    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { id: shortid(), ...action.payload }],
      };

    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { id: shortid(), ...action.payload }],
      };

    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };

    case 'TOGGLE_CARD_FAVORITE':
      // console.log('Reducer action:', action);
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload
            ? { ...card, isFavorite: !card.isFavorite }
            : card
        ),
      };

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
