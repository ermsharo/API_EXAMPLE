export const isLogged = () => {
  if (localStorage.getItem("logged")) {
    if (localStorage.getItem("logged") == "true") {
      return true;
    }
    return false;
  }
  return false;
};

export const getUserInfo = () => {
  return {
    id: localStorage.getItem("id"),
    user: localStorage.getItem("user"),
  };
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const logout = () => {
  localStorage.clear();
};

export const saveUserInfo = (id: string, token: string, user: string) => {
  localStorage.setItem("id", id);
  localStorage.setItem("user", user);
  localStorage.setItem("token", token);
  localStorage.setItem("logged", "true");
};
