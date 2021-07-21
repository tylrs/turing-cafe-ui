import React from 'react'

const Reservation = ({reservationInfo}) => {
    const {name, date, time, number} = reservationInfo;
    return (
        <article>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{time}</p>
            <p>Number of guests: {number}</p>
            <button>Cancel</button>
        </article>
    )
}

export default Reservation