// es kann maximal 1 default export geben
export default class User {
  constructor(fn, ln) {
    this.fn = fn;
    this.ln = ln;
  }

  get fullName() {
    return `${this.fn} ${this.ln}`;
  }
}
