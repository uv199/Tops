import React from "react";

export default function NavBarCom() {
  return (
    <>
      <header id="header" class="site-header text-black">
        <nav id="header-nav" class="navbar navbar-expand-lg px-3 mb-3">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
              <img src="images/main-logo.png" class="logo" />
            </a>
            <button
              class="navbar-toggler d-flex d-lg-none order-3 p-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#bdNavbar"
              aria-controls="bdNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg class="navbar-icon" width="50" height="50">
                <use xlink:href="#navbar-icon"></use>
              </svg>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="bdNavbar"
              aria-labelledby="bdNavbarOffcanvasLabel"
            >
              <div class="offcanvas-header px-4 pb-0">
                <a class="navbar-brand" href="index.html">
                  <img src="images/main-logo.png" class="logo" />
                </a>
                <button
                  type="button"
                  class="btn-close btn-close-black"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  data-bs-target="#bdNavbar"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul
                  id="navbar"
                  class="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3"
                >
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link me-4 active dropdown-toggle"
                      href="#billboard"
                      id="dropdownPages"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                    <ul
                      class="dropdown-menu list-unstyled"
                      aria-labelledby="dropdownPages"
                    >
                      <li>
                        <a href="index.html" class="dropdown-item item-anchor">
                          Homepage 1
                        </a>
                      </li>
                      <li>
                        <a href="home2.html" class="dropdown-item item-anchor">
                          Homepage V2{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link me-4" href="#about-us">
                      About Us
                    </a>
                  </li>
                  <li class="nav-item dropdown me-4">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="dropdownPages"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <ul
                      class="dropdown-menu list-unstyled"
                      aria-labelledby="dropdownPages"
                    >
                      <li>
                        <a
                          href="shop-sidebar.html"
                          class="dropdown-item item-anchor"
                        >
                          Shop Sidebar{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="shop-four-column.html"
                          class="dropdown-item item-anchor"
                        >
                          Shop Grid{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown me-4">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="dropdownPages"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul
                      class="dropdown-menu list-unstyled"
                      aria-labelledby="dropdownPages"
                    >
                      <li>
                        <a
                          href="blog-classic.html"
                          class="dropdown-item item-anchor"
                        >
                          Blog Classic{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="blog-grid-four-column.html"
                          class="dropdown-item item-anchor"
                        >
                          Blog 4 Column{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="blog-with-sidebar.html"
                          class="dropdown-item item-anchor"
                        >
                          Blog With Sidebar{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="dropdownPages"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul
                      class="dropdown-menu list-unstyled"
                      aria-labelledby="dropdownPages"
                    >
                      <li>
                        <a
                          href="about-us.html"
                          class="dropdown-item item-anchor"
                        >
                          About{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="cart.html" class="dropdown-item item-anchor">
                          Cart{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="checkout.html"
                          class="dropdown-item item-anchor"
                        >
                          Checkout{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="contact.html"
                          class="dropdown-item item-anchor"
                        >
                          Contact{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="error-page.html"
                          class="dropdown-item item-anchor"
                        >
                          Error Page{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="faqs.html" class="dropdown-item item-anchor">
                          FAQs{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="my-account.html"
                          class="dropdown-item item-anchor"
                        >
                          My Account{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="order-tracking.html"
                          class="dropdown-item item-anchor"
                        >
                          Order Tracking{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="wishlist.html"
                          class="dropdown-item item-anchor"
                        >
                          Wishlist{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="single-post.html"
                          class="dropdown-item item-anchor"
                        >
                          Single Post{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="single-product.html"
                          class="dropdown-item item-anchor"
                        >
                          Single Product{" "}
                          <span class="badge bg-secondary text-dark ms-2">
                            PRO
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <div class="user-items ps-5">
                      <ul class="d-flex justify-content-end list-unstyled">
                        <li
                          class="search-item pe-3"
                          data-bs-toggle="collapse"
                          data-bs-target="#search-box"
                          aria-controls="search-box"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <svg class="search" width="18" height="18">
                            <use xlink:href="#search"></use>
                          </svg>
                        </li>
                        <li class="pe-3">
                          <a href="#">
                            <svg class="user" width="18" height="18">
                              <use xlink:href="#user"></use>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="cart.html">
                            <svg class="cart" width="18" height="18">
                              <use xlink:href="#cart"></use>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
