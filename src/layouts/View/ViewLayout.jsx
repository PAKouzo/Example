import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderView from '../../components/HeaderView';
import Footer from '../../components/Footer';
import './styles.scss';

const ViewLayout = () => {
  return (
    <div className="container-root-layout">
      <HeaderView />
      <div className="container-page">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default ViewLayout;