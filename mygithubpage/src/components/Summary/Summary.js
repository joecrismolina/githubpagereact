import React, { Component } from 'react';
import styles from './Summary.css';
import Aux from '../../hoc/Auxiliary';

class Summary extends Component {
  render () {
    return (
      <Aux>
        <div className={styles.Header}>about me</div>
        <div className={styles.Body}>
          <p>I am an enthusiastic and eager-to-learn software engineer with 10+ years of experience in software development. I have spent the last 8 years of my career in web development especially using the MEAN stack. I am also a <font color="black"><i>tech start-up co-founder</i></font> with a long and rich background in start-up environment. Having an entrepreneurial spirit and innovative drive distinguishes me from the rest as a software engineer.</p>
        </div>
        <div className={styles.FootNote}>
          background image from negativespace.co
        </div>
      </Aux>
    )
  }
};

export default Summary;