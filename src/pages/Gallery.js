import React from "react";
import {Row, Col} from "react-materialize";
import Sidemenu from "../Components/Sidemenu";
import Breadcrumbs from "../Components/Breadcrumbs";
import GallerySpace from "../Components/GallerySpace";




const Gallery = () =>
<div>
	
	<Breadcrumbs />
	<div style={{ display: 'flex' }} >
	<Sidemenu />
	<div className='container'>
	<GallerySpace />
	</div>
	</div>
</div>;


export default Gallery;