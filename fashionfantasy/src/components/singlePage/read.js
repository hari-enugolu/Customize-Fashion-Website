import React from 'react'

import { Link } from 'react-router-dom';
    const Card = ({ id,UserDescription }) => {
        const excerpt = (str) => {
          if (str.length > 45) {
            str = str.substring(0, 45) + " ...";
          }
          return str;
        };
  return (
    <div>
            <div className="text-start">
            {excerpt(UserDescription)}
            <Link to={`/bag/${id}`}>Read More</Link>
          </div>
    </div>
  )
};
export default Card;
