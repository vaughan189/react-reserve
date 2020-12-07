export function setUserDetails(userDetails: any) {
    localStorage.setItem('user', JSON.stringify(userDetails));
};

export function getUserDetails() {
    return localStorage.getItem('user') || '{}';
};

export function removeUserDetails() {
    localStorage.removeItem("user");
}