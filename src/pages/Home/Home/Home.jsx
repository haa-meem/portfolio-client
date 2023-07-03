import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;