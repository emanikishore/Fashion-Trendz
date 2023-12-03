import {Component} from 'react'
import {Link, Redirect, withRouter} from 'react-router-dom'
import './index.css'

class PlaceOrder extends Component {
  state = {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    submitForm: false,
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeMail = event => {
    this.setState({email: event.target.value})
  }

  changeState = event => {
    this.setState({state: event.target.value})
  }

  changeStreet = event => {
    this.setState({street: event.target.value})
  }

  changeZip = event => {
    this.setState({zip: event.target.value})
  }

  changeCity = event => {
    this.setState({city: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const {name, email, street, city, state, zip, submitForm} = this.state
    if (
      name.length > 0 &&
      email.length > 0 &&
      street.length > 0 &&
      city.length > 0 &&
      state.length > 0 &&
      zip.length > 0
    ) {
      console.log('success')
      this.setState({submitForm: true})
    } else {
      alert('Please the fill the details')
    }
  }

  render() {
    const {name, street, city, state, zip, email, submitForm} = this.state
    return (
      <div>
        <div className="address-page">
          <h2>Shipping Address</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={this.changeName}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mail">Email Address:</label>
              <input
                type="text"
                id="mail"
                name="mail"
                value={email}
                onChange={this.changeMail}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="street">Street Address:</label>
              <input
                type="text"
                id="street"
                name="street"
                value={street}
                onChange={this.changeStreet}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={this.changeCity}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                value={state}
                onChange={this.changeState}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">ZIP Code:</label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={zip}
                onChange={this.changeZip}
                required
              />
            </div>
            <div className="button-container">
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="place-order-button"
              >
                Place Order
              </button>{' '}
              {submitForm ? <Redirect to="/success" /> : ''}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(PlaceOrder)
