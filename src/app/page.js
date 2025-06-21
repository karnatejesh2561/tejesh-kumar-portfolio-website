/** Components */
import About from "./source/components/about"
import Banner from "./source/components/banner"
import Projects from "./source/components/projects"
import Skills from "./source/components/skills"

/** Main export */
const Homepage = () => {

    return (
        <>
            <Banner />
            <About />
            <Skills />
            <Projects />
        </>
    )
}

export default Homepage