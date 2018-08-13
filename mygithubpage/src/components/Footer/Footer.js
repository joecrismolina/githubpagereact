import React, { Component } from 'react';
import styles from './Footer.css';
import Aux from '../../hoc/Auxiliary';
import ReactIcon from '../../assets/images/reacticonwhite.png';
import SublimeIcon from '../../assets/images/sublimeiconwhite.png';

class Footer extends Component {
  render () {
    return(
      <Aux>    
        <div className={styles.Footer}>
          <div className={styles.FooterTechList}>
            <div className={styles.LinkWidget}>
              <a href="https://github.com/">
                <ion-icon name="logo-github"></ion-icon>
                <p>Github</p>
              </a>
            </div>
            <div className={styles.LinkWidget}>
              <a href="https://reactjs.org/">
                <img src={ReactIcon} alt="react-icon" />
                <p>React</p>
              </a>
            </div>
            <div className={styles.LinkWidget}>
              <a href="https://www.sublimetext.com/">
                <img src={SublimeIcon} alt="sublime-icon" />
                <p>Sublime</p>
              </a>
            </div>
          </div>
          <p>Some of the wonderful stuff used to built this simple website!</p> 
          <div className={styles.FooterNotes}>
            <p>Joe Cris Molina 2018</p>
          </div>
        </div>
      </Aux>
    )
  }
};

export default Footer;