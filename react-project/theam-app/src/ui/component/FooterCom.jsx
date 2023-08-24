import React from "react";

export default function FooterCom() {
  return (
    <>
      <footer id="footer" class="overflow-hidden padding-large">
        <div class="container-fluid">
          <div class="row">
            <div class="row d-flex flex-wrap justify-content-between">
              <div class="col-lg-3 col-sm-6 pb-3 pe-4">
                <div class="footer-menu">
                  <img src="images/main-logo.png" alt="logo" class="pb-3" />
                  <p>
                    Mi facilisis facilisis orci vitae. Cum nisi morbi integer
                    tincidunt ornare ac praesent in. Dolor tempus arcu sit quis
                    nunc arcu facilisis quis eget nisi morbi integer.
                  </p>
                </div>
                <div class="copyright">
                  <p>
                    © Copyright 2023. Design by{" "}
                    <a href="https://templatesjungle.com/">TemplatesJungle</a>{" "}
                    Distributed by
                    <a href="https://themewagon.com">ThemeWagon</a>
                  </p>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6 pb-3">
                <div class="footer-menu text-uppercase">
                  <h5 class="widget-title pb-2">Quick Links</h5>
                  <ul class="menu-list list-unstyled text-uppercase">
                    <li class="menu-item pb-2">
                      <a href="#billboard">Home</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a href="#about-us">About</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a href="#company-services">Services</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a href="#latest-blog">Blogs</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6 pb-3">
                <div class="footer-menu text-uppercase">
                  <h5 class="widget-title pb-2">Social</h5>
                  <div class="social-links">
                    <ul class="list-unstyled">
                      <li class="pb-2">
                        <a href="#">Facebook</a>
                      </li>
                      <li class="pb-2">
                        <a href="#">Twitter</a>
                      </li>
                      <li class="pb-2">
                        <a href="#">Pinterest</a>
                      </li>
                      <li class="pb-2">
                        <a href="#">Instagram</a>
                      </li>
                      <li>
                        <a href="#">Youtube</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="footer-menu contact-item">
                  <h5 class="widget-title text-uppercase pb-2">Contact Us</h5>
                  <p>
                    <a href="">+ 12(0) 34 56 78 910</a>
                  </p>
                  <p>
                    <a href="mailto:">hello@templatesjungle.com</a>
                  </p>
                  <p>tea berry, marinette, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
