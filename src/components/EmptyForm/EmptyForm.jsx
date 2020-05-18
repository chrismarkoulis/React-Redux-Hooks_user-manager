import React, { useState} from 'react'
import '../UserForm/UserForm.css';


const EmptyForm = () => {
    const initialState = { name: '', company: '', email: '', phone: '', address: '' }
    const [user, setUser] = useState(initialState)

  

    const handleInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <form>
            <h3 className="form-field-title">Name</h3>
            <label htmlFor="name">
                <input type="text" name="name" id="name" value={user.name} onChange={handleInputChange} />
            </label>
            <h3 className="form-field-title">Email adress</h3>
            <label htmlFor="email">
                <input type="email" name="email" id="email" value={user.email} onChange={handleInputChange} />
            </label>
            <h3 className="form-field-title">Phone</h3>
            <label htmlFor="phone">
                <input type="tel" name="phone" id="phone" value={user.phone} onChange={handleInputChange} />
            </label>
            <h3 className="form-field-title">Address</h3>
            <label htmlFor="address">
                <input type="text" name="address" id="address" value={user.address} onChange={handleInputChange} />
            </label>
            <h3 className="form-field-title">Company</h3>
            <label htmlFor="company">
                <input type="text" name="company" id="company" value={user.company} onChange={handleInputChange} />
            </label>
            <div className="buttons">
                <button type="button" disabled={initialState} className="btn button-submit disabled-button">Save</button>
            </div>

        </form>
    )
}

export default EmptyForm
