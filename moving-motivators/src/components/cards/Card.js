import React from 'react'

const Card = ({ card }) => {
    return (
        <div className="card">
            <img src={card.src} alt="" />
        </div>
    )
}

export default Card
