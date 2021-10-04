import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

function App() {
  const elements = [Header, Content, Footer];
  return elements.map((element) => element);
}

export default App;
