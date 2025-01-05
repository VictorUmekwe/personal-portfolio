import React from "react";
import { Button, Form } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Form className=" bg-light text-dark p-5 border shadow form-floating">
      <div className=" row">
        <Form.Group className=" mb-3 col-lg-6 w-100 " controlId="firstName">
          <Form.Label className=" text-start text-capitalize">
            First Name:
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className=" mb-3 col-lg-6  w-100 " controlId="lastName">
          <Form.Label className="text-start text-capitalize">
            Last Name:
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </div>
      <Form.Group className=" mb-3 col-lg-6 w-100" controlId="email">
        <Form.Label className=" text-start text-capitalize">
          Email Address:
        </Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group className=" mb-3 col-lg-6 w-100" controlId="textarea">
        <Form.Label className="text-start">
          Message:
        </Form.Label>
        <Form.Control as="textarea" rows={3}/>
      </Form.Group>
       <div className="text-center">

      <Button type="submit" variant="primary" className="mt-2">Submit</Button>
       </div>
    </Form>
  );
};

export default ContactForm;
