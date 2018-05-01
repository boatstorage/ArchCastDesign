import React from "react";
import { Breadcrumb, MenuItem } from 'react-materialize';
import "./Breadcrumbs.css";

const BC = props =>

<div className="navbar-fixed">
 <Breadcrumb>
  <MenuItem>first</MenuItem>
  <MenuItem>second</MenuItem>
  <MenuItem>third</MenuItem>
</Breadcrumb>

</div>;

export default BC;