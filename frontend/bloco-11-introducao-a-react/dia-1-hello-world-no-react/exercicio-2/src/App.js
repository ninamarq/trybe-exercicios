import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import React from 'react';

const elements = [Header, Content, Footer];
const classes = elements.map((element) => {
  return (
    <div key={element}>{element}</div>
  )
});

class App extends React.Component {
  render() {
  return classes
}}

export default App;
