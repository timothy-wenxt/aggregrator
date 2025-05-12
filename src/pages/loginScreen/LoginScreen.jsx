import React from 'react'
import './LoginScreen.scss';
import { Button, TextField } from '@mui/material';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="redirect-container">
     <div style={{display:"flex",gap:"30px"}}> <Button className='summary-btn' onClick={() => navigate('/planDetails')} variant='contained'>Summary</Button>
            <Button className='summary-btn' onClick={() => navigate('/dashboard')} variant='contained'>Dashboard</Button></div>
      <>
        <Typography style={{ fontSize: "15px", color: "white", fontWeight: "normal" }}>AGGREGATOR LOGIN</Typography>
        <TextField
          className='text'
          label="Email"
          variant="outlined"
          type="email"
          required
          size='small'
          sx={{
            borderRadius: '30px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
            },
          }}>Email</TextField>
        <TextField
          className='text'
          label="Password"
          variant="outlined"
          type="Password"
          size='small'
          required
          sx={{
            borderRadius: '30px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
            },
          }}>Password</TextField>

        <Button
          onClick={() => navigate('/wrapperPage')}
          variant='contained' size='small' className='loginbtn' style={{ backgroundColor: "#00C8AF" }}>LOGIN</Button>
      </>
    </div>
  )
}

export default LoginScreen