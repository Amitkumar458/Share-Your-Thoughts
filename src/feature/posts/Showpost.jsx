import React from 'react'

const Showpost = ({name , description , date , title}) => {
    return (
        <div class="card">
            <div class="main-content">
                <div class="header">
                    <span>Article on</span>
                    <span>{date}</span>
                </div>
                <p class="heading">{title}</p>
                <div class="categories">
                    {description}
                </div>
            </div>
            <div class="footer">
                by {name}
            </div>
        </div>
    )
}

export default Showpost;