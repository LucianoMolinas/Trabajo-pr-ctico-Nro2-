import { BrowserRouter, Routes, Route } from "react-router-dom"
import Chat from "../pages/Chat"
import Login from "../pages/Login"

const RouterApp = () => {

  return (
    <BrowserRouter>

      <Routes>


        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />

      </Routes>


    </BrowserRouter>



  )
}

export default RouterApp