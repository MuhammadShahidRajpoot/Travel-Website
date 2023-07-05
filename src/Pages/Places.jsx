import React from "react";

const Places = () => {
  return (
    <>
      <section className="showcase" id="explore-places">
        <div className="container">
          <div className="row row1">
            <div className="img-box">
              <img src="./img/showcase-photo3.jpg" alt="showcase3" />
            </div>
            <div className="text-box">
              <h2 className="lg-heading">DEGANVY, U.K</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                officiis voluptates? Perspiciatis dignissimos cum ea a aut alias
                vitae quos facilis odit, architecto ratione voluptatem impedit
                nisi autem eum ipsa?
              </p>
              <a href="./about.html" className="btn btn-secondary text-red ">
                More
              </a>
            </div>
          </div>
          <div className="row row2">
            <div className="img-box">
              <img src="./img/showcase-photo1.jpg" alt="showcase1" />
            </div>
            <div className="text-box">
              <h2 className="lg-heading">DESERT, EGYPT</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                officiis voluptates? Perspiciatis dignissimos cum ea a aut alias
                vitae quos facilis odit, architecto ratione voluptatem impedit
                nisi autem eum ipsa?
              </p>
              <a href="./about.html" className="btn btn-secondary text-red ">
                More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <div className="box-wrapper">
            <div className="box box-1">
              <i className="fa-solid fa-route fa-2x text-red" />
              <h2 className="md-heading">Adventure</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                nemo itaque est, dicta dolorum laudantium reiciendis magni
                distinctio illo, sapiente eius dignissimos doloribus laborum
                pariatur in asperiores corporis accusantium. Sequi.
              </p>
            </div>
            <div className="box box-2">
              <i className="fa-solid fa-strikethrough fa-2x" />
              <h2 className="md-heading">Experience</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                nemo itaque est, dicta dolorum laudantium reiciendis magni
                distinctio illo, sapiente eius dignissimos doloribus laborum
                pariatur in asperiores corporis accusantium. Sequi.
              </p>
            </div>
            <div className="box box-3">
              <i className="fa-solid fa-user-check fa-2x text-red" />
              <h2 className="md-heading">less price</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                nemo itaque est, dicta dolorum laudantium reiciendis magni
                distinctio illo, sapiente eius dignissimos doloribus laborum
                pariatur in asperiores corporis accusantium. Sequi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Places;
