import React from "react";
import {Button, Icon, Row, Col, Card, CardTitle} from "react-materialize";
import "./GallerySpace.css";



const GallerySpace = props =>

<div>


<Button floating fab='vertical' icon='contact_phone' className="black pulse" large style={{bottom: '45px', right: '24px', fontSize: '40px'}}>
</Button>
<Row style={{Height: '400px'}}>

<Col s={4}>
<Card className='responsive-img card-panel hoverable'
  header={<CardTitle image="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620299/Gallery%20/for_boris_011.jpg">Card Title</CardTitle>}
  actions={[<a href='itempage'>Add to Cart</a>]}>
  <Button floating medium className='btn-floating halfway-fab waves-effect waves-light red' waves='light' icon='favorite_border' style={{ marginRight: 5, marginLeft: 55, marginTop: 5, marginBottom: 30}}/>
  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
</Card>

    	   
</Col>
<Col s={4}>

<Card className="responsive-img card-panel hoverable"
  header={<CardTitle image="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620373/Gallery%20/DSC00018.jpg" >Card Title</CardTitle>}
  actions={[<a href='itempage'>This is a Link</a>]}>
  <Button floating medium className='btn-floating halfway-fab waves-effect waves-light red' waves='light' icon='favorite_border' style={{ marginRight: 5, marginLeft: 55, marginTop: 5, marginBottom: 30}}/>
  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
</Card>

</Col>
<Col s={4}>
<Card className="responsive-img card-panel hoverable"
  header={<CardTitle image="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620286/Gallery%20/Picture_074.jpg" >Card Title</CardTitle>}
  actions={[<a href='itempage'>This is a Link</a>]}>
  <Button floating medium className='btn-floating halfway-fab waves-effect waves-light red' waves='light' icon='favorite_border' style={{ marginRight: 5, marginLeft: 55, marginTop: 5, marginBottom: 30}}/>
  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
</Card>

</Col>
  
</Row>


</div>;


export default GallerySpace;

// <div>
//       <img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620373/Gallery%20/DSC00018.jpg" />
//       <img className="galpics" alt="example" src="https://res.cloudinary.com/archcastanddesign/image/upload/v1522620286/Gallery%20/Picture_074.jpg" />
//    </div>