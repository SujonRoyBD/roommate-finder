import React from 'react';
import Banner from './(website)/banner/page';
import RoommateService from './(website)/roommate-service/page';
import FindRoommate from './(website)/findroommate/page';
import ContactUs from './(website)/contact-us/page';
import AboutRoommate from './(website)/about-roommate/AboutRoommate';

const page = () => {
  return (
    <div>
     
      <Banner/>
      <FindRoommate/>
      <RoommateService/>
      <ContactUs/>
      <AboutRoommate/>
    </div>
  );
};

export default page;