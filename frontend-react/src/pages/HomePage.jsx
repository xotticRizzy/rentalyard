import React from "react";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-5" style={{ background: "#F8FAFC" }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span
                className="badge rounded-pill mb-3"
                style={{ background: "rgba(249,115,22,0.15)", color: "#F97316" }}
              >
                Marketplace for equipment & fleet rentals
              </span>

              <h1 className="display-5 fw-bold text-dark">
                Rent construction equipment{" "}
                <span style={{ color: "#2563EB" }}>fast</span>,{" "}
                <span style={{ color: "#F97316" }}>safely</span>, and with confidence.
              </h1>

              <p className="lead mt-3 text-muted">
                Rental Yard connects companies and individuals to rent out excavators, loaders,
                tools, and vehicles — while tracking availability, condition, bookings, and revenue.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-2 mt-4">
                <a href="#browse" className="btn btn-primary btn-lg">
                  Browse Rentals
                </a>
                <a href="#list" className="btn btn-outline-primary btn-lg">
                  List Your Equipment
                </a>
              </div>

              <div className="d-flex gap-4 mt-4">
                <div>
                  <div className="fw-bold">Verified Listings</div>
                  <div className="small text-muted">Profiles & equipment checks</div>
                </div>
                <div>
                  <div className="fw-bold">Transparent Pricing</div>
                  <div className="small text-muted">Day, week, month rates</div>
                </div>
                <div>
                  <div className="fw-bold">Fleet Tracking</div>
                  <div className="small text-muted">Status, damage, maintenance</div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-soft">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="fw-bold">Featured</div>
                    <span className="badge bg-success">Available</span>
                  </div>

                  <div className="d-flex gap-3">
                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: 80,
                        height: 80,
                        background:
                          "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(249,115,22,0.15))",
                        fontSize: 28,
                      }}
                    >
                      🚜
                    </div>

                    <div className="flex-grow-1">
                      <div className="fw-bold fs-5">Mini Excavator (3.5T)</div>
                      <div className="small text-muted">Hobart • Well maintained</div>

                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <div className="fw-bold" style={{ color: "#F97316" }}>
                            $240 / day
                          </div>
                          <div className="small text-muted">Delivery available</div>
                        </div>
                        <a href="#browse" className="btn btn-primary">
                          View
                        </a>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="row g-3">
                    <div className="col-6">
                      <div className="p-3 rounded-3 border">
                        <div className="small text-muted">Active bookings</div>
                        <div className="fw-bold fs-4">18</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-3 rounded-3 border">
                        <div className="small text-muted">Fleet utilization</div>
                        <div className="fw-bold fs-4">72%</div>
                      </div>
                    </div>
                  </div>

                  <div className="small mt-3 text-muted">
                    UI template preview. Real data will come from Django API.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">How it works</h2>
            <p className="text-muted">
              Simple flow for renters and equipment owners
            </p>
          </div>

          <div className="row g-3">
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <div className="fw-bold mb-2">1. Browse & compare</div>
                <p className="text-muted mb-0">
                  Find equipment by location, availability, and price.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <div className="fw-bold mb-2">2. Book securely</div>
                <p className="text-muted mb-0">
                  Request bookings with clear pricing and conditions.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <div className="fw-bold mb-2">3. Track & manage</div>
                <p className="text-muted mb-0">
                  Owners track fleet status, damage reports, and revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured categories */}
      <section className="py-5" style={{ background: "#F8FAFC" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="fw-bold mb-0">Popular categories</h3>
            <a href="#browse" className="text-decoration-none">
              View all →
            </a>
          </div>

          <div className="row g-3">
            {[
              { name: "Excavators", icon: "🚜" },
              { name: "Loaders", icon: "🚛" },
              { name: "Generators", icon: "⚡" },
              { name: "Tools", icon: "🧰" },
            ].map((cat) => (
              <div className="col-6 col-md-3" key={cat.name}>
                <div className="card p-4 h-100 text-center">
                  <div className="fs-1">{cat.icon}</div>
                  <div className="fw-bold mt-2">{cat.name}</div>
                  <div className="small text-muted">View listings</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="p-4 p-md-5 rounded-3 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
               style={{ background: "rgba(37,99,235,0.08)" }}>
            <div>
              <h4 className="fw-bold mb-1">Have equipment to rent out?</h4>
              <p className="text-muted mb-0">
                List your fleet, manage bookings, and track revenue in one place.
              </p>
            </div>
            <a
              href="#signup"
              className="btn btn-lg fw-semibold text-dark"
              style={{ backgroundColor: "#F97316", borderColor: "#F97316" }}
            >
              Create an account
            </a>
          </div>
        </div>
      </section>
    </>
  );
}