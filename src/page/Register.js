import React from "react";

import styled from "styled-components";

import { Link, useHistory } from "react-router-dom";

import { Form, Button, notification } from "antd";

import UserApi from "api/UserApi";

import { AuthLayout } from "layout/AuthLayout";

import { InputCustomer } from "components/InputCustomer";

import { ReactComponent as User } from "assets/images/IC/User.svg";
import { ReactComponent as Email } from "assets/images/IC/email.svg";
import { ReactComponent as Pass } from "assets/images/IC/Password.svg";

import { ReactComponent as Google } from "assets/images/IC/Google.svg";
import { ReactComponent as Facebook } from "assets/images/IC/FB.svg";

const Register = () => {
  const history = useHistory();

  const onFinish = (value) => {
    const { name, email, password } = value;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    UserApi.register({
      firstName: name,
      lastName: " ",
      email,
      password,
      timeZone,
    }).then((res) => {
      if (res?.status === 200) {
        notification.open({
          key: "updatable",
          message: "Register Success",
        });
        history.push("/login");
      }
    });
  };
  return (
    <AuthLayout>
      <h2>Sign Up</h2>
      <Form onFinish={onFinish}>
        <InputCustomer
          label="name"
          placeholder=""
          name="name"
          prefix={<User className="w-100 h-100" />}
        />
        <InputCustomer
          label="email"
          placeholder=""
          name="email"
          prefix={<Email className="w-100 h-100" />}
        />
        <InputCustomer
          label="password"
          placeholder=""
          name="password"
          type="password"
          prefix={<Pass className="w-100 h-100" />}
        />

        <Button
          type="default"
          htmlType="submit"
          className="font-root"
          style={{
            width: "100%",
            height: "50px",
            borderRadius: "12px",
            marginTop: "40px",
            background: "#FF6952",
            fontWeight: 500,
            border: "none",
            color: "#fff",
          }}
        >
          Sign Up{" "}
        </Button>
      </Form>
      <WrapperOtherSignUp>
        <div className="py-3 text-hidden">Or Sign Up with</div>
        <div className="d-flex justify-content-center">
          <Google style={{ cursor: "pointer" }} />
          <Facebook style={{ cursor: "pointer" }} />
        </div>

        <div className="text-center">
          Already have an account?
          <div className="font-weight-bold d-inline pl-3 font-root">
            <Link to="/login" style={{ color: "#FFC8BF" }}>
              Login
            </Link>
          </div>
        </div>
      </WrapperOtherSignUp>
    </AuthLayout>
  );
};

Register.propTypes = {};

const WrapperOtherSignUp = styled.div`
  color: #fff;
`;
export default Register;
