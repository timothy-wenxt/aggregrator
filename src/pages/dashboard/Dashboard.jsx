import React from 'react';
import { FaBolt, FaUser, FaBook, FaChartBar, FaCog } from 'react-icons/fa';
import logo from '../dashboard/logo.png';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="nav" style={{marginTop:"-100px"}}>
          <NavItem icon={<FaChartBar />} label="Dashboard" active />
          <NavItem icon={<FaBook />} label="Library" />
          <NavItem icon={<FaUser />} label="People" />
          <NavItem icon={<FaBolt />} label="Activities" />
          <h5>Support</h5>
          <NavItem icon={<FaBook />} label="Get Started" />
          <NavItem icon={<FaCog />} label="Settings" />
        </nav>
      
          
          <div className="user-info">
            <p>Sam Wheeler</p>
            <p>samwheeler@example.com</p>
          </div>
      
      </aside>

      <main className="main-content">
        <header className="header">Dashboard</header>

        <section className="controls">
          <button className="button-outline">Data Sharing</button>
          <button className="button-primary">Quote Sharing</button>
          <select className="select">
            <option>All-time</option>
          </select>
        </section>

        <section className="metrics">
          <Card title="Data Request Received" value="27/80" />
          <Card title="Data Request Responded" value="3,298" />
          <Card title="Data Request Failed" value="1,111" />
          <Card title="Data Request Inprogress" value="1,111" />
          <Card title="Avg Response Time" value="86%" isChart />
          <Card title="Unique TPP Visitors" value="+34%" isChart />
        </section>

        <div className="card">
          <h2 className="section-title">Reports</h2>
          <div className="chart-placeholder">(Chart Placeholder)</div>
        </div>

        <div className="metrics">
          <div className="card">
            <h3 className="section-title">Quote Conversion ratio</h3>
            <select className="select">
              <option>All</option>
            </select>
            <div className="conversion">72%</div>
            <p className="total">Converted</p>
          </div>

          <PieChart title="Data Sharing Count" />
          <PieChart title="Per TPP Visit" />
        </div>
      </main>
    </div>
  );
};

function NavItem({ icon, label, active }) {
  return (
    <div className={`nav-item ${active ? 'active' : ''}`}> 
      <span>{icon}</span>
      <span style={{ marginLeft: '10px' }}>{label}</span>
    </div>
  );
}

function Card({ title, value, isChart }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <div className="value">{value}</div>
      {isChart && <div className="chart-placeholder" style={{ height: '32px' }}></div>}
    </div>
  );
}

function PieChart({ title }) {
  return (
    <div className="card pie-wrapper">
      <h3 className="section-title">{title}</h3>
      <div className="pie"></div>
      <div className="total">Total Count: 46</div>
    </div>
  );
}

export default Dashboard;
