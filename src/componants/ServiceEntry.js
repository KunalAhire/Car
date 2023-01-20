import React, { useEffect } from "react";
import Alert from "./Alert";

import { useDispatch } from "react-redux";
import {AlertSuccess, AlertFailed} from '../state/action-creators/index'
const ServiceEntry = () => {
  const Dispatch = useDispatch();
    

  useEffect(() => {
  
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>  
       <Alert />  
       <div>
        <button onClick={()=>{Dispatch(AlertSuccess("This is success"))}}>Success Alert</button>
        <button onClick={()=>{Dispatch(AlertFailed(false))}}>Success Failed</button>
       </div>
    </div>
  );
};

export default ServiceEntry;
