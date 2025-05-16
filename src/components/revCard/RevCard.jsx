import React from 'react'
import './RevCard.scss'

const RevCard = ({ title, value }) => {
    return (
        <div className='rev-card'>
            <p className='title'>{title}</p>
            <p className='value'>{value}</p>
        </div>
    )
}

export default RevCard