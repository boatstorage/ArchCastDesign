import React from "react";
import { Breadcrumb, MenuItem } from 'react-materialize';
import {Affix} from "antd";
import "./Breadcrumbs.css";

const BC = props =>

<div>
<Affix offsetTop={75} >
 <Breadcrumb>
  <MenuItem>first</MenuItem>
  <MenuItem>second</MenuItem>
  <MenuItem>third</MenuItem>
</Breadcrumb>
</Affix>
</div>;

export default BC;