import { useState } from "react";
import { Banner } from "./Banner";

export function Register() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  function checkInfo(e) {
    e.preventDefault();

    if (password === confirmPassword) {
      alert("Has creado tu cuenta exitosamente");
    } else {
      alert("Verifica tus datos. Las contraseñas deben ser iguales.");
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-start my-5">
        <form className="w-25" onSubmit={checkInfo}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Correo electronico
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              value={password}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password2" className="form-label">
              Repetir Contraseña
            </label>
            <input
              value={confirmPassword}
              type="password"
              className="form-control"
              id="Password2"
              onChange={handleConfirmPassword}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </form>
      </div>
    </>
  );
}
