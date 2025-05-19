import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { setStepperIndex } from '../../globalStore/slices/stepperSlice';
import useApiRequests from '../../services/useApiRequests';
import { setPolDetails } from '../../globalStore/slices/polDetailsSlice';
import showNotification from '../../components/notification/Notification';
import './LoginScreen.scss';

const { Title } = Typography;

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  login: Yup.string()
    .required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

const LoginScreen = () => {
  const login = useApiRequests('login', 'POST');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Configure Ant Design form layout for visible labels
  const formItemLayout = {
    labelCol: {
      span: 24 // Full width labels that sit above inputs
    },
    wrapperCol: {
      span: 24 // Full width inputs
    },
  };

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const response = await login(values);
      if (response?.message === 'Login successful') {
        dispatch(setPolDetails(response));
        dispatch(setStepperIndex(1));
        navigate('/wrapperPage');
      }
    } catch (err) {
      showNotification.ERROR(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="redirect-container">
      <div className="navigation-buttons">
        <Button
          className='summary-btn'
          onClick={() => navigate('/planDetails')}
          type='primary'
        >
          Summary
        </Button>
        <Button
          className='summary-btn'
          onClick={() => navigate('/dashboard')}
          type='primary'
        >
          Dashboard
        </Button>
      </div>

      <div className="login-form-container">
        <Title level={5} className="login-title">AGGREGATOR LOGIN</Title>

        <Formik
          initialValues={{ login: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form
              onFinish={handleSubmit}
              className="login-form"
              {...formItemLayout}
            >
              <Form.Item
                name="login"
                label="Username"
                validateStatus={errors.login && touched.login ? 'error' : ''}
                help={touched.login && errors.login}
                className="form-item"
              >
                <Input
                  name="login"
                  value={values.login}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input-field"
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                validateStatus={errors.password && touched.password ? 'error' : ''}
                help={touched.password && errors.password}
                className="form-item"
              >
                <Input.Password
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input-field"
                />
              </Form.Item>

              <Form.Item className="form-item">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-button"
                  loading={isSubmitting}
                >
                  LOGIN
                </Button>
              </Form.Item>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginScreen;