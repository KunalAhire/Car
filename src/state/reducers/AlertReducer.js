let myState = false;
const AlertReducer = (state = myState, action) => {
  if (action.type === "AlertSuccess") {

    return action.message;

  } else if (action.type === "AlertFailed") {

    return action.message;
    
  } else {
    return state;
  }
};

export default AlertReducer;
