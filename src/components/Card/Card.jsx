import React, { useState } from "react";
import "./Card.css";

import { FiShare } from "react-icons/fi";
import Checkbox from "@mui/material/Checkbox";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Snackbar from '@mui/material/Snackbar';
import styled from "styled-components";


function Card({ url, alt, mediaType, date, owner, caption }) {
  const handleClick = () => {
    navigator.clipboard.writeText(url);

  };


  let media;
  if (mediaType === "image") {
    media = <img src={url} className="feed-img" />;
  } else {
    return <div></div>;
  }
  return (
    <div className="card">
      {media}
      <p>
        <strong>{owner ? owner : "NASA"}</strong> {alt}
      </p>
      <div className="card-foot">
        <span>{date}</span>
        <div className="btns">
          <Checkbox
            icon={<AiOutlineHeart color="#000000" size="1.5rem" />}
            checkedIcon={<AiFillHeart color="#b61827" size="1.5rem" />}
            name="Like Button"
          />
          
          <FiShare
            className="share-btn"
            size="1.5em"
            onClick={handleClick()}
          />
        </div>
      </div>

    </div>
  );
}

export default Card;
