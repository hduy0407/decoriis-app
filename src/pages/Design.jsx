import Header from "./components/Header"
import Footer from "./components/Footer"
import PlywoodSection from "./components/PlywoodSection"
import LaminateSection from "./components/LaminateSection"

const Design = () => {
    return (
        <div className="design-page">
            <Header />
            <div className="design-section">
                <PlywoodSection />
                <LaminateSection />
            </div>
            <Footer />
        </div>
    )
}

export default Design