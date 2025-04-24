import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = ({ children, title, description }) => {
  return (
    <div className="layout-container">
      <Header />
      
      <div className="page-header">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      
      <main className="main-content">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout; 