import React, {Component} from 'react'
import './ReservationForm.css'

class ReservationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            date:'',
            time:'',
            number: ''
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick(event) {
        event.preventDefault()
        const id = Date.now()
        const newReservation = {
            ...this.state,
            id
        }
        this.props.addReservation(newReservation)
    }

    render() {
        return (
        <form>
            <label name='name'>
                <input 
                    type='text'
                    placeholder='name'
                    name='name'
                    value={this.state.name}
                    onChange = {(event) => this.handleChange(event)}
                />
            </label>
            <label name='date'>
                <input 
                    type='text'
                    placeholder='Date (mm/dd)'
                    name='date'
                    value={this.state.date}
                    onChange = {(event) => this.handleChange(event)}
                />
            </label>
            <label name='time'>
                <input 
                    type='text'
                    placeholder='Time'
                    name='time'
                    value={this.state.time}
                    onChange = {(event) => this.handleChange(event)}
                />
            </label>
            <label name='number'>
                <input 
                    type='number'
                    placeholder='Number of Guests'
                    name='number'
                    value={this.state.number}
                    onChange = {(event) => this.handleChange(event)}
                />
            </label>
            <button onClick={(event) => this.handleClick(event)}>Make Reservation</button>
        </form>

        )
    }
}

export default ReservationForm