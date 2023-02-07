
const arrReducer = (state = [], action) => {
  if (action.type === 'arr') {
    state = action.message;
    return state;
  } else {
    return state;
  }
}

export default arrReducer