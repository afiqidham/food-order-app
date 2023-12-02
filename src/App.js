// App.js
import React, { Fragment, useContext } from 'react';
import Users from './pages/Users';
import Admin from './pages/Admin';
import itemsContext from './store/items-context';
import Footer from './components/footer/Footer';

function App() {
  const itemsCtx = useContext(itemsContext);
  return (
    <Fragment>
      {itemsCtx.switchPage ? <Users/> : <Admin/>}
      <Footer/>
    </Fragment>
  );
};

export default App;
