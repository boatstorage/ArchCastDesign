import React from "react";
import {Row, Col, Card, CardTitle} from "react-materialize";
import Sider from "../Sidemenu";
// import PicCard from "../Components/PicCard";
// import "./Gallery.css";


const GallerySpace = props =>

<div>
<Row>
<Col s={12}  m={2}>

	<Sider />
</Col>
	
<Col s={12} m={10}>
<Row>
	<Col s={12} m={4}>
		<Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
    		title="Card Title"
    		reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
    		<p><a href="#">This is a link</a></p>
		</Card>

	</Col>
	<Col s={12} m={4}>
	<Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
    		title="Card Title"
    		reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
    		<p><a href="#">This is a link</a></p>
		</Card>
	</Col>
	<Col s={12} m={4}>
	<Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
    		title="Card Title"
    		reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
    		<p><a href="#">This is a link</a></p>
		</Card>
	</Col>
</Row>

<Row>
	<Col s={12} m={4}>
		<Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
    		title="Card Title"
    		reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
    		<p><a href="#">This is a link</a></p>
		</Card>

	</Col>
	<Col s={12} m={4}>
	<Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
    		title="Card Title"
    		reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
    		<p><a href="#">This is a link</a></p>
		</Card>
	</Col>
	<Col s={12} m={4}>
	<Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
    		title="Card Title"
    		reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
    		<p><a href="#">This is a link</a></p>
		</Card>
	</Col>
</Row>
</Col>
</Row>
</div>;


export default GallerySpace;