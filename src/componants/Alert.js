import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AlertFailed} from '../state/action-creators/index'
const Alert = () => {
  const myState = useSelector((state) => state.AlertReducer);
  const Dispatch = useDispatch();
  return(
    <div className="container">
      { myState ?
        <div className="alert alert-warning d-flex justify-content-between" role="alert" style={{width : "100%"}}>
          <strong>{myState}</strong>
          <button type="button " className="btn border" onClick={()=>{Dispatch(AlertFailed(false))}}>
            <span>X</span>
          </button>
        </div>: null
      }
    </div>
  );
};

export default Alert;
