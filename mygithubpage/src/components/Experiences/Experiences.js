import React from 'react';
import styles from './Experiences.css';
import Aux from '../../hoc/Auxiliary';

const experiences = (props) => {
  return (
    <Aux>
      <div className={styles.Header}>Itemhound Corporation</div>
      <div className={styles.Body}>
        <p>Co-founder and Lead Software Engineer</p>
        <p><i><font color="#cfcfcf">2010 - </font></i></p>
      </div>
      <div className={styles.SubBody}>
        <p>As a co-founder and member of the management committee, I was directly responsible in assessing the feasibility and profitability of our technology services and solutions. As the lead software engineer, I headed the development of all our software applications - from selecting the right tools and frameworks during development to the right testing and production infrastructure. I actively collaborated in the entire process of providing services and solutions to clients, from gathering business requirements to proposing and delivering the best solutions</p>
        <br/>
        <a href="https://www.itemhound.com">see Itemhound Corp. website for more info</a>
      </div>
      <br/>
      <br/>
      <div className={styles.Header}>Anritsu Corporation</div>
      <div className={styles.Body}>
        <p>Software Engineer, Research and Development</p>
        <p><i><font color="#cfcfcf">2007 - 2010</font></i></p>
      </div>
      <div className={styles.SubBody}>
        <p>I developed software applications for Anritsu's MS269xA Signal Analyzer line of products.</p>
        <p>This involved developing digital signal processing software for different wireless communications technologies like LTE, GSM and WCDMA.</p>
      </div>
      <div className={styles.FootNote}>
        background image from https://tinyurl.com/y7kyqns2
      </div>
    </Aux>
  )
};

export default experiences;