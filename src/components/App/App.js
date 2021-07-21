import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations'
import ReservationForm from '../ReservationForm/ReservationForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => {
      this.setState({
        reservations: data
      })
    })
    .catch(error => {
      this.setState({
        error
      })
    })
  }

  addReservation = (newReservation) => {
    this.setState({
      reservations: [...this.state.reservations, newReservation]
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservationData={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
