import "./App.css";
import AddBlog from "./Components/AddBlog";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateBlog from "./Components/UpdateBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<AddBlog />} />
        <Route path="/update/:id" element={<UpdateBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
