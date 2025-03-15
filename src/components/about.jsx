import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Dietello</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <p>
                Because we focus on <strong>practicality, accessibility, and personalization</strong>, our diet plans are designed to fit seamlessly into your life, using <strong>locally available, nutrient-rich ingredients</strong> alternatives to exotic foods, hard-to-find foods or overwhelming complexity.
                Every consultation uniquely suits your <strong>needs, goals, and circumstances</strong>. We consider:
              </p>
              <div className="list-style">
                <div>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                {/* 
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                */}
              </div>
              <p>
                At Dietello, we believe that health should never feel out of reach. That’s why we prioritize plans that are simple to follow, nourishing, and truly transformative.
              </p>
              <h3>Our Commitment to a Healthier Society</h3>
              <p>
                We envision a world where nutritional awareness becomes second nature and health-conscious choices lead to happier lives. Through our innovative approach and dedication to your well-being, Dietello is working to build a healthier, more vibrant community—one individual at a time.
              </p>
              <p>
                With Dietello, you’re not just following a diet but embracing a lifestyle change designed for real results and lasting impact. Let’s take the first step together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
