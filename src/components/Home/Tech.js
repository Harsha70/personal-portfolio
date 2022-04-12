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
                    return <img key={index} src={tech.Icon} alt={tech.Name} style={{ marginRight: "4rem", height: "4rem" }} />
                })}
            </div>

        </div>
    )
}

export default Tech