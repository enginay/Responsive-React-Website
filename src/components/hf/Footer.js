import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';




function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          So können Sie mich Kontaktieren
        </p>
        {/*<p className='footer-subscription-text'>
          sbhdhgdhgdgd
        </p>*/}
        {/**Here is the Contact Section */}
        <div className='input-areas'>
          <contactForm />
          <form>
            <input
              className='footer-message'
              name='nachricht'
              type='nachricht'
              placeholder='Nachricht Schreiben ...'
            />
          </form>
          <form>
            <input
              className='footer-input'
              name='name'
              type='name'
              placeholder='Name'
            />
          </form>
          <form>
            <input
              className='footer-input'
              name='firma'
              type='firma'
              placeholder='Firma'
            />
          </form>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Bitte E-Mail angeben'
            />
            <Button buttonStyle='btn--outline'>Absenden</Button>
          </form>
        </div>

        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Über mich</h2>
              <Link to='/sign-up'>Registrieren</Link>
              <Link to='/prdoucts'>Spezifikationen</Link>
              <Link to='/'>Agency</Link>
              <Link to='/'>Was ich anbiete</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Kontaktieren Sie uns</h2>
              <Link to='/'>Kontakt</Link>
              <Link to='/'>Hilfe</Link>
              <Link to="/impressum">Impressum</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Anfragen</h2>
              <Link to='/'>Video Anfragen</Link>
              <Link to='/'>Email Anfragen</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Social Media</h2>
              <a href="https://de.linkedin.com/">LinkedIn</a>
              <a href="https://www.xing.com/">Xing</a>
              <a href="https://github.com/">GitHub</a>
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
                E.A Dev
              <i class='fab fa-connectdevelop' />
              </Link>
            </div>
            <small class='website-rights'>Engin Aykat © 2020</small>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to={{ pathname: "https://de-de.facebook.com/" }}
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f'/>
              </Link>
              <Link
                class='social-icon-link instagram'
                to={{pathname: "https://www.instagram.com/"}}
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link xing'
                to={{pathname: "https://www.xing.com/"}}
                target='_blank'
                aria-label='Xing'
              >
                <i class='fab f168 fa-xing' />
              </Link>
              <Link
                class='social-icon-link gitHub'
                to={{pathname: "https://github.com/"}}
                target='_blank'
                aria-label='GitHub'
              >
                <i class='fab fa-github' />
              </Link>
              <Link
                class='social-icon-link linkedin'
                to={{pathname: "https://www.linkedin.com/"}}
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Footer;