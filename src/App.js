import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './Component/Footer';
import Header from './Component/Header';
import Main from './Main';
import Reservation from './Reservation';
import Bookings from './Bookings'

function App() {
  return (
    <div className="App mx-auto px-4">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/reservations' element={<Reservation />} />
          <Route path='/booking' element={<Bookings />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
