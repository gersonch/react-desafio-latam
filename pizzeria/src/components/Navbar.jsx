export default function Navbar() {
  const total = 25000;
  const totalFormateado = total.toLocaleString("es-CL"); // Español (Chile)
  const token = false;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pizzeria Mamma Mia
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  🍕Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  {token ? "🔓Profile" : "🔐Login"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  {token ? "🔓Logout" : "🔐Register"}
                </a>
              </li>
            </ul>
          </div>
          <button>🛒 Total ${totalFormateado}</button>
        </div>
      </nav>
    </>
  );
}
