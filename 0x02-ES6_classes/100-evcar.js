import Car from './10-car';

export default class EVCar {
  constructor(brand, motor, color, range) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    if (typeof value !== 'string') throw new TypeError('Brand must be a string');
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    if (typeof value !== 'string') throw new TypeError('Motor must be a string');
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    if (typeof value !== 'string') throw new TypeError('Color must be a string');
    this._color = value;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    if (typeof value !== 'string') throw new TypeError('Range must be a string');
    this._range = value;
  }

  cloneCar() {
    return new Car();
  }
}
