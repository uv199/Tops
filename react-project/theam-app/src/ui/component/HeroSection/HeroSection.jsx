import React from "react";

export default function HeroSection() {
  return (
    <>
      <div class="hero">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt">
                <h1>About Us</h1>
                <p class="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                <p>
                  <a href="" class="btn btn-secondary me-2">
                    Shop Now
                  </a>
                  <a href="#" class="btn btn-white-outline">
                    Explore
                  </a>
                </p>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="hero-img-wrap">
                <img src="images/couch.png" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
