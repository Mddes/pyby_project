import React from "react";
import MPButton from "../../components/MPButton/MPButton";
import MPInput from "../../components/MPInput/MPInput";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="reg__container">
    <form action="/">
      <div className="left-part">
      <MPInput placeholder={"Имя"}></MPInput>
      <MPInput  placeholder={"Пароль"}></MPInput>
      <MPInput  placeholder={"Аккаунт Скайп"}></MPInput>
      <MPInput  placeholder={"Кошелёк"}></MPInput>
      </div>
      <div className="right-part">
      <MPInput  placeholder={"Email"}></MPInput>
      <MPInput  placeholder={"Подтверждение пароля"}></MPInput>
      <MPInput  placeholder={"Ваш логин для скайпа"}></MPInput>
      <MPInput  placeholder={"Сайт"}></MPInput>
      </div>
      <MPButton></MPButton>
    </form>
    </div>
  );
};

export default Registration;
