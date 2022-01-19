import React, { useState } from "react";
import "./Card.css";
import { FiShare } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
function Card({ url, alt, mediaType, date, owner, caption }) {
  let media;
  if (mediaType === "image") {
    media = <img src={url}  className="feed-img" />;
  } else {
    return <div></div>;
  }
  return (
    <div className="card">
      {media}
      <p><strong>{owner ? owner : "NASA"}</strong> {alt}</p>
        <div className="card-foot"><span>{date}</span>
      <span className="share-btn">
        <FiShare
          size="1.5em"
          onClick={() => {
            navigator.clipboard.writeText(url);
          }}
        />
      </span></div>
      
    </div>
  );
}

export default Card;
