import { userConstants } from '../constants';

let userDetails = JSON.parse(localStorage.getItem('user'));
const initialState = userDetails ? { loggedIn: true, userDetails } : {};

export function authentication(state = initialState, action: any) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return Object.assign({}, state, {
                loggingIn: true,
            });
        case userConstants.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                loggedIn: true,
                userDetails: state.userDetails = action.user
            });
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}