import React from 'react';
import { Button } from './Button';
import './Reception.css';
import '../App.css';


function Reception() {
    return (
        <div className="reception-container">
            {/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
            <h1>ENGIN AYKAT</h1>
            <p>about me and my achievements</p>
            <div className='reception-btn'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER<i className='far fa-play-circle'/></Button>

            </div>
        </div>
    )
}

export default Reception
