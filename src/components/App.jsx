import { ToggleButton } from './ToggleButton';
import { PricingList } from './PricingList';
import { useEffect, useState } from 'react';

const data = [
  {
    label: 'Basic',
    price: 19.99,
    features: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'],
  },
  {
    label: 'Professional',
    price: 24.99,
    features: ['1 TB Storage', '5 Users Allowed', 'Send up to 10 GB'],
  },
  {
    label: 'Master',
    price: 39.99,
    features: ['2 TB Storage', '10 Users Allowed', 'Send up to 20 GB'],
  },
];

export function App() {
  const [pricingList, setPricingList] = useState([]);

  useEffect(() => setPricingList(data), []);

  return (
    <main className="min-h-screen flex flex-col justify-start items-center py-16 relative overflow-hidden h-full">
      <h1 className="w-0 h-0 overflow-hidden opacity-0">Pricing Component</h1>

      <h2 className="text-grayish-400 text-3xl">Our Pricing</h2>
      <ToggleButton labels={{ left: 'Annually', right: 'Monthly' }} />
      <PricingList allPricing={pricingList} />
    </main>
  );
}
