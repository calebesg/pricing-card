import { useState } from 'react';
import './style.css';

export function ToggleButton({ labels, onChange }) {
  const [checked, setChecked] = useState(true);

  const handleUpdateCheck = function (value) {
    setChecked(value);
    onChange(value);
  };

  return (
    <div className="flex items-center gap-6 text-grayish-200 mt-10">
      <label htmlFor="pricing">{labels.left}</label>

      <button
        className={`c-toggle ${checked ? 'c-toggle--checked' : ''}`}
        onClick={e => handleUpdateCheck(!checked)}
      >
        <span className="w-6 h-6 rounded-full bg-white inline-block"></span>
      </button>

      <label htmlFor="pricing">{labels.right}</label>
    </div>
  );
}
