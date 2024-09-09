import Home from './pages/home';
import SSB from './pages/ssb';
import Written from './pages/written';
import Video from './pages/video';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
       <Route path="/" element = {<Home/>} />
       <Route path="/ssb" element = {<SSB/>} />
       <Route path="/written" element = {<Written/>} />
       <Route path="/video" element = {<Video/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
