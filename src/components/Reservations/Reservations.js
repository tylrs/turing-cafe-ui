import React from 'react'
import Reservation from '../Reservation/Reservation'

const Reservations = ({reservationData}) => {
    const reservations = reservationData.map(reservation => <Reservation key={reservation.id} reservationInfo={reservation}/>)
    return (
        <section>
            {reservations}
        </section>
    )
}

export default Reservations