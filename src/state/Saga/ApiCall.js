import { APIKEY } from '../../config/API';
import axios from "axios";

//get all user details
export const getAll = () => {
  return fetch(`${APIKEY}user/getall`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
}

//To create new user
export const createUser = async (payload) => {
  return await axios.post(`${APIKEY}user/create`, payload, { headers: { "content-type": "application/json; charset=UTF-8", } })
    .then((response) => response)
    .catch((err) => err);
}

//get users cars

export const getAllCars = (payload) => {
  return fetch(`${APIKEY}/user/get/${payload.message}`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
}

// create new car for user
export const createCar = (payload) => {
 
  return fetch(`${APIKEY}car/create`, {
    method: "POST",
    body: JSON.stringify({
      model: payload.model,
      color: payload.color,
      ownerid: payload.currentUser,
      purchase_date: payload.purchaseDate,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
}

// Get Service record of all cars
export const serviceRecords = async (payload) =>{
  return await fetch(`${APIKEY}/car/get/${payload}`)
  .then((response) => response.json())
  .then((json) => json)
  .catch((err) => err);
}