import React from 'react';
import styles from './Projects.css';
import Aux from '../../hoc/Auxiliary';

const projects = (props) => {
  return (
    <Aux>
      <div className={styles.Header}>MyRunTime</div>
      <div className={styles.SubBody}>
        <p>Itemhound's web application that allows users and their friends to track their progress as they join various running, swimming, cycling and obstacle course racing events.</p>
        <p>I was part of the team that developed its initial version using the MEAN stack. I developed some of the backend APIs using ExpressJS, NodeJS and MongoDB.</p>
        <p>I also developed some of the front end pages like the race results, race photos and news feed. Initial version of MyRuntime used Angular for its front end</p>
        <p>To cater to the growing user-base (70,000+ users as of 2018 and over 7000+ active monthly users, 950+ races and 1.5 million race results) of MyRunTime and to accommodate the new functionalities and features, like Race Registration, to be added, I redesigned the MyRunTime monolithic app to have a microservices-approach on the backend which was entirely written in NodeJS. I also migrated the frontend from Angular to ReactJS to keep up with the current frontend standards and add technology to our company’s framework stack.</p>
        <br/>
        <a href="https://www.myrunti.me">-> click here for more info</a>
      </div>
      <br/>
      <div className={styles.Header}>Goorahna Events Management System</div>
      <div className={styles.SubBody}>
        <p>Goorahna is Itemhound's suite of software solutions for all your events management's needs. From online and onsite registration to smart access and guest tracking.</p>
        <p>Most of Goorahna's applications uses different web frameworks, from MEAN stack to simple native Windows mobile apps.</p>
        <p>Goorahna's applications also uses the MEAN stack. I was part of the team and I developed most of the backend API services and the admin dashboard on the front end.</p>
        <br/>
        <a href="https://itemhound.com/goorahna">-> click here for more info</a>
      </div>
      <br/>
      <div className={styles.Header}>Racer Motorsports Timing System</div>
      <div className={styles.SubBody}>
        <p>Racer is Itemhound's flagship product for Motorsports timing. It has been used by Yamaha Philippines Grand Prix and Yamaha Vietnam Grand Prix since 2010.</p>
        <p>I was part of the team that developed its initial version using .NET C#.</p>
        <p>In 2016, I redesigned and developed the latest version that used the MongoDB and NodeJS on the backend with Angular on the front end.</p>
        <p>After the redesign, Racer was able to cater more feature, like live video feed integration. It also became more fault tolerant especially when RFID Reader-to-server connection was unreliable.</p>
        <br/>
        <a href="https://itemhound.com/ihsports">-> click here for more info</a>
      </div>
      <br/>
      <div className={styles.Header}>Strider Motorsports Timing System</div>
      <div className={styles.SubBody}>
        <p>Strider is Itemhound's solution to multiple race events like running, cycling, swimming, triathlons and even obstacle course racing.</p>
        <p>I was part of the team that developed this application over the MEAN stack. I contributed extensively both on the backend and front end.</p>
        <br/>
        <a href="https://itemhound.com/ihsports">-> click here for more info</a>
      </div>
      <br/>
      <div className={styles.Header}>MyRunTime Race Official</div>
      <div className={styles.SubBody}>
        <p>To address the needs of smaller races where RFID-based timing system is not eceonomical, I created a mobile app entirely based on React-Native and GoogleFirebase.</p>
        <p>Race organizers of small races can use this application using their mobile devices and time their races.</p>
        <p>Afterwards, they may submit these results to be hosted online on the MyRunTime website.</p>
        <br/>
        <a href="https://expo.io/@joecris/myruntime-raceofficial">-> click here for more info</a>
      </div>
      <br/>
      <div className={styles.FootNote}>
        background image from https://tinyurl.com/yc6sweno
      </div>
    </Aux>
  )
};

export default projects;