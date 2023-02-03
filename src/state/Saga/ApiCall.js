import { APIKEY } from '../../config/API';
import {HideLoader, ShowLoader} from '../action-creators/index'

export const getAll = () => {
  ShowLoader();
  return fetch(`${APIKEY}user/getall`)
    .then((response) => response.json())
    .then((json) => {
      HideLoader();
      return json;
    })
    .catch((err) => {
      console.log(err);
      ShowLoader();
    });
}