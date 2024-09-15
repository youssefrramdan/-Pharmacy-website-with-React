import React from "react";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpg";
import img3 from"./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.webp";
import { Carousel } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <img src={img1} className="d-block w-100 slider-img" alt="Slide 1" />
          <Carousel.Caption>
            <h5>Wide Range of Products</h5>
            <p>
              Explore a variety of healthcare products tailored to your needs.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} className="d-block w-100 slider-img" alt="Slide 2" />
          <Carousel.Caption>
            <h5>Trusted Quality</h5>
            <p>
              All products are sourced from reputable manufacturers and
              suppliers.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} className="d-block w-100 slider-img" alt="Slide 3" />
          <Carousel.Caption>
            <h5>Fast Delivery</h5>
            <p>
              Get your medications delivered to your doorstep quickly and
              safely.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={img5}
                className="img-fluid rounded shadow"
                alt="Our Features"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 mb-4">Why Choose Us?</h2>
              <p className="lead">
                We offer personalized care with expert pharmacists available to
                assist you with your healthcare needs.
              </p>
              <p>
                Our platform is designed to make it easy for you to find the
                right products, with features like prescription management and
                automatic refills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2">
              <img
                src={img6}
                className="img-fluid rounded shadow"
                alt="Our Services"
              />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h2 className="display-5 mb-4 text-center">Our Services</h2>
              <p className="lead text-center">
                From over-the-counter medications to prescription drugs, we provide a wide range of services to meet your healthcare needs.
              </p>
              <p className="text-center">
                Our online consultation service allows you to speak with a licensed pharmacist for advice on medications and treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={img4}
                className="img-fluid rounded shadow"
                alt="About Us"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 mb-4">About Us</h2>
              <p className="lead">
                We are committed to providing the best healthcare products and
                services to our customers. Your health and well-being are our
                top priorities.
              </p>
              <p>
                Our team of experts is always ready to assist you with your
                healthcare needs, ensuring you have access to the best products
                and services available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
