import React from "react";
import "./dashboard.css";
export default function Dashboard() {
  return (
    <div>
      <body>
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
          <div className="ui-theme-settings">
            <button
              type="button"
              id="TooltipDemo"
              className="btn-open-options btn btn-warning"
            >
              <i className="fa fa-cog fa-w-16 fa-spin fa-2x"></i>
            </button>
            <div className="theme-settings__inner">
              <div className="scrollbar-container">
                <div className="theme-settings__options-wrapper">
                  <h3 className="themeoptions-heading">Layout Options</h3>
                  <div className="p-3">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left mr-3">
                              <div
                                className="switch has-switch switch-container-className"
                                data-className="fixed-header"
                              >
                                <div className="switch-animate switch-on">
                                  <input
                                    type="checkbox"
                                    checked
                                    data-toggle="toggle"
                                    data-onstyle="success"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">Fixed Header</div>
                              <div className="widget-subheading">
                                Makes the header top fixed, always visible!
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left mr-3">
                              <div
                                className="switch has-switch switch-container-className"
                                data-className="fixed-sidebar"
                              >
                                <div className="switch-animate switch-on">
                                  <input
                                    type="checkbox"
                                    checked
                                    data-toggle="toggle"
                                    data-onstyle="success"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">
                                Fixed Sidebar
                              </div>
                              <div className="widget-subheading">
                                Makes the sidebar left fixed, always visible!
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left mr-3">
                              <div
                                className="switch has-switch switch-container-className"
                                data-className="fixed-footer"
                              >
                                <div className="switch-animate switch-off">
                                  <input
                                    type="checkbox"
                                    data-toggle="toggle"
                                    data-onstyle="success"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="widget-content-left">
                              <div className="widget-heading">Fixed Footer</div>
                              <div className="widget-subheading">
                                Makes the app footer bottom fixed, always
                                visible!
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <h3 className="themeoptions-heading">
                    <div>Header Options</div>
                    <button
                      type="button"
                      className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-header-cs-className"
                      data-className=""
                    >
                      Restore Default
                    </button>
                  </h3>
                  <div className="p-3">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <h5 className="pb-2">Choose Color Scheme</h5>
                        <div className="theme-settings-swatches">
                          <div
                            className="swatch-holder bg-primary switch-header-cs-className"
                            data-className="bg-primary header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-secondary switch-header-cs-className"
                            data-className="bg-secondary header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-success switch-header-cs-className"
                            data-className="bg-success header-text-dark"
                          ></div>
                          <div
                            className="swatch-holder bg-info switch-header-cs-className"
                            data-className="bg-info header-text-dark"
                          ></div>
                          <div
                            className="swatch-holder bg-warning switch-header-cs-className"
                            data-className="bg-warning header-text-dark"
                          ></div>
                          <div
                            className="swatch-holder bg-danger switch-header-cs-className"
                            data-className="bg-danger header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-light switch-header-cs-className"
                            data-className="bg-light header-text-dark"
                          ></div>
                          <div
                            className="swatch-holder bg-dark switch-header-cs-className"
                            data-className="bg-dark header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-focus switch-header-cs-className"
                            data-className="bg-focus header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-alternate switch-header-cs-className"
                            data-className="bg-alternate header-text-light"
                          ></div>
                          <div className="divider"></div>
                          <div
                            className="swatch-holder bg-vicious-stance switch-header-cs-className"
                            data-className="bg-vicious-stance header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-midnight-bloom switch-header-cs-className"
                            data-className="bg-midnight-bloom header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-night-sky switch-header-cs-className"
                            data-className="bg-night-sky header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-slick-carbon switch-header-cs-className"
                            data-className="bg-slick-carbon header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-asteroid switch-header-cs-className"
                            data-className="bg-asteroid header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-royal switch-header-cs-className"
                            data-className="bg-royal header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-warm-flame switch-header-cs-className"
                            data-className="bg-warm-flame header-text-dark"
                          ></div>
                          <div
                            className="swatch-holder bg-night-fade switch-header-cs-className"
                            data-className="bg-night-fade header-text-dark"
                          ></div>
                          <div
                            className="swatch-holder bg-sunny-morning switch-header-cs-className"
                            data-className="bg-sunny-morning header-text-dark"
                          ></div>
                          <div
                            className="swatch-holder bg-tempting-azure switch-header-cs-className"
                            data-className="bg-tempting-azure header-text-dark"
                          ></div>
                          <div
                            className="swatch-holder bg-amy-crisp switch-header-cs-className"
                            data-className="bg-amy-crisp header-text-dark"
                          ></div>
                          <div
                            className="swatch-holder bg-heavy-rain switch-header-cs-className"
                            data-className="bg-heavy-rain header-text-dark"
                          ></div>
                          <div
                            className="swatch-holder bg-mean-fruit switch-header-cs-className"
                            data-className="bg-mean-fruit header-text-dark"
                          ></div>
                          <div
                            className="swatch-holder bg-malibu-beach switch-header-cs-className"
                            data-className="bg-malibu-beach header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-deep-blue switch-header-cs-className"
                            data-className="bg-deep-blue header-text-dark"
                          ></div>
                          <div
                            className="swatch-holder bg-ripe-malin switch-header-cs-className"
                            data-className="bg-ripe-malin header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-arielle-smile switch-header-cs-className"
                            data-className="bg-arielle-smile header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-plum-plate switch-header-cs-className"
                            data-className="bg-plum-plate header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-happy-fisher switch-header-cs-className"
                            data-className="bg-happy-fisher header-text-dark"
                          ></div>
                          <div
                            className="swatch-holder bg-happy-itmeo switch-header-cs-className"
                            data-className="bg-happy-itmeo header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-mixed-hopes switch-header-cs-className"
                            data-className="bg-mixed-hopes header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-strong-bliss switch-header-cs-className"
                            data-className="bg-strong-bliss header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-grow-early switch-header-cs-className"
                            data-className="bg-grow-early header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-love-kiss switch-header-cs-className"
                            data-className="bg-love-kiss header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-premium-dark switch-header-cs-className"
                            data-className="bg-premium-dark header-text-light"
                          ></div>
                          <div
                            className="swatch-holder bg-happy-green switch-header-cs-className"
                            data-className="bg-happy-green header-text-light"
                          ></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <h3 className="themeoptions-heading">
                    <div>Sidebar Options</div>
                    <button
                      type="button"
                      className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-sidebar-cs-className"
                      data-className=""
                    >
                      Restore Default
                    </button>
                  </h3>

                  <h3 className="themeoptions-heading">
                    <div>Main Content Options</div>
                    <button
                      type="button"
                      className="btn-pill btn-shadow btn-wide ml-auto active btn btn-focus btn-sm"
                    >
                      Restore Default
                    </button>
                  </h3>
                  <div className="p-3">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <h5 className="pb-2">Page Section Tabs</h5>
                        <div className="theme-settings-swatches">
                          <div role="group" className="mt-2 btn-group">
                            <button
                              type="button"
                              className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-className"
                              data-className="body-tabs-line"
                            >
                              Line
                            </button>
                            <button
                              type="button"
                              className="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-className"
                              data-className="body-tabs-shadow"
                            >
                              Shadow
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="app-main__outer">
              <div className="app-main__inner">
                <div className="app-page-title">
                  <div className="page-title-wrapper">
                    <div className="page-title-heading">
                      <div className="page-title-icon">
                        <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
                      </div>
                      <div>
                        Analytics Dashboard
                        <div className="page-title-subheading">
                          This is an example dashboard created using build-in
                          elements and components.
                        </div>
                      </div>
                    </div>
                    <div className="page-title-actions">
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title="Example Tooltip"
                        data-placement="bottom"
                        className="btn-shadow mr-3 btn btn-dark"
                      >
                        <i className="fa fa-star"></i>
                      </button>
                      <div className="d-inline-block dropdown">
                        <button
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          className="btn-shadow dropdown-toggle btn btn-info"
                        >
                          <span className="btn-icon-wrapper pr-2 opacity-7">
                            <i className="fa fa-business-time fa-w-20"></i>
                          </span>
                          Buttons
                        </button>
                        <div
                          tabindex="-1"
                          role="menu"
                          aria-hidden="true"
                          className="dropdown-menu dropdown-menu-right"
                        >
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <a
                                href="javascript:void(0);"
                                className="nav-link"
                              >
                                <i className="nav-link-icon lnr-inbox"></i>
                                <span>Inbox</span>
                                <div className="ml-auto badge badge-pill badge-secondary">
                                  86
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="javascript:void(0);"
                                className="nav-link"
                              >
                                <i className="nav-link-icon lnr-book"></i>
                                <span>Book</span>
                                <div className="ml-auto badge badge-pill badge-danger">
                                  5
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="javascript:void(0);"
                                className="nav-link"
                              >
                                <i className="nav-link-icon lnr-picture"></i>
                                <span>Picture</span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                disabled
                                href="javascript:void(0);"
                                className="nav-link disabled"
                              >
                                <i className="nav-link-icon lnr-file-empty"></i>
                                <span>File Disabled</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-midnight-bloom">
                      <div className="widget-content-wrapper text-white">
                        <div className="widget-content-left">
                          <div className="widget-heading">Total Orders</div>
                          <div className="widget-subheading">
                            Last year expenses
                          </div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-white">
                            <span>1896</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-arielle-smile">
                      <div className="widget-content-wrapper text-white">
                        <div className="widget-content-left">
                          <div className="widget-heading">Clients</div>
                          <div className="widget-subheading">
                            Total Clients Profit
                          </div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-white">
                            <span>$ 568</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-grow-early">
                      <div className="widget-content-wrapper text-white">
                        <div className="widget-content-left">
                          <div className="widget-heading">Followers</div>
                          <div className="widget-subheading">
                            People Interested
                          </div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-white">
                            <span>46%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-premium-dark">
                      <div className="widget-content-wrapper text-white">
                        <div className="widget-content-left">
                          <div className="widget-heading">Products Sold</div>
                          <div className="widget-subheading">
                            Revenue streams
                          </div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-warning">
                            <span>$14M</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left">
                            <div className="widget-heading">Total Orders</div>
                            <div className="widget-subheading">
                              Last year expenses
                            </div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-success">
                              1896
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left">
                            <div className="widget-heading">Products Sold</div>
                            <div className="widget-subheading">
                              Revenue streams
                            </div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-warning">
                              $3M
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left">
                            <div className="widget-heading">Followers</div>
                            <div className="widget-subheading">
                              People Interested
                            </div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-danger">
                              45,9%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content">
                      <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                          <div className="widget-content-left">
                            <div className="widget-heading">Income</div>
                            <div className="widget-subheading">
                              Expected totals
                            </div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-focus">
                              $147
                            </div>
                          </div>
                        </div>
                        <div className="widget-progress-wrapper">
                          <div className="progress-bar-sm progress-bar-animated-alt progress">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              aria-valuenow="54"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "54%" }}
                            ></div>
                          </div>
                          <div className="progress-sub-label">
                            <div className="sub-label-left">Expenses</div>
                            <div className="sub-label-right">100%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
          </div>
        </div>
        <script
          type="text/javascript"
          src="https://demo.dashboardpack.com/architectui-html-free/assets/scripts/main.js"
        ></script>
      </body>
    </div>
  );
}
