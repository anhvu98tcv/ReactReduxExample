var redux = require('redux');

console.log('Starting redux todo example');

var stateDefault = {
  searchText : '',
  showComleted : false,
  todos : []
};

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_ST':
      return {
        ...state,
        searchText : action.searchText
      };

    default:
      return state;
  }
};

var store = redux.createStore(reducer);

console.log(store.getState());

store.dispatch({
  type: 'CHANGE_ST',
  searchText : 'changed'
});

console.log(store.getState());
