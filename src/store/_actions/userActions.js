import {
    GET_USERS,
    UPDATE_USER,
    SELECTED_USER,
    END_EDITING
} from './types'
import users from '../../data.json';


export const getUsers = () => async dispatch => {
    try {
        dispatch({
            type: GET_USERS,
            payload: users
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = user => dispatch => {
    try {
       dispatch({
           type: UPDATE_USER,
           payload: user
       })        
    } catch (error) {
        console.log(error);
    }
}

export const setSelected = user => dispatch => {
    dispatch({
        type: SELECTED_USER,
        payload: user
    })
}

export const endEditing = () => dispatch => {
    dispatch({
        type: END_EDITING
    })
}