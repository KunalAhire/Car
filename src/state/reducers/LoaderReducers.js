export const Loader = (state = false, action) =>{
    if(action.type === "show"){
        return true;
    }
    else if(action.type === "hide"){
        return false;
    }
    else{
        return state
    }
}
export default Loader;