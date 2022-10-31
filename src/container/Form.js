import React from "react";

function Form(props) {
  return (
    <div className="detail-design">
      <form className="form" onSubmit={props.formSubmit}>
        <div className="form-ele">
          <label htmlFor="cardholder-name" className="name">
            Cardholder Name
            <input
              type="text"
              id="cardholder-name"
              placeholder=" e.g. Jane Appleseed"
              name="name"
              onChange={props.handleInput}
            />
          </label>

          <span className="error"></span>
        </div>
        <div className="form-ele">
          <label htmlFor="card-number" className="number">
            Card Number
            <input
              type="text"
              id="card-number"
              placeholder="  e.g. 1234 5678 9123 0000"
              name="number"
              minLength={16}
              onChange={props.handleInput}
            />
          </label>
          <span className="error"></span>
        </div>
        <div className="form-ele">
          <div className="date-cvc">
            <div className="date">
              <label htmlFor="exp-date" className="mm yy">
                Exp. Date (MM/YY)
                <div className="date-input">
                  <input
                    type="text"
                    placeholder=" MM"
                    name="mm"
                    onChange={props.handleInput}
                  />
                  <input
                    type="text"
                    placeholder="YY"
                    name="yy"
                    onChange={props.handleInput}
                  />
                </div>
              </label>
              <span className="error"></span>
            </div>
            <div className="cvc-detail">
              <label className="cvc">
                CVC
                <input
                  type="text"
                  placeholder=" e.g. 123"
                  name="cvc"
                  minLength={3}
                  onChange={props.handleInput}
                />
              </label>
              <span className="error"></span>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-form">
          Confirm
        </button>
      </form>
    </div>
  );
}

export default Form;
