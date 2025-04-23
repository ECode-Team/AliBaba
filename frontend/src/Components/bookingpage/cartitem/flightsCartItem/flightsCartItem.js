import React from 'react';
import './flightsCartItem.scss';
import { FlightsCloseCartItem } from './flightsCloseCartItem';
import { FlightsOpenCartItem } from './flightsOpenCartItem';

export const FlightsCartItem = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flights-cart-item">
      {isOpen ? (
        <FlightsOpenCartItem setIsOpen={setIsOpen} />
      ) : (
        <FlightsCloseCartItem setIsOpen={setIsOpen} />
      )}
    </div>
  );
}; 