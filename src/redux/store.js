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

export const removeCard = (id) => ({
  type: 'REMOVE_CARD',
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
  const newState = {
    lists: listsReducer(state.lists, action),
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    searchString: searchStringReducer(state.searchString, action),
  };

  return newState;
};

const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );
    case 'REMOVE_CARD':
      console.log('Removing card with id:', action.payload);
      return statePart.filter((card) => card.id !== action.payload);
    default:
      return statePart;
  }
};

const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case 'UPDATE_SEARCHSTRING':
      return action.payload;
    default:
      return statePart;
  }
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_LIST':
//       return {
//         ...state,
//         lists: [...state.lists, { id: shortid(), ...action.payload }],
//       };

//     case 'ADD_COLUMN':
//       return {
//         ...state,
//         columns: [...state.columns, { id: shortid(), ...action.payload }],
//       };

//     case 'ADD_CARD':
//       return {
//         ...state,
//         cards: [...state.cards, { id: shortid(), ...action.payload }],
//       };

//     case 'TOGGLE_CARD_FAVORITE':
//       // console.log('Reducer action:', action);
//       return {
//         ...state,
//         cards: state.cards.map((card) =>
//           card.id === action.payload
//             ? { ...card, isFavorite: !card.isFavorite }
//             : card
//         ),
//       };

//     case 'UPDATE_SEARCHSTRING':
//       return { ...state, searchString: action.payload };

//     default:
//       return state;
//   }
// };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
