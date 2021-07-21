import React from 'react'
import './Reservation.css'

const Reservation = ({reservationInfo}) => {
    const {name, date, time, number} = reservationInfo;
    return (
        <article className='reservation-card'>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{time}</p>
            <p>Number of guests: {number}</p>
            <button>Cancel</button>
        </article>
    )
}

export default Reservation