import React, { useState } from 'react';
import { FaBolt, FaUser, FaBook, FaChartBar, FaCog } from 'react-icons/fa';
import logo from '../dashboard/logo.png';
import graph from '../dashboard/GraphIcon.png';
import './Dashboard.scss';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell
} from 'recharts';


  const data = [
  { name: '10am', value: 40 },
  { name: '11am', value: 55 },
  { name: '12am', value: 65 },
  { name: '01am', value: 35 },
  { name: '02am', value: 50 },
  { name: '03am', value: 70 },
  { name: '04am', value: 30 },
  { name: '05am', value: 60 },
  { name: '06am', value: 80 },
  { name: '07am', value: 90 }
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>Data</p>
        <h4>{payload[0].value.toLocaleString()}</h4>
      </div>
    );
  }
  return null;
};

const Dashboard = () => {

  const [popupIndex, setPopupIndex] = useState(null);

  const cardData = [
    { title: 'Data Request Received', value: 27},
    { title: 'Data Request Responded', value: 3298 },
    { title: 'Data Request Failed', value: 1111 },
    { title: 'Data Request Inprogress', value: 1111 },
    { title: 'Avg Response Time', value: '86%'},
    { title: 'Unique TPP Visitors', value: '+34%'},
  ];

  const statusData = [
  { name: 'To Do', value: 28 },
  { name: 'In-progress', value: 6 },
  { name: 'Done', value: 6 },
];

const tableData = [

    {
      requestDate: '2025-05-11 10:00 AM',
      requestType: 'New',
      tppName: 'TPP A',
      productType: 'Health',
      productName: 'Product 1',
      policyNumber: 'P12345',
      customerName: 'John Doe',
      respondedTime: '2025-05-11 10:30 AM',
      status: 'Completed',
      consentId: 'C123',
      consentType: 'Opt-in',
    },
    {
      requestDate: '2025-05-11 11:00 AM',
      requestType: 'Renewal',
      tppName: 'TPP B',
      productType: 'Life',
      productName: 'Product 2',
      policyNumber: 'P12346',
      customerName: 'Jane Smith',
      respondedTime: '2025-05-11 11:20 AM',
      status: 'Pending',
      consentId: 'C124',
      consentType: 'Opt-out',
    },
  ];
const COLORS = ['#1e3a8a', '#1d4ed8', '#06b6d4'];
    const percentage = 72;
  const strokeWidth = 15;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - percentage / 200);

    const total = statusData.reduce((sum, item) => sum + item.value, 0);

  const calculatePercentage = (value) => ((value / total) * 100).toFixed(1) + '%';
  
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="nav">
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
       
        </section>
         <div> <select className="select">
            <option>Timeframe: <span style={{fontWeight:"bold"}}>All-time</span></option>
          </select></div> 
<div className='main-flex-container'>
       <div className="card-grid">
      {cardData.map((item, index) => (
        <div
          key={index}
          className="dashboard-card"
          onClick={() => setPopupIndex(index)}
        >
          <p className="title">{item.title}</p>
          <p className="value">
            <strong>{item.value}</strong>
          </p>
      {(item.title === 'Avg Response Time' || item.title === 'Unique TPP Visitors') && (
  <img src={graph} alt="Graph Icon" className="icon" />
)}

        </div>
      ))}

      {popupIndex !== null && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close-btn" onClick={() => setPopupIndex(null)}>&times;</span>
           <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className='head'>Request Date</th>
            <th className='head'>Request Type</th>
            <th className='head'>TPP Name</th>
            <th className='head'>Product Type</th>
            <th className='head'>Product Name</th>
            <th className='head'>Policy Number</th>
            <th className='head'>Customer Name</th>
            <th className='head'>Responded Time</th>
            <th className='head'>Status</th>
            <th className='head'>Consent ID</th>
            <th className='head'>Consent Type</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.requestDate}</td>
              <td>{row.requestType}</td>
              <td>{row.tppName}</td>
              <td>{row.productType}</td>
              <td>{row.productName}</td>
              <td>{row.policyNumber}</td>
              <td>{row.customerName}</td>
              <td>{row.respondedTime}</td>
              <td>{row.status}</td>
              <td>{row.consentId}</td>
              <td>{row.consentType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </div>
        </div>
      )}
    </div>

      <div className="reports-chart">
      <h3 className="title">Reports</h3>
      <ResponsiveContainer width="100%" height={180} style={{paddingLeft:"-100px"}}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00bcd4" />
              <stop offset="100%" stopColor="#3f51b5" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f3f3" />
          <XAxis dataKey="name" tick={{ fontSize: 10 }}  tickMargin={10} 
  padding={{ left: 5, right: 10 }}/>
          <YAxis tick={{ fontSize: 10 }} tickMargin={10}
  padding={{ top: 10, bottom: 10 }}/>
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#colorLine)"
            strokeWidth={3}
            dot={{ r: 6, stroke: '#fff', strokeWidth: 2, fill: '#c084fc' }}
            activeDot={{ r: 8, fill: '#fff', stroke: '#1e1b4b', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>

           </div>

           <div className="three-card-grid">
 <div className="gauge-card">
      <div className="header">
        <span className="title">Quote Conversion ratio</span>
        <a href="#" className="link">View Details</a>
      </div>

      <div className="dropdown">
        <label>Product :</label>
        <select>
          <option>All</option>
        </select>
      </div>

      <div className="gauge">
        <svg viewBox="0 0 160 80">
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="#f3f3f3"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            transform="rotate(-180 80 80)"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
          </defs>
        </svg>
        <div className="gauge-center">
          <strong>{percentage}%</strong>
          <p>Converted</p>
        </div>
      </div>
    </div>

    <div className="sharing-card-container">
      <div className="sharing-card-header">
        <span className="sharing-title">Data Sharing Count</span>
        <a href="#" className="sharing-link">View Details</a>
      </div>
<div className='table-data'>
      <div className="sharing-status-table">
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Quote</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {statusData.map((item, index) => (
              <tr key={item.name}>
                <td>
                  <span
                    className="status-dot"
                    style={{ backgroundColor: COLORS[index] }}
                  ></span>
                  {item.name}
                </td>
                <strong><td>{item.value}</td></strong>
                <td style={{fontWeight:"bold"}}>{calculatePercentage(item.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></div>

      <div className="donut-chart-wrapper">
        <PieChart width={200} height={200}>
          <Pie
            data={statusData}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {statusData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
        <div className="donut-center-text">
                    <p>Total Count</p>
          <strong>{total}</strong>
        </div>
      </div>
      
    </div>
    
     <div className="sharing-card-container">
      <div className="sharing-card-header">
        <span className="sharing-title">Per TPP Visit</span>
        <a href="#" className="sharing-link">View Details</a>
      </div>
<div className='table-data'>
      <div className="sharing-status-table">
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Quote</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {statusData.map((item, index) => (
              <tr key={item.name}>
                <td>
                  <span
                    className="status-dot"
                    style={{ backgroundColor: COLORS[index] }}
                  ></span>
                  {item.name}
                </td>
                <strong><td>{item.value}</td></strong>
                <td style={{fontWeight:"bold"}}>{calculatePercentage(item.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></div>

      <div className="donut-chart-wrapper">
        <PieChart width={200} height={200}>
          <Pie
            data={statusData}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {statusData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
        <div className="donut-center-text">
                    <p>Total Count</p>
          <strong>{total}</strong>
        </div>
      </div>
      
    </div></div>
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



export default Dashboard;
