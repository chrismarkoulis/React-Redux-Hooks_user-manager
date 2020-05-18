import {
    GET_USERS,
    EDIT_USER,
    UPDATE_USER,
    SELECTED_USER,
    END_EDITING
} from '../_actions/types'

const initialState = {
    users: [],
    selected: null,
    editing: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                selected: null,
                users: action.payload,
                editing: false
            }
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.payload.id ? action.payload : user
                ),
                editing: false,
                selected: null
            }
        case SELECTED_USER:
            return {
                ...state,
                selected: action.payload,
                editing: true
            }
        case END_EDITING:
            return {
                ...state,
                selected: null,
                editing: false
            }    
        default:
            return state;

    }
}