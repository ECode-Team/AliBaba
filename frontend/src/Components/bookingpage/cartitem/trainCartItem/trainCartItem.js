import React from 'react';
import './trainCartItem.scss';
import { TrainCloseCartItem } from './trainCloseCartItem';
import { TrainOpenCartItem } from './trainOpenCartItem';

export const TrainCartItem = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="train-cart-item">
      {isOpen ? (
        <TrainOpenCartItem setIsOpen={handleClose} />
      ) : (
        <TrainCloseCartItem setIsOpen={handleOpen} />
      )}
    </div>
  );
}; 