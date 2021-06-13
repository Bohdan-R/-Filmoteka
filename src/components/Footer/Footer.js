import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import './Footer.scss';

export default function AppBar() {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <p className="footer__description">
            © 2021 | All Rights Reserved | Developed by <span>Bohdan Remeniuk</span>
          </p>
          <div className="footer__contacts">
            <p className="footer__contacts__title">contacts</p>
            <ul className="footer__contacts__list">
              <li className="footer__contacts__item">
                <a href="https://github.com/Bohdan-R" rel="me noreferrer" target="_blank">
                  <AiFillGithub />
                  GitHub
                </a>
              </li>
              <li className="footer__contacts__item">
                <a
                  href="https://www.linkedin.com/in/bohdan-remeniuk-429aa1213/"
                  rel="me noreferrer"
                  target="_blank"
                >
                  <AiFillLinkedin />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
