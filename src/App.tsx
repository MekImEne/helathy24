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

} from './app/components';
import ScrollToTop from './app/components/ScrollToTop';

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
