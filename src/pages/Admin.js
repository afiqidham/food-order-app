// Admin.js
import React from 'react';
import Appbar from '../components/Appbar';
import Footer from '../components/footer/Footer';
import Main from '../components/Main';

const Admin = () => {
  return (
    <div>
      <Appbar />
      <Main />
      <Footer onUserClick={() => {}} onAdminClick={() => {}} />
    </div>
  );
};

export default Admin;
