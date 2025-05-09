import React from 'react'
import { Button, TextField, Card } from '@mui/material';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import './ThankyouPage.scss';

const LoginScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="lfi-card">
      <div className="header-section">

      </div>

      <div className="main-content">
        <Card className='card' style={{ padding: '20px' }}>
          <div className="confirmation-section">
            {/* <FaCheckCircle className="tick-icon" /> */}
            <div className="thank-you">Thank you</div>
            <p>We can confirm the purchase of your new policy</p>
          </div>
        </Card>

        <div className="buttons">
          <button onClick={() => navigate('/wrapperPage')} className="view-plan">View New Plan</button>
          <button onClick={() => navigate('/wrapperPage')} className="view-dashboard">View Dashboard</button>
        </div>
      </div>
    </div>


  )
}

export default LoginScreen