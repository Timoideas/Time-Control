import { set } from "mongoose";
import { useState } from "react";
import style from "./AuthLogin.module.css";
export default function AuthLogin() {
  const [UserRegistered, setUserRegistered] = useState(false);
  const [ValidUserAuth, setValidUserAuth] = useState(null);
  const [FormSended, setFormSended] = useState(false);
  const handlerLoginForm = (e) => {
    e.preventDefault();
    setFormSended(true);

    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setValidUserAuth(res.data);
      } else if (res.status === 400) {
        setUserRegistered(false);
      }
    });
  };
  const handlerNewuser = (e) => {
    e.preventDefault();
    fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setValidUserAuth(res.data);
      } else {
        setValidUserAuth(null);
      }
    });
  };
  return (
    <div className={style.Container}>
      <h2>AuthLogin</h2>
      <form onSubmit={handlerLoginForm} className={style.LoginForm}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={() => {
            setFormSended(false);
          }}
        />
        {FormSended &&
          (UserRegistered ? (
            <div>
              <div>Bienvenido, ingresa tu teléfono para iniciar sesión</div>
              <form
                onSubmit={handlerNewuser}
                className={style.RegistrationForm}
              >
                <input type="text" name="phone" placeholder="phone" />
                <button type="submit">Iniciar sesión</button>
              </form>
            </div>
          ) : (
            <div className={style.NewAccount}>
              <div>Bienvenido, ingresa tu teléfono para crear una cuenta</div>
              <form
                onSubmit={handlerNewuser}
                className={style.RegistrationForm}
              >
                <input type="text" name="phone" placeholder="phone" />
                <button type="submit">Crear cuenta</button>
              </form>
            </div>
          ))}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
