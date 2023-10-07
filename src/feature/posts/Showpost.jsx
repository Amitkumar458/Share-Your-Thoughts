import React from 'react'

const Showpost = ({name , description , date , title}) => {
    return (
        <div className="card">
            <div className="main-content">
                <div className="header">
                    <span>Article on</span>
                    <span>{date}</span>
                </div>
                <p className="heading">{title}</p>
                <div className="categories">
                    {description}
                </div>
            </div>
            <div className="footer">
                by {name}
            </div>
        </div>
    )
}

export default Showpost;