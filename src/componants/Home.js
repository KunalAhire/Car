import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import {ShowLoader, HideLoader, getAllUsers} from '../state/action-creators/index';
import { useSelector} from "react-redux";

const Home = () => {
  const users = useSelector((state)=>state.DataReducers);
  const Dispatch = useDispatch();

  useEffect(() => {
    //getAllPosts();
   
    Dispatch(getAllUsers());
    
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
