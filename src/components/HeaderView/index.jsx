import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "antd";
import logo from "../../assets/logo.jpg";
import HomeIcon from "../HomeIcon";
import PersonalIcon from "../PersonalIcon";
import AccountIcon from "../AccountIcon";
import "./styles.scss";

const HeaderView = () => {
  const navigate = useNavigate();
  return (
    <div className="page-header">
      <div className="logo">
        <img src={logo} />
      </div>
      <div>
        <h1>Social Media</h1>
      </div>
      <div>
        <Button
          onClick={() => {
            navigate("/auth/login");
          }}
        >
          Log in
        </Button>
        <Button
          onClick={() => {
            navigate("/auth/register");
          }}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default HeaderView;
