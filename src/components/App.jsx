import { ToggleButton } from './ToggleButton';

export function App() {
  return (
    <main className="flex flex-col justify-start items-center pt-16 relative overflow-hidden h-full">
      <h1 className="sr-only">Pricing Component</h1>

      <h2 className="text-grayish-400 text-3xl">Our Pricing</h2>
      <ToggleButton labels={{ left: 'Annually', right: 'Monthly' }} />
    </main>
  );
}
