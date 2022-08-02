import React, { useState, setState } from 'react';
import './style.css';
import Logo from '../Images/Forms.png'

function RegistrationForm() {

    const [firstName, setFirstName] = useState(null);
    const [email, setEmail] = useState(null);
    const [Mobile, setMobile] = useState(null);
    const [Country, setCountry] = useState(null);
    const [City, setCity] = useState(null);
    const [State, setState] = useState(null);
    const [Message, setMessage] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "Mobile") {
            setMobile(value);
        }
        if (id === "Country") {
            setCountry(value);
        }
        if (id === "City") {
            setCity(value);
        }
        if (id === "State") {
            setState(value);
        }
        if (id === "Message") {
            setMessage(value);
        }

    }

    const handleSubmit = () => {
        console.log(firstName, email, Mobile, Country, City, State, Message);
    }

    return (
        <form>
            <div class="form-row">
                <div class="col-lg-6">
                    <img src={Logo} width='50%' className="center" />
                </div>
                <div class="col-lg-6">
                    <div className="form">
                        <div className="form-body">
                            <div className="username">
                                <label className="form__label" for="firstName">First Name </label>
                                <input className="form__input" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
                            </div>
                            <div className="email">
                                <label className="form__label" for="email">Email </label>
                                <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                            </div>
                            <div className="Mobile">
                                <label className="form__label" for="Mobile"> Mobile </label>
                                <input type="text" name="" id="Mobile" value={Mobile} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="Mobile" />
                            </div>
                            <div className="Country">
                                <label className="form__label" for="password">Country </label>
                                <input className="form__input" type="Country" id="Country" value={Country} onChange={(e) => handleInputChange(e)} placeholder="Country" />
                            </div>
                            <div className="City">
                                <label className="form__label" for="City">City</label>
                                <input className="form__input" type="City" id="City" value={City} onChange={(e) => handleInputChange(e)} placeholder="City" />
                            </div>
                            <div className="State">
                                <label className="form__label" for="State">State</label>
                                <input className="form__input" type="State" id="State" value={State} onChange={(e) => handleInputChange(e)} placeholder="State" />
                            </div>
                            <div className="Message">
                                <label className="form__label" for="Message">Message</label>
                                <input className="form__input" type="Message" id="Message" value={Message} onChange={(e) => handleInputChange(e)} placeholder="Message" />
                            </div>
                        </div>
                        <div class="footer">
                            <button onClick={() => handleSubmit()} type="submit" class="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default RegistrationForm
