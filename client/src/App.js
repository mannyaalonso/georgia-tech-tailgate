import Registration from "./pages/Registration"
import { Routes, Route } from "react-router-dom"
import Result from "./pages/Result"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Registration />
      <Routes>
        <Route path={"/result"} element={<Result />} />
      </Routes>
    </div>
  )
}

export default App
