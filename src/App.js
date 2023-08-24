

import Phase from  './Componenets/Phase';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Status from './Componenets/Status';




function App() {
  
  
  return ( 
    <div style={{backgroundColor:"black"}}>
  
      
   
    <Router>
      <Routes>
<Route exact path='/' element={<Phase/>}/>

<Route exact path='/status' element={<Status/>}/>
      </Routes>
    </Router>
  
   
    </div>
  );
}

export default App;
