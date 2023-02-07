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
  return fetch(`${APIKEY}/user/get/${payload}`)
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
export const serviceRecords = async (payload) => {
  return await fetch(`${APIKEY}/car/get/${payload}`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
}

// Create new service record
export const createService = async (payload) => {
  return fetch(`${APIKEY}/servicing/create`, {
    method: "POST", body:
      JSON.stringify({
        carid: payload.user,
        servicing_date: getDate(),
        status: payload.status,
      }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
}

const getDate = () => {
  let dateObj = new Date();
  let month = String(dateObj.getMonth() + 1).padStart(2, "0");
  let day = String(dateObj.getDate()).padStart(2, "0");
  let year = dateObj.getFullYear();
  return year + "/" + month + "/" + day;
};