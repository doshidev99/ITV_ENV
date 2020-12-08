import React, { useEffect } from "react";

import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "antd";

import styled from "styled-components";

import { useDispatch } from "react-redux";

import UserApi from "api/UserApi";

import { AuthLayout } from "layout/AuthLayout";

import { InputCustomer } from "components/InputCustomer";

import { actions } from "redux-store/auth";
import { ReactComponent as Email } from "assets/images/IC/email.svg";
import { ReactComponent as Pass } from "assets/images/IC/Password.svg";

import { ReactComponent as Google } from "assets/images/IC/Google.svg";
import { ReactComponent as Facebook } from "assets/images/IC/FB.svg";

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const onFinish = (value) => {
    const { email, password } = value;
    UserApi.login({
      email,
      password,
    }).then((res) => {
      const { data, status } = res;
      if (status && status === 200) {
        dispatch(actions.login(data));
        history.push("/");
      }
    });
  };
  return (
    <AuthLayout>
      <h2>Log In</h2>
      <Form onFinish={onFinish}>
        <InputCustomer
          label="email"
          placeholder="Nguyenthngochang@gmail.com"
          name="email"
          prefix={<Email className="w-100 h-100" />}
        />

        <InputCustomer
          label="password"
          type="password"
          placeholder=""
          name="password"
          prefix={<Pass className="w-100 h-100" />}
        />

        <div
          className="text-hidden"
          style={{
            paddingTop: "25px",
            textAlign: "left",
          }}
        >
          Forgot Password?
        </div>
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
          Log In
        </Button>
      </Form>

      <WrapperOtherSignUp>
        <div className="py-3 text-hidden font-root">Or Log In with</div>
        <div className="d-flex justify-content-center">
          <Google style={{ cursor: "pointer" }} />
          <Facebook style={{ cursor: "pointer" }} />
        </div>

        <div className="text-center">
          Don’t have a account?
          <div className="font-weight-bold d-inline pl-3 font-root">
            <Link to="/register" style={{ color: "#FFC8BF" }}>
              SignUp
            </Link>
          </div>
        </div>
      </WrapperOtherSignUp>
    </AuthLayout>
  );
};

Login.propTypes = {};

const WrapperOtherSignUp = styled.div`
  color: #fff;
`;
export default Login;
