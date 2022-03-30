import React from "react";
import Form from "../components/login/form";
import Parallax from "../components/login/parallax";
import { motion } from "framer-motion"


export default function Login() {
  return (
    <div className="login">
      <motion.div animate={{opacity:1, scale:1}} initial={{opacity:0, scale:.5}} className="login__container">
        <div>
          <motion.h1 animate={{opacity:1, y: 0, transition:{type:"spring"}}} initial={{opacity:0, y:-150}} className="login__title">Linajeapp</motion.h1>
          <motion.h2 animate={{opacity:1, y: 0, transition:{type:"spring", delay:.2}}} initial={{opacity:0, y:-150}} className="login__subtitle">
            ¡Bienvenido a Linajeapp! Aquí llevarás el registro digital de todos
            tus animales
          </motion.h2>
          <ul className="login__list">
            <motion.li animate={{opacity:1, y: 0, transition:{type:"spring", delay:.3}}} initial={{opacity:0, y:-150}}>
              <p>
                Puedes adjuntar fotos y videos del animal a su perfil para
                verlos cuando quiera
              </p>
            </motion.li>
            <motion.li animate={{opacity:1, y: 0, transition:{type:"spring", delay:.4}}} initial={{opacity:0, y:-150}}>
              <p>
                ¡No olvides que puedes compartir el perfil de tu animal con tus
                contactos!
              </p>
            </motion.li>
            <motion.li animate={{opacity:1, y: 0, transition:{type:"spring", delay:.5}}} initial={{opacity:0, y:-150}}>
              <p>
                Puedes darle un seguimiento preciso a tus animales dentro del
                app.
              </p>
            </motion.li>
          </ul>
          <Form />
        </div>
        <div>
          <Parallax />
        </div>
      </motion.div>
    </div>
  );
}
