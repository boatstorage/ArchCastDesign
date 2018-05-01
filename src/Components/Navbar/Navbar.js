import  React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Icon, Badge, Chip, Input } from "react-materialize";
import "./Navbar.css";


const Topnav = () =>


	<Navbar className="nav" brand='Arch Cast & Design' right fixed={ true }>
		<div className="dropdown">
		<span style={{ marginLeft: 500 }}><NavItem className="itemright" href='gallery '>GALLERY</NavItem></span>
		<div className="dropdown-content">
		<ul>
		<li>Remodeling</li>
		<li>Moulding</li>
		</ul>
	 </div>
</div>
		<NavItem className="item" href='search'><span>
			<div>
    		<Input
      			placeholder="Search entire store"
      			s={4}
      			label="Search entire store"
      			
      			
    		/> 
  			</div>


		</span></NavItem>
  		<NavItem className="item" href='home'><span>CART  <Badge newIcon>4</Badge></span></NavItem>
  		<NavItem className="item" href='signin'>

			    <span style={{ marginRight: 24 }}> 
			   
      			SIGN IN
			    </span>
			
  		</NavItem>

	</Navbar>

;

export default Topnav;





  