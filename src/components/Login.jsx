import { useState } from "react";

export function Login() {
  const emailKey = "example@example.com";
  const key = "123456";

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (email == emailKey && password == key) {
      alert("Has ingresado correctamente");
    } else {
      alert("Datos incorrectos. Intenta nuevamente");
    }
  }
  return (
    <>
      <h2 className="text-center my-5">Ingresa a tu cuenta</h2>
      <div className="d-flex justify-content-center align-items-start my-5 py-5">
        <form className="w-25" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Correo electronico
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={handlePassword}
              required
            />
            <span id="passwordHelpInline" class="form-text">
              Debe tener al menos 6 caracteres.
            </span>
          </div>
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </>
  );
}
