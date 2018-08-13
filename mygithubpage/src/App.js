import React, { Component } from 'react';
import styles from './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

class App extends Component {

  state = {
    contentToShow: 'aboutMe', // 'aboutMe' 'experiences' 'projects'
    showMain: false
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({showMain: true});
    }, 3000)
  }

  updateContent = (showContent) => {
    this.setState({contentToShow: showContent});
  }

  render() {
    let welcomeClass = [styles.WelcomeBlock];
    let mainClass = [styles.MainBlock, styles.Hide];
    if(this.state.showMain) {
      welcomeClass.push(styles.Fade);
      mainClass = [styles.MainBlock, styles.Show];
    }

    return (
      <div className={styles.App}>
        <div className={welcomeClass.join(' ')}>
          <div className={styles.AppLogo}>JCM</div>
        </div>
        <div className={mainClass.join(' ')}>
          <Header clicked={this.updateContent}/>
          <Content showContent={this.state.contentToShow}/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
