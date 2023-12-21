function ExperiencesInfo({ date, company, position, description }) {
    return (
        <div className="experience">
            <div className="leftInfo">
                <div className="date">
                    <label>{ date }</label>
                </div>
                <div className="company">
                    <label>{ company }</label>
                </div>
            </div>
            <div className="rightInfo">
                <div className="position">
                    <label>{ position }</label>
                </div>
                <div className="description">
                    <label>{description }</label>
                </div>
            </div>
        </div>
    )
}

function Experiences() {
    return (
        <div className="experiences">
            <div className="title">
                <h3>Expériences</h3>
            </div>
            <ExperiencesInfo
                date="Juillet - Septembre 2023"
                company="Création Parquets & Carrelages"
                position="CDD Développeur"
                description="J'ai pu réalisé durant mon CDD un site web (idealparquets.fr) ainsi qu'une application permettant de générer des étiquettes produits"
            />
            <ExperiencesInfo 
                date="2022 - Aujourd'hui"
                company="BSK Esport"
                position="Bénévolat"
                description="J'occupe actuellement le poste de manager général, développeur et je me rends également disponible pour aider sur la partie événementiel. J'ai pu réalisé également le site web de la structure esport (teambsk.fr)"
            />
            <ExperiencesInfo
                date="Novembre 2019"
                company="2AS Informatique"
                position="Stage d'observation"
                description="Durant ce stage de découverte, j'ai pu effectuer de la maintenance informatique ce qui m'a permis d'avoir une compréhension plus globale du fonctionnement des systèmes informatiques"
            />
        </div>
    )
}

export default Experiences;