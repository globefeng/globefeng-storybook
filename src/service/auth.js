
import axios from 'axios';

// const serverUrl = 'https://localhost:44358/';
const serverUrl = 'http://stockapi.somee.com/';

export const AuthService = {
    login,
    register,
    confirmEmail,
    changePassword,
    sendResetCode,
    resetPassword,
    getUserInfo,
    loadUsers,
    setUserInfo
};

function login(username, password) {
  return axios.post(serverUrl + "users/authenticate", {username, password}, {
      'Content-Type': 'application/json;charset=UTF-8',
  });
}

function loadUsers(token) {
  return axios({
    method: 'get',
    url: serverUrl + 'Users',
    headers: {'Authorization': 'bearer ' + token}
});
}

function register(email, password) {
    return axios.post(serverUrl + "Users", {username: email, password});
}

function confirmEmail(email, code) {
  return axios.post(serverUrl + "users/confirmEmail", {username: email, password: code}, {
    'Content-Type': 'application/json;charset=UTF-8'});
}

function resetPassword(email, resetcode, password) {
    return axios.post(serverUrl + "api/Users/resetpassword", {username: email, resetcode, password});
}

function changePassword(password, newpassword, token) {
    return axios({
        method: 'post',
        url: serverUrl + 'api/Users/changepassword',
        data: {password, newpassword},
        headers: {'Authorization': 'bearer ' + token}
    });
}

function sendResetCode(username) {
  return axios.post(serverUrl + "users/forgetPassword", {username, password: '123'}, {
    'Content-Type': 'application/json;charset=UTF-8',
  })
}

function getUserInfo() {
  let loginTime = localStorage.getItem('loginTime');
  let userInfo = null;
  if (loginTime) {
      let currentTime = new Date().getTime();
      if ((currentTime - loginTime) < 8 * 3600000) {  // 8 hours
          let loginUserInfo = localStorage.getItem('loginUserInfo');
          if (loginUserInfo) {
              userInfo = JSON.parse(loginUserInfo);
          }
      }
      else {
        localStorage.removeItem("loginUserInfo");
        localStorage.removeItem("loginTime");
      }
  }
  return userInfo;
}

function setUserInfo(userInfo) {
  localStorage.setItem("loginUserInfo", userInfo);
  localStorage.setItem("loginTime", new Date().getTime());
}
