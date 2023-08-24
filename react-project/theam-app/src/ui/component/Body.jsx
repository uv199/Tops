import React from "react";

export default function Body() {
  return (
    <>
      <section id="billboard" class="overflow-hidden">
        <div class="swiper main-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12">
                    <div
                      class="banner-item"
                      style="background-image: url(images/banner-image1.jpg); background-repeat: no-repeat; background-position: right; height: 682px;"
                    >
                      <div class="banner-content padding-large">
                        <h1 class="display-1 text-uppercase text-dark pb-2">
                          wooden table set
                        </h1>
                        <p>
                          Aliquet donec ut arcu risus amet mattis diam gravida.
                          Ac vestibulum quis proin in aliquam et et auctor. Amet
                          urna est arcu euismod egestas morbi nunc lacus. Nec id
                          rutrum mauris commodo habitant amet quisque. Velit
                          ornare pellentesque facilisi in odio nibh.
                        </p>
                        <a
                          href="shop.html"
                          class="btn btn-medium btn-arrow position-relative mt-5"
                        >
                          <span class="text-uppercase">Shop Now</span>
                          <svg
                            class="arrow-right position-absolute"
                            width="18"
                            height="20"
                          >
                            <use xlink:href="#arrow-right"></use>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12">
                    <div
                      class="banner-item"
                      style="background-image: url(images/banner-image1.jpg); background-repeat: no-repeat; background-position: right; height: 682px;"
                    >
                      <div class="banner-content padding-large">
                        <h1 class="display-1 text-uppercase text-dark pb-2">
                          Comfortable Sofa Set
                        </h1>
                        <p>
                          Aliquet donec ut arcu risus amet mattis diam gravida.
                          Ac vestibulum quis proin in aliquam et et auctor. Amet
                          urna est arcu euismod egestas morbi nunc lacus. Nec id
                          rutrum mauris commodo habitant amet quisque. Velit
                          ornare pellentesque facilisi in odio nibh.
                        </p>
                        <a
                          href="shop.html"
                          class="btn btn-medium btn-arrow position-relative mt-5"
                        >
                          <span class="text-uppercase">Shop Now</span>
                          <svg
                            class="arrow-right position-absolute"
                            width="18"
                            height="20"
                          >
                            <use xlink:href="#arrow-right"></use>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination position-absolute"></div>
      </section>
    </>
  );
}
