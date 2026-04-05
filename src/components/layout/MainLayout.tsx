import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMobile = () => {
    setMobileOpen(false);
  };

  useEffect(() => {
    const wrapper = document.querySelector(".main-wrapper");
    if (wrapper) {
      if (sidebarCollapsed) {
        wrapper.classList.add("mini-sidebar");
      } else {
        wrapper.classList.remove("mini-sidebar");
      }
      if (mobileOpen) {
        wrapper.classList.add("slide-nav");
        document.documentElement.classList.add("menu-opened");
      } else {
        wrapper.classList.remove("slide-nav");
        document.documentElement.classList.remove("menu-opened");
      }
    }
  }, [sidebarCollapsed, mobileOpen]);

  return (
    <div className="main-wrapper">
      <Header onToggleSidebar={toggleSidebar} onMobileToggle={toggleMobile} />
      <Sidebar
        isCollapsed={sidebarCollapsed}
        isMobileOpen={mobileOpen}
        onCloseMobile={closeMobile}
        onToggleSidebar={toggleSidebar}
      />
      <div className="page-wrapper">
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
