import Cookie from 'cookie-universal';
const cookies = Cookie();

export function setCookie(name: string, value: any, age?: number) {
  cookies.set(name, value, {
    maxAge: age || 60 * 60 * 24 * 7
  });
}

export function getCookie(name: string) {
  return cookies.get(name);
}

export function removeCookie(name: string) {
  cookies.remove(name);
}
