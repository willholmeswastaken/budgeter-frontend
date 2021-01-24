export const CalculateBudget = (income) => ({
  spending: ((20 / 100) * income).toFixed(2),
  savings: ((30 / 100) * income).toFixed(2),
  bills: ((50 / 100) * income).toFixed(2),
});
