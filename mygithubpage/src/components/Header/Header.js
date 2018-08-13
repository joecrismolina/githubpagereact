import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import SideNav from '../SideNav/SideNav';
import styles from './Header.css';

class Header extends Component {

  state = {
    showSideNav : false
  }

  sideDrawerToggle = () => {
    this.setState({showSideNav: !this.state.showSideNav});
  }

  sideNavClicked = (showContent) => {
    this.sideDrawerToggle();
    this.props.clicked(showContent);
  }

  render () {
    return(
      <Aux>
        <div className={styles.HeaderGroup}>
          <div className={styles.DrawerToggle} onClick={this.sideDrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.EmptyDiv}></div>
          <SideNav open={this.state.showSideNav} closed={this.sideDrawerToggle} clicked={this.sideNavClicked}/>
          <div className={styles.NavItems}>
            <div className={styles.NavItem} onClick={() => this.props.clicked('aboutMe')}>
              <ion-icon name="person"></ion-icon>
              <p>ABOUT ME</p>
            </div>
            <div className={styles.NavItem} onClick={() => this.props.clicked('experiences')}>
              <ion-icon name="globe"></ion-icon>
              <p>EXPERIENCES</p>
            </div>
            <div className={styles.NavItem} onClick={() => this.props.clicked('projects')}>
              <ion-icon name="logo-buffer"></ion-icon>
              <p>PROJECTS</p>
            </div>
            <div className={styles.NavItem} onClick={() => this.props.clicked('playground')}>
              <ion-icon name="play"></ion-icon>
              <p>PLAYGROUND</p>
            </div>
            <div className={styles.NavItem} onClick={() => this.props.clicked('email')}>
              <ion-icon name="mail"></ion-icon>
              <p>CONTACT ME</p>
            </div>
          </div>
        </div>
      </Aux>
    )
  }
};

export default Header; 