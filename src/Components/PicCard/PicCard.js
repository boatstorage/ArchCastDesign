import React from "react";
import  {Card, CardTitle} from "react-materialize";
import "./PicCard.css";


const PicCard = props =>

<Card className='small'
	style={{ width: '80%', height: '80%', marginLeft: 10, marginRight: 10}}
  	header={<CardTitle image='https://res.cloudinary.com/archcastanddesign/image/upload/v1522620299/Gallery%20/for_boris_011.jpg'></CardTitle>}
  	actions={[<a href='#'>This is a Link</a>]}>
  	
</Card>
	


export default PicCard;