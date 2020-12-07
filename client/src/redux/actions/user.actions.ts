import { userConstants } from '../constants';
import { userService } from '../../services';
import { alertActions } from './alert.actions';

const login = (username: any, password: any, history: any) => {
    return (dispatch: any) => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/home');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user: any) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user: any) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.LOGIN_FAILURE, error } }
}

const logout = () => {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

const getAll = () => {
    return (dispatch: any) => {
        dispatch(request());

        userService.getAll()
            .then((users: any) => dispatch(success(users)),
                (error: any) => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users: any) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error: any) { return { type: userConstants.GETALL_FAILURE, error } }
}

export const userActions = { login, logout, getAll };