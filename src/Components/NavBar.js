import React, { useState } from 'react';
import { Row, Col, Button, Card, CardHeader, CardFooter, CardBody, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Table } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./css/navbar.css";

function NavBar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Col>
      <Navbar color="white" light>
            <NavbarBrand class="navbar" href="/">{/*<img src={require("./logo.JPG")}/>*/} unravel </NavbarBrand>
            <img src={require("./logo.JPG")}/>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/Home">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/Fact">Fun Fact</Link>
            </NavItem>
            <NavItem>
                <Link to="/Scrape">Unravel</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>


    </Col>
  );
}

export default NavBar
