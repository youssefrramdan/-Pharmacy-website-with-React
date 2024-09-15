import React, { useState } from "react";
import { Tab, Tabs, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
  const [key, setKey] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerRepeatPassword, setRegisterRepeatPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3005/users");
    const data = await response.json();
    const user = data.find(
      (u) => u.email === loginEmail && u.password === loginPassword
    );
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      alert(`Welcome ${user.name}!`);
      navigate("/"); 
    } else {
      alert("Invalid credentials");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerPassword !== registerRepeatPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch("http://localhost:3005/users");
    const data = await response.json();
    const userExists = data.find((u) => u.email === registerEmail);

    if (userExists) {
      alert("User already exists");
      return;
    }

    const newUser = {
      id: data.length + 1,
      name: registerName,
      email: registerEmail,
      password: registerPassword,
    };

    await fetch("http://localhost:3005/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    alert("Registration successful, please login.");
    setKey("login");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >
        <Card.Body>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            variant="pills"
            style={{ justifyContent: "center" }}
          >
            <Tab eventKey="login" title="Login" tabClassName="custom-tab">
              <Form onSubmit={handleLogin}>
                <Card.Title
                  className="text-center text-primary"
                  style={{
                    fontSize: "20px",
                    marginBottom: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Card.Title>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => setLoginEmail(e.target.value)}
                    value={loginEmail}
                    type="email"
                    placeholder="Email address"
                    style={{
                      borderRadius: "8px",
                      padding: "8px",
                      fontSize: "14px",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    onChange={(e) => setLoginPassword(e.target.value)}
                    value={loginPassword}
                    type="password"
                    placeholder="Password"
                    style={{
                      borderRadius: "8px",
                      padding: "8px",
                      fontSize: "14px",
                    }}
                  />
                </Form.Group>

                <div className="d-flex justify-content-between mb-3">
                  <a
                    href="#!"
                    className="text-primary"
                    style={{ fontSize: "14px" }}
                  >
                    Forgot password?
                  </a>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{
                    borderRadius: "8px",
                    padding: "8px",
                    fontSize: "14px",
                  }}
                >
                  Sign in
                </Button>

                <div className="text-center mt-3">
                  <p>
                    Not a member?{" "}
                    <a href="#" className="text-primary" onClick={() => setKey("register")}>
                      Register
                    </a>
                  </p>
                </div>
              </Form>
            </Tab>
            <Tab eventKey="register" title="Register" tabClassName="custom-tab">
              <Form onSubmit={handleRegister}>
                <Card.Title
                  className="text-center text-primary"
                  style={{
                    fontSize: "20px",
                    marginBottom: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Register
                </Card.Title>

                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    onChange={(e) => setRegisterName(e.target.value)}
                    value={registerName}
                    type="text"
                    placeholder="Full Name"
                    style={{
                      borderRadius: "8px",
                      padding: "8px",
                      fontSize: "14px",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    value={registerEmail}
                    type="email"
                    placeholder="Email address"
                    style={{
                      borderRadius: "8px",
                      padding: "8px",
                      fontSize: "14px",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    value={registerPassword}
                    type="password"
                    placeholder="Password"
                    style={{
                      borderRadius: "8px",
                      padding: "8px",
                      fontSize: "14px",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
                  <Form.Control
                    onChange={(e) => setRegisterRepeatPassword(e.target.value)}
                    value={registerRepeatPassword}
                    type="password"
                    placeholder="Repeat password"
                    style={{
                      borderRadius: "8px",
                      padding: "8px",
                      fontSize: "14px",
                    }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{
                    borderRadius: "8px",
                    padding: "8px",
                    fontSize: "14px",
                  }}
                >
                  Register
                </Button>

                <div className="text-center mt-3">
                  <p>
                    Already have an account?{" "}
                    <a href="#" className="text-primary" onClick={() => setKey("login")}>
                      Sign In
                    </a>
                  </p>
                </div>
              </Form>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginRegister;
