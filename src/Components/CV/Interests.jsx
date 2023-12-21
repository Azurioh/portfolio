import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

function InterestsInfo({ icon: Icon, text }) {
    return (
        <div className="interest">
            <div className="icon"><Icon /></div>
            <div className="text">{text}</div>
        </div>
    );
}

function Interests() {
    return (
        <div className="interests">
            <div className="title">
                <h3>Intérêts</h3>
            </div>
            <InterestsInfo icon={EmojiEventsIcon} text={"Esport"} />
            <InterestsInfo icon={SportsEsportsIcon} text={"Gaming"} />
            <InterestsInfo icon={SportsBasketballIcon} text={"Sport"} />
        </div>
    );
}

export default Interests;
