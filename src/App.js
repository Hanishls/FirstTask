import FormLayout from './component/pages/FormLayout';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LayoutPage from './component/pages/LayoutPage';
import LoginPage from './component/pages/LoginPage';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPage/>}/>
        <Route path='/register' element ={<FormLayout/>}/>
        <Route path='/login' element ={<LoginPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
