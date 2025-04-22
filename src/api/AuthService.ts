import { urls } from '../constants/urls';
import axios from 'axios';

import { axiosInstance } from './AxiosInstance';

export class AuthService {
    public static async signup( email: string, password: string ) {
        const response = await axios.post(urls.signup, { email, password }, { withCredentials: true });
        return response.data;
    }

    public static async login( email: string, password: string ) {
      const response = await axios.post(urls.login, { email, password }, { withCredentials: true });
      return response.data;
    }

    public static async checkAuth(accessToken: string) {
        const response = await axiosInstance.post(urls.checkAuth, { accessToken }, { withCredentials: true });
        return response.data;
    }

    public static async logout() {
        await axios.post(urls.logout, {}, { withCredentials: true });
    }
}
