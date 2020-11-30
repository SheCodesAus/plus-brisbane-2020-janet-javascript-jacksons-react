import React from "react";

function SkillsKeynote (props) {
    const { eventData } = props;
    const SkillsKeynote = eventData.skills_keynote

    return (
        SkillsKeynote ?
        <div>Keynote Speaker</div> :
        <div></div>
    )
}

export default SkillsKeynote;