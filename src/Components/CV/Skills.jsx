function Skills() {
    return (
        <div className="skills">
            <div className="title">
                <h3>Compétences professionnelles</h3>
            </div>
            <div className="elements">
                <div className="skill">
                    <div className="type">
                        <label>Systèmes d'exploitations</label>
                    </div>
                    <div className="list">
                        <label>MacOS | Linux | Windows</label>
                    </div>
                </div>
                <div className="skill">
                    <div className="type">
                        <label>Languages utilisées</label>
                    </div>
                    <div className="list">
                        <label>C | React | Node.js | Express | Vue | HTML/CSS/JS | Python</label>
                    </div>
                </div>
                <div className="skill">
                    <div className="type">
                        <label>Suite office</label>
                    </div>
                    <div className="list">
                        <label>Word | Excel | Powerpoint</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;