import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">

        <h5 className="mb-3">Book My Venue</h5>

        <div className="mb-3">
          <a href="/" className="text-light text-decoration-none mx-2">
            Home
          </a>

          <a href="/venues" className="text-light text-decoration-none mx-2">
            Venues
          </a>

          <a href="/contact" className="text-light text-decoration-none mx-2">
            Contact
          </a>
        </div>

        <p className="mb-0">
          © 2026 Book My Venue. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
export default Footer;
