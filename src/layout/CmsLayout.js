import React from "react";

import { Row, Col } from "antd";

import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { ReactComponent as Logo } from "assets/images/logo.svg";

import { ListMenu } from "components/ListMenu";

export const CmsLayout = ({ children }) => {
  return (
    <WrapperCmsLayout>
      <Row className="h-100">
        <Col span={5}>
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
              <Col>
                <div
                  className="text-hidden text-center"
                  style={{
                    fontSize: "12px",
                    paddingBottom: "94px",
                  }}
                >
                  @Copyright
                </div>
              </Col>
            </Row>
          </WrapperSidebar>
        </Col>

        <Col
          span={19}
          style={{
            padding: "43px 60px",
          }}
        >
          {children}
        </Col>
      </Row>
    </WrapperCmsLayout>
  );
};

const WrapperCmsLayout = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  position: fixed;
`;

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
