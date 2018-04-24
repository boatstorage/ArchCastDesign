import React from "react";
import {Card, CardTitle} from "react-materialize";
import {Row, Col, Affix} from "antd";
import Container from "../Components/Container";
import Sider from "../Components/Sidemenu";
import Breadcrumbs from "../Components/Breadcrumbs";
import PicCard from "../Components/PicCard"
import WrappedDemo from "../Components/SideForm";





const Gallery = () =>
<div>
	
	<Breadcrumbs />
	<div style={{ display: 'flex' }}>
	<Sider />
	
	<div style={{ padding: '10px', height: '500px' }}>
    	<Row gutter={4}>
      <Col span={14}>
    
				<PicCard style={{width: '100%'}}/>
		</Col>
		
		<Col span={10}>

			<Container style={{ height: '600px', width: '100%', marginLeft: '10px', marginRight: '10px'}}>
			<div>
   				<WrappedDemo />
			</div>
			</Container>
		</Col>
			
		</Row>
	</div>
	</div>
	

</div>;


export default Gallery;