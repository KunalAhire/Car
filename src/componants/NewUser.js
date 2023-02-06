import axios from "axios";
import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {APIKEY} from '../config/API';
import { useDispatch } from "react-redux";
import { AlertSuccess } from '../state/action-creators/index'
import { createNewUser} from '../state/action-creators/index';

const NewUser = () => {
  
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const Dispatch = useDispatch();

  const body = {
    name : name,
    phone_no : parseInt(phone)
  }
  const createUser = (event) =>{
    event.preventDefault();
    Dispatch(createNewUser(body))
    //  axios.post(`${APIKEY}user/create`,body,{headers: {"content-type": "application/json; charset=UTF-8",}})
    //  .then((response)=>{
    //    if(response.data.error === 0){navigate("/");Dispatch(AlertSuccess("New User Addedd"));}
    //    else{Dispatch(AlertSuccess("Duplicate entries Not Allowted"));}
    //  })
    //  .catch((err)=>{Dispatch(AlertSuccess(err));});
   } 
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{height:"100vh"}}>
     <h2 className="mb-4 fw-light">Register new user</h2>
        <form className="container text-center" onSubmit={(e)=>{createUser(e);}}>
          <h1 className="h3 mb-3 fw-lighter">sign in</h1>

          <div className="form-floating my-4">
            <input type="text" className="form-control" id="floatingInput" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating my-4">
            <input type="text" className="form-control" id="floatingPassword" placeholder="Enter Phone number" onChange={(e)=>{setPhone(e.target.value)}}/>
            <label htmlFor="floatingPassword">Phone</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit"> Sign in </button>
        </form>
    </div>
  );
};

export default NewUser;
