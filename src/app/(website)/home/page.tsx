import React from 'react';
import Banner from '../banner/page';
import FindRoommate from '../findroommate/page';
import RoommateService from '../roommate-service/page';
import ContactUs from '../contact-us/page';
import TypingSpeed from '../typingspeed/page';
import AboutRoommate from '../aboutroommate/page';


const Home = () => {
  return (
    <div>
     
      <Banner/>
      <FindRoommate/>
      <RoommateService/>
      <ContactUs/>
      <AboutRoommate/>
      <TypingSpeed/>
    </div>
  );
};

export default Home;