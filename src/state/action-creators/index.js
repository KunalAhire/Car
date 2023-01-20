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