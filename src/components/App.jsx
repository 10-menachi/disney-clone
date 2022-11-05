import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import Login from "./Login"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
