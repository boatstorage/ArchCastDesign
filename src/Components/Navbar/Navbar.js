import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";
import "./Navbar.css";

const Topnav = props =>

	<Navbar className="nav" brand='Arch Cast & Design' right>
  		<NavItem className="item" href='home'><span>REMODELING</span></NavItem>
  		<NavItem className="item" href='gallery'><span>GALLERY</span></NavItem>
  		<NavItem className="item" href='home'><span>CART</span></NavItem>
	</Navbar>;
 

export default Topnav;