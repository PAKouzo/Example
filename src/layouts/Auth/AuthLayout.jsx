import React from 'react';
import { Outlet } from 'react-router-dom';
import social from '../../assets/social-media.jpg';
import './styles.scss';

const AuthLayout = () => {
  return (
    <div className="auth-container">
      <div className="item logo">
        <img src={social} />
      </div>
      <div className="item content-page">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;