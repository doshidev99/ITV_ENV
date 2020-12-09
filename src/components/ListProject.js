import React from "react";
import styled from "styled-components";

import dayjs from "dayjs";

import { Row, Col, Tag, Tooltip, Badge } from "antd";

import defaultAvt from "assets/images/default.png";

import { ReactComponent as List } from "assets/images/list.svg";
import { ReactComponent as Eyes } from "assets/images/eyes.svg";
import { ReactComponent as Share } from "assets/images/share.svg";

export const ListProject = ({ element }) => {
  const { name, tags, medias, createdAt } = element;
  return (
    <WrapperProject>
      <Row justify="space-between" align="middle" className="py-3">
        <Col span={5}>
          <div style={{ width: "100%", height: "74px" }}>
            <img
              src={medias[0]?.fileName || defaultAvt}
              alt=""
              className="w-100 h-100"
              style={{ objectFit: "fill", borderRadius: "8px" }}
            />
          </div>
        </Col>
        <Col span={5}>{name}</Col>
        <Col span={4}>
          <Row>
            <Col>
              <Tag
                color={tags[0].color}
                style={{
                  padding: "10px 16px",
                  borderRadius: "8px",
                }}
              >
                {tags[0].name}
              </Tag>
              {tags.length - 1 > 0 && (
                <Badge
                  count={`+${tags.length - 1}`}
                  style={{ background: "#EAE7FF", color: "#6C5DD3" }}
                />
              )}
            </Col>
          </Row>
        </Col>
        <Col span={5}>
          {dayjs(createdAt).format("MM/DD/YY")},
          {dayjs(createdAt).format("H:mm")}
        </Col>
        <Col span={3}>
          <Row justify="space-between" align="middle">
            <Col>
              <Tooltip
                placement="bottom"
                color="#6C5DD3"
                overlayStyle={{
                  borderRadius: "8px",
                }}
                title={<div>View Items</div>}
              >
                <List style={{ cursor: "pointer" }} />
              </Tooltip>
            </Col>
            <Col>
              <Tooltip
                placement="bottom"
                color="#6C5DD3"
                overlayStyle={{
                  borderRadius: "8px",
                }}
                title={<div>View detail</div>}
              >
                <Eyes style={{ cursor: "pointer" }} />
              </Tooltip>
            </Col>
            <Col>
              <Tooltip
                placement="bottom"
                color="#6C5DD3"
                overlayStyle={{
                  borderRadius: "8px",
                }}
                title={<div>Share</div>}
              >
                <Share style={{ cursor: "pointer" }} />
              </Tooltip>
            </Col>
          </Row>
        </Col>
      </Row>
    </WrapperProject>
  );
};

const WrapperProject = styled.div``;
ListProject.propTypes = {};
