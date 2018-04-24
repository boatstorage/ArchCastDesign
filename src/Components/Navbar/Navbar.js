import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";
import {Icon, Affix} from 'antd';
import { Avatar, Badge, Input } from 'antd';

import "./Navbar.css";

const Search = Input.Search;

const Topnav = props =>

<Affix>
	<Navbar className="nav" brand='Arch Cast & Design' right>
		<NavItem className="itemright" href='gallery '><span style={{ marginLeft: 1000 }}>GALLERY</span></NavItem>
		<NavItem className="item" href='search'><span>
			<div>
    		<Search
      			placeholder="Search entire store"
      			onSearch={value => console.log(value)}
      			style={{ width: 135 }}
    		/> 
  			</div>


		</span></NavItem>
  		<NavItem className="item" href='home'><span>CART <Badge count={2} className="badge"><Icon type="shopping-cart" /></Badge></span></NavItem>
  		<NavItem className="item" href='signin'><span>
  			<div>
			    <span style={{ marginRight: 24 }}> SIGN IN
			    </span>
			  </div>
  		</span></NavItem>

	</Navbar>

 </Affix>;

export default Topnav;





  