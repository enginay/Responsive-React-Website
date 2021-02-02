import React from 'react';
import './Ticket.css';
import TicketItem from './TicketItem';

function Tickets() {

  let url= 'https://fontawesome.com/icons/connectdevelop?style=brands';
  return (
    <div className='tickets'>
      <h1>Aktuelle News</h1>
      <div className='tickets__container'>
        <div className='tickets__wrapper'>
          <ul className='tickets__items'>
            <TicketItem
              src={`${process.env.PUBLIC_URL}/image/ReactIcon.jpg`}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='ReactJs'
              path='https://hub.packtpub.com/5-reasons-learn-reactjs/'
            />
            <TicketItem
              src={`${process.env.PUBLIC_URL}/image/angular-symbol-512.png`}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='AngularJs'
              path='/services'
            />
          </ul>
          <ul className='tickets__items'>
            <TicketItem
            src={`${process.env.PUBLIC_URL}/image/bulma-banner.png`}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Bulma Framework-Css'
              path='/services'
            />
            <TicketItem
              src={`${process.env.PUBLIC_URL}/image/JavaScript.jpg`}
              text='Experience Football on Top of the Himilayan Mountains'
              label='JavaScript'
              path='/projekte'
            />
            <TicketItem
              src={`${process.env.PUBLIC_URL}/image/rocket.jpg`}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Rocket Framework-Rust'
              path={url}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
