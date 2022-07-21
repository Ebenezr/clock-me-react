import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Main=()=> {
  return (
    <section className='container__main'>
    <Header />
    <div className="view__main"> </div>
    <Footer />
    </section>
  )
}

export default Main