import React from "react";
import { NavbarBrand, Navbar } from "reactstrap";

const Header = (props) => {
    return (
        <Navbar color="dark" fixed="top" style={{marginBottom: 100}} >
            <NavbarBrand className="w-100 text-white text-center font-weight-bold">
                <h4>InShorts</h4>
            </NavbarBrand>
        </Navbar>
    )
}

export default Header;