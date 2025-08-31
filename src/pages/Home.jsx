import DeptHead from "../components/DeptHead";
import Gallery from "../components/Gallery";
import Contact from "./Contact";
import UniversitySlider from "./UniversitySlider";

const Home = () => {
  return (
    <div>
        <UniversitySlider></UniversitySlider>
        <DeptHead></DeptHead>
        <Gallery></Gallery>
        <Contact></Contact>
    </div>
  )
};
export default Home;
