import React from "react";
import {Row, Col} from "react-materialize"; 
import ImgBox from "../Components/ImgBox";
import Breadcrumbs from "../Components/Breadcrumbs";
import GallerySpace from "../Components/GallerySpace";




const Gallery = () =>
<div>
	<ImgBox src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620409/Gallery%20/Picture_086.jpg">
	</ImgBox>

	<Breadcrumbs />

	<GallerySpace />
	
</div>;


export default Gallery;