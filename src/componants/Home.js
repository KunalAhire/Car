import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {APIKEY} from '../config/API';
import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import {ShowLoader, HideLoader} from '../state/action-creators/index'
const Home = () => {
  const [users, setUsers] = useState([]);
  const Dispatch = useDispatch();

  useEffect(() => {
    getAllPosts();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllPosts = () => {
    Dispatch(ShowLoader());
    fetch(`${APIKEY}user/getall`)
      .then((response) => response.json())
      .then((json) => {
        setUsers(json.Users);
        Dispatch(HideLoader());
      })
      .catch((err) => {
        console.log(err);
        Dispatch(HideLoader());
      });
  };
  return (
    <div className="container">
      <h1 className="text-center">Admin Panel</h1>
     {<Spinner />} 
        <div className="container">
          <Link className="btn btn-primary my-2" to={"/newuser"}>
            Add User
          </Link>
          <div className="row">
            {users.map((user, index) => {
              return (
                <div className="col-md-3 my-1" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title"> User Name : {user.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Phone : {user.phone_no}
                      </h6>

                      <Link
                        to={`/cardetails?user=${user.id}`}
                        className="card-link btn btn-primary"
                      >
                        Cars Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  );
};

export default Home;
