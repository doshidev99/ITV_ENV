import React from "react";
import styled from "styled-components";

import { Form, Input } from "antd";

export const InputCustomer = ({
  label,
  placeholder,
  name,
  type = "text",
  prefix,
}) => {
  return (
    <Form.Item
      // label={name}s
      name={name}
      // rules={[
      //   {
      //     required: true,
      //     message: "Please input your username!",
      //   },
      // ]}
    >
      <WrapperInputCustomer>
        <div
          className="d-flex align-items-center"
          style={{ marginBottom: "18px", marginTop: "25px" }}
        >
          <WrapperPrefix>
            {React.createElement("div", {}, prefix)}
          </WrapperPrefix>
          <div className="pl-2 label">{label}</div>
        </div>
        <Input className="w-100 h-100" placeholder={placeholder} />
      </WrapperInputCustomer>
    </Form.Item>
  );
};

InputCustomer.propTypes = {};
const WrapperInputCustomer = styled.div`
  height: 50px;
  outline: "none";
  margin: 0 auto;
  > input {
		color: #fff;
    border-radius: 12px;
    background: #6c5dd3;
    border: none;
    &:focus {
      border: 1px solid #fff;
    }
  }

  .label {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;

    color: #bdc3f9;
    line-height: 21px;
    text-transform: capitalize;
  }
`;

const WrapperPrefix = styled.div`
  width: 18px;
`;
