import React from "react";
import { useSelector} from "react-redux";

const Spinner = () => {
  const myState = useSelector((state)=>state.Loader);
  return (
    <div className="text-center mt-5">{
      myState ?
      <div className="spinner-border text-primary " role="status">
        <span className="visually-hidden">Loading...</span>
      </div> : null
      }
    </div>
  );
};

export default Spinner;
