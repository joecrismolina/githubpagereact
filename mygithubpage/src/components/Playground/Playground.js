import React from 'react';
import styles from './Playground.css';
import Aux from '../../hoc/Auxiliary';
import ReactIcon from '../../assets/images/reacticonwhite.png';
import NodeIcon from '../../assets/images/nodejs.png';
import MongoIcon from '../../assets/images/mongodb_1014604.png';

const playground = (props) => {
  return (
    <Aux>
      <div className={styles.PlaygroundContainer}>
        <div className={styles.PlaygroundItem}>
          <ion-icon name="logo-github"></ion-icon>
          <p>GitHub</p>
        </div>
        <div className={styles.PlaygroundItem}>
          <ion-icon name="logo-bitbucket"></ion-icon>
          <p>Bitbucket</p>
        </div>
        <div className={styles.PlaygroundItem}>
          <ion-icon name="logo-angular"></ion-icon>
          <p>Angular</p>
        </div>
        <div className={styles.PlaygroundItem}>
          <ion-icon name="logo-javascript"></ion-icon>
          <p>Javascript</p>
        </div>
        <div className={styles.PlaygroundItem}>
          <img src={ReactIcon} alt="react-icon" />
          <p>ReactJS</p>
        </div>
        <div className={styles.PlaygroundItem}>
          <img src={NodeIcon} alt="node-icon" />
          <p>NodeJS</p>
        </div>
        <div className={styles.PlaygroundItem}>
          <ion-icon name="logo-css3"></ion-icon>
          <p>CSS</p>
        </div>
        <div className={styles.PlaygroundItem}>
          <img src={MongoIcon} alt="mongo-icon" />
          <p>MongoDB</p>
        </div>
      </div>
    </Aux>
  )
}

export default playground;