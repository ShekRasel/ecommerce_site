import React from 'react';

interface Props {
  amount: number | undefined;
  currency?: string;
  className: string;
}

function FormatedPrice({ className, currency = 'BDT', amount }: Props) {
  const formattedPrice = amount !== undefined
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
      }).format(amount)
    : 'N/A'; // Fallback for undefined amount

  return <div className={className}>{formattedPrice}</div>;
}

export default FormatedPrice;
