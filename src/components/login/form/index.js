import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { motion } from "framer-motion";

import user from "./../../../assets/images/login/user-icon.png";
import phone from "./../../../assets/images/login/phone-icon.png";
import mail from "./../../../assets/images/login/mail-icon.png";
import loader from "./../../../assets/images/login/loader.jpg";

const schema = yup.object().shape({
  names: yup
    .string()
    .required("Campo obligatorio")
    .min(3, "Mínimo 3 caracteres"),
  phone: yup.string().required("Campo obligatorio"),
  email: yup.string().required("Campo obligatorio").email("Email invalido"),
});

export default function Form() {
  const [isLoading, setIsloading] = useState(false);
  const [formAlert, setFormAlert] = useState("formulario enviado");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      names: "",
      phone: "",
      email: "",
    },
  });

  const submit = async (values) => {
    console.log("submit", values);
    const data = {
      name: values.names,
      email: values.email,
      phone: values.phone,
    };
    try {
      setIsloading(true);
      const response = await fetch(
        "https://linajeapp-staging.herokuapp.com/api/send-form-data",
        {
          body: JSON.stringify(data),
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.message) {
        setFormAlert(response.message);
        reset();
        setTimeout(() => {
          setFormAlert(null);
        }, 5000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }

    //onSubmitHandler()
  };

  return (
    <motion.div
      className="form"
      animate={{ opacity: 1, scale: 1, transition: { delay: 0.6 } }}
      initial={{ opacity: 0, scale: 0.5 }}
    >
      <h4 className="form__title">Suscríbete</h4>
      <div>
        <form onSubmit={handleSubmit(submit)}>
          <div className="form__input--wrapper">
            <div className="form__input--container">
              <label>
                <img src={user} alt="nombre de usuario" />
                <input
                  {...register(`names`)}
                  placeholder="Nombres y apellidos"
                  type="text"
                />
              </label>
            </div>
            {<p className="form__error">{errors.names?.message}</p>}
          </div>
          <div className="form__input--wrapper">
            <div className="form__input--container">
              <label>
                <img src={phone} alt="celular" />
                <input
                  {...register(`phone`)}
                  placeholder="Celular"
                  type="text"
                />
              </label>
            </div>
            {<p className="form__error">{errors.phone?.message}</p>}
          </div>
          <div className="form__input--wrapper">
            <div className="form__input--container">
              <label>
                <img src={mail} alt="Correo electrónico" />
                <input
                  {...register(`email`)}
                  placeholder="Correo electrónico"
                  type="text"
                />
              </label>
            </div>
            {<p className="form__error">{errors.email?.message}</p>}
          </div>
          <div className="form__alert">{formAlert && <p>{formAlert}</p>}</div>
          <div className="form__submit">
            <button type="submit" className="">
              {isLoading ? (
                <img src={loader} className="form__loader" alt="cargando" />
              ) : (
                "Enviar"
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
