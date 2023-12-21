import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import { UilLinkedin } from '@iconscout/react-unicons';

function ContactInfo({ icon, text, href }) {
    return (
        <div className="info">
            <div className="icon">
                {icon}
            </div>
            <div className="text">
                {href != null ?
                    <a href={href}>{text}</a> :
                    <label>{text}</label>
                }
            </div>
        </div>
    );
}


function Contact() {
    return (
        <div className="contact">
            <div className="title">
                <h3>Informations de contact</h3>
            </div>
            <div className="informations">
                <ContactInfo icon={<LocalPhoneRoundedIcon />} text="06 61 69 43 73" />
                <ContactInfo icon={<EmailRoundedIcon />} text="alan.cunin@epitech.eu" />
                <ContactInfo icon={<LanguageRoundedIcon />} text={<a href="https://alancunin.fr">alancunin.fr</a>} />
                <ContactInfo icon={<UilLinkedin />} text={<a href="https://www.linkedin.com/in/alan-cunin-b6b44b247/">linkedin.com/in/alan-cunin-b6b44b247/</a>} />
                <ContactInfo icon={<LocationOnRoundedIcon />} text="Mulhouse et/ou Besancon" />
            </div>
        </div>
    );
}

export default Contact;