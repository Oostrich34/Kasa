import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import AppRouter from './AppRouter.jsx'
import Footer from './components/Footer/Footer.jsx'
import './styles/index.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <main>
          <AppRouter />
        </main>
      <Footer />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App;

{/*const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logements' element={<Logements />} />
        {/* <Route path='/logements/{id}' element={<LogementDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)*/}
