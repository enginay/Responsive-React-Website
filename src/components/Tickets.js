import React from 'react';
import './Ticket.css';
import TicketItem from './TicketItem';

function Tickets() {

  let url= 'https://fontawesome.com/icons/connectdevelop?style=brands';
  return (
    <div className='tickets'>
      <h1>Letzte Projekte</h1>
      <div className='tickets__container'>
        <div className='tickets__wrapper'>
          <ul className='tickets__items'>
            <TicketItem
              src={`${process.env.PUBLIC_URL}/image/img-2.jpg`}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <TicketItem
              src={`${process.env.PUBLIC_URL}/image/img-5.jpg`}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='tickets__items'>
            <TicketItem
            src={`${process.env.PUBLIC_URL}/image/img-6.jpg`}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/servicdes'
            />
            <TicketItem
              src={`${process.env.PUBLIC_URL}/image/img-7.jpg`}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/projekte'
            />
            <TicketItem
              src={`${process.env.PUBLIC_URL}/image/img-8.jpg`}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path={url}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
