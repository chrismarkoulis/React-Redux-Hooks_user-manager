import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelected, updateUser, endEditing } from '../../store/_actions/userActions';
import './UserForm.css';

const UserForm = () => {

  const selected = useSelector(state => state.userReducer.selected)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setSelected(selected))
  }, [])
  

  const [disableButton, setDisableButton] = useState(true);
  const [hideButton, setHideButton] = useState(true);



  const handleInputChange = e => {

    dispatch(setSelected({...selected, [e.target.name]: e.target.value}))

    setDisableButton(false)
    setHideButton(false)
  }


  const onCancel = () => {
    dispatch(endEditing())
  }


  return (<form onSubmit={event => {
    event.preventDefault()
    dispatch(updateUser(selected))
  }}>
    <h3 className="form-field-title">Name</h3>
    <label htmlFor="name">
      <input type="text" name="name" id="name" value={selected.name} onChange={handleInputChange} />
    </label>
    <h3 className="form-field-title">Email adress</h3>
    <label htmlFor="email">
      <input type="email" name="email" id="email" value={selected.email} onChange={handleInputChange} />
    </label>
    <h3 className="form-field-title">Phone</h3>
    <label htmlFor="phone">
      <input type="tel" name="phone" id="phone" value={selected.phone} onChange={handleInputChange} />
    </label>
    <h3 className="form-field-title">Address</h3>
    <label htmlFor="address">
      <input type="text" name="address" id="address" value={selected.address} onChange={handleInputChange} />
    </label>
    <h3 className="form-field-title">Company</h3>
    <label htmlFor="company">
      <input type="text" name="company" id="company" value={selected.company} onChange={handleInputChange} />
    </label>
    <div className="buttons">
      <button onClick={onCancel} disabled={disableButton} type="button" hidden={hideButton} className="btn button-cancel">Cancel</button>
      <button type="submit" disabled={disableButton} className="btn button-submit">Save</button>
    </div>
  </form>
  )


}

export default UserForm
