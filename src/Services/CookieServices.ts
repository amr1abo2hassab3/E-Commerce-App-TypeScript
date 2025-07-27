import Cookies, { type CookieSetOptions } from 'universal-cookie';

const cookies = new Cookies();

class CookiesService {
  // Get
  get(name: string) {
    return cookies.get(name);
  }

  // Set
  set(name: string, value: string | object | number | boolean, options?: CookieSetOptions) {
    return cookies.set(name, value, options);
  }

  // Remove
  remove(name: string, options?: CookieSetOptions) {
    return cookies.remove(name, options);
  }
}

export default new CookiesService();