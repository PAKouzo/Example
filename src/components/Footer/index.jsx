import React from 'react';
import './styles.scss';

const Footer = () => {
    return (
      <div className="page-footer">
        <h1>Social Media App</h1>
        <p className="content">
          If you have other questions about this Privacy Policy, please contact
          us at:
          <br />
          Email:
          <a className='email' href="">
            Social@gmail.com
          </a>
        </p>
        <div className="copy-right">
          Copyright ©2023
        </div>
      </div>
    );
}

export default Footer;