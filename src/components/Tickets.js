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
              src='/images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <TicketItem
              src='/images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='tickets__items'>
            <TicketItem
              src='/images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/servicdes'
            />
            <TicketItem
              src='/images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/projekte'
            />
            <TicketItem
              src='/images/img-8.jpg'
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
