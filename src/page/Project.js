import React, { useEffect } from "react";
import styled from "styled-components";

import {
  Form,
  Row,
  Col,
  Button,
  Input,
  Dropdown,
  Menu,
  DatePicker,
} from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";

import UserApi from "api/UserApi";

import { actions } from "redux-store/project";

import { CmsLayout } from "layout/CmsLayout";
import { ListProject } from "components/ListProject";

import { NameWorkSpace } from "components/NameWorkSpace";

const MyProject = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    UserApi.getAllProject().then((res) => {
      if (res?.status === 200) {
        dispatch(actions.getAllProject(res?.data));
      }
    });
  }, [dispatch]);

  const { listProjects = [] } = useSelector((state) => state?.projectReducer);

  return (
    <CmsLayout>
      <div className="w-100 h-100">
        <NameWorkSpace />

        <Row style={{ padding: "30px 0" }}>
          <Col span={17}>
            <FormFilter />
          </Col>

          <Col span={5} offset={2}>
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

        <WrapperListProject>
          <Row
            className=" pb-3"
            justify="space-between"
            align="middle"
            style={{ borderBottom: "1px solid #E4E4E4" }}
          >
            <Col className="text-tittle" span={5}>
              Image
            </Col>
            <Col className="text-tittle" span={5}>
              Name
            </Col>
            <Col className="text-tittle" span={4}>
              Type
            </Col>
            <Col className="text-tittle" span={5}>
              Create At
            </Col>
            <Col className="text-tittle" span={3}></Col>
          </Row>

          {listProjects &&
            listProjects?.map((el, index) => (
              <ListProject key={index} element={el} />
            ))}

          <WrapperPagination>
            <div className="w-100">
              <Row align="middle" justify="center">
                <Col className="mx-2">
                  <div
                    style={{
                      background: "#6C5DD3",
                      borderRadius: "8px",
                      width: "29px",
                      height: "29px",
                      lineHeight: "29px",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    1
                  </div>
                </Col>
                <Col>
                  <div
                    style={{
                      background: "#6C5DD3",
                      borderRadius: "8px",
                      width: "29px",
                      height: "29px",
                      lineHeight: "29px",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    2
                  </div>
                </Col>
              </Row>
            </div>
          </WrapperPagination>
        </WrapperListProject>
      </div>
    </CmsLayout>
  );
};

const FormFilter = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Form>
        <Row className="justify-content-between align-items-center">
          <Col>
            <Input
              style={{
                borderRadius: "12px",
                background: "#f1f1fe",
                color: "#808191",
                border: "none",
                width: "165px",
                height: "40px",
              }}
              className="root-placeholder"
              placeholder="name"
            />
          </Col>
          <Col>
            <Dropdown overlay={menu}>
              <Button
                style={{
                  borderRadius: "12px",
                  background: "#f1f1fe",
                  color: "#808191",
                  border: "none",
                  width: "165px",
                  height: "40px",
                  textAlign: "left",
                }}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div style={{ color: "#808191" }}>Type</div>
                  <DownOutlined />
                </div>
              </Button>
            </Dropdown>
          </Col>
          <Col>
            <DatePicker.RangePicker
              style={{
                width: "257px",
                background: "#F1F1FE",
                borderRadius: "12px",
                height: "40px",
                border: "none",
              }}
              dateRender={(current) => {
                const style = {};
                if (current.date() === 1) {
                  style.border = "1px solid #1890ff";
                  style.borderRadius = "50%";
                }
                return (
                  <div className="ant-picker-cell-inner" style={style}>
                    {current.date()}
                  </div>
                );
              }}
            />
          </Col>

          <Col>
            <Button
              style={{
                height: "40px",
                background: "#6C5DD3",
                borderRadius: "12px",
                color: "#fff",
              }}
            >
              Filter
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                height: "40px",
                border: "1px solid #6C5DD3",
                borderRadius: "12px",
                color: "#6C5DD3",
              }}
            >
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

const WrapperListProject = styled.div`
  background: #fff;
  padding: 54px;
  border-radius: 24px;
`;

const WrapperPagination = styled.div``;
export default MyProject;
