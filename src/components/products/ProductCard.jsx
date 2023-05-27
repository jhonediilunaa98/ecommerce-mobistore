// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import './Productmodule.css'; // Archivo CSS para estilos de la tarjeta

const ProductCard = () => {
  return (
    <article className='gallery'>
     <aside className='content'>
     <img className='product-card' src='/public/iphone14.webp' ></img>
      <h3>iphone14</h3>
      <p>xxxxxxxxxxxxxx</p>
      <h6>5.690.000</h6>
      <ul>
        <li>★</li>
        <li>★</li>
        <li>★</li>
        <li>★</li>
        <li><FontAwesomeIcon icon="fa-solid fa-star" /></li>
      </ul>
      <button className='buy-1'>Buyy Now</button>
     </aside>
    </article>
  );
};

export default ProductCard;
