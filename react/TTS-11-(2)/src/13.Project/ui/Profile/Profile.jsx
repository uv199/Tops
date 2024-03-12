import { LogOut } from "lucide-react";
import React from "react";
import { Button } from "reactstrap";

export default function Profile() {
  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <div
          className="d-flex justify-content-center rounded-2 "
          style={{ backgroundColor: "#FFE8E8" }}
        >
          <div
            style={{ backgroundColor: "#ffff" }}
            className="p-4 pt-1 w-25 mt-5 mb-5 border rounded-2"
          >
            <h1 className="text-center">User Profile</h1>
            <hr />
            Email : example@gmail.com
            <br />
            password: 1234
            <Button className="mt-3 w-100" color="danger">
              Logout <LogOut />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
