function ToInteger (n) {
  n = +n;
  return n !== n ? 0 : roundToZero(n);
}

function ToInt32 (n) {
  return n >> 0;
}

function ToInt16 (n) {
  return (n << 16) >> 16;
}

function ToInt8 (n) {
  return (n << 24) >> 24;
}

function ToUInt32 (n) {
  return n >>> 0;
}

function ToUInt16 (n) {
  return n & 0xFFFF;
}

function ToUInt8 (n) {
  return n & 0xFF;
}

function ToUint8Clamp (argument) {
  var number = +argument;
  if (number !== number) return 0;
  if (number <= 0) return 0;
  if (number >= 255) return 255;
  return roundHalfToEven(number);
}

function SameValueZero (x, y) {
  return x === y || (x !== x && y !== y);
}

function ToLength (argument) {
  var len = ToInteger(argument);

  if (len <= 0) {
    return 0;
  }

  return Math.min(len, Number.MAX_SAFE_INTEGER);
}
