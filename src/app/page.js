/** Components */
import About from "./source/components/about"
import Banner from "./source/components/banner"
import ContactUs from "./source/components/contact-us"
import Experience from "./source/components/experience"
import Projects from "./source/components/projects"
import Skills from "./source/components/skills"

/** Main export */
const Homepage = () => {

    return (
        <div style={{ position: "relative", zIndex: "2" }}>
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <ContactUs />
        </div>
    )
}

export default Homepage