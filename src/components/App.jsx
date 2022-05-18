import { ToggleButton } from './ToggleButton';
import { PricingList } from './PricingList';

export function App() {
  return (
    <main className="min-h-screen flex flex-col justify-start items-center pt-16 relative overflow-hidden h-full">
      <h1 className="w-0 h-0 overflow-hidden opacity-0">Pricing Component</h1>

      <h2 className="text-grayish-400 text-3xl">Our Pricing</h2>
      <ToggleButton labels={{ left: 'Annually', right: 'Monthly' }} />

      <PricingList />
    </main>
  );
}
