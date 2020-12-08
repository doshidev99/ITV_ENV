import React from "react";

import { Row, Col } from "antd";

import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { ReactComponent as Banner } from "assets/images/banner.svg";

export const AuthLayout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <WrapperLayout>
      <Row className="h-100">
        <Col span={12}>
          <WrapperLeftColum>
            <WrapperForm>{children}</WrapperForm>
          </WrapperLeftColum>
        </Col>
        <Col span={12}>
          <div className="w-100 h-100">
            <WrapperBanner>
              <Banner style={{ width: "100%", height: "100%" }} />
            </WrapperBanner>
          </div>
        </Col>
      </Row>
    </WrapperLayout>
  );
};

const WrapperLayout = styled.div`
  /* top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  position: fixed; */
`;

const WrapperForm = styled.div`
  text-align: center;
  padding: 156px 160px;
  h2 {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: bold;
    font-size: 38px;

    margin: 0;
    padding-bottom: 70px;

    color: #fff;
  }
`;

const WrapperLeftColum = styled.div`
  height: 100%;
  background: #44379e;
`;

const WrapperBanner = styled.div`
  padding: 241px 73px 256px 73px;
  width: 574px;
  margin: 0 auto;
`;
