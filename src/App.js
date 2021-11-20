
import './App.css'
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import TechStack from './components/TechStack/TechStack';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import './components/Meteor/Meteor.scss';
import Meteor from './components/Meteor/Meteor';




function App() {
  return (<>
     
      
      <Home />
      <Meteor />
      <Services />   
        <TechStack />
        <Portfolio />
        <Testimonials />
        <Contact />
        
 </> );
}

export default App;
