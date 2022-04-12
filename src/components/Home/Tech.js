import React from 'react'
import FLATICON from './data'

const Tech = ({ iconCategory }) => {
    const technology = FLATICON.filter((tech) => {
        return tech.Category === iconCategory
    })
    return (
        <div style={{ display: "grid", gap: "2rem" }}>
            <h1>
                {iconCategory}
            </h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "inherit"
            }}>
                {technology.map((tech, index) => {
                    return <a key={index} href="" rel="noreferrer" target="_blank" >
                        <img src={tech.Icon} alt={tech.Name} style={{ marginRight: "4rem", height: "4rem" }} />
                    </a>
                })}
            </div>

        </div>
    )
}

export default Tech