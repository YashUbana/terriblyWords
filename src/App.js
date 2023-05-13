import './App.css';
import Button from './components/Button.js'
import Fetch from './components/Fetchdata.js'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Button/>}/>
      <Route path='/Fetch' element={<Fetch/>}/>
    </Routes>
  </BrowserRouter>
  );
}




export default App;
 