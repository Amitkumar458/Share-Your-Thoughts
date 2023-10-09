import React from 'react'
import { format} from 'date-fns'

const Showpost = ({name , description , date , title}) => {
   const d = format(new Date(date), 'MM/dd/yyyy')

    return (
        <div className="card">
            <div className="main-content">
                <div className="header">
                    <span>Article on</span>
                    <span>{d}</span>
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