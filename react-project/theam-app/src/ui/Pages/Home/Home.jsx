import React from "react";
import HeroSection from "../../component/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* product */}
      <div className="product-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Crafted with excellent material.
              </h2>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
              <p>
                <a href="shop.html" className="btn">
                  Explore
                </a>
              </p>
            </div>
            {[1, 2, 3].map((e) => {
              return (
                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                  <a className="product-item" href="cart.html">
                    <img
                      src="images/product-1.png"
                      className="img-fluid product-thumbnail"
                    />
                    <h3 className="product-title">Nordic Chair</h3>
                    <strong className="product-price">$50.00</strong>

                    <span className="icon-cross">
                      <img src="images/cross.svg" className="img-fluid" />
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* why choose us */}
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
      {/* help section */}
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img src="images/img-grid-1.jpg" alt="Untree.co" />
                </div>
                <div className="grid grid-2">
                  <img src="images/img-grid-2.jpg" alt="Untree.co" />
                </div>
                <div className="grid grid-3">
                  <img src="images/img-grid-3.jpg" alt="Untree.co" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">
                We Help You Make Modern Interior Design
              </h2>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada
              </p>

              <ul className="list-unstyled custom-list my-4">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
              <p>
                <a herf="#" className="btn">
                  Explore
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* populer product  */}
      <div class="popular-product">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div class="product-item-sm d-flex">
                <div class="thumbnail">
                  <img
                    src="images/product-1.png"
                    alt="Image"
                    class="img-fluid"
                  />
                </div>
                <div class="pt-3">
                  <h3>Nordic Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div class="product-item-sm d-flex">
                <div class="thumbnail">
                  <img
                    src="images/product-2.png"
                    alt="Image"
                    class="img-fluid"
                  />
                </div>
                <div class="pt-3">
                  <h3>Kruzo Aero Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div class="product-item-sm d-flex">
                <div class="thumbnail">
                  <img
                    src="images/product-3.png"
                    alt="Image"
                    class="img-fluid"
                  />
                </div>
                <div class="pt-3">
                  <h3>Ergonomic Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blogs */}
      <div class="blog-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-6">
              <h2 class="section-title">Recent Blog</h2>
            </div>
            <div class="col-md-6 text-start text-md-end">
              <a href="#" class="more">
                View All Posts
              </a>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div class="post-entry">
                <a href="#" class="post-thumbnail">
                  <img src="images/post-1.jpg" alt="Image" class="img-fluid" />
                </a>
                <div class="post-content-entry">
                  <h3>
                    <a href="#">First Time Home Owner Ideas</a>
                  </h3>
                  <div class="meta">
                    <span>
                      by <a href="#">Kristin Watson</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 19, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div class="post-entry">
                <a href="#" class="post-thumbnail">
                  <img src="images/post-2.jpg" alt="Image" class="img-fluid" />
                </a>
                <div class="post-content-entry">
                  <h3>
                    <a href="#">How To Keep Your Furniture Clean</a>
                  </h3>
                  <div class="meta">
                    <span>
                      by <a href="#">Robert Fox</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 15, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div class="post-entry">
                <a href="#" class="post-thumbnail">
                  <img src="images/post-3.jpg" alt="Image" class="img-fluid" />
                </a>
                <div class="post-content-entry">
                  <h3>
                    <a href="#">Small Space Furniture Apartment Ideas</a>
                  </h3>
                  <div class="meta">
                    <span>
                      by <a href="#">Kristin Watson</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 12, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
