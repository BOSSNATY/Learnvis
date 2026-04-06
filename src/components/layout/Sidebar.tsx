import React, { useState } from "react";

interface SidebarProps {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
  onToggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  isMobileOpen,
  onCloseMobile,
  onToggleSidebar,
}) => {
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
                <h6 className="submenu-hdr">
                  <span>Main</span>
                </h6>
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
                        <li>
                          <a href="#">Admin Dashboard</a>
                        </li>
                        <li>
                          <a href="#">Teacher Dashboard</a>
                        </li>
                        <li>
                          <a href="#" className="active">
                            Student Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="#">Parent Dashboard</a>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isMobileOpen && (
        <div className="sidebar-overlay opened" onClick={onCloseMobile}></div>
      )}
    </>
  );
};

export default Sidebar;
