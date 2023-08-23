import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import ShowPage from "./pages/ShowPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter;