import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import logo from '../../assets/logo.jpg'
import HomeIcon from '../HomeIcon';
import PersonalIcon from '../PersonalIcon';
import AccountIcon from '../AccountIcon';
import './styles.scss';

const HeaderView = () => {
    const navigate = useNavigate();
    return (
        <div className="page-header">
            <div className="logo">
                <img src={logo} />
            </div>
            <ul className="list-router-page">
                <li>
                    <NavLink to={'/home'}>
                        {/* Trang chủ */}
                        <span className="title">Trang chủ</span>
                        <HomeIcon className="icon-header" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/personal'}>
                        <span className="title">Cá nhân</span>
                        <PersonalIcon className="icon-header" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/account'}>
                        <span className="title">Tài khoản</span>
                        <AccountIcon className="icon-header" />
                    </NavLink>
                </li>
            </ul>
            <Button onClick={() => {
                navigate('/auth/login');
            }}>
                Log in
            </Button>
            <Button onClick={() => {
                navigate('/auth/register');
            }}>
                Sign up
            </Button>
        </div>
    )
}

export default HeaderView;