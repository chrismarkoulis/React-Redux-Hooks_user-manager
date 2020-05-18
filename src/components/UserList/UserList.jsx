import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelected } from '../../store/_actions/userActions';
import './UserList.css';
import UserRow from '../UserRow/UserRow';



const UserList = ({ users }) => {
    const selected = useSelector(state => state.userReducer.selected);

    const dispatch = useDispatch();

    return (<div className="userList">
        <div className="container-fluid">
            <div className="row user-display">

                <div className="col-12 users-panel">
                    {users.map(user => (
                        <UserRow
                            key={user.id}
                            user={user}
                            active={user === selected}
                            handleClick={() => { dispatch(setSelected(user)) }}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>)

}

export default UserList