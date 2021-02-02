import React from 'react';
import { Link } from 'react-router-dom';

function TicketItem(props) {
  console.log(props.src)
  return (
    <>
      <li className='tickets__item'>
        <Link className='tickets__item__link' to={props.pathname}>
          <figure className='tickets__item__pic-wrap' data-category={props.label}>
            <img
              className='tickets__item__img'
              alt='Travel Image'
              src={props.src}
              href={props.href}
            />
          </figure>
          <div className='tickets__item__info'>
            <h5 className='tickets__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default TicketItem;
