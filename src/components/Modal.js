import React from "react";
import "./Modal.css";

const Modal = ({onClick, setOnClick}) => {

    const handleCancelButton = () =>{
        setOnClick(false);
    }

    if(!onClick) return null;
    
  return (
    <div className=" backdrop ">
      <div className="modal">
        <div className="label">Add Members</div>
        <div className="form-container">
          <form className="form-style">
            <div className="label">Name</div>
            <input type="text" id="name" />

            <div className="label">Company</div>
            <input type="text" id="company" />

            <div className="label">Status</div>
            <input type="text" id="status" />

            <div className="label">Notes</div>
            <input type="text" id="notes" />
          </form>
        </div>
        <div className="btn-container">
            <button className="secondary-btn" onClick={handleCancelButton}>Cancel</button>
            <button className="primary-btn">Save</button>

        </div>
      </div>
    </div>
  );
};

export default Modal;
