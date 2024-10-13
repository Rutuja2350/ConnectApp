import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='app_body'>
          <Sidebar />
          <Routes>
            <Route path="/channel/:channelId" element={<Chat />} />
            <Route path="/" element={<h1>WELCOME</h1>} />
          </Routes>
        </div>
      </Router >
    </div>
  );
}

export default App;
