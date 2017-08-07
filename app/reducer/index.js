import update from 'react-addons-update';

var defaultState = {};

module.exports = (state=defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}


// case 'ADD_TODO':
//   return update(state, {
//     todos: {
//       $push: [action.newTodoText]
//     }
//   });
