import React from 'react';

// export const cardData = [
// {
//   headline: "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
//   tab: "javascript",
//   img: "./assets/sir.jpg",
//   author: "SIR RUFF'N'STUFF"
// },

const Card = props => {

  // console.log(props.card);

  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt='card pic' />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
// Included within Cards?

export default Card;
