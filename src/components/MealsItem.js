// MealsItem.js
import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { useCart } from '../store/CartProvider';

const MealsItem = ({ id, title, description, price, image }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const newItem = {
      id,
      title,
      description,
      price,
      image,
    };
    addToCart(newItem);
  };

  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
          <Typography variant="h6" color="textPrimary">
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default MealsItem;
