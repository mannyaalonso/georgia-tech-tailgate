import Registration from "./pages/Registration"
import { Routes, Route } from "react-router-dom"
import Result from "./pages/Result"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path={"/"} element={<Registration />} />
        <Route path={"/result/:id"} element={<Result />} />
      </Routes>
    </div>
  )
}

export default App
