import { httpService } from "./HttpService";

export class ApiService {
  constructor() {
    this.client = httpService.client;
  }
}

export const apiService = new ApiService();
