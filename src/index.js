export decorator @logged {
  @wrap(f => {
    const name = f.name;
    function wrapped(...args) {
      f.call(this, ...args);
    }
    wrapped.name = name;
    return wrapped;
  })
}

// import { @logged } from "./logged.mjs";

class C {
  @logged
  method(arg) {
    this.#x = arg;
  }

  @logged
  set #x(value) { }
}

new C().method(1);
// starting method with arguments 1
// starting set #x with arguments 1
// ending set #x
// ending method