const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[cloneSymbol] = true;
  }

  cloneCar() {
    const cloneCar = Object.create(Object.getPrototypeOf(this));
    for (let prop of Object.getOwnPropertyNames(this)) {
      if (this[prop][cloneSymbol]) continue;
      Object.defineProperty(cloneCar, prop, Object.getOwnPropertyDescriptor(this, prop));
    }
    return cloneCar;
  }
}
