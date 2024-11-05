
export const saveUserData = (user) => {
    localStorage.setItem('id', user._id);
    localStorage.setItem('username', user.username);
    localStorage.setItem('email', user.email);
    localStorage.setItem('accountType', user.accountType);
    localStorage.setItem('photo', user.photo);
};
