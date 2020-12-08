import React from "react";
import styled from "styled-components";

import { Row, Col, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { actions } from "redux-store/auth";

import { ReactComponent as Bell } from "assets/images/bell.svg";
import avatarDefault from "assets/images/Avatar/avatar.png";

export const NameWorkSpace = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const logout = () => {
    dispatch(actions.logout());
    history.push("/login");
  };

  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        style={{
          borderRadius: "12px",
          background: "none",
        }}
        onClick={logout}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  const { avatar, firstName, lastName } = JSON.parse(
    localStorage.getItem("userInfo")
  );

  return (
    <Row className="justify-content-between align-items-center">
      <Col>
        <h2
          style={{
            textTransform: "capitalize",
            fontFamily: "SF Pro Display",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "26px",
          }}
        >
          my projects
        </h2>
      </Col>
      <Col span={7}>
        <Row className="align-items-center justify-content-end">
          <WrapperNotification>
            <Bell className="bell" style={{ cursor: "pointer" }} />
            <div className="text-white">2</div>
          </WrapperNotification>
          <WrapperAvatar>
            <img src={avatar || avatarDefault} alt="" />
          </WrapperAvatar>

          <Dropdown overlay={menu}>
            <Row
              align="middle"
              justify="center"
              className=" font-root text-dark font-weight-bold px-1"
            >
              <div style={{ color: "#808191" }}>
                {firstName}
                {lastName}
              </div>
              <DownOutlined />
            </Row>
          </Dropdown>
        </Row>
      </Col>
    </Row>
  );
};

const WrapperNotification = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  line-height: 40px;
  text-align: center;
  background: #fff;
  box-shadow: 0px 8px 16px rgba(39, 61, 116, 0.2);

  position: relative;

  div {
    position: absolute;
    top: -10%;
    right: 0;
    background: #6C5DD3;
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 20px;
    font-size: 12px;
    text-align: center;
  }
`;

const WrapperAvatar = styled.div`
  padding: 0 10px;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 40px;
  }
`;
