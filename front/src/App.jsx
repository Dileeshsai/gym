import './App.css';
import Explore from './Explore';
import Features from './Features';
import Homepage from './Homepage';
import LoginForm from './LoginForm';
import Navi from './Navi';
import Register from './Register';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


const App = () => {
  return (
    <body>
    <Router>
    <div>
      <Navi/>
      <div className="content">
        <Routes>
        <Route path="/" element={<Homepage />} />
    <Route path="/Features" element={<Features />} />
    <Route path="/Explore" element={<Explore />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/LoginForm" element={<LoginForm />} />
        </Routes>
      </div>
    </div>
  </Router>
  </body>
  );
}

export default App;
