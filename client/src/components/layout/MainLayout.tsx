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
        document.body.classList.add("mini-sidebar");
      } else {
        wrapper.classList.remove("mini-sidebar");
        wrapper.classList.remove("expand-menu");
        document.body.classList.remove("mini-sidebar");
        document.body.classList.remove("expand-menu");
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

  // Hover to expand sidebar when collapsed
  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    const wrapper = document.querySelector(".main-wrapper");
    if (!sidebar || !wrapper) return;

    const handleMouseEnter = () => {
      if (sidebarCollapsed) {
        wrapper.classList.add("expand-menu");
        document.body.classList.add("expand-menu");
      }
    };
    const handleMouseLeave = () => {
      if (sidebarCollapsed) {
        wrapper.classList.remove("expand-menu");
        document.body.classList.remove("expand-menu");
      }
    };

    sidebar.addEventListener("mouseenter", handleMouseEnter);
    sidebar.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      sidebar.removeEventListener("mouseenter", handleMouseEnter);
      sidebar.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [sidebarCollapsed]);

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
