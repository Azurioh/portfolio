function LanguageInfo({ language, level }) {
    const progressStyle = {
        width: level,
    };

    return (
        <div className="language">
            <div className="languageName">
                <label>{language}:</label>
            </div>
            <div className="level">
                <div className="maxLevel" />
                <div className="actualLevel" style={progressStyle}></div>
            </div>
        </div>
    );
}

function Language() {
    return (
        <div className="languages">
            <div className="title">
                <h3>Langues</h3>
            </div>
            <div className="elements">
                <LanguageInfo language="Français" level="100%" />
                <LanguageInfo language="Anglais" level="70%" />
            </div>
        </div>
    )
}

export default Language;