import React, { Fragment } from "react";
import "./style.css";

const Header = () => {
  return (
    <Fragment>
      <div className="header-container fixed-top">
        <header className="header navbar navbar-expand-sm expand-header">
          <a href className="sidebarCollapse mouseku" data-placement="bottom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </a>

          <ul className="navbar-item flex-row ml-auto">
            <li className="nav-item align-self-center search-animated">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-search toggle-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <form
                className="form-inline search-full form-inline search"
                role="search"
              >
                <div className="search-bar">
                  <input
                    type="text"
                    className="form-control search-form-control  ml-lg-auto"
                    placeholder="Search..."
                  />
                </div>
              </form>
            </li>

            <li className="nav-item dropdown notification-dropdown">
              <a
                href
                className="nav-link dropdown-toggle mouseku"
                id="notificationDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-bell"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span className="badge badge-success"></span>
              </a>
              <div
                className="dropdown-menu position-absolute e-animated e-fadeInUp"
                aria-labelledby="notificationDropdown"
              >
                <div className="notification-scroll">
                  <div className="dropdown-item">
                    <div className="media">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-message-square"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      <div className="media-body">
                        <div className="notification-para">
                          <span className="user-name">Shaun Park</span>
                          commented on your post.
                        </div>
                        <div className="notification-meta-time">5 mins ago</div>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <div className="media">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-thumbs-up"
                      >
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <div className="media-body">
                        <div className="notification-para">
                          <span className="user-name">Kelly Young</span> likes
                          your photo
                        </div>
                        <div className="notification-meta-time">8 mins ago</div>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <div className="media">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-send"
                      >
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                      <div className="media-body">
                        <div className="notification-para">
                          Invitation successfully sent to{" "}
                          <span className="user-name">Amy Diaz</span>
                        </div>
                        <div className="notification-meta-time">
                          10 mins ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown user-profile-dropdown  order-lg-0 order-1">
              <a
                href
                className="nav-link dropdown-toggle user mouseku"
                id="userProfileDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-user-check"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
              </a>
              <div
                className="dropdown-menu position-absolute e-animated e-fadeInUp"
                aria-labelledby="userProfileDropdown"
              >
                <div className="user-profile-section">
                  <div className="media mx-auto">
                    <img
                      src="assets/img/90x90.jpg"
                      className="img-fluid mr-2"
                      alt="avatar"
                    />
                    <div className="media-body">
                      <h5>Alan Green</h5>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
                <div className="dropdown-item">
                  <a href="user_profile.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>{" "}
                    <span>My Profile</span>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a href="apps_mailbox.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-inbox"
                    >
                      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    </svg>{" "}
                    <span>My Inbox</span>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a href="auth_lockscreen.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-lock"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>{" "}
                    <span>Lock Screen</span>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a href="auth_login.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-log-out"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>{" "}
                    <span>Log Out</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </header>
      </div>
    </Fragment>
  );
};

export default Header;
