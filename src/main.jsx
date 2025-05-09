import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import store, { persistor } from './globalStore/persistConfig/store';

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#2c99d6',
          },
        }}>
        <BrowserRouter basename={import.meta.env.WECORE_CORE}>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </PersistGate>
  </Provider>,
);
