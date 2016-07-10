alert('bar');

class Bar {
  constructor() {
    this.text = Symbol('bar');
  }
}

export default new Bar();
