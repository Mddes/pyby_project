import React from "react";
import MPButton from "../../components/MPButton/MPButton";
import MPInput from "../../components/MPInput/MPInput";
import "./Login.css";

const Login = () => {

  return (
      <div className="login">
        <div className="login__container">
            <form action="/" className="login-form">
            <MPInput placeholder={"Email"}></MPInput>
            <MPInput placeholder={"Пароль"}></MPInput>
            <MPButton></MPButton>
            </form>
        </div>
      </div>
    
  );
};

export default Login;
