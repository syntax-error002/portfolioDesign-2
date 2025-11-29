import Hero from '../components/Hero';
import Accomplishments from '../components/Accomplishments';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <Accomplishments />
            <Projects />
            <Experience />
            <Skills />
            <Certifications />
            <Contact />
        </>
    );
};

export default Home;
