import { Eye } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Table } from "reactstrap";
import ProfileModal from "./User/ProfileModal";

const users = [
  { name: "urvish", age: 23, city: "surat" },
  { name: "saif", age: 22, city: "surat" },
  { name: "nimesh", age: 20, city: "surat" },
];

export default function Contact() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const toggle = () => setModal(!modal);

  const showData = (e) => {
    toggle();
    setSearchParams(e);
  };
  
  for (let i = 0; i < 1000000000; i++) {}

  return (
    <>
      <ProfileModal toggle={toggle} modal={modal} />
      <Table className="me-5 ms-5" striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map?.((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.age}</td>
                <td>{e?.city}</td>
                <td>
                  <Eye
                    onClick={() => showData(e)}
                    role="button"
                    color="#9ba0a8"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
