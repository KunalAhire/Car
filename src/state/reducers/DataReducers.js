const myState = [];

const DataReducers = (state = myState, action) => {
  if(action.type === "data"){
    return state = action.message.Users;
  }else{
    return state;
  }
}

export default DataReducers