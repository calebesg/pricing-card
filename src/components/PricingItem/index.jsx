export function PricingItem() {
  const feature = ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'];

  const renderFeatureItem = feature.map((item, index) => {
    return (
      <li
        key={index}
        className="border-t border-b border-grayish-200 -mt-px flex justify-center p-5 text-grayish-400"
      >
        {item}
      </li>
    );
  });

  return (
    <li className="p-7 rounded-lg bg-white flex flex-col items-center max-w-xs w-full">
      <span className="text-grayish-400 text-sm">Master</span>

      <p className="text-grayish-600 text-6xl flex items-center mt-9">
        <small className="text-4xl">$</small>
        19,99
      </p>

      <ul className="mt-10 w-full">{renderFeatureItem}</ul>

      <button
        type="button"
        className="h-11 mt-8 w-full rounded-lg border bg-gradient-to-r from-blue-200 to-blue-400 text-white hover:from-white hover:to-white hover:text-blue-400 hover:border-blue-400 transition-all duration-400"
      >
        LEARN MORE
      </button>
    </li>
  );
}
