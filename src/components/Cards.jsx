import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Card from './Card/Card';
import styled from 'styled-components';

import Loading from './Loading/Loading';
export const CardFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: column;
    align-content: center;
`
function Cards(){
    const [imgs,setImgs]= useState([]);
    const [loading,setLoading]= useState(true);
    async function fetchImage(){
        try{
            const request = await axios.get(`${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_NASA_API_Key}&count=8`);
            console.log(request.data);
            setImgs(request.data);
        }catch(error){
            console.log(error)
        }finally{
            setTimeout(() => {
                setLoading(false);
            },2000);
           
        }
        
    }
    useEffect(()=>{
        fetchImage();
    },[])
  
    if(loading){
       return(
           <>
          <Loading/> 
           </>
       )
    }
    else{
        return(
            <>
                <CardFlex>
                {imgs.map((img,key)=>{
                return(
                    <Card url={img.url} key={key} alt={img.title} mediaType={img.media_type} date={img.date} owner={img.copyright} caption={img.explanation}/>
                )
            })}
                </CardFlex>
                
            </>
        )
    }

    
}

export default Cards
