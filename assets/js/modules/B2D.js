export default class B2D {
  static convert(binary) {
    let decimal = 0;

    let input = String(binary);

    let length = input.length;

    let msb = length - 1;

    let iterator = 0;

    while (iterator < length) {
      decimal += input.charAt(iterator) * Math.pow(2, msb);

      msb--;

      iterator++;
    }

    return decimal;
  }
}
