// Cart.js
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  Button,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCart } from '../store/CartProvider';

const Cart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const handleDeleteItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleIncreaseQuantity = (itemId) => {
    increaseQuantity(itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    decreaseQuantity(itemId);
  };

  const handleOrder = () => {
    // Placeholder logic for handling orders
    console.log('Order placed!');
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Your Cart</DialogTitle>
      <DialogContent>
        {cart.map((item) => (
          <div key={item.id}>
            <Typography>{item.title}</Typography>
            <IconButton onClick={() => handleDeleteItem(item.id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => handleDecreaseQuantity(item.id)}>
              <RemoveIcon />
            </IconButton>
            <Typography>{item.quantity}</Typography>
            <IconButton onClick={() => handleIncreaseQuantity(item.id)}>
              <AddIcon />
            </IconButton>
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={handleOrder} color="primary">
          Order
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Cart;
