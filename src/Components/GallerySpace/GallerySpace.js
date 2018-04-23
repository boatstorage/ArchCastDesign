import React from "react";
import { Card, Col, Row } from 'antd';
import {Button, Icon} from "react-materialize";
import "./GallerySpace.css";


const { Meta } = Card;

const GallerySpace = props =>

<div>

<Row style={{height: '50px' }}>
<Col span={24}>
<Card style={{width: '100%', height: '50px'}} />
  <p> MOULDING </p>

</Col>

</Row>

<Row style={{ marginTop: '50px' }}>

<Col span={24}>
<div>
<Button floating fab='vertical' icon='contact_phone' className='contact' large style={{bottom: '45px', right: '24px', fontSize: '40px'}}>
</Button>
</div>


  <div style={{ background: '#ECECEC', padding: '50px', height: '500px' }}>
    <Row gutter={16}>
      <Col span={8}>
     <Card
	    hoverable
	    style={{ width: 300, height: 450 }}
	    cover={<a href='itempage'> <img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620299/Gallery%20/for_boris_011.jpg" onclick='itempage'/></a>}>
    	<div style={{ display: 'flex'}}>
      <Meta
	      title="Wall Moulding #002"
	      description="$200 "/>
      
      <Button floating medium className='red' waves='light' icon='favorite_border' style={{ marginRight: 5, marginLeft: 55, marginTop: 5, marginBottom: 30}}/>

      </div>
  		</Card>
      </Col>
      <Col span={8}>
        <Card
		    hoverable
		    style={{ width: 300, height: 450 }}
		    cover={<img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620373/Gallery%20/DSC00018.jpg" />}>
   		 <Meta
		      title="Europe Street beat"
		      description="www.instagram.com"/>
  		</Card>
      </Col>
      <Col span={8}>
        <Card
		    hoverable
		    style={{ width: 300, height: 450}}
		    cover={<img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620286/Gallery%20/Picture_074.jpg" />}>
	    <Meta
	      title="Europe Street beat"
	      description="www.instagram.com"/>
  		</Card>
      </Col>
    </Row>
    </div>

 </Col>

<Col span={24} >

  

  <div style={{ background: '#ECECEC', padding: '50px', height: '500px' }}>
 
    <Row gutter={16}>
      <Col span={8}>
     <Card
	    hoverable
	    style={{ width: 300 }}
	    cover={<img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620299/Gallery%20/for_boris_011.jpg" />}>
    	<Meta
	      title="Europe Street beat"
	      description="www.instagram.com"/>
  		</Card>
      </Col>
      <Col span={8}>
        <Card
		    hoverable
		    style={{ width: 300 }}
		    cover={<img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620373/Gallery%20/DSC00018.jpg" />}>
   		 <Meta
		      title="Europe Street beat"
		      description="www.instagram.com"/>
  		</Card>
      </Col>
      <Col span={8}>
        <Card
		    hoverable
		    style={{ width: 300 }}
		    cover={<img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620286/Gallery%20/Picture_074.jpg" />}>
	    <Meta
	      title="Europe Street beat"
	      description="www.instagram.com"/>
  		</Card>
      </Col>
    </Row>
    </div>

 </Col>

<Col span={24} >



  <div style={{ background: '#ECECEC', padding: '50px', height: '500px' }}>
    <Row gutter={16}>
      <Col span={8}>
     <Card
	    hoverable
	    style={{ width: 300 }}
	    cover={<img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620299/Gallery%20/for_boris_011.jpg" />}>
    	<Meta
	      title="Europe Street beat"
	      description="www.instagram.com"/>
  		</Card>
      </Col>
      <Col span={8}>
        <Card
		    hoverable
		    style={{ width: 300 }}
		    cover={<img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620373/Gallery%20/DSC00018.jpg" />}>
   		 <Meta
		      title="Europe Street beat"
		      description="www.instagram.com"/>
  		</Card>
      </Col>
      <Col span={8}>
        <Card
		    hoverable
		    style={{ width: 300 }}
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