import { Router, Switch } from 'react-router-dom';
import '../../App.css';
import React from 'react';
import Reception from '../Reception';
import Tickets from '../Tickets'
import Footer from '../hf/Footer';
 
function Home(){
    return(
        <>
        <Reception />
        <Tickets />
        <Footer />
       </>
    );
}
export default Home;