import React from "react";
import { Card, Col, Row} from 'antd';
import "./GallerySpace.css";


const { Meta } = Card;

const GallerySpace = props =>

<div>
<Row style={{ marginTop: '50px' }}>

<Col span={20} push={2} >


  <div style={{ background: '#ECECEC', padding: '50px', height: '500px' }}>
    <Row gutter={16}>
      <Col span={8}>
     <Card
	    hoverable
     
	    style={{ width: 350, height: 450 }}
	    cover={<img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620299/Gallery%20/for_boris_011.jpg" />}>
    	<Meta
	      title="Europe Street beat"
	      description="www.instagram.com"/>
  		</Card>
      </Col>
      <Col span={8}>
        <Card
		    hoverable
		    style={{ width: 350, height: 450 }}
		    cover={<img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620373/Gallery%20/DSC00018.jpg" />}>
   		 <Meta
		      title="Europe Street beat"
		      description="www.instagram.com"/>
  		</Card>
      </Col>
      <Col span={8}>
        <Card
		    hoverable
		    style={{ width: 350, height: 450}}
		    cover={<img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620286/Gallery%20/Picture_074.jpg" />}>
	    <Meta
	      title="Europe Street beat"
	      description="www.instagram.com"/>
  		</Card>
      </Col>
    </Row>
    </div>

 </Col>

<Col span={20} push={2} >

  

  <div style={{ background: '#ECECEC', padding: '50px', height: '500px' }}>
 
    <Row gutter={16}>
      <Col span={8}>
     <Card
	    hoverable
	    style={{ width: 350 }}
	    cover={<img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620299/Gallery%20/for_boris_011.jpg" />}>
    	<Meta
	      title="Europe Street beat"
	      description="www.instagram.com"/>
  		</Card>
      </Col>
      <Col span={8}>
        <Card
		    hoverable
		    style={{ width: 350 }}
		    cover={<img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620373/Gallery%20/DSC00018.jpg" />}>
   		 <Meta
		      title="Europe Street beat"
		      description="www.instagram.com"/>
  		</Card>
      </Col>
      <Col span={8}>
        <Card
		    hoverable
		    style={{ width: 350 }}
		    cover={<img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620286/Gallery%20/Picture_074.jpg" />}>
	    <Meta
	      title="Europe Street beat"
	      description="www.instagram.com"/>
  		</Card>
      </Col>
    </Row>
    </div>

 </Col>

<Col span={20} push ={2} >



  <div style={{ background: '#ECECEC', padding: '50px', height: '500px' }}>
    <Row gutter={16}>
      <Col span={8}>
     <Card
	    hoverable
	    style={{ width: 350 }}
	    cover={<img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620299/Gallery%20/for_boris_011.jpg" />}>
    	<Meta
	      title="Europe Street beat"
	      description="www.instagram.com"/>
  		</Card>
      </Col>
      <Col span={8}>
        <Card
		    hoverable
		    style={{ width: 350 }}
		    cover={<img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620373/Gallery%20/DSC00018.jpg" />}>
   		 <Meta
		      title="Europe Street beat"
		      description="www.instagram.com"/>
  		</Card>
      </Col>
      <Col span={8}>
        <Card
		    hoverable
		    style={{ width: 350 }}
		    cover={<img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620286/Gallery%20/Picture_074.jpg" />}>
	    <Meta
	      title="Europe Street beat"
	      description="www.instagram.com"/>
  		</Card>
      </Col>
    </Row>
    </div>

 </Col>
</Row>



</div>;


export default GallerySpace;