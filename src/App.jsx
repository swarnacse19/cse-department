import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AboutDepartment from "./pages/AboutDepartment";
import Contact from "./pages/Contact";
import Notice from "./pages/Notice";
import Faculty from "./pages/Faculty";
import Research from "./pages/Research";
import Programs from "./pages/Programs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutDepartment />} />
          <Route path="contact" element={<Contact />} />
          <Route path="notice" element={<Notice />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="research" element={<Research />} />
          <Route path="programs" element={<Programs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
