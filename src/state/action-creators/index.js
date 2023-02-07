// Loaders
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
// Alerts
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
// data to be stored
export const data = (payload) =>{
    return{
        type: 'data',
        message : payload
    }
}
export const arr = (payload) =>{
    return{
        type: 'arr',
        message: payload
    }
}
// getting all user details
export const getAllUsers = () =>{
    return{
        type: 'getAllUsers'
    }
}
// create new user account
export const createNewUser = (payload) =>{
    return{
        type: 'createNewUser',
        message : payload
    }
}

// Getting car details for specific user

export const getUsercars = (payload) =>{
    return{
        type: 'getUsercars',
        message: payload
    }
}

// creating new car for users

export const createNewCar = (payload) =>{
    return{
        type: 'createNewCar',
        message: payload
    }
}

// Get serivce record of car
export const getServiceRecord = (payload) =>{
    return{
        type: 'getServiceRecord',
        message: payload
    }
}

//Creating new Service Record
export const creatServiceRecord = (payload) =>{
    return{
        type: 'creatServiceRecord',
        message: payload
    }
}