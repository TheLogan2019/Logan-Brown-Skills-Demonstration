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
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/ResponseDemo">ResponseDemo</Link>
            </li>
            <li>
              <Link to="/Functions">Functions</Link>
            </li>
            <li>
              <Link to="/REST&Requests">REST</Link>
            </li>
            <li>
              <Link to="/React">React</Link>
            </li>
            <li>
              <Link to="/Forms">Forms</Link>
            </li>
            <li>
              <Link to="/State">State</Link>
            </li>
            <li>
              <Link to="/Authentication">Authentication</Link>
            </li>
            <li>
              <Link to="/Hooks">Hooks</Link>
            </li>
            <li>
              <Link to="/Express">Express</Link>
            </li>
            <li>
              <Link to="/SQL">SQL</Link>
            </li>
            <li>
              <Link to="/KeyConcepts">Key Concepts</Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;
