
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Component/Dashboard'
function App() {

  return (
    <>
        <BrowserRouter>
      <Routes>
          <Route index element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
