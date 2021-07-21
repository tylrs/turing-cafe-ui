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

    render() {
        return (
        <form>
            <label>
                <input 
                    type='text'
                    placeholder='name'
                    name='name'
                    value={this.state.name}
                    onChange = {(event) => handleChange(event)}
                />
            </label>
            <label>
                <input 
                    type='text'
                    placeholder='Date (mm/dd)'
                    name='date'
                    value={this.state.date}
                    onChange = {(event) => handleChange(event)}
                />
            </label>
            <label>
                <input 
                    type='text'
                    placeholder='Time'
                    name='time'
                    value={this.state.time}
                    onChange = {(event) => handleChange(event)}
                />
            </label>
            <label>
                <input 
                    type='number'
                    placeholder='Number of Guests'
                    name='number'
                    value={this.state.number}
                    onChange = {(event) => handleChange(event)}
                />
            </label>
            <button>Make Reservation</button>
        </form>

        )
    }
}

export default ReservationForm