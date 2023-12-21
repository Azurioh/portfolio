import '../Theme/CV.css';
import Basic from '../Components/CV/Basic';
import Contact from '../Components/CV/Contact';
import Education from '../Components/CV/Education';
import Language from '../Components/CV/Language';
import Profile from '../Components/CV/Profile';
import Experiences from '../Components/CV/Experiences';
import Skills from '../Components/CV/Skills.jsx';
import Interests from '../Components/CV/Interests.jsx';

function CV() {
    return (
        <div className="container">
            <div className="left">
                <div className="element">
                    <Basic />
                </div>
                <div className="element">
                    <Contact />
                </div>
                <div className="element">
                    <Education />
                </div>
                <div className="element">
                    <Language />
                </div>
            </div>
            <div className="right">
                <div className="element">
                    <Profile />
                </div>
                <div className="element">
                    <Experiences />
                </div>
                <div className="element">
                    <Skills />
                </div>
                <div className="element">
                    <Interests />
                </div>
            </div>
        </div>
    )
}

export default CV;