import React from "react";
import styled from "styled-components";

import { Row, Col } from "antd";

import { ReactComponent as Bell } from "assets/images/bell.svg";
import { ReactComponent as Stroke } from "assets/images/stroke.svg";
import avatar from "assets/images/Avatar/avatar.png";

export const NameWorkSpace = (props) => {
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
            <div>2</div>
          </WrapperNotification>
          <WrapperAvatar>
            <img src={avatar} alt="" className="w-100 h-100" />
          </WrapperAvatar>
          <div className="font-root text-dark font-weight-bold px-1">
            Dines Anandavel
          </div>
          <Stroke />
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
    background: red;
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
`;
