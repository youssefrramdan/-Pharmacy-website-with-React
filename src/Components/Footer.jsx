import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#3e4551" }}
    >
      <div className="container p-4 pb-0">
        <section>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">About Our Pharmacy</h5>
              <p>
                At My Pharmacy, we are dedicated to providing you with
                high-quality medications and exceptional service. Our
                knowledgeable staff is here to assist with your healthcare needs
                and offer personalized advice. Whether you need prescriptions,
                over-the-counter medications, or health consultations, we've got
                you covered.
              </p>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Quick Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#home" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Customer Service</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#faq" className="text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#returns" className="text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#shipping" className="text-white">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="mb-4" />

        <section>
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">
              Sign up for our newsletter for the latest updates and offers!
            </span>
            <button type="button" className="btn btn-outline-light btn-rounded">
              Sign up!
            </button>
          </p>
        </section>

        <hr className="mb-4" />

        <section className="mb-4 text-center">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FaFacebookF />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FaTwitter />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FaGoogle />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FaInstagram />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FaGithub />
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 My Pharmacy. All rights reserved.
      </div>
    </footer>
  );
}
