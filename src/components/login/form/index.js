import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { motion } from "framer-motion"


import user from "./../../../assets/images/login/user-icon.png";
import phone from "./../../../assets/images/login/phone-icon.png";
import mail from "./../../../assets/images/login/mail-icon.png";

const schema = yup.object().shape({
  names: yup
    .string()
    .required("Campo obligatorio")
    .min(3, "Mínimo 3 caracteres"),
  phone: yup.string().required("Campo obligatorio"),
  email: yup.string().required("Campo obligatorio").email("Email invalido")
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      names: "",
      phone: "",
      email: "",
    },
  });

  const submit = (values) => {
    console.log("submit", values);
  };

  return (
    <motion.div className="form" animate={{opacity:1, scale:1, transition:{delay:.6}}} initial={{opacity:0, scale:.5}}>
      <h4 className="form__title">Suscríbete</h4>
      <div>
        <form onSubmit={handleSubmit(() => submit())}>
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
          <div className="form__submit">
            <button type="submit" className="">Enviar</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
