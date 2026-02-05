import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#">
          <span
            className="d-inline-flex align-items-center justify-content-center rounded-3"
            style={{
              width: 34,
              height: 34,
              background: "#F97316",
              color: "#0F172A",
              fontWeight: 800,
              letterSpacing: "0.5px",
            }}
            aria-hidden="true"
          >
            RY
          </span>
          <span className="text-white">
            Rental<span style={{ color: "#F97316" }}>Yard</span>
          </span>
        </a>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#rentalYardNavbar"
          aria-controls="rentalYardNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Nav */}
        <div className="collapse navbar-collapse" id="rentalYardNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#browse">
                Browse
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#list">
                List Equipment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how">
                How it works
              </a>
            </li>
          </ul>

          {/* Search + Actions */}
          <div className="d-flex align-items-center gap-2">
            {/* Search (match button height using input-group-sm) */}
            <div className="input-group input-group-sm" style={{ width: 260 }}>
              <span className="input-group-text bg-transparent border-secondary text-secondary">
                🔎
              </span>
              <input
                className="form-control bg-transparent border-secondary text-white"
                placeholder="Search equipment..."
                aria-label="Search equipment"
              />
            </div>

            {/* Buttons (btn-sm matches input-group-sm) */}
            <a className="btn btn-sm btn-outline-light px-3" href="#login">
              Login
            </a>

            <a
              className="btn btn-sm fw-semibold text-dark px-3 text-nowrap"
              href="#signup"
              style={{ backgroundColor: "#F97316", borderColor: "#F97316" }}
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
