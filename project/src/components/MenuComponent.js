import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import "../css/menu.css";
import "../css/App.css";
import OffCanvas from "./Canvas";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import React from "react";
import MenuInfo from "./NavbarMenuInfo";
import { useUser } from "../context/UserContext";

function MenuComponent() {
  const [user, setUser] = useUser();

  const handle = (e) => {
    if (e === "/login") {
      setUser(null);
      localStorage.clear();
    }
  }

  return (
    <Navbar expand="lg">
      <Container>
        <MenuInfo />
        <div className="searchAndBusket order-1 d-lg-none">
          <SearchBar />
          <OffCanvas />
        </div>
        <Navbar.Brand as={NavLink} to="/" className="ps-4 ps-md-5 ps-lg-0">
          <div className="logo order-0">
            <img src="/icons/food.svg" alt="" width={30} height={35} />
            <div className="food">Food Delivery</div>
          </div>
        </Navbar.Brand>
        <Navbar id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <div className="tses">
              <NavLink className="ts nav-link" exact to="/">
                НҮҮР
              </NavLink>
              <NavLink className="ts nav-link" to="/menu">
                ХООЛНЫ ЦЭС
              </NavLink>
              <NavLink className="ts nav-link" to="/area">
                ХҮРГЭЛТИЙН БҮС
              </NavLink>
            </div>
            <div id="p"></div>
          </Nav>
          <div className="loginBusket">
            <SearchBar />
            <OffCanvas />
            <div className="login">
             
               { user ? (
              
             <Dropdown onSelect={handle}>
             <Dropdown.Toggle variant="outline-none" id="dropdown-basic">
               {user.userName}
             </Dropdown.Toggle>

             <Dropdown.Menu>
               <Dropdown.Item href="#/action-1">Хэрэглэгчийн мэдээлэл</Dropdown.Item>
               <Dropdown.Item href="#/action-2">Сагс</Dropdown.Item>
               <Dropdown.Item href="/login">Гарах</Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>
               ) 
                  : (
                    <NavLink to="/login">
                    <img src="/icons/usermenu.svg" alt="" width={20} height={25} />
                    <Button
                    variant="outline-none"
                    className="signin text-orange fw-500"
                  >
                    Нэвтрэх
                  </Button>
                  </NavLink>
                  )
               }  
             
            </div>
          </div>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default MenuComponent;
