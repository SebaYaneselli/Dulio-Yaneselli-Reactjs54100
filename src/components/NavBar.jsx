import React from "react";
import CartWidget from "./CartWidget";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const NavBar = () => {
    return (
        <Navbar bg="body-tertiary" expand="lg" id="navigBar" data-bs-theme="dark">
            <Navbar.Brand><Nav.Link to="/" as={NavLink}>TheGlam</Nav.Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/productos/Bolsos" as={NavLink}>Bolsos</Nav.Link>
                    <Nav.Link to="/productos/Carteras" as={NavLink}>Carteras</Nav.Link>
                    <Nav.Link to="/productos/Colleción Europea" as={NavLink}>Colleción Europea</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl id="barraDeBusqueda" type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
                    <Button variant="outline-success">🔎</Button>
                </Form>
                <Nav.Link to="/cart" as={NavLink}><CartWidget /></Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
