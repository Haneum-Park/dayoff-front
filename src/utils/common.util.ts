'use client';

export const isProduction = (process.env.NODE_ENV || 'development') === 'production';

export function objToQuery<T extends Record<string, any>>(obj: T): string {
  const query: string[] = [];
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (typeof obj[key] !== 'object') {
      query.push(`${key}=${obj[key]}`);
    }
  });
  return query.join('&');
}

export function queryToObj<T>(query: string): T {
  const obj: T = {} as T;
  const queries = query.replace('?', '').split('&');
  queries.forEach((q) => {
    const [key, value] = q.split('=') as [string, any];
    obj[key as keyof T] = value;
  });
  return obj as T;
}

export const localstorage = {
  setItem: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};

export const cookies = {
  set: (key: string, value: string, expTime?: number) => {
    const expires = expTime ? `expires=${new Date(Date.now() + expTime).toUTCString()}` : '';
    const cookie = [`${key}=${value}`, expires, 'path=/'];
    document.cookie = cookie.join('; ');
  },
  get: (key: string): string | null | undefined => {
    if (typeof document === 'undefined') return null;
    const value = document?.cookie.match(`(^|;) ?${key}=([^;]*)(;|$)`);
    return value ? value[2] : null;
  },
  del: (key: string) => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  },
};

export const regex = {
  // ? email
  email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
  // ? phone number xxx-xxxx-xxxx
  phone: /^\d{3}-\d{3,4}-\d{4}$/,
  // ? name (한글)
  name: /^[가-힣]{2,10}$/,
};

export function dataURLtoFile(dataurl: string, fileName: string): File | null {
  if (dataurl) {
    const arr = dataurl.split(',') as string[] | any[];
    if (arr && typeof arr === 'object' && arr.length > 0) {
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = window.atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);

      // eslint-disable-next-line no-plusplus
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], fileName, { type: mime });
    }
  }
  return null;
}

export function generateMasking(str: string, start?: number, end?: number): string {
  const s = start || parseInt(`${str.length / 2 - 2}`, 10);
  const e = end || s;
  const re = new RegExp(`(?<=.{${s}}).(?=.*.{${e}})`, 'g');
  return str.replace(re, '*');
}

export function cloneDeep<T>(obj: any): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => cloneDeep(item)) as T;
  }
  const clonedObj: Record<string, any> = {};
  Object.keys(obj).forEach((key) => {
    clonedObj[key] = cloneDeep(obj[key]);
  });
  return clonedObj as T;
}