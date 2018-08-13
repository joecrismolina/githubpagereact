import React, { Component } from 'react';
import styles from './Content.css';
import Aux from '../../hoc/Auxiliary';
import Summary from '../Summary/Summary';
import Experiences from '../Experiences/Experiences';
import Projects from '../Projects/Projects';
import ContentContainer from './ContentContainer';
import SummaryBgdImg from '../../assets/images/apple-black-and-white-black-and-white-169573.jpg';
import ExperiencesBgdImg from '../../assets/images/architectural-design-architecture-black-and-white-425058.jpg';
import ProjectsBgdImg from '../../assets/images/beverage-coffee-computer-19072.jpg';
import Playground from '../Playground/Playground';
import Contact from '../Contact/Contact';

class Content extends Component {

  state = {

  }

  render () {

    let content = null;
    if(this.props.showContent === 'aboutMe') {
      content = (
          <ContentContainer bgdImg={SummaryBgdImg} bgdColor={'rgba(229,195,158,0.9)'}>
            <Summary />
          </ContentContainer>
      )
    } else if (this.props.showContent === 'experiences') {
      content = (
          <ContentContainer bgdImg={ExperiencesBgdImg} bgdColor={'rgba(245,75,26,0.9)'}>
            <Experiences />
          </ContentContainer>
      )
    } else if (this.props.showContent === 'projects') {
      content = (
          <ContentContainer bgdImg={ProjectsBgdImg} bgdColor={'rgba(27,52,108,0.9)'}>
            <Projects />
          </ContentContainer>
      )
    } else if (this.props.showContent === 'playground') {
      content = (
          <ContentContainer bgdImg={ProjectsBgdImg} bgdColor={'rgba(1,171,233,0.9)'}>
            <Playground />
          </ContentContainer>
      )
    } else {
      content = (
          <ContentContainer bgdImg={ProjectsBgdImg} bgdColor={'rgba(1,171,233,0.9)'}>
            <Contact />
          </ContentContainer>
      )
    }

    return (
      <Aux>
        <div className={styles.ContentMain}>
          {content}
        </div>
      </Aux>
    )
  }
};

export default Content;