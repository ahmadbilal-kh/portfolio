import React from "react";

const Services = () => {
  return (
    <div>
      <div className="section-glow-end" data-aos="zoom-in"></div>
      <section className="services" id="services">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>App Development</h3>
            <p>
              Building smooth, scalable mobile and web apps with clean UI and
              efficient backend systems tailored to your goals.
            </p>
          </div>
          <div className="service-card">
            <h3>Software Development</h3>
            <p>
              Delivering custom software solutions, from standalone desktop apps
              to web-based platforms using modern tech stacks.
            </p>
          </div>
          <div className="service-card">
            <h3>Web Development</h3>
            <p>
              Building clean, high-performance websites with modern front-end
              frameworks and responsive designs for all devices.
            </p>
          </div>
          <div className="service-card">
            <h3>Ecommerce Store</h3>
            <p>
              Creating fully functional online stores with features like product
              listings, carts, secure checkout, and admin panels.
            </p>
          </div>
          <div className="service-card">
            <h3>Shopify Store</h3>
            <p>
              Designing and customizing Shopify stores with professional themes,
              plugin integration, and optimized user experience.
            </p>
          </div>
          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>
              Designing user interfaces that are sleek, modern, and easy to use,
              improving the overall experience of your product.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
