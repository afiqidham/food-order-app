// Users.js
import React, { useState } from 'react';
import Appbar from '../components/Appbar';
import Footer from '../components/footer/Footer';
import Main from '../components/Main';
import { CartProvider } from '../store/CartProvider';
import Cart from '../components/Cart';

const Users = () => {
    const [Isvalid, setIsValid] = useState(false);
    const showModalHandler = () => {
        setIsValid(true);
    };
    const hideModalHandler = () => {
        setIsValid(false);
    };
  return (
    <CartProvider>
        <Appbar modalHandler = {showModalHandler}/>
        {Isvalid && <Cart hideModalHandler = {hideModalHandler}/>}
        <Banner/>
        <section>
            <AboutUs/>
            <div style={{ marginTop: "15rem" }} className='top-margin'>
                <Meals/>
            </div>
        </section>
    </CartProvider>
  );
};

export default Users;
