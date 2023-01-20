import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { APIKEY } from "../config/API";
import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import {ShowLoader, HideLoader, AlertSuccess} from '../state/action-creators/index'
const CarDetails = () => {
  const Dispatch = useDispatch();

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [cars, setcars] = useState([]);

  const [model, setmodel] = useState("");
  const [color, setcolor] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");

  const componantMount = () => {
    Dispatch(ShowLoader());
    fetch(`${APIKEY}/user/get/${params.get("user")}`)
      .then((response) => response.json())
      .then((json) => {
        setcars(json.User.Cars);
        Dispatch(HideLoader());
      })
      .catch((err) => {
        Dispatch(AlertSuccess("fatal Error occured...please try to contact admin"));
        Dispatch(HideLoader());
      });
  };

  const newCar = (e) => {
    e.preventDefault();
    Dispatch(ShowLoader());
    fetch(`${APIKEY}car/create`, {
      method: "POST",
      body: JSON.stringify({
        model: model,
        color: color,
        ownerid: params.get("user"),
        purchase_date: purchaseDate,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        if(json.error === 0){
          Dispatch(AlertSuccess("New Car Addedd"));
        }else{
          Dispatch(AlertSuccess("Duplicaate Entrys not allowted"));
        }
        componantMount();
        Dispatch(HideLoader());
      })
      .catch((err) => {
        console.log(err);
        Dispatch(HideLoader());
      });
  };
  useEffect(() => {
    componantMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h2>List of cars </h2>
        <Spinner />
        <div className="row">
          {cars.length <= 0 ? (
            <h6 className="mt-4 text-danger">No data found</h6>
          ) : (
            cars.map((car, index) => {
              return (
                <div className="col-md-3 my-1" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{car.model}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {car.purchase_date}
                      </h6>
                      <Link
                        to={`/service?id=${car.id}`}
                        className="btn btn-primary"
                      >
                        Service Record
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
          <div className="col-md-3 my-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">ADD Cars</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  <form
                    onSubmit={(e) => {
                      newCar(e);
                    }}
                  >
                    <label htmlFor="CarModel">Model</label>
                    <input
                      type={"text"}
                      className="form-control"
                      name="CarModel"
                      onChange={(e) => {
                        setmodel(e.target.value);
                      }}
                      required
                    />

                    <label htmlFor="CarColor">Color</label>
                    <input
                      type={"text"}
                      className="form-control"
                      name="CarColor"
                      onChange={(e) => {
                        setcolor(e.target.value);
                      }}
                      required
                    />

                    <label htmlFor="purchaseDate">Purchase Date</label>
                    <input
                      type={"date"}
                      className="form-control"
                      name="purchaseDate"
                      onChange={(e) => {
                        setPurchaseDate(e.target.value);
                      }}
                      required
                    />
                    <button className="form-control btn btn-primary mt-1">
                      ADD
                    </button>
                  </form>
                </h6>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CarDetails;
