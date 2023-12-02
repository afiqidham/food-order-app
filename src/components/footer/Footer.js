// Footer.js
import React, { useContext } from 'react';
import { Button } from '@mui/material';
import itemsContext from '../../store/items-context';

const Footer = () => {
  const itemsCtx = useContext(itemsContext);

  const handleTogglePage = () => {
    itemsCtx.togglePage(); // Assuming you have a function to toggle the page in items-context
  };

  return (
    <div className="container">
      <Button className="button" onClick={handleTogglePage}>
        {itemsCtx.switchPage ? 'Admin' : 'User'}
      </Button>
    </div>
  );
};

export default Footer;
