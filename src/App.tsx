import { Routes,Route } from "react-router-dom"
import Home from "../src/pages/Home"
import Login from "./pages/Login"
import Restaurant from "./pages/Restaurant"

function App() {


  return (
    <>
    <Routes>
    <Route path="/" element={<Home />}  />
    <Route path="login" element={<Login />}  />
    <Route path="restaurant" element={<Restaurant />}  />
    </Routes>
   
    </>
  )
}

export default App
