import React from "react";

function SkillsMentor (props) {
    const { eventData } = props;
    const SkillsMentor = eventData.skills_mentor

    return (
        SkillsMentor ?
        <div>Supportive Mentor</div> :
        <div></div>
    )
}

export default SkillsMentor;