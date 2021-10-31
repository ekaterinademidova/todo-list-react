export default function actions(state, action) {
  switch(action.type) {
    case 'add':
      return [
        ...state, 
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
          deleted: false
        }
      ];
    case 'done': 
      return [...state.map(item => {
        if(item.id === action.payload) {
          item.completed = true;
        }
        return item;
      })];
    case 'undone': 
      return [...state.map(item => {
        if(item.id === action.payload) {
          item.completed = false;
        }
        return item;
      })];
    case 'remove': 
      return [...state.map(item => {
        if(item.id === action.payload) {
          item.deleted = true;
        }
        return item;
      })];
    case 'restore': 
      return [...state.map(item => {
        if(item.id === action.payload) {
          item.deleted = false;
        }
        return item;
      })];
    case 'save': 
      return [...state.map(item => {
        if(item.id === action.payload) {
          item.title = action.title;
        }
        return item;
      })];
    default:
      return [...state];
  }
};