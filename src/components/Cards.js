import React from 'react';
import './Cards.css';

function Cards(props) {
  return (
    <div className="Card-container">
      <img src={`./images/${props.img}`} alt="card" className="Card-img" />
      <div className="Card-Detail">
        <p>Rating:</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="orange"
          class="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <b>{props.rating}</b>
        <span>.(India)</span>
      </div>

      <div className="Name">
        <p>
          Location: <strong>{props.location}</strong>
        </p>
        <p>
          <strong>From ${props.price}</strong>/ Person
        </p>
      </div>
    </div>
  );
}

export default Cards;
