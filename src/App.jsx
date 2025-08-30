import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
// import About from "./pages/About";
// import People from "./pages/People";
// import Research from "./pages/Research";
// import Publications from "./pages/Publications";
// import Curriculum from "./pages/Curriculum";
// import Seminar from "./pages/Seminar";
// import CitizensCharter from "./pages/CitizensCharter";
// import Notice from "./pages/Notice";
// import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="people" element={<People />} />
          <Route path="research" element={<Research />} />
          <Route path="publications" element={<Publications />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="seminar" element={<Seminar />} />
          <Route path="citizens-charter" element={<CitizensCharter />} />
          <Route path="notice" element={<Notice />} />
          <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
