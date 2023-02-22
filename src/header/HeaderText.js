import React from 'react'
import language from "../translations";

export default function HeaderText({ lang }) {
    return (
        <div className="centerClass ">
            <div className={"moto-2"}>
                {language[lang].safe_platform}
            </div>
            <div className={"moto-3"}>
                {language[lang].with_videos_stories_games}
            </div>
        </div>
    )
}
