
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewPage from './Pages/NewPage';


function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewPage />}/>
            
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
