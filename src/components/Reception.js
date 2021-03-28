import React from 'react';
import { Button } from './Button';
import './Reception.css';
import '../App.css';
import { Link } from '@material-ui/core';


function Reception() {
    return (
        <div className="reception-container">
            {<video src='/videos/office.mp4' autoPlay loop muted />}
            <h1>ENGIN AYKAT</h1>
            <p>Über mich und meine Referenzen</p>
            <div className='reception-btn'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Direkt zum Lebenslauf <i className='far fa-file-alt'/></Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                            Direkt zu meinen Projekten <i className='fas fa-project-diagram'/>
                </Button>
                

            </div>
        </div>
    )
}

export default Reception
