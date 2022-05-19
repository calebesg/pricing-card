export function PricingItem({ active, pricing }) {
  const renderFeatureItem = pricing.features.map((item, index) => {
    return (
      <li
        key={index}
        className="border-t border-b border-grayish-200 -mt-px flex justify-center p-5"
      >
        {item}
      </li>
    );
  });

  return (
    <li
      className={`p-7 rounded-lg flex flex-col items-center max-w-xs w-full xl:max-w-sm ${
        active
          ? 'bg-gradient-to-br from-blue-200 to-blue-400 text-white xl:py-12'
          : 'bg-white text-grayish-400'
      }`}
    >
      <span className="text-base">{pricing.label}</span>

      <p
        className={`text-6xl flex items-center mt-9 ${
          active ? 'text-white' : 'text-grayish-600'
        }`}
      >
        <small className="text-4xl">$</small>
        {pricing.price}
      </p>

      <ul className="mt-10 w-full">{renderFeatureItem}</ul>

      <button
        type="button"
        className={`h-11 mt-8 w-full rounded-lg border transition-all duration-400 ${
          active
            ? 'bg-white text-blue-400 hover:bg-transparent hover:border-white hover:text-white'
            : 'bg-gradient-to-r from-blue-200 to-blue-400 text-white hover:from-white hover:to-white hover:text-blue-400 hover:border-blue-400'
        }`}
      >
        LEARN MORE
      </button>
    </li>
  );
}
