import { userConstants } from '../constants';

const initialState: any = {
    userList: []
};

export function users(state = initialState, action: any) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case userConstants.GETALL_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                userList: state.userList.concat(action.users)
            });
        case userConstants.GETALL_FAILURE:
            return {
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}