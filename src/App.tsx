import React from 'react';
import './App.css';
import {
  AboutUs,
  Banner,
  Contact,
  FAQ,
  Feedbacks,
  FindDoctor,
  Footer,
  GetApp,
  Location,
  Navbar,
  Offers,
  SearchHospital,
  Sections,
  TeamBanner,
  WhyUs,

} from './app/components';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Sections />
      <AboutUs />
      <WhyUs />
      <GetApp />
      <FindDoctor />
      <Offers />
      <SearchHospital />
      <Feedbacks />
      <FAQ />
      <TeamBanner />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
