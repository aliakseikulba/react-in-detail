import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import PageTitle from "./components/PageTitle/PageTitle";
import Rating from "./components/Rating/Rating";
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';

function App() {
  return (
    <div>
      <OnOff />

      <UncontrolledAccordion title='UncontrolledAccordion'/>
      <UncontrolledRating />
      {/*<PageTitle title='This is App Component 1'/>*/}
      {/*<PageTitle title='This is App Component 2'/>*/}
      {/*Article 1*/}
      {/*<UncontrolledRating value={3}/>*/}
      {/*<UncontrolledAccordion title='Menu 1' collapsed={true}/>*/}
      {/*<UncontrolledAccordion title='Menu 2' collapsed={false}/>*/}
      {/*Article 2*/}
      {/*<UncontrolledRating value={0}/>*/}
      {/*<UncontrolledRating value={1}/>*/}
      {/*<UncontrolledRating value={2}/>*/}
      {/*<UncontrolledRating value={3}/>*/}
      {/*<UncontrolledRating value={4}/>*/}
      {/*<UncontrolledRating value={5}/>*/}
    </div>
  );
}

export default App;
