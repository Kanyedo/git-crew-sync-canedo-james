function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  if (hours <= 8) {
    return Math.floor(hours * rate);
  }
  const overtimeHours = hours - 8;
  return Math.floor(8 * rate + overtimeHours * rate * 1.5);
}
module.exports = { isValidShift, calculatePay };
