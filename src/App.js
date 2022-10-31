import Card from "./container/Card";
import "./App.css";
import Thanks from "./container/Thanks";
import Form from "./container/Form";
import { useState } from "react";

function App() {
  const [formValue, setFormValue] = useState({
    number: null,
    mm: null,
    yy: null,
    name: null,
    cvc: null,
  });
  const [validate, setValidate] = useState(false);

  const handleInput = (e) => {
    if (e.target.name === "number") {
      e.target.value = e.target.value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
    }
    if (e.target.name === "mm" || e.target.name === "yy") {
      e.target.value = e.target.value
        .toString()
        .replace(/[^0-9]/g, "")
        .substring(0, 2);
      if (e.target.name === "mm" && e.target.value > 12) {
        e.target.value = "12";
      }
    }

    if (e.target.name === "cvc") {
      e.target.value = e.target.value.substring(0, 3);
    }

    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleError = (labelTarget, msg, type = "add") => {
    if (type === "add") {
      const submitBtn = document.querySelector(".submit-form");
      submitBtn.classList.add("shake");
      submitBtn.addEventListener("animationend", () =>
        submitBtn.classList.remove("shake")
      );
    }

    document.querySelector(`.${labelTarget}`).nextElementSibling.textContent =
      msg;
    document
      .querySelector(`[name=${labelTarget}]`)
      .classList[type](`input-error`);
    document
      .querySelector(`.${labelTarget}`)
      .nextElementSibling.classList[type === "add" ? "remove" : "add"](
        "hidden"
      );
  };

  function formSubmit(e) {
    e.preventDefault();
    for (let i in formValue) {
      if (!formValue[i]) {
        handleError(i, "Can't be blank");
      } else {
        handleError(i, " ", "remove");
      }
    }

    if (formValue.number) {
      if (formValue.number.length < 16) {
        handleError("number", "Number is short");
      } else if (formValue.number.match(/[^0-9\s]/g)) {
        handleError("number", "wrong format, numbers only");
      } else {
        handleError("number", " ", "remove");
      }
    }

    if (formValue.cvc) {
      if (formValue.cvc.length < 3) {
        handleError("cvc", "CVC is too short");
      } else {
        handleError("cvc", " ", "remove");
      }
    }

    if (!formValue.mm) {
      handleError("mm", "can't be blank");
    }
    if (!formValue.yy) {
      handleError("yy", "can't be blank");
    }

    if (document.querySelectorAll(".input-error").length === 0) {
      setValidate(true);
    }
  }

  function resetForm() {
    setFormValue({ name: null, number: null, mm: null, yy: null, cvc: null });
    setValidate(false);
  }

  return (
    <div className="container">
      <div className="card">
        <Card
          formValue={formValue}
          mm={formValue.mm}
          yy={formValue.yy}
          name={formValue.name}
          number={formValue.number}
          cvc={formValue.cvc}
        />
        {validate ? (
          <Thanks handleButton={resetForm} />
        ) : (
          <Form formSubmit={formSubmit} handleInput={handleInput} />
        )}
      </div>
    </div>
  );
}

export default App;
