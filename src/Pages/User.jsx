import React, { useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";

import Firebase from "../Utils/firebase";

const db = Firebase.firestore();

const User = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const onSubmit = async () => {
    try {
      const docRef = db.collection("user").doc(id);
      await docRef.set({
        name: name,
        email: email,
        id: id,
        mobile: mobile,
        updated_on: new Date(),
      });
      alert(email, "User data uploaded successfully");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <h1>Create user</h1>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
        }}
      >
        <input
          type="text"
          placeholder="user id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="user name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Password"
        />
        <Button onClick={onSubmit}>Create user</Button>
      </Container>
    </Container>
  );
};
export default User;
