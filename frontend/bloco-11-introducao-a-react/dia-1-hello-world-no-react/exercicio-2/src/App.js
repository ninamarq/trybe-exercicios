import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import React from 'react';

class App extends React.Component {
  render() {
  return (
    <div>
      <Header key={Header} />
      <Content key={Content} />
      <Footer key={Footer} />
    </div>
  )
}}

export default App;
