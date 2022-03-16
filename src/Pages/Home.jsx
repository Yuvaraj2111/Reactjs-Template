import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import Firebase from "../Utils/firebase";

const db = Firebase.firestore();

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let temp = [];
    await db
      .collection("user")
      .get()
      .then((e) => {
        e.forEach((item) => {
          temp.push(item.data());
        });
        setData(temp);
      });
  }

  return (
    <>
      {data.map((e, i) => {
        return (
          <Card key={i}>
            <Card.Text>{e.id}</Card.Text>
            <Card.Text>{e.name}</Card.Text>
            <Card.Text>{e.email}</Card.Text>
            <Card.Text>{e.mobile}</Card.Text>
          </Card>
        );
      })}
    </>
  );
};

export default HomePage;
