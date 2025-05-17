import React from 'react'
import './ThankyouPage.scss';
import { Button, TextField,Card } from '@mui/material';
import { Typography } from 'antd';
import { FaBolt, FaUser, FaBook, FaChartBar, FaCog, FaCheckCircle } from "react-icons/fa";


const Thankyou = () => {
  return (
  
  <div className="lfi-card">
  <div className="header-section"></div>

  <div className="main-content">
    <div></div>
   <Card
  className="firstcard"
  style={{
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }}
>
  <div className="confirmation-section">
    <div className="thank-you">Thank you</div>
    <FaCheckCircle className="tick-icon" />
    <p>We can confirm the purchase of your new policy</p>
  </div>
</Card>


    <div className="buttons">
      <button className="view-plan">View New Plan</button>
      <button className="view-dashboard">View Dashboard</button>
    </div>
  </div>
</div>


  )
}

export default Thankyou