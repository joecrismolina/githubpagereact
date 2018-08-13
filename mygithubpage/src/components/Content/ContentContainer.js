import React from 'react';
import styles from './ContentContainer.css';
import Aux from '../../hoc/Auxiliary';

const contentContainer = (props) => {
  return (
    <Aux>
      <div className={styles.ContentContainer} style={{backgroundImage: "url(" + props.bgdImg + ")", backgroundSize: '100% auto'}}>
        <div className={styles.Content} style={{backgroundColor: props.bgdColor}}>
          {props.children}
        </div>
      </div>
    </Aux>
  )
}

export default contentContainer;