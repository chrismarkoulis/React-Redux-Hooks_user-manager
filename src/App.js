import React, { useEffect, Fragment } from 'react';
import './App.css';

import { UserList, UserForm, EmptyForm } from './components';

import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from './store/_actions/userActions';



const App = () => {

  const users = useSelector(state => state.userReducer.users);
  const editing = useSelector(state => state.userReducer.editing)

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUsers()); 
  }, [])
  

  return (
   <div>
      <div className="container">
        <div className="adminPanel">
          <UserList users={users} />
          {editing ? (<Fragment>
            <UserForm />
          </Fragment>) : (<Fragment>
            <EmptyForm />
          </Fragment>)}
        </div>
      </div>
    </div>
  )



}

export default App;
