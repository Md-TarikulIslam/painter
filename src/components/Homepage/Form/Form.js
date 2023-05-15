import React from "react";
import "./Form.css";
import Feedback from "../Feedback/Feedback";

const Form = () => {
  return (
    <div>
      <div className="form-flex">
        <div>
          <h1 className="fill-text">Fill in the Form, We'll Call You!</h1>
          <p className="info-text fontlight">
            For detailed information about our painting services and products,
            leave your number to us and our experts will call you.
          </p>
        </div>
        <div>
          <form>
            <div className="field-flex">
              <div>
                <input className="field fontlight" type="text" placeholder="Your Name" name="name" />
                <input className="field fontlight" type="email" placeholder="Email Address" name="email" />
                <input className="field fontlight" type="number" placeholder="Phone Number" name="phone" />
              </div>
              <div>
                <button className="btn-submit fontlight" type="submit">Call Back</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Feedback></Feedback>
    </div>
  );
};

export default Form;
