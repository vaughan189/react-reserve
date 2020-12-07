export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user && user.token) {
        return new Headers({
            'Authorization': 'Bearer ' + user.token,
            'Content-Type': 'application/x-www-form-urlencoded'
        });
    } else {
        return {};
    }
}