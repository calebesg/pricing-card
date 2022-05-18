import { PricingItem } from '../PricingItem';

export function PricingList() {
  return (
    <ul className="w-full flex flex-col items-center gap-8 mt-20">
      <PricingItem />
      {/* <PricingItem /> */}
    </ul>
  );
}
