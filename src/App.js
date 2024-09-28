import HeroSection from './components/HeroSection';
import DescriptionBenefits from './components/DesciptionBenefits';
import YourBest from './components/YourBest';
import SectionComfort from './components/SectionComfort';
import SectionCollage from './components/SectionCollage';
import SectionReviews from './components/SectionReviews';
import SectionFAQ from './components/SectionFAQ';
import SectionImpact from './components/SectionImpact';
import './App.css';

function App() {
  return (
    <div className="App">
      
     
     <HeroSection/>
     <DescriptionBenefits/>
     <YourBest/>
     <SectionComfort/>
     <SectionCollage/>
    <SectionReviews/>
    <SectionFAQ/>
    <SectionImpact/>
    </div>
  );
}

export default App;
