export default function formatCurrency(currency, value) {
  const currencies = {
    usd: value => `USD ${parseFloat(value).toFixed(2)}`,
    nzl: value => `NZL ${(parseFloat(value) * 1.44).toFixed(2)}`,
    aus: value => `AUS ${(parseFloat(value) * 1.36).toFixed(2)}`
  };
  return currencies[currency](value);
}
