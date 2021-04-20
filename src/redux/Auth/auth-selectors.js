// const getIsAuthenticated = state => state.autorization.token;
// меняем state
const getIsAuthenticated = state => state.autorization.isLogedIn;

const getUserName = state => state.autorization.user.name;

export default {
  getIsAuthenticated,
  getUserName,
};
