import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/home';
import SSB from '../pages/ssb';
import Written from '../pages/written';
import Video from '../pages/video';
import Forces from '../pages/forces';
import Medicals from '../pages/medicals';
import Courses from '../pages/courses';

function Routing() {
    return (
      <>
      <Router>
        <Routes>
         <Route path="/" element = {<Home/>} />
         <Route path="/ssb" element = {<SSB/>} />
         <Route path="/written" element = {<Written/>} />
         <Route path="/video" element = {<Video/>} />
         <Route path="/join" element = {<Forces/>}/>
         <Route path='/medical' element = {<Medicals/>} />
         <Route path='/courses' element = {<Courses/>} />
        </Routes>
      </Router>
      </>
    )
  }
  
  export default Routing