import React from "react";
import {useState} from "react"
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Button from "./Button";
import { NavLink, useHistory } from "react-router-dom";
import { userService } from "../services/userServices.js";
import { useUser } from "../context/UserContext";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useUser();
  const [showPassword, setShowPassword] = useState(false)
  function handlePassword() {
    setShowPassword(!showPassword);
  }
  function handleSubmit(e) {
    e.preventDefault();
    userService
    .loginUser({
      email: e.target.formEmail.value,
      password : e.target.formPassword.value,
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        userService.userInfoStorage(data);
        setUser({
          userName: data.name,
          email: data.email,
          address: data.address,
          id: data._id,
        });
        history.push("/");
      }
    })
  }
  return (
    <div className="App-header1">
      <Form onSubmit={handleSubmit}>
        <Form.Label className="reBorder"></Form.Label>
        <Form.Label className="recoverPass">НЭВТРЭХ</Form.Label>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className="registerName">И-Мейл</Form.Label>
          <Form.Control
            className="formSize"
            type="email"
            placeholder="И-Мейл хаягаа оруулна уу."
          />
        </Form.Group>
        <Col xs="auto">
          <Form.Group className="mb-3 " controlId="formPassword">
            <Form.Label className="registerName">Нууц үг</Form.Label>
            <InputGroup className="mb-2">
              <Form.Control
                className="formSize"
                type={showPassword ? "text" : "password"}
                placeholder="Нууц үгээ оруулна уу."
                
              />
              <div className="rightIcon" onClick={handlePassword}>
                <svg
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1.875C6.74219 1.89844 6.48438 1.92188 6.25 1.99219C6.36719 2.17969 6.41406 2.41406 6.4375 2.625C6.4375 3.35156 5.82812 3.9375 5.125 3.9375C4.89062 3.9375 4.65625 3.89062 4.49219 3.77344C4.42188 4.00781 4.375 4.24219 4.375 4.5C4.375 5.95312 5.54688 7.125 7 7.125C8.45312 7.125 9.625 5.95312 9.625 4.5C9.625 3.07031 8.45312 1.89844 7 1.89844V1.875ZM13.6562 4.17188C12.3906 1.6875 9.85938 0 7 0C4.11719 0 1.58594 1.6875 0.320312 4.17188C0.273438 4.26562 0.25 4.38281 0.25 4.5C0.25 4.64062 0.273438 4.75781 0.320312 4.85156C1.58594 7.33594 4.11719 9 7 9C9.85938 9 12.3906 7.33594 13.6562 4.85156C13.7031 4.75781 13.7266 4.64062 13.7266 4.52344C13.7266 4.38281 13.7031 4.26562 13.6562 4.17188ZM7 7.875C4.67969 7.875 2.54688 6.58594 1.42188 4.5C2.54688 2.41406 4.67969 1.125 7 1.125C9.29688 1.125 11.4297 2.41406 12.5547 4.5C11.4297 6.58594 9.29688 7.875 7 7.875Z"
                    fill="#F17228"
                  />
                </svg>
              </div>
            </InputGroup>
            <Form.Text>
              <NavLink
                className="nav-link text-end text-dark p-0"
                to="/password-recovery"
              >
                Нууц үгээ мартсан?
              </NavLink>
            </Form.Text>
          </Form.Group>
        </Col>
        <Button value="НЭВТРЭХ" className="default" type={"submit"} />
        <p className="text-center my-3">эсвэл</p>
        <NavLink to="/register">
          <Button value="БҮРТГҮҮЛЭХ" className="active-button" />
        </NavLink>
      </Form>
    </div>
  );
};

export default Login;
