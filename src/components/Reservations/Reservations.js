import React from 'react'
import Reservation from '../Reservation/Reservation'
import './Reservations.css'

const Reservations = ({reservationData}) => {
    const reservations = reservationData.map(reservation => <Reservation key={reservation.id} reservationInfo={reservation}/>)
    return (
        <section className='reservation-container'>
            {reservations}
        </section>
    )
}

export default Reservations