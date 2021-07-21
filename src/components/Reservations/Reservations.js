import React from 'react'

const Reservations = ({reservationData}) => {
    const reservations = reservationData.map(reservation => <Reservation key={reservation.id} reservationInfo={reservation}/>)
    return (
        <section>
            {reservations}
        </section>
    )
}

export default Reservations