// ItemsProvider.js
import React, { createContext, useReducer, useContext } from 'react';

const ItemsContext = createContext();

const itemsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];

    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};

const ItemsProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemsReducer, []);

  return (
    <ItemsContext.Provider value={{ items, dispatch }}>
      {children}
    </ItemsContext.Provider>
  );
};

const useItems = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error('useItems must be used within an ItemsProvider');
  }
  return context;
};

export { ItemsProvider, useItems };
