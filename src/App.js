import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Home from './components/Home'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
    <div className="app">
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} />
          </div>
      <Footer />
      </div>
      </Router>
  );
}

export default App;
