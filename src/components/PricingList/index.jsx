import { PricingItem } from '../PricingItem';

export function PricingList({ allPricing }) {
  return (
    <ul className="w-full flex flex-col items-center gap-8 mt-20">
      {allPricing.map((pricing, index) => (
        <PricingItem
          key={index}
          active={pricing.label === 'Professional'}
          pricing={pricing}
        />
      ))}
    </ul>
  );
}
