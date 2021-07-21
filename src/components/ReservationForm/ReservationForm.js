import React, {Component} from 'react'

class ReservationForm extends Component {
    constructor() {
        super()
        this.state = {
            name:'',
            date:'',
            time:'',
            number: 0
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
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
                    onChange = {(event) => this.handleChange(event)}
                />
            </label>
            <label>
                <input 
                    type='text'
                    placeholder='Date (mm/dd)'
                    name='date'
                    value={this.state.date}
                    onChange = {(event) => this.handleChange(event)}
                />
            </label>
            <label>
                <input 
                    type='text'
                    placeholder='Time'
                    name='time'
                    value={this.state.time}
                    onChange = {(event) => this.handleChange(event)}
                />
            </label>
            <label>
                <input 
                    type='number'
                    placeholder='Number of Guests'
                    name='number'
                    value={this.state.number}
                    onChange = {(event) => this.handleChange(event)}
                />
            </label>
            <button>Make Reservation</button>
        </form>

        )
    }
}

export default ReservationForm