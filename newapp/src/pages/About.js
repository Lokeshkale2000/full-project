import React from 'react';
import './About.css'; 
import AboutPI from '../Assets/About.png'

const About = () => {
  return (
    <div>
      <main className="about-content">
        <h1>About Us</h1>
        <p>
          The Sandy Gray Whisky Company was formed in 2016 by Neil Gray and Bob Connor, two friends who have had a long association playing music together in Tasmania.
          Their mission for the distillery was quite simple - to create the finest possible spirits.
          The distillery, located on the Cradle coast of northern Tasmania just outside Devonport, distills Whisky and Gin from premium Tasmanian barley and water that originates in the Central Highlands.
        </p>
        <p>
          Our mission is to deliver exceptional products that enhance your experience and provide memorable moments. Each of our creations is meticulously crafted using the finest ingredients and innovative techniques.
        </p>
        <p>
          We believe in enjoying our products responsibly and encourage our customers to savor our offerings in moderation. Thank you for visiting our site and supporting our craft.
        </p>
      </main>
      <div className="containerab">
        <div className="container1">
          <img src={AboutPI} alt="AboutPI" />
        </div>
        <div className="container2">
          <p><span className='Question-1'>Who is Sandy Gray?</span><br></br>
          <br></br>
          Alexander James (Sandy) Gray was born in Aberdeen, Scotland in 1927. He was educated at Aberdeen Grammar School for Boys, where his father was senior Master of Mathematics. He studied piano and became an accomplished pianist and organist.
         <br></br>
         <br></br> On leaving school in 1944, he enlisted in the Navy and then transferred to Royal Marine Commando. On demobilization in 1947 he went to Aberdeen University to study Medicine where he met his future wife, Moira. They were married just after he graduated in 1953. While at university, he composed the music for three student revues.
          <br></br>
          <br></br>He was very much a people person and decided to become a General Practitioner, first of all in a traineeship and then for nine years in a single-handed practice in Burnley, Lancashire. During this time his sons, Neil and Iain were born.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
