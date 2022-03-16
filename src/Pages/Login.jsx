import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Firebase from "Utils/firebase";

const auth = Firebase.auth();
const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const onLogin = async () => {
    try {
      if (email !== "" && pwd !== "") {
        await auth.signInWithEmailAndPassword(email, pwd);
        alert("Login success");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <Container
        style={{ display: "flex", flexDirection: "column", width: "50%" }}
      >
        <h4>Register</h4>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          placeholder="Password"
        />

        <input type="button" value="sign-up" onClick={onLogin} />
      </Container>
    </>
  );
};
export default Login;
