import React,{useState} from 'react'
import "./Card.css"
import {FiShare} from "react-icons/fi"
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
function Card({url,alt,mediaType,date,owner,caption}) {
    const [Like, setLike] = useState(false)
    let media;


    if(mediaType==='image'){
        media=<img src={url} width="400px"className='feed-img'  />;
    }else{
        return(
            <div></div>
        );
    }
    return(
        <div className='card'>
            {media}
            <strong>{owner?owner:"NASA"}</strong>
            <span>
                
                {Like?<AiFillHeart size='1.5rem' />:<AiOutlineHeart size='1.5rem'/> }
               
                
                
                <FiShare size='1.5em'/>
            </span>
            <p>{alt}</p>

            <span>{date}</span>
        </div>
        
    )
        
    

}
//10th februrary 2022 Submission Deadline extended

export default Card
