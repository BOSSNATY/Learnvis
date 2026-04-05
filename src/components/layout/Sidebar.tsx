import React, { useState } from "react";

interface SidebarProps {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, isMobileOpen, onCloseMobile }) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>("dashboard");

  const toggleSubmenu = (key: string) => {
    setOpenSubmenu(openSubmenu === key ? null : key);
  };

  return (
    <>
      <div className={`sidebar ${isMobileOpen ? "" : ""}`} id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li>
                <h6 className="submenu-hdr"><span>Main</span></h6>
                <ul>
                  <li className="submenu">
                    <a
                      href="#"
                      className={`${openSubmenu === "dashboard" ? "subdrop active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu("dashboard");
                      }}
                    >
                      <i className="ti ti-layout-dashboard"></i>
                      <span>Dashboard</span>
                      <span className="menu-arrow"></span>
                    </a>
                    {openSubmenu === "dashboard" && (
                      <ul style={{ display: "block" }}>
                        <li><a href="#">Admin Dashboard</a></li>
                        <li><a href="#">Teacher Dashboard</a></li>
                        <li><a href="#" className="active">Student Dashboard</a></li>
                        <li><a href="#">Parent Dashboard</a></li>
                      </ul>
                    )}
                  </li>
                </ul>
              </li>

              <li>
                <h6 className="submenu-hdr"><span>Peoples</span></h6>
                <ul>
                  <li className="submenu">
                    <a
                      href="#"
                      className={openSubmenu === "students" ? "subdrop" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu("students");
                      }}
                    >
                      <i className="ti ti-school"></i>
                      <span>Students</span>
                      <span className="menu-arrow"></span>
                    </a>
                    {openSubmenu === "students" && (
                      <ul style={{ display: "block" }}>
                        <li><a href="#">All Students</a></li>
                        <li><a href="#">Student Details</a></li>
                        <li><a href="#">Admission Form</a></li>
                      </ul>
                    )}
                  </li>
                  <li className="submenu">
                    <a
                      href="#"
                      className={openSubmenu === "teachers" ? "subdrop" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu("teachers");
                      }}
                    >
                      <i className="ti ti-users"></i>
                      <span>Teachers</span>
                      <span className="menu-arrow"></span>
                    </a>
                    {openSubmenu === "teachers" && (
                      <ul style={{ display: "block" }}>
                        <li><a href="#">All Teachers</a></li>
                        <li><a href="#">Teacher Details</a></li>
                        <li><a href="#">Add Teacher</a></li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti ti-user-bolt"></i>
                      <span>Parents</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti ti-user-shield"></i>
                      <span>Guardians</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <h6 className="submenu-hdr"><span>Academic</span></h6>
                <ul>
                  <li>
                    <a href="#">
                      <i className="ti ti-school-bell"></i>
                      <span>Classes</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti ti-building"></i>
                      <span>Class Room</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti ti-book"></i>
                      <span>Subjects</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti ti-calendar-share"></i>
                      <span>Syllabus</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti ti-clock-hour-4"></i>
                      <span>Time Table</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <h6 className="submenu-hdr"><span>Management</span></h6>
                <ul>
                  <li className="submenu">
                    <a
                      href="#"
                      className={openSubmenu === "fees" ? "subdrop" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu("fees");
                      }}
                    >
                      <i className="ti ti-report-money"></i>
                      <span>Fees Collection</span>
                      <span className="menu-arrow"></span>
                    </a>
                    {openSubmenu === "fees" && (
                      <ul style={{ display: "block" }}>
                        <li><a href="#">Fees Group</a></li>
                        <li><a href="#">Fees Type</a></li>
                        <li><a href="#">Collect Fees</a></li>
                      </ul>
                    )}
                  </li>
                  <li className="submenu">
                    <a
                      href="#"
                      className={openSubmenu === "library" ? "subdrop" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu("library");
                      }}
                    >
                      <i className="ti ti-notebook"></i>
                      <span>Library</span>
                      <span className="menu-arrow"></span>
                    </a>
                    {openSubmenu === "library" && (
                      <ul style={{ display: "block" }}>
                        <li><a href="#">Books</a></li>
                        <li><a href="#">Issue Book</a></li>
                        <li><a href="#">Return</a></li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti ti-run"></i>
                      <span>Sports</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti ti-building-fortress"></i>
                      <span>Hostel</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti ti-bus"></i>
                      <span>Transport</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <h6 className="submenu-hdr"><span>HRM</span></h6>
                <ul>
                  <li>
                    <a href="#">
                      <i className="ti ti-users-group"></i>
                      <span>Staffs</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti ti-layout-distribute-horizontal"></i>
                      <span>Departments</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti ti-briefcase"></i>
                      <span>Holidays</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti ti-moneybag"></i>
                      <span>Payroll</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <h6 className="submenu-hdr"><span>Announcements</span></h6>
                <ul>
                  <li>
                    <a href="#">
                      <i className="ti ti-clipboard-data"></i>
                      <span>Notice Board</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti ti-calendar-question"></i>
                      <span>Events</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isMobileOpen && <div className="sidebar-overlay opened" onClick={onCloseMobile}></div>}
    </>
  );
};

export default Sidebar;
