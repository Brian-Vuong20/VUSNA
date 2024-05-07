import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/esm/FormGroup";

const MemberRegister = () => {
  const [showInput1, setShowInput1] = useState(true);
  const [showInput2, setShowInput2] = useState(false);
  const [showInput3, setShowInput3] = useState(false);
  const handleSelectChange = (e, setShowInput) => {
    setShowInput(e.target.value === "Other");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="Fullname">
          <Form.Label>Fullname</Form.Label>
          <Form.Control type="text" placeholder="Enter fullname" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Mobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="mobile" placeholder="Enter mobile number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Student">
          <Form.Label>Are you Student or Staff</Form.Label>
          <Form.Select name="Student1">
            <option value="1">Student</option>
            <option value="2">Staff</option>
          </Form.Select>
        </Form.Group>
        <Form.Label>What year of study are currently completing?</Form.Label>
        <Form.Group className="mb-3" controlId="Student">
          {["radio"].map((type) => (
            <div key={`reverse-${type}`} className="mb-3">
              <Form.Check
                label="1st Year"
                name="group1"
                type={type}
                id={`reverse-${type}-1`}
              />
              <Form.Check
                label="2nd Year"
                name="group1"
                type={type}
                id={`reverse-${type}-2`}
              />
              <Form.Check
                name="group1"
                label="3rd Year"
                type={type}
                id={`reverse-${type}-3`}
              />
              <Form.Check
                name="group1"
                label="4th Year"
                type={type}
                id={`reverse-${type}-4`}
              />
              <Form.Check
                name="group1"
                label="Other"
                type={type}
                id={`reverse-${type}-5`}
              />
              <Form.Group controlId="other year">
                <Form.Control type="text" placeholder="Enter answer" />
              </Form.Group>
            </div>
          ))}
        </Form.Group>
        <Form.Group className="mb-3" controlId="Pronouns">
          <Form.Label>Preferred pronoun</Form.Label>
          {["radio"].map((type) => (
            <div key={`reverse-${type}`} className="mb-3">
              <Form.Check
                label="SHE/HER"
                name="group2"
                type={type}
                id={`p-${type}-1`}
              />
              <Form.Check
                label="SHE/THEY"
                name="group2"
                type={type}
                id={`p-${type}-2`}
              />
              <Form.Check
                name="group2"
                label="HE/HIM"
                type={type}
                id={`p-${type}-3`}
              />
              <Form.Check
                name="group2"
                label="HE/THEY"
                type={type}
                id={`p-${type}-4`}
              />
              <Form.Check
                name="group2"
                label="THEY/THEM"
                type={type}
                id={`p-${type}-5`}
              />
              <Form.Check
                name="group2"
                label="ZE/ZIR"
                type={type}
                id={`p-${type}-6`}
              />
              <Form.Check
                name="group2"
                label="Prefer not to say"
                type={type}
                id={`p-${type}-7`}
              />
              <Form.Check
                name="group2"
                label="Other"
                type={type}
                id={`p-${type}-8`}
              />
              <Form.Group controlId="other pronoun">
                <Form.Control type="text" placeholder="Enter answer" />
              </Form.Group>
            </div>
          ))}
        </Form.Group>
        <Form.Group className="mb-3" controlId="Allergy">
          <Form.Label>Preferred pronoun</Form.Label>
          {["radio"].map((type) => (
            <div key={`reverse-${type}`} className="mb-3">
              <Form.Check
                label="None"
                name="group3"
                type={type}
                id={`a-${type}-1`}
              />
              <Form.Check
                label="Vegan"
                name="group3"
                type={type}
                id={`a-${type}-2`}
              />
              <Form.Check
                name="group3"
                label="Vegetarian"
                type={type}
                id={`a-${type}-3`}
              />
              <Form.Check
                name="group3"
                label="Allergy"
                type={type}
                id={`a-${type}-4`}
              />
              <Form.Check
                name="group3"
                label="Other"
                type={type}
                id={`a-${type}-5`}
              />
              <Form.Group controlId="other allergy">
                <Form.Control type="text" placeholder="Enter answer" />
              </Form.Group>
            </div>
          ))}
        </Form.Group>

        <Form.Group className="mb-3" controlId="Major">
          <Form.Label>What are you studying ?</Form.Label>
          <Form.Control type="text" placeholder="Enter your answer" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MemberRegister;
