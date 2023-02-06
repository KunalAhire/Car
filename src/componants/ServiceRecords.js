import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { APIKEY } from "../config/API";
import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import {ShowLoader, HideLoader, getServiceRecord} from '../state/action-creators/index';
import { AlertSuccess } from '../state/action-creators/index'
import { useSelector} from "react-redux";

const ServiceRecords = () => {
  const Dispatch = useDispatch();
  const car = useSelector((state)=>state.DataReducers);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [service, setservice] = useState([]);
  const [cars, setCar] = useState([]);
  const [date, setDate] = useState("");

  const getDate = () => {
    let dateObj = new Date();
    let month = String(dateObj.getMonth() + 1).padStart(2, "0");
    let day = String(dateObj.getDate()).padStart(2, "0");
    let year = dateObj.getFullYear();
    return year + "/" + month + "/" + day;
  };

  
  const ApiCall = (s) => {
    Dispatch(ShowLoader());
    fetch(`${APIKEY}/servicing/create`, {method: "POST",body: 
    JSON.stringify({
      carid: params.get("id"),
      servicing_date: date,
      status: s,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }})
      .then((response) => response.json())
      .then((json) => {
       // componantMount();
        Dispatch(HideLoader());
        Dispatch(AlertSuccess("New Record inserted"));
      })
      .catch((err) => {
        console.log(err);
        Dispatch(HideLoader());
      });
  };
  useEffect(() => {
    setDate(getDate());
    Dispatch(getServiceRecord(params.get("id")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h2>Service Record </h2>
      <Spinner />
      <div>
        <p>
          Car Model : {car.model} <br />
          purchase Date : {car.purchase_date}
        </p>
      </div>
      
        <div className="row">
          {car.Servicing.length <= 0 ? (<h6>Service Record not available</h6>) :
            (
              car.Servicing.map((car, index) => {
                return (
                  <div className="col-md-3 my-1" key={index}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">
                          Service Date : {car.servicing_date}
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          Status : {car.status}
                        </h6>
                      </div>
                    </div>
                  </div>
                );
              })
            )
          }
          <div className="col-md-6 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">create new service status </h5>
                <p>DATE : {getDate()}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    ApiCall("finished");
                  }}
                >
                  Finished
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    ApiCall("unfinished");
                  }}
                >
                  Unfinished
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    ApiCall("scheduled");
                  }}
                >
                  Scheduled
                </button>
              </div>
            </div>
          </div>
        </div>   
    </div>
  );
};

export default ServiceRecords;
