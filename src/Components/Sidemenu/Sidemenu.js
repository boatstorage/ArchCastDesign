import React from "react";
import ReactDOM from "react-dom";
import {SideNav, SideNavItem, Button} from "react-materialize";

const Sidemenu = props =>

<SideNav
  style={{marginTop: '125px', paddingBottom: "100px"}}
  trigger={<Button>SIDE NAV DEMO</Button>}
  options={{ closeOnClick: false }}
  fixed={true}
  >
  <SideNavItem userView
    user={{
      name: 'John Doe',
      email: 'jdandturk@gmail.com'
    }}
  />
  <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
  <SideNavItem href='#!second'>Second Link</SideNavItem>
  <SideNavItem divider />
  <SideNavItem subheader>Subheader</SideNavItem>
  <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
</SideNav>;

export default Sidemenu;
