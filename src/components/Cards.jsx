import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Card from './Card/Card';
import styled from 'styled-components';

export const CardFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: column;
    align-content: center;
`
function Cards(){
    const [imgs,setImgs]= useState([]);
    async function fetchImage(){
        const request = await axios.get(`${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_NASA_API_Key}&count=8`);
        console.log(request.data);
        setImgs(request.data);
        return request;
    }
    useEffect(()=>{
        fetchImage();
    },[])
    
    return(
        <>
            <CardFlex>
            {imgs.map((img,key)=>{
                    return(
                        <Card url={img.url} key={key} alt={img.title} mediaType={img.media_type} date={img.date} owner={img.copyright} caption={img.explanation}/>
                    )
                })
            }
            </CardFlex>
        </>
    )
}

export default Cards
