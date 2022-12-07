import { ApiService } from "./ApiService";

class AuthService extends ApiService {
  constructor() {
    super();
    const localToken = this.getToken();
    this.setAxiosAuthorizationHeader(localToken);
  }

  setAxiosAuthorizationHeader(tokenParam = null) {
    let token = tokenParam ? tokenParam : localStorage.getItem("token");
    if (token) {
      this.client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }

  getToken = () => {
    let tokenJSON = localStorage.getItem("token");
    return tokenJSON;
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

  logout = async () => {
    let response = await this.client.post("/logout");
    if (response.data) {
      localStorage.removeItem("token");
    }
  };
}
export const authService = new AuthService();
