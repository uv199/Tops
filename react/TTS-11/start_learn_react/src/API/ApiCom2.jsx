import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";

export default function ApiCom2() {
  const [post, setPost] = useState({});
  const [ID, setID] = useState(1);
  const [callApi, setCallAPi] = useState(0);

  useEffect(() => {
    console.log("---", ID);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${ID}`)
      .then((res) => {
        setPost(res.data);
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log("err----", err.message);
      });
  }, [callApi]);

  function call(params) {
    console.log("---->");
    setCallAPi(callApi + 1);
    // setID(1);
  }

  return (
    <>
      <h1>API - COM {callApi}</h1>

      <input type="text" onChange={(e) => setID(e.target.value)} />
      <Button className="mt-2" onClick={() => call()} variant="primary">
        call APi
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{post.id}</td>
            <td>{post.userId}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
