import React, { useEffect } from "react";
import { auth } from "../../lib/firebase";

function Admin() {
  useEffect(() => {
    console.log(auth.currentUser);
  }, []);
  return (
    <div>
      <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-md-none">
        <a className="navbar-brand mr-lg-5" href="../../index.html">
          <img
            className="navbar-brand-dark"
            src="../../assets/img/brand/light.svg"
            alt="Volt logo"
          />{" "}
          <img
            className="navbar-brand-light"
            src="../../assets/img/brand/dark.svg"
            alt="Volt logo"
          />
        </a>
        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler d-md-none collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <nav
        id="sidebarMenu"
        className="sidebar d-md-block bg-primary text-white collapse"
        data-simplebar
      >
        <div className="sidebar-inner px-4 pt-3">
          <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
            <div className="d-flex align-items-center">
              <div className="user-avatar lg-avatar mr-4">
                <img
                  src="../../assets/img/team/profile-picture-3.jpg"
                  className="card-img-top rounded-circle border-white"
                  alt="Bonnie Green"
                />
              </div>
              <div className="d-block">
                <h2 className="h6">Hi, Jane</h2>
                <a
                  href="../../pages/examples/sign-in.html"
                  className="btn btn-secondary text-dark btn-xs"
                >
                  <span className="mr-2">
                    <span className="fas fa-sign-out-alt"></span>
                  </span>
                  Sign Out
                </a>
              </div>
            </div>
            <div className="collapse-close d-md-none">
              <a
                href="#sidebarMenu"
                className="fas fa-times"
                data-toggle="collapse"
                data-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="true"
                aria-label="Toggle navigation"
              ></a>
            </div>
          </div>
          <ul className="nav flex-column">
            <li className="nav-item  active ">
              <a
                href="../../pages/dashboard/dashboard.html"
                className="nav-link"
              >
                <span className="sidebar-icon">
                  <span className="fas fa-chart-pie"></span>
                </span>
                <span>Overview</span>
              </a>
            </li>
            <li className="nav-item ">
              <a href="../../pages/transactions.html" className="nav-link">
                <span className="sidebar-icon">
                  <span className="fas fa-hand-holding-usd"></span>
                </span>
                <span>Transactions</span>
              </a>
            </li>
            <li className="nav-item ">
              <a href="../../pages/settings.html" className="nav-link">
                <span className="sidebar-icon">
                  <span className="fas fa-cog"></span>
                </span>
                <span>Settings</span>
              </a>
            </li>
            <li className="nav-item">
              <span
                className="nav-link  collapsed  d-flex justify-content-between align-items-center"
                data-toggle="collapse"
                data-target="#submenu-app"
              >
                <span>
                  <span className="sidebar-icon">
                    <span className="fas fa-table"></span>
                  </span>
                  Tables
                </span>
                <span className="link-arrow">
                  <span className="fas fa-chevron-right"></span>
                </span>
              </span>
              <div
                className="multi-level collapse "
                role="list"
                id="submenu-app"
                aria-expanded="false"
              >
                <ul className="flex-column nav">
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="../../pages/tables/bootstrap-tables.html"
                    >
                      <span>Bootstrap Tables</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <span
                className="nav-link  collapsed  d-flex justify-content-between align-items-center"
                data-toggle="collapse"
                data-target="#submenu-pages"
              >
                <span>
                  <span className="sidebar-icon">
                    <span className="far fa-file-alt"></span>
                  </span>
                  Page examples
                </span>
                <span className="link-arrow">
                  <span className="fas fa-chevron-right"></span>
                </span>
              </span>
              <div
                className="multi-level collapse "
                role="list"
                id="submenu-pages"
                aria-expanded="false"
              >
                <ul className="flex-column nav">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../../pages/examples/sign-in.html"
                    >
                      <span>Sign In</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../../pages/examples/sign-up.html"
                    >
                      <span>Sign Up</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../../pages/examples/forgot-password.html"
                    >
                      <span>Forgot password</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../../pages/examples/reset-password.html"
                    >
                      <span>Reset password</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../../pages/examples/lock.html"
                    >
                      <span>Lock</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../../pages/examples/404.html"
                    >
                      <span>404 Not Found</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../../pages/examples/500.html"
                    >
                      <span>500 Server Error</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <span
                className="nav-link  collapsed  d-flex justify-content-between align-items-center"
                data-toggle="collapse"
                data-target="#submenu-components"
              >
                <span>
                  <span className="sidebar-icon">
                    <span className="fas fa-box-open"></span>
                  </span>
                  Components
                </span>
                <span className="link-arrow">
                  <span className="fas fa-chevron-right"></span>
                </span>
              </span>
              <div
                className="multi-level collapse "
                role="list"
                id="submenu-components"
                aria-expanded="false"
              >
                <ul className="flex-column nav">
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="../../pages/components/buttons.html"
                    >
                      <span>Buttons</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="../../pages/components/notifications.html"
                    >
                      <span>Notifications</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="../../pages/components/forms.html"
                    >
                      <span>Forms</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="../../pages/components/modals.html"
                    >
                      <span>Modals</span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="../../pages/components/typography.html"
                    >
                      <span>Typography</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              role="separator"
              className="dropdown-divider mt-4 mb-3 border-black"
            ></li>
            <li className="nav-item">
              <a
                href="../../index.html"
                className="nav-link d-flex align-items-center"
              >
                <span className="sidebar-icon">
                  <img
                    src="../../assets/img/brand/light.svg"
                    height="20"
                    width="20"
                    alt="Volt Logo"
                  />
                </span>
                <span className="mt-1">Volt Overview</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/getting-started/quick-start/"
                target="_blank"
                className="nav-link d-flex align-items-center"
              >
                <span className="sidebar-icon">
                  <span className="fas fa-book"></span>
                </span>
                <span>Quick Start</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://themesberg.com"
                target="_blank"
                className="nav-link d-flex align-items-center"
              >
                <span className="sidebar-icon">
                  <img
                    src="../../assets/img/themesberg.svg"
                    height="20"
                    width="20"
                    alt="Themesberg Logo"
                  />
                </span>
                <span>Themesberg</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="../../pages/upgrade-to-pro.html"
                className="btn btn-secondary d-flex align-items-center justify-content-center btn-upgrade-pro"
              >
                <span className="sidebar-icon">
                  <span className="fas fa-rocket mr-2"></span>
                </span>
                <span>Upgrade to Pro</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="content">
        <nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark pl-0 pr-2 pb-0">
          <div className="container-fluid px-0">
            <div
              className="d-flex justify-content-between w-100"
              id="navbarSupportedContent"
            >
              <div className="d-flex">
                <form
                  className="navbar-search form-inline"
                  id="navbar-search-main"
                >
                  <div className="input-group input-group-merge search-bar">
                    <span className="input-group-text" id="topbar-addon">
                      <span className="fas fa-search"></span>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="topbarInputIconLeft"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="topbar-addon"
                    />
                  </div>
                </form>
              </div>

              <ul className="navbar-nav align-items-center">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link text-dark mr-lg-3 icon-notifications"
                    data-unread-notifications="true"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-bell bell-shake"></span>
                      <span className="icon-badge rounded-circle unread-notifications"></span>
                    </span>
                  </a>
                  <div className="dropdown-menu dashboard-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                    <div className="list-group list-group-flush">
                      <a
                        href="#"
                        className="text-center text-primary font-weight-bold border-bottom border-light py-3"
                      >
                        Notifications
                      </a>
                      <a
                        href="../../pages/calendar.html"
                        className="list-group-item list-group-item-action border-bottom border-light"
                      >
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <img
                              alt="Image placeholder"
                              src="../../assets/img/team/profile-picture-1.jpg"
                              className="user-avatar lg-avatar rounded-circle"
                            />
                          </div>
                          <div className="col pl-0 ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="h6 mb-0 text-small">
                                  Jose Leos
                                </h4>
                              </div>
                              <div className="text-right">
                                <small className="text-danger">
                                  a few moments ago
                                </small>
                              </div>
                            </div>
                            <p className="font-small mt-1 mb-0">
                              Added you to an event "Project stand-up" tomorrow
                              at 12:30 AM.
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="../../pages/tasks.html"
                        className="list-group-item list-group-item-action border-bottom border-light"
                      >
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <img
                              alt="Image placeholder"
                              src="../../assets/img/team/profile-picture-2.jpg"
                              className="user-avatar lg-avatar rounded-circle"
                            />
                          </div>
                          <div className="col pl-0 ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="h6 mb-0 text-small">
                                  Neil Sims
                                </h4>
                              </div>
                              <div className="text-right">
                                <small className="text-danger">2 hrs ago</small>
                              </div>
                            </div>
                            <p className="font-small mt-1 mb-0">
                              You've been assigned a task for "Awesome new
                              project".
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="../../pages/tasks.html"
                        className="list-group-item list-group-item-action border-bottom border-light"
                      >
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <img
                              alt="Image placeholder"
                              src="../../assets/img/team/profile-picture-3.jpg"
                              className="user-avatar lg-avatar rounded-circle"
                            />
                          </div>
                          <div className="col pl-0 ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="h6 mb-0 text-small">
                                  Roberta Casas
                                </h4>
                              </div>
                              <div className="text-right">
                                <small>5 hrs ago</small>
                              </div>
                            </div>
                            <p className="font-small mt-1 mb-0">
                              Tagged you in a document called "First quarter
                              financial plans",
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="../../pages/single-message.html"
                        className="list-group-item list-group-item-action border-bottom border-light"
                      >
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <img
                              alt="Image placeholder"
                              src="../../assets/img/team/profile-picture-4.jpg"
                              className="user-avatar lg-avatar rounded-circle"
                            />
                          </div>
                          <div className="col pl-0 ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="h6 mb-0 text-small">
                                  Joseph Garth
                                </h4>
                              </div>
                              <div className="text-right">
                                <small>1 d ago</small>
                              </div>
                            </div>
                            <p className="font-small mt-1 mb-0">
                              New message: "Hey, what's up? All set for the
                              presentation?"
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="../../pages/single-message.html"
                        className="list-group-item list-group-item-action border-bottom border-light"
                      >
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <img
                              alt="Image placeholder"
                              src="../../assets/img/team/profile-picture-5.jpg"
                              className="user-avatar lg-avatar rounded-circle"
                            />
                          </div>
                          <div className="col pl-0 ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="h6 mb-0 text-small">
                                  Bonnie Green
                                </h4>
                              </div>
                              <div className="text-right">
                                <small>2 hrs ago</small>
                              </div>
                            </div>
                            <p className="font-small mt-1 mb-0">
                              New message: "We need to improve the UI/UX for the
                              landing page."
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="dropdown-item text-center text-primary font-weight-bold py-3"
                      >
                        View all
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link pt-1 px-0"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="media d-flex align-items-center">
                      <img
                        className="user-avatar md-avatar rounded-circle"
                        alt="Image placeholder"
                        src="../../assets/img/team/profile-picture-3.jpg"
                      />
                      <div className="media-body ml-2 text-dark align-items-center d-none d-lg-block">
                        <span className="mb-0 font-small font-weight-bold">
                          Bonnie Green
                        </span>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu dashboard-dropdown dropdown-menu-right mt-2">
                    <a className="dropdown-item font-weight-bold" href="#">
                      <span className="far fa-user-circle"></span>My Profile
                    </a>
                    <a className="dropdown-item font-weight-bold" href="#">
                      <span className="fas fa-cog"></span>Settings
                    </a>
                    <a className="dropdown-item font-weight-bold" href="#">
                      <span className="fas fa-envelope-open-text"></span>
                      Messages
                    </a>
                    <a className="dropdown-item font-weight-bold" href="#">
                      <span className="fas fa-user-shield"></span>Support
                    </a>
                    <div role="separator" className="dropdown-divider"></div>
                    <a className="dropdown-item font-weight-bold" href="#">
                      <span className="fas fa-sign-out-alt text-danger"></span>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <div className="btn-toolbar dropdown">
            <button
              className="btn btn-primary btn-sm mr-2 dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="fas fa-plus mr-2"></span>New Task
            </button>
            <div className="dropdown-menu dashboard-dropdown dropdown-menu-left mt-2">
              <a className="dropdown-item font-weight-bold" href="#">
                <span className="fas fa-tasks"></span>New Task
              </a>
              <a className="dropdown-item font-weight-bold" href="#">
                <span className="fas fa-cloud-upload-alt"></span>Upload Files
              </a>
              <a className="dropdown-item font-weight-bold" href="#">
                <span className="fas fa-user-shield"></span>Preview Security
              </a>
              <div role="separator" className="dropdown-divider"></div>
              <a className="dropdown-item font-weight-bold" href="#">
                <span className="fas fa-rocket text-danger"></span>Upgrade to
                Pro
              </a>
            </div>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-primary">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-primary">
              Export
            </button>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-12 mb-4">
            <div className="card bg-yellow-alt shadow-sm">
              <div className="card-header d-flex flex-row align-items-center flex-0">
                <div className="d-block">
                  <div className="h5 font-weight-normal mb-2">Sales Value</div>
                  <h2 className="h3">$10,567</h2>
                  <div className="small mt-2">
                    <span className="font-weight-bold mr-2">Yesterday</span>
                    <span className="fas fa-angle-up text-success"></span>
                    <span className="text-success font-weight-bold">
                      10.57%
                    </span>
                  </div>
                </div>
                <div className="d-flex ml-auto">
                  <a
                    href="#"
                    className="btn btn-secondary text-dark btn-sm mr-2"
                  >
                    Month
                  </a>
                  <a href="#" className="btn btn-primary btn-sm mr-3">
                    Week
                  </a>
                </div>
              </div>
              <div className="card-body p-2">
                <div className="ct-chart-sales-value ct-double-octave ct-series-g"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4 mb-4">
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <div className="row d-block d-xl-flex align-items-center">
                  <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                    <div className="icon icon-shape icon-md icon-shape-blue rounded mr-4 mr-sm-0">
                      <span className="fas fa-chart-line"></span>
                    </div>
                    <div className="d-sm-none">
                      <h2 className="h5">Customers</h2>
                      <h3 className="mb-1">345,678</h3>
                    </div>
                  </div>
                  <div className="col-12 col-xl-7 px-xl-0">
                    <div className="d-none d-sm-block">
                      <h2 className="h5">Customers</h2>
                      <h3 className="mb-1">345k</h3>
                    </div>
                    <small>
                      Feb 1 - Apr 1,{" "}
                      <span className="icon icon-small">
                        <span className="fas fa-globe-europe"></span>
                      </span>{" "}
                      WorldWide
                    </small>
                    <div className="small mt-2">
                      <span className="fas fa-angle-up text-success"></span>
                      <span className="text-success font-weight-bold">
                        18.2%
                      </span>{" "}
                      Since last month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4 mb-4">
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <div className="row d-block d-xl-flex align-items-center">
                  <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                    <div className="icon icon-shape icon-md icon-shape-secondary rounded mr-4">
                      <span className="fas fa-cash-register"></span>
                    </div>
                    <div className="d-sm-none">
                      <h2 className="h5">Revenue</h2>
                      <h3 className="mb-1">$43,594</h3>
                    </div>
                  </div>
                  <div className="col-12 col-xl-7 px-xl-0">
                    <div className="d-none d-sm-block">
                      <h2 className="h5">Revenue</h2>
                      <h3 className="mb-1">$43,594</h3>
                    </div>
                    <small>
                      Feb 1 - Apr 1,{" "}
                      <span className="icon icon-small">
                        <span className="fas fa-globe-europe"></span>
                      </span>{" "}
                      Worldwide
                    </small>
                    <div className="small mt-2">
                      <span className="fas fa-angle-up text-success"></span>
                      <span className="text-success font-weight-bold">
                        28.2%
                      </span>{" "}
                      Since last month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4 mb-4">
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <div className="row d-block d-xl-flex align-items-center">
                  <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                    <div className="ct-chart-traffic-share ct-golden-section ct-series-a"></div>
                  </div>
                  <div className="col-12 col-xl-7 px-xl-0">
                    <h2 className="h5 mb-3">Traffic Share</h2>
                    <h6 className="font-weight-normal text-gray">
                      <span className="icon w-20 icon-xs icon-secondary mr-1">
                        <span className="fas fa-desktop"></span>
                      </span>{" "}
                      Desktop{" "}
                      <a href="#" className="h6">
                        60%
                      </a>
                    </h6>
                    <h6 className="font-weight-normal text-gray">
                      <span className="icon w-20 icon-xs icon-primary mr-1">
                        <span className="fas fa-mobile-alt"></span>
                      </span>{" "}
                      Mobile Web{" "}
                      <a href="#" className="h6">
                        30%
                      </a>
                    </h6>
                    <h6 className="font-weight-normal text-gray">
                      <span className="icon w-20 icon-xs icon-tertiary mr-1">
                        <span className="fas fa-tablet-alt"></span>
                      </span>{" "}
                      Tablet Web{" "}
                      <a href="#" className="h6">
                        10%
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-xl-8 mb-4">
            <div className="row">
              <div className="col-12 mb-4">
                <div className="card border-light shadow-sm">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h2 className="h5">Page visits</h2>
                      </div>
                      <div className="col text-right">
                        <a href="#" className="btn btn-sm btn-secondary">
                          See all
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table align-items-center table-flush">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Page name</th>
                          <th scope="col">Page Views</th>
                          <th scope="col">Page Value</th>
                          <th scope="col">Bounce rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">/demo/admin/index.html</th>
                          <td>3,225</td>
                          <td>$20</td>
                          <td>
                            <span className="fas fa-arrow-up text-danger mr-3"></span>{" "}
                            42,55%
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">/demo/admin/forms.html</th>
                          <td>2,987</td>
                          <td>0</td>
                          <td>
                            <span className="fas fa-arrow-down text-success mr-3"></span>{" "}
                            43,52%
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">/demo/admin/util.html</th>
                          <td>2,844</td>
                          <td>294</td>
                          <td>
                            <span className="fas fa-arrow-down text-success mr-3"></span>{" "}
                            32,35%
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">/demo/admin/validation.html</th>
                          <td>2,050</td>
                          <td>$147</td>
                          <td>
                            <span className="fas fa-arrow-up text-danger mr-3"></span>{" "}
                            50,87%
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">/demo/admin/modals.html</th>
                          <td>1,483</td>
                          <td>$19</td>
                          <td>
                            <span className="fas fa-arrow-down text-success mr-3"></span>{" "}
                            32,24%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4">
                <div className="card border-light shadow-sm">
                  <div className="card-header border-bottom border-light d-flex justify-content-between">
                    <h2 className="h5 mb-0">Team members</h2>
                    <a href="#" className="btn btn-sm btn-secondary">
                      See all
                    </a>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush list my--3">
                      <li className="list-group-item px-0">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <a href="#" className="user-avatar">
                              <img
                                className="rounded-circle"
                                alt="Image placeholder"
                                src="../../assets/img/team/profile-picture-1.jpg"
                              />
                            </a>
                          </div>
                          <div className="col-auto ml--2">
                            <h4 className="h6 mb-0">
                              <a href="#">Christopher Wood</a>
                            </h4>
                            <span className="text-success">●</span>
                            <small>Online</small>
                          </div>
                          <div className="col text-right">
                            <a href="#" className="btn btn-sm btn-tertiary">
                              <i className="fas fa-calendar-check mr-1"></i>{" "}
                              Invite
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item px-0">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <a href="#" className="user-avatar">
                              <img
                                className="rounded-circle"
                                alt="Image placeholder"
                                src="../../assets/img/team/profile-picture-2.jpg"
                              />
                            </a>
                          </div>
                          <div className="col-auto ml--2">
                            <h4 className="h6 mb-0">
                              <a href="#">Jose Leos</a>
                            </h4>
                            <span className="text-warning">●</span>
                            <small>In a meeting</small>
                          </div>
                          <div className="col text-right">
                            <a href="#" className="btn btn-sm btn-tertiary">
                              <i className="fas fa-comment mr-1"></i> Message
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item px-0">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <a href="#" className="user-avatar">
                              <img
                                className="rounded-circle"
                                alt="Image placeholder"
                                src="../../assets/img/team/profile-picture-3.jpg"
                              />
                            </a>
                          </div>
                          <div className="col-auto ml--2">
                            <h4 className="h6 mb-0">
                              <a href="#">Bonnie Green</a>
                            </h4>
                            <span className="text-danger">●</span>
                            <small>Offline</small>
                          </div>
                          <div className="col text-right">
                            <a href="#" className="btn btn-sm btn-tertiary">
                              <i className="fas fa-calendar-check mr-1"></i>{" "}
                              Invite
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item px-0">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <a href="#" className="user-avatar">
                              <img
                                className="rounded-circle"
                                alt="Image placeholder"
                                src="../../assets/img/team/profile-picture-4.jpg"
                              />
                            </a>
                          </div>
                          <div className="col-auto ml--2">
                            <h4 className="h6 mb-0">
                              <a href="#">Neil Sims</a>
                            </h4>
                            <span className="text-success">●</span>
                            <small>Online</small>
                          </div>
                          <div className="col text-right">
                            <a href="#" className="btn btn-sm btn-tertiary">
                              <i className="fas fa-comment mr-1"></i> Message
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4">
                <div className="card border-light shadow-sm">
                  <div className="card-header border-bottom border-light">
                    <h2 className="h5 mb-0">Progress track</h2>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center mb-4">
                      <div className="col-auto">
                        <span className="icon icon-md text-purple">
                          <span className="fab fa-bootstrap"></span>
                        </span>
                      </div>
                      <div className="col">
                        <div className="progress-wrapper">
                          <div className="progress-info">
                            <div className="h6 mb-0">
                              Rocket - SaaS Template
                            </div>
                            <div className="small font-weight-bold text-dark">
                              <span>34 %</span>
                            </div>
                          </div>
                          <div className="progress mb-0">
                            <div
                              className="progress-bar bg-purple"
                              role="progressbar"
                              aria-valuenow="34"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "34%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mb-4">
                      <div className="col-auto">
                        <span className="icon icon-md text-danger">
                          <span className="fab fa-angular"></span>
                        </span>
                      </div>
                      <div className="col">
                        <div className="progress-wrapper">
                          <div className="progress-info">
                            <div className="h6 mb-0">Pixel - Design System</div>
                            <div className="small font-weight-bold text-dark">
                              <span>60 %</span>
                            </div>
                          </div>
                          <div className="progress mb-0">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{
                                width: "60%",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mb-4">
                      <div className="col-auto">
                        <span className="icon icon-md text-success">
                          <span className="fab fa-vuejs"></span>
                        </span>
                      </div>
                      <div className="col">
                        <div className="progress-wrapper">
                          <div className="progress-info">
                            <div className="h6 mb-0">
                              Spaces - Listings Template
                            </div>
                            <div className="small font-weight-bold text-dark">
                              <span>45 %</span>
                            </div>
                          </div>
                          <div className="progress mb-0">
                            <div
                              className="progress-bar bg-tertiary"
                              role="progressbar"
                              aria-valuenow="45"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "45%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mb-4">
                      <div className="col-auto">
                        <span className="icon icon-md text-info">
                          <span className="fab fa-react"></span>
                        </span>
                      </div>
                      <div className="col">
                        <div className="progress-wrapper">
                          <div className="progress-info">
                            <div className="h6 mb-0">Stellar - Dashboard</div>
                            <div className="small font-weight-bold text-dark">
                              <span>35 %</span>
                            </div>
                          </div>
                          <div className="progress mb-0">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              aria-valuenow="35"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "35%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <span className="icon icon-md text-purple">
                          <span className="fab fa-bootstrap"></span>
                        </span>
                      </div>
                      <div className="col">
                        <div className="progress-wrapper">
                          <div className="progress-info">
                            <div className="h6 mb-0">Volt - Dashboard</div>
                            <div className="small font-weight-bold text-dark">
                              <span>34 %</span>
                            </div>
                          </div>
                          <div className="progress mb-0">
                            <div
                              className="progress-bar bg-purple"
                              role="progressbar"
                              aria-valuenow="34"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{
                                width: "34%",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4 mb-4">
            <div className="col-12 mb-4">
              <div className="card border-light shadow-sm">
                <div className="card-body d-flex flex-row align-items-center flex-0 border-bottom">
                  <div className="d-block">
                    <div className="h6 font-weight-normal text-gray mb-2">
                      Total orders
                    </div>
                    <h2 className="h3">452</h2>
                    <div className="small mt-2">
                      <span className="fas fa-angle-up text-success"></span>
                      <span className="text-success font-weight-bold">
                        18.2%
                      </span>
                    </div>
                  </div>
                  <div className="d-block ml-auto">
                    <div className="d-flex align-items-center text-right mb-2">
                      <span className="shape-xs rounded-circle bg-quaternary mr-2"></span>
                      <span className="font-weight-normal small">July</span>
                    </div>
                    <div className="d-flex align-items-center text-right">
                      <span className="shape-xs rounded-circle bg-secondary mr-2"></span>
                      <span className="font-weight-normal small">August</span>
                    </div>
                  </div>
                </div>
                <div className="card-body p-2">
                  <div className="ct-chart-ranking ct-golden-section ct-series-a"></div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div className="card border-light shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between border-bottom border-light pb-3">
                    <div>
                      <h6 className="mb-0">
                        <span className="icon icon-xs mr-3">
                          <span className="fas fa-globe-europe"></span>
                        </span>
                        Global Rank
                      </h6>
                    </div>
                    <div>
                      <a href="#" className="text-primary font-weight-bold">
                        #755<span className="fas fa-chart-line ml-2"></span>
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom border-light py-3">
                    <div>
                      <h6 className="mb-0">
                        <span className="icon icon-xs mr-3">
                          <span className="fas fa-flag-usa"></span>
                        </span>
                        Country Rank
                      </h6>
                      <div className="small card-stats">
                        United States
                        <span className="icon icon-xs text-success ml-2">
                          <span className="fas fa-angle-up"></span>
                        </span>
                      </div>
                    </div>
                    <div>
                      <a href="#" className="text-primary font-weight-bold">
                        #32<span className="fas fa-chart-line ml-2"></span>
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between pt-3">
                    <div>
                      <h6 className="mb-0">
                        <span className="icon icon-xs mr-3">
                          <span className="fas fa-folder-open"></span>
                        </span>
                        Category Rank
                      </h6>
                      <a href="#" className="small card-stats">
                        Travel {">"} Accomodation
                      </a>
                    </div>
                    <div>
                      <a href="#" className="text-primary font-weight-bold">
                        #16<span className="fas fa-chart-line ml-2"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div className="card border-light shadow-sm">
                <div className="card-body">
                  <h2 className="h5">Acquisition</h2>
                  <p>
                    Tells you where your visitors originated from, such as
                    search engines, social networks or website referrals.
                  </p>
                  <div className="d-block">
                    <div className="d-flex align-items-center pt-3 mr-5">
                      <div className="icon icon-shape icon-sm icon-shape-danger rounded mr-3">
                        <span className="fas fa-chart-bar"></span>
                      </div>
                      <div className="d-block">
                        <label className="mb-0">Bounce Rate</label>
                        <h4 className="mb-0">33.50%</h4>
                      </div>
                    </div>
                    <div className="d-flex align-items-center pt-3">
                      <div className="icon icon-shape icon-sm icon-shape-quaternary rounded mr-3">
                        <span className="fas fa-chart-area"></span>
                      </div>
                      <div className="d-block">
                        <label className="mb-0">Sessions</label>
                        <h4 className="mb-0">9,567</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer section py-5">
          <div className="row">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <p className="mb-0 text-center text-xl-left">
                Copyright © 2019-<span className="current-year"></span>{" "}
                <a
                  className="text-primary font-weight-normal"
                  href="https://themesberg.com"
                  target="_blank"
                >
                  Themesberg
                </a>
              </p>
            </div>

            <div className="col-12 col-lg-6">
              <ul className="list-inline list-group-flush list-group-borderless text-center text-xl-right mb-0">
                <li className="list-inline-item px-0 px-sm-2">
                  <a href="https://themesberg.com/about">About</a>
                </li>
                <li className="list-inline-item px-0 px-sm-2">
                  <a href="https://themesberg.com/themes">Themes</a>
                </li>
                <li className="list-inline-item px-0 px-sm-2">
                  <a href="https://themesberg.com/blog">Blog</a>
                </li>
                <li className="list-inline-item px-0 px-sm-2">
                  <a href="https://themesberg.com/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Admin;
