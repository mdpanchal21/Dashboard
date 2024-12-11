import React, { useState } from "react";
import { FaBell, FaSearch, FaUserCircle, FaUsers, FaDollarSign, FaChartLine, FaPercentage, FaHome, FaCog, FaChartBar, FaQuestionCircle } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
  <ul>
    <li>
      <FaHome className="sidebar-icon" /> Dashboard
    </li>
    <li>
      <FaUsers className="sidebar-icon" /> User Management
    </li>
    <li>
      <FaChartBar className="sidebar-icon" /> Analytics
    </li>
    <li>
      <FaCog className="sidebar-icon" /> Setting
    </li>
    <li>
      <FaQuestionCircle className="sidebar-icon" /> Help center
    </li>
  </ul>
</aside>

      <main className="main-content">
        <header className="header">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
          <FaBell className="notification-icon" />
          <div className="user-account">
            <FaUserCircle className="user-icon" />
            <span className="user-name">John Doe</span>
          </div>
        </header>
        <section className="content">
          <div className="info-box">
            <div className="icon-wrapper">
              <FaUsers className="box-icon" />
            </div>
            <h3>Total Users</h3>
            <div className="info-details">
              <p className="main-value">1,234</p>
              <span className="percentage-change">+12.8%</span>
            </div>
          </div>
          <div className="info-box">
            <div className="icon-wrapper">
              <FaDollarSign className="box-icon" />
            </div>
            <h3>Revenue</h3>
            <div className="info-details">
              <p className="main-value">$45,678</p>
              <span className="percentage-change">+2.6%</span>
            </div>
          </div>
          <div className="info-box">
            <div className="icon-wrapper">
              <FaChartLine className="box-icon" />
            </div>
            <h3>Active Sessions</h3>
            <div className="info-details">
              <p className="main-value">567</p>
              <span className="percentage-change">+8.4%</span>
            </div>
          </div>
          <div className="info-box">
            <div className="icon-wrapper">
              <FaPercentage className="box-icon" />
            </div>
            <h3>Conversion Rate</h3>
            <div className="info-details">
              <p className="main-value">12.3%</p>
              <span className="percentage-change">+3.9%</span>
            </div>
            
          </div>
          <div className="info-box image-box">
    <div className="image-wrapper">
      <img src="/graph1.png" alt="Description" />
    </div>
  </div>
  <div className="info-box imagee-box">
    <div className="image-wrapperr">
      <img src="/graph2.png" alt="Description 2" />
    </div>
  </div>

        </section>
      </main>
    </div>
  );
};

export default Dashboard;
