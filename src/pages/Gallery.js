import React from "react";
import {Row, Col} from "react-materialize";
import {Affix} from "antd";
import Sider from "../Components/Sidemenu";
import Breadcrumbs from "../Components/Breadcrumbs";
import GallerySpace from "../Components/GallerySpace";




const Gallery = () =>
<div>
	
	<Breadcrumbs />
	<div style={{ display: 'flex' }}>
	<Sider />
	<GallerySpace />
	</div>
</div>;


export default Gallery;