import './App.css';

import Home from './components/HomePage'
import Profile from './components/ProfilePage'
import PollingPage from './components/PollingPage';

function App() {
  return (
    <div className="App">
      <Home/>
      <Profile/>
      <PollingPage/>
    </div>
  );
}

export default App;
