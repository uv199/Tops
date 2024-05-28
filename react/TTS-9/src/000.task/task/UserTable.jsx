import { Table } from "reactstrap";
import { Edit, Trash } from "lucide-react";

export default function UserTable({ editData, data, deleteData }) {
  return (
    <div className="pb-56">
      <Table striped>
        <thead>
          <tr>
            <th>Sr no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Date Of Birth</th>
            <th>Hobby</th>
            <th>City</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e?.userName?.firstName}</td>
                <td>{e?.userName?.lastName}</td>
                <td> {e?.email} </td>
                <td> {e?.gender} </td>
                <td> {e?.dateOfBirth} </td>
                <td> {e?.hobby} </td>
                <td> {e?.city} </td>
                <td> {e?.password} </td>
                <td>
                  <Edit onClick={() => editData(e, i)} role="button" />
                </td>
                <td>
                  <Trash role="button" onClick={() => deleteData(i)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
