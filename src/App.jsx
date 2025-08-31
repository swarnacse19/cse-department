import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AboutDepartment from "./pages/AboutDepartment";
import Contact from "./pages/Contact";
import Notice from "./pages/Notice";
import Faculty from "./pages/Faculty";
import Research from "./pages/Research";

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
          {/* 
          <Route path="people" element={<People />} />
          <Route path="publications" element={<Publications />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="seminar" element={<Seminar />} />
          <Route path="citizens-charter" element={<CitizensCharter />} />
          <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
