import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import AppRouter from './AppRouter.jsx'
import Footer from './components/Footer/Footer.jsx'
import './styles/index.scss'

const App = () => {
  return (
    <Router>
      <Header />
        <main>
          <AppRouter />
        </main>
      <Footer />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App;
