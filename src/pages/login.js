import React from "react";
import Form from "../components/login/form";

export default function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <div>
          <h1 className="login__title">Linajeapp</h1>
          <h2 className="login__subtitle">
            ¡Bienvenido a Linajeapp! Aquí llevarás el registro digital de todos
            tus animales
          </h2>
          <ul className="login__list">
            <li>
              <p>
                Puedes adjuntar fotos y videos del animal a su perfil para
                verlos cuando quiera
              </p>
            </li>
            <li>
              <p>
                ¡No olvides que puedes compartir el perfil de tu animal con tus
                contactos!
              </p>
            </li>
            <li>
              <p>
                Puedes darle un seguimiento preciso a tus animales dentro del
                app.
              </p>
            </li>
          </ul>
          <Form />
        </div>
      </div>
    </div>
  );
}
