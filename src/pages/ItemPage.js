import React from "react";
import {Card, CardTitle} from "react-materialize";
import {Row, Col, Affix} from "antd";
import Container from "../Components/Container";
import Sider from "../Components/Sidemenu";
import Breadcrumbs from "../Components/Breadcrumbs";
import PicCard from "../Components/PicCard"





const Gallery = () =>
<div>
	
	<Breadcrumbs />
	<div style={{ display: 'flex' }}>
	<Sider />
	
	<div style={{ padding: '10px', height: '500px' }}>
    	<Row gutter={4}>
      <Col span={16}>
    
				<PicCard />
		</Col>
		
		<Col span={8}>

			<Container style={{borderColor: 'black', borderStyle: 'solid', height: '600px', width: '100%', marginRight: '10px'}}>
			</Container>
		</Col>
			
		</Row>
	</div>
	</div>
	

</div>;


export default Gallery;