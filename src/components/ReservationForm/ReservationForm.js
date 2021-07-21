import React, {component} from 'react'

class ReservationForm extends component {
    constructor() {
        super()
        this.state = {
            name:'',
            date:'',
            time:'',
            number: 0
        }
    }
}

export default ReservationForm