import React, { useState } from "react";

interface HeaderProps {
  onToggleSidebar: () => void;
  onMobileToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, onMobileToggle }) => {
  const [academicOpen, setAcademicOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [addNewOpen, setAddNewOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const closeAll = () => {
    setAcademicOpen(false);
    setLangOpen(false);
    setAddNewOpen(false);
    setNotifOpen(false);
    setProfileOpen(false);
  };

  return (
    <div className="header">
      <div className="header-left active">
        <a href="/" className="logo logo-normal">
          <img src="assets/img/logo-dark.png" alt="Logo" />
        </a>
        <a href="/" className="logo-small">
          <img src="assets/img/logo.png" alt="Logo" />
        </a>
        <a href="/" className="dark-logo">
          <img src="assets/img/logo-dark.png" alt="Logo" />
        </a>
        <a
          id="toggle_btn"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onToggleSidebar();
          }}
        >
          <i className="ti ti-menu-deep"></i>
        </a>
      </div>

      <a
        id="mobile_btn"
        className="mobile_btn"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onMobileToggle();
        }}
      >
        <span className="bar-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>

      <div className="header-user">
        <div className="nav user-menu">
          <div className="d-flex align-items-center header-gap" style={{}}>
            {/* Add New */}
            <div className="pe-1">
              <div className="dropdown">
                <a
                  href="#"
                  className="btn btn-outline-light bg-white btn-icon me-1"
                  onClick={(e) => {
                    e.preventDefault();
                    closeAll();
                    setAddNewOpen(!addNewOpen);
                  }}
                >
                  <i className="ti ti-square-rounded-plus"></i>
                </a>
                {addNewOpen && (
                  <div className="dropdown-menu dropdown-menu-right border shadow-sm dropdown-md show">
                    <div className="p-3 border-bottom">
                      <h5>Add New</h5>
                    </div>
                    <div className="p-3 pb-0">
                      <div className="row gx-2">
                        <div className="col-6">
                          <a
                            href="#"
                            className="d-block bg-primary-transparent ronded p-2 text-center mb-3 class-hover"
                          >
                            <div className="avatar avatar-lg mb-2">
                              <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-primary rounded-circle">
                                <i className="ti ti-school"></i>
                              </span>
                            </div>
                            <p className="text-dark">Students</p>
                          </a>
                        </div>
                        <div className="col-6">
                          <a
                            href="#"
                            className="d-block bg-success-transparent ronded p-2 text-center mb-3 class-hover"
                          >
                            <div className="avatar avatar-lg mb-2">
                              <span className="d-inline-flex align-items-center justify-content-center w-100 h-100 bg-success rounded-circle">
                                <i className="ti ti-users"></i>
                              </span>
                            </div>
                            <p className="text-dark">Teachers</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Notifications */}
            <div className="pe-1">
              <div className="dropdown">
                <a
                  href="#"
                  className="btn btn-outline-light bg-white btn-icon position-relative me-1"
                  onClick={(e) => {
                    e.preventDefault();
                    closeAll();
                    setNotifOpen(!notifOpen);
                  }}
                >
                  <i className="ti ti-bell"></i>
                  {/* <span className="badge bg-danger rounded-pill badge-top-right"></span> */}
                </a>
                {notifOpen && (
                  <div
                    className="dropdown-menu dropdown-menu-right notification-dropdown show p-3"
                    style={{ width: 350 }}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h4>Notifications</h4>
                    </div>
                    <div className="border-bottom mb-3 pb-3">
                      <div className="d-flex">
                        <span className="avatar avatar-lg me-2 flex-shrink-0">
                          <img
                            src="assets/img/profiles/avatar-23.jpg"
                            alt="Profile"
                          />
                        </span>
                        <div className="flex-grow-1">
                          <p className="mb-1">
                            <span className="text-dark fw-semibold">
                              Tigist
                            </span>{" "}
                            added appointment on 02:00 PM
                          </p>
                          <span>10 mins ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-3 pb-3">
                      <div className="d-flex">
                        <span className="avatar avatar-lg me-2 flex-shrink-0">
                          <img
                            src="assets/img/profiles/avatar-25.jpg"
                            alt="Profile"
                          />
                        </span>
                        <div className="flex-grow-1">
                          <p className="mb-1">
                            New student record{" "}
                            <span className="text-dark fw-semibold">
                              Ephrem
                            </span>{" "}
                            is created by{" "}
                            <span className="text-dark fw-semibold">Meron</span>
                          </p>
                          <span>2 hrs ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Dark/Light Mode */}
            <div className="pe-1">
              <a
                href="#"
                className="btn btn-outline-light bg-white btn-icon me-1"
                onClick={(e) => {
                  e.preventDefault();
                  const html = document.documentElement;
                  const isDark = html.getAttribute("data-theme") === "dark";
                  if (isDark) {
                    html.removeAttribute("data-theme");
                    html.removeAttribute("data-theme-mode");
                    setDarkMode(false);
                  } else {
                    html.setAttribute("data-theme", "dark");
                    html.setAttribute("data-theme-mode", "dark");
                    setDarkMode(true);
                  }
                }}
              >
                <i className={`ti ${darkMode ? "ti-sun" : "ti-moon"}`}></i>
              </a>
            </div>

            {/* Fullscreen */}
            <div className="pe-1">
              <a
                href="#"
                className="btn btn-outline-light bg-white btn-icon me-1"
                onClick={(e) => {
                  e.preventDefault();
                  toggleFullscreen();
                }}
              >
                <i
                  className={`ti ${isFullscreen ? "ti-minimize" : "ti-maximize"}`}
                ></i>
              </a>
            </div>

            {/* Profile */}
            <div className="dropdown ms-1">
              <a
                href="#"
                className="dropdown-toggle d-flex align-items-center"
                onClick={(e) => {
                  e.preventDefault();
                  closeAll();
                  setProfileOpen(!profileOpen);
                }}
              >
                <span className="avatar avatar-md rounded">
                  <img
                    src="assets/img/profiles/avatar-27.jpg"
                    alt="Img"
                    className="img-fluid"
                  />
                </span>
              </a>
              {profileOpen && (
                <div className="dropdown-menu show">
                  <div className="d-block">
                    <div className="d-flex align-items-center p-2">
                      <span className="avatar avatar-md me-2 online avatar-rounded">
                        <img
                          src="assets/img/profiles/avatar-27.jpg"
                          alt="img"
                        />
                      </span>
                      <div>
                        <h6>Tamrat Kibru</h6>
                        <p className="text-primary mb-0">Administrator</p>
                      </div>
                    </div>
                    <hr className="m-0" />
                    <a
                      className="dropdown-item d-inline-flex align-items-center p-2"
                      href="#"
                    >
                      <i className="ti ti-user-circle me-2"></i>My Profile
                    </a>
                    <a
                      className="dropdown-item d-inline-flex align-items-center p-2"
                      href="#"
                    >
                      <i className="ti ti-settings me-2"></i>Settings
                    </a>
                    <hr className="m-0" />
                    <a
                      className="dropdown-item d-inline-flex align-items-center p-2"
                      href="#"
                    >
                      <i className="ti ti-login me-2"></i>Logout
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
