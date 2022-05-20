import { useEffect, useState } from 'react';

import { ToggleButton } from './ToggleButton';
import { PricingList } from './PricingList';

const data = [
  {
    label: 'Basic',
    price: 1999900,
    features: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'],
  },
  {
    label: 'Professional',
    price: 2499900,
    features: ['1 TB Storage', '5 Users Allowed', 'Send up to 10 GB'],
  },
  {
    label: 'Master',
    price: 3999900,
    features: ['2 TB Storage', '10 Users Allowed', 'Send up to 20 GB'],
  },
];

export function App() {
  const [pricingList, setPricingList] = useState([]);

  useEffect(() => updatePrice(true), []);

  const updatePrice = function (type) {
    const newData = data.map(item => {
      let price = type ? item.price / 100 : (item.price / 100) * 10;

      price = price.toLocaleString().slice(0, -1);

      return { ...item, price };
    });

    setPricingList(newData);
  };

  return (
    <main className="min-h-screen flex flex-col justify-start items-center py-16 relative overflow-hidden h-full">
      <h1 className="w-0 h-0 overflow-hidden opacity-0">Pricing Component</h1>

      <h2 className="text-grayish-400 text-3xl">Our Pricing</h2>
      <ToggleButton
        onChange={updatePrice}
        labels={{ left: 'Annually', right: 'Monthly' }}
      />
      <PricingList allPricing={pricingList} />
    </main>
  );
}
