import { APIKEY } from '../../config/API';

import axios from "axios";

//get all user details
export const getAll = () => {
  return fetch(`${APIKEY}user/getall`)
    .then((response) => response.json())
    .then((json) =>json)
    .catch((err) => err);
}

//To create new user
export const createUser = async (payload) => {
  return await axios.post(`${APIKEY}user/create`, payload, { headers: { "content-type": "application/json; charset=UTF-8", } })
    .then((response) => response)
    .catch((err) => err);
}