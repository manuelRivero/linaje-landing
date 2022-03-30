import React from "react";
import user from "./../../../assets/images/login/user-icon.png";
import phone from "./../../../assets/images/login/phone-icon.png";
import mail from "./../../../assets/images/login/mail-icon.png";

export default function Form() {
  return (
    <div className="form">
      <h4 className="form__title">Suscríbete</h4>
      <div>
        <div className="form__input--wrapper">
          <div className="form__input--container">
            <label>
              <img src={user} alt="nombre de usuario" />
              <input placeholder="Nombres y apellidos" type="text" />
            </label>
          </div>
        </div>
        <div className="form__input--wrapper">
          <div className="form__input--container">
            <label>
              <img src={user} alt="celular" />
              <input placeholder="Celular" type="text" />
            </label>
          </div>
        </div>
        <div className="form__input--wrapper">
          <div className="form__input--container">
            <label>
              <img src={user} alt="Correo electrónico" />
              <input placeholder="Correo electrónico" type="text" />
            </label>
          </div>
        </div>
        <div className="form__submit">
          <button className="">Enviar</button>
        </div>
      </div>
    </div>
  );
}
