import axios from 'axios';

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export class HttpClient {
  static formData(data: any) {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    return formData;
  }

  static async get<T>(url: string, params?: any, options?: any) {
    const response = await axios.get<T>(url, { params, ...options });
    return response.data;
  }

  static async post<T>(url: string, data: any, options?: any) {
    const response = await axios.post<T>(
      url,
      options ? data : this.formData(data),
      options ?? { headers: { 'Content-Type': 'application/json' } }
    );
    return response.data;
  }

  static async put<T>(url: string, data: any) {
    const response = await axios.put<T>(url, data);
    return response.data;
  }

  static async patch<T>(url: string, data: any) {
    const response = await axios.patch<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string) {
    const response = await axios.delete<T>(url);
    return response.data;
  }
}
