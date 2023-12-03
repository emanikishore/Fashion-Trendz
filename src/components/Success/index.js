import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Success extends Component {
  render() {
    return (
      <div className="success-image-container">
        <img
          src="https://img.freepik.com/free-vector/order-confirmed-concept-illustration_114360-1486.jpg?size=626&ext=jpg&ga=GA1.1.880431674.1693480023&semt=ais"
          alt="order-placed"
        />
        <Link to="/">
          <button type="button" className="place-order-button">
            Continue Shopping
          </button>
        </Link>
      </div>
    )
  }
}

export default Success
