import '../Theme/Navbar.css'
import { UilDiscord, UilLinkedin, UilTwitter } from '@iconscout/react-unicons'
import MenuIcon from '@mui/icons-material/Menu';

function showNavbarMobile() {
    const navbar = document.querySelectorAll('.mobile .links');

    navbar.forEach(item => {
        const styles = item.style;

        if (styles.display === "none" || styles.display === "") {
            styles.display = "flex";
        } else {
            styles.display = "none";
        }
    });
}

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="redirection-links">
                    <div className="item">
                        <a href="/home">Home</a>
                    </div>
                    <div className="item">
                        <a href="/projects">Projects</a>
                    </div>
                    <div className="item">
                        <a href="/contact">Contact</a>
                    </div>
                </div>
                <div className="socials">
                    <div className="social linkedin">
                        <a href="/linkedin"><UilLinkedin /></a>
                    </div>
                    <div className="social discord">
                        <a href="/discord"><UilDiscord /></a>
                    </div>
                    <div className="social twitter">
                        <a href="/twitter"><UilTwitter /></a>
                    </div>
                </div>
            </div>
            <div className="mobile">
                <div className="button">
                    <button className="icon" onClick={showNavbarMobile}>
                        <MenuIcon />
                    </button>
                </div>
                <div className="content">
                    <div className="links">
                        <div className="item">
                            <a href="/home">Home</a>
                        </div>
                        <div className="item">
                            <a href="/projects">Projects</a>
                        </div>
                        <div className="item">
                            <a href="/contact">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar