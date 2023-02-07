import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import { getServiceRecord, creatServiceRecord } from '../state/action-creators/index';
import { useSelector } from "react-redux";

const ServiceRecords = () => {
  const Dispatch = useDispatch();
  const car = useSelector((state) => state.DataReducers);
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const getDate = () => {
    let dateObj = new Date();
    let month = String(dateObj.getMonth() + 1).padStart(2, "0");
    let day = String(dateObj.getDate()).padStart(2, "0");
    let year = dateObj.getFullYear();
    return year + "/" + month + "/" + day;
  };

  useEffect(() => {

    return () => {
      Dispatch(getServiceRecord(params.get("id")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h2>Service Record </h2>
      <Spinner />
      <div className="row">
        {
          car.length <= 0 ? (<h6>Service Record not available</h6>) :
            (
              car.map((car, index) => {
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
                  Dispatch(creatServiceRecord({ status: "finished", user: params.get("id") }))
                }}
              >
                Finished
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  Dispatch(creatServiceRecord({ status: "unfinished", user: params.get("id") }))
                }}
              >
                Unfinished
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  Dispatch(creatServiceRecord({ status: "scheduled", user: params.get("id") }))
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
