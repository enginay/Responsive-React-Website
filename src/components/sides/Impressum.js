import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';


export default function Impressum(){
    return(
        <>
        <div className='impressum' >
        <h4 id="naming">Impressum | <Link to='/'> Home</Link></h4>
        </div>
        <div>
        <h2>Kontakt Daten</h2>
        <div id='kontaktinformationen'>
            <p>Engin Aykat</p>
            <p>Firma: E.A Dev</p>
            <p>Saarbrückerstraße 12</p>
            <p>66111 Saarbrücken</p>
            <p>Amtsgericht Saarbrücken</p>
        </div>
        
        </div>
        <Footer/>
        </>
    );
}
