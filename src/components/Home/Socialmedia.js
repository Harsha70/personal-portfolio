import React from 'react'

const iconstyles = {
    marginLeft: "1rem",
    // marginRight: "1rem"
}
const Socialmedia = () => {
    return (
        <div className="socialHandleSection">
            <a href="" target="_blank">
                <img
                    className="socialHandleIcon" style={iconstyles}
                    alt=""
                    src="https://user-images.githubusercontent.com/45563022/90330017-48bc3000-dfc7-11ea-8171-bdac7c7f2ba3.png"
                />
            </a>
            <a href="https://github.com/Harsha70" rel="noreferrer" target="_blank">
                <img
                    className="socialHandleIcon" style={iconstyles}
                    alt=""
                    src="https://user-images.githubusercontent.com/45563022/90330053-89b44480-dfc7-11ea-8f97-b0f1f45761bd.png"
                />
            </a>
            <a href="https://twitter.com/" rel="noreferrer" target="_blank">
                <img
                    className="socialHandleIcon" style={iconstyles}
                    alt=""
                    src="https://user-images.githubusercontent.com/45563022/90330082-cbdd8600-dfc7-11ea-998d-d3ebfeb3728c.png"
                />
            </a>
            <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
                <img
                    className="socialHandleIcon" style={iconstyles}
                    alt=""
                    src="https://user-images.githubusercontent.com/45563022/90330101-edd70880-dfc7-11ea-9a1b-ed15bd2b52f4.png"
                />
            </a>
            <a href="https://medium.com/" rel="noreferrer" target="_blank">
                <img
                    className="socialHandleIcon" style={iconstyles}
                    alt=""
                    src="https://user-images.githubusercontent.com/45563022/90330143-1bbc4d00-dfc8-11ea-8aab-39f0e04f7e91.png"
                />
            </a>
            <a href="https://www.youtube.com/" rel="noreferrer" target="_blank">
                <img
                    className="socialHandleIcon" style={iconstyles}
                    alt=""
                    src="https://user-images.githubusercontent.com/45563022/90330161-4d351880-dfc8-11ea-93a3-72f45d58dcdb.png"
                />
            </a>
        </div>
    )
}

export default Socialmedia