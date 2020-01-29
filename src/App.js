import React from 'react';
import 'App.css';
import Header from 'components/Header'
import Footer from 'components/Footer';
import Historical from 'components/Historical';
import FormExchange from 'components/FormExchange';

function App() {
   return (
      <div className="App">
         <Header/>
         <FormExchange />
         <Historical />
         <Footer />
      </div>
   );
}

export default App;
