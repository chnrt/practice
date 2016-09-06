const JSON = window.JSON;

class Storage {
  constructor(st) {
    this.st = st;
  }

  get(name) {
    let value = this.st.getItem(name);

    if (/^\{.*\}$/.test(value)) {
      value = JSON.parse(value);
    }

    return value;
  }

  set(name, value) {
    if (typeof value === 'object') {
      return this.st.setItem(name, JSON.stringify(value));
    }

    return this.st.setItem(name, value);
  }

  remove(name) {
    return this.st.removeItem(name);
  }
}

export const localStorage = new Storage(window.localStorage);

export const sessionStorage = new Storage(window.sessionStorage);
