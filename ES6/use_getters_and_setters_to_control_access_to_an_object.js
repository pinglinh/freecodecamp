function makeClass() {
  "use strict";
  class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
    }
    get temperature() {
      return (5 / 9) * (this._fahrenheit - 32);
    }

    set temperature(temperature) {
      this._fahrenheit = temperature;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
