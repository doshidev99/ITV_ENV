import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import { Link, useLocation } from "react-router-dom";

import { menuMapping } from "constant";

export const ListMenu = (props) => {
  const { pathname } = useLocation();
  return (
    <WrapperListMenu>
      {menuMapping.map((menu) => (
        <Link to={menu.path} key={menu.name} style={{ paddingTop: "29px" }}>
          <div className={`wrapper-link ${pathname === menu.path && "active"}`}>
            <Row className="align-items-center">
              <Col className="name-path">
                {React.createElement("div", {}, menu.prefix)}
              </Col>
              <Col className="name-path pl-3">{menu.name}</Col>
            </Row>
          </div>
        </Link>
      ))}
    </WrapperListMenu>
  );
};

ListMenu.propTypes = {};

const WrapperListMenu = styled.div`
  .wrapper-link {
    padding: 10px 38px 10px 16px;
    .name-path {
      color: #bdc3f9;
      font-weight: 500;

      svg {
        path,
        circle {
          stroke: #9496ff;
        }
      }
    }
  }
  .active {
    background: #6c5dd3;
    border-radius: 12px;

    .name-path {
      font-family: "SF Pro Display";
      font-style: normal;
      font-size: 16px;
      color: #fff;
      svg {
        path,
        circle {
          stroke: #fff;
        }
      }
    }
  }
`;
