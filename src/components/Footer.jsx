import React from 'react'
import facebook from 'assets/facebook.svg';
import twitter from 'assets/twitter.svg';
import linkedin from 'assets/linkedin.svg';
import 'styles/footer.css';

const Footer = _ => {
   return (
      <footer className="container-footer">
         <section>
            <h2>Language</h2>
            <h3>English</h3>
            <h3>Spanish</h3>
            <h3>French</h3>
         </section>
         <section>
            <h2>Money Transfer</h2>
            <h3>United States</h3>
            <h3>Canada</h3>
            <h3>United Kingdom</h3>
         </section>
         <section>
            <h2>Company</h2>
            <h3>About Us</h3>
            <h3>Contact</h3>
            <h3>Legal</h3>
         </section>
         <section>
            <h2>Connect with us</h2>
            <div className="icons-footer">
               <img src={facebook} alt="facebook" />
               <img src={twitter} alt="twitter" />
               <img src={linkedin} alt="linkedin" />
            </div>
         </section>
      </footer>
   )
}

export default Footer
