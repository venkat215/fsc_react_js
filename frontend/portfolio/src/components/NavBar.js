import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

// import $ from "jquery"

import "./NavBar.css";

// const login_area = (logged_in) => {
//   if (logged_in) {
//     return (
//       <>
//         <NavDropdown
//           title="Username"
//           id="collasible-nav-dropdown"
//           alignRight="true"
//         >
//           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//         </NavDropdown>
//       </>
//     );
//   } else {
//     return (
//       <Link className="nav-link" to="/login">
//         Login
//       </Link>
//     );
//   }
// };

function NavBar(props) {
  let { pathname } = useLocation();

  return (
    <Navbar
      className="border-bottom"
      bg="dark"
      expand="lg"
      variant="dark"
      sticky="top"
    >
      {/* <Navbar.Brand href="/"><img src={logo}/></Navbar.Brand> */}
      <Navbar.Brand href="/">FULL STACK CRAFTS</Navbar.Brand>
      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
          <Link
            className={
              pathname === "/" ? "nav-link nav-link-current" : "nav-link"
            }
            to="/"
          >
            Home
          </Link>
          <Link
            className={
              pathname === "/about" ? "nav-link nav-link-current" : "nav-link"
            }
            to="/about"
          >
            About
          </Link>
          <Link
            className={
              pathname === "/contact" ? "nav-link nav-link-current" : "nav-link"
            }
            to="/contact"
          >
            Contact
          </Link>

          {/* {login_area(props.logged_in)} */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
