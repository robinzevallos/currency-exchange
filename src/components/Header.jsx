import React from 'react'
import moneyExchange from 'assets/moneyExchange.svg';
import 'styles/header.css'

const Header = _ => {
   return (
      <div className="container-header">
         <img src={moneyExchange} alt="money exchange" />
         <div>
            <h2>CONVERT</h2>
            <h2>HISTORICAL</h2>
            <h2>TIME SERIES</h2>
            <h2>FLUCTUATION</h2>
         </div>
      </div>
   )
}

export default Header
