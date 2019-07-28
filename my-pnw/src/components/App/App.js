import React from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import ServicesOffered from '../components/ServicesOffered/ServicesOffered';
import Contact from '../components/Contact/Contact';

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <ServicesOffered />
            <Contact />
        </div>
    )
}

export default App;