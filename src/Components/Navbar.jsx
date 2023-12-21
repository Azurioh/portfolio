import '../Theme/Navbar.css'
import { UilDiscord, UilLinkedin, UilTwitter } from '@iconscout/react-unicons'
import MenuIcon from '@mui/icons-material/Menu';

function showNavbarMobile() {
    const content = document.querySelector('.content');
    const links = document.querySelectorAll('.mobile .links');

    links.forEach(item => {
        const styles = item.style;
        const contentStyles = content.style;

        if (styles.visibility === "hidden" || styles.visibility === "") {
            styles.visibility = "visible";
            styles.opacity = "1";
            styles.zindex = "999";
            contentStyles.visibility = "visible";
            contentStyles.opacity = "1";
            contentStyles.zindex = "999";
        } else {
            styles.visibility = "hidden";
            contentStyles.visibility = "hidden";
            styles.opacity = "0";
            contentStyles.opacity = "0";
            styles.zindex = "-1";
            contentStyles.zindex = "-1";
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