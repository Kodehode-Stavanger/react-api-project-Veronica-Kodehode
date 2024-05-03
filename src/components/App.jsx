import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error.jsx";
import Navbar from "./Navbar.jsx";
import Home from "../pages/Home.jsx";
import Details from "./Details.jsx";
import Category from "../pages/Category.jsx";

// change old way to new way

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Details />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
