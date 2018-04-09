import React from "react";
import  {Card, CardTitle} from "react-materialize";
import "./PicCard.css";


const PicCard = props =>

<Card header={<CardTitle reveal image={`${props.img}`} waves='light'/>}
    title={`${props.title}`}
    reveal={<p>{`${props.desc}`}</p>}>
    <p></p>
</Card>;
	


export default PicCard;