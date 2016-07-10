alert('foo');

class Foo {
  constructor() {
    this.text = Symbol('foo');
  }
}

export default new Foo();
