import React from "react";

const Footer = () => {
  return (
    <footer className="mt-5 pt-5 pb-4" style={{ background: "#0F172A" }}>
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-md-4">
            <div className="d-flex align-items-center gap-2 fw-bold fs-5">
              <span className="text-white">Rental</span>
              <span style={{ color: "#F97316" }}>Yard</span>
            </div>
            <p className="mt-3" style={{ color: "rgba(248,250,252,0.75)" }}>
              A marketplace for renting construction equipment and vehicles — with fleet tracking,
              inspections, and secure payments.
            </p>
          </div>

          {/* Links */}
          <div className="col-6 col-md-2">
            <div className="text-white fw-semibold mb-2">Platform</div>
            <ul className="list-unstyled">
              <li><a className="text-decoration-none" style={{ color: "rgba(248,250,252,0.75)" }} href="#browse">Browse</a></li>
              <li><a className="text-decoration-none" style={{ color: "rgba(248,250,252,0.75)" }} href="#list">List Equipment</a></li>
              <li><a className="text-decoration-none" style={{ color: "rgba(248,250,252,0.75)" }} href="#how">How it works</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <div className="text-white fw-semibold mb-2">Support</div>
            <ul className="list-unstyled">
              <li><a className="text-decoration-none" style={{ color: "rgba(248,250,252,0.75)" }} href="#help">Help Center</a></li>
              <li><a className="text-decoration-none" style={{ color: "rgba(248,250,252,0.75)" }} href="#terms">Terms</a></li>
              <li><a className="text-decoration-none" style={{ color: "rgba(248,250,252,0.75)" }} href="#privacy">Privacy</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="col-md-4">
            <div className="text-white fw-semibold mb-2">Get started</div>
            <div className="p-3 rounded-3" style={{ background: "rgba(248,250,252,0.06)" }}>
              <div className="small mb-2" style={{ color: "rgba(248,250,252,0.75)" }}>
                Want to rent out your fleet and track revenue?
              </div>
              <a
                href="#signup"
                className="btn w-100 fw-semibold text-dark"
                style={{ backgroundColor: "#F97316", borderColor: "#F97316" }}
              >
                Create an account
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: "rgba(248,250,252,0.15)" }} />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div style={{ color: "rgba(248,250,252,0.65)" }} className="small">
            © {new Date().getFullYear()} Rental Yard. All rights reserved.
          </div>
          <div className="small" style={{ color: "rgba(248,250,252,0.65)" }}>
            Built for construction rentals • Fleet • Inventory • Bookings
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
