import React from "react";
import "./index.css";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function Contact() {
  return (
    <section className="contact">
      <div className="layout">
        <div className="text-center">
          <h1 className="section-title">Contact Us Layout</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            accumsan venenatis lectus sed sollicitudin. Duis in odio ex. Sed
            elementum varius enim. In vel tincidunt lorem. Donec gravida felis
            vitae ipsum pharetra maximus.
          </p>
        </div>
        <div className="grid-8 form">
          <form
            action="php/email.php"
            method="post"
            id="contact_form"
            name="contactForm"
          >
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
            </Form>
            <div className="form-group">
              <div
                style={{ display: "none" }}
                className="success"
                id="mail_success"
              >
                Your message has been sent successfully.
              </div>
              <div style={{ display: "none" }} className="error" id="mail_fail">
                Sorry, error occured this time sending your message.
              </div>
            </div>
            <div id="submit" className="form-group grid-12">
              <input
                type="submit"
                value="send"
                className="btn  btn-lg costom-btn"
                id="send_message"
              />
            </div>
          </form>
        </div>
        <div className="grid-12">
          <div className="icon-text">
            <span>find us on</span>
          </div>
          <div className="icon-holder">
            <ul>
              <li>
                <a target="_blank" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <i className="fa fa-behance"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
