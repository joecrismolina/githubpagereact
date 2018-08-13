import React from 'react';
import styles from './Contact.css';
import Aux from '../../hoc/Auxiliary';

const contact = (props) => {
  return (
    <Aux>
      <div className={styles.ContactContainer}>
        <div className={styles.ContactItem}>
          <a href="mailto:joecris.molina@gmail.com">
            <ion-icon name="mail"></ion-icon>
            <p>joecris.molina@gmail.com</p>
            <p>Email</p>
          </a>
        </div>
        <div className={styles.ContactItem}>
          <a href="https://www.linkedin.com/in/joe-cris-molina-624a2022/">
            <ion-icon name="logo-linkedin"></ion-icon>
            <p>LinkedIn</p>
          </a>
        </div>
        <div className={styles.ContactItem}>
          <a href="https://github.com/joecrismolina"> 
            <ion-icon name="logo-github"></ion-icon>
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </Aux>
  )
}

export default contact;