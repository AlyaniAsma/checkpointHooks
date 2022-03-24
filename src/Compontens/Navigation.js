import { Container, Nav, Navbar } from "react-bootstrap";
import React from "react";
import ReactSearchBox from "react-search-box";

export default function Navigation() {
  const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Disney Movies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#addfilm">Add Film</Nav.Link>
            <Nav.Link href="#movieslist">Movies List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <ReactSearchBox
        placeholder="Search Film"
        value="Doe"
        data={data}
        callback={(record) => console.log(record)}
      /> */}
    </div>
  );
}
