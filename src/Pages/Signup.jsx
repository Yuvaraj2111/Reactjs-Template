import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Firebase from "Utils/firebase";

const auth = Firebase.auth();
const Signup = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const onHandleSignup = async () => {
    if (pwd !== cpwd) {
      alert("password mismatch");
    }
    try {
      if (email !== "" && pwd !== "") {
        await auth.createUserWithEmailAndPassword(email, pwd);
      }
    } catch (error) {
      alert(error);
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
        <input
          type="password"
          value={cpwd}
          onChange={(e) => setCpwd(e.target.value)}
          placeholder="Confirm Password"
        />
        <input type="button" value="sign-up" onClick={onHandleSignup} />
      </Container>
    </>
  );
};
export default Signup;
