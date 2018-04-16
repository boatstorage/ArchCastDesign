import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";
import { Avatar, Badge, Input } from 'antd';

import "./Navbar.css";

const Search = Input.Search;

const Topnav = props =>


	<Navbar className="nav" brand='Arch Cast & Design' right>
		<NavItem className="item" href='search'><span>
			<div>
    		<Search
      			placeholder="Search entire store"
      			onSearch={value => console.log(value)}
      			style={{ width: 135 }}
    		/> 
  			</div>


		</span></NavItem>
  		<NavItem className="item" href='remodeling'><span>REMODELING</span></NavItem>
  		<NavItem className="item" href='gallery'><span>GALLERY</span></NavItem>
  		<NavItem className="item" href='home'><span>CART</span></NavItem>
  		<NavItem className="item" href='signin'><span>
  			<div>
			    <span style={{ marginRight: 24 }}>
			      <Badge count={2}><Avatar shape="square" icon="user" /></Badge>
			    </span>
			  </div>
  		</span></NavItem>

	</Navbar>;

 

export default Topnav;





  