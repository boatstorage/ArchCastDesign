import React from "react";
import {Card, CardTitle} from "react-materialize";
import "./ImgBox.css";


const ImgBox = props =>

<div>
<Card className='large'
  header={<CardTitle image={`${props.src}`}>Gallery</CardTitle>}>
 
</Card>

</div>;
export default ImgBox;

