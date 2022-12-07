import { ApiService } from "./ApiService";

class AuthService extends ApiService {
  constructor() {
    super();
    this.setAxiosAuthorizationHeader();
  }

  setAxiosAuthorizationHeader(tokenParam = null) {
    let token = tokenParam ? tokenParam : localStorage.getItem("token");
    if (token) {
      this.client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }

  getToken = () => {
    let tokenJSON = localStorage.getItem("token");
    const token = JSON.parse(tokenJSON);
    return token;
  };

  login = async (data) => {
    try {
      let response = await this.client.post("/login", data);
      if (response.data) {
        localStorage.setItem("token", response.data.authorisation.token);
        this.setAxiosAuthorizationHeader(response.data.authorisation.token);
        return response.data;
      }
    } catch (e) {
      console.error(e);
    }
  };

  register = async (newUser) => {
    try {
      let response = await this.client.post("/register", {
        first_name: newUser.firstName,
        last_name: newUser.lastName,
        password_confirmation: newUser.passwordConfirmation,
        ...newUser,
      });
      if (response.data) {
        localStorage.removeItem("token");
        localStorage.setItem("token", response.data.authorisation.token);
        this.setAxiosAuthorizationHeader(response.data.authorisation.token);
        return response.data;
      }
    } catch (e) {
      console.error(e);
    }
  };
}
export const authService = new AuthService();
