import {Link, Redirect, withRouter} from 'react-router-dom'
import {useState} from 'react'
import Cookies from 'js-cookie'
import './index.css'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [pwd, setPassword] = useState('')
  const [res, setResult] = useState('')

  const changeUserName = event => {
    setUsername(event.target.value)
  }

  const changePassword = event => {
    setPassword(event.target.value)
    const regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const result = regexPattern.test(pwd)
    if (result === true) {
      setResult('')
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const result = regexPattern.test(pwd)
    if (pwd.length > 0 && username.length > 0) {
      Cookies.set('result', 'success')
      // Redirect('/signup')
    } else {
      setResult('*Inputs should not be empty')
    }
    const localStorageData = await localStorage.getItem('loginuser')
    const parseData = await JSON.parse(localStorageData)
    const lsData = await parseData.map(eachItem => eachItem)

    const duplicateDate = lsData.find(item => item.name === username)
    if (duplicateDate) {
      alert('Username already exists')
      setUsername('')
      setPassword('')
    } else {
      const updatedData = [...lsData, {name: username, password: pwd}]
      //   console.log('updatedData=', updatedData)
      localStorage.setItem('loginuser', JSON.stringify(updatedData))
      alert('User signup successfully')
      setUsername('')
      setPassword('')
    }
  }

  return (
    <div className="bg">
      <div className="sign-up-img-container">
        <img
          src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?size=626&ext=jpg&ga=GA1.1.880431674.1693480023&semt=sph"
          className="sign-up-img"
          alt="sign-up-img"
        />
      </div>
      <form className="form-container-sign">
        <img
          src="https://i.ibb.co/fpHjzb3/157791144-padded-logo-removebg.png"
          alt="website logo"
          className="website-logo"
        />
        <center>
          <h1 className="heading-signup">Signup</h1>
        </center>
        <div className="input-container">
          <label htmlFor="username" className="input-label">
            USERNAME
          </label>
          <input
            id="username"
            type="text"
            onChange={changeUserName}
            value={username}
            className="username-input-field"
            placeholder="Username"
          />
        </div>
        <div className="input-container">
          <label htmlFor="mail" className="input-label">
            Email
          </label>
          <input
            id="mail"
            type="text"
            className="username-input-field"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="input-label">
            PASSWORD
          </label>
          <input
            id="password"
            type="password"
            onChange={changePassword}
            value={pwd}
            className="password-input-field"
            placeholder="Password"
          />
        </div>

        <button type="submit" onClick={handleSubmit} className="submit-button">
          Signup
        </button>
        <p className="res">{res}</p>

        {/* <span className="user-info">Existing User?</span> */}
        <Link to="/login">
          <p className="login-button-signup-page">Login</p>
        </Link>

        {/* <img src={img2} alt="no-data" className="l-image" /> */}
      </form>
    </div>
  )
}

export default withRouter(Signup)
