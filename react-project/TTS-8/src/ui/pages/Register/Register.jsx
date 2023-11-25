import React from "react";
import { Label } from "reactstrap";
const intialData = {
  name: "",
  email: "",
  number: "",
  age: "",
  password: "",
  confirmPassword: "",
};

const intialAdd = {
  add: "",
  city: "",
  state: "",
  pinCode: "",
};
const InputCom = ({ feild, type }) => {
  return (
    <FormGroup>
      <Label for={feild}>Name</Label>
      <Input
        id={feild}
        placeholder={`Enter your ${feild}`}
        type={"text" || type}
      />
    </FormGroup>
  );
};

export default function Register() {
  const [user, setUser] = useState(intialData);
  const [address, setAddress] = useState(intialAdd);
  return (
    <>
      <Form>
        {/* <InputCom feild={"name"} /> */}
        <FormGroup>
          <Label for="name">Name</Label>
          <Input id="name" placeholder="Enter your name" type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </FormGroup>
        <FormGroup>
          <Label for="number">Contact Number</Label>
          <Input
            id="number"
            placeholder="Enter your contact number"
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input id="age" placeholder="Enter your age" type="number" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Confirm Password</Label>
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input id="exampleText" name="text" type="textarea" />
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Input name="radio1" type="radio" />{" "}
            <Label check>
              Option one is this and that—be sure to include why it‘s great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" />{" "}
            <Label check>
              Option two can be something else and selecting it will deselect
              option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Input disabled name="radio1" type="radio" />{" "}
            <Label check>Option three is disabled</Label>
          </FormGroup>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  );
}
