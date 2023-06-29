function plusOne(digits: number[]): number[] {
  const lastDigit: number = digits[digits.length - 1];
  
  if (lastDigit < 9) {
    digits[digits.length - 1]++;
    return digits;
  } else if (digits.length === 1) {
    return [1, 0];
  } else {
    let indexToCheck: number = digits.length - 1;

    while (true) {
      digits[indexToCheck] = 0;
      indexToCheck--;

      if (indexToCheck < 0) {
        digits.unshift(1);
        break;
      }

      if (digits[indexToCheck] < 9) {
        digits[indexToCheck]++;
        break;
      }
    }

    return digits;
  }
}