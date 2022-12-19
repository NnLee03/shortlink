import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/index'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Index />}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
