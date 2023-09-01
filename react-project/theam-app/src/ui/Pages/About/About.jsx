import React from "react";
import HeroSection from "../../component/HeroSection/HeroSection";

export default function About() {
  return (
    <>
      <HeroSection />
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>

              <div className="row my-5">
                {[1, 2, 3, 4].map((e) => {
                  return (
                    <div className="col-6 col-md-6">
                      <div className="feature">
                        <div className="icon">
                          <img
                            src="images/truck.svg"
                            alt="Image"
                            className="imf-fluid"
                          />
                        </div>
                        <h3>Fast &amp; Free Shipping</h3>
                        <p>
                          Donec vitae odio quis nisl dapibus malesuada. Nullam
                          ac aliquet velit. Aliquam vulputate.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap">
                <img
                  src="images/why-choose-us-img.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our team  */}
      <div class="untree_co-section mb-5">
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-5 mx-auto text-center">
              <h2 class="section-title">Our Team</h2>
            </div>
          </div>

          <div class="row">
            {[1, 2, 3, 4].map((e) => {
              return (
                <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                  <img src="images/person_1.jpg" class="img-fluid mb-5" />
                  <h3 clas>
                    <a href="#">
                      <span class="">Lawson</span> Arnold
                    </a>
                  </h3>
                  <span class="d-block position mb-4">CEO, Founder, Atty.</span>
                  <p>
                    Separated they live in. Separated they live in
                    Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.
                  </p>
                  <p class="mb-0">
                    <a href="#" class="more dark">
                      Learn More <span class="icon-arrow_forward"></span>
                    </a>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
