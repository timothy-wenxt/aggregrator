import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setStepperIndex } from '../../globalStore/slices/stepperSlice';
import './LoginScreen.scss';
import useApiRequests from '../../services/useApiRequests';
import { setPolDetails } from '../../globalStore/slices/polDetailsSlice';
import showNotification from '../../components/notification/Notification';

const LoginScreen = () => {
  const login = useApiRequests('login', 'POST');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({ login: '', password: '' });

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await login(formData);
      if (response?.message === 'Login successful') {
        dispatch(setPolDetails(response));
        dispatch(setStepperIndex(1));
        navigate('/wrapperPage');
      }
    } catch (err) {
      showNotification.ERROR(err);
    }
  };

  return (
    <div className="redirect-container">
      <div style={{ display: "flex", gap: "30px" }}>
        <Button className='summary-btn' onClick={() => navigate('/planDetails')} variant='contained'>Summary</Button>
        <Button className='summary-btn' onClick={() => navigate('/dashboard')} variant='contained'>Dashboard</Button>
      </div>

      <>
        <Typography style={{ fontSize: "15px", color: "white", fontWeight: "normal" }}>AGGREGATOR LOGIN</Typography>

        <TextField
          className='text'
          label="login"
          name="login"
          variant="outlined"
          type="login"
          required
          size='small'
          value={formData.login}
          onChange={handleInputChange}
          sx={{
            borderRadius: '30px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
            },
          }}
        />

        <TextField
          className='text'
          label="Password"
          name="password"
          variant="outlined"
          type="password"
          required
          size='small'
          value={formData.password}
          onChange={handleInputChange}
          sx={{
            borderRadius: '30px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
            },
          }}
        />

        <Button
          onClick={handleLogin}
          variant='contained'
          size='small'
          className='loginbtn'
          style={{ backgroundColor: "#00C8AF" }}
        >
          LOGIN
        </Button>
      </>
    </div>
  );
};

export default LoginScreen;
