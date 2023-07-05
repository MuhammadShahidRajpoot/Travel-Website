import React from "react";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <h2 className="lg-heading text-black about-heading ">About Me</h2>
          <p className="text-gray">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            quis deleniti, id laborum mollitia earum consectetur asperiores eum,
            sequi nulla dignissimos. Voluptas et fugiat ipsa maxime eligendi
            perspiciatis possimus veritatis distinctio vel repudiandae delectus,
            tenetur, placeat consectetur illum fuga assumenda.
          </p>
          <div className="about-wrapper">
            <div className="about-left">
              <ul>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
            </div>
            <div className="about-right">
              <ul>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
            </div>
          </div>
          <div className="counts">
            <div className="count-item count-item1">
              <span>2500</span>
              <p>Places</p>
            </div>
            <div className="count-item count-item2">
              <span>2500</span>
              <p>Places</p>
            </div>
            <div className="count-item count-item3">
              <span>2500</span>
              <p>Places</p>
            </div>
            <div className="count-item count-item4">
              <span>2500</span>
              <p>Places</p>
            </div>
          </div>
          <div className="banner">
            <div className="banner-left">
              <p className="banner-line">
                sit amet, consectetur adipisicing elit. Voluptatum!
              </p>
            </div>
            <div className="banner-right">
              <a href="contact.html" className="banner-link">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
