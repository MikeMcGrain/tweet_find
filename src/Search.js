import React, { useState } from "react"
import InputGroup from "react-bootstrap/InputGroup"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function Search() {
  const [hashOrAt, setHashOrAt] = useState("#")
  return (
    <div>
      <InputGroup className="mb-3">
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title={hashOrAt}
          id="input-group-dropdown-1"
        >
          <Dropdown.Item onClick={() => setHashOrAt("#")}>#</Dropdown.Item>
          <Dropdown.Item onClick={() => setHashOrAt("@")}>@</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-describedby="basic-addon1" />
        <Button as={InputGroup.Append}>Search</Button>
      </InputGroup>
    </div>
  )
}
