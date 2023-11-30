import React from "react";

export default function Multiple() {
  return (
    <>
      <Form>
        <Row>
          <Col md={6}></Col>
          <Col md={6}></Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input id="exampleCity" name="city" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input id="exampleState" name="state" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input id="exampleZip" name="zip" />
            </FormGroup>
          </Col>
        </Row>
        <Button>Sign in</Button>
      </Form>
    </>
  );
}
