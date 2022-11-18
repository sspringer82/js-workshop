const util = import('./util.mjs');

class User {
  constructor(fn, ln) {
    this.fn = fn;
    this.ln = ln;
  }

  get fullname() {
    return util.then((u) => {
      return `${this.fn} ${u.format(this.ln)}`;
    });
  }
}

module.exports = User;
