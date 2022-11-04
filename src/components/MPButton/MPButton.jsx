import React from "react";
import "./MPButton.css";

const MPButton = () => {

  const hadlerSub = (e) => {
    e.preventDefault();
    alert("кнопка условно отработала");
  };

  return (
    <button className="myButton" onClick={hadlerSub}>
      Войти
    </button>
  );
};

export default MPButton;
