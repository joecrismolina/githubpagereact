import React from 'react';
import styles from './SideNav.css';
import Aux from '../../hoc/Auxiliary';
import Backdrop from './Backdrop';

const sideNav = (props) => {

  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }

  return (
    <Aux>
      <Backdrop clicked={props.closed} show={props.open}/>
      <div className={attachedClasses.join(' ')}>
        <div className={styles.SideNavItems}>
            <div className={styles.SideNavItem} onClick={() => props.clicked('aboutMe')}>
              <ion-icon name="person"></ion-icon>
              <p>ABOUT ME</p>
            </div>
            <div className={styles.SideNavItem} onClick={() => props.clicked('experiences')}>
              <ion-icon name="globe"></ion-icon>
              <p>EXPERIENCES</p>
            </div>
            <div className={styles.SideNavItem} onClick={() => props.clicked('projects')}>
              <ion-icon name="logo-buffer"></ion-icon>
              <p>PROJECTS</p>
            </div>
            <div className={styles.SideNavItem} onClick={() => props.clicked('playground')}>
              <ion-icon name="play"></ion-icon>
              <p>PLAYGROUND</p>
            </div>
            <div className={styles.SideNavItem} onClick={() => props.clicked('email')}>
              <ion-icon name="mail"></ion-icon>
              <p>CONTACT ME</p>
            </div>  
        </div>
      </div>
    </Aux>
  );
};

export default sideNav;