import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import { getUsercars, createNewCar } from '../state/action-creators/index'
import { useSelector } from "react-redux";
const CarDetails = () => {
  const cars = useSelector((state) => state.DataReducers);
  const Dispatch = useDispatch();

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const currentUser = params.get("user");

  const [model, setmodel] = useState("");
  const [color, setcolor] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");


  const newCar = (e) => {
    e.preventDefault();
    Dispatch(createNewCar({ model, color, purchaseDate, currentUser }));
  };
  useEffect(() => {

    return () => {
      Dispatch(getUsercars(currentUser))
    }
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
