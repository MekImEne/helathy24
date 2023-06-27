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
  TeamBanner,
  WhyUs,

} from './app/Sections';
import ScrollToTop from './app/components/UI/ScrollToTop';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
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
      <ScrollToTop />
    </div>
  );
}

export default App;
