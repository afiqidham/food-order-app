// Appbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../store/CartProvider';

const Appbar = () => {
  const { cart } = useCart();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Food Order App</Typography>
        <div style={{ marginLeft: 'auto' }}>
          <Button color="inherit">
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
            Cart
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
