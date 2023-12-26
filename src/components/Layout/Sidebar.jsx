import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      {collapsed ? (
        <div className="sidebar-tab" onClick={toggleSidebar}>
          &#9654; {/* Right arrow icon or any other icon you prefer */}
        </div>
      ) : (
        <>
          <button className="toggle-button" onClick={toggleSidebar}>
            Toggle Sidebar
          </button>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;