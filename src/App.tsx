import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import PageTitle from "./components/PageTitle/PageTitle";
import Rating from "./components/Rating/Rating";

function App() {
  return (
    <div>
      <PageTitle title='This is App Component 1'/>
      <PageTitle title='This is App Component 2'/>
      Article 1
      <Rating value={3}/>
      <Accordion title='Menu 1' collapsed={true}/>
      <Accordion title='Menu 2' collapsed={false}/>
      Article 2
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
    </div>
  );
}

export default App;
