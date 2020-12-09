import React from "react";

import { Row, Col } from "antd";

import styled from "styled-components";

import { ReactComponent as Logo } from "assets/images/logo.svg";

import { ListMenu } from "components/ListMenu";

export const CmsLayout = ({ children }) => {
  return (
    <WrapperCmsLayout>
      <Row className="h-100">
        <Col
          span={4}
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: 999,
          }}
        >
          <WrapperSidebar>
            <Row className="flex-column justify-content-between align-items-center h-100">
              <Col>
                <WrapperLogo>
                  <Logo />
                  <div className="text-white text-logo font-weight-bold">
                    Unaagi
                  </div>
                </WrapperLogo>

                <WrapperListMenu>
                  <ListMenu />
                </WrapperListMenu>
              </Col>
              <Col
                style={{
                  position: "absolute",
                  bottom: "10%",
                }}
              >
                <div
                  className="text-hidden text-center"
                  style={{
                    fontSize: "12px",
                  }}
                >
                  @Copyright
                </div>
              </Col>
            </Row>
          </WrapperSidebar>
        </Col>
        <Col span={4}></Col>
        <Col
          span={20}
          style={{
            padding: "43px 60px",
            background: "#E5E5E5",
          }}
        >
          {children}
        </Col>
      </Row>
    </WrapperCmsLayout>
  );
};

const WrapperCmsLayout = styled.div``;

const WrapperSidebar = styled.div`
  height: 100%;
  background: #44379e;
  text-align: center;
`;

const WrapperLogo = styled.div`
  padding: 50px 0;
  .text-logo {
    font-size: 22px;
    font-family: "SF Pro Display";
  }
`;

const WrapperListMenu = styled.div`
  /* background: red; */
`;

CmsLayout.propTypes = {};
