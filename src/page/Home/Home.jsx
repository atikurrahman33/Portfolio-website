
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Project from "../Projects/Project";

import Skills from "../Skills/Skills";



const Home = () => {
    return (
        <div id="home">
            <Banner />
        
            <About />
            <Skills />
            <Project />
            <Contact />
           
        </div>
    );
};

export default Home;