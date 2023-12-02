// Main.js
import React, { useState } from 'react';
import {componentStyles} from 'react';
import { Box, Button } from '@mui/material';

const Main = () => {
  const classes =  componentStyles();
  const [Isvalid, setIsValid] = useState(false);
  const showAddItemForm = () => setIsValid(true);
  const hideAddItemForm = () => setIsValid(false);

  return (
    <Box style = {{ flex:4 }}>
        {Isvalid ? (
            <AdminForm hideAddItemForm = {hideAddItemForm}/>
        ) : (
            <Button 
            variant='contained'
            onClick={showAddItemForm}
            className={classes.addItemsButton}>
                Add Food Item
            </Button>
        )}
        <Meals/>
    </Box>
  );
};

export default Main;
