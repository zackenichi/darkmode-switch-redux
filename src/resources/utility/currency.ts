const formatCurrency = (amount: number, currencySymbol: string): string => {
  const formattedNumber = amount.toLocaleString();
  return `${currencySymbol}${formattedNumber}`;
};

export { formatCurrency };
