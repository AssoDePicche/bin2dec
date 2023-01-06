export default class B2D {
  static convert(binary) {
    var decimal = 0;
    var b = String(binary);
    var len = b.length;
    var j = len - 1;
    var i = 0;

    for (i; i < len; i++) {
      decimal += b.charAt(i) * Math.pow(2, j);
      j--;
    }

    return decimal;
  }
}
