function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  const OVERTIME_MULTIPLIER = 1.5;
  if (hours <= 8) {
    return Math.round(hours * rate);
  }
  const overtimeHours = hours - 8;
  return Math.round(8 * rate + overtimeHours * rate * OVERTIME_MULTIPLIER);
}

module.exports = { isValidShift, calculatePay };
