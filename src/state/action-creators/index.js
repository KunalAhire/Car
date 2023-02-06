export const ShowLoader = () =>{
    return{
        type : "show"
    }
}
export const HideLoader =() =>{
    return{
        type : "hide"
    }
}
export const AlertSuccess = (payload) =>{
    return{
        type : "AlertSuccess",
        message : payload
    }
} 
export const AlertFailed = (payload) =>{
    return{
        type : "AlertFailed",
        message : payload
    }
} 

export const data = (payload) =>{
    return{
        type: 'data',
        message : payload
    }
}

export const getAllUsers = () =>{
    return{
        type: 'getAllUsers'
    }
}
export const createNewUser = (payload) =>{
    return{
        type: 'createNewUser',
        message : payload
    }
}