// import logo from './logo.svg';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
// import FarmingHome from './FarmingHome';
import FarmingProducts from './FarmingProducts';
import NewsletterSubscription from './NewsletterSubscription';
import Footer from './Footer';



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <Logo style={{height: 300}}/>
    //     {/* <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p> */}
    //     <h1>Hello LimaPlan</h1>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
    <Header />
    {/* <FarmingHome/> */}
    <FarmingProducts/>
    <NewsletterSubscription />
    <Footer />
    {/* Other content goes here */}
  </div>
  );
}

export default App;
