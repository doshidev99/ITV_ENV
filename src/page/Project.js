import React from "react";
import { CmsLayout } from "layout/CmsLayout";

import { Row, Col, Button } from "antd";

import { NameWorkSpace } from "components/NameWorkSpace";

const MyProject = () => {
  return (
    <CmsLayout>
      <div className="w-100 h-100">
        <NameWorkSpace />

        <Row style={{ padding: "30px 0" }}>
          <Col span={19}>direction</Col>
          <Col span={5}>
            <Button
              style={{
                background: "#FF6952",
                borderRadius: "12px",
                padding: "7px 28px",
                height: "100%",
                width: "100%",
              }}
              className="text-white"
            >
              + Create Project
            </Button>
          </Col>
        </Row>
      </div>
    </CmsLayout>
  );
};
export default MyProject;
