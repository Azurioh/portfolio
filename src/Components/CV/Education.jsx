function EducationInfo({ date, formation, location }) {
    return (
        <div className="infos">
            <div className="date">
                <label>{date}</label>
            </div>
            <div className="formation">
                <label>{formation}</label>
            </div>
            <div className="location">
                <label>{location}</label>
            </div>
        </div>
    );
}

function Education() {
    return (
        <div className="education">
            <div className="title">
                <h3>Parcours scolaire</h3>
            </div>
            <div className="formations">
                <EducationInfo date="2023-2028" formation="Programme Grande École - EPITECH" location="EPITECH Mulhouse"/>
                <EducationInfo date="2020-2023" formation="Baccalauréat - Mention assez bien" location="Lycée Privée Saint Jean - Besançon"/>
                <EducationInfo date="2016-2020" formation="Brevet - Mention très bien" location="Lycée Privé Cartannaz - Pirey"/>
            </div>
        </div>
    );
}

export default Education;
